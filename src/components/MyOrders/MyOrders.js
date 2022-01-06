import React, { useEffect } from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Row, Col, Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./MyOrders.css";
import { useNavigate } from "react-router-dom";
const MyOrders = () => {
  const [orders, setOrders] = React.useState([]);
  const {
    currentUser: { email },
    token,
  } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://afternoon-headland-78231.herokuapp.com/orders/${email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setOrders(res.data);
        } else {
          navigate("/login");
        }
      });
  });
  const addedProducts = orders.map((order) => order.addedProducts);
  const flattenAddedProducts = addedProducts.flat();
  const status = orders.map((order) => order.status);
  return (
    <div>
      <ScrollToTop />
      <BreadCrumb title="My Orders" />
      {orders?.length ? (
        <Container>
          <h3>My Orders</h3>
          <Row className="g-3 my-4">
            {flattenAddedProducts.map((product) => {
              const { _id, price, title, image, cartQuantity } = product;
              return (
                <Col key={_id} xs={12} md={4}>
                  <div className="order-card card bg-white p-3">
                    <span
                      style={{ zIndex: 10 }}
                      className=" position-absolute bg-danger text-white px-2 rounded "
                    >
                      {status.includes("pending")
                        ? "pending"
                        : status.includes("processing")
                        ? "processing"
                        : "completed"}
                    </span>
                    <div>
                      <img
                        style={{ zIndex: 1 }}
                        className="w-100"
                        src={image}
                        alt={title}
                      />
                    </div>
                    <small>{title}</small>
                    <h6>Original Price : ${price}</h6>
                    <h6>Ordered Quantity : {cartQuantity}</h6>
                    <div className="d-flex mt-2 align-items-center justify-content-between">
                      <div>
                        <span className="mb-0 h4 me-1">
                          Total : ${(price * cartQuantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <h3 className="text-center my-5">No Orders</h3>
      )}
    </div>
  );
};

export default MyOrders;
