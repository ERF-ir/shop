
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
import d1 from "../assets/images/d1.png";
import d2 from "../assets/images/d2.png";
import d3 from "../assets/images/d3.png";
import d4 from "../assets/images/d4.png";

import post1 from "../assets/images/1.png";

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
            <img className="w-[9%]" src={brand1} alt="" />
            <img className="w-[9%]" src={brand2} alt="" />
            <img className="w-[9%]" src={brand3} alt="" />
            <img className="w-[9%]" src={brand4} alt="" />
          </div>

          <div id="tew" className="flex gap-x-5  justify-center">
            <img className="w-[9%]" src={brand5} alt="" />
            <img className="w-[9%]" src={brand6} alt="" />
            <img className="w-[9%]" src={brand7} alt="" />
            <img className="w-[9%]" src={brand8} alt="" />
          </div>


        </div>

      </section>

      <section className="mt-20">

        <div className="text-right relative">
          <span className="w-[170px]  bottom-[45%] opacity-60 absolute right-[2%] h-2 rounded bg-[#CCE6F6] block"></span>
          <h1 className="text-3xl mr-8 text-[#0284C7]">بیش از <span className=" font-vazir"> 7 </span>سال</h1>
          <p className="text-[#93C5FD] mr-8">سابقه تخصصی رسمی در حوضه صنعت مکمل ایران</p>

          <span className="rounded bottom-[55%] absolute right-0 shadow-[0_0_10px_#F97316] bg-[#F97316] w-4 h-4 block"></span>

        </div>

        <section className="w-[65%] mx-auto mt-24 " id="cart_detal">

          <div className="flex-center gap-x-5" id="one">

            <div className=" flex-center justify-end bg-gradient-to-r rounded-xl from-[#7BC4FA] to-[#E4F6FC] px-3 py-1 ">

              <div className="text-right pr-3">
                <h1 className="text-[#0F172A] text-[18px]">تضمین اصالت</h1>
                <p className="text-[#44403C] pt-1 text-[12px]">برترین مکمل ها به صورت اوریجینال بدون هیچ ماده افزودنی
                  برای شما عزیزان و مشتریلان عزیز</p>
              </div>
              <img className="w-[22%] h-[80px]" src={d1} alt="" />
            </div>

            <div className=" flex-center justify-end bg-gradient-to-r rounded-xl from-[#7BC4FA] to-[#E4F6FC] px-3 py-1 ">
              <div className="text-right pr-3">
                <h1 className="text-[#0F172A] text-[18px]">پشتیبانی تخصصی</h1>
                <p className="text-[#44403C] pt-1 text-[12px]">برترین مکمل ها به صورت اوریجینال بدون هیچ ماده افزودنی
                  برای شما عزیزان و مشتریلان عزیز</p>
              </div>
              <img className="w-[22%] h-[80px]" src={d4} alt="" />
            </div>

          </div>

          <div className="flex-center mt-4 gap-x-5 " id="tw2">

            <div className=" flex-center justify-end bg-gradient-to-r rounded-xl from-[#7BC4FA] to-[#E4F6FC] px-3 py-1 ">

              <div className="text-right pr-3">
                <h1 className="text-[#0F172A] text-[18px]">هدایای ویژه</h1>
                <p className="text-[#44403C] pt-1 text-[12px]">برترین مکمل ها به صورت اوریجینال بدون هیچ ماده افزودنی
                  برای شما عزیزان و مشتریلان عزیز</p>
              </div>
              <img className="w-[22%] h-[80px]" src={d3} alt="" />
            </div>

            <div className=" flex-center justify-end bg-gradient-to-r rounded-xl from-[#7BC4FA] to-[#E4F6FC] px-3 py-1 ">
              <div className="text-right pr-3">
                <h1 className="text-[#0F172A] text-[18px]">امنیت پرداخت</h1>
                <p className="text-[#44403C] pt-1 text-[12px]">برترین مکمل ها به صورت اوریجینال بدون هیچ ماده افزودنی
                  برای شما عزیزان و مشتریلان عزیز</p>
              </div>
              <img className="w-[22%] h-[80px] pr-3" src={d2} alt="" />
            </div>

          </div>

        </section>
      </section>

      <div className=" space-y-2 mt-28 flex flex-col items-end ">
        <span className="block h-[2px] w-[45%] rounded-md bg-gray-200"></span>
        <span className="block h-[2.5px] w-[35%] rounded-md bg-gray-200"></span>
      </div>

      <div className="text-right flex-center justify-between relative mt-5">
        <div>
          <button className="px-5 active:bg-green-200 active:text-green-500 transition-all active:shadow-[5px_5px_7px_#2db05dc2] py-2 shadow-[3px_3px_7px_#2db05dc2] bg-white text-[#22c55e] rounded-lg ">لیست محصولات</button>
        </div>
        <div>
          <span className="w-[252px]  bottom-[20%] opacity-20 absolute right-[2%] h-2 rounded bg-[#38d938] block"></span>
          <h1 className="text-3xl mr-8 text-[#38d938]">جدیدترین محصولات</h1>
          <span className="rounded bottom-[30%] absolute right-0 shadow-[0_0_10px_#38d938] bg-[#38d938] w-4 h-4 block"></span>
        </div>

      </div>


      <section className=" grid grid-cols-12 gap-x-5 mt-[170px]" id="cart">

        <div className="col-span-3 relative p-4 bg-white rounded-3xl shadow-[0_5px_8px_#e0e0e0] text-right">

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[10px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[10px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[7px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[7px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post1} alt="" />
          </div>

          <div className="mt-12">
            <h1 className="text-[1.3rem] text-[#484848]">کراتین منوهیدرات</h1>
            <h1 className="text-lg text-gray-400">on</h1>
          </div>

          <div className="flex-center justify-between mt-7">

            <div className="text-[#22C55E] flex items-end ">
              <p className="pr-1 text-sm mb-0.5 ">تومان</p>
              <h1 className=" font-vazir text-[1.3rem]">2,500,000</h1>
            </div>

            <div>
              <button className=" px-6 py-1.5 bg-[#FFEDD5] rounded-lg text-[#F97316] ">جزئیات</button>
            </div>

          </div>



        </div>
        <div className="col-span-3 relative p-4 bg-white rounded-3xl shadow-[0_5px_8px_#e0e0e0] text-right">

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[10px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[10px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[7px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[7px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post1} alt="" />
          </div>

          <div className="mt-12">
            <h1 className="text-[1.3rem] text-[#484848]">کراتین منوهیدرات</h1>
            <h1 className="text-lg text-gray-400">on</h1>
          </div>

          <div className="flex-center justify-between mt-7">

            <div className="text-[#22C55E] flex items-end ">
              <p className="pr-1 text-sm mb-0.5 ">تومان</p>
              <h1 className=" font-vazir text-[1.3rem]">2,500,000</h1>
            </div>

            <div>
              <button className=" px-6 py-1.5 bg-[#FFEDD5] rounded-lg text-[#F97316] ">جزئیات</button>
            </div>

          </div>



        </div>
        <div className="col-span-3 relative p-4 bg-white rounded-3xl shadow-[0_5px_8px_#e0e0e0] text-right">

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[10px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[10px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[7px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[7px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post1} alt="" />
          </div>

          <div className="mt-12">
            <h1 className="text-[1.3rem] text-[#484848]">کراتین منوهیدرات</h1>
            <h1 className="text-lg text-gray-400">on</h1>
          </div>

          <div className="flex-center justify-between mt-7">

            <div className="text-[#22C55E] flex items-end ">
              <p className="pr-1 text-sm mb-0.5 ">تومان</p>
              <h1 className=" font-vazir text-[1.3rem]">2,500,000</h1>
            </div>

            <div>
              <button className=" px-6 py-1.5 bg-[#FFEDD5] rounded-lg text-[#F97316] ">جزئیات</button>
            </div>

          </div>



        </div>
        <div className="col-span-3 relative p-4 bg-white rounded-3xl shadow-[0_5px_8px_#e0e0e0] text-right">

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[10px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[10px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[7px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[7px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post1} alt="" />
          </div>

          <div className="mt-12">
            <h1 className="text-[1.3rem] text-[#484848]">کراتین منوهیدرات</h1>
            <h1 className="text-lg text-gray-400">on</h1>
          </div>

          <div className="flex-center justify-between mt-7">

            <div className="text-[#22C55E] flex items-end ">
              <p className="pr-1 text-sm mb-0.5 ">تومان</p>
              <h1 className=" font-vazir text-[1.3rem]">2,500,000</h1>
            </div>

            <div>
              <button className=" px-6 py-1.5 bg-[#FFEDD5] rounded-lg text-[#F97316] ">جزئیات</button>
            </div>

          </div>



        </div>



      </section>



    </main>

  )
}
