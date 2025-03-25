import Image from "next/image"
import Col from '../../../../../public/icons/Group 50.svg'
import Apartment from '../../../../../public/icons/apartment.svg'
import Place from '../../../../../public/icons/Place.svg'
import arrow from '../../../../../public/icons/arrow_back_ios.svg'
import radio from '../../../../../public/icons/radio_button_checked blue.svg'
import BG1 from '../../../../../public/icons/BG1 copy.svg'
import BG3 from '../../../../../public/icons/BG1.svg'
import radioG from '../../../../../public/icons/radio_button_checked.svg'
import Link from "next/link"
import VideoComponent from "@/components/Video"
async function getData(id){
  const res = await fetch(`http://lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io/api/college/${id}`)
  const data = await res.json()
  return data
}
async function page({searchParams}){
  const {id} = await searchParams
  const data = await getData(id)
  console.log()
return (
    <div>
        <div className=" w-full lg:h-[400px] ">
            <div className=" absolute top-28 right-16">
                <div className=" w-full h-fit flex justify-end"><Image alt="" className=" w-6 h-6" src={arrow}/></div>
                <h1 className=" mt-14 text-white text-5xl font-noto font-extrabold">{data.department}</h1>
                <div className="flex"><h1 className=" w-full h-fit text-end text-white text-2xl font-noto font-regular mt-4">الجامعة التكنولوجية </h1><Image className=" w-[30px] h-[30px] ml-2 mt-4" alt="" src={Apartment}/></div>
                <div className="flex"><h1 className=" w-full h-fit text-end text-white text-2xl font-noto font-regular mt-3">بغداد ، الكرادة </h1><Image className=" w-[30px] h-[30px] ml-2 mt-3" alt="" src={Place}/></div>
            </div>
            <Image className=" w-full h-full object-cover" alt="" src={Col}/>
        </div>
        <div className="lg:w-[80%] mx-auto h-fit lg:mt-20">
        <div className=" py-6 w-full flex justify-between">
      <h1 className="text-gray font-noto font-bold text-5xl tracking-tight">الأفرع</h1>
      </div>
      <div className=" mt-6 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
        {data.branches.map((branch) => (
          <Link href={`/branch/ID?id=${branch.id}`}><div className= " mx-auto w-[230px] h-[240px]"><div className=" overflow-hidden mx-auto w-[220px] rounded-2xl h-[220px] "><Image width={1} height={1} className=" w-[100%] h-[100%]  object-cover" alt="" src={branch.imageUrl} /></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-xl">{branch.name}</h1></div></Link>
      ))}
      </div>
       </div>
       <div className=" pb-72 w-full h-full flex justify-center">
        <VideoComponent/>
        </div>
        <h1 className="text-gray text-center font-noto font-bold text-3xl pb-20 tracking-tight"> مقدمة الى {data.department} </h1>

      <div className=" mx-auto lg:w-[70%] h-fit lg:mt-12">
            <div className="flex justify-start"><Image className=" w-[50px] h-[50px]" alt="" src={radioG}/><h1 className=" my-auto ml-2 text-gray text-4xl font-noto font-bold ">مقدمة الى {data.department} في الجامعة التكنولوجية </h1></div>
            <h1 className=" w-full my-auto ml-2 mt-4 text-gray text-2xl font-noto font-regular text-start">{data.introduction}</h1>
      </div>
      <div className="lg:w-[70%] mx-auto h-fit lg:mt-32 pb-40">
            <div className="flex justify-start"><Image className=" w-[50px] h-[50px]" alt="" src={radio}/><h1 className=" my-auto ml-2 text-gray text-4xl font-noto font-bold ">الندوات المستضافة </h1></div>
            <h1 className=" w-full my-auto ml-2 mt-4 text-gray text-2xl font-noto font-regular text-start">{data.seminars}</h1>
      </div>

    </div>
  )
}

export default page