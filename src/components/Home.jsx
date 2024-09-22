import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Home=()=>{
return(
    <Layout>
    <div>
     <header>
     <Swiper
     pagination={true}
     navigation={true} 
     modules={[Navigation,Pagination]} 
      slidesPerView={1}
        >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
     </header>
    </div>
    </Layout>
)
}
export default Home