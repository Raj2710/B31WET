import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }
  return <>
    <Router>
      <div style={{display:"grid", gridTemplateColumns:"15% 85%"}}>
        <div>
          <SideBar/>
        </div>
        <div>
          <Routes>
              <Route path = '/dashboard' element={<Dashboard data={data}/>}/>
              <Route path = '/all-students' element = {<AllStudents/>}/>
              <Route path = '/add-student' element = {<AddStudent/>}/>
              <Route path = '*' element={<Dashboard data={data}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  </>
}

export default App;
