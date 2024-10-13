import { AppDispatch } from "@/app/_store/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()