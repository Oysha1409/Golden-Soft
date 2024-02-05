import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useContext } from "react";
import { MainContext } from "../../context/useMainContext";
import CartProducts from "../CartProducts";
import Btn from "../../ui/Button";
import { Link } from "react-router-dom";

const Cart = ({ open, handleOpen }) => {
  const { cartItems } = useContext(MainContext);
  let totalPrice = 0;

  for (const key of cartItems) {
    totalPrice = totalPrice + key.price * key.quantity;
  }

  return (
    <Dialog open={open} handler={handleOpen} className="h-[600px]">
      <DialogHeader>
        {cartItems.length ? (
          <h2>Selected products</h2>
        ) : (
          <h2>Nothing selected</h2>
        )}
      </DialogHeader>
      <DialogBody className="h-[400px] overflow-y-auto">
        {cartItems.length ? (
          cartItems.map((el) => <CartProducts key={el.id} data={el} />)
        ) : (
          <h2>Cart is empty</h2>
        )}
      </DialogBody>
      <DialogFooter className="w-full justify-between border-t-2 border-primary">
        <div className="">
          <div className="text-title-color text-base font-normal">
            Итого:
            <span className="text-xl text-title-color font-semibold">
              {totalPrice.toLocaleString()} ₽
            </span>
          </div>
          <div className="w-[500px] mt-5 flex items-center justify-between">
            <Btn text={"Оформить заказ"} />
            <Button
              variant="outlined"
              className="border-2 border-primary text-primary rounded-sm"
            >
              <Link to="/category">Продолжить покупки</Link>
            </Button>
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default Cart;
