import bannerImg from '@/assets/image/banner-img.png';
import { Icons } from '@/assets/icons';

import image_1 from '@/assets/image/category-img-1.png';
import image_2 from '@/assets/image/category-img-2.png';
import image_3 from '@/assets/image/category-img-3.png';
import image_4 from '@/assets/image/category-img-4.png';

export const swiperData = [
  {
    id: 0,
    image: bannerImg,
    title: 'Golden Soft GS-200Z-5 для офиса',
    text: 'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.',
    subtext: 'Подходит для установки на деревянную/межкомнатную дверь.',
    currentPrice: '33 000₽',
    oldPrice: '37 000₽',
  },
  {
    id: 1,
    image: bannerImg,
    title: 'Golden Soft GS-200Z-5 для офиса',
    text: 'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.',
    subtext: 'Подходит для установки на деревянную/межкомнатную дверь.',
    currentPrice: '33 000₽',
    oldPrice: '37 000₽',
  },
  {
    id: 2,
    image: bannerImg,
    title: 'Golden Soft GS-200Z-5 для офиса',
    text: 'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.',
    subtext: 'Подходит для установки на деревянную/межкомнатную дверь.',
    currentPrice: '33 000₽',
    oldPrice: '37 000₽',
  },
];

export const statisticData = [
  {
    id: 0,
    count: 5567,
    text: 'Счастливых клиентов',
  },
  {
    id: 1,
    count: 1245,
    text: 'Продуктов на выбор',
  },
  {
    id: 2,
    count: 372,
    text: 'Продаж в день',
  },
  {
    id: 3,
    count: 20,
    text: 'Лет на рынке',
  },
];

export const stickerCardData = [
  {
    id: 0,
    image: <Icons.recycle />,
    text: 'Возврат удвоенной стоимости каждого замка в случае брака. ',
  },
  {
    id: 1,
    image: <Icons.recycle />,
    text: 'Наносим ваш логотип компании на наш продукт ',
  },
  {
    id: 2,
    image: <Icons.recycle />,
    text: 'Возврат удвоенной стоимости каждого замка в случае брака. ',
  },
];

export const categoriesData = [
  {
    id: 0,
    image: image_1,
    title: 'Для отелей',
    link: '/category/for-hotel',
  },
  {
    id: 1,
    image: image_2,
    title: 'Для шкафчиков',
    link: '/category/for-shelf',
  },
  {
    id: 2,
    image: image_3,
    title: 'Для офисов',
    link: '/category/for-office',
  },
  {
    id: 3,
    image: image_4,
    title: 'Замки для дома',
    link: '/category/for-home',
  },
];
