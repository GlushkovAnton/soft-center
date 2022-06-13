import { Card } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { selectData } from '../redux/soft2Slice';

function CardSoft (props) {
    const data = useSelector(selectData);
    return (
        <div class="border border-primary">
            
            <Card >
            <Card.Body>
            <Card.Title>{props.holder}</Card.Title>
            <Card.Text>
            <p>"уникальный идентификатор карты": {props.uuid},</p>
            <p>"account_id": {props.account_id},</p>
            <p>"идентификатор вида карты": {props.type_uuid},</p>
            <p>"уникальный номер карты": {props.number},</p>
            <p>"состояние карты": {props.status},</p>
            <p>"владелец карты": {props.holder},</p>
            <p>"номер телефона владельца": {props.phone},</p>
            <p>"email": {props.email},</p>
            <p>"дата рождения владельца в формате ГГГГ-ММ-ДД": {props.birthdate},</p>
            <p>"сумма продаж по карте в рублях": {props.sales},</p>
            <p>"время создания карты": {props.created_date},</p>
            <p>"идентификатор ЛК создателя карты": {props.created_user},</p>
            <p>"идентификатор торговой точки, где была создана карта": {props.created_store_uuid},</p>
            <p>"идентификатор терминала, на котором была создана карта": {props.created_device_uuid},</p>
            <p>"created_employee_uuid": {props.created_employee_uuid},</p>
            <p>"текущий баланс": {props.balance}</p>
            </Card.Text>
            </Card.Body>
            </Card>
            
        </div>
    );
  }

  export default CardSoft;