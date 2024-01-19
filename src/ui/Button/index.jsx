import React from "react";
import { Button } from "@material-tailwind/react";
import clsx from "clsx";

const Btn = ({ type, text, size }) => {
  return (
    <Button
      variant="filled"
      className={clsx(
        `${
          (size == "large" ? "px-[71px] mt-0 py-3" : "px-[37px]")
        }`,
        "bg-[#4295E4] text-white rounded-none "
      )}
      type={type}
    >
      {text}
    </Button>
  );
};

export default Btn;
