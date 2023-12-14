import logo from "../assets/images/logo.png"
import Ico_line from "../assets/svg-icon/line.svg?react"
import Ico_export from "../assets/svg-icon/export.svg?react"

function Header() {
  return (

    <header className=" text-sm flex-center py-2 pr-5 pl-10 rounded-b-xl shadow-[0_0_6px_1px_#E6E6E6] items-center flex-row-reverse justify-between mx-20   font-iran">

     
      <div className=" flex-center flex-row-reverse">
       <div className=" w-20">
        <img src={logo} alt="" />
       </div>
        <ul className=" text-[#626F6F]  mr-16 flex-center gap-x-8">
          <li className="hover:text-green-500 hover:bg-green-200 p-2 rounded-full transition-all">لیست محصولات</li>
          <li className="hover:text-green-500 hover:bg-green-200 p-2 rounded-full transition-all">تماس باما</li>
          <li className="hover:text-green-500 hover:bg-green-200 p-2 rounded-full transition-all">درباره ما</li>
          <li className="hover:text-green-500 hover:bg-green-200 p-2 rounded-full transition-all">مقالات</li>
        </ul>
      </div>

      <div className="flex-center ">
        <div className="p-[10px] border rounded-l-md border-[#90c0f8] border-r-0">
          <Ico_export/>
        </div>

        <div className=" text-[#3B82F6] gap-x-1 p-2 flex-center border rounded-r-md border-[#90c0f8]">
          <a href="#">ورود</a>
          <div className="mt-1"> <Ico_line  /></div>
          <a href="#">ثبت نام</a>
        </div>


      </div>

    </header>

  )
}

export default Header
