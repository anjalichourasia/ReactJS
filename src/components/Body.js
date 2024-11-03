import RestrauntCard from "./RestrauntCard";
import resObj from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
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