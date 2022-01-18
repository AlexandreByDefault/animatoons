import Head from 'next/head'
import Navbar from '../Component/Navbar'
import {fetchUrl} from '../Component/useFetch'
import React,{useState} from 'react'
import style from '../styles/Home.module.css'
import Card from '../Component/Card'
import SearchBar from '../Component/SearchBar'

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OSIsIm5iZiI6MTYzNTU2MTkzOSwiZXhwIjoxNjM4MTUzOTM5LCJpYXQiOjE2MzU1NjE5Mzl9.cBIvtkDFKas8ng-1zjo_So1wP51w479wW64nHJ4VE0c`
export async function getStaticProps() {
  const fetching = fetchUrl('anime',token);
  const response = await (await fetching).json()
  const {documents} = response.data

  return {
    props: {documents}, // will be passed to the page component as props
  }
} 


export default function Animes({documents}) {
  const [search, setSearch] = useState('')

  function handleSearch (e){
   setSearch(e.target.value)
  }
  return ( <div className={style.Home}>
   <Navbar />
   <SearchBar OnSearchChange={handleSearch} searchValue={search} />
   <div className={style.container}>

   {documents.map(doc => <Card key={doc.anilist_id} cover={doc.cover_image} title={doc.titles.en} youtubeUrl={doc.trailer_url} />)}
   </div>
   
   </div>
  )
}
