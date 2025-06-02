import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from "react-hot-toast"
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div data-themes="forest">
        {/* <button onClick={()=>toast.success("congrats")} className='bg-black text-white m-2  p-2 rounded'>click me </button> */}
        {/* <button className='btn btn-outline'>click me </button> */}
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
