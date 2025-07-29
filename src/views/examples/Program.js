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
import { useState } from "react";

const Program = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Javascript</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Frontend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Frontend developer builds the user interface part of the
                      applications
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Angular</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Frontend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Frontend developer builds the user interface part of the
                      applications
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Typescript</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Frontend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Frontend developer builds the user interface part of the
                      applications
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </>
        );
      case "tab2":
        return (
          <>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Javascript</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Backend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Backend developer works on the server-side of the
                      applications
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Golang</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Backend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Backend developer works on the server-side of the
                      applications
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Java</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Backend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Backend developer works on the server-side of the
                      applications
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </>
        );
      case "tab3":
        return (
          <>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Kotlin</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Backend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Android developer builds applications that run on Android
                      devices
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>Java</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Backend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Android developer builds applications that run on Android
                      devices
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4" style={{ margin: "10px 0px" }}>
              <Card className="bg-secondary shadow border-0">
                <div className="text-muted text-center mt-2 mb-3">
                  <large>React Native</large>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    alt="Backend"
                    src={require("../../assets/img/undraw_maintenance_rjtm.png")}
                    style={{ width: "75%", borderRadius: 25 }}
                  />
                  <Col lg="12">
                    <small>
                      Android developer builds applications that run on Android
                      devices
                    </small>
                  </Col>
                  <div>
                    <Button className="my-4" color="primary" type="button">
                      More
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </>
        );
      default:
        return null;
    }
  };

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
          borderRadius: 10,
          marginTop: "50px",
          padding: "5px 0px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Button color="info" onClick={() => setActiveTab("tab1")}>
          <span className="nav-link-inner--text">Frontend</span>
        </Button>
        <Button color="info" onClick={() => setActiveTab("tab2")}>
          <span className="nav-link-inner--text">Backend</span>
        </Button>
        <Button color="info" onClick={() => setActiveTab("tab3")}>
          <span className="nav-link-inner--text">Android</span>
        </Button>
      </Col>
      <Col
        lg="12"
        className="bg-secondary shadow border-0"
        style={{
          borderRadius: 25,
          marginTop: "25px",
          padding: "25px 10px",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* <div style={{ padding: "10px", border: "1px solid #ccc" }}> */}
        {renderContent()}
        {/* </div> */}
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

export default Program;
