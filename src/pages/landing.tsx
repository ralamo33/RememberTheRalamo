import React, { ReactElement } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Break from '../components/Break';
import LandingForm from '../components/Forms/LandingForm';

const Header = styled.div`
  color: ${Constants.RED};
  max-width: 90vw;
  margin: auto;
  font-size: 3.5vmax;
  font-family: newsreader;
  font-weight: 500;
`;

const Bold = styled.span`
  font-weight: 700;
  text-align: center;
  font-family: belmont;
  font-size: 4vmax;
`;

const Subheader = styled.div`
  color: black;
  font-size: 3vmax;
  font-family: newsreader;
`;

const StyledContainer = styled(Container)``;

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`;

const StyledList = styled.ul`
  font-size: 2.5vmax;
  font-family: newsreader;
  font-weight: 475;
  margin-bottom: 0;
`;

const BasicBold = styled.span`
  font-weight: 700;
`;

const BackImage = styled(Col)`
  background-image: url('https://remember-the-ralamo-images.s3.amazonaws.com/StarterRules.jpg'),
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 5vw;
  height: 40vh;
`;

const MyHeader = () => (
  <Header>
    <Bold>Never</Bold> struggle to find players again.
  </Header>
);

export default function Landing(): ReactElement {
  const subheader =
    '20-page starter set includes basic rules, character materials PLUS a 2 hour mini adventure that will leave your friends hungry for more. A PDF copy will be instantly sent to your inbox.';

  return (
    <Layout>
      <StyledContainer fluid>
        <Row>
          <Col xs="12" sm={{ span: 6, order: 'last' }}>
            <MyHeader></MyHeader>
            <StyledList>
              <li>
                A 2 hour RPG experience your friends will{' '}
                <BasicBold>LOVE</BasicBold>.
              </li>
              <li>Eliminate session 0 and get to the action instantly.</li>
              <li>Build meaningful experiences with new players.</li>
            </StyledList>
          </Col>
          <Col xs="12" sm={{ span: 6, order: 'first' }}>
            <Break height="3vh"></Break>
            <StyledImage
              src={`${Constants.BUCKET_URL}StarterRules.jpg`}
            ></StyledImage>
          </Col>
        </Row>
        <Row>
          <Col>
            <Break height="1vh"></Break>
            <LandingForm></LandingForm>
          </Col>
        </Row>
        <Break height="10vh"></Break>
        <Row>
          <Col>
            <Subheader>{subheader}</Subheader>
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  );
}
