import Image from "next/image"
import ProfileBG from "../../../../public/Frame 10 (5).svg"
import arrow from '../../../../public/icons/arrow_back_ios copy.svg'
import collapseArrow from '../../../../public/icons/arrow_back_ios copy 2.svg'

import compas from '../../../../public/icons/compas copy.svg'

const page = () => {
  return (
    <div className=" pt-[65px]">
        <div>
            <div className=" w-fit h-fit m-8 absolute flex">
                <Image alt="" className=" w-7 h-7 my-auto" src={arrow}/>
                <h1 className=" px-1 text-dark font-noto text-3xl font-bold align-middle">Your Profile</h1>
            </div>
            <Image alt="" className=" w-full " src={ProfileBG}/>
        </div>
        <div className=" w-full h-full flex">
        <div className=" w-[50%] h-fit p-4 flex">
            <Image alt="" src={Edit} className=" w-8 h-8 mt-10 ml-auto"/>
            <div className=" px-4 grid grid-cols-2 mr-auto "><div className=" w-fit h-fit grid grid-rows-2 pt-10"><h1 className=" text-dark font-noto font-bold text-2xl">Name</h1>
            <h1 className=" text-gray font-noto font-regular text-2xl">Ahmed Raed</h1></div>
            <div className=" w-fit h-fit grid grid-rows-2 pt-10"><h1 className=" text-dark font-noto font-bold text-2xl">Birth Date</h1>
            <h1 className=" text-gray font-noto font-regular text-2xl">2004/7/5</h1></div>
            <div className=" w-fit h-fit grid grid-rows-2 pt-10"><h1 className=" text-dark font-noto font-bold text-2xl">Email</h1>
            <h1 className=" text-gray font-noto font-base text-2xl">example@gmail.com</h1>
                </div>
            </div>
        </div>
        <div className=" w-[50%] h-fit">
            <div className="">
            <h1 className=" text-dark font-noto font-bold text-2xl p-14 text-center">Know Yourself Test's</h1>
            <div className=" px-10 grid grid-flow-row mx-auto w-fit space-y-6 ">
                <div className=" flex">
                <Image alt="" src={compas} className=" w-10 h-10"/>
                <h1 className=" text-gray font-noto font-regular text-2xl my-auto px-4 ">Test 3</h1>
                <h1 className=" text-lightGray font-noto font-regular text-2xl my-auto pl-12 ">2025/2/3</h1>
                <Image alt="" src={collapseArrow} className=" w-5 h-5 rotate-180 mt-2 ml-10" />
                </div>
                <div className=" flex">
                <Image alt="" src={compas} className=" w-10 h-10"/>
                <h1 className=" text-gray font-noto font-regular text-2xl my-auto px-4 ">Test 3</h1>
                <h1 className=" text-lightGray font-noto font-regular text-2xl my-auto pl-12 ">2025/2/3</h1>
                <Image alt="" src={collapseArrow} className=" w-5 h-5 rotate-180 mt-2 ml-10" />
                </div>
                <div className=" flex">
                <Image alt="" src={compas} className=" w-10 h-10"/>
                <h1 className=" text-gray font-noto font-regular text-2xl my-auto px-4 ">Test 3</h1>
                <h1 className=" text-lightGray font-noto font-regular text-2xl my-auto pl-12 ">2025/2/3</h1>
                <Image alt="" src={collapseArrow} className=" w-5 h-5 rotate-180 mt-2 ml-10" />
                </div>
            </div>
        </div>
        </div></div>
    </div>
  )
}

export default page