import React , {Component} from 'react'
import RestaurantList from './RestaurantList';
import RestaurantInfo from './RestaurantInfo';
import { dummyRestaurants } from './Data';

class Body extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedRestaurant: null
        }
    }

    handleRestaurantClick = (restaurant)=>{
        this.setState({selectedRestaurant: restaurant});
    }

    
    render(){
        const {selectedRestaurant} = this.state;
        return(
            <div className='body'>
                <RestaurantList restaurants = {dummyRestaurants} onRestaurantClick= {this.handleRestaurantClick} />
                {selectedRestaurant && <RestaurantInfo restaurant={selectedRestaurant}/> }
            </div>
        )
    }
}

export default Body;
