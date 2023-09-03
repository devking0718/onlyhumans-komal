import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Logo } from "../assets";
import { NavMenuData } from "../contents";

export default function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <Image src={Logo} width={60} alt="logo" className="me-2"/><span className="logo-title">ONLYHUMANS</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                NavMenuData.map((item, index) => (
                                    <Nav.Link href={item.link}>{item.title}</Nav.Link>
                                ))
                            }             
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}