import { Typography } from '@material-tailwind/react';
import clsx from 'clsx';

const Title = ({ text, alignment }) => {
  return (
    <Typography
      variant="h2"
      className={clsx(
        alignment == 'left' ? 'text-left' : 'text-center',
        'text-title-color font-semibold text-[44px] leading-[62px]'
      )}>
      {text}
    </Typography>
  );
};

export default Title;
