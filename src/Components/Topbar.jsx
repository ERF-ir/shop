import Ico_category from "../assets/svg-icon/category.svg?react"
import Ico_search from "../assets/svg-icon/search.svg?react"
import Ico_sun from "../assets/svg-icon/sun-1.svg?react"
import Ico_bag from "../assets/svg-icon/bag-2.svg?react"

function Topbar() {
  return (

    <section className=" flex-center justify-between flex-row-reverse mt-6 ">

      <div className="shadow-[0_0_6px_1px_#E6E6E6] w-[40%] p-3   flex-row-reverse flex-center rounded-md">
        <div>        
                <button className="pr-3  bg-gradient-to-r from-[#DBEAFE] to-[#93C5FD] text-white py-3 flex-center  bg-red-300 rounded-lg "><span className="pr-3 pl-8">دسته بندی محصولات</span><Ico_category /></button>
        </div>

        <div className=" relative w-[55%] pr-3">
          <input type="text" placeholder="...محصول مورد نظر را جستجو کنید" className=" bg-[#DCFCE7] outline-none text-green-800 w-[100%]   ring-green-200 focus:ring-4 transition-all rounded-md py-2 px-2 text-right  placeholder:text-xs   placeholder:text-[#22C55E]" />
          <span className="p-1.5 rounded-[7px] absolute top-1 left-1 bg-[#22C55E]"><Ico_search className=" " /></span>
        </div>
        
      </div>


      <div className="flex-center gap-x-5">


          <div className="shadow-[0_0_6px_1px_#E6E6E6] rounded-xl relative p-2">
              <Ico_bag/>
              <span className="font-vazir px-1.5   rounded-full -top-[10px] -right-[10px] bg-red-500 text-white absolute">5</span>
          </div>
          <div className="shadow-[0_0_6px_1px_#E6E6E6] rounded-xl p-2">
              <Ico_sun/>
          </div>
          

      </div>
    </section>

  )
}

export default Topbar