
import axios from "axios";
import { useEffect, useState } from "react";
import "./userList.css";    

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

export default function UserList() {
  

  const [data, setData] = useState([]);
  
  
  
    useEffect(() => {
      axios.get(`http://localhost:3005/users`).then((res) => {
        setData(res.data);
      });
    }, []);
  
    console.log(data);
     
     //const deleteusers = async (id) => {
      //const response = await axios.delete(`http://localhost:3005/user/${id}`);
        //    if(response.status ===200) {
          //      toast.success(response.data)
            //    getusers();
            //}
             // }
        
  
              console.log("data=>" , data);
          return (
            <div className={"container-table"}> 
            <div className={"sub-container"}>
              <table className="styled-table">
                
                <thead>
                  <tr>
                    <th  style={{textAlign: "Center"}}>id</th>
                    <th  style={{textAlign: "Center"}}>fullName</th>
                    <th  style={{textAlign: "Center"}}>username</th>
                    <th  style={{textAlign: "Center"}}>matricule</th>
                    <th  style={{textAlign: "Center"}}>Edit</th>
                    
              </tr>
              </thead>
              <tbody>
                {data && data.map((item, index) =>{
  
        return(
          <tr key={index}>
            <th scope="row" >{index +1}</th>
        
            <td>{item.fullName}</td>
            <td>{item.username}</td>
          
            <td>{item.matricule}</td> 
            
            <td>
           
                <button className="btn btn-edit">Edit</button>
             
              
               <button className="btn btn-delete">Delete</button>
               
                
                   </td>
        </tr>
        );
    })}
              </tbody>
              </table>
            </div>
            </div>
          );
          
  };