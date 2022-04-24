import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contents = (props) => {

    const data = props.categories.slice(0, -2);

    return (
        <>
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
            <div className="food container mb-5">
                <center>
                    <div className="row">
                        <h5 className="titleheader2 mt-5">AS SEEN IN</h5>
                        <div className="col-md-4  mb-3">
                            <img className="foodlogo" src={process.env.PUBLIC_URL + "food1.jpg"} alt="" />
                        </div>
                        <div className="col-md-4  mb-3">
                            <img className="foodlogo" src={process.env.PUBLIC_URL + "food2.jpg"} alt="" />
                        </div>
                        <div className="col-md-4  mb-3">
                            <img className="foodlogo" src={process.env.PUBLIC_URL + "food3.webp"} alt="" />
                        </div>
                    </div>
                </center>
            </div>
            <div className="wrap container-sm mb-5">
                <div className="row">
                    <h5 className="spiel text-center">
                        Food is any substance consumed to provide nutritional support for an organism.<br />
                        It is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, <br />proteins, vitamins, or minerals.
                        The substance in ingested by an organism and assimilated by the organism's <br />cells to provide energy, maintlife, or stimulate to growth.
                    </h5>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contents;