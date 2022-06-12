// import "./styles.css";
//import Axios from 'axios';
import { useState, useEffect } from "react";

import { Table } from "./table";

export  function Mytable() {
  const [dataTable, setDataTable] = useState([]);
  const [loading ,setLoading] = useState(false);
  const[error,setError] = useState(null);
  const [searchTitle,setSearchTitle]=useState('');
  //console.log('dataTable');

  useEffect(() => {
    fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
      .then((response) => {
        //   console.log(response.)
        return response.json();
      })
      .then((myData) => {
          console.log(myData)
        setDataTable(myData);
        setLoading(true);
      },
      (error)=>{
        setLoading(true);
        setError(error);
      }
      )
      
  }, []);
  

  return (
    <div>
      <h1>table</h1>
      
      <input 
      type='text'
      placeholder='search...'
      onChange={(e)=>setSearchTitle(e.target.value)}
      />
{loading ?(
  <h4>loading...</h4>
):(
   dataTable.filter((value)=>{
        if(searchTitle===""){
          return value;
        }else if(value.name.toLowerCase().includes(searchTitle.toLowerCase()))
        {
          return value;
        }
      })
      //  .map((item)=> <h5 key={item.id}>{item.name}</h5>)  
      
        
          .map(({ id, name, email, role }) => (
            
              <tr key={name}>
                {/* <td><input style='checkbox'></input></td>   */}
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
              </tr>
        
          ))
      
  
     ) }
      

              <Table data={dataTable} /> 
              
            </div>
       );
}
