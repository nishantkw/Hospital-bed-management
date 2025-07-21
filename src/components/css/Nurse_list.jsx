import React, { useEffect } from "react";
import { Table, Spin } from "antd";
import Sidebar from "../../GlobalFiles/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetDoctorDetails, GetNurses } from "../../../../../Redux/Datas/action";

const Nurse_List = () => {
  const columns = [
    { title: "S.no", dataIndex: "length", key: "length+1" },
    { title: "UserType", dataIndex: "userType", key: "userType" },
    { title: "nurseID", dataIndex: "nurseID", key: "nurseID" },
    { title: "nurseName", dataIndex: "nurseName", key: "nurseName" },
    { title: "mobile", dataIndex: "mobile", key: "mobile" },
    { title: "password", dataIndex: "password", key: "password" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "DOB", dataIndex: "DOB", key: "DOB" },
    { title: "gender", dataIndex: "gender", key: "gender" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    { title: "Address", dataIndex: "address", key: "address" }, 
    { title: "Education", dataIndex: "education", key: "education" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "details", dataIndex: "details", key: "details" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetNurses())
      .catch(error => console.error("Error fetching doctor details:", error));
  }, [dispatch]);

  const { nurses, loading, error } = useSelector((store) => store.data);

  useEffect(() => {
    console.log("Doctors:", nurses);
  }, [nurses]);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (loading) {
//     return <Spin size="large" />;
//   }

//   if (!doctors || doctors.length === 0) {
//     return <div>No doctors found</div>;
//   }

  return (
    <>
  <div className="container">
      <Sidebar />
    
      <div className="AfterSideBar">
        <div className="Payment_Page">
          <h1 style={{ marginBottom: "2rem" }}>Nurses List</h1>
          <div className="patientBox">
            <Table columns={columns} dataSource={nurses} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Nurse_List;