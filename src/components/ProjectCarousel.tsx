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
    <div className="relative md:mb-40 md:scale-125">
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
        className={
          "pointer-events-auto !mx-0 !my-0 w-[150vw] [clip-path:inset(1px)] [aspect-ratio:2/2!important] [--swiper-theme-color:white] [--swiper-navigation-size:1.75rem] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)] " +
          "md:portrait:full md:mt-[10%] md:mb-[30%] md:w-auto md:[--swiper-navigation-size:1.25rem] md:landscape:h-[50vh]"
        }
      >
        {screens.map((screen, i) => (
          <SwiperSlide
            key={i}
            className="overflow-hidden rounded-3xl [aspect-ratio:1/2!important]"
          >
            <Image
              src={screen}
              alt={screen}
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-1/2 z-10 h-full w-1/2 -translate-x-1/2 scale-[105%]">
        <Image
          src="/iphone-frame.png"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}
