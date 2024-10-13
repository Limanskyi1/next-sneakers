import { Order } from "@/entities/order/ui";
import { sneakersApi } from "@/shared/api/sneakersApi";
import { InfoBox } from "@/shared/ui/infoBox";

const Orderspage = async () => {

  const orders = await sneakersApi.getOrders();

  if(orders.length === 0){
    return (
      <InfoBox imageSrc="/emoji-2.png" title="Заказов нет" desc="Вы ничего не заказали"/>
    );
  }

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      <h2 style={{marginBottom: "40px"}}>Мои заказы</h2>
      {orders.map((order) => <Order key={order.id} price={order.price} id={order.id} items={order.items}/>) }
    </div>
  );
};

export default Orderspage;