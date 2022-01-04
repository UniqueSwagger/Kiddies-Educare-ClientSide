import React, { useState } from "react";
import { Row, Col, Container, Tabs, Tab } from "react-bootstrap";
import "./GalleryDashboard.css";
const GalleryDashboard = () => {
  const [key, setKey] = useState("showAll");
  return (
    <div className="galleryDashboard my-3">
      <Row>
        <Col>
          <Container>
            <Tabs
              className="justify-content-center align-items-center border-0 nav-pills text-black my-5"
              defaultActiveKey="All"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="showAll" title="Show All">
                <h1>All</h1>
              </Tab>
              <Tab eventKey="drawing" title="Drawing">
                <h1>Drawing</h1>
              </Tab>
              <Tab eventKey="education" title="Education">
                <h1>Education</h1>
              </Tab>
              <Tab eventKey="game" title="Game">
                <h1>Game</h1>
              </Tab>
            </Tabs>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default GalleryDashboard;
