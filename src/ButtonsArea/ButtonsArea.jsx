import { Button } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { changeSoftCardsData } from '../redux/soft2Slice';

import axios from 'axios'

function ButtonsArea(props) {

  const dispatch = useDispatch();

  function handleClick () {
    const apiUrl = 'https://cors-anywhere.herokuapp.com/bonus.evotor.tech/api/3rdparty/card';
    axios.get(apiUrl, {headers: {
                                  accept: 'application/json',                      
                                  Authorization: 'd5a37e97-35e4-4b1c-96c6-832b212f7193'
                                  }          
    },).then((resp) => { 
      const allData = resp.data;
      console.log('Api data: ',allData);
      //setAppState(allData);
      dispatch(changeSoftCardsData(allData));
       
    });
     
  };




    return (
        <div class="border border-primary">
          <Button variant="primary" onClick={handleClick}>
            Загрузить карты
          </Button>
          <Button variant="secondary" >
            Загрузить чеки
          </Button>
        </div>
    );
  }

  export default ButtonsArea;