import React, { useState } from 'react'
import Chart from 'react-google-charts';


function LikelihoodGraph({ like }) {
    let [fdata,setFdata] = useState([])
    let [value ,setValue] = useState('all')
    let likelihood = [...like]

    let data = [["region", "likelihood"]]
    likelihood.map((r) => {

        data.push([r.region, r.likelihood])
    })

    let drop=[]
    likelihood.forEach((r)=>{
        if(!drop.includes(r.region) && r.region!==''){
            drop.push(r.region)
        }
    })




    const options = {
        title: "Likelihood (based on region)",

        curveType: "function",
        legend: { position: "bottom" },
        bar: { gap: 10 },

        // vAxis: { scaleType: 'mirrorLog' },
        histogram: {
            bucketSize: 1,
            maxNumBuckets: 600,
            minValue: 0,
            maxValue: 5,

        },
    };


    function filter_likeli(e) {
        console.log(e.target.value);
        let f_data = [["region", "likelihood"]]
        likelihood.forEach((r)=>{
            if(r.region === e.target.value){
                f_data.push([r.region, r.likelihood])
            }
        })
        console.log(f_data);
         setFdata(f_data)
         setValue(e.target.value)
    }
    
    return (
        <div>
            {/* {
                value === 'all' ? data : fdata
            } */}
            <label>Region</label>
            <select value={value} onChange={filter_likeli}>
                <option value={"all"}>All</option>
                {
                    drop.map((r)=>{
                        return <option value={r}>{r}</option>
                    })
                }
            </select>
            <Chart chartType='Histogram' width="1000px" height="500px" options={options} data={value === 'all'? data : fdata} />
        </div>

    )
}

export default LikelihoodGraph