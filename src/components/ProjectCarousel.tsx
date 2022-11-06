import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

type ProjectCarouselProps = {
  screens: string[];
};
export function ProjectCarousel({ screens }: ProjectCarouselProps) {
  screens.at = (i) => {
    while (i < 0) i += screens.length;
    return screens[i];
  };

  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className={`
          pointer-events-auto !-mx-20 !my-0 aspect-[46/50] w-[150vw] 
          [--swiper-theme-color:white] [--swiper-navigation-size:1.75rem] 
          [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)]
          md:mt-[10%] md:mb-[30%] md:h-[80vmin] md:w-auto md:[--swiper-navigation-size:2rem] `}
      >
        {screens.map((screen, i) => (
          <SwiperSlide
            key={i}
            className="overflow-hidden rounded-3xl"
          >
            <Image
              src={screen}
              alt={screen}
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-1/2 z-10 aspect-[1/2] h-full -translate-x-1/2 scale-[105%]">
        <Image
          src="/iphone-frame.png"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}
