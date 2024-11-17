import RestrauntCard from "./RestrauntCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [restList, setRestList] = useState(resObj);
    useEffect(()=>{
        console.log("Body use Effect");
    },[])

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = restList.filter(li => li.card?.card?.info?.avgRating>4.1);
                    setRestList(filteredList)
                }}>Top rated restraunts</button>
            </div>
            <div className="restraunt-container">
                {
                    restList.map(restraunt => <RestrauntCard 
                        key = {restraunt.card?.card?.info?.id}
                        resData = {restraunt}
                    />)
                }
                <RestrauntCard 
                    resData = {restList[0]}
                />
            </div>
        </div>
    )
}

export default Body;