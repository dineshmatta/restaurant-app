import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const RestaurantItemDetail = (props) => {

  const {data, ...otherProps} = props;

  return (
    <React.Fragment>
      <Modal
        {...otherProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.name}
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td>Price</td>
                <td>CAD ${data.price}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <td>Reservation URL</td>
                <td><a href={data.reserve_url} rel="noopener noreferrer" target="_blank">{data.reserve_url}</a></td>
              </tr>
            </tbody>
          </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export { RestaurantItemDetail };