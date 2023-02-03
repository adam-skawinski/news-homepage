import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home';
import './style/app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
