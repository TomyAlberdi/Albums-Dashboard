import './Scss/App.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Albums from './components/pages/Albums';
import Artists from './components/pages/Artists';
import Tracks from './components/pages/Tracks';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path='/Albums-Dashboard' element= { <Albums />} />
                    <Route path='/Albums-Dashboard/Artists' element={ <Artists />} />
                    <Route path='/Albums-Dashboard/Tracks' element={ <Tracks />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
