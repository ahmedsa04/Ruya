import Image from "next/image";
import BG1 from '../../public/icons/BG1 copy.svg'
import BG3 from '../../public/icons/BG1.svg'
import Arrwo from '../../public/icons/Arrow up.svg'
import Video from '../../public/icons/Group 21.svg'
export default function Home() {
  return (
    <div className=" scroll-smooth" >
      <div className=" py-6 px-[70px] w-full flex justify-between">
      <h1 className="text-gray  font-noto font-bold text-3xl tracking-tight">Relavent Major's</h1>
      <h1 className="text-neutral-500  font-noto font-light text-2xl tracking-tight">Majors may catch your interest</h1>
      </div>
      <div className=" mx-auto w-11/12 h-fit grid grid-flow-col col-start-9 overflow-scroll scroll-smooth">
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" alt="" objectFit="cover" src={BG1}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG1}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG3}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG3}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG1}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG3}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG1}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG3}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">Computer Science</h1></div>
        <div className=" w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[170px] rounded-2xl h-[170px] bg1-slate-600"><Image className=" w-[100%] h-[100%] relative object-cover" objectFit="cover"alt="" src={BG1}/></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">Artificial Intelligence</h1><h1 className=" text-center font-noto font-medium text-gray text-xl">Computer Science</h1></div>
      </div>
      <div className=" py-6 px-[70px] w-full flex justify-between">
      <h1 className="text-gray  font-noto font-bold text-3xl tracking-tight">Suited For You</h1>
      <h1 className="text-neutral-500  font-noto font-light text-2xl tracking-tight">Best computer science majors </h1>
      </div>
      <div className=" flex w-full h-[500px]">
        <div className=" w-1/3 h-[100%]"><div className=" ml-20 mt-[275px] absolute w-80">
          <h1 className=" text-white font-noto font-bold text-[28px]">Artificial Intlligence</h1>
          <h1 className=" text-white mt-4 font-noto font-semibold text-[22px]">Computer Science</h1>
          <h1 className=" text-white font-noto font-regular text-[15px]">University Of Technolgy</h1>
          <div className=" mt-3 flex"><h1 className=" text-white font-noto underline font-medium text-[18px]">Know More</h1><Image className=" w-5 h-5 ml-2 mt-1" alt="" src={Arrwo}/></div>
          </div><Image className=" w-full h-[100%] object-cover" alt="" src={BG3}/></div>
        <div className=" w-5/12 h-[110%]"><div className=" ml-20 mt-[275px] absolute w-80">
          <h1 className=" text-white font-noto font-bold text-[28px]">Artificial Intlligence</h1>
          <h1 className=" text-white mt-4 font-noto font-semibold text-[22px]">Computer Science</h1>
          <h1 className=" text-white font-noto font-regular text-[15px]">University Of Technolgy</h1>
          <div className=" mt-3 flex"><h1 className=" text-white font-noto underline font-medium text-[18px]">Know More</h1><Image className=" w-5 h-5 ml-2 mt-1" alt="" src={Arrwo}/></div>
          </div><Image className=" w-full h-full object-cover -mt-7" alt="" src={BG1}/></div>
        <div className=" w-1/3 h-full"><div className=" ml-20 mt-[275px] absolute w-80">
          <h1 className=" text-white font-noto font-bold text-[28px]">Artificial Intlligence</h1>
          <h1 className=" text-white mt-4 font-noto font-semibold text-[22px]">Computer Science</h1>
          <h1 className=" text-white font-noto font-regular text-[15px]">University Of Technolgy</h1>
          <div className=" mt-3 flex"><h1 className=" text-white font-noto underline font-medium text-[18px]">Know More</h1><Image className=" w-5 h-5 ml-2 mt-1" alt="" src={Arrwo}/></div>
          </div><Image className=" w-full h-full object-cover" alt="" src={BG3}/></div>
      </div>
      <div className=" py-6 px-[70px] w-full flex justify-between">
      <h1 className="text-gray  font-noto font-bold text-3xl tracking-tight">Helpful Content</h1>
      <h1 className="text-neutral-500  font-noto font-light text-2xl tracking-tight">Helpful tips and information about majors</h1>
      </div>
      <div className=" w-full h-full flex justify-center">
        <Image className=" w-[900px] h-[700px]" alt="" src={Video}/>
      </div>
      <h1 className="text-gray text-center -mt-12 font-noto font-bold text-3xl tracking-tight pb-32">Introduction To Computer Science At UOT</h1> 
    </div>
  )};