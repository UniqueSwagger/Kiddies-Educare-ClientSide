import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, BreadcrumbItem } from "react-bootstrap";
import {
  BreadCrumbArea,
  BreadCrumbMenu,
  InnerContent,
  Title,
} from "../StyledComponents/BreadCrumbStyle";
const BreadCrumb = ({ title }) => {
  return (
    <BreadCrumbArea>
      <Container>
        <Row>
          <Col xs={12}>
            <InnerContent>
              <Title>
                <h2>{title}</h2>
              </Title>
              <BreadCrumbMenu>
                <ul>
                  <BreadcrumbItem>
                    <Link to="/home">Home </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>{title}</BreadcrumbItem>
                </ul>
              </BreadCrumbMenu>
            </InnerContent>
          </Col>
        </Row>
      </Container>
    </BreadCrumbArea>
  );
};

export default BreadCrumb;
