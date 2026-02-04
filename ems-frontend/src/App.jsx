
import './App.css'
import AddEmployee from './component/AddEmployee'
import Footer from './component/Footer'
import ListEmployee from './component/ListEmployee'
import Navbar from './component/Navbar'
import UpdateEmployee from './component/UpdateEmployee'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter >
    <Navbar />
    <Routes>
      {/* http://localhost:3000 */}
      <Route path = '/' element = {<ListEmployee />}></Route>

      {/* http://localhost:3000/employees */}
      <Route path = '/employees' element = {<ListEmployee />}></Route>

      {/* http://localhost:3000/employees/add-employee */}
      <Route path='/add-employee' element = {<AddEmployee />} ></Route>

      {/* http://localhost:3000/employees/update-employee */}
      <Route path="/update-employee/:id" element={<UpdateEmployee />} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
