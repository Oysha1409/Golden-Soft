import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import './style.css';

const InfoCard = ({ image, title, link }) => {
  return (
    <div className=" info-card basis-1/2 bg-gray-100 p-10 relative">
      <img
        className="info-card_img block ms-auto"
        src={image}
        alt={title}
      />

      <div className="absolute bottom-10 flex flex-col gap-4  z-10 ">
        <Typography
          variant="h3"
          className="text-xl">
          {title}
        </Typography>
        <Link
          to={link}
          className="py-3 px-20 border-[1px] border-gray-800 bg-gray-100">
          Перейти
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
