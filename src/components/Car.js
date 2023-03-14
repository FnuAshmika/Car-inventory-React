import { Link } from "react-router-dom"; 

export default function Car(props){
    return(
        <div className="car">
            <h2>{props.car.name}</h2>
            {
                (props.hideLink) ?
                <></> :
                <Link to={`/cars/${props.car.id}`}>More Info</Link>
            }


        </div>
    )
}