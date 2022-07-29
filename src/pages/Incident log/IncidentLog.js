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
import Popup from "./IncidentModel";
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

export default function IncidentLog() {
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

  const Validate = (e) => {

    var letters = /^[A-Za-z]{5,15}$/;
    var address = /^[A-Za-z0-9]{5,25}$/;
    var text = /^[A-Za-z]{5,20}$/;
    var date = /^\d{2}([-//])\d{2}\1\d{4}$/;
    var num = /^[0-9\b]+$/;
    var number = /^[0-9\b]{0,10}$/;
    var numbers = /^[0-9\b]{10}$/;
    const emailRegex = /^[a-z]+\S+@\S+\.\S+/;
    const cond = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])[0-9a-z]{8,10}$/;

    if (!data.reporterName  === true) {
      alert("Enter The Reporter Name");
    }else  if (!data.designation  === true) {
      alert("Enter The Reporter Name");
    }
  }



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
      Incident Log
    </Typography>,
  ];

  const steps = ["Victim Profile", "Actions processing", "Actions Takens"];

  return (
    <div className="IncidentLogBreadcrumbsContent">
      <Breadcrumbs
        className="IncidentLogBreadcrumbs"
        separator={<ArrowForwardIosRoundedIcon sx={{ fontSize: 12 }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="IncidentLogBreadcrumbsContentContainer">
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <Box className="IncidentLogInputContainer">
        <Tabs
          className="IncidentLogInputHeading"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Victims" {...a11yProps(0)} />
          <Tab label="Complaints" {...a11yProps(1)} />
          <Tab label="Actions" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <div className="IncidentLogInput">
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Reporter's Name:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="reporterName"
                value={data.reporterName}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, reporterName: e.target.value })
                }
              />
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Designation
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="designation"
                type="textarea"
                value={data.designation}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, designation: e.target.value })
                }
              />
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Date of reporting:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="dateofreporting"
                value={data.dateofreporting}
                type="date"
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, dateofreporting: e.target.value })
                }
              />
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Name of the Victim :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="nameofVictim"
                value={data.nameofVictim}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, nameofVictim: e.target.value })
                }
              />
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Guardian's Name :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="gardianName"
                value={data.gardianName}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, gardianName: e.target.value })
                }
              />
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Victim Age :<span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="victimAge"
                value={data.victimAge}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, victimAge: e.target.value })
                }
              />
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Victim's DoB (if available):
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="Firfillornot"
                  value={data.Firfillornot}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, Firfillornot: e.target.value })
                  }
                >
                  <MenuItem onClick={togglePopup}> Yes</MenuItem>
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <lable className="IncidentLogInputContentlabel">
                            Date
                            <span className="IncidentLogInputPointer">*</span>
                          </lable>
                          <TextField
                            type="date"
                            id="outlined-basic"
                            variant="outlined"
                          />
                           <lable className="IncidentLogInputContentlabel">
                Proof of DoB :<span className="IncidentLogInputPointer">*</span>
              </lable>
              <input
                name="proofofDOB"
                type="file"
                value={data.proofofDOB}
                onChange={(e) =>
                  setData({ ...data, proofofDOB: e.target.value })
                }
              />
              <div  className="IncidentLogInputButtonOne">
              <button>Submit</button></div>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                  <MenuItem value=" no"> No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Proof of DoB :<span className="IncidentLogInputPointer">*</span>
              </lable>
              <input
                name="proofofDOB"
                type="file"
                value={data.proofofDOB}
                onChange={(e) =>
                  setData({ ...data, proofofDOB: e.target.value })
                }
              />
            </div> */}

            {/* <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Nature Of Incident :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="natureofIncident"
                  value={data.natureofIncident}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, natureofIncident: e.target.value })
                  }
                >
                  <MenuItem value="ChildTrafficking">
                    Child Trafficking
                  </MenuItem>
                  <MenuItem value="ForcedMarriage"> Forced Marriage</MenuItem>
                  <MenuItem value="ChildMissing">Child Missing</MenuItem>
                  <MenuItem value="KidnapAabduction">
                    Kidnap/ abduction
                  </MenuItem>
                  <MenuItem value="Rape">Rape</MenuItem>
                  <MenuItem value="Sexualabuse">Sexual abuse</MenuItem>
                  <MenuItem value="SexualHarassment">
                    Sexual harassment
                  </MenuItem>
                  <MenuItem value="SexualAssault">Sexual assault</MenuItem>
                  <MenuItem value="OnlineSexualHarassment">
                    Online sexual harassment
                  </MenuItem>
                  <MenuItem onClick={togglePopup}>Others </MenuItem>
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <lable className="IncidentLogInputContentlabel">
                            Nature Of Incident :
                            <span className="IncidentLogInputPointer">*</span>
                          </lable>
                          <TextField
                            name="natuerOfIncident"
                            value={popupdata.natuerOfIncident}
                            id="outlined-basic"
                            variant="outlined"
                            onChange={(e) =>
                              setPopupdata({
                                ...popupdata,
                                natuerOfIncident: e.target.value,
                              })
                            }
                          />
                          <div className="IncidentLogInputButtonOne">
                            <button
                              onClick={() => {
                                setIsOpen(!isOpen);
                                setData({ ...data, natureofIncident: "sad" });
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </Select>
              </FormControl>
            </div> */}
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Nature Of Incident :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Stack className="IncidentLogInputContentSelect">
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={popuparray.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        name="natureofIncident"
                        value={data.natureofIncident}
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        onChange={(e) =>
                          setData({ ...data, natureofIncident: e.target.value })
                        }
                      />
                    )}
                  />
                </Stack>
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                State:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="state"
                  value={data.state}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) => setData({ ...data, state: e.target.value })}
                >
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="WestBengal"> West Bengal</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                District:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="distric"
                  value={data.distric}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, distric: e.target.value })
                  }
                >
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="WestBengal"> West Bengal</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Block:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="block"
                  value={data.block}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) => setData({ ...data, block: e.target.value })}
                >
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="WestBengal"> West Bengal</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Gram Panchayat:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="gramPanchayat"
                  value={data.gramPanchayat}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, gramPanchayat: e.target.value })
                  }
                >
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="WestBengal"> West Bengal</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Village Name:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="villageName"
                  value={data.villageName}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, villageName: e.target.value })
                  }
                >
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="WestBengal"> West Bengal</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Police Station:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="policeStation"
                  value={data.policeStation}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, policeStation: e.target.value })
                  }
                >
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="WestBengal"> West Bengal</MenuItem>
                </Select>
              </FormControl>
            </div>

          </div>

          <div className="IncidentLogInputButtonOne">
            <button  onClick={()=>handleChange("i",1) }>Next</button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="IncidentLogInput">
             <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Date Of Incident :
                <span enamw className="IncidentLogInputPointer">
                  *
                </span>
              </lable>
              <TextField
                name="dateogIncident"
                value={data.dateogIncident}
                type="date"
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, dateogIncident: e.target.value })
                }
              />
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Description Of The Incident:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="discriptionofIncident"
                value={data.discriptionofIncident}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, discriptionofIncident: e.target.value })
                }
              />
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Name of Alleged Offender:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="nameofOffender"
                value={data.nameofOffender}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, nameofOffender: e.target.value })
                }
              />
            </div>
            <div className="IncidentLogInputContent">
              <label className="IncidentLogInputContentlabel">
                Offenders Relationship To Victim:
                <span className="IncidentLogInputPointer">*</span>
              </label>
              <TextField
                name="offenderdreletoiontoVoctim"
                value={data.offenderdreletoiontoVoctim}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({
                    ...data,
                    offenderdreletoiontoVoctim: e.target.value,
                  })
                }
              />
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Offenders Approximate Age:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="offenderage"
                value={data.offenderage}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, offenderage: e.target.value })
                }
              />
            </div>

            {/* <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Who Informed About Incident :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="whoinformedtheincident"
                  value={data.whoinformedtheincident}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, whoinformedtheincident: e.target.value })
                  }
                >
                  <MenuItem value="VictimSelf">Victim Self</MenuItem>
                  <MenuItem value=" VictimsFamilyMember">
                    {" "}
                    Victim's Family Member
                  </MenuItem>
                  <MenuItem value="VictimsRelative">
                    Victim's Relative{" "}
                  </MenuItem>
                  <MenuItem value="MenCareGroupMember">
                    Men Care Group Member
                  </MenuItem>
                  <MenuItem value="CFLRCFacilitator">
                    CFLRC Facilitator
                  </MenuItem>
                  <MenuItem value="GirlPowerGroupMembers">
                    Girl Power Group Members
                  </MenuItem>
                  <MenuItem value="GPGVolunteers">
                    GPG/MCG/VLCPC Volunteers
                  </MenuItem>
                  <MenuItem value="WVStaff">WV Staff</MenuItem>
                  <MenuItem value="AntiTraffickingWarriorMember">
                    Anti-Trafficking Warrior Member
                  </MenuItem>
                  <MenuItem onClick={togglePopup}>Others </MenuItem>
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <lable className="IncidentLogInputContentlabel">
                            Who Informed About Incident :
                            <span className="IncidentLogInputPointer">*</span>
                          </lable>
                          <TextField id="outlined-basic" variant="outlined" />
                          <div className="IncidentLogInputButtonOne">
                            <button onClick={() => {
                                setIsOpen(!isOpen);
                                setData({ ...data,whoinformedtheincident: e.target.value });
                              }}
                            >Submit</button>
                          </div>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </Select>
              </FormControl>
            </div> */}
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Who Informed About Incident:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Stack className="IncidentLogInputContentSelect">
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={arrays.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        name="whoinformedtheincident"
                        value={data.whoinformedtheincident}
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        onChange={(e) =>
                          setData({
                            ...data,
                            whoinformedtheincident: e.target.value,
                          })
                        }
                      />
                    )}
                  />
                </Stack>
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Complaint lodged in PS :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="complaintLogPS"
                  value={data.complaintLogPS}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, complaintLogPS: e.target.value })
                  }
                >
                  <MenuItem value=" yes"> Yes</MenuItem>
                  <MenuItem value=" no">NO</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                GD ENTRY :<span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="GDEntry"
                value={data.GDEntry}
                type="date"
                id="outlined-basic"
                variant="outlined"
                onChange={(e) => setData({ ...data, GDEntry: e.target.value })}
              />
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                FIR is Filed or Not:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="Firfillornot"
                  value={data.Firfillornot}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, Firfillornot: e.target.value })
                  }
                >
                  <MenuItem onClick={togglePopup}> Yes</MenuItem>
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <lable className="IncidentLogInputContentlabel">
                            FIR NO:
                            <span className="IncidentLogInputPointer">*</span>
                          </lable>
                          <TextField id="outlined-basic" variant="outlined" />
                          <lable className="IncidentLogInputContentlabel">
                            Date:
                            <span className="IncidentLogInputPointer">*</span>
                          </lable>
                          <TextField id="outlined-basic" variant="outlined" />
                          <div className="IncidentLogInputButtonOne">
                            <button>Submit</button>
                          </div>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                  <MenuItem value=" no"> No</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="IncidentLogInputButtonOne">
            <button onClick={()=>handleChange("i",0)}>Back</button>

            <button onClick={()=>handleChange("i",2)}>Next</button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="IncidentLogInput">
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Whether The Incident Reported:
                <span className="IncidentLogInputPointer">*</span>
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
                />
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Police Helpline 100:
                <span className="IncidentLogInputPointer">*</span>
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
                />
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Child Line- 1098:
                <span className="IncidentLogInputPointer">*</span>
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
                />
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Child Welfare Committee:
                <span className="IncidentLogInputPointer">*</span>
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
                />
              </FormControl>
            </div>
            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                District Child Protection Unit:
                <span className="IncidentLogInputPointer">*</span>
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
                />
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
              incident reported Others
                <span className="IncidentLogInputPointer"></span>
              </lable>
              <TextField
                name="incidentreportedornot"
                value={data.incidentreporothers}
                id="outlined-basic"
                variant="outlined"
               
              />
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                FIR/GD Action Taken :
                <span className="IncidentLogInputPointer">*</span>
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
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, firGDActionTacken: e.target.value })
                  }
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

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Victim Recovered or Not :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="victimRecoverdorNot"
                  value={data.victimRecoverdorNot}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, victimRecoverdorNot: e.target.value })
                  }
                >
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value=" no"> No</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Has The Accused Arrested:
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <FormControl fullWidth>
                <Select
                  name="accusedArrested"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="IncidentLogInputContentSelect"
                  onChange={(e) =>
                    setData({ ...data, accusedArrested: e.target.value })
                  }
                >
                  <MenuItem value=" yes"> Yes</MenuItem>
                  <MenuItem value=" no"> No</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="IncidentLogInputContent">
              <lable className="IncidentLogInputContentlabel">
                Number of Arrested :
                <span className="IncidentLogInputPointer">*</span>
              </lable>
              <TextField
                name="numberofArrested"
                value={data.numberofArrested}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setData({ ...data, numberofArrested: e.target.value })
                }
              />
            </div>
          </div>
          <div className="IncidentLogInputButtonOne">
            <button onClick={()=>handleChange("i",1)}>Back</button>

            <button>Submit</button>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
