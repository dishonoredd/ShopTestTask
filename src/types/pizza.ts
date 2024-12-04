export type Pizza = {
  id: string;
  name: string;
  description: string;
  price: number;
  previewUrl: string;
  discount: number | null;
  photos: string[];
};
