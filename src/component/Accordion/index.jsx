import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ProductAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Оплата</AccordionHeader>
        <AccordionBody>
          Оплата при получении товара, Картой онлайн, Google Pay, Акционная
          оплата картой Visa, Безналичными для юридических лиц, Безналичными для
          физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Монтаж и доставка
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          voluptatum tenetur sit, asperiores odio assumenda placeat eligendi
          nihil temporibus nesciunt velit aliquam ipsam obcaecati vitae, quo
          praesentium veniam. Nihil, quae.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Гарантии и выгода
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, saepe
          facere illo molestias nihil incidunt optio corrupti, recusandae quod
          corporis cupiditate obcaecati quo. Nemo perferendis recusandae sit
          facilis provident corrupti aut deleniti numquam dolor corporis,
          consectetur, maxime dolorem vitae? Quo.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default ProductAccordion;
