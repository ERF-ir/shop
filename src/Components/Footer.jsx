import logo from "../assets/images/logo.png"
import Ico_patch from "../assets/svg-icon/Path 234.svg?react"
import Ico_insta from "../assets/svg-icon/instagram.svg?react"
import Ico_telegram from "../assets/svg-icon/Group 7.svg?react"
import Ico_whatsapp from "../assets/svg-icon/Group 8.svg?react"
import Ico_tel from "../assets/svg-icon/Path 235.svg?react"
import namad1 from "../assets/images/footer-samandehi.png"
import namad2 from "../assets/images/logo (1).png"
import Ico_heart from "../assets/svg-icon/heart.svg?react"

function Footer() {
  return (


    <>

      <footer className="shadow-[0_0_6px_1px_#E6E6E6] rounded-2xl mt-20 bg-gradient-to-l mt-52 from-[#fff] to-[#E8F5FF] grid grid-cols-12 ">

        <div className=" col-span-6 b pl-5 pt-4">


          <div className="relative">
            <button className="rounded-md mr-2 p-2.5 bg-[#E2E8F0] text-[#3B82F6] ">ارسال</button>
            <input type="text" placeholder="دریافت اطلاعات و تخفیف به ایمیل شما"
              className=" text-right pr-[60px] rounded-md placeholder:text-[#CAC7C7] w-[40%] placeholder:text-xs  outline-none py-2.5  border border-[#BBBBBB] " />
            <Ico_patch className="absolute top-2 right-[362px]" />
          </div>

          <div className="flex-center mt-10">

            <div className="flex-center gap-x-2">

              <div className="p-3 bg-white w-[36%] rounded-lg">
                <img src={namad1} className="" alt="" />
              </div>

              <div className="p-3 bg-white rounded-lg w-[40%]">
                <img src={namad2} className="" alt="" />
              </div>

            </div>



            <div className="flex gap-x-3 mr-52">
              <div>
                <div className="px-2 py-1 rounded-md text-sm flex-center justify-around bg-[#FFE2FB] text-[#F166D3]"><Ico_insta className="pr-2" /><span>shoping_mk</span></div>
                <div className="px-1  rounded-md text-sm flex-center justify-around mt-3 bg-[#D9F1FF] text-[#0083F0]"><Ico_telegram className="pr-2" /><span>@shop_ma</span></div>
              </div>


              <div>
                <div className="px-2 py-0.5 rounded-md text-sm flex-center justify-around bg-[#D9FFE4] text-[#0ABF3E]"><Ico_whatsapp className="pr-2" /><span className="font-vazir">09025478956</span></div>
                <div className="px-2 py-2  rounded-md text-sm flex-center justify-around mt-3 bg-[#FEF7D4] text-[#DC9A00]"><Ico_tel className="pr-2" /><span className="font-vazir">021- 37649</span></div>
              </div>

            </div>

          </div>


        </div>





        <div className=" col-span-6 flex-center justify-end p-5 mb-2  ">
          <div className="text-right w-[70%] pr-3 ">
            <p className="text-[#858585] pt-5">مکمل شاپ یک فروشگاه انلاین در زمینه فروش مکمل های ورزشی و اوریجینال میباشد...
              <span className="text-[#22C55E] pr-2 underline">اطلاعات بیشتر در مورد ما</span>
            </p>
            <p className="text-[#B6B6B6] mt-10">واحد 202_ مجتمع الماس_ بلوار دوم_ بلوار خیام _  مشهد ::</p>
          </div>
          <img className="w-[32%] opacity-[0.17]" src={logo} alt="" />

        </div>

        <div className="  col-span-12 flex   justify-center pb-2 ">

          <div className="text-center w-[50%]">
            <hr className="bg-[#CCCCCC] h-[2px] " />
            <p className="flex-center justify-center  mt-3 text-sm text-[#8A8A8A] flex-row-reverse">طراحی شده با <Ico_heart className="mx-1" /> توسط عرفان بیات</p>
          </div>


        </div>

      </footer>

    </>

  )
}

export default Footer