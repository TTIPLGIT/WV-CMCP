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
import { FormControl, MenuItem,  Select, TextField, } from "@mui/material";
import { renderToStaticMarkup } from "react-dom/server";
import AllReport from "../Report/AllReport";
import jsPDF from "jspdf";
import { Pagination,  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



const AllReportView = () => {
  const [orderData, setorderData] = useState([
    {
      no: "1",
      victimname: "mathi",
      reportername: "chanduru",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "2",
      victimname: "mathi",
      reportername: "chanduru",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "3",
      victimname: "mathi",
      reportername: "chanduru",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "4",
      victimname: "mathi",
      reportername: "chanduru",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "5",
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
        text: "Sl.No",
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
            
              <Link to={{ pathname: "/allreport", state: value }}>
                <FaEye className="incidentLogIcons" />
              </Link>
           

            {/* <Button className="incidentLogDownloadeIcon">
              <Link to={{ pathname: "/report", state: value }}>
                <FaArrowDown className="incidentLogIcons" />
              </Link>{" "}
            </Button> */}

            
              {/* <FaTrashAlt  onClick={() => handleDelete(i)} className="incidentLogIcons" /> */}
           
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
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
      }}
      >
        {breadcrumbs}
      </Breadcrumbs>

      <div className="AllreportedListHeader">
        <div className="AllreportedList">
          <div className="AllreportedListContent">
            <label>Quarter:</label>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="IncidentLogInputContentSelect"
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              >
                <MenuItem value=" Yes"> 2022 -2021 </MenuItem>
                <MenuItem value=" no"> 2021 -2020</MenuItem>
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
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
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
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
          </div>
          <div className="AllreportedListContent">
            <label>End Date:</label>
            <TextField
               className="AllreportedListContentFeild"
                type="date"
                id="outlined-basic"
                variant="outlined"
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
          </div>
        </div>
        <button>Submit</button>
      </div>

      {/* <div className="incidentViewTable"> */}
      
        <div className="AllreportTableContent">
         <div className="AllreportTableContentMISReport">
          <div>
        <button className="AllreportTableContentbutton"  onClick={()=>generatorPdf()}>Download MIS</button></div>
        <div>
            <label>Search: </label>
            <SearchIcon className="SearchIconMisList"/>
            <input 
            className="AllreportTableContentMISReportInput"
              name="designation"
              type="textarea"
              id="outlined-basic"
              variant="outlined"
            />
          </div>
        </div>
          <BootstrapTable
            keyField="id"
            data={tableData.rows}
            columns={tableData.columns}
          />
          <div className="MISReportPagenation">
            <div><p>Showing  5 to 5 of 5 entries</p></div>
            <div> <Pagination count={10} color="primary" /></div>
          </div>
        </div>
      </div>
     
  );
};
export default AllReportView;
