import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import Form from '../common/Form'
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';

const LoginForm = (props) => {

    const handleChange = (e) => {
        props.updateForm(e.target.id, e.target.value)
    }

    return (
        <Container>
            <Form onSubmit={props.onSubmit} style={{marginTop: '1em'}}>
                <InlineInputContainer>
                    <Input 
                    name="id"
                    id="id"
                    placeholder="Student id"
                    value={props.query.id}
                    onChange={handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={props.query.password}
                    onChange={handleChange}
                    />
                </InlineInputContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default LoginForm;