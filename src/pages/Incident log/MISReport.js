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
import { FormControl, MenuItem, Select, TextField, } from "@mui/material";
import { renderToStaticMarkup } from "react-dom/server";
import AllReport from "../Report/AllReport";
import jsPDF from "jspdf";

const AllReportView = () => {
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

  const generatorPdf = () => {
    let html = renderToStaticMarkup(<AllReport rows= {orderData}/>);
    let doc = new jsPDF("p", "pt", "a2");
    doc.html(html, {
        callback: function (pdf) {
            pdf.save("case.pdf");
        },
    });
    
};

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
      Incident
    </Link>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
      to="/"
    >
      Report
    </Typography>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
    >
      All Report List
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
          <div className="incidentLogIconsContent">
            {/* <Button className="incidentLogViewIconview">
              <Link to={{ pathname: "/allreport", state: value }}>
                <FaEye className="incidentLogIcons" />
              </Link>
            </Button> */}

            {/* <Button className="incidentLogDownloadeIcon">
              <Link to={{ pathname: "/report", state: value }}>
                <FaArrowDown className="incidentLogIcons" />
              </Link>{" "}
            </Button> */}

            
              <FaTrashAlt  onClick={() => handleDelete(i)} className="incidentLogIcons" />
           
          </div>
        ),
      })),
  };

  return (
    <div className="incidentViewContainer">
      <Breadcrumbs
      className="IncidentLogBreadcrumbs"
        separator={<ArrowForwardIosRoundedIcon sx={{ fontSize: 12 }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>

      <div className="AllreportedListHeader">
        <div className="AllreportedList">
          <div className="AllreportedListContent">
            <label>Victim Name:</label>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="IncidentLogInputContentSelect"
              >
                <MenuItem value=" Yes"> name</MenuItem>
                <MenuItem value=" no"> victim</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="AllreportedListContent">
            <label>Reporter Name</label>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="IncidentLogInputContentSelect"
              >
                <MenuItem value=" Yes"> name</MenuItem>
                <MenuItem value=" no"> victim</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="AllreportedListContent">
            <label>Start Date:</label>
            <TextField
               className="AllreportedListContentFeild"
                type="date"
                id="outlined-basic"
                variant="outlined"
              />
          </div>
          <div className="AllreportedListContent">
            <label>End Date:</label>
            <TextField
               className="AllreportedListContentFeild"
                type="date"
                id="outlined-basic"
                variant="outlined"
              />
          </div>
        </div>
        <button>Submit</button>
      </div>

      {/* <div className="incidentViewTable"> */}
        <div className="AllreportTableContent">
        <button className="AllreportTableContentbutton"  onClick={()=>generatorPdf()}>Download Case</button>
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
export default AllReportView;
