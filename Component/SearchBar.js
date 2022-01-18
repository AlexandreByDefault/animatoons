import React from 'react'
import Image from 'next/image'
import search from './search.svg'

const SearchBar = ({searchValue,OnSearchChange}) => {
    return (
        <form>
            <div className="search_input">
             <div className='search_svg_icon'> <Image src={search} alt="search" width={20} height={20} /></div>
             <input type='text' onChange={OnSearchChange} value={searchValue} placeholder='Search your favorite Anime' className='input_field'/>
             </div>
        </form>
    )
}

export default SearchBar
