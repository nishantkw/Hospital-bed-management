// import React, { useEffect } from "react";
// import { Table, Spin } from "antd";
// import Sidebar from "../../GlobalFiles/Sidebar";
// import { useDispatch, useSelector } from "react-redux";
// import { GetDoctorDetails } from "../../../../../Redux/Datas/action";

// const List_Doctor = () => {
//   const columns = [
//     { title: "UserType", dataIndex: "userType", key: "userType" },
//     { title: "docID", dataIndex: "docID", key: "docID" },
//     { title: "docName", dataIndex: "docName", key: "docName" },
//     { title: "mobile", dataIndex: "mobile", key: "mobile" },
//     { title: "password", dataIndex: "password", key: "password" },
//     { title: "Age", dataIndex: "age", key: "age" },
//     { title: "Disease", dataIndex: "disease", key: "disease" },
//     { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
//     { title: "Department", dataIndex: "department", key: "department" },
//     { title: "Address", dataIndex: "address", key: "address" },
//     { title: "Education", dataIndex: "education", key: "education" },
//     { title: "Email", dataIndex: "email", key: "email" },
//   ];

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(GetDoctorDetails())
//       .catch(error => console.error("Error fetching doctor details:", error));
//   }, [dispatch]);

//   const { doctors, loading, error } = useSelector((store) => store.data);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (loading) {
//     return <Spin size="large" />;
//   }

//   if (!doctors) {
//     return null; // or render a message indicating no data
//   }

//   console.log("Doctor data:", doctors);

//   return (
//     <>
//       <Sidebar />
//       <div className="AfterSideBar">
//         <div className="Payment_Page">
//           <h1 style={{ marginBottom: "2rem" }}>Doctor List</h1>
//           <div className="patientBox">
//             <Table columns={columns} dataSource={doctors} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default List_Doctor;


import React, { useEffect } from "react";
import { Table, Spin } from "antd";
import Sidebar from "../../GlobalFiles/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetDoctorDetails } from "../../../../../Redux/Datas/action";

const List_Docter = () => {
  const columns = [
    { title: "S.no", dataIndex: "length", key: "length+1" },
    { title: "UserType", dataIndex: "userType", key: "userType" },
    { title: "docID", dataIndex: "docID", key: "docID" },
    { title: "docName", dataIndex: "docName", key: "docName" },
    { title: "mobile", dataIndex: "mobile", key: "mobile" },
    { title: "password", dataIndex: "password", key: "password" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Education", dataIndex: "education", key: "education" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDoctorDetails())
      .catch(error => console.error("Error fetching doctor details:", error));
  }, [dispatch]);

  const { doctors, loading, error } = useSelector((store) => store.data);

  useEffect(() => {
    console.log("Doctors:", doctors);
  }, [doctors]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <Spin size="large" />;
  }

  if (!doctors || doctors.length === 0) {
    return <div>No doctors found</div>;
  }

  return (
    <>
  <div className="container">
      <Sidebar />
    
      <div className="AfterSideBar">
        <div className="Payment_Page">
          <h1 style={{ marginBottom: "2rem" }}>Doctor List</h1>
          <div className="patientBox">
            <Table columns={columns} dataSource={doctors} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default List_Docter;

