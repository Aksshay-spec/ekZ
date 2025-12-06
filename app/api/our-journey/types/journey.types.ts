// app/api/our-journey/types/journey.types.ts
export type JourneyItem = {
  year: string;
  text: string;
  position: "left" | "right";
  colors: string;
};

// Aliases so frontend components can import more semantic names
export type TimelineItemType = JourneyItem;

export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}
