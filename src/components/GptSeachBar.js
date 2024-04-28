import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSeachBar = () => {
    const key = useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='bg-black grid grid-cols-12 w-1/2 rounded-lg'>
        <input className='m-4 p-2 col-span-9' placeholder={lang[key].gptSearchPlaceHolder}></input>
        <button className='bg-red-600 col-span-3 rounded-lg m-4 p-2  text-white  hover:bg-red-900 cursor-pointer'>{lang[key].search}</button>
      </form>
    </div>
  )
}

export default GptSeachBar
