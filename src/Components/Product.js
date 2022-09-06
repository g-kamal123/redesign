import { Drawer, Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import classes from "../Styles/Product.module.css";
// import { data } from "./Data";
// import style from "../Styles/NavHead.module.css";
import { NavLink } from "react-router-dom";
import { Storage } from "./Storage";

function Product() {
  const [draw, setDraw] = useState(false);
  const [modalItem, setModalItem] = useState("");
  const [modal, setModal] = useState(false);
  const [offermodal, setoffermodal] = useState(false);
  const detail = useContext(Storage);
  useEffect(() => {
    if (window.innerWidth <= 480) setModal(false);
  }, [modalItem]);
  return (
    <>
      <div className={classes.product}>
        <div className={classes.filters}>
          <div className={classes.div1}>
            <h4>Lucknow veg express</h4>
            <span>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#ddd", fontSize: "1.4rem" }}
              ></i>
              <br />
              <span>Average 3.5/5</span>
            </span>
            <span style={{ display: "flex", gap: "0.4rem" }}>
              <button
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#C9141A",
                  color: "whitesmoke",
                  width: "fit-content",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                view reviews
              </button>
              <button
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#6A8A0A",
                  color: "whitesmoke",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Contact info
              </button>
            </span>
          </div>
          <ul>
            <li>
              <NavLink
                to="/fruits"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.fruits}
              >
                Fresh Fruits
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/vegetables"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.veg}
              >
                Fresh Vegetables
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dryFruits"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.dry}
              >
                Dry Fruits
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nonVeg"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.nonVeg}
              >
                Fresh Non Veg
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dairy"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.dairy}
              >
                Dairy Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.productarea}>
          {detail.flag && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid gray",
                padding: "0 2%",
              }}
            >
              <p>
                Order Timing:{" "}
                <span style={{ color: "#6A8A0A", fontWeight: "600" }}>
                  8:00 am
                </span>{" "}
                To{" "}
                <span style={{ color: "#6A8A0A", fontWeight: "600" }}>
                  6:00 pm
                </span>
                <span
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "#C9141A",
                    color: "white",
                    padding: "0.2vw 0.8vw",
                  }}
                >
                  Store close
                </span>
              </p>
              <span style={{ display: "flex", gap: "1vw" }}>
                <button
                  style={{
                    border: "#5BC0DE",
                    backgroundColor: "#5BC0DE",
                    borderRadius: "4px",
                    color: "whitesmoke",
                    padding: "0.5vw 0.8vw",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                  }}
                  onClick={() => setoffermodal(true)}
                >
                  My offers
                </button>
                <button
                  style={{
                    border: "#5BC0DE",
                    backgroundColor: "#5BC0DE",
                    borderRadius: "4px",
                    color: "whitesmoke",
                    padding: "0.5vw 0.8vw",
                    cursor: "pointer",
                  }}
                >
                  Page Like 12
                </button>
              </span>
            </div>
          )}

          {detail.flag && (
            <div style={{ height: "27vw", width: "100%", padding: "1.5%" }}>
              <img
                src="http://www.way2door.com/images/stores/banner_1574312382banner-lucknow-veg-express-min.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          )}
          <div
            style={{ display: "flex", justifyContent: "center", gap: "0.7rem" }}
          >
            <input
              placeholder="search here"
              style={{ fontSize: "1rem", padding: "1%", maxWidth: "40vw" }}
              onChange={(event) => detail.searchItem(event.target.value)}
            />
            <select onChange={(event) => detail.order(event.target.value)}>
              <option value="0">Low to High</option>
              <option value="1">High to Low</option>
            </select>
          </div>
          <hr />
          <div className={classes.allproducts}>
            {detail.print.length === 0 && <h1>No product to show</h1>}
            {detail.print.map((item) => (
              <div className={classes.oneprod}>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setModalItem(item);
                    setModal(true);
                  }}
                >
                  <span
                    style={{
                      color: "green",
                      fontWeight: "800",
                      position: "absolute",
                    }}
                  >
                    {Math.ceil(
                      Number(((item.price - item.sellPrice) * 100) / item.price)
                    )}
                    % Save
                  </span>
                  <div
                    className={classes.oneprodimage}
                    style={{
                      height: "12rem",
                      width: "14.2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.pimage}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <span style={{ fontWeight: "700", color: "gray" }}>
                    {item.pname}
                  </span>
                  <p
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{ border: "1px solid brown", padding: "1.5%" }}
                    >
                      {item.pUnit}
                    </span>
                    <span
                      style={{ color: "red", textDecoration: "line-through" }}
                    >
                      {item.price} Rs
                    </span>
                    <span style={{ color: "green" }}>{item.sellPrice} Rs</span>
                  </p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        border: "2px solid red",
                        fontSize: "1.2rem",
                        borderRadius: "50%",
                        fontWeight: "900",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => detail.decrementHandler(item)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      style={{
                        border: "2px solid red",
                        fontSize: "1.2rem",
                        borderRadius: "50%",
                        fontWeight: "900",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => detail.incrementHandler(item)}
                    >
                      +
                    </button>
                  </span>
                  {item.quantity > 0 ? (
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => detail.deletecartItem(item)}
                    >
                      Remove
                    </span>
                  ) : (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#C9141A",
                        color: "whitesmoke",
                        fontSize: "1.2rem",
                        borderRadius: "7px",
                        padding: "2%",
                        cursor: "pointer",
                      }}
                      onClick={() => detail.incrementHandler(item)}
                    >
                      Add Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={classes.allprod}>
            {detail.print.length === 0 && <h1>No product to show</h1>}
            {detail.print.map((item) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "",
                  gap: "0.4rem",
                  flex: "1 0 0",
                }}
              >
                <div
                  style={{
                    height: "47vw",
                    width: "40vw",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.pimage}
                    alt=""
                    style={{ height: "90%", width: "95%" }}
                  />
                  <span
                    style={{
                      color: "green",
                      fontWeight: "800",
                      position: "absolute",
                      left: "0",
                      top: "0",
                    }}
                  >
                    {Math.ceil(
                      Number(((item.price - item.sellPrice) * 100) / item.price)
                    )}
                    % Save
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontWeight: "700", color: "gray" }}>
                    {item.pname}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                      maxWidth: "max-content",
                    }}
                  >
                    <span style={{ border: "1px solid brown" }}>
                      {item.pUnit}
                    </span>
                    <span
                      style={{ color: "red", textDecoration: "line-through" }}
                    >
                      &#8377;{item.price}
                    </span>
                    <span style={{ color: "green" }}>
                      &#8377;{item.sellPrice}
                    </span>
                  </div>

                  {item.quantity > 0 ? (
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => detail.deletecartItem(item)}
                    >
                      Remove
                    </span>
                  ) : (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#C9141A",
                        color: "whitesmoke",
                        fontSize: "1.2rem",
                        borderRadius: "7px",
                        padding: "4%",
                        cursor: "pointer",
                        maxWidth: "fit-content",
                      }}
                      onClick={() => detail.incrementHandler(item)}
                    >
                      Add Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.filterbar} onClick={() => setDraw(true)}>
        <i class="fa-solid fa-bars"></i>
      </div>

      <Drawer anchor={"left"} open={draw} onClose={() => setDraw(false)}>
        <div className={classes.filters}>
          <div className={classes.div1}>
            <h4>Lucknow veg express</h4>
            <span>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#f38a2e", fontSize: "1.4rem" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "#ddd", fontSize: "1.4rem" }}
              ></i>
              <br />
              <span>Average 3.5/5</span>
            </span>
            <span style={{ display: "flex", gap: "0.4rem" }}>
              <button
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#C9141A",
                  color: "whitesmoke",
                  width: "fit-content",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                view reviews
              </button>
              <button
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#6A8A0A",
                  color: "whitesmoke",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Contact info
              </button>
            </span>
          </div>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.fruits}
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fruits"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.fruits}
              >
                Fresh Fruits
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/vegetables"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.veg}
              >
                Fresh Vegetables
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dryFruits"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.dry}
              >
                Dry Fruits
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nonVeg"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.nonVeg}
              >
                Fresh Non Veg
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dairy"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
                onClick={detail.dairy}
              >
                Dairy Products
              </NavLink>
            </li>
          </ul>
        </div>
      </Drawer>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            backgroundColor: "whitesmoke",
            alignItems: "center",
            // maxWidth:'fit-content'
            // width:'15rem'
          }}
          className={classes.thismodal}
        >
          <div
            style={{ height: "12rem", width: "12rem", position: "relative" }}
            className={classes.oneprodimagemodal}
          >
            <img
              src={modalItem.pimage}
              alt=""
              style={{ height: "90%", width: "95%" }}
            />
            <span
              style={{
                color: "green",
                fontWeight: "800",
                position: "absolute",
                left: "0",
                top: "0",
              }}
            >
              {Math.ceil(
                Number(
                  ((modalItem.price - modalItem.sellPrice) * 100) /
                    modalItem.price
                )
              )}
              % Save
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <span style={{ fontWeight: "700", color: "gray" }}>
              {modalItem.pname}
            </span>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                maxWidth: "max-content",
              }}
            >
              <span style={{ border: "1px solid brown", padding: "1.5%" }}>
                {modalItem.pUnit}
              </span>
              <span style={{ color: "red", textDecoration: "line-through" }}>
                &#8377;{modalItem.price}
              </span>
              <span style={{ color: "green" }}>
                &#8377;{modalItem.sellPrice}
              </span>
            </div>
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  border: "2px solid red",
                  fontSize: "1.2rem",
                  borderRadius: "50%",
                  fontWeight: "900",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => detail.decrementHandler(modalItem)}
              >
                -
              </button>
              <span>{modalItem.quantity}</span>
              <button
                style={{
                  border: "2px solid red",
                  fontSize: "1.2rem",
                  borderRadius: "50%",
                  fontWeight: "900",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => detail.incrementHandler(modalItem)}
              >
                +
              </button>
            </span>
            {modalItem.quantity > 0 ? (
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => detail.deletecartItem(modalItem)}
              >
                Remove
              </span>
            ) : (
              <button
                style={{
                  border: "none",
                  backgroundColor: "#C9141A",
                  color: "whitesmoke",
                  fontSize: "1.2rem",
                  borderRadius: "7px",
                  padding: "2%",
                  cursor: "pointer",
                }}
                onClick={() => detail.incrementHandler(modalItem)}
              >
                Add Cart
              </button>
            )}
          </div>
        </div>
      </Modal>
      <Modal open={offermodal} onClose={() => setoffermodal(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1rem",
            backgroundColor: "whitesmoke",
            borderRadius: "10px",
            border: "1.5px solid black",
          }}
        >
          <div style={{ height: "35vw", width: "50vw" }}>
            <img
              src="http://www.way2door.com/images/offers/1639074303.jpg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
            {/* <button>Login</button> */}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Product;
