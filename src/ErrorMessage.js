

const ErrorMessage = (error) => {
    return (
        <div className="error-message">
            <h1 className="text-center">{error.message}</h1>
        </div>
    );
}

export default ErrorMessage;