"use client"
import { useEffect, useState } from 'react'
import searchIcon from '../../public/icons/search.svg'
import Image from 'next/image'
import Link from 'next/link'



const SearchBar = () => {
    const [focused,setFocused] = useState(false)
    const [search,setSearch] = useState(null)
    const [Data,setData] = useState([])
    const [filterBio,setFilterBio] = useState(false)
    const [filterSci,setFilterSci] = useState(false)
    const [filterLit,setFilterLit] = useState(false)

    useEffect(()=>{
      if(search){
      if(search.length > 0){
      fetch(`http://lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io/api/Home/Search?search=${search}`)
        .then((res)=>res.json())
        .then((data)=>setData(data))}}
    },[search])
  return (
    <div className=' mx-16 w-full flex justify-start relative'>
        <input type='text' onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setFocused(true)} placeholder='Search' className=' border-[0.5px] border-gray w-[80%] h-10 placeholder:text-gray text-lg align-middle text-gray pl-10 text-md font-noto font-bold placeholder:font-bold focus:outline-none bg-transparent rounded-2xl my-auto '/>
        <Image className=' absolute w-7 h-7 my-[6px] mx-2' src={searchIcon} alt='search'/>
        {focused ?<div className=' w-[80%] h-fit bg-whiteBG border border-gray absolute p-2 pb-10  top-16 rounded-3xl'>
          <h1 className=' mt-2 text-gray font-noto text-lg text-center'>Filter</h1>
          <span className={` mx-auto w-[100%] h-fit grid grid-flow-col mt-3 border-b border-gray pb-3`}>
            <div key={2} onClick={()=>setFilterSci(!filterSci)}  className= {` cursor-pointer mx-auto w-fit h-fit bg-transparent ${filterSci?" border-2 border-ruya ":"border border-gray"} rounded-xl p-1 px-4`}>
              <h1 className='text-gray cursor-pointer font-noto font-semibold text-md text-center'>Scientific</h1>
            </div>
            <div key={3} onClick={()=>setFilterBio(!filterBio)}  className= {` cursor-pointer mx-auto w-fit h-fit bg-transparent ${filterBio?" border-2 border-ruya ":"border border-gray"} rounded-xl p-1 px-4`}>
              <h1 className='text-gray cursor-pointer font-noto font-semibold text-md text-center'>Biological</h1>
            </div>
            <div key={4} onClick={()=>setFilterLit(!filterLit)}  className= {` cursor-pointer mx-auto w-fit h-fit bg-transparent ${filterLit?" border-2 border-ruya ":"border border-gray"} rounded-xl p-1 px-4`}>
              <h1 className='text-gray cursor-pointer font-noto font-semibold text-md text-center'>Literate</h1>
            </div>
          </span>
          <h1 className=' mt-3 text-gray font-noto text-lg text-center'>Result</h1>
            {Data.map((result)=>(
              <Link href={result.source == 'الجامعه التكنولوجيه' ? `/college/ID?id=${result.id}`:`/branch/ID?id=${result.id}`}>
              <div key={result.id} className=' w-full h-fit px-1 py-2'>
                <div className=' w-full h-fit flex'>
                  <img width={0} height={0} className=' w-11 h-11 rounded-md' src={result.imageUrl} alt='search'/>
                  <div className=' mx-2'>
                  <h1 className=' text-gray font-noto text-md text-start font-semibold'>{result.title}</h1>
                  <h1 className=' text-lightGray font-noto text-sm text-start font-medium'>{result.source}</h1>
                  </div>
                </div>
              </div></Link>
            ))}
        </div>:<></>}
    </div>
  )
}

export default SearchBar