import "./index.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useState } from "react";
import { TextField } from "@mui/material";

const UserAdminRegistration = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    email: "",
    dateofbirth: "",
    address: "",
    password: "",
    aadhaarnumber: "",
    aadhaarproof: "",
    city: "",
    state: "",
    pincode: "",
  });
  console.log("datalog", data);

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      style={{ color: "	#000000" }}
      to={{ pathname: "/dashboard" }}
    >
      Admin
    </Link>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
      to="/"
    >
      Admin
    </Typography>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
    >
      User Register
    </Typography>,
  ];

  return (
    <div className="RegistrationContainer">
      <div>
        <Breadcrumbs
          className="adminUserBreadcrumbs"
          separator={<ArrowForwardIosRoundedIcon sx={{ fontSize: 12 }} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="RegistrationContainerHeading">
          <h5>New User Registration</h5>
        </div>
        <div className="UserRegistrationContent">
          <div className="adminUserRegistration">
            <div className="adminUserinputContent">
              <lable>
                First Name<span>*</span>
              </lable>
              
               <TextField
                name="firstname"
                value={data.firstname}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, firstname: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="adminUserinputContent">
              <lable>
                Last Name<span>*</span>
              </lable>
             
              <TextField
                name="lastname"
                value={data.lastname}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, lastname: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="adminUserinputContent">
              <lable>
                Date of Birth<span>*</span>
              </lable>
            
              <TextField
                name="dateofbirth"
                value={data.dateofbirth}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, dateofbirth: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="adminUserinputContent">
              <lable>
                Mobile number<span>*</span>
              </lable>
              <TextField
                name="mobilenumber"
                value={data.mobilenumber}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, mobilenumber: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
              
            </div>
            <div className="adminUserinputContent">
              <lable>
                Email<span>*</span>
              </lable>
              
                <TextField
                name="email"
                value={data.email}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, email: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="adminUserinputContent">
              <lable>
                Password<span>*</span>
              </lable>
              
                <TextField
                name="password"
                value={data.password}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, password: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="adminUserinputContent">
              <lable>
                Aadhaar No<span>*</span>
              </lable>
             
              <TextField
                name="aadhaarnumber"
                value={data.aadhaarnumber}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, aadhaarnumber: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="adminUserinputContent">
              <lable>
                Aadhaar Proof<span>*</span>
              </lable>
             
              <TextField
                name="aadhaarproof"
                value={data.aadhaarproof}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, aadhaarproof: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="adminUserinputContent">
              <lable>
                Address<span>*</span>
              </lable>
              
              <TextField
                name="address"
                value={data.address}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, address: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="adminUserinputContent">
              <lable>
                City<span>*</span>
              </lable>
             
               <TextField
                name="city"
                value={data.city}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, city: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="adminUserinputContent">
              <lable>
                State<span>*</span>
              </lable>
             
              <TextField
                name="state"
                value={data.state}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, state: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="adminUserinputContent">
              <lable>
                Pin Code<span>*</span>
              </lable>
             
               <TextField
                name="pincode"
                value={data.pincode}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, pincode: e.target.value })
                }sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
          </div>
          <div className="UserAdminRegisterButton">
            <button>Create User</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserAdminRegistration;
