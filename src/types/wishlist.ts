import { Product } from "@/types/product";

export interface WishlistItem {
  id: number;
  user: number;
  product: Product;
  created_at: string;
  updated_at: string;
}
