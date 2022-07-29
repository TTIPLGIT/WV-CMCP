import jsPDF from "jspdf";
import download from "./../../images/logos.png";
import "./index.css";

const Report = (props) => {


  // const { handleGeneratPdf } = props;

  const generatorPdf = () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("report.pdf");
      },
    });
  };

  return (
    <div className="App">
      <div id="content">
        <div style={{ height: "842px", width: "595px" }} className="pdfContent">
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
          <div>
            <div className="InvoiceContent">
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Reporter's Name
                </lable>
                <p>Name</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Designation
                </lable>
                <p>Designation of victim</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Date of reporting
                </lable>
                <p>18 /06 /0042</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Name of the Victim
                </lable>
                <p>Names</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Guardian's Name
                </lable>
                <p>Names</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">Victim Age</lable>
                <p>15</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Victim's DoB (if available)
                </lable>
                <p>Yes</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">Date</lable>
                <p>15 /03 /0003</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Proof of DoB
                </lable>
                <p>file.pdf</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Nature Of Incident
                </lable>
                <p>Child Missing</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">State</lable>
                <p>Assam</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">District</lable>
                <p>Weast Bengal</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">Block</lable>
                <p>Assam</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Gram Panchayat
                </lable>
                <p>Weast Bengal</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Village Name
                </lable>
                <p>Assam</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Police Station
                </lable>
                <p>Weast Bengal Station</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Date Of Incident
                </lable>
                <p>15 /09 /8979</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Description Of The Incident
                </lable>
                <p>incident Description</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Name of Alleged Offender
                </lable>
                <p>Offender</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Offenders Relationship To Victim
                </lable>
                <p>relation</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Offenders Approximate Age
                </lable>
                <p>15</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Who Informed About Incident
                </lable>
                <p>Victims Relative</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">
                  Complaint lodged in PS
                </lable>
                <p>Yes</p>
              </div>
              <div className="InvoiceContentFeild">
                <lable className="InviceLogInputContentlabel">GD ENTRY</lable>
                <p>15 /02 /1001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Report;
