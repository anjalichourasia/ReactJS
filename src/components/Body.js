import RestrauntCard from "./RestrauntCard";
import resObj from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{}}>Top rated restraunts</button>
            </div>
            <div className="restraunt-container">
                {
                    resObj.map(restraunt => <RestrauntCard 
                        key = {restraunt.card?.card?.info?.id}
                        resData = {restraunt}
                    />)
                }
                <RestrauntCard 
                    resData = {resObj[0]}
                />
            </div>
        </div>
    )
}

export default Body;