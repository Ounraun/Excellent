import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css"; // ไฟล์ CSS ที่เราจะเขียนต่อไป

function MyNavbar() {
  const [activeMenu, setActiveMenu] = useState<string>("about");

  // เมื่อ Dropdown เปิด (isOpen = true) ให้ตั้ง activeMenu = 'service'
  // เมื่อ Dropdown ปิด ถ้าอยากให้ underline ค้างไว้ ให้ comment out setActiveMenu('') ใน else
  const handleToggleService = (isOpen: boolean) => {
    if (isOpen) {
      setActiveMenu("service");
    } else {
      // ถ้าอยากให้ปิดแล้วเอา underline ออก ให้ uncomment บรรทัดด้านล่าง
      // setActiveMenu("");
      // แต่ถ้าอยากให้ underline ค้างไว้ ให้ไม่ต้องทำอะไร
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* About */}
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setActiveMenu("about")}
              className={activeMenu === "about" ? "active-link" : ""}
            >
              About us
            </Nav.Link>

            {/* Service & Solution (NavDropdown) */}
            <NavDropdown
              title="Service & Solution"
              id="service-dropdown"
              onToggle={handleToggleService}
              className={activeMenu === "service" ? "active-link" : ""}
            >
              <NavDropdown.Item
                as={Link}
                to="/service/network-solutions"
                onClick={() => setActiveMenu("service")}
              >
                Network and solutions
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/service/data-center"
                onClick={() => setActiveMenu("service")}
              >
                Data center
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/service/data-management"
                onClick={() => setActiveMenu("service")}
              >
                Data management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/service/centralize-management"
                onClick={() => setActiveMenu("service")}
              >
                Centralize management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/service/multimedia-solution"
                onClick={() => setActiveMenu("service")}
              >
                Multimedia solution
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/service/digital-transformation"
                onClick={() => setActiveMenu("service")}
              >
                Digital transformation
              </NavDropdown.Item>
            </NavDropdown>

            {/* Society */}
            <Nav.Link
              as={Link}
              to="/society"
              onClick={() => setActiveMenu("society")}
              className={activeMenu === "society" ? "active-link" : ""}
            >
              Society
            </Nav.Link>

            {/* Contact */}
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setActiveMenu("contact")}
              className={activeMenu === "contact" ? "active-link" : ""}
            >
              Contact
            </Nav.Link>

            {/* Profile (ไม่มีเอฟเฟกต์) */}
            <NavDropdown title="Profile" id="profile-dropdown" align="end">
              <NavDropdown.Item href="#meetingroom">
                Meetingroom
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
