import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import UpdateUsers from './UpdateUsers'
import CreateUsers from './CreateUsers'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}/>
        <Route path="/create" element={<CreateUsers />}/>
        <Route path="/update/:id" element={<UpdateUsers />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
