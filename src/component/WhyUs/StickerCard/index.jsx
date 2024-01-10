import { Typography } from '@material-tailwind/react';

const StickerCard = ({ image, text }) => {
  return (
    <div className="basis-1/3 p-6 flex flex-col align-middle justify-center text-center gap-8 border-x-2 border-[#c4cdd5]">
      <span className="block mx-auto">{image}</span>
      <Typography
        variant="paragraph"
        className="text-xl font-normal text-text-color ">
        {text}
      </Typography>
    </div>
  );
};

export default StickerCard;
