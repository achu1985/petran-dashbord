import React, { useState } from "react";
import "./Sidebar.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="AppSidebar">
      <Modal
        className="lg-8"
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
      >
        <Modal.Title size="sm">
          <h6 className="sub-title">Add Devices & Parameters</h6>
          <hr />
        </Modal.Title>

        <Modal.Body>
          <form className="mt-2">
            <div class="row">
              <div class="col">
                <label className="require p-2">Device type</label>
                <select className="form-select" id="input1">
                  <option selected>Antminer Toolkit</option>
                  <option value="1">One</option>
                </select>
              </div>
              <div class="col">
                <label className="require p-2">Attach Device</label>
                <select className="form-select" id="input1">
                  <option selected value="2">
                    Antminer Toolkit(#AJ2930KP)
                  </option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <label className="require p-2">Device Name</label>
                <select className="form-select" id="input1">
                  <option selected value="2">
                    Antminer Toolkit(#AJ2930KP)
                  </option>
                </select>
              </div>
              <div class="col">
                <label className="require p-2">Device Id</label>
                <select className="form-select" id="input1">
                  <option selected value="2">
                    #AJ2930KP
                  </option>
                </select>
              </div>
            </div>

            <div className="row mt-1 ms-1">
              <p>Fan Speed</p>
              <div className="col">
                <input type="checkbox" value="" />
                <label> Channel 1(#PL32D)</label>
                <br></br>
              </div>
              <div className="col">
                <input type="checkbox" value="" />
                <label> Channel 2(#PL21K)</label>
                <br></br>
              </div>
            </div>
            <div className="row mt-2">
              <div className="box col mt-2 ms-1">
                <h6>
                  Selected parameters &nbsp;
                  <i class="fa-solid fa-circle-info"></i>
                </h6>
                <p>Channel 1 (#HJ91K)</p>
                <p>Channel 3 (#ND44K)</p>
              </div>

              <div className="col mt-1">
                <h6>
                  Hash Rate &nbsp;<i class="fa-solid fa-circle-info"></i>
                </h6>
                <p>Channel 1 (#HJ91K)</p>
                <p>Channel 3 (#ND44K)</p>
              </div>
            </div>
            <div>
              <h5>Wattage</h5>
              <div className="card">
                <div className="card-header">
                  Channel 1 (#hj91k)
                  <p>
                    unit:wh &nbsp; &nbsp; Decimal:kilo &nbsp;&nbsp; Min:0.5
                    &nbsp;&nbsp; Max:1.09{" "}
                  </p>
                  <input
                    className="form-input me-1"
                    type="checkbox"
                    value={""}
                    id="firstCheckBox"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-light me-2" onClick={handleClose}>
            Back
          </button>
          <button className="btn btn-primary">Attach to Asset</button>
        </Modal.Footer>
      </Modal>

      <p className="text-center text-dark">NEW ASSET DETAILS</p>
      <ul>
        <li>
          <a href="#" class="active">
            <span class="icon">
              <i class="fa-solid fa-book"></i>
            </span>
            <span class="item" style={{ fontSizeAdjust: "inherit" }}>
              Basic Details
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="active">
            <span class="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </span>
            <span class="item">Location & Tracking</span>
          </a>
        </li>
        <li>
          <a href="#" class="active" onClick={handleShow}>
            <span class="icon">
              <i class="fa-sharp fa-regular fa-laptop"></i>
            </span>
            <span class="item">Device & Parameters</span>
          </a>
        </li>

        <li>
          <a href="#" class="active">
            <span class="icon">
              <i class="fa-regular fa-user"></i>
            </span>
            <span class="item">Ownerships</span>
          </a>
        </li>
        <li>
          <a href="#" class="active">
            <span class="icon">
              <i class="fa-solid fa-money-check-dollar"></i>
            </span>
            <span class="item">Finance Details</span>
          </a>
        </li>
        <li>
          <a href="#" class="active">
            <span class="icon">
              <i class="fa-solid fa-file"></i>
            </span>
            <span class="item">Images & Files</span>
          </a>
        </li>
        <li>
          <a href="#" class="active">
            <span class="icon">
              <i class="fa-solid fa-circle-info"></i>
            </span>
            <span class="item">More Details</span>
          </a>
        </li>
        <li>
          <a href="#" class="active">
            <span class="icon">
              <i class="fa-solid fa-share-nodes"></i>
            </span>
            <span class="item">Related Assets</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
