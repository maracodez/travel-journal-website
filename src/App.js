import './App.css';
import MainContent from './mainContent';
import globe from "./img/Globe.png"

function App() {
  return (
    <div className="container">
      <header>
        <img src={globe} alt=""/>
        <p>my travel journal</p>
      </header>
      <main>
       <MainContent />
      </main>
    </div>
  );
}

export default App;
