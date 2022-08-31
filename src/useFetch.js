// if the data isn't available yet but is loading
// if we get the data
// if there's an error

import { useState, useEffect } from "react";

export function useFetch(uri) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (!uri) {
            return ;
        }

        fetch(uri)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [uri]);

    return { loading, data, error };
}