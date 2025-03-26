import Link from "next/link"
import Image from "next/image"
export function HorizontalCards({ HorCards }) {
  console.log(HorCards.filePath)
  return (
    <Link href={`/branch/ID?id=${HorCards.id}`}><div key={HorCards.branch} className=" w-[230px] h-[280px]"><div className=" overflow-hidden mx-auto w-[200px] rounded-2xl h-[200px] "><img width={200} height={200} className=" hover:contrast-75 w-[100%] h-[100%]  object-cover" alt="" loading="lazy" src={HorCards.imageUrl} /></div><h1 className=" mt-2 text-center font-noto font-bold text-gray text-lg">{HorCards.branch}</h1><h1 className=" text-center font-noto font-medium text-gray text-lg">{HorCards.department}</h1></div></Link>
  )
}
