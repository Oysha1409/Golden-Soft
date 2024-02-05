import React, { useState } from "react";
import Title from "@/ui/Title";
import Btn from "@/ui/Button";
import { nameValidation, validateEmail } from "@/utils";
import { InfoModal } from "../InfoModal";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrormessage, setEmailErrormessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (!nameValidation(name)) {
      setErrorMessage("Ism kamida 3 harfdan iborat bo'lishi kk");
    }

    if (!validateEmail(email)) {
      setEmailErrormessage("Invalid email address");
    }

    else {
        setEmailErrormessage("")
        setErrorMessage("")
        setOpen(true)
        setEmail("");
        setName("")
    }
  }

  return (
    <section className="contact py-16 bg-light-gray mt-24">
      <div className="container">
        <Title text={"Мы Вам перезвоним"} />
        <p className="text-text-color text-base font-normal leading-[26px] w-full max-w-[518px] text-center mx-auto my-6">
          Если у вас возникли какие-то вопросы или проблемы, заполните форму и
          мы Вам перезвоним.
        </p>

        <form
          onSubmit={onSubmit}
          className="w-full max-w-[748px] flex align-middle justify-between gap-6 mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              value={name}
              className="py-3 px-4 bg-[rgba(22, 28, 36, 0.04)]"
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="absolute -bottom-5 text-xs text-red-600">
              {errorMessage}
            </p>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={email}
              className="py-3 px-4 bg-[rgba(22, 28, 36, 0.04)]"
              placeholder="Ваш Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="absolute  -bottom-5 text-xs text-red-600">
              {emailErrormessage}
            </p>
          </div>
          <Btn text="Отправить" size="large" type="submit" />
        </form>
        <InfoModal  open={open} setOpen={setOpen}/>
      </div>
    </section>
  );
};

export default Contact;
