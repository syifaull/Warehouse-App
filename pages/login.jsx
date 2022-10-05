import { setCookie } from "cookies-next";
import Router from "next/router";
import { useState } from "react";
import { Form } from "react-bootstrap";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([])
  

  const clicklogin = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,
    });


  var config = {
    method: 'post',
    url: 'https://group4.altaproject.online/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

    axios(config)
      .then(function (response) {
        setCookie("Token", response.data.data.token);
        alert("Berhasil Masuk");
        setRole(response.data.data)
        // {(response.data.data.role) === "admin" ? Router.push("/adminverification") :
        // (response.data.data.role) === "mitra" ? Router.push("/profilmitra") :
        // (response.data.data.role) === "client" ? Router.push("/home") : null}

        {(response.data.data.role) === "admin" ? Router.push("/adminverification") :
        (response.data.data.role) === "mitra" ? Router.push({pathname:"/profilmitra", query: { name: (response.data.data.name)}}) :
        (response.data.data.role) === "penitip" ? Router.push("/home") : null}

        // Router.push({
        //   pathname: "/dashboard/detail",
        //   query: {
        //     title: data.title,
        //     author: data.author,
        //     image: data.imageUrl,
        //     content: data.content,
        //   },
        // });

        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert("Gagal Masuk");
        console.log(error);
      });
        
  };

  return (
    <div>
      <div className="conten">
        <h1>YOUR ACCOUNT FOR EVERYTHING WH</h1>

        <Form className="mx-3">
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Masukan email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <div className="text-muted text-center byloging">By logging in, you agree to WareHouse Privacy Policy and Terms of Use</div>
          </Form.Group>
        </Form>
        <button className="buttonlogin" type="submit" onClick={clicklogin}>
          Masuk
        </button>
        <div>
          <p className="plog text-center mt-1">
            Tidak Punya Akun? <a href="/registerclient">Daftar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
