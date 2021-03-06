import { Link } from "react-router-dom";


const CategoryList = (props) => {

    const data = props.meals;

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="slogan">
                        <h1 className="sloganheader mt-5 mb-5 text-center"><span className="highlighttext">Good food</span> doesn't need to be complicated</h1>
                        <div className="categories mt-3 bg-light">
                            <div className="row">
                                {
                                    data.map((category, i) => (
                                        <div className="foodlist col-md-3 p-2" key={i}>
                                            <div className="card">
                                                <img src={category.strMealThumb} className="card-img-top" alt="..." />
                                                <div className="card-body shadow">
                                                    <h5 className="title p-2">{category.strMeal}</h5>
                                                    <Link className="seebtn form-control text-center text-decoration-none text-white" to="/"><span className="text-center">See More...</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryList;