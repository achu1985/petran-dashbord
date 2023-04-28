import React from "react";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a style={{fontFamily:'fantasy',letterSpacing:'1px'}} class="navbar-brand" href="#">
            P<span className="text-danger">E</span>TRAN
          </a>&nbsp;&nbsp;
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button className="btn btn-light me-2">Dashbord</button>
              </li>
              <li class="nav-item">
                <button className="btn btn-light me-2">Employee</button>
              </li>
              <li class="nav-item">
                <button className="btn btn-primary me-2">Assets</button>
              </li>
              <li class="nav-item">
                <button className="btn btn-light me-2">Manage</button>
              </li>
              <li class="nav-item">
                <button className="btn btn-light me-2">Settings</button>
              </li>
            </ul>

            <div className="d-flex">
             <i class="fa fa-map-marker me-5" aria-hidden="true"></i>&nbsp;&nbsp;
             <i class="fa fa-search me-5" aria-hidden="true"></i>
             <i class="fa fa-bell me-5" aria-hidden="true"></i>
             <i class="fa fa-user me-1" aria-hidden="true"></i><h6 className="text-warning">Denish</h6>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
