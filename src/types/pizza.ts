export type Pizza = {
  id: string;
  name: string;
  description: string;
  price: number;
  previewUrl: string;
  discount: number | undefined;
  photos: string[];
};
