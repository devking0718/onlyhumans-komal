import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavMenuData } from "../contents";

export default function Footer() {
    return(
        <div className="Footer py-2">
            <Container>
                <hr/>
                <Row>
                    <Col sm={12} lg={6} className="d-flex mb-3 align-items-center justify-content-around justify-content-lg-start">
                        {
                            NavMenuData.map((item, index) => (
                                <Nav.Link className="nav-link me-0 me-lg-3" href={item.link}>{item.title}</Nav.Link>
                            ))
                        }
                    </Col>
                </Row>
                <hr/>
                <p className="text-center content-color">Copyright © 2023 OnlyHumans. All rights reserved.</p>
            </Container>
        </div>
    )
}