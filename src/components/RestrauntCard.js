import { useEffect } from "react";
import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => { 
    useEffect(()=>{
        console.log("Rest use Effect");
    },[])
    const {
        avgRating,
        cuisines,
        cloudinaryImageId,
        name,
    } = props.resData?.card?.card?.info;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo" 
                src={CDN_URL+cloudinaryImageId}
            />
            <h3> {name} </h3>
            <h4> {cuisines.join(",")} </h4>
            <h5> {avgRating} </h5>
        </div>
    )
}

export default RestrauntCard;