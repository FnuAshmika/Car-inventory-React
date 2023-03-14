import { useEffect, useState } from "react";
import Car from '../components/Car';
export default function Inventory(){
    const [cars, setCars] = useState([])
    console.log(cars)
    useEffect(()=>{
        async function getCars(){
            const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            const data = await response.json()
            setCars(data)
        }
        getCars()
    }, [])
    return(
        <div>
            <h1>Car Inventory</h1>
            {cars.map((car)=> <Car car={car} key={car.id}/>)}
        </div>
    )
}