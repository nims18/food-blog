import { useState, useEffect } from "react";


const FetchData = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error('Could not connect to the resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setError(null);
                    setLoading(false);
                    setData(data);
                })
                .catch(err => {
                    // auto catches network / connection error
                    setLoading(false);
                    setError(err.message);
                    setData(null);
                })
        }, 100)
    }, [url])



    return { data, loading, error };

}

export default FetchData;