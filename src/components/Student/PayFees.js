import React, {useState, useContext} from 'react';
import Container from '../common/Container';

const PayFees = () => {

    const [query, setQuery] = useState({
        amount: ""
    });
    const [submitting, setSubmitting] = useState(false)
    const [auth] = useContext(AuthContext)
    
    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]: value
        })
    }

    return (
        <Container>
            <h1>PayFees</h1>
        </Container>
    )
}

export default PayFees