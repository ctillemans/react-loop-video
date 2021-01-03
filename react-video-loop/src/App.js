import './sass/main.scss';
import './components/ReactVideoLoop';
import ReactVideoLoop from './components/ReactVideoLoop';
import video from './switzerland.mp4';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <div className='header__logo'>
          <h1>React Video Loop</h1>
        </div>
        <div className='header__navbar nav'>
          <ul className='nav__list'>
            <li className='nav__item'>Home</li>
            <li className='nav__item'>Project details</li>
          </ul>
        </div>
        <button>
          <h3>Hello!</h3>
        </button>
      </div>
      <ReactVideoLoop videoSrc={video} />
    </div>
  );
}

export default App;
