import './Scss/App.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {

    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    )
}

export default App
