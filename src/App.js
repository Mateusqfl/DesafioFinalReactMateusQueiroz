
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Details from './Pages/Details';
import Error from "./Pages/Error";





function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:movieId" element={<Details/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>

      </BrowserRouter>
  );
}

export default App;
