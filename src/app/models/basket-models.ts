import { BasketItem } from "./basket items-models";
export interface Ibasket {
  id: number;
  employeeId: string;
  total: number;
  basketItems: BasketItem[];
}
