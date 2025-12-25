-- Add restrictive SELECT policy - no public reads allowed
-- Only service role (backend) can read messages
CREATE POLICY "No public read access to contact messages"
ON public.contact_messages
FOR SELECT
USING (false);

-- Add restrictive UPDATE policy - no public updates allowed
CREATE POLICY "No public update access to contact messages"
ON public.contact_messages
FOR UPDATE
USING (false);

-- Add restrictive DELETE policy - no public deletes allowed
CREATE POLICY "No public delete access to contact messages"
ON public.contact_messages
FOR DELETE
USING (false);