
import img1 from "../assets/images/11.png";
import img2 from "../assets/images/22.png";
import img3 from "../assets/images/33.png";
import baner1 from "../assets/images/banners.png";
import baner2 from "../assets/images/bansners.png";

import brand1 from "../assets/images/f.png";
import brand2 from "../assets/images/b2.png";
import brand3 from "../assets/images/b3.png";
import brand4 from "../assets/images/b4.png";
import brand5 from "../assets/images/b5.png";
import brand6 from "../assets/images/b6.png";
import brand7 from "../assets/images/b7.png";
import brand8 from "../assets/images/b8.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



export default function index() {



  return (

    <main>


      <section className="grid grid-cols-12 my-10 gap-5  ">
        
        <div className="col-span-4   ">
          <img src={baner1} className="w-[100%] h-[31vh]" alt="" />
          <img src={baner2} className="w-[100%] h-[31vh] mt-5" alt="" />
        </div>

        <div className="col-span-8 m-0 p-0 shadow-[0_0_20px_1px_#5cc3ff] rounded-2xl   ">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
            }}
            dir="rtl"

          >
            <SwiperSlide><img className=" rounded-2xl w-full    h-[65vh] " src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img className=" rounded-2xl w-full   h-[65vh]" src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img className=" rounded-2xl w-full   h-[65vh]" src={img3} alt="" /></SwiperSlide>
          </Swiper>
        </div>

      </section>

              <section>
                <h1 className="text-[#0284C7] text-3xl text-center"> محبوبترین  
                <span className="text-[#F97316]"> برندها </span>
                </h1>

                <div className="flex flex-col gap-5 mt-5   " id="parent_brand flex">

                  <div id="one" className="flex gap-x-5  justify-center">
                    <img className="w-[10%]" src={brand1} alt="" /> 
                    <img className="w-[10%]" src={brand2} alt="" /> 
                    <img className="w-[10%]" src={brand3} alt="" /> 
                    <img className="w-[10%]" src={brand4} alt="" /> 
                  </div>

                  <div id="tew" className="flex gap-x-5  justify-center">
                    <img className="w-[10%]" src={brand5} alt="" />
                    <img className="w-[10%]" src={brand6} alt="" />
                    <img className="w-[10%]" src={brand7} alt="" />
                    <img className="w-[10%]" src={brand8} alt="" />
                  </div>


                </div>

              </section>

    </main>

  )
}
