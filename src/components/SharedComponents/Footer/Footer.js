import React, { Fragment } from "react";
import useEvents from "../../../hooks/useEvents";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import {
  FooterBottom,
  FooterTitle,
  FooterTop,
  InformationDiv,
  RecentEvents,
  SubscribeForm,
} from "../../StyledComponents/FooterStyle";
const Footer = () => {
  const events = useEvents();
  return (
    <Fragment>
      <footer>
        <FooterTop className="footer-top">
          <Container className="wow fadeIn">
            <Row>
              <Col xl={3} lg={6} md={6} sm={6}>
                <div>
                  <div>
                    <Link className="text-decoration-none " to="/">
                      <h1 className="text-primary">Kiddies Educare</h1>
                    </Link>
                  </div>
                  <p className="fs-5 text-black">
                    Lorem ipsum dolor sit amet, consectetur at adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    the are aliqua.
                  </p>
                </div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={6}>
                <InformationDiv className="border-0">
                  <FooterTitle> Information </FooterTitle>
                  <ul>
                    <li>
                      <Link to="/"> Home </Link>
                    </li>
                    <li>
                      <Link to="/about-1"> About </Link>
                    </li>
                    <li>
                      <Link to="/faqs"> Faq </Link>
                    </li>
                    <li>
                      <Link to="/event"> Event </Link>
                    </li>
                    <li>
                      <Link to="/gallery"> Gallery </Link>
                    </li>
                    <li>
                      <Link to="/classes"> Classes </Link>
                    </li>
                    <li>
                      <Link to="/contact-us"> Contact </Link>
                    </li>
                  </ul>
                </InformationDiv>
              </Col>
              <Col xl={3} lg={6} md={6} sm={6}>
                <RecentEvents>
                  <FooterTitle> Recent Events </FooterTitle>
                  <div>
                    {events.map((event) => {
                      const { id, title, image } = event;
                      return (
                        <div key={id} className="singleEvent">
                          <div className="eventImage">
                            <img src={image} width="200" height="143" alt="" />
                          </div>
                          <div className="eventInfo">
                            <h6>
                              <Link
                                className="text-decoration-none text-black"
                                to="/blog-details"
                              >
                                {title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </RecentEvents>
              </Col>
              <Col xl={3} lg={6} md={6} sm={6}>
                <div>
                  <FooterTitle> Newsletter </FooterTitle>
                  <SubscribeForm>
                    <Form>
                      <div>
                        <FormControl
                          required="required"
                          placeholder="Your Email Address"
                          type="email"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 bg-teal-600 hover:bg-teal-800 text-white fs-5 rounded-full "
                        >
                          Subscribe
                        </button>
                      </div>
                    </Form>
                  </SubscribeForm>
                </div>
              </Col>
            </Row>
          </Container>
        </FooterTop>
        {/*  footer bottom part  */}
        <FooterBottom>
          <Container>
            <Row>
              <Col lg={6} md={8} sm={6} className="text-left">
                <span>Copyright© 2022 Kiddies Educare.All right reserved</span>
              </Col>
            </Row>
          </Container>
        </FooterBottom>
      </footer>
    </Fragment>
  );
};

export default Footer;
