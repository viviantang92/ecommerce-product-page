import './App.css';
import Content from './components/Content/Content';
import Pictures from './components/Pictures/Pictures';
import Navbar from './components/Navbar/Navbar'
import Lightbox from './components/Lightbox/Lightbox';
import GlobalContext from './Context';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <GlobalContext>
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Cart />
        <Pictures />
        <Content />
        <Lightbox />
      </main>

      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/VivianTang11">Vivian Tang</a>.
        </div>       
      </footer>

      
      

</>
    </GlobalContext>
  );
}

export default App;
