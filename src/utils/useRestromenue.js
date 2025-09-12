import { useEffect ,useState } from "react";

const useRestromenue = (resId) =>{
    const[resItem,setresItem] = useState([])

    useEffect(()=>{
        fetchInfo();
    },[]);

    const fetchInfo = async() =>{
        const item =await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.91870&lng=74.85980&restaurantId=' + resId + '&catalog_qa=undefined&query=Biryani&submitAction=ENTER');
        const json =await item.json();
        setresItem(json)
    }

    return resItem;
}
export default useRestromenue;