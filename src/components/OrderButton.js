import React from "react";
import styled from "styled-components";
import {Button} from "react-bootstrap";
import * as Constants from "../constants";

export default function OrderButton() {

    const MyButton = styled(Button)`
        font-size: 0.35em;
        margin: auto;
        display: block;
    `

    return <MyButton variant="danger">{Constants.ORDER_BUTTON_TEXT}</MyButton>
}