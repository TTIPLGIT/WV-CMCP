import "./index.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";


const UserAdminRegistration = () => {

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
          <h5>New Register</h5>
        </div>
    <div className="UserRegistrationContent">
        <div className="adminUserRegistration">
          <div className="adminUserinputContent">
            <lable>
              First Name<span>*</span>
            </lable>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              Last Name<span>*</span>
            </lable>
            <input type="text" placeholder="Last Name" />
          </div>

        <div className="adminUserinputContent">
            <lable>
              Mobile number<span>*</span>
            </lable>
            <input type="number" placeholder="Mobile number" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              Email<span>*</span>
            </lable>
            <input type="email" placeholder="Email" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              Date of Birth<span>*</span>
            </lable>
            <input type="date" placeholder="Date of Birth" />
          </div>
        
         
          <div className="adminUserinputContent">
            <lable>
              Address<span>*</span>
            </lable>
            <input type="textarea" placeholder=" Address" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              Password<span>*</span>
            </lable>
            <input type="password" placeholder="Password" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              Aadhaar No<span>*</span>
            </lable>
            <input type="text" placeholder="Aadhaar No" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              Aadhaar Proof<span>*</span>
            </lable>
            <input type="file" placeholder="Aadhaar Proof" />
          </div>
          
          <div className="adminUserinputContent">
            <lable>
              City<span>*</span>
            </lable>
            <input type="text" placeholder="City" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              State<span>*</span>
            </lable>
            <input type="text" placeholder="State" />
          </div>
          <div className="adminUserinputContent">
            <lable>
              Pin Code<span>*</span>
            </lable>
            <input type="text" placeholder="Pin Code" />
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
