//import logo from './logo.svg';
import './App.css';
import { Mytable } from './components/api';

import { Header } from './components/header';
// import { Searchbox } from './components/search';
// import Button from './components/button'

function App() {
  return (<div>
    <Header/>
    

    {/* <Searchbox/> */}
    <Mytable/>
    {/* <Button/> */}
    </div>
  );
}

export default App;
