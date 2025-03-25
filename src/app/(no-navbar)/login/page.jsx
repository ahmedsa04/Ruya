import im from "../../../../public/Frame 10.svg"
import Image from "next/image"
import Ruya from "../../../../public/icons/Ruya.svg"
import Q from "../../../../public/icons/QIcon.svg"
import Link from "next/link"
const page = () => {
  return (
    <div className=" w-full h-full bg-whiteBG flex">
        <div className=" w-[45%] h-full"><Image draggable={false} alt="" className=" object-cover h-full w-full" src={im}/></div>
        <div className=" w-[55%] h-full p-10">
            <Image className=" w-10 h-10" alt="" src={Ruya}/>
            <div className=" w-3/5 h-3/5 mt-36 mx-auto">
                <h1 className=" text-dark text-center font-noto font-bold text-5xl">سجل الدخول في رؤية</h1>
                <div className=" w-full mt-20 px-12">
                    <h1 className=" mb-4 text-gray text-2xl font-noto font-bold">البريد الالكتروني</h1>
                    <input type="email" placeholder="example@email.com" className=" p-1 px-6 text-2xl text-gray font-noto w-full h-10 focus:outline-none bg-whiteBG border-dark rounded-2xl border-[0.5px]"/>
                </div>
                <div className=" w-full mt-6 px-12">
                    <h1 className=" mb-4 text-gray text-2xl font-noto font-bold">كلمة السر</h1>
                    <input type="password" className=" p-1 px-6 text-2xl text-gray font-noto w-full h-10 focus:outline-none bg-whiteBG border-dark rounded-2xl border-[0.5px]"/>
                </div>
                <h1 className=" text-ruya text-xl font-noto text-center font-medium cursor-pointer hover:underline pt-4">نسيت كلمة المرور؟</h1>
                <div className=" flex justify-center">
                    <button className=" mt-8 hover:bg-[#38c3ff]  bg-ruya text-whiteBG text-2xl font-noto font-bold p-2 px-6 rounded-3xl" type="button">سجل الدخول</button>
                </div>
                <div className=" flex justify-center mt-2">
                    <h1 className=" inline-block text-gray text-xl font-noto text-center font-regular pt-4 pr-2">لا تمتلك حساب؟</h1>
                    <Link prefetch={true} href={"/signup"}><h1 className=" inline-block text-ruya text-xl font-noto text-center font-medium cursor-pointer hover:underline pt-4">انشئ حساب</h1></Link>
                </div>

            </div>
            <Image className=" absolute right-8 bottom-8 w-6 h-6e" alt="" src={Q}/>
        </div>
    </div>
  )
}

export default page