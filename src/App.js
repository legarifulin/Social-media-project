import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music'
import Settings from './components/Setting/Settings'
import News from './components/News/News'
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="main_conent">
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Main state={props.state.profilePage} />} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>);
}

export default App;
