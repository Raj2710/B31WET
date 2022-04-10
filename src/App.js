import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';

function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }
  return <>
    <div style={{display:"grid", gridTemplateColumns:"15% 85%"}}>
      <div>
        <SideBar/>
      </div>
      <div>
        <Dashboard data={data}/>
      </div>
    </div>
  </>
}

export default App;
