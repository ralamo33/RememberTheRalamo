
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container, Row, Col} from "react-bootstrap";
import OrderButton from "./OrderButton";
import AWSImage from "../components/AWSImage";

export default function MyNavbar(props) {
    const NavWrapper = styled.p`
        border: 5px solid black;
        text-align: center;
        font-size: 4rem;
        color: #00ccff;
        background-color: #595959;
    `
    const navItems = props.navItems.map((navItem) => {
        return (
            <Col>
                <NavWrapper>
                    {navItem}
                </NavWrapper>
            </Col>
        )
    });

    return (
            <Container>
                <Row>
                    {navItems}
                </Row>
            </Container>
    )
}