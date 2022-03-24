import './App.css';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Slider from './components/Slider';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Slider/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
