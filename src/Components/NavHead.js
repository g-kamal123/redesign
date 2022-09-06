import { Drawer, Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../Styles/NavHead.module.css";
import { Storage } from "./Storage";
// import style from '../Styles/Product.module.css'

function NavHead() {
  const [draw, setDraw] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState("");
  const [checkout, setcheckout] = useState(false);
  const [logc, setlogc] = useState(false);
  const detail = useContext(Storage);
  const nav = useNavigate();

  const sum = detail.cartarr.reduce(
    (sum, item) => item.quantity * item.sellPrice + sum,
    0
  );
  return (
    <>
      <div className={classes.navhead}>
        <div style={{ height: "8rem", width: "12rem" }}>
          <img
            src="http://www.way2door.com/images/way2door-min.png"
            alt=""
            style={{ height: "90%", width: "90%" }}
          />
        </div>
        <p>
          Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा.
        </p>
        <div className={classes.icon} onClick={() => setDraw(true)}>
          <i class="fa-brands fa-opencart">
            <span>{detail.cartarr.length}</span>
          </i>
        </div>
      </div>
      <div className={classes.cartbar} onClick={() => setDraw(true)}>
        <div className={classes.icon}>
          <i class="fa-brands fa-opencart">
            <span>{detail.cartarr.length}</span>
          </i>
        </div>
      </div>
      <Drawer anchor={"right"} open={draw} onClose={() => setDraw(false)}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {detail.cartarr.length > 0 && (
            <div
              style={{
                position: "sticky",
                top: "0",
                backgroundColor: "beige",
                width: "100%",
                textAlign: "center",
                padding: "2% 5%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.26)",
              }}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.4rem",
                  margin: "0",
                }}
              >
                <span>Subtotal</span>
                <span>&#8377;{sum}</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.4rem",
                  margin: "0",
                }}
              >
                <span>Delivery</span>
                <span>Free</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.4rem",
                  margin: "0",
                }}
              >
                <span>Total</span>
                <span>&#8377;{sum}</span>
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "0.7rem",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    fontSize: "1.2rem",
                    padding: "1.5%",
                    cursor: "pointer",
                    backgroundColor: "#556D0B",
                    color: "whitesmoke",
                    border: "none",
                  }}
                  onClick={() => {
                    if (detail.log) {
                      setcheckout(true);
                      detail.emptycart();
                    } else setlogc(true);
                  }}
                >
                  Checkout
                </button>
                <button
                  className={classes.close}
                  style={{
                    fontSize: "1.2rem",
                    padding: "1.5%",
                    cursor: "pointer",
                    backgroundColor: "red",
                    color: "whitesmoke",
                    border: "none",
                    borderRadius: "15px",
                  }}
                  onClick={() => setDraw(false)}
                >
                  close
                </button>
              </p>
            </div>
          )}

          <div className={classes.cartdrawer}>
            {detail.cartarr.length === 0 && <><h1>Your Cart is Empty</h1>
            <button
                  className={classes.close}
                  style={{
                    fontSize: "1.2rem",
                    padding: "1.5%",
                    cursor: "pointer",
                    backgroundColor: "red",
                    color: "whitesmoke",
                    border: "none",
                    borderRadius: "15px",
                  }}
                  onClick={() => setDraw(false)}
                >
                  close
                </button></>}
            {detail.cartarr.map((item) => (
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  padding: "0.5rem",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.26)",
                  borderRadius: "10px",
                }}
              >
                <div style={{ height: "12vw", width: "12vw" }}>
                  <img
                    src={item.pimage}
                    alt=""
                    style={{ height: "90%", weight: "95%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  <span>{item.pname}</span>
                  <span>{item.price}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.7rem",
                    }}
                  >
                    <button
                      onClick={() => {
                        if (item.quantity > 1) detail.decrementHandler(item);
                        else {
                          setModalItem(item);
                          setModal(true);
                        }
                      }}
                      style={{
                        border: "2px solid red",
                        fontSize: "1.2rem",
                        borderRadius: "50%",
                        fontWeight: "900",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => detail.incrementHandler(item)}
                      style={{
                        border: "2px solid red",
                        fontSize: "1.2rem",
                        borderRadius: "50%",
                        fontWeight: "900",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{
                      color: "red",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      width: "fit-content",
                    }}
                    onClick={() => {
                      setModalItem(item);
                      setModal(true);
                    }}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "whitesmoke",
            padding: "1rem",
            border: "1.5px solid black",
            borderRadius: "10px",
          }}
        >
          <h2>Do you really want to delete?</h2>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              onClick={() => setModal(false)}
              style={{
                fontSize: "1.2rem",
                padding: "2%",
                border: "none",
                backgroundColor: "green",
                color: "whitesmoke",
                borderRadius: "7px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                detail.deletecartItem(modalItem);
                setModal(false);
              }}
              style={{
                fontSize: "1.2rem",
                padding: "2%",
                border: "none",
                backgroundColor: "red",
                color: "whitesmoke",
                borderRadius: "7px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
      <Modal open={checkout} onClose={() => setcheckout(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "whitesmoke",
            padding: "1rem",
            border: "1.5px solid black",
            borderRadius: "10px",
          }}
        >
          <h1>Order placed successfully</h1>
          <button
            onClick={() => {
              setcheckout(false);
              setDraw(false);
              nav("/");
            }}
            style={{
              fontSize: "1.2rem",
              padding: "2%",
              border: "none",
              backgroundColor: "green",
              color: "whitesmoke",
              borderRadius: "7px",
            }}
          >
            Go to store
          </button>
        </div>
      </Modal>
      <Modal open={logc} onClose={() => setlogc(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "whitesmoke",
            padding: "1rem",
            border: "1.5px solid black",
            borderRadius: "10px",
          }}
        >
          <button
            style={{
              fontSize: "1.2rem",
              padding: "2%",
              border: "none",
              backgroundColor: "green",
              color: "whitesmoke",
              borderRadius: "7px",
            }}
            onClick={() => {
              setlogc(false);
              setDraw(false);
              detail.chklogin1();
            }}
          >
            Login First
          </button>
        </div>
      </Modal>
    </>
  );
}

export default NavHead;
