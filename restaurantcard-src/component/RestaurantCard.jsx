import React, { Component } from 'react'

class RestaurantCard extends Component {
  render() {
    const {restaurant,onClick} = this.props;
    return (
      <div className='restaurant-card' onClick={onClick}> 
        <img src={restaurant.imgURL} ></img>
        <h2>{restaurant.name}</h2>
        <p>Address : {restaurant.address}</p>
      </div>
    )
  }
}

export default RestaurantCard
