
export interface Cookie {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image?: string;
}

export interface CartItem extends Cookie {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface PastTheme {
  id: string;
  title: string;
  description: string;
  fullStory: string;
  attraction: string;
  icon: string;
  year: string;
  images: string[];
  cookies: Cookie[];
}

export interface SocialMedia {
  platform: string;
  username: string;
  url?: string;
  screenshots?: string[];
}