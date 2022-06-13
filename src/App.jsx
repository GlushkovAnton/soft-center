
import './App.css';
import Header from './Header/Header';
import ManagerInfo from './ManagerInfo/ManagerInfo';
import ButtonsArea from './ButtonsArea/ButtonsArea';
import ListOfCards from './ListOfCards/ListOfCards';
import ListOfCheques from './ListOfCheques/ListOfCheques';

import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux'

function App() {
  

  return (
    <div className="App">
      <Header />
      <ManagerInfo />
      <ButtonsArea />
      <ListOfCards />
      <ListOfCheques />
      
    </div>
  );
}

function mapStateToProps(state) {
  return { fab: state.fab }
}

export default connect (mapStateToProps)(App);   
