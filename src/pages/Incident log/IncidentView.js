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
import { Pagination, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';



const IncidentView = (props) => {
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

  let data = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 89 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 456 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 30 },
    { id: 6, lastName: "Melisandre", firstName: "Daenerys", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
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
      Incident
    </Link>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
      to="/"
    >
      Incident
    </Typography>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#6c757d", fontSize: "14px" }}
      color="text.primary"
    >
      Incident View
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
            {/* <Button className="incidentLogViewIcon"> */}
              <Link to={{ pathname: "/incident/viewlog", state: value }}>
                <FaEye className="incidentLogIcons" />
              </Link>
            {/* </Button> */}

            {/* <Button
              className="incidentLogDownloadeIcon"
             
            >
              {" "} */}
              <h6><FaArrowDown  onClick={() => generatorPdf()} className="incidentLogIcons" /></h6>
            {/* </Button> */}

            {/* <Button
              className="incidentLogDeleteIcon"
             
            > */}
             <h6> <FaTrashAlt  onClick={() => handleDelete(i)} className="incidentLogIcons" /></h6>
            {/* </Button> */}
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
      <div className="incidentviewListHead">
        <h4>Incident List</h4>
      </div>
      <div className="incidentViewCreate"><AddIcon className="CureveIncidentLog"/><p className="CartviewListTable">Create</p></div>
      <div className="incidentViewTable">
        <div className="incidentsearchView">
          <div>
            Show
            <select className="viewIncidentListDropdown" name="number" id="number">
              <option value="five">05</option>
              <option value="four">10</option>
              <option value="three">50</option>
              <option value="All">All</option>
            </select>
            Entry
          </div>
          <div>
            <label>Search: </label>
            <input
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
          <div className="IncidentviewPagenation">
            <div><p>Showing  5 to 5 of 5 entries</p></div>
            <div> <Pagination count={10} color="primary" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IncidentView;
