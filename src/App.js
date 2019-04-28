import React from 'react';
import './App.css';
import Header from './components/Header';
import { Container } from "react-bootstrap";
import InputCityForm from './components/Forms/InputCityForm';
import { RestaurantList } from './components/RestaurantList';
import * as api from './services/api';

class App extends React.Component {
  state = {
    cityName: '',
    restaurantData: [],
    errors: []
  }

  handleSubmit = async (value) => {
    try {
      const response = await api.getRestaurants(value);
      this.setState({
        cityName: value,
        restaurantData: response,
        errors: []
      });
    } catch (e){
      this.setState({
          cityName: value, 
          restaurantData: [], 
          errors: e
      });
    }    
  }
  
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header />
          <InputCityForm submit={this.handleSubmit}/>
          <RestaurantList data={this.state.restaurantData} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
