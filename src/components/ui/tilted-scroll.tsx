import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}

export function TiltedScroll({
  items = defaultItems,
  className,
}: TiltedScrollProps) {
  useEffect(() => {
    // Inject CSS animation if not available
    const style = document.createElement("style");
    style.textContent = `
      @keyframes skew-scroll {
        0% {
          transform: rotateX(20deg) rotateZ(-20deg) skewX(20deg);
        }
        100% {
          transform: rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%);
        }
      }
      .animate-skew-scroll {
        animation: skew-scroll 20s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[350px] w-[400px] gap-6 grid-cols-1 animate-skew-scroll">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-2 cursor-pointer rounded-md bg-transparent p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#fdfdfe]/20"
            >
              <CheckCircleIcon className="h-6 w-6 mr-2 stroke-[#0f172a]/50 transition-colors group-hover:stroke-[#0f172a]" />
              <p className="text-[#0f172a]/80 transition-colors group-hover:text-[#0f172a]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "Secure Transactions" },
  { id: "2", text: "Real-time Updates" },
  { id: "3", text: "24/7 Support" },
  { id: "4", text: "Multi-Currency" },
  { id: "5", text: "Instant Approval" },
  { id: "6", text: "Global Reach" },
  { id: "7", text: "Enterprise Ready" },
  { id: "8", text: "Bank-Level Security" },
];
