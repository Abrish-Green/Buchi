import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from './pages/Home'
import Pet from './pages/Pets'
import PetDetail from './pages/PetDetail'

const App =  ()=>{
  return(
    <div className="App" style={{ bgcolor: "url('./assets/images/main_background.webp')" }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet" element={<Pet />} />
            <Route path="/pet/:petId" element={<PetDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
    );
}


export default App


