type Image = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Dessert = {
  image: Image;
  name: string;
  category: string;
  price: number;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
};
