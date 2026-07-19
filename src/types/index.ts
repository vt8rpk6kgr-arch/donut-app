export type DonutId = 'blueberry' | 'chocolate' | 'strawberry';

export interface FloatingDecoration {
  id: string;
  src: string;
  alt: string;
  initialPosition: { top: string; left: string };
  animationClass: string;
}

export interface Donut {
  id: DonutId;
  name: string;
  title: string;
  description: string;
  themeColor: string; // e.g., background color
  accentColor: string; // e.g., button color
  image: string;
  thumbnail: string;
  floatingDecorations: FloatingDecoration[];
}
