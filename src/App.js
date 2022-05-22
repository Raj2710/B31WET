import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import EditStudents from './components/EditStudents';
import FormikComponent from './components/FormikComponent';
import Sample from './components/Sample'
import Help from './components/Help'
import SubSample from './components/SubSample';
import AllFood from './components/AllFood';
import Food from './components/Food';
import AddFood from './components/AddFood';
import EditFood from './components/EditFood';
export const url = 'https://61ee1f7ed593d20017dbac50.mockapi.io/students';
export const url1 = 'https://61ee1f7ed593d20017dbac50.mockapi.io/food';

export const FoodContext = React.createContext();



function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }


  let [food,setFood] = useState([
    {
      name:"Dosai",
      price:50,
      cusine:"South Indian",
      rating:4,
      duration:2,
    },
    {
      name:"Biriyani",
      price:260,
      cusine:"South Indian",
      rating:4.5,
      duration:30,
    },
    {
      name:"Fish Gravy",
      price:160,
      cusine:"Indian",
      rating:5,
      duration:30
    },
    {
      name:"Veg-Meals",
      price:120,
      cusine:"South-Indian/North-Indian",
      rating:3.5,
      duration:60
    },
    {
      name:"Chicken Noodles",
      price:90,
      cusine:"Chineese",
      rating:3.8,
      duration:10,
    },
    {
      name:"Rann Mutton Mandi Biriyani",
      price:1200,
      cusine:"Arabian",
      rating:5,
      duration:60
    }
  ])

  return <>
    <Router>
      <div style={{display:"grid", gridTemplateColumns:"15% 85%"}}>
        <div>
          <SideBar/>
        </div>
        <div>
          <FoodContext.Provider value={{food,setFood}}>
            <Routes>  
                <Route path = '/dashboard' element={<Dashboard data={data}/>}>
                    <Route path='sample' element={<Sample/>}>
                      <Route path='sub-sample' element={<SubSample/>}/>
                      <Route path='sub-dashboard' element={<AllFood/>}/>
                    </Route>
                    <Route path='help' element={<Help/>}/>
                </Route>
                <Route path='/all-food' element={<AllFood/>}/>
                <Route path='/add-food' element={<Food/>}/>
                <Route path = '/all-students' element = {<AllStudents/>}/>
                <Route path = '/add-student' element = {<AddStudent/>}/>
                <Route path = '/edit-student/:id' element = {<EditStudents/>}/>
                <Route path = 'edit-food/:id' element={<EditFood/>}/>
                <Route path = 'add-food-formik' element={<AddFood/>}/>
                <Route path = '/formik' element={<FormikComponent/>}/>
                <Route path = '*' element={<Dashboard data={data}/>}/>
            </Routes>
            </FoodContext.Provider>
        </div>
      </div>
    </Router>
  </>
}

export default App;
