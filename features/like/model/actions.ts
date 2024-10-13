"use server"
import axios from "axios"
import { revalidatePath } from "next/cache";

export const addLike = async (id:number) => {
    try {
        await axios.patch(`https://e72b1782d85957b7.mokky.dev/items/${id}`,{
            isLiked: true,
        });
        revalidatePath("/","layout");
        revalidatePath("/favorites","layout");
    } catch (error) {
        console.error(error);
    }
}

export const removeLike = async (id:number) => {
    try {
        await axios.patch(`https://e72b1782d85957b7.mokky.dev/items/${id}`,{
            isLiked: false,
        });
        revalidatePath("/");
    } catch (error) {
        console.error(error);
    }
}