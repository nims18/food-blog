const NotFound = (props) => {

    const message = props.message;

    return (
        <div className="error">
            <h1 className="notfound text-center mt-5">Oops, 404!</h1>
            <h5 className="subfound text-center mt-3">{message ? message : `There's nothing here!`}</h5>
            <center>
                <img className="errorimg d-flex justify-content-center" src={process.env.PUBLIC_URL + "error.png"} alt="" />
            </center>
        </div>
    );
}

export default NotFound;