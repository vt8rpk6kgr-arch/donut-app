import { Donut } from '../types';

export const donuts: Record<string, Donut> = {
  blueberry: {
    id: 'blueberry',
    name: 'Blueberry',
    title: 'Blueberry Donut',
    description: 'Raised ring with strawberry frosting and round sprinkles',
    accentColor: '#78BCC4', // For header button
    themeColor: '#DEF1FC', // For background
    image: '/assets/blueberry-large.png',
    thumbnail: '/assets/blueberry-thumb.png',
    floatingDecorations: [
      { id: 'bb1', src: '/assets/floating-blueberry.png', alt: '', initialPosition: { top: '20%', left: '10%' }, animationClass: 'float1' },
      { id: 'bb2', src: '/assets/floating-blueberry.png', alt: '', initialPosition: { top: '80%', left: '80%' }, animationClass: 'float2' },
      { id: 'leaf1', src: '/assets/floating-leaf.png', alt: '', initialPosition: { top: '15%', left: '85%' }, animationClass: 'float3' },
      { id: 'leaf2', src: '/assets/floating-leaf.png', alt: '', initialPosition: { top: '75%', left: '15%' }, animationClass: 'float4' },
    ],
  },
  chocolate: {
    id: 'chocolate',
    name: 'Chocolate',
    title: 'Chocolate Donut',
    description: 'Raised ring with strawberry frosting and round sprinkles',
    accentColor: '#AF7E67',
    themeColor: '#FDF1E3',
    image: '/assets/chocolate-large.png',
    thumbnail: '/assets/chocolate-thumb.png',
    floatingDecorations: [
      { id: 'choc1', src: '/assets/floating-choc.png', alt: '', initialPosition: { top: '20%', left: '15%' }, animationClass: 'float2' },
      { id: 'choc2', src: '/assets/floating-choc.png', alt: '', initialPosition: { top: '80%', left: '85%' }, animationClass: 'float1' },
      { id: 'leaf1', src: '/assets/floating-leaf.png', alt: '', initialPosition: { top: '25%', left: '85%' }, animationClass: 'float4' },
      { id: 'leaf2', src: '/assets/floating-leaf.png', alt: '', initialPosition: { top: '85%', left: '20%' }, animationClass: 'float3' },
    ],
  },
  strawberry: {
    id: 'strawberry',
    name: 'Strawberry',
    title: 'Strawberry Donut',
    description: 'Raised ring with strawberry frosting and round sprinkles',
    accentColor: '#FF5E7E',
    themeColor: '#FDE1E9',
    image: '/assets/strawberry-large.png',
    thumbnail: '/assets/strawberry-thumb.png',
    floatingDecorations: [
      { id: 'straw1', src: '/assets/floating-strawberry.png', alt: '', initialPosition: { top: '20%', left: '10%' }, animationClass: 'float1' },
      { id: 'straw2', src: '/assets/floating-strawberry.png', alt: '', initialPosition: { top: '85%', left: '80%' }, animationClass: 'float2' },
      { id: 'leaf1', src: '/assets/floating-leaf.png', alt: '', initialPosition: { top: '15%', left: '80%' }, animationClass: 'float3' },
      { id: 'leaf2', src: '/assets/floating-leaf.png', alt: '', initialPosition: { top: '80%', left: '15%' }, animationClass: 'float4' },
    ],
  },
};

export const donutsList: Donut[] = [
  donuts.strawberry,
  donuts.blueberry,
  donuts.chocolate,
];
