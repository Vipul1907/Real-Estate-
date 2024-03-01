import React, { useState, useEffect } from "react";
import axios from "axios";

const PreviewData = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/propertyget?latest=true"
        );
        const lastSubmittedData = response.data[response.data.length - 1];
        setPropertyData([lastSubmittedData]);
        console.log("Last submitted property data:", lastSubmittedData);
        console.log("Fetched property data:", response.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="total mt-6 p-5">
      <div className="total_steps">
        <h1 className="mt-3 text-center text-3xl font-semibold ">
          Preview The Page
        </h1>
        {propertyData.map((property) => (
          <div key={property._id} className="property-details">
            <p>Property Name: {property.propertyTitle}</p>
            <p>Property Type: {property.propertyType}</p>
            <p>City Name: {property.cityName}</p>
            <p>Description: {property.description}</p>
            <p>Locality: {property.locality}</p>
            <p>Number of Floors: {property.numberOfFloors}</p>
            <p>Property Price: {property.propertyPrice}</p>
            <p>Property Price Type: {property.propertyPriceType}</p>
            <p>Select Bhk: {property.selectBhk}</p>
            <p>Perks: {property.perks.join(", ")}</p>
            <div>
              <p>Property Images:</p>
              {property.uploadPropertyImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  style={{ width: "200px", height: "auto" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewData;
