import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {url} from '../App';
function AllStudents() {

  let [students,setStudents]=useState([]);
  
  useEffect(()=>{
    getData();
  },[])

  let getData = async()=>{
    let res = await axios.get(url)
    setStudents(res.data)
  }

  let navigate = useNavigate();

  let handleDelete = async(id)=>{
    await axios.delete(url+`/${id}`);
    getData();
  }
  return <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Batch</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {
        students.map((e,i)=>{
          return <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.batch}</td>
            <td>{e.status?<p style={{color:"green"}}>Active</p>:<p style={{color:"red"}}>Inactive</p>}</td>
            <td>
              <Button variant ='primary' onClick={()=>navigate('/edit-student/'+e.id)}>Edit</Button>
              &nbsp;
              &nbsp;
              <Button variant ='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
            </td>
          </tr>
        })
      }
  </tbody>
</Table>
  </>
}

export default AllStudents

// useEffect(()=>{
  //   console.log("Component Rendered")
  // })// It will be triggered for all state changes ---> whenever a state is changed component will be rendered. So UseEffect
  //qithout dependanci array will triggered everytime a component renders
