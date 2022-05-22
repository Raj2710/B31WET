import React,{useState,useEffect} from 'react'
import {url1} from './../App';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';

function EditFood() {
    let [name,setName]=useState("")
    let [price,setPrice]=useState(0)
    let [cusine,setCusine]=useState("")
    let [rating,setRating]=useState(0)
    let [duration,setDuration]=useState(0)
    let [email,setEmail] = useState("")
    let navigate = useNavigate();
    let params = useParams();

    let getData = async()=>{
        let res = await axios.get(url1+'/'+params.id)
        
        setName(res.data.name)
        setPrice(res.data.price)
        setCusine(res.data.cusine)
        setRating(res.data.rating)
        setDuration(res.data.duration)
        setEmail(res.data.email)
    }
    let handleSubmit = async ()=>{
        await axios.put(`${url1}/${params.id}`,{
            name,
            price,
            cusine,
            rating,
            duration,
            email
        })

        navigate('/all-food')
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>

        <Form>
            <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label><Form.Control  value ={price} type="number" placeholder="Rs" onChange={(e)=>setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Cusine</Form.Label>
            <Form.Control type="text" placeholder="Enter Cusine" value={cusine} onChange={(e)=>setCusine(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" placeholder="Enter Rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="number" placeholder="Enter Duration" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Created By Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            
            <Button variant="primary" onClick={()=>handleSubmit()}>
            Submit
            </Button>
        </Form>

    </div>
  )
}

export default EditFood