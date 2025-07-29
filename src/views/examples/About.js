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

const About = () => {
  return (
    <>
      {/* <Col lg="10" style={{ display: "flex" }}>
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
      </Col> */}
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
        <h1 style={{ fontSize: "45px", margin: "auto" }}>About Us</h1>
        <img
          alt="EduTech"
          src={require("../../assets/img/sigmund-Im_cQ6hQo10-unsplash.jpg")}
          style={{ width: "65%", borderRadius: 50 }}
        />
        <Col
          lg="11"
          style={{
            margin: "25px auto 0px",
          }}
        >
          <p>
            Edu-tech's vision is to become a leading technology education
            platform that encourages broader digital literacy access to all.
            Edu-tech has a mission to accelerate transitions towards the digital
            world through technology education that transforms life.
          </p>
          <p>
            Now all nations are moving towards the digital world that is based
            on technological innovation in all joints of life. We believe that
            technology education is the foundation for every nation to be at the
            forefront in dealing with the digital world.
          </p>
          <p>
            Edu-tech is present as a technological education platform that helps
            produce global standard digital talents. All for the sake of
            accelerating Indonesia to be at the forefront.
          </p>
        </Col>
      </Col>
      {/* <Col lg="10" style={{ display: "flex", marginTop: "50px" }}>
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
      </Col> */}
      {/* <Col
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
      </Col> */}
    </>
  );
};

export default About;
