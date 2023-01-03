import 배경 from "./img/배경.jpg"
import './App.css';
import ItemIMG from './components/ItemIMG';

function App() {
  return (
    <div>
      <img className="backgroundItem" src={배경} alt='' /> 
      <ItemIMG />
    </div>
  );
}

export default App;
