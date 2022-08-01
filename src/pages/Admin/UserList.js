import React, { useState } from "react";
import "./index.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { FaArrowDown, FaEye, FaTrashAlt } from "react-icons/fa";
import jsPDF from "jspdf";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import Apps from "../Report/demo";
import Report from "../Report";
import { Pagination, Switch, TextField } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddIcon from '@mui/icons-material/Add';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import SearchIcon from '@mui/icons-material/Search';



const UserList = (props) => {
  const [orderData, setorderData] = useState([
    {
      no: "1",
      victimname: "mathi",
      reportername: "chanduru@gmail.com",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "2",
      victimname: "mathi",
      reportername: "chanduru@gmail.com",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "3",
      victimname: "mathi",
      reportername: "chanduru@gmail.com",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "4",
      victimname: "mathi",
      reportername: "chanduru@gmail.com",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "5",
      victimname: "mathi",
      reportername: "chanduru@gmail.com",
      state: "Assam",
      distric: "Assam",
    },
  ]);

  const handleDelete = (id) => {
    let a = orderData.filter((e, i) => {
      if (i !== id) {
        return e;
      }
    });
    setorderData([...a]);
    console.log("orderData", a);
  };

  
  const generatorPdf = () => {
    let html = renderToStaticMarkup(<Report />);
    let doc = new jsPDF("p", "pt", "a2");
    doc.html(html, {
      callback: function (pdf) {
        pdf.save("case.pdf");
      },
    });
  };

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
      User List
    </Typography>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
    >
        User List
    </Typography>,
  ];

  let tableData = {
    columns: [
      {
        text: "Sl.No",
        dataField: "no",
        width: 300,
        editable: false,
      },

      {
        text: "User Name",
        dataField: "victimname",
        width: 300,
        editable: false,
      },
      {
        text: "Email",
        dataField: "reportername",
        width: 300,
        editable: false,
      },
      {
        text: "State",
        dataField: "state",
        editable: false,
        width: 300,
      },

      {
        text: "District",
        dataField: "distric",
        width: 300,
        editable: false,
      },
      {
        text: "Actions",
        dataField: "actions",
        width: 300,
        editable: false,
      },
    ],
    rows:
      orderData &&
      orderData.map((value, i) => ({
        id: i + 1,
        no: value.no,
        victimname: value.victimname,
        reportername: value.reportername,
        state: value.state,
        distric: value.distric,
        actions: (
          <div className="userListIconsContent">
              <Link to={{ pathname: "/incident/viewlog", state: value }}>
                <FaEye className="userListLogIcons" />
              </Link>

           
              <h6><FileDownloadIcon  onClick={() => generatorPdf()} className="userListLogIcons" /></h6>
          

             <h6> <FaTrashAlt  onClick={() => handleDelete(i)} className="userListLogIcons" /></h6>
          </div>
        ),
      })),
  };

  return (
    <div className="incidentViewContainer">
      <Breadcrumbs
        className="UserListBreadcrusmbs"
        separator={<ArrowForwardIosRoundedIcon sx={{ fontSize: 12 }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="userViewCreate"><AddIcon className="Cureveuserlist"/><p className="CartviewListTable"><Link className="CarveLink" to="/admin/useradminregistration">Create</Link></p></div>

      <div className="userListHeader"><h5>User List</h5></div>

      <div className="userListTable">

        <div className="userListearchView">
          <div>
            Show
            <select className="userListListDropdown" name="number" id="number">
              <option value="five">05</option>
              <option value="four">10</option>
              <option value="three">50</option>
              <option value="All">All</option>
            </select>
            List
          </div>
          <div>
            <label>Search: </label>
            <SearchIcon className="SearchIconuserList"/>
            <input
            className="userListearchViewInput"
              name="designation"
              type="textarea"
              id="outlined-basic"
              variant="outlined"
            />
           
          </div>
        </div>
        <div>
          <BootstrapTable
            keyField="id"
            data={tableData.rows}
            columns={tableData.columns}
          />
          <div className="userListPagenation">
            <div><p>Showing  5 to 5 of 5 List</p></div>
            <div> <Pagination count={10} color="primary" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserList;
