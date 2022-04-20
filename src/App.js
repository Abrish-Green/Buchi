import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from './pages/Home'
import Pet from './pages/Pets'

const App =  ()=>{
  return(
    <div className="App" style={{ bgcolor: "url('./assets/images/main_background.webp')" }}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/pet" element={<Pet />}>
              <Route path=":petId" element={<Home />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}


export default App


