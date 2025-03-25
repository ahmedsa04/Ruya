import Ruya from '../../public/icons/Ruya.svg'
import Home from '../../public/icons/home.svg'
import Compas from '../../public/icons/compas.svg'
import Profile from '../../public/icons/person.svg'
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'


export const Navbar = () => {
  return (
    <div className=" px-[70px] py-[8px] flex justify-between w-full h-fit z-50 fixed top-0 bg-whiteBG">
        <div className=" flex w-[35%] h-fit my-auto max-h-svh">
            <Image className=' my-auto w-[26px] h-[34px]' src={Ruya} alt='Ruya'/>
            <SearchBar/>
        </div>
        <div className=" l:[80%] xl:w-[45%] w-[70%] flex justify-end">
          <Link prefetch = {true} href={"/"} ><div className=' flex mx-8'>
            <Image className=' w-10 h-11 mb-2' alt='' src={Home} />
            <h1 className='text-xl font-noto font-regular text-gray my-auto'>Home</h1>
            </div></Link>
            <Link className=' my-auto' prefetch = {true} href={"/knowtest"} ><div className=' flex mx-8'>
            <h1 className='text-xl font-noto font-regular text-gray my-auto'>Know Yourself</h1>
            <Image className=' my-auto mx-3 w-fit h-10' alt='' src={Compas} />
            </div></Link>
            <Link className=' my-auto' prefetch = {true} href={"/profile"}><div className=' flex mx-8'>
            <Image className=' w-10 h-11 mb-2' alt='' src={Profile} />
            <h1 className='text-xl font-noto font-regular text-gray my-auto'>Profile</h1>
            </div></Link>
        </div>
    </div>
  )
}
