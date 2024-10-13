"use server";
import { ISneakers } from "@/entities/sneakers";
import { sneakersApi } from "@/shared/api/sneakersApi";
import { revalidatePath } from "next/cache";

export const makeOrder = async ({ items, price }:{ items:ISneakers[], price:number}) => {
  await sneakersApi.sendOrder({
    items,
    price,
  });
  revalidatePath("/orders", "layout");
};
