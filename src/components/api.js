
import { useState, useEffect } from "react";
import { Pagination } from "./Pagination";

import { Table } from "./table";

export function Mytable() {
  const [dataTable, setDataTable] = useState([]);
  const[search, setSearch] = useState('');
  const [currentPage,setCurrentPage]=useState(1);
  const [pageSize]=useState(10);

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
  
  const totalCount=dataTable.length;
  



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

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentIndex = dataTable.slice(firstIndex, lastIndex);

  const pageDisplay=(pageNumber)=>setCurrentPage(pageNumber);

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
      <button>{totalCount}</button>
      <Table data={currentIndex} />
      {/* <Posts posts={currentPosts} */}
      <Pagination
      pageSize={pageSize}
      totalCount={dataTable.length}
      pageDisplay={pageDisplay}
    setCurrentPage={setCurrentPage}
  currentPage={currentPage}
     
    />
    </div>
  );
}
