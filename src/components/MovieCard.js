import React from 'react'
import { IMAGE_CDN } from '../utils/validate'
const MovieCard = ({imageURL}) => {
  return (
    <div className='w-40 pr-2'>
      <img alt='movie' src={IMAGE_CDN+imageURL}></img>
    </div>
  )
}

export default MovieCard
