
import './App.css';

import Navbar from './components/Navbar';
import Likelihood from './components/likelihood/Likelihood';
import Intensity from './components/intensity/Intensity';
import RelevanceGraph from './components/relevance/RelevanceGraph';
import TopicGraph from './components/topic/TopicGraph';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  // let data = jsondata;
  let [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/api/data")
    .then((res)=>{setData(res.data)})
    .catch((res)=>{console.log(res);})
  },[])

  return (
    <div className="App">
      <div className='header'><Navbar /></div>
      <div className='inten-sity'>
         <Intensity graph={data} />
      </div>
      <div className=' likeli-hood'>
        <Likelihood graph={data} />
      </div>
     

      <div className='mid-section'>
        <div className='graph-r'><RelevanceGraph graph={data} /></div>
        <div className='test'> <TopicGraph graph = {data}/></div>
      </div>

     
     
    </div>
  );
}

export default App;
