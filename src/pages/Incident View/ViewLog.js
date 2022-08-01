import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./index.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Link } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
// import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ViewLog(props) {
  const [value, setValue] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [popupdata, setPopupdata] = useState({ natuerOfIncident: "" });
  console.log("popupdeta", popupdata);

  const popuparray = [
    {
      id: "01",
      title: "Child Trafficking",
    },

    {
      id: "02",
      title: " Forced Marriage",
    },
    {
      id: "03",
      title: "Child Missing",
    },
    {
      id: "04",
      title: "Rape",
    },
    {
      id: "05",
      title: "Sexual abuse",
    },
    {
      id: "06",
      title: "Sexual harassment",
    },
    {
      id: "07",
      title: "Sexual assault",
    },
    {
      id: "08",
      title: "Online sexual harassment",
    },
    {
      id: "09",
      title: "Others",
    },
  ];

  const arrays = [
    {
      id: "01",
      title: "Victims Family Member",
    },

    {
      id: "02",
      title: "Victims Relative",
    },
    {
      id: "03",
      title: "Men Care Group Member",
    },
    {
      id: "04",
      title: "CFLRC Facilitator",
    },
    {
      id: "05",
      title: " Girl Power Group Members ",
    },
    {
      id: "06",
      title: "GPG/MCG/VLCPC Volunteers",
    },
    {
      id: "07",
      title: "WV Staff",
    },
    {
      id: "08",
      title: " Anti-Trafficking Warrior Member",
    },
  ];

  const [data, setData] = useState({
    reporterName: "",
    designation: "",
    dateofreporting: "",
    nameofVictim: "",
    gardianName: "",
    victimAge: "",
    victimDOB: "",
    proofofDOB: "",
    natureofIncident: "",
    state: "",
    distric: "",
    block: "",
    gramPanchayat: "",
    villageName: "",
    policeStation: "",
    dateogIncident: "",
    discriptionofIncident: "",
    nameofOffender: "",
    offenderdreletoiontoVoctim: "",
    offenderage: "",
    whoinformedtheincident: "",
    complaintLogPS: "",
    GDEntry: "",
    Firfillornot: "",
    LocalPOliceStation: "",
    PoliceHelpLine: "",
    childLine: "",
    childwelfarecomitee: "",
    childProductionUnit: "",
    firGDActionTacken: "",
    victimRecoverdorNot: "",
    accusedArrested: "",
    numberofArrested: "",
    incidentreportedornot:"",
    incidentreporothers:""
  });

 
  console.log("data", data);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      style={{ color: "	#000000", fontSize: "14px" }}
      to={{ pathname: "/" }}
    >
      Home
    </Link>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#000000", fontSize: "14px" }}
      color="text.primary"
      to="/"
    >
      Incident Log
    </Typography>,
    <Typography
      key="1"
      style={{ cursor: "pointer", color: "	#000000", fontSize: "14px" }}
      color="text.primary"
    >
      View Log
    </Typography>,
  ];

  // const steps = ["Victim Profile", "Actions processing", "Actions Takens"];

  return (
    <div className="ViewLogBreadcrumbsContent">
      <Breadcrumbs
        className="ViewLogBreadcrumbs"
        separator={<ArrowForwardIosRoundedIcon sx={{ fontSize: 12 }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>


      <Box className="ViewLogInputContainer">
        <Tabs
          className="ViewLogInputHeading"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"

        >
          <Tab label="Victims" {...a11yProps(0)} />
          <Tab label="Complaints" {...a11yProps(1)} />
          <Tab label="Actions" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <div className="ViewLogInput">
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Reporter's Name:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="reporterName"
                value={'Reporters Name'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Designation
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="designation"
                type="textarea"
                value={'Designation'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Date of reporting:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="dateofreporting"
                value={'10 /06 /2022'}
                type="text"
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Name of the Victim :
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="nameofVictim"
                value={'Victim'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Guardian's Name :
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="gardianName"
                value={'Guardians Name'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Victim Age :<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'15'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Victim's DoB (if available):<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'Yes'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Date :<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'12 /7 /2022'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div> <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Proof of DoB:<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'./image'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>

              <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Nature Of Incident :<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'Child Trafficking'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              State :<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'Assam'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              District:<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'Assam'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Block:<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'West Bengal'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Gram Panchayat:<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'Assam'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Village Name:<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'West Bengal'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Police Station:<span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={'Assam'}
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>

          </div>

          <div className="ViewLogInputButtonOne">
            <button  onClick={()=>handleChange("i",1) }>Next</button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="ViewLogInput">
             <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Date Of Incident :
                <span enamw className="ViewLogInputPointer">
                  *
                </span>
              </lable>
              <TextField
                name="dateogIncident"
                value={'23 /01/ 2021'}
                type="date"
                id="outlined-basic"
                variant="outlined"
               disabled
               sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Description Of The Incident:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="discriptionofIncident"
                value={'Discription of Incident'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Name of Alleged Offender:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="nameofOffender"
                value={'Name of Alleged Offender:'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="ViewLogInputContent">
              <label className="ViewLogInputContentlabel">
                Offenders Relationship To Victim:
                <span className="ViewLogInputPointer">*</span>
              </label>
              <TextField
                name="offenderdreletoiontoVoctim"
                value={'Relationship To Victim'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Offenders Approximate Age:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={'19'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Who Informed About Incident:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={'Victims Family Member'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Complaint lodged in PS :
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={'Yes'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              GD ENTRY
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={'25 /07 /2019'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              FIR is Filed or Not:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={'Yes'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              FIR NO:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={' FIR5432341'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              Date:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={'12 /04 /2022'}
                id="outlined-basic"
                variant="outlined"
                disabled
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            
          </div>
          <div className="ViewLogInputButtonOne">
            <button onClick={()=>handleChange("i",0)}>Back</button>

            <button onClick={()=>handleChange("i",2)}>Next</button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="ViewLogInput">
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Whether The Incident Reported:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl sx={{ m: 1, width: 300 }}>
                <FormControlLabel
                  value="end"
                  name="LocalPOliceStation"
                  control={<Checkbox />}
                  label="Local Police Station"
                  labelPlacement="end"
                  onChange={(e) =>
                    setData({ ...data, LocalPOliceStation: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                />
              </FormControl>
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Police Helpline 100:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl sx={{ m: 1, width: 300 }}>
                <FormControlLabel
                  value="end"
                  name="PoliceHelpLine"
                  control={<Checkbox />}
                  label="Police Helpline 100"
                  labelPlacement="end"
                  onChange={(e) =>
                    setData({ ...data, PoliceHelpLine: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                />
              </FormControl>
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Child Line- 1098:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl sx={{ m: 1, width: 300, boxShadow: "none" }}>
                <FormControlLabel
                  value="end"
                  name="childLine"
                  control={<Checkbox />}
                  label="Childs Line - 1098"
                  labelPlacement="end"
                  onChange={(e) =>
                    setData({ ...data, childLine: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                />
              </FormControl>
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Child Welfare Committee:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl sx={{ m: 1, width: 300, boxShadow: "none" }}>
                <FormControlLabel
                  value="end"
                  name="childwelfarecomitee"
                  control={<Checkbox />}
                  label="Child Welfare Committee"
                  labelPlacement="end"
                  onChange={(e) =>
                    setData({ ...data, childwelfarecomitee: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                />
              </FormControl>
            </div>
            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                District Child Protection Unit:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl sx={{ m: 1, width: 300, boxShadow: "none" }}>
                <FormControlLabel
                  value="end"
                  name="childProductionUnit"
                  control={<Checkbox />}
                  label="District Child Protection Unit"
                  labelPlacement="end"
                  onChange={(e) =>
                    setData({ ...data, childProductionUnit: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                />
              </FormControl>
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
              incident reported Others
                <span className="ViewLogInputPointer"></span>
              </lable>
              <TextField
                name="incidentreportedornot"
                value={data.incidentreporothers}
                id="outlined-basic"
                variant="outlined"
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                FIR/GD Action Taken :
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <InputLabel
                  sx={{ fontSize: "12px" }}
                  id="demo-simple-select-label"
                >
                  What Sections Applied in FIR?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  name="firGDActionTacken"
                  id="demo-simple-select"
                  value={data.firGDActionTacken}
                  className="ViewLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, firGDActionTacken: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                >
                  {/* <MenuItem value="WhatSectionsAppliedFIR">
                    What Sections Applied in FIR?{" "}
                  </MenuItem> */}
                  <MenuItem value="StatementisDone">
                    161 Statement is done
                  </MenuItem>
                  <MenuItem value="MedicalExaminatioDone">
                    Medical Examination Done{" "}
                  </MenuItem>
                  <MenuItem value="VictimProducedBeforeCWC">
                    Victim Produced Before CWC
                  </MenuItem>
                  <MenuItem value="VictimAdmittedinCCI">
                    {" "}
                    Victim admitted in CCI
                  </MenuItem>
                  <MenuItem value="MHPSSServicesGivenvictim">
                    MHPSS services given to victim
                  </MenuItem>
                  <MenuItem value="MedicalAidgivenVictim">
                    Medical Aid given to victim
                  </MenuItem>
                  <MenuItem value="VictimCompensationApplicationFiled">
                    Victim Compensation application filed
                  </MenuItem>
                  <MenuItem value="ChargeSheetSubmitted">
                    Charge sheet submitted
                  </MenuItem>
                  <MenuItem value="ExaminationChief">
                    Examination Chief{" "}
                  </MenuItem>
                  <MenuItem value="CrossExamination">
                    Cross Examination{" "}
                  </MenuItem>
                  <MenuItem value="Re-examination">Re-examination </MenuItem>
                  <MenuItem value="AccusedConvictedacquitted">
                    Accused convicted / acquitted{" "}
                  </MenuItem>
                  <MenuItem value="AppealunderProcess">
                    Appeal Under Process{" "}
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Victim Recovered or Not :
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="victimRecoverdorNot"
                  value={data.victimRecoverdorNot}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="ViewLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, victimRecoverdorNot: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                >
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value=" no"> No</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Has The Accused Arrested:
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="accusedArrested"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="ViewLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, accusedArrested: e.target.value })
                  }
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                }}
                >
                  <MenuItem value=" yes"> Yes</MenuItem>
                  <MenuItem value=" no"> No</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="ViewLogInputContent">
              <lable className="ViewLogInputContentlabel">
                Number of Arrested :
                <span className="ViewLogInputPointer">*</span>
              </lable>
              <TextField
                name="numberofArrested"
                value={data.numberofArrested}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, numberofArrested: e.target.value })
                }
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
              }}
              />
            </div>
          </div>
          <div className="ViewLogInputButtonOne">
            <button onClick={()=>handleChange("i",1)}>Back</button>

            <button>Submit</button>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
