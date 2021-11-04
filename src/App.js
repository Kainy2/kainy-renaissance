import './App.css';
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className=' flex justify-between'>
      <div style={{minWidth: '320px'}} className= 'border w-4/12 px-auto'>
        <Sidebar />
      </div>
      <div className= 'border w-full px-auto'>
        <Main />
      </div>
    </div>
  )
}

export default App

