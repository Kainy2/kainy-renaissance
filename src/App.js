import './App.css';
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className='border m-10 flex p-10 w-screen justify-between'>
      <div style={{width: '320px'}} className= 'border w-3/12 px-auto'>
        <Sidebar />
      </div>
      <div className= 'border w-full px-auto'>
        <Main />
      </div>
    </div>
  )
}

export default App

