import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import CommonLayout from './components/layouts/CommonLayout';
import Home from './components/pages/Home';


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <CommonLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </CommonLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
