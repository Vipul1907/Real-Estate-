import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./CardInform.css";
import { RiBuilding2Fill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { FaCalendar } from "react-icons/fa";
import { BiSolidParking } from "react-icons/bi";
import InfromImg from "../../assests/card_one.png";
// import HomeSectionCarousel from "../card/HomeSectionCarousel";
import WishlistCard from "../card/WishlistCard";
import HomeSectionCarousel from "../card/HomeSectionCarousel";


function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

export default function Inform({ propertyData }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


   if (!propertyData) {
     return <div>Loading...</div>;
  }

  console.log("Property Data:", propertyData);

  const {
    selectBhk,
    propertyTitle,
    locality,
    description,
    propertyPrice,
    propertyPriceType,
    perks,
    uploadPropertyImages,
  } = propertyData;

  return (
    <>
      <div className="inform_main">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Amenities" {...a11yProps(1)} />
              <Tab label="Images" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div className="inform_text">
            <div className="inform_text_one">
              <CustomTabPanel value={value} index={0}>
                <div className="infrom_text_one_one">
                  <div className="infrom_text_one_two_one">
                    <div className="infrom_text_one_two ">
                      <div className="infrom_two_one gap-10">
                        <div className="inform_bhk ">
                          <h4 className=" flex items-center gap-4">
                            <RiBuilding2Fill /> {selectBhk}
                          </h4>
                        </div>
                        <h1 className="pt-4">{propertyTitle}</h1>
                        <div className="inform_bhk_one pt-4">
                          <h4 className="flex items-center gap-4">
                            <ImLocation2 />
                            {locality}
                          </h4>
                        </div>
                        <p className="inform_para pt-4">{description}</p>
                        <div className="this_is_btn">
                          <h1 className="flex items-center gap-8">
                            ₹{propertyPrice}{" "}
                            {propertyPriceType === "Fix Price" && (
                              <button>negotiable</button>
                            )}
                          </h1>
                        </div>

                        <div className="main_infomr_btn">
                          <button>Contact Owner</button>
                        </div>
                      </div>
                    </div>
                    <div className="infrom_two_two flex items-start justify-end">
                      <div className="infrom_two_two_one flex items-end justify-end">
                        <h4 className="flex items-center gap-4">
                          <FaCalendar />
                          Posted in Nov, 2022
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomTabPanel>
              {/* Amenities */}
              <CustomTabPanel value={value} index={1}>
                <div className="infrom_text_one_one ">
                  <div className="infrom_text_one_one_second">
                    {perks &&
                      perks.map((perk, index) => (
                        <div className="infrom_mul_btn" key={index}>
                          <button className="flex items-center gap-2">
                            <span className="infrom_span">
                              <BiSolidParking className="infrom_icon" />
                            </span>{" "}
                            {perk}
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                <div className="infrom_text_one_one ">
                  <div className="infrom_first_img">
                    {uploadPropertyImages &&
                      uploadPropertyImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Image ${index + 1}`}
                        />
                      ))}
                  </div>
                </div>
              </CustomTabPanel>
            </div>
          </div>
        </Box>
      </div>
      <div className="inform_card mt-10">
        <HomeSectionCarousel />
      </div>
    </>
  );
}
