import React, {useState} from 'react';
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap';

const handleSubmit = (props, value, e) => {
  e.preventDefault();
  props.submit(value);
}

const InputCityForm = (props) => {

  const [city, setCity] = useState('');

  return (
    <Form onSubmit={handleSubmit.bind(null, props, city)}>
      <InputGroup className="mb-3">
        <FormControl
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city"
          aria-label="City Name"
          aria-describedby="city name"
        />
        <InputGroup.Append>
          <Button type="submit" variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default InputCityForm;
