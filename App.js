import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';
import Search from './Component/Search/Search';
import Products from './Component/Products/Products';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <section className="app">
      <Navbar/>
      <Body/>
      <Search/>
      <Products/>
      <Footer/>
    </section>
  );
}

export default App;
