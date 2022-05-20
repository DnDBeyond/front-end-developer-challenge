import Footer from './Components/Footer';
import Header from './Components/Header';
import LoadoutContainer from './Components/Loadout/LoadoutContainer';
import Nav from './Components/Nav';
import News from './Components/News';
import './sass/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <News />
      <LoadoutContainer />
      <Footer />
    </div>
  );
}

export default App;
