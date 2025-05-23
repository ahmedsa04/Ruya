import Image from 'next/image'
export const BestCards = ({ Best }) => {
  return (
    <div key={Best.branch} className=' w-full h-full relative'>
      <div className=" ml-20 bottom-10 absolute w-80">
        <h1 className=" text-white font-noto font-bold text-[24px]">{Best.branch}</h1>
        <h1 className=" text-white mt-4 font-noto font-semibold text-[19px]">{Best.department}</h1>
        <h1 className=" text-white font-noto font-regular text-[15px]">{Best.university}</h1>
        <div className=" mt-3 flex"><h1 className=" text-white font-noto underline font-medium text-[18px]">تعرف للمزيد</h1></div>
      </div>
      <img width={1} height={1} className=" w-full h-[100%] object-cover" alt="" loading='lazy' src={Best.imageUrl} /></div>
  )
}
