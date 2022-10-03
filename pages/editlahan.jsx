import React from "react";
import { Col, Row } from "react-bootstrap";
import ComEditLahan from "../component/comeditlahan";
import Footer from "../component/footer";
import NavbarComp from "../component/navbarcomp";
import Sidebar from "../component/sidebar";

const editlahan = () => {
  return (
    <div>
      <NavbarComp />
      <Row className="gx-0 min-vh-100 addlahan">
        <Col lg={2}>
          <div className="sdbr">
            <img src="" alt="" />
          </div>
        </Col>
        <Col lg={10}>
          <div className="contencomedit">
            <Row>
              <Col sm={6}>
                <h1 className="mx-2">Edit Lahan</h1>
                <Form className="mx-2">
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Nama Lahan</Form.Label>
                    <Form.Control type="text" placeholder="Enter Nama Lahan" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Luas</Form.Label>
                    <Form.Control type="number" placeholder="Enter Luas" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Panjang</Form.Label>
                    <Form.Control type="number" placeholder="Enter Panjang" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Lebar</Form.Label>
                    <Form.Control type="number" placeholder="Enter Lebar" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Harga</Form.Label>
                    <Form.Control type="number" placeholder="Enter Harga" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Tentang Lahan</Form.Label>
                    <Form.Control type="text" placeholder="Enter Tentang Gudang" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Fasilitas</Form.Label>
                    <Form.Control type="text" placeholder="Enter Fasilitas" />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label className="mb-0">Barang yang tidak diijinkan</Form.Label>
                    <Form.Control type="text" placeholder="Enter Barang yang tidak diijinkan" />
                  </Form.Group>
                </Form>
              </Col>

              <Col sm={6}>
                <div className="cr">
                  <div className="foto"></div>
                  <input className="btnfoto" type="file" />
                </div>
              </Col>
            </Row>
            <Button className="btnedit">Edit Lahan</Button>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default editlahan;
