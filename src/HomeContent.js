import FetchData from "./FetchData";
import NotFound from "./NotFound";
import Contents from "./Contents";


const HomeContent = () => {

    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const { data, loading, error } = FetchData(url);

    return (
        <div className="home">
            {error && <NotFound message={error} />}
            {loading && <center><div className="loader"></div></center>}
            {data && <Contents categories={data.categories} />}
        </div>
    );
}

export default HomeContent;