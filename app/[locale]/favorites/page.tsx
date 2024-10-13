import { ISneakers } from "@/entities/sneakers";
import { sneakersApi } from "@/shared/api/sneakersApi";
import { InfoBox } from "@/shared/ui/infoBox";
import { SneakersList } from "@/widgets/sneakers";

const Favoritespage = async () => {
  const sneakerses: ISneakers[] = await sneakersApi.getFavorites();
  
  if(sneakerses.length === 0){
    return (
      <InfoBox imageSrc="/emoji-1.png" title="Закладок нет" desc="Вы ничего не добавляли в закладки"/>
    );
  }
  return (
    <>
      <h2 style={{marginBottom: "40px"}}>Мои закладки</h2>
      <SneakersList sneakerses={sneakerses} />
    </>
  );
};

export default Favoritespage;
