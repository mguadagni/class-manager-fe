//make another componenet and play with it. use state and button to do something

import React, { useEffect } from 'react';
import axios from 'axios';

const Foo = () => {

    useEffect(() => {
        const getSchools = async() => {
            const res = await axios.get("http://localhost:8080/api/schools/");
            console.log(res.data[0]);
        }
        getSchools();
    }, [])

    return (
        <div>
            <p>Test Foo File</p>
            {/* <p>{res[0]}</p> */}
        </div>
    )
}

export default Foo;