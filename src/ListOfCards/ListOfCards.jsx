import CardSoft from "../CardSoft/CardSoft";

import { useSelector, useDispatch } from 'react-redux';
import { selectData } from '../redux/soft2Slice';

function ListOfCards(props) {
    const data = useSelector(selectData); //create data for place ti it data from storage
    
    // crate list of cards
    const renderedSoftCards = data.map((data) => { 
        return (
            
                <CardSoft 
                uuid = {data.uuid}
                account_id = {data.account_id}
                type_uuid = {data.type_uuid}
                number = {data.number}
                status = {data.status}
                holder = {data.holder}
                phone = {data.phone}
                email = {data.email}
                birthdate = {data.birthdate}
                sales = {data.sales}
                created_date = {data.created_date}
                created_user = {data.created_user}
                created_store_uuid = {data.created_store_uuid}
                created_device_uuid = {data.created_device_uuid}
                created_employee_uuid = {data.created_employee_uuid}
                balance = {data.balance}
 
                />
            
        )
    })


    return (
        <div >
            <p>Здесь будет список карт после нажатия кнопки "Загрузить карты"</p>
            {renderedSoftCards}
        </div>
    );
  }

  export default ListOfCards;

  