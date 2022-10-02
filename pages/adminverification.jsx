import React, { useEffect, useState } from "react";
import Navbarcom from "../component/navbarcomp";
import Footer from "../component/footer";
import { Row, Col } from "react-bootstrap";
import Router from "next/router";
import { getCookie } from "cookies-next";
import axios from "axios";

const adminverification = () => {
  const [verifMitra, setVerifMitra] = useState([]);
  const [listMitra, setListMitra] = useState([]);

  const goDetail = () => {
    Router.push("/detailmitra");
  };

  const getVerifMitra = () => {
    axios
      .get("http://34.125.22.211/mitra/unverify", {
        headers: {
          Authorization: `Bearer ${getCookie("Token")}`,
        },
      })

      .then((response) => {
        setVerifMitra(response.data.data);
      });
  };

  const getListMitra = () => {
    axios
      .get("http://34.125.22.211/mitra/verified", {
        headers: {
          Authorization: `Bearer ${getCookie("Token")}`,
        },
      })

      .then((response) => {
        setListMitra(response.data.data);
      });
  };

  useEffect(() => {
    getVerifMitra();
    getListMitra();
  }, []);

  return (
    <div>
      <Navbarcom />
      <div className="contenverif mx-auto p-3 after-navbar">
        <h2>Verifikasi Mitra Gudang</h2>
        {verifMitra.map((item) => {
          return (
            <Row>
              <Col sm={6}>
                <button className="btnmit black-font" type="submit">
                  {item.name}
                </button>
              </Col>
              <Col sm={6} className="p-0 btnright">
                <button className="me-4 btnacc">Terima</button>
                <button className="me-4 btnrej">Tolak</button>
              </Col>
            </Row>
          );
        })}
      </div>
      <div className="contenmitra mx-auto p-3">
        <h2>Daftar Mitra Gudang</h2>
        {listMitra.map((item) => {
          return (
            <Row>
              <Col sm={6}>
                <button className="btnmit black-font" onClick={goDetail}>
                  {item.name}
                </button>
              </Col>
              <Col sm={6} className="p-0 btnright">
                <button className="me-4 btnrej">Hapus</button>
              </Col>
            </Row>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default adminverification;
