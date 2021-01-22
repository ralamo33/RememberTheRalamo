
import React, {useState} from "react"
import { Button} from "react-bootstrap";
import styled from "styled-components";
import MyModal from "./MyModal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ClickToOpen(props) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    const MyButton = styled(Button)`
        margin: auto;
        display: block;
    `

    return (
        <div>
            <MyButton className={props.size} variant={props.variant} onClick={handleShow}>{props.text}</MyButton>
            <MyModal show={show} setShow={setShow}></MyModal>
        </div>
    )
}
