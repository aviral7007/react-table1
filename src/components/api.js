
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
  const[textsearch,setTextSearch]=useState();
  const handleChangeSearch=(e)=>{
   
   var textsearch=e.target.value
   
     setSearch(textsearch)
     var updatedData =  dataTable.filter(item =>(item.name || item.email || item.role).toLowerCase().includes(textsearch.toLowerCase()))

  setDataTable(updatedData)
  }

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentIndex =  dataTable.slice(firstIndex, lastIndex) ;
  
  // : dataTable.filter(item =>(item.name || item.email || item.role).toLowerCase().includes(textsearch.toLowerCase())).slice(firstIndex,lastIndex) ;

  const pageDisplay=(pageNumber)=>setCurrentPage(pageNumber);
  const handleDeleteClick =(contactId)=>{
    const newContacts = [...dataTable]
    const index = dataTable.findIndex((contact)=>contact.id === contactId.id)
    newContacts.splice(index,1)
    setDataTable(newContacts)
  }

  return (
    <div>
    <h1>table</h1>
    <h1>table</h1>
    {/* {
      dataTable.map((x)=>ontactIontactI
      <div>
        <h1>{x.id}</h1>
      </div>
      )
    } */}

      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => 
        handleChangeSearch(e)}
      />
      <button>{totalCount}</button>

      <Table 
      data={currentIndex}
      handleDeleteClick={handleDeleteClick}
      />
      
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
