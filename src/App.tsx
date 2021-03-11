import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import History from './components/History';
import './css/app.css';

function App() {
  return (
      <div className="app">
        <Header/>
        <History/>
        <AddTransaction/>
      </div>
  );
}

export default App;
