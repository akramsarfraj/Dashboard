import React, { useState } from 'react'
import {Chart,
    LinearScale,
    BarElement,
    
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    PointElement,
    LineElement
} from 'chart.js'

import { Bar } from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
)


function IntensityGraph({sector}) {
    let [filter,setFilter] = useState([])
    let [value,setValue] = useState('all')

    let sectors = [...sector];
    let energy_sec_label = sectors.map((e)=>{
        return e.sector
    })
    let energy_sec_data = sectors.map((e)=>{
        
            return e.intensity
        
        
    })

  

    let filter_sector =(e)=>{
        

        let f_data = sectors.map((x)=>{
                if(x.sector === e.target.value){
                    return x.intensity
                }else{
                    return 0
                }
            })
        setFilter([...f_data])
        setValue(e.target.value)
    }
    
    let drop = []
    for( let x of sectors){
    
        if (!drop.includes(x.sector) && x.sector !== '') {
            drop.push(x.sector)
        }
    
    }
    // console.log("drop ::",drop);

    const data = {
        labels:energy_sec_label,
        datasets: [{
            label: 'Intensity',
            data: value === 'all' ? energy_sec_data : filter,
           
            
            backgroundColor: 'red'
        },
        ]
    }
    const options = {
        responsive: true,
        indexAxis: 'x',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Intensity vs Sector',
            },
        },
    }
  return (
    <div>
        <label>Sector</label>
        <select value={value} onChange={filter_sector}>
            <option value={"all"}>All</option>
            {
                drop.map((x)=>{
                    return <option value={x}>{x}</option>
                })
            }
        </select>
        <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default IntensityGraph