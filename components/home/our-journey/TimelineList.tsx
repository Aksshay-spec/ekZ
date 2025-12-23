import { TimelineCard } from "@/components/common/cards";

interface TimelineItem {
  year: string;
  text: string;
  position: "left" | "right";
  colors: string;
}

const gradientMap: Record<string, string> = {
  pinkBlue: "linear-gradient(90deg, #f87171, #3b82f6, #f472b6)",
  yellowPink: "linear-gradient(90deg, #fde047, #f9a8d4, #f472b6)",
};

export default function TimelineList({ data }: { data: TimelineItem[] }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {data.map((item, index) => {
        const isLeft = item.position === "left";
        const gradient = gradientMap[item.colors];

        return (
          <div key={index} className="flex">
            {isLeft ? (
              <TimelineCard
                align="left"
                circleContent={
                  <span className="text-white font-bold text-2xl">
                    {item.year}
                  </span>
                }
                circleVariant="primary"
                title={item.text}
                cardProps={{
                  gradient,
                  textColor: "#020202",
                  radiusTopLeft: "0px",
                  radiusBottomLeft: "0px",
                  radiusTopRight: "24px",
                  radiusBottomRight: "24px",
                  className: "py-8 px-2 font-semibold shadow-lg",
                }}
              />
            ) : (
              <TimelineCard
                align="right"
                circleContent={
                  <span className="text-white font-bold text-2xl">
                    {item.year}
                  </span>
                }
                circleVariant="secondary"
                title={item.text}
                cardProps={{
                  gradient,
                  textColor: "#000",
                  radiusTopLeft: "24px",
                  radiusBottomLeft: "24px",
                  radiusTopRight: "0px",
                  radiusBottomRight: "0px",
                  className: "py-8 px-2 font-semibold shadow-lg",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
