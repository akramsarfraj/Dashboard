import React from 'react'
import Chart from 'react-google-charts'

function TopicGraph({graph}) {
  
  let topics = [...graph]

 let data = []
 let main_d = [["Topic","Intensity"]]
 topics.forEach((r)=>{
    if(!data.includes(r.topic) && r.topic !==""){
        data.push(r.topic)
    }
 })

    data.forEach((r)=>{
        let ints = topics.map((x)=>{
            if(x.topic === r){
                return x.intensity
            }else{
                return 0
            }
        })
        main_d.push([r,Math.max(...ints)])
    })

    const option ={
        title: "Topics",
    } 
  return (
    <div>
        <Chart chartType='PieChart'  data={main_d} height={"500px"}  options={option}></Chart>
    </div>
  )
}

export default TopicGraph