import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';


export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/create' element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    )
}