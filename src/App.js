import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className='row'>
          <div className='col-4'><Sidebar/></div>
          <div className='col-8'><Content/></div>
        </div>
    </div>
  );
}

export default App;
