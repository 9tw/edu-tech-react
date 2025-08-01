/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3003/category"
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //   },
        // }
      );

      const data = await response.data.result;
      setCategories(data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        setCategories([]);
        console.log("No Category Found");
      } else {
        console.log("Error:", error);
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Col lg="10" style={{ display: "flex" }}>
        <img
          alt="EduTech"
          src={require("../../assets/img/sigmund-Im_cQ6hQo10-unsplash.jpg")}
          style={{ width: "50%", borderRadius: 50 }}
        />
        <div style={{ margin: "auto 10px auto" }}>
          <h1 style={{ color: "white" }}>Education Technology Website</h1>
          <p style={{ color: "white" }}>
            Upgrade your skill to be a better programmer
          </p>
        </div>
      </Col>
      <Col
        lg="12"
        className="bg-secondary shadow border-0"
        style={{
          borderRadius: 25,
          marginTop: "50px",
          padding: "25px 10px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "45px", margin: "auto" }}>Our Category</h1>
        <Col
          lg="12"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {categories.length !== 0 &&
            categories.map((item) => (
              <Col lg="4" style={{ margin: "10px 0px" }}>
                <Card className="bg-secondary shadow border-0">
                  <div className="text-muted text-center mt-2 mb-3">
                    <large>{item.title}</large>
                  </div>
                  <div className="btn-wrapper text-center">
                    <img
                      alt="Frontend"
                      src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                      style={{ width: "75%", borderRadius: 25 }}
                    />
                    <Col lg="12">
                      <small>{item.description}</small>
                    </Col>
                    <div>
                      <Button className="my-4" color="primary" type="button">
                        More
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
        </Col>
      </Col>
      <Col lg="10" style={{ display: "flex", marginTop: "50px" }}>
        <div style={{ margin: "auto 10px 0px" }}>
          <h1 style={{ color: "white" }}>
            Learn with Industry Standard Classes
          </h1>
          <p style={{ color: "white" }}>
            Classes at Edu-Tech are available for those with no programming
            skills (basic) to professionals.
          </p>
        </div>
        <img
          alt="class"
          src={require("../../assets/img/annie-spratt-vGgn0xLdy8s-unsplash.jpg")}
          style={{ width: "50%" }}
        />
      </Col>
      <Col
        lg="12"
        className="bg-info shadow border-0"
        style={{
          borderRadius: "10px",
          marginTop: "50px",
          padding: "25px 10px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "45px", margin: "auto", color: "whitesmoke" }}>
          Let's Go!
        </h1>
        <p style={{ color: "whitesmoke" }}>
          Learn better with learning paths and boothcamp
        </p>
        <Button color="outline-neutral" href="/auth/register">
          <span className="nav-link-inner--text">Register</span>
        </Button>
      </Col>
    </>
  );
};

export default Home;
