import React, { Component } from 'react'
import RestaurantCard from './RestaurantCard';

class RestaurantList extends Component {
  render() {
    const {restaurants , onRestaurantClick } = this.props;
    return (
      <div className='restaurant-list'>
        {restaurants.map((restaurant , index)=>(
            <RestaurantCard key={index} restaurant={restaurant} onClick={()=>onRestaurantClick(restaurant)} />
        ))}
      </div>
    )
  }
}

export default RestaurantList
