import React from 'react'
import Image from 'next/image'

const Card = ({title,cover,youtubeUrl}) => {
    return (
        <div className='card'>
        <div className='card_main'>
            <div className="card_cover">
            <Image src={cover} placeholder='blur' blurDataURL width={209} height={212} alt={title} />
            </div>
            <div className="card_trailer">
            <button className='youtube'><a href={youtubeUrl} target='blank'> Trailer </a></button>
            <button className='watch'><a href=''> Watch </a></button>
            </div>
             </div>
            
            </div>
       
    )
}

export default Card
