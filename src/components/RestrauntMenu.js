import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";

const RestrauntMenu = () => {
    const [resInfo, setResInfo] = useState([])

    useEffect(()=>{
        fetchMenu();
    }, []);

    const { resId } = useParams();
    // 23846
    // 19361
    // 596949

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+ resId +"&catalog_qa=undefined&query=Pizza&submitAction=ENTER")
        const json = await data.json();
        setResInfo(json?.data.cards);
        console.log(json?.data?.cards[2]?.card?.card?.info?.name)
    }

    console.log(resInfo)
    // const {name} = resInfo?.cards[0]?.card?.card?.info;

    // if ( resInfo === null ) return <div>null found</div>

    return(
        <div className="menu">
            <h1> Name of the Restaurant </h1>
            <h2> Menu </h2>
            <ul> 
                {resInfo.map((res,id) => <li key = {id}>{res.card?.card?.info?.name}</li>
                )}
            </ul>
        </div>
    )
}
export default RestrauntMenu;