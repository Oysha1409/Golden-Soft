import Title from "@/ui/Title";
import { categoryData } from "@/constants";
import { Typography } from "@material-tailwind/react";
import Btn from "../../ui/Button";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <>
      <section className="my-16">
        <div className="container">
          <Title text="Категории" />

          <div className="mt-16 grid grid-cols-4 gap-x-8 gap-y-12">
            {categoryData.map((el) => (
              <Link to={`/product/${el.category}`} key={el.id}>
                <div>
                  <img src={el.image} alt={el.title} />
                  <Typography
                    variant="h3"
                    className="mt-4 text-base text-title-color font-normal"
                  >
                    {el.title}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12  flex align-middle justify-center ">
            <Btn type="button" text="Смотреть все" size="large" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoryList;
