import im from "../../../../public/Frame 10.svg"
import Image from "next/image"
import Ruya from "../../../../public/icons/Ruya.svg"
import Q from "../../../../public/icons/QIcon.svg"
const page = () => {
  return (
    <div className=" w-full h-full bg-whiteBG flex">
        <div className=" w-[45%] h-full"><Image draggable={false} alt="" className=" object-cover h-full w-full" src={im}/></div>
        <div className=" w-[55%] h-full p-10">
            <Image className=" w-10 h-10" alt="" src={Ruya}/>
            <div className=" w-3/5 h-3/5 mt-32 mx-auto">
                <h1 className=" text-nowrap text-dark text-center font-noto font-bold text-5xl">أنشئ حساب في رؤية</h1>
                <div className=" max-w-full mt-20 px-12">
                    <h1 className=" pb-2 text-gray text-xl font-noto font-bold">الاسم</h1>
                    <input type="text" className=" p-1 px-6 text-xl text-gray font-noto w-full h-10 focus:outline-none bg-whiteBG border-dark rounded-2xl border-[0.5px]"/>
                </div>
                <div className = "grid grid-flow-col grid-cols-2 px-12 mt-6">
                    <div className=" px-1">
                        <h1 className=" pb-2 text-gray text-xl font-noto font-bold">تاريخ الولادة</h1>
                        <input type="date" className=" w-full p-1 px-6 text-xl text-gray placeholder:text-gray font-noto h-10 focus:outline-none bg-whiteBG border-dark rounded-2xl border-[0.5px]"/>
                    </div>
                    <div className=" px-1">
                    <div className=" flex">
                        <h1 className=" whitespace-nowrap px-2 pb-2 text-lightGray text-xl font-noto font-medium">(اختياري)</h1>
                        <h1 className=" whitespace-nowrap pb-2 text-gray text-xl font-noto font-bold"> معدل الدراسة</h1>
                    </div>
                    <input type="number" className=" w-full p-1 px-6 text-xl text-gray font-noto h-10 focus:outline-none bg-whiteBG border-dark rounded-2xl border-[0.5px]"/>
                    </div>
                </div>
                <div className=" w-full mt-6 px-12">
                    <h1 className=" pb-2 text-gray text-xl font-noto font-bold">البريد الالكتروني</h1>
                    <input type="email" placeholder="example@email.com" className=" p-1 px-6 text-xl text-gray font-noto w-full h-10 focus:outline-none bg-whiteBG border-dark rounded-2xl border-[0.5px]"/>
                </div>
                <div className=" w-full mt-6 px-12">
                    <h1 className=" pb-2 text-gray text-xl font-noto font-bold">كلمة السر</h1>
                    <input type="password" className=" p-1 px-6 text-xl text-gray font-noto w-full h-10 focus:outline-none bg-whiteBG border-dark rounded-2xl border-[0.5px]"/>
                </div>
                <div className=" flex justify-center">
                    <button className=" mt-8 hover:bg-[#38c3ff]  bg-ruya text-whiteBG text-2xl font-noto font-bold p-2 px-6 rounded-3xl" type="button">انشئ الحساب</button>
                </div>

            </div>
            <Image className=" absolute right-8 bottom-8 w-6 h-6" alt="" src={Q}/>
        </div>
    </div>
  )
}

export default page