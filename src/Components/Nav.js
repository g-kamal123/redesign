import { Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import classes from "../Styles/Nav.module.css";
import { Storage } from "./Storage";

function Nav() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [user,setuser] = useState('')
  const [pass,setpass] = useState('')
  const [flag,setflag] = useState(false)
  const [err,setErr] = useState('')
  const detail = useContext(Storage)

  useEffect(()=>{
    if(detail.log1)
    setLogin(true)
  },[detail.log1])
  return (
    <>
      <nav className={classes.nav}>
        <p className={classes.blink}>
          <span>Download WAY2DOOR APP </span>
          <span
            className={classes.span}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=io.ionic.way2doorapp",
                "_blank"
              )
            }
          >
            click here
          </span>
        </p>

        <ul>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <span>Selected Delivery Location : Lucknow (226010)</span>{" "}
          </li>
          <li onClick={() => setLogin(true)}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>{flag ? user:'Login'}</span>
          </li>
          <li onClick={() => setSignup(true)}>
            <i className="fa-solid fa-paper-plane"></i>
            <span>Signup</span>
          </li>
        </ul>
      </nav>
      <div className={classes.shortnav}>
        <div
          className={classes.navimage}
          style={{ height: "4rem", width: "7rem" }}
        >
          <img
            src="http://www.way2door.com/images/way2door-min.png"
            alt=""
            style={{ height: "90%", width: "90%" }}
          />
        </div>
        <ul>
          <li onClick={() => setSignup(true)}>
            <i className="fa-solid fa-paper-plane"></i>
            <span>Signup</span>
          </li>
          <li onClick={() => setLogin(true)}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>{flag ? user:'Login'}</span>
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <span>Lucknow</span>
          </li>
          {/* <li>
            <i class="fa-solid fa-bars"></i>
            <span>Store</span>
          </li> */}
        </ul>
      </div>
      <Modal open={login} onClose={() => {setLogin(false)
      setErr('')
      detail.chklog1()}}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: "2vw",
            backgroundColor: "whitesmoke",
            // width: "20rem",
            border: "1.5px solid black",
            borderRadius: "15px",
          }}
        >
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            onSubmit={(event) => {event.preventDefault()
              if(user==='ganesh123' && pass==='1234'){
              setflag(true)
              setLogin(false)
              setErr('')
              detail.chklogin()
              }
              else setErr('username and password not matched')
            }}
          >
            <h2 style={{ margin: "0" }}>Login</h2>
            {err && <span style={{color:'red'}}>!{err}</span>}
            <input
              required
              placeholder="username"
              style={{ fontSize: "1.2rem", padding: "1%" }}
              onChange={(event)=>{setuser(event.target.value)
              setErr('')}}
            />
            <input
              required
              placeholder="password"
              type={"password"}
              style={{ fontSize: "1.2rem", padding: "1%" }}
              onChange={(event)=>{setpass(event.target.value)
              setErr('')}}
            />
            <button
              type="submit"
              style={{
                fontSize: "1.2rem",
                padding: "2%",
                border: "none",
                color: "whitesmoke",
                backgroundColor: "brown",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </Modal>
      <Modal open={signup} onClose={() => setSignup(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: "2vw",
            backgroundColor: "whitesmoke",
            // width: "20rem",
            border: "1.5px solid black",
            borderRadius: "15px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            onSubmit={(event) => event.preventDefault()}
          >
            <h2 style={{ margin: "0" }}>Login</h2>
            <input
              readOnly
              placeholder="ganesh123"
              style={{ fontSize: "1.2rem", padding: "1%" }}
            />
            <input
              readOnly
              placeholder="1234"
              type={"password"}
              style={{ fontSize: "1.2rem", padding: "1%" }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Nav;
