import jsPDF from "jspdf";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import download from "./../../images/logos.png";
import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

const AllReport = (props) => {
  // const generatorPdf = () => {
  //   let doc = new jsPDF("p", "pt", "a4");
  //   doc.html(document.querySelector("#content"), {
  //     callback: function (pdf) {
  //       pdf.save("report.pdf");
  //     },
  //   });
  // };

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
    {
      no: "6",
      victimname: "mathi",
      reportername: "chanduru",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "7",
      victimname: "mathi",
      reportername: "chanduru",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "8",
      victimname: "mathi",
      reportername: "chanduru",
      state: "West Bengal",
      distric: "Bengal",
    },
    {
      no: "9",
      victimname: "mathi",
      reportername: "chanduru",
      state: "Assam",
      distric: "Assam",
    },
    {
      no: "10",
      victimname: "mathi",
      reportername: "chanduru",
      state: "West Bengal",
      distric: "Bengal",
    },
  ]);

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
    <div className="App">
      <div id="content">
        <div  style={{ height: "842px", width: "595px" }}>
          <div className="InvoiceHeading">
            <div>
              <img src={download} alt="" className="InvoiceLogoImage" />
            </div>
            <div className="InvoiceHeadingTitle">
              <h6>CASE MANAGEMENT FOR CHILD PROTECTION</h6>
            </div>
            <div className="InvoiceHeadingDate">
              <h6>Date :06 /05 /0001</h6>
            </div>
          </div>
          <div className="AllInvoiceDate">
            <div>
              {" "}
              <label>Start Date:</label>
              <input type="date" />
            </div>

            <div>
              <label>End Date:</label>
              <input type="date" />
            </div>
          </div>
          <div className="incidentViewContainer">
            <div className="allInvoiceViewTable">
             
                <BootstrapTable
                  keyField="id"
                  data={tableData.rows}
                  columns={tableData.columns}
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllReport;
