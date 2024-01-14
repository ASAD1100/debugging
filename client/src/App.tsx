
import './App.css'
import Navbar from './components/navbar/Navbar'
import Card from './components/cards/Cards'
import FilterBar from './components/filterBar/FilterBar.jsx'
import { useState ,useEffect} from 'react'
import Axios  from 'axios'

const App =() =>{
 const[data,setData]=useState([])
 
 const getData=async()=>{
  const response=await Axios.get('http://localhost:3000/getData');
  setData(response.data);
 }

 useEffect(()=>{
  getData();
 },[setData])

 const filterData=[...new Set(data.map(item=>item.topic))]
 const filterItems=(topic)=>{
    const newItems =data.filter((newVal)=>newVal.topic===topic)
    setData(newItems)

 }
  return (
    <>
      <Navbar/>
      <FilterBar 
      filterData={filterData} 
      filterItems={filterItems}
      setData={setData}
      data={data}/>
     
     {data.map(index=>(
        
          <div key={index.title}>
            <Card 
            title={index.title}
             topic={index.topic} 
              url={index.url} 
              sector={index.sector} 
              published={index.published} 
              added={index.added}
              
              />
    
          </div>
      ))
         
} 
    </>
 );
}
  
export default App
