import React from 'react';
import BorderCard from '../common/BorderCard'
import Container from '../common/Container';

const Student = (props) => {

    return (
        <Container>
            <BorderCard>
                <h1>{props.student.name}</h1>
                <p>{props.student.grade}</p>
            </BorderCard>
        </Container>
    )
}

export default Student;