import React from 'react';
import SignupForm from './components/signup'; 
import SigninForm from './components/signin';
import {BrowserRouter , Routes , Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path = "/addUser" element={<SignupForm/>}></Route>
       </Routes>
  </BrowserRouter>
  );
}

export default App;
