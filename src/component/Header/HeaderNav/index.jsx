import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../assets/icons";
import { MegaMenuDefault } from "../Menu";
import { Badge, Button, Typography } from "@material-tailwind/react";
import Like from "../../Like";
import Cart from "../../Cart";
import { MainContext } from "../../../context/useMainContext";

const HeaderNav = () => {
  const [openLike, setOpenlike] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cartItems, likeItems } = useContext(MainContext);

  const handleOpen = () => setOpenlike(!openLike);
  const handleOpenCart = () => setOpenCart(!openCart);

  return (
    <div className=" container flex justify-between align-middle  top-5">
      <div className="flex justify-between  py-5 gap-[75px]">
        <Link to="/">
          <Icons.darkLogo />
        </Link>
        <MegaMenuDefault />
      </div>
      <div className="flex justify-between py-5 align-middle gap-8">
        <Typography
          as="a"
          variant="small"
          href="tel: +99899 999 99 99"
          className="p-3 flex gap-2"
        >
          <span>
            <Icons.phoneIcon />
          </span>
          +7 (966) 55 88 499
        </Typography>

        <div className="flex gap-6 py-1 align-middle">
          {likeItems.length ? (
            <Badge content={`${likeItems.length}`}>
              <Button variant="text" className="p-0" onClick={handleOpen}>
                <Icons.likeIcon />
              </Button>
            </Badge>
          ) : (
            <Button variant="text" className="p-0" onClick={handleOpen}>
              <Icons.likeIcon />
            </Button>
          )}
          {cartItems.length ? (
            <Badge content={cartItems.length} color="blue">
              <Button variant="text" className="p-0" onClick={handleOpenCart}>
                <Icons.cartIcon />
              </Button>
            </Badge>
          ) : (
            <Button variant="text" className="p-0" onClick={handleOpenCart}>
              <Icons.cartIcon />
            </Button>
          )}
          <Like open={openLike} handleOpen={handleOpen} />
          <Cart open={openCart} handleOpen={handleOpenCart} />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
