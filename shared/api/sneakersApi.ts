import { ISneakers } from "@/entities/sneakers";
import axios from "axios";
import { IOrder } from "@/entities/order";

const baseUrl = "https://e72b1782d85957b7.mokky.dev";

export const sneakersApi = {
  getAll: async (): Promise<ISneakers[]> => {
    try {
      const { data } = await axios.get(`${baseUrl}/items`);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getFavorites: async (): Promise<ISneakers[]> => {
    try {
      const { data } = await axios.get(`${baseUrl}?isLiked=true`);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getOrders: async (): Promise<IOrder[]> => {
    try {
      const { data } = await axios.get(`${baseUrl}/orders`);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  sendOrder: async (order: Omit<IOrder, "id">) => {
    try {
      await axios.post(`${baseUrl}/orders`, {
        ...order,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
