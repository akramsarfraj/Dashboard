import React, { useState } from 'react'
import Chart from 'react-google-charts'

function RelevanceGraph({graph}) {
    let [value,setValue] = useState('all')
    let [fdata,setFdata] = useState([])


    let relevance = [...graph]
    
    let data = [["Country", "Relevance"]]
    relevance.forEach((r)=>{
        if(r.country === "United States of America"){
            data.push(["United States",r.relevance])
        }else{
            data.push([r.country,r.relevance])
        }
    })

    let drop=[]
    data.forEach((r)=>{
        if( !drop.includes(r[0]) && r[0] !="" && r[0] != "Country"){
           
                drop.push(r[0])
            
        }
    })

    function country_filter(e) {
        setValue(e.target.value)
        let f_data = [["Country", "Relevance"]]
        data.forEach((r)=>{
            if(r[0]=== e.target.value){
                f_data.push([r[0],r[1]])
            }
        })
        setFdata(f_data)
        
    }

    return (
        <div className='relevance'>
            
            <h2>Relevance (based on country)</h2>
            <select style={{marginLeft:"5px"}} value={value} onChange={country_filter}>
                <option value={"all"}>All</option>
                {
                    drop.map((r)=>{
                        return <option value={r}>{r}</option>
                    })
                }
            </select>
            <Chart chartType='GeoChart' width="100%" height={"400px"}
                data={value === 'all' ? data : fdata} 
                 />
            
        </div>
    )
}

export default RelevanceGraph