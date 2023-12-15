import Navbar from "./Navbar"
import Topbar from "./Topbar"

function Header() {
  return (

    <>
    
    <header className=" text-sm flex-center py-2 pr-5 pl-10 rounded-b-xl shadow-[0_0_6px_1px_#E6E6E6] items-center flex-row-reverse justify-between  ">

      <Navbar/>
     
     

    </header>
    
    <Topbar/>
     
    </>


  )
}

export default Header
