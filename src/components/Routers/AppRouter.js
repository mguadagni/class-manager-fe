import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "../Auth/Login";
import Container from "../common/Container";
import Home from "../Home/Home";
import Self from "../Student/Self";
import Students from "../Student/Students";
import NavBar from "../NavBar/NavBar";

const AppRouter = () => {

// Home
// Login
// Students
// MyPage

//optional teacher

    return (
        <Container>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Self />} />
                <Route path="/students" element={<Students />} />
                <Route path="/payFees" element={<PayFees />}
            </Routes>
        </Container>
    )
}

export default AppRouter