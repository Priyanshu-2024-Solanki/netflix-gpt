import React from 'react'
import GptSeachBar from './GptSeachBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { LOGIN_PAGE_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={LOGIN_PAGE_BG}
          alt="main"
        ></img>
      </div>
        <GptSeachBar/>
        <GptMovieSuggestion/> 
    </div>
  )
}

export default GptSearch
