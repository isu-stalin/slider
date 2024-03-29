import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Splide.js tema stili

const Slider = () => {
  return (
    <Splide
      options={{
        type: 'fade', // Animatsiya turi
        rewind: true, // O'ng yoki chapga qaytishi
        pagination: false, // Slaydlar sahifalash
        arrows: true, // Ko'rsatkichlar
      }}
    >
      <SplideSlide>
        <img src="https://sotni.ru/wp-content/uploads/2023/08/natsionalnyi-park-banf-kanada-21.webp" alt="Rasm 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://bipbap.ru/wp-content/uploads/2017/04/3dr-19.jpg" alt="Rasm 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://fullhdoboi.ru/wp-content/uploads/_ph/6/179059157.jpg" alt="Rasm 3" />
      </SplideSlide>
      {/* Siz istagan ko'rinishdagi tasvirlarni qo'shishingiz mumkin */}
    </Splide>
  );
};

export default Slider