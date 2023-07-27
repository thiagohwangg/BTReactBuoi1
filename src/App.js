import logo from './logo.svg';
import './App.css';
import BTLayout from './BTLayoutComponent/BTLayout';
import Header from './BTLayoutComponent/Header';
import Banner from './BTLayoutComponent/Banner';
import ItemCoponent from './BTLayoutComponent/ItemCoponent';
import FooterComponent from './BTLayoutComponent/FooterComponent';

function App() {
  return (
    <div>
      
      <Header />
      
      <Banner />

    <ItemCoponent />

    <FooterComponent />
    </div>
  );
}

export default App;
