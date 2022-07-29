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
import { FormControl, MenuItem, Select, TextField } from "@mui/material";

const Catalog = () => {
  const [orderData, setorderData] = useState([
    {
      no: "01",
      victimname: "mathi",
      reportername: "chanduru",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "02",
      victimname: "mathi",
      reportername: "chanduru",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "03",
      victimname: "mathi",
      reportername: "chanduru",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "04",
      victimname: "mathi",
      reportername: "chanduru",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "05",
      victimname: "mathi",
      reportername: "chanduru",
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

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      style={{ color: "	#000000" }}
      to={{ pathname: "/dashboard" }}
    >
      Audit 
    </Link>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
      to="/"
    >
      Audit Log
    </Typography>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
    >
      Audit View
    </Typography>,
  ];

  let tableData = {
    columns: [
      {
        text: "S.No",
        dataField: "no",
        width: 300,
        editable: false,
      },

      {
        text: "Victim Name",
        dataField: "victimname",
        width: 300,
        editable: false,
      },
      {
        text: "Reporter Name",
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
      })),
  };

  return (
    <div className="CatalogContainer">
      <Breadcrumbs
      className="CatalogLogBreadcrumbs"
        separator={<ArrowForwardIosRoundedIcon sx={{ fontSize: 12 }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>

      <div className="CatalogHeader">
        <div className="CatalogList">
          <div className="CatalogListContent">
            <label>Victim Name:</label>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="CatalogInputContentSelect"
              >
                <MenuItem value=" Yes"> name</MenuItem>
                <MenuItem value=" no"> victim</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="CatalogListContent">
            <label>Reporter Name</label>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="CatalogInputContentSelect"
              >
                <MenuItem value=" Yes"> name</MenuItem>
                <MenuItem value=" no"> victim</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="CatalogListContent">
            <label>Start Date:</label>
            <TextField
               className="CatalogListContentFeild"
                type="date"
                id="outlined-basic"
                variant="outlined"
              />
          </div>
          <div className="CatalogListContent">
            <label>End Date:</label>
            <TextField
               className="CatalogListContentFeild"
                type="date"
                id="outlined-basic"
                variant="outlined"
              />
          </div>
        </div>
        <button>Submit</button>
      </div>

      {/* <div className="incidentViewTable"> */}
      <div className="CatalogTableContent">
        <div className="aaditcatelogbuttonfeild" >
          <button className="catelogbutton">Download case</button>
          <input className="Aaditcatelogsearchinput" type="text" placeholder="Search..."/>
        </div>
        <BootstrapTable
          keyField="id"
          data={tableData.rows}
          columns={tableData.columns}
        />
      </div>
    </div>
    // </div>
  );
};
export default Catalog;
