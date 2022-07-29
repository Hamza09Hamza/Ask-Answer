
import './App.css';
import FBody from './Component/bigDisplay';
import Header from './Component/header';
import SBody from './Component/Subjects';
import Instructions from './Component/Instruction';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <FBody/>
      <SBody/>
      <Instructions/>
      <Footer/>
    </div>
  );
}

export default App;
