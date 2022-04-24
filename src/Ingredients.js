import React from "react";
import Footer from "./Footer";

const Ingredients = (props) => {

    const data = props.meals.slice(0, -550);

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
                                                <div className="card-body shadow">
                                                    <h5 className="title p-2">{category.strIngredient}</h5>
                                                    <h6 className="fifty-chars text-dark">{category.strDescription}</h6>
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
            <Footer />
        </>
    );
}

export default Ingredients;