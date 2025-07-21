


import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Sidebar from "../../GlobalFiles/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData, GetAmbulances, GetDoctorDetails, GetPatients } from "../../../../../Redux/Datas/action";

const AmbulanceList=()=>{
    const columns = [
        { title: "UserType", dataIndex: "userType", key: "userType" },
        { title: "charges", dataIndex: "charges", key: "charges" },
        { title: "ambulanceID", dataIndex: "ambulanceID", key: "ambulanceID" },
        { title: "ambulanceDriver", dataIndex: "ambulanceDriver", key: "ambulanceDriver" },
         { title: "number", dataIndex: "number", key: "number" },
      
      ];
    
      const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAmbulances())
      .catch(error => console.error("Error fetching doctor details:", error));
  }, [dispatch]);

  const { ambulance, loading, error } = useSelector((store) => store.data);

  useEffect(() => {
    console.log("Doctors:", ambulance);
  }, [ambulance]);

  
//   const disptach = useDispatch();
 
//   useEffect(() => {
//     disptach(GetDoctorDetails());
//   }, []);
    return<>
   
           <div className="patientDetails">
          <h1>Ambulance Details</h1>
          <h1>HII</h1>
          <div className="patientBox">
            <Table columns={columns} dataSource={ambulance} />
          </div>
        </div>
</>

}
export default AmbulanceList;