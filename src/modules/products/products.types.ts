export interface Product {
  id: number;
  name: string;
  category: 'Skincare' | 'Makeup' | 'Haircare';
  price: number;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}
