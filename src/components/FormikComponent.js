import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';


function FormikComponent() {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            dob:'',
            mobile:'',
            address:'',
        },
        validationSchema: Yup.object({
            name:Yup.string()
            .max(15, 'Must be less than 15 Character')
            .min(2, 'Must be greater than 2 Characters')
            .required('Required'),

            email:Yup.string().email("Enter a valid email").required('Required'),

            dob:Yup.string().matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,"Provide DOB in DD-MM-YYYY format").required("Required"),
            
            mobile:Yup.string().matches(/^\d{10}$/,"Enter a vaild mobile number").required("Required"),

            address:Yup.string()


        }),
        onSubmit: values=>{
           alert(JSON.stringify(values))
        }
    })
  return <>
    <form onSubmit = {formik.handleSubmit}>
    <div className='form-group'>
    <label htmlFor="name" className="form-label">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
         class="form-control"
       />

        {formik.touched.name && formik.errors.name?<div style={{color:"red"}}>{formik.errors.name}</div>:null}

    </div>

    <div className='form-group'>
    <label htmlFor="email" className="form-label">Email</label>
       <input
         id="email"
         name="email"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         class="form-control"
       />
       {formik.touched.email && formik.errors.email?<div style={{color:"red"}}>{formik.errors.email}</div>:null}
    </div>

    <div className='form-group'>
    <label htmlFor="email" className="form-label">Mobile</label>
       <input
         id="mobile"
         name="mobile"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.mobile}
         class="form-control"
       />
       {formik.touched.mobile && formik.errors.mobile?<div style={{color:"red"}}>{formik.errors.mobile}</div>:null}
    </div>

    <div className='form-group'>
    <label htmlFor="email" className="form-label">DOB</label>
       <input
         id="dob"
         name="dob"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.dob}
         class="form-control"
       />
       {formik.touched.dob && formik.errors.dob?<div style={{color:"red"}}>{formik.errors.dob}</div>:null}
    </div>

    <div className='form-group'>
    <label htmlFor="email" className="form-label">Address</label>
       <input
         id="address"
         name="address"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.address}
         class="form-control"
       />
    </div>

    <div className='form-group'>
        <button type="submit" className='btn btn-primary'>Submit</button>
    </div>

    </form>
  </>
}

export default FormikComponent