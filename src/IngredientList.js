import FetchData from "./FetchData";
import NotFound from "./NotFound";
import Ingredients from "./Ingredients";

const IngredientsList = () => {

    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    const { data, loading, error } = FetchData(url);

    return (
        <div className="home">
            {error && <NotFound message={error} />}
            {loading && <center><div className="loader"></div></center>}
            {data && <Ingredients meals={data.meals} />}
        </div>
    );
}

export default IngredientsList;