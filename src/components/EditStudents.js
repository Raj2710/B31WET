import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import {url} from '../App'

function EditStudents() {
    let params = useParams();
  let [name,setName]= useState("");
  let [batch,setBatch]= useState("");
  let [mobile,setMobile]= useState("");
  let [email,setEmail]= useState("");
  let [status,setStatus]= useState("");


  useEffect(()=>{
    getData();
  },[])

  let getData = async()=>{
    let res = await axios.get(`${url}/${params.id}`)
    console.log(res.data)
    setName(res.data.name)
    setBatch(res.data.batch)
    setMobile(res.data.mobile)
    setEmail(res.data.email)
    setStatus(res.data.status)
  }

  let navigate = useNavigate();

  let handleSubmit = async()=>{
    await axios.put(`${url}/${params.id}`,{
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
      <Form.Control type="text" placeholder="Enter Name" value = {name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value ={email}  onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Mobile</Form.Label>
      <Form.Control type="text" placeholder="Enter mobile"value = {mobile}  onChange={(e)=>setMobile(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch" value = {batch}  onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" onClick={handleSubmit}>
      Submit
    </Button>
</Form>
  </>
}

export default EditStudents