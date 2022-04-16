import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate,useParams} from 'react-router-dom';

function EditStudents(props) {
    let params = useParams();

  let [name,setName]= useState(props.data.students[params.id].name);
  let [batch,setBatch]= useState(props.data.students[params.id].batch);
  let [mobile,setMobile]= useState(props.data.students[params.id].mobile);
  let [email,setEmail]= useState(props.data.students[params.id].email);
  let [status,setStatus]= useState(props.data.students[params.id].status);


  let navigate = useNavigate();

  let handleSubmit = ()=>{
    let data = {
      name,
      batch,
      mobile,
      email,
      status
    }
    props.data.students.splice(params.id,1,data)
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