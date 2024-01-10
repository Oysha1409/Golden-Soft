import React from 'react';
import { Title } from '@/ui';
import StickerCard from './StickerCard';
import { stickerCardData } from '../../constants';


const WhyUs = () => {
  
  return (
    <section className='mt-24'>
      <div className="container">
        <Title text="Почему GoldenService?" />
        <div className="flex gap-8  mt-14">
          {stickerCardData.map(({ id, image, text }) => (
            <StickerCard
              key={id}
              text={text}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
