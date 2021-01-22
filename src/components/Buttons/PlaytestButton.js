import React, {useState} from "react"
import ClickToOpen from "./ClickToOpen"
import buttonClasses from "./ClickToOpen.module.css"
import * as Constants from "../../constants";
import PlaytestForm from "../Forms/PlaytestForm";

export default function PlaytestButton() {

    const [show, setShow] = useState(false);

    const playtestButton = <ClickToOpen variant="warning" size={buttonClasses.independentBlack} show={show} setShow={setShow}
                                text={Constants.PLAYTEST_BUTTON_TEXT} title={Constants.PLAYTEST_MODAL_TITLE}
                                form={<PlaytestForm close={() => setShow(false)}/>}/>

    return playtestButton; 
}