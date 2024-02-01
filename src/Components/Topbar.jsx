import { useState } from "react"
import Ico_category from "../assets/svg-icon/category.svg?react"
import Ico_search from "../assets/svg-icon/search.svg?react"
import Ico_sun from "../assets/svg-icon/sun-1.svg?react"
import Ico_bag from "../assets/svg-icon/bag-2.svg?react"


function Topbar() {

  let [flag, setFlag] = useState(false);

  const openClose = () => {
    setFlag(!flag);
  }


  //  {flag ? <div className=" bg-red-400 h-6 w-6 opacity-100 transition-all"></div> : <div className=" bg-red-400 h-6 w-6 opacity-0 transition-all"></div>}

  return (

    <section className=" flex-center justify-between flex-row-reverse mt-6 ">

      <div className="shadow-[0_0_6px_1px_#E6E6E6] w-[40%] p-3   flex-row-reverse flex-center rounded-md">
        <div>
          <button onClick={openClose} className="pr-3  bg-gradient-to-r from-[#DBEAFE] to-[#93C5FD] text-white py-3 flex-center  bg-red-300 rounded-lg ">
            <span className="pr-3 pl-8">دسته بندی محصولات</span><Ico_category /></button>
        </div>

        {flag ? <div className=" opacity-100 transition-all p-5 absolute shadow-[0_0_6px_1px_#d0d0d0] bg-white rounded-md top-[28%] z-50  ">

          <ul className=" flex-center flex-row-reverse gap-x-5 p-1 ">
            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">افزایش وزن و کربوهیدرات</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>

            </li>

            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">پروتئین و عضله سازی</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>

            </li>

            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">کاهش وزن و چربیسوزی</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>
            </li>

            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">افزایش قدرت و استقامت</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>
            </li>

          </ul>

        </div> : <div className=" opacity-0 transition-all p-5 absolute shadow-[0_0_6px_1px_#d0d0d0] bg-white rounded-md top-[28%] z-50  ">

          <ul className=" flex-center flex-row-reverse gap-x-5 p-1 ">
            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">افزایش وزن و کربوهیدرات</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>

            </li>

            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">پروتئین و عضله سازی</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>

            </li>

            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">کاهش وزن و چربیسوزی</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>
            </li>

            <li className=" ">
              <p className="px-4 py-2 rounded-md bg-[#FFEDD5] text-[#F97316]">افزایش قدرت و استقامت</p>

              <ul className=" flex gap-y-7 flex-col items-center mt-7">
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">پروتئین</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">کربوهیدرات</li>
                <li className="text-[#4D4D4D] underline underline-offset-8 decoration-[#B6B5B5]">گینر و کربو</li>
              </ul>
            </li>

          </ul>

        </div>}


        <div className=" relative w-[55%] pr-3">
          <input type="text" placeholder="...محصول مورد نظر را جستجو کنید" className=" bg-[#DCFCE7] outline-none text-green-800 w-[100%]   ring-green-200 focus:ring-4 transition-all rounded-md py-2 px-2 text-right  placeholder:text-xs   placeholder:text-[#22C55E]" />
          <span className="p-1.5 rounded-[7px] absolute top-1 left-1 bg-[#22C55E]"><Ico_search className=" " /></span>
        </div>

      </div>


      <div className="flex-center gap-x-5">


        <div className="shadow-[0_0_6px_1px_#E6E6E6] rounded-xl relative p-2">
          <Ico_bag />
          <span className="font-vazir px-1.5   rounded-full -top-[10px] -right-[10px] bg-red-500 text-white absolute">5</span>
        </div>
        
        <div className="shadow-[0_0_6px_1px_#E6E6E6] rounded-xl p-2">
          <Ico_sun />
        </div>


      </div>
    </section>

  )
}

export default Topbar