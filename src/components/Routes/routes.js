import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from '../../pages/CreateAccount';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import { UserProvider } from "../Context/User";
import Private from './private';


export default function Router(){

    return(
        <BrowserRouter>
            <UserProvider>
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route element={<Private/>}>
                            <Route path='/home' element={<Home/>}/>
                        </Route>
                        <Route path='/create' element={<Create/>}/>
                    </Routes>
            </UserProvider>
        </BrowserRouter>
    )
}

