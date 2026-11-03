import cleanserAndSerumImage from '../../assets/beauty/skincare-hero.jpg';
import skincareEssentialsImage from '../../assets/beauty/skincare-duo.jpg';
import redLipstickImage from '../../assets/beauty/lipstick-red.jpg';
import nudeLipstickImage from '../../assets/beauty/lipstick-nude.jpg';
import lipGlossImage from '../../assets/beauty/lip-gloss.jpg';
import makeupPaletteImage from '../../assets/beauty/makeup-palette.jpg';
import haircareImage from '../../assets/beauty/haircare.jpg';
import type { Product } from './products.types.js';

const products: Product[] = [
  {
    id: 101,
    name: 'Ela De Pure Gel Facial Cleanser',
    category: 'Skincare',
    price: 18,
    description: 'A gentle everyday cleanse in a 100 ml tube.',
    image: cleanserAndSerumImage,
    imageAlt: 'Ela De Pure gel facial cleanser tube',
    featured: true,
  },
  {
    id: 102,
    name: 'Ela De Pure Hydralift Serum',
    category: 'Skincare',
    price: 28,
    description: 'A hydrating serum in a 30 ml dropper bottle.',
    image: cleanserAndSerumImage,
    imageAlt: 'Ela De Pure Hydralift serum bottle',
    featured: true,
  },
  {
    id: 103,
    name: 'Ela De Pure Rosehip Oil',
    category: 'Skincare',
    price: 24,
    description: 'Rosehip oil in an amber glass bottle.',
    image: skincareEssentialsImage,
    imageAlt: 'Ela De Pure Rosehip Oil amber dropper bottle',
    featured: false,
  },
  {
    id: 104,
    name: 'Ela De Pure Shea Butter',
    category: 'Skincare',
    price: 22,
    description: 'A rich shea butter jar for your daily care shelf.',
    image: skincareEssentialsImage,
    imageAlt: 'Ela De Pure Shea Butter skincare jar',
    featured: false,
  },
  {
    id: 201,
    name: 'Clinique Classic Red Lipstick',
    category: 'Makeup',
    price: 25,
    description: 'A vivid red lip colour in a classic silver tube.',
    image: redLipstickImage,
    imageAlt: 'Classic red lipstick shown beside its red case',
    featured: true,
  },
  {
    id: 202,
    name: 'Buxom Nude Satin Lipstick',
    category: 'Makeup',
    price: 22,
    description: 'A soft nude shade with a satin finish.',
    image: nudeLipstickImage,
    imageAlt: 'Nude lipstick shown open on a white surface',
    featured: false,
  },
  {
    id: 203,
    name: 'MISS SWISS Lily Lip Gloss',
    category: 'Makeup',
    price: 18,
    description: 'A rosy gloss with a soft pink tint.',
    image: lipGlossImage,
    imageAlt: 'Pink lip gloss and a matching gloss swatch',
    featured: true,
  },
  {
    id: 204,
    name: 'Neutral Eye Palette',
    category: 'Makeup',
    price: 38,
    description: 'A warm-toned edit of everyday eyeshadow shades.',
    image: makeupPaletteImage,
    imageAlt: 'Neutral eyeshadow palettes arranged at a makeup counter',
    featured: false,
  },
  {
    id: 301,
    name: 'Ela De Pure Moisturizing Shampoo',
    category: 'Haircare',
    price: 22,
    description: 'A salon-inspired moisturizing shampoo.',
    image: haircareImage,
    imageAlt: 'Ela De Pure Moisturizing Shampoo bottle on a tiled shelf',
    featured: false,
  },
  {
    id: 302,
    name: 'Ela De Pure Moisturizing Conditioner',
    category: 'Haircare',
    price: 22,
    description: 'A matching moisturizing conditioner for everyday care.',
    image: haircareImage,
    imageAlt: 'Ela De Pure Moisturizing Conditioner bottle on a tiled shelf',
    featured: false,
  },
];

export default products;
