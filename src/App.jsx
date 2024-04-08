import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Usermanage from './components/Usermanage'
import SingleUser from "./components/SingleUser";
import ParticlesBg from "particles-bg";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Usermanage />}></Route>
          <Route path="user/:userId" element={<><ParticlesBg type="polygon" bg={true}/><SingleUser/> </>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
