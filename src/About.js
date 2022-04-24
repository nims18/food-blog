import Footer from "./Footer";
const About = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <img className="food4 d-flex justify-content-center" src={process.env.PUBLIC_URL + "food4.webp"} alt="food4" />
                    </div>
                    <div className="side-content col-md-8 mt-5">
                        <h1>Welcome to The Curious Plate</h1>
                        <h2>Let's talk food shall we?</h2>
                        <h5>Well, we hope that’s why you’re here. Our recipes are designed for real, actual, every day life, and we try to focus on real foods and healthy recipes (which honestly means a lot of different things to us, including the perfect chocolate chip cookie and cheese on cheese on cheese, because health is all about balance, right?).

                            This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, have some sad greens in your fridge to use up and you need some inspiration.

                            You’re here! Have fun. We hope you find something (many things) you love.</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;