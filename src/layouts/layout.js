import React from "react"
import {createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: #ffffcc;
    font-family: 'MedievalSharp', cursive;
    font-weight: 400;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle/>
      {children}
    </React.Fragment>
  )
}