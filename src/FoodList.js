import { useLocation } from "react-router-dom";
import CategoryList from "./CategoryList";
import FetchData from "./FetchData";
import NotFound from "./NotFound";

const FoodList = () => {

    const location = useLocation();

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${location.state.category}`;
    const { data, loading, error } = FetchData(url);


    return (
        <div className="home">
            {error && <NotFound message={error} />}
            {loading && <center><div className="loader"></div></center>}
            {data && <CategoryList meals={data.meals} />}
        </div>
    );





}

export default FoodList;