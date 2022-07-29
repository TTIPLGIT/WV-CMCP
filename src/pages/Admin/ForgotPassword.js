import "./index.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ForgotPassword = () => {

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
      Password Reset
    </Typography>,
  ];


  return (
    <div className="ForgortpasswordContainer">
       <Breadcrumbs
      className="adminUserBreadcrumbs"
        separator={<ArrowForwardIosRoundedIcon sx={{ fontSize: 12 }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="userpasswordreset">
        <h5>ForgotPassword</h5>
      </div>
      <div className="ForgotPasswordMain">
      <div className="ForgotPasswordContent">
        <div className="forgotPasswordinputContent">
          <lable>Email</lable>
          <input type="Email" placeholder="Email" />
        </div>
        <div className="forgotPasswordinputContent">
          <lable>Password</lable>
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgotPasswordinputContent">
          <lable>Cofirm Password</lable>
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div className="ForgotPasswordButton">
        <button >Change password</button>
      </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
