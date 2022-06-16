import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";

export const Table = ({ data,handleDeleteClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [singleChecked,setSingleChecked]=useState()
  const [singleId,setSingleId] = useState()
  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
  };
  const handleSingleChange = (e)=>{
    setSingleChecked(e.target.checked)
    setSingleId(e.target.value)
    // console.log("checked data is",e.target)
  }

  // const [list, updateList] = useState(data);

  // const handleRemoveItem = (e) => {
  //  const name = e.target.getAttribute("name")
  //   updateList(list.filter(item => item.name !== name));
  // };


  return (
    <table style={{ border: "1px solid black" }}>
     <thead>
        <tr>
          <th>
            <input onChange={handleOnChange} type="checkbox"></input>
          </th>
          <th>Id</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ id, name, email, role }) => (
            <tr key={name}>
              <td>
                <input
                  type="checkbox"
                  onChange={handleSingleChange}
                  checked={isChecked || (singleId === id && singleChecked)} 
                  name="name"
                  value={id}
                />
              </td>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td><button type="button" onClick={()=>handleDeleteClick(id) }><AiFillDelete /></button>
              
                
                {/* <button type="button" onClick={()=>handleDeleteClick() }><AiFillDelete /></button> */}
               <button><AiFillCreditCard /></button>
              </td>
              <td></td>
            </tr>
          ))}
      </tbody>
    </table>
  
  );
};
