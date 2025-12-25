interface MarqueeProps {
  text: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
}

const Marquee = ({ text, speed = "normal", direction = "left", className = "" }: MarqueeProps) => {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "[animation-duration:10s]",
  };

  const animationClass = direction === "left" ? speedClass[speed] : "animate-marquee-reverse";

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animationClass}`}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-display text-display-xxl text-foreground/5 mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;