import { ISneakers } from "@/entities/sneakers";
import { sneakersApi } from "@/shared/api/sneakersApi";
import { SneakersList } from "@/widgets/sneakers";

export default async function HomePage() {
  const sneakerses:ISneakers[] = await sneakersApi.getAll();
  return (
    <SneakersList sneakerses={sneakerses || []}/>
  );
}