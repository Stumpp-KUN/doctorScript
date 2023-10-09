import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './Components/Layout'
import Home from './Pages/Home/Home';
import Operator from './Pages/Operator'
import Coordinator from './Pages/Coordinator'
import Administrator from './Pages/Administrator/Administrator';
import Mainadministrator from './Pages/Mainadministrator/Mainadministrator';

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path ='/' element={<Home />} />
                    <Route path ='/operator' element={<Operator />} />
                    <Route path ='/coordinator' element={<Coordinator />} />
                    <Route path ='/administrator' element={<Administrator />} />
                    <Route path ='/mainadministrator' element={<Mainadministrator />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App;