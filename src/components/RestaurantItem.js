import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import {RestaurantItemDetail} from './RestaurantItemDetail';


const handleClick = (setModalShow) => {
  setModalShow(true);
}

const handleOnHide = (setModalShow) => {
  setModalShow(false);
}

const RestaurantItem = ({data}) => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image_url} alt="Restaurant Image" />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.address}
          </Card.Text>
          <Button variant="primary" onClick={handleClick.bind(null, setModalShow)}>More Details</Button>
        </Card.Body>
      </Card>
      <RestaurantItemDetail data={data} show={modalShow} onHide={handleOnHide.bind(null, setModalShow)} />
    </React.Fragment>
  )
}

export { RestaurantItem };