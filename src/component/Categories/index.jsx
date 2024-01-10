import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { categoriesData } from '@/constants';
import { Title } from '@/ui';
import InfoCard from './InfoCard';

const Categories = () => {
  return (
    <section className="mt-24">
      <div className="container">
        <Title text="Категории" />
        <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-16">
          {categoriesData.map((el) => (
            <InfoCard
              key={el.id}
              {...el}
            />
          ))}
        </div>

        <Button
          variant="filled"
          className="bg-[#4295E4] text-white rounded-none  mx-auto block mt-12">
          <Link to="/category">Все категории</Link>
        </Button>
      </div>
    </section>
  );
};

export default Categories;
