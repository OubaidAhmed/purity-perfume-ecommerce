import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import '../styles/Slider.css'
import perfume1 from "../assets/perfume1.png";
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.png";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img alt='PerfumeImage' src={perfume1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='PerfumeImage' src={perfume2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='PerfumeImage' src={perfume3} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider