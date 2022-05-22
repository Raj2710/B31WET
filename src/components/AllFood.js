import React,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import {url1} from './../App';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function AllFood() {

    let [food,setFood]=useState([])

    let navigate = useNavigate();

    async function getdata(){
      let res = await axios.get(url1)
      setFood(res.data)
    }

    useEffect(()=>{
      getdata()
    },[])


    let handleDelete = async(id)=>{
        await axios.delete(url1+'/'+id);
        getdata()
    }

  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Price</th>
      <th>Cusine</th>
      <th>Rating</th>
      <th>Duration</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        food.map((e,i)=>{
            return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>Rs.{e.price}</td>
                <td>{e.cusine}</td>
                <td>{e.rating}</td>
                <td>{e.duration} mins</td>
                <td>
                    <Button variant="primary" onClick={()=>navigate('/edit-food/'+e.id)}>Edit</Button>
                    &nbsp;
                    &nbsp;
                    <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
                </td>
            </tr>
        })
    }
  </tbody>
</Table>
  )
}

export default AllFood