export function LogoMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center gap-12 animate-[marquee_30s_linear_infinite]">
        {[
          "Tata Group",
          "Reliance Industries",
          "ICICI Bank",
          "HDFC Bank",
          "Infosys",
          "Wipro",
          "Aditya Birla",
          "Mahindra",
        ].map((name) => (
          <span
            key={name}
            className="text-[18px] font-semibold text-muted-foreground/40 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
