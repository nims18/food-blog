import React from "react";
import { Link } from "react-router-dom";

const Contents = (props) => {

    const data = props.categories.slice(0, -2);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="slogan">
                    <h1 className="sloganheader mt-5 mb-5 text-center"><span className="highlighttext">Good food</span> doesn't need to be complicated</h1>
                    <div className="categories mt-3 bg-light">
                        <div className="row">
                            {
                                data.map(category => (
                                    <div className="categories col-md-2 p-2 d-flex justify-content-center" key={category.idCategory}>
                                        <div className="card">
                                            <Link className="text-decoration-none" to={`/food-category-list/`} state={{ category: category.strCategory }}>
                                                <img src={category.strCategoryThumb} className="card-img-top" alt="..." />
                                                <div className="card-body shadow">
                                                    <h5 className="card-title text-center text-white p-2">{category.strCategory}</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contents;