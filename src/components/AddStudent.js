import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {url} from '../App';
function AddStudent() {

  

  let [name,setName]= useState("");
  let [batch,setBatch]= useState("");
  let [mobile,setMobile]= useState("");
  let [email,setEmail]= useState("");
  let [status,setStatus]= useState(true);
  let navigate = useNavigate();

  // useEffect(()=>{
  //   console.log("Use Effect triggered");
  // },[])

  // useEffect(()=>{
  //   console.log("Use Effect triggered");
  // })

  // useEffect(()=>{
  //   console.log("Use Effect triggered");
  // },[name,mobile])

  let handleSubmit = async()=>{
    await axios.post(url,{
      name,
      batch,
      mobile,
      email,
      status
    })
    navigate('/all-students')
  }

  return <>
    <Form>
    <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Mobile</Form.Label>
      <Form.Control type="text" placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" onClick={handleSubmit}>
      Submit
    </Button>
</Form>
  </>
}

export default AddStudent