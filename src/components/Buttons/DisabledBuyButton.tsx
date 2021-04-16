/* eslint-disable react/prop-types */
import React, { ReactNode, ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import * as Constants from '../../constants';
import buttonClasses from './ClickToOpen.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisabledFreeButton(): ReactElement {
  const MyButton = styled.button`
    margin: auto;
    display: block;
  `;
  const ReactButton = styled(Button)`
    margin: auto;
    display: block;
  `;

  return (
    <div>
      <ReactButton
        variant="light"
        id={buttonClasses.customCursor1}
        className={buttonClasses.relativeWhite}
      >
        {Constants.BUY_BUTTON_TEXT}
      </ReactButton>
    </div>
  );
}