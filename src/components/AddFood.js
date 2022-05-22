import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import {url1} from '../App'
import {useNavigate} from 'react-router-dom';

function AddFood() {

    let navigate = useNavigate();
    let handleSubmit = async(values)=>{

        await axios.post(url1,values)
        navigate('/all-food')
    }


    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            cusine:'',
            price:'',
            duration:'',
            rating:''
        },
        validationSchema:yup.object({
            name:yup.string().required('* Required'),
            email:yup.string().required('* required').email('Enter a vaild Email'),
            cusine:yup.string(),
            price:yup.number('Enter only numeric values').required('* required'),
            duration:yup.number('Enter only numeric values').required('* required'),
            rating:yup.number('Enter only numeric values').required('* required').min(1,"Rating can not be less than 1").max(5,'Rating can not be higher than 5')
        }),
        onSubmit:values=>{
            handleSubmit(values)
        }
    })
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label for='name'>Name</label>
                <input
                id='name'
                name='name'
                type='text'
                className='form-control'
                placeholder='Enter Name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
            </div>
        </form>

        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label for='name'>Email</label>
                <input
                id='email'
                name='email'
                type='email'
                className='form-control'
                placeholder='Enter Email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email?<div style={{color:'red'}}>{formik.errors.email}</div>:null}
            </div>
        </form>

        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label for='name'>Cusine</label>
                <input
                id='cusine'
                name='cusine'
                type='cusine'
                className='form-control'
                placeholder='Enter cusine'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.cusine}
                />
                {formik.touched.cusine && formik.errors.cusine?<div style={{color:'red'}}>{formik.errors.cusine}</div>:null}
            </div>
        </form>

        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label for='name'>Price</label>
                <input
                id='price'
                name='price'
                type='price'
                className='form-control'
                placeholder='Enter price'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price?<div style={{color:'red'}}>{formik.errors.price}</div>:null}
            </div>
        </form>

        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label for='name'>Durartion</label>
                <input
                id='duration'
                name='duration'
                type='duration'
                className='form-control'
                placeholder='Enter price'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.duration}
                />
                {formik.touched.duration && formik.errors.duration?<div style={{color:'red'}}>{formik.errors.duration}</div>:null}
            </div>
        </form>

        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label for='name'>Rating</label>
                <input
                id='rating'
                name='rating'
                type='rating'
                className='form-control'
                placeholder='Entrating'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.rating}
                />
                {formik.touched.rating && formik.errors.rating?<div style={{color:'red'}}>{formik.errors.rating}</div>:null}
            </div>
        
        <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
        </form>
    </div>
}

export default AddFood