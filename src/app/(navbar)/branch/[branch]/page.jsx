import Image from "next/image"
import Uni from '../../../../../public/icons/Group 48.svg'
import Apartment from '../../../../../public/icons/apartment.svg'
import Public from '../../../../../public/icons/public.svg'
import history from '../../../../../public/icons/history.svg'
import arrow from '../../../../../public/icons/arrow_back_ios.svg'
import branch from '../../../../../public/icons/BG1 copy.svg'
import grads from '../../../../../public/icons/graduation.svg'
import lang from '../../../../../public/icons/language.svg'
import cal from '../../../../../public/icons/calender.svg'
import radio from '../../../../../public/icons/radio_button_checked blue.svg'
import radioG from '../../../../../public/icons/radio_button_checked.svg'
import Video from '../../../../../public/icons/Group 21.svg'
async function getData(id){
    const res = await fetch(`http://lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io/api/Branch/${id}`)
    const data = await res.json()
    return data
}
async function page({searchParams}){
    const {id} = await searchParams
    const data = await getData(id)
    console.log(data)
    return (
    <div>
        <div className=" w-full lg:h-[400px] ">
            <div className=" absolute top-28 left-16">
                <Image alt="" className=" w-6 h-6" src={arrow}/>
                <h1 className=" mt-14 text-white text-2xl font-noto font-bold">University Of Technology</h1>
                <div className="flex"><h1 className=" text-white text-2xl font-noto font-bold underline">14</h1><h1 className=" text-white text-2xl font-noto font-regular ml-[6px] ">college</h1><Image className=" w-[30px] h-[30px] ml-2" alt="" src={Apartment}/></div>
                <div className="flex"><h1 className=" text-white text-2xl font-noto font-regular ">Public school </h1><Image className=" w-[30px] h-[30px] ml-2" alt="" src={Public}/></div>
                <div className="flex"><h1 className=" text-white text-2xl font-noto font-regular ">Baghdad , Karrada </h1></div>
                <div className="flex"><h1 className=" text-white text-2xl font-noto font-regular ">1975 </h1><Image className=" w-[30px] h-[30px] ml-2" alt="" src={history}/></div>
            </div>
            <div className=" absolute top-52 right-16">
                <div className=" w-72 h-fit"> 
                    <Image className=" w-72 h-72 object-cover rounded-3xl" alt="" width={288} height={288} src={data.imageUrl}/>
                    <h1 className=" mt-4 text-gray text-2xl font-noto font-bold text-center">{data.name}</h1>
                    <h1 className=" text-gray text-2xl font-noto font-regular text-center">{data.department}</h1>
                </div>
            </div>  
            <Image className=" w-full h-full object-cover" alt="" src={Uni}/>
        </div>
        <div className=" flex justify-between lg:w-[30%] h-fit lg:ml-56 lg:mt-10">
        <div className="flex"><Image className=" w-[30px] h-[30px]" alt="" src={grads}/><h1 className=" ml-2 text-gray text-2xl font-noto font-regular ">بكالوريوس</h1></div>
        <div className="flex"><Image className=" w-[30px] h-[30px]" alt="" src={lang}/><h1 className=" ml-2 text-gray text-2xl font-noto font-regular ">English</h1></div>
        <div className="flex"><Image className=" w-[30px] h-[30px]" alt="" src={cal}/><h1 className=" ml-2 text-gray text-2xl font-noto font-regular ">4 سنوات</h1></div>
        </div>
        <div className="lg:w-[50%] h-fit lg:ml-56 lg:mt-10">
            <div className="flex"><Image className=" w-[40px] h-[40px]" alt="" src={radio}/><h1 className=" my-auto ml-2 text-gray text-3xl font-noto font-bold ">ماذا ستتعلم </h1></div>
            <h1 className=" w-full my-auto ml-2 mt-4 text-gray text-2xl font-noto font-regular">{data.whatYouLearn}</h1>
            <div className="flex mt-36"><Image className=" w-[40px] h-[40px]" alt="" src={radioG}/><h1 className=" my-auto ml-2 text-gray text-3xl font-noto font-bold ">المهارات المطلوبة </h1></div>
            <ul className=" list-disc float-left text-gray text-2xl">
            {data.skillsNeeded.map((skill)=>(
                <li key={skill} className=" ml-8">{skill}</li>
            ))}
            </ul>
            <div className="flex mt-64"><Image className=" w-[40px] h-[40px]" alt="" src={radioG}/><h1 className=" my-auto ml-2 text-gray text-3xl font-noto font-bold ">المسارات المهنية </h1></div>
            <ul key={2} className=" list-disc float-left text-gray text-2xl">
            {data.careers.map((career)=>(
                <li className=" ml-8">{career}</li>
            ))}
        </ul>
       </div>
       <div className=" w-full h-full flex justify-center">
        <Image className=" w-[900px] h-[700px]" alt="" src={Video}/>
      </div>
      <h1 className="text-gray text-center -mt-12 font-noto font-bold text-3xl tracking-tight pb-32">مقدمة عن الذكاء الاصطناعي</h1> 

    </div>
  )
}

export default page