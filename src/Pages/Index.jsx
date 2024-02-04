
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
import post2 from "../assets/images/2.png";
import post3 from "../assets/images/3.png";
import post4 from "../assets/images/4.png";

import artic1 from "../assets/images/111.png";
import artic2 from "../assets/images/222.png";

import Ico_user from "../assets/svg-icon/user.svg?react"
import Ico_eye from "../assets/svg-icon/eye.svg?react"

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

      <div className=" space-y-2 mt-52 flex flex-col items-end ">
        <span className="block h-[2px] w-[45%] rounded-md bg-gray-200"></span>
        <span className="block h-[2.5px] w-[35%] rounded-md bg-gray-200"></span>
      </div>


      <div className="text-right flex-center justify-between relative mt-5">
        <div>
          <button className="px-5 active:bg-green-400 active:text-white transition-all active:shadow-[5px_5px_7px_#2db05dc2] py-2 shadow-[3px_3px_7px_#2db05dc2] bg-white text-[#22c55e] rounded-lg ">لیست محصولات</button>
        </div>
        <div>
          <span className="w-[252px]  bottom-[20%] opacity-20 absolute right-[2%] h-2 rounded bg-[#38d938] block"></span>
          <h1 className="text-3xl mr-8 text-[#38d938]">جدیدترین محصولات</h1>
          <span className="rounded bottom-[30%] absolute right-0 shadow-[0_0_10px_#38d938] bg-[#38d938] w-4 h-4 block"></span>
        </div>

      </div>


      <section className=" grid grid-cols-12 gap-x-5 mt-[170px]" id="cart">

        <div className="col-span-3 relative p-4 bg-white rounded-3xl shadow-[0_5px_8px_#e0e0e0] text-right">

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

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

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post2} alt="" />
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

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post3} alt="" />
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

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post4} alt="" />
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





      <div className=" space-y-2 mt-52 flex flex-col items-end ">
        <span className="block h-[2px] w-[45%] rounded-md bg-gray-200"></span>
        <span className="block h-[2.5px] w-[35%] rounded-md bg-gray-200"></span>
      </div>


      <div className="text-right flex-center justify-between relative mt-5">
        <div>
          <button className="px-5 active:bg-red-400 active:text-white transition-all active:shadow-[5px_5px_7px_#C03C3C] py-2 shadow-[3px_3px_7px_#C03C3C] bg-white text-[#C03C3C] rounded-lg ">لیست تخفیفات</button>
        </div>
        <div>
          <span className="w-[194px]  bottom-[20%] opacity-30 absolute right-[2%] h-2 rounded bg-[#C03C3C] block"></span>
          <h1 className="text-3xl mr-8 text-[#C03C3C]">آخرین تخفیفات</h1>
          <span className="rounded bottom-[30%] absolute right-0 shadow-[0_0_10px_#C03C3C] bg-[#C03C3C] w-4 h-4 block"></span>
        </div>

      </div>


      <section className=" grid grid-cols-12 gap-x-5 mt-[170px]" id="cart">

        <div className="col-span-3 box-border relative p-4 bg-white rounded-3xl shadow-[0_5px_8px_#e0e0e0] text-right">

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post1} alt="" />
          </div>

          <div className="mt-12">
            <h1 className="text-[1.3rem] text-[#484848]">کراتین منوهیدرات</h1>
            <p className="text-lg text-gray-400">on</p>
          </div>

          <div className="flex items-end text-right -ml-4 ">
            <button className="py-2 px-4 text-xl text-[#EF4444] font-bold flex-center rounded-r-full    bg-[#FEE2E2] flex-row-reverse">
              <span className="font-vazir pl-0.5 ">70%</span><span>تخفیف</span>
            </button>
          </div>

          <div className="text-[#44403C] mt-3  relative flex items-end ">
            <p className="pr-1 text-[0.6rem] mb-0.5 ">تومان</p>
            <span className=" absolute block h-[1.5px] -rotate-[15deg] top-3  w-[4.5rem] rounded bg-gray-400"></span>
            <h1 className=" font-vazir de text-[0.9rem] ">4,500,000</h1>
          </div>

          <div className="flex-center justify-between">

            <div className="text-[#22C55E] flex items-end ">
              <p className="pr-1 text-sm mb-0.5 ">تومان</p>
              <h1 className=" font-vazir text-[1.3rem]">2,500,000</h1>
            </div>


            <button className=" px-6 py-1.5 bg-[#FFEDD5] rounded-lg text-[#F97316] ">جزئیات</button>


          </div>



        </div>
        <div className="col-span-3 relative p-4 bg-white rounded-3xl shadow-[0_5px_8px_#e0e0e0] text-right">

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post2} alt="" />
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

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post3} alt="" />
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

          <span className="block absolute top-[33%] left-[13%]    w-10  h-10 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute top-[33%] right-[13%]   w-10  h-10 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <span className="block absolute  top-2 right-[5%]   w-7  h-7 bg-[#DBEAFE] blur-[8px] rounded-full"></span>
          <span className="block absolute  top-2 left-[5%]  w-7 h-7 bg-[#DCFCE7] blur-[8px] rounded-full"></span>

          <div className=" flex justify-center -mt-[40%]">
            <img className="w-[70%]" src={post4} alt="" />
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










      <div className=" space-y-2 mt-52 flex flex-col items-end ">
        <span className="block h-[2px] w-[45%] rounded-md bg-gray-200"></span>
        <span className="block h-[2.5px] w-[35%] rounded-md bg-gray-200"></span>
      </div>


      <div className="text-right flex-center justify-between relative mt-5">
        <div>
          <button className="px-5 active:bg-blue-400 active:text-white transition-all active:shadow-[5px_5px_7px_#009AFF] py-2 shadow-[3px_3px_7px_#009AFF] bg-white text-[#009AFF] rounded-lg ">لیست مقالات</button>
        </div>
        <div>
          <span className="w-[170px]  bottom-[20%] opacity-30 absolute right-[2%] h-2 rounded bg-[#009AFF] block"></span>
          <h1 className="text-3xl mr-8 text-[#009AFF]">آخرین مقالات</h1>
          <span className="rounded bottom-[30%] absolute right-0 shadow-[0_0_10px_#009AFF] bg-[#009AFF] w-4 h-4 block"></span>
        </div>

      </div>


      <section className=" grid grid-cols-12 ml-12 gap-x-5  mx-auto   mt-[100px]" id="cart">

        <div className="col-span-6  text-right">

          <div id="parent" className="grid  grid-cols-12">

            <div className=" text-right col-span-6 bg-white px-5 py-2 shadow-[0_0_6px_1px_#E6E6E6] h-[135%] rounded-2xl -mt-[11.5%] ">

              <p className="bg-[#FFEDD5] text-[#F97316] px-4 text-center text-sm py-2.5 -mt-7  w-fit  mx-auto rounded-full ">تغذیه ورزشی</p>

              <h1 className="text-[#44403C] text-2xl mt-7">کراتین منوهیدرات چیست و فوایدش چیست ؟</h1>

              <p className=" text-[#999999] text-center mt-5 " style={{ 'direction': 'rtl' }}>شیر توسط پستانداران ماده تولید میشود و مایعی سفید و مغذی است.
                شیر گاو یکی از پر مصرف ترین شیر ها است که حاوی کربوهیدرات، چربی، پروتئین ...</p>

              <div className="flex items-end justify-between ">
                <div className="-mb-[29%]"><button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg transition-all
                 hover:text-white hover:bg-green-500 active:bg-green-300">ادامه مطلب</button></div>

                <div className="-mb-[29%] flex-center gap-x-3 text-[#999999] text-xs">
                  <div className=" flex-center">
                    <p className=" pr-1">عرفان بیات</p>
                    <Ico_user />
                  </div>
                  <div className=" flex-center">
                    <p className=" text-[13px] pr-1 font-vazir">220</p>
                    <Ico_eye />
                  </div>
                </div>

              </div>

            </div>

            <div className=" col-span-6 flex  flex-col justify-center ">
              <img src={artic1} alt="" className=" w-[90%]  rounded-r-[60px] h-[100%]" />
            </div>



          </div>





        </div>
        <div className="col-span-6  text-right">

          <div id="parent" className="grid grid-cols-12">

            <div className=" text-right col-span-6 bg-white px-5 py-2 shadow-[0_0_6px_1px_#E6E6E6] h-[135%] rounded-2xl -mt-[11.5%] ">

              <p className="bg-[#FFEDD5] text-[#F97316] px-4 text-center text-sm py-2.5 -mt-7  w-fit  mx-auto rounded-full ">تغذیه ورزشی</p>

              <h1 className="text-[#44403C] text-2xl mt-7">کراتین منوهیدرات چیست و فوایدش چیست ؟</h1>

              <p className=" text-[#999999] text-center mt-5 " style={{ 'direction': 'rtl' }}>شیر توسط پستانداران ماده تولید میشود و مایعی سفید و مغذی است.
                شیر گاو یکی از پر مصرف ترین شیر ها است که حاوی کربوهیدرات، چربی، پروتئین ...</p>

              <div className="flex items-end justify-between ">
                <div className="-mb-[29%]"><button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg transition-all
       hover:text-white hover:bg-green-500 active:bg-green-300">ادامه مطلب</button></div>

                <div className="-mb-[29%] flex-center gap-x-3 text-[#999999] text-xs">
                  <div className=" flex-center">
                    <p className=" pr-1">عرفان بیات</p>
                    <Ico_user />
                  </div>
                  <div className=" flex-center">
                    <p className=" text-[13px] pr-1 font-vazir">220</p>
                    <Ico_eye />
                  </div>
                </div>

              </div>

            </div>

            <div className=" col-span-6 flex  flex-col justify-center ">
              <img src={artic1} alt="" className=" w-[90%]  rounded-r-[60px] h-[100%]" />
            </div>



          </div>





        </div>



      </section>




    </main>

  )
}
