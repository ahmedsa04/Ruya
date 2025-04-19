
import Image from "next/image";
import Video1 from '../../../public/icons/Group 122.svg'
import Video2 from '../../../public/icons/Group 123.svg'
import { HorizontalCards } from "@/components/HorizontalCards";
import { BestCards } from "@/components/BestCards";

async function getData() {
  const res = await fetch('https://ruya-vic8.vercel.app/api/proxy/home');
  const contentType = res.headers.get('content-type');
  
  let data;
  if (contentType.includes('application/json')) {
    data = await res.json();
  } else if (contentType.startsWith('image/')) {
    data = await res.blob(); // to create image URL
  } else {
    data = await res.text(); // fallback
  }
  return data;
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  var best = [data[0], data[1] , data[2]]
  return (
    <div className=" scroll-smooth pt-20" >
      <div className=" py-4 px-[70px] w-full flex justify-between">
      <h1 className="text-gray  font-noto font-bold text-3xl tracking-tight">تخصصات مناسبة</h1>
      <h1 className="text-[#969696]  font-noto font-light text-2xl tracking-tight">تخصصات قد تجذب اهتمامك</h1>
      </div>
      <div className=" mx-auto w-11/12 py-4 h-fit grid grid-flow-col col-start-9 overflow-x-scroll overflow-y-hidden scroll-smooth">
      {data.map((product)=>(
        <div key={product.branch} >
          <HorizontalCards  HorCards={product}/>
        </div>
      ))}
      </div>
      <div className=" py-8 px-[70px] w-full flex justify-between">
      <h1 className="text-gray  font-noto font-bold text-3xl tracking-tight">مقترحة لك</h1>
      <h1 className="text-[#969696]  font-noto font-light text-2xl tracking-tight">افضل الاختصاصات لك </h1>
      </div>
      <div className=" flex w-full h-[404px]">
        {best.map((branch,index)=>(
          <div key={index} className= {`${index === 1 ? "-mt-6 w-5/12 h-[110%]":" w-1/3 h-[100%]"}`}>
          <BestCards Best={branch}/>
          </div>
        ))}
        
      </div>
      <div className=" pt-20 px-[70px] w-full flex justify-between">
      <h1 className="text-gray  font-noto font-bold text-3xl tracking-tight">محتوى متنوع</h1>
      <h1 className="text-[#969696]  font-noto font-light text-2xl tracking-tight">نصائح ومعلومات مفيدة حول التخصصات</h1>
      </div>
      <div className=" w-full h-full flex justify-center pt-24">
        <Image className=" w-[700px] h-[500px] mx-auto" alt="" src={Video1}/>
        <Image className=" w-[700px] h-[500px] mx-auto" alt="" src={Video2}/>
      </div>
      <div className=" w-full h-full flex justify-center pt-24">
      <h1 className="text-gray text-center mx-auto font-noto font-bold -mt-32 text-2xl tracking-tight pb-32">مقدمة في علوم الحاسوب في الجامعة التكنولوجية</h1> 
      <h1 className="text-gray text-center mx-auto font-noto font-bold -mt-32 text-2xl tracking-tight pb-32">مقدمة في هندسة الطائرات في الجامعة التكنولوجية</h1> 
      </div>

    </div>
  )};