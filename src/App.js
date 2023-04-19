import './App.css';
import { useState, useEffect } from 'react';
import {getReq} from './services/apiCall'
import {setItem} from './utils/storage'

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
        fetchDataApi() 
  },[])

  const fetchDataApi= async()=>{
      const url="https://randomuser.me/api";
      try{
        const getData=await getReq(url)
        console.log(getData?.data?.results)
        setData(getData?.data?.results)
        setItem('result',getData?.data?.results)
        console.log(data)
      }
      catch(err){
          console.log('err::',err)
      }
  }

  return (
    <>
    <h1 className='header'>Sample Test </h1>
       {data && data.map((item,i)=>
         <div className='card'  key={i}>  
           <p> <strong>Full name :</strong>  {item.name.title}  {item.name.first}  {item.name.last} </p>
           <p>  <strong>Email :</strong> {item.email} </p>
         </div>
       )}
    </>
  );
}

export default App;
