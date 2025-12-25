import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Loader2, 
  ArrowLeft, 
  LogOut, 
  Mail, 
  MessageSquare,
  RefreshCw,
  ShieldX,
  Inbox
} from 'lucide-react';
import { format } from 'date-fns';

interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
}

export default function Admin() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchMessages();
    }
  }, [isAdmin]);

  const fetchMessages = async () => {
    setLoadingMessages(true);
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: 'Error loading messages',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        setMessages(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 rounded-full bg-destructive/10 w-fit">
              <ShieldX className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-2xl font-mono">Access Denied</CardTitle>
            <CardDescription>
              You don't have admin privileges. Contact the site owner to get access.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            <Button onClick={handleSignOut} variant="ghost" className="text-muted-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Portfolio
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-mono font-bold">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-primary border-primary/30">
              <Mail className="mr-1 h-3 w-3" />
              {user?.email}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-mono flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Contact Messages
                  </CardTitle>
                  <CardDescription>
                    {messages.length} message{messages.length !== 1 ? 's' : ''} received
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fetchMessages}
                  disabled={loadingMessages}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${loadingMessages ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </CardHeader>
              <CardContent>
                {loadingMessages ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                    <Inbox className="h-12 w-12 mb-4 opacity-50" />
                    <p>No messages yet</p>
                  </div>
                ) : (
                  <div className="rounded-md border border-border/50 overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/30">
                          <TableHead>Sender</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {messages.map((msg) => (
                          <TableRow
                            key={msg.id}
                            className={`cursor-pointer transition-colors hover:bg-muted/30 ${
                              selectedMessage?.id === msg.id ? 'bg-muted/50' : ''
                            }`}
                            onClick={() => setSelectedMessage(msg)}
                          >
                            <TableCell>
                              <div>
                                <p className="font-medium">{msg.name}</p>
                                <p className="text-sm text-muted-foreground">{msg.email}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {msg.subject || '(No subject)'}
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              {format(new Date(msg.created_at), 'MMM d, yyyy')}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-1">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm sticky top-8">
              <CardHeader>
                <CardTitle className="font-mono text-lg">Message Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedMessage ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">From</p>
                      <p className="font-medium">{selectedMessage.name}</p>
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {selectedMessage.email}
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Subject</p>
                      <p>{selectedMessage.subject || '(No subject)'}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date</p>
                      <p>{format(new Date(selectedMessage.created_at), 'MMMM d, yyyy \'at\' h:mm a')}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Message</p>
                      <p className="whitespace-pre-wrap text-foreground/90">{selectedMessage.message}</p>
                    </div>

                    <Button
                      className="w-full mt-4"
                      onClick={() => window.open(`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Your message'}`)}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Reply via Email
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <MessageSquare className="h-8 w-8 mx-auto mb-3 opacity-50" />
                    <p>Select a message to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
