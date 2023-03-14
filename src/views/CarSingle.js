import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Car from '../components/Car';

export default function CarSingle(){
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [error, setError] = useState(false)
    useEffect(() => {
        async function getCar() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
                const data = await response.json()
                if(!response.ok){
                    throw new Error
                }
                setCar(data)
                console.log('Test')
            }
            catch(err) {
                setError(true)
                console.log("error")
            }
        }
        getCar()
    }, [])
    return (
        <div>
            {error ? <>
                <h2>404 Page not found</h2>

                </>: <>
                    <h1>Car Id: {id}</h1>
                    
                    <Car car={car} hideLink={true} /> 
                    <p>Year: {car.year}</p>
                    <p>Selling Price: {car.selling_price}</p>
                    <p>KM Driven: {car.km_driven}</p>
                    <p>Fuel: {car.fuel}</p>
                    <p>Seller Type: {car.seller_type}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Owner: {car.owner}</p>
                    <p>Milage: {car.mileage}</p>
                    <p>Engine: {car.engine}</p>
                    <p>Max Power: {car.max_power}</p>
                    <p>Torque: {car.torque}</p>
                    <p>Seats: {car.seats}</p></>

            }

        </div>
    )
}