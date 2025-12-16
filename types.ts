export interface Property {
  id: string;
  title: string;
  address: string;
  neighborhood: string;
  city: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  parking: number;
  description: string;
  features: string[];
  images: string[];
  type: string;
  status: 'Venda' | 'Aluguel' | 'Lançamento';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ChatState {
  IDLE,
  LOADING,
  ERROR
}
