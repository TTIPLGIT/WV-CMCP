import "./index.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { TextField } from "@mui/material";

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
            <TextField
              name="email"
              id="outlined-basic"
              variant="outlined"
              sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
              }}
            />
          </div>
          <div className="forgotPasswordinputContent">
            <lable>New Password</lable>
            <TextField
              name="Password"
              id="outlined-basic"
              variant="outlined"
              sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
              }}
            />
          </div>
        </div>
        <div className="ForgotPasswordButton">
          <button>Send password</button>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
