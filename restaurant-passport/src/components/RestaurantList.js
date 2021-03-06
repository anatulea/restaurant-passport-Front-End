import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import axios from 'axios';
import { AxiosWithAuth } from "../utils/axiosWithAuth";

export default function RestaurantList(props) {
  const [restaurant, setRestaurant] = useState([
    {
        "id": 1,
        "name": "Crossroads",
        "city": "Los Angeles",
        "zipcode": "1234",
        "phone_number": "123-456-7890",
        "website": "www.restaurant.com",
        "rating": 5,
        "notes": "I like it",
        "stamped": 1,
        "user_id": 1
      },
      {
        "id": 2,
        "name": "Gracias Madre",
        "city": "Los Angeles",
        "zipcode": "1234",
        "phone_number": "123-456-7890",
        "website": "www.lambdaschool.com",
        "rating": 2,
        "notes": "Over rated",
        "stamped": 1,
        "user_id": 1
      }
]);


  useEffect(() => {
    AxiosWithAuth()
    .get("/restaurants")
    .then(response => {
      // console.log(response)
      setRestaurant(response.data)
    })
   
    .catch(error =>{
      console.error('Server error', error)
    })
    }, []);
  return (
    <section className="character-list">
      <h2>Restaurants you visited</h2>
      <button  onClick={() => props.history.push("/form")}>Add new Restaurant</button>
       
       <RestaurantCard restaurant={restaurant} updateRestaurants={setRestaurant}/>
      
    </section>
  );
}