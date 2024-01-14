import React from 'react'
import './filterBar.css'


const FilterBar = ({filterData, filterItems, setData,data,setFilter}) => {
  return (
    <div className='filter-container'>
        <h1>data filter</h1>
            <div className="row">
                
                {filterData.map(val=>(
                    <button onClick={()=>filterItems(val)} >

                        {val}

                    </button>
                ))}
                <button onClick={()=> setData(data)}>
                    All
                </button>
            </div>


        </div>
  )
}

export default FilterBar


