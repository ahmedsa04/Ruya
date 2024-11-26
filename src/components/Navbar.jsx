import Ruya from '../../public/icons/Ruya.svg'
import search from '../../public/icons/search.svg'
import Home from '../../public/icons/home.svg'
import Compas from '../../public/icons/compas.svg'
import Profile from '../../public/icons/person.svg'
import Image from 'next/image'


export const Navbar = () => {
  return (
    <div className=" px-[70px] py-[8px] flex justify-between w-full h-fit">
        <div className=" flex w-1/2 h-full my-auto">
            <Image className=' my-auto w-[26px] h-[34px]' src={Ruya} alt='Ruya'/>
            <div className=' mx-6 w-full flex justify-start'>
            <input type='text' placeholder='Search' className=' border-[0.5px] border-black w-[60%] h-10 placeholder:text-gray text-gray pl-10 text-md font-noto placeholder:font-bold focus:outline-none rounded-2xl my-auto '/>
            <Image className=' absolute w-7 h-7 my-[6px] mx-2' src={search} alt='search'/>
            </div>
        </div>
        <div className=" pl-16 l:[80%] xl:w-[45%] w-[70%] flex justify-between">
          <div className=' flex'>
            <Image className=' w-10 h-11 mb-2' alt='' src={Home} />
            <h1 className='text-xl font-noto font-regular text-gray my-auto'>Home</h1>
            </div>
            <div className=' -mr-8 flex'>
            <h1 className='text-xl font-noto font-regular text-gray my-auto'>Know Yourself</h1>
            <Image className=' mx-3 w-10 h-11' alt='' src={Compas} />
            </div>
            <div className=' flex'>
            <Image className=' w-10 h-11 mb-2' alt='' src={Profile} />
            <h1 className='text-xl font-noto font-regular text-gray my-auto'>Profile</h1>
            </div>
        </div>
    </div>
  )
}
