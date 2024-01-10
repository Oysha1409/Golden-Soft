import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Typography } from '@material-tailwind/react';
import { swiperData } from '@/constants';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Banner = () => {
  return (
    <div className="banner container h-[774px] py-[150px flex align-middle justify-center">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        {swiperData.map((el) => (
          <SwiperSlide key={el.id}>
            <div className="flex align-middle justify-between gap-12 ">
              <div className="w-96 h-96">
                <img
                  src={el.image}
                  alt="banner-img"
                  className="swiper-img"
                />
              </div>

              <div className="w-96">
                <Typography
                  variant="h1"
                  className="font-semibold text-4xl text-left">
                  {el.title}
                </Typography>

                <Typography
                  variant="paragraph"
                  className="mt-5 text-left">
                  {el.text}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mt-5 text-left">
                  {el.subtext}
                </Typography>

                <div className="text-left mt-8">
                  <span className="text-text-color text-xs font-normal">
                    Цена
                  </span>

                  <div className="mt-1 flex gap-3 align-middle">
                    <span className="text-2xl text-title-color font-semibold">
                      {el.currentPrice}
                    </span>
                    <span className="text-2xl text-[#A4A4A4] font-light line-through">
                      {el.oldPrice}
                    </span>
                  </div>

                  <Button
                    variant="filled"
                    className="bg-[#4295E4] text-white rounded-none mt-4">
                    Добавить в корзину
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
