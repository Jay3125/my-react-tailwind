import { ReactNode } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface Props {
  children?: ReactNode;
  className?: string;
}
const SwiperComponent = (props: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {props.children}
    </Swiper>
  );
};

SwiperComponent.Slides = (props: Props) => {
  return <SwiperSlide>{props.children}</SwiperSlide>;
};

export default SwiperComponent