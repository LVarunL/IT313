import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Notes from './Notes'
import { useParams } from 'react-router-dom';
import LineChart from './LineChart';

const StockDetails = () => {
    const [share,setShare] = useState([]);
    const token = localStorage.getItem('authToken');
    const [plotgraph, setPlotgraph]= useState();
    const [plotgraph2, setPlotgraph2]= useState();
    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    const params = useParams();
    useEffect(() => {    
        const handleClick =async()=>{
        const res = await axios.get('http://localhost:7000/getdata');
        // console.log(res.data)
        setShare(res.data);
        for(let i =0;i< res.data.length;i++){
            if(res.data[i].Ticker === params.id){
                setShare(res.data[i])
            }
        }
        const graph = await axios.get('http://localhost:7000/ml_data?company=tata',{headers})
        let data = graph.data[0].abc
        const array =[];
        const array2 =[];
        for(let i =0 ; i< data.length;i++){
               array[i] = data[i].value 
               array2[i]=data[i].date
        }
        setPlotgraph(array)
        setPlotgraph2(array2)
        
    }
    handleClick();
    
  }, []);

  return (
    <div>
        <div className="container-fluid p-4 d-flex flex-column align-items-start">
  <h3>{share.Ticker}</h3>
  <div className="d-flex align-items-center">
    <h4>$ {share.LastClose}</h4>
    <span className="ms-2">
      {share.LastChange}
    </span>
  </div>
</div>

<div className="container-fluid p-4 d-flex justify-content-between">
  <div className="d-flex flex-column">
    <small className="text-muted">Opening Price</small>
    <span>{share.LastOpen}</span>
  </div>
  <div className="d-flex flex-column">
    <small className="text-muted">Circulating Supply</small>
    <span>{share.LastVolume}</span>
  </div>
  <div className="d-flex flex-column">
    <small className="text-muted">Market Cap</small>
    <span>{share.LastVolume * share.LastClose}</span>
  </div>
  <div className="d-flex flex-column">
    <small className="text-muted">Daily High</small>
    <span>${share.LastHigh}</span>
  </div>
  <div className="d-flex flex-column">
    <small className="text-muted">Daily Low</small>
    <span>${share.LastLow}</span>
  </div>
</div>

<hr className="border-2 border-gray-800 bg-gray-800"/>

<h1 className="text-#962B92">{share.Ticker} Past Analysis</h1>
<small className="d-block text-center text-muted">
  Last Updated On Date : {Date(Date.now())}
</small>


<div className="container-fluid border-1">
<LineChart data ={plotgraph} label = {plotgraph2}/>
</div>

        <Notes />  
    </div>
    
  )
}

export default StockDetails