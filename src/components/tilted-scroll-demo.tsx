import { TiltedScroll } from "@/components/ui/tilted-scroll";

export function TiltedScrollDemo() {
  const customItems = [
    { id: "1", text: "Secure Transactions" },
    { id: "2", text: "Real-time Tracking" },
    { id: "3", text: "24/7 Customer Support" },
    { id: "4", text: "Multi-Currency Support" },
    { id: "5", text: "Instant Approvals" },
    { id: "6", text: "Global Operations" },
    { id: "7", text: "Enterprise Security" },
    { id: "8", text: "Flexible Financing" },
  ];

  return (
    <div className="space-y-8">
      <TiltedScroll items={customItems} className="mt-8" />
    </div>
  );
}
