// import "./styles.css";
//import Axios from 'axios';
import { useState, useEffect } from "react";

import { Table } from "./table";

export function Mytable() {
  const [dataTable, setDataTable] = useState([]);
  const[search, setSearch] = useState('')
  const [searchParam] = useState(["name", "email"]);

  useEffect(() => {
    fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
    )
      .then((response) => {
        //   console.log(response.)
        return response.json();
      })
      .then(
        (myData) => {
          // console.log(myData);
          setDataTable(myData); 
        } 
      );
  }, []);
  // useEffect(()=>{
  //   var updateddata =  dataTable.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))

  // setDataTable(updateddata)
  // },[search])
  const handleChangeSearch=(e)=>{
   
   var textsearch=e.target.value
   
     setSearch(textsearch)
     var updatedData =  dataTable.filter(item =>item.name.toLowerCase().includes(textsearch.toLowerCase()))

  setDataTable(updatedData)
  }

  return (
    <div>
      <h1>table</h1>

      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => 
        handleChangeSearch(e)}
      />
      <Table data={dataTable} />
    </div>
  );
}
