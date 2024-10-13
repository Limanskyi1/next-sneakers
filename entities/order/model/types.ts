import { ISneakers } from "@/entities/sneakers";

export interface IOrder {
    id: number;
    price: number;
    items: ISneakers[];
}