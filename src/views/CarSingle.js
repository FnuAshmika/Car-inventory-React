import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Car from '../components/Car';
import { DataContext } from "../contexts/DataProvider";

export default function CarSingle(){
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [error, setError] = useState(false)
    const { getCar } = useContext(DataContext)
    useEffect(() => {
        async function handleLoad(){
            try {
                const data = await getCar(id)
                setCar(data)

            }
            catch(err) {
                setError(true)
               
            }
        }
        handleLoad()
       
    }, [])
    return (
        <div>
            {error ? <>
                <h2>404 Page not found</h2>

                </>: <>
                    <h1>Car Id: {id}</h1>
                    
                    <Car car={car} hideLink={true} /> 
                    <p>Year: {car.year}</p>
                    <p>Selling Price: {car.sellingPrice}</p>
                    <p>KM Driven: {car.kmDriven}</p>
                    <p>Fuel: {car.fuel}</p>
                    <p>Seller Type: {car.sellerType}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Owner: {car.owner}</p>
                    <p>Milage: {car.mileage}</p>
                    <p>Engine: {car.engine}</p>
                    <p>Max Power: {car.maxPower}</p>
                    <p>Torque: {car.torque}</p>
                    <p>Seats: {car.seats}</p></>

            }

        </div>
    )
}