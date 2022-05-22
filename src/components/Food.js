import React,{useState} from 'react'
import {url1} from './../App';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Food() {
    let [name,setName]=useState("")
    let [price,setPrice]=useState(0)
    let [cusine,setCusine]=useState("")
    let [rating,setRating]=useState(0)
    let [duration,setDuration]=useState(0)
    let [email,setEmail] = useState("")

    let navigate = useNavigate();

    //useEffect without Dependency Array ---> Triggered each time when the component renders
    // useEffect(()=>{
    //     console.log("UseEffect Called")
    // })

    //useEffect with Empty Dependancy Array ---> Triggered only during first time component render
    // useEffect(()=>{
    //     console.log("UseEffect Called")
    // },[])

    //useEffect with Dependancy array ---> Triggered when the dependancy  state value is getting changed
    // useEffect(()=>{
    //     console.log("UseEffect Called")
    // },[rating])



    let handleSubmit = async()=>{

        await axios.post(url1,{
            name,
            price,
            cusine,
            rating,
            duration,
            email
        })
        navigate('/all-food')
    }


  return (
    <div>

        <Form>
            <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label><Form.Control type="number" placeholder="Rs" onChange={(e)=>setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Cusine</Form.Label>
            <Form.Control type="text" placeholder="Enter Cusine" onChange={(e)=>setCusine(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" placeholder="Enter Rating" onChange={(e)=>setRating(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="number" placeholder="Enter Duration" onChange={(e)=>setDuration(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Created By Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            
            <Button variant="primary" onClick={handleSubmit}>
            Submit
            </Button>
        </Form>

    </div>
  )
}

export default Food