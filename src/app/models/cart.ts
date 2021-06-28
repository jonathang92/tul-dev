import { Product } from 'src/app/models/product';

export interface Cart extends Product {
  cart_id: number,
  quantity: number
}