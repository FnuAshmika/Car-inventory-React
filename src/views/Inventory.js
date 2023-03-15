import { useContext, useEffect, useState } from "react";
import Car from '../components/Car';
import { DataContext } from "../contexts/DataProvider";
export default function Inventory(){
   const { cars } = useContext(DataContext)
    return(
        <div>
            <h1>Car Inventory</h1>
            {cars.map((car)=> <Car car={car} key={car.id}/>)}
        </div>
    )
}