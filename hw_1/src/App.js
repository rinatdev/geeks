import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

function App() {

  const navList = ['main', 'about', 'contacts']

  return (
    <div>
      <Header 
        list={navList}
      />
      <MainPage
        text={'Content'}
      />
      <Button 
        text={'do you want click me?'}
      />
      <Footer
        list={navList}
      />
    </div>
  );
}

export default App;
