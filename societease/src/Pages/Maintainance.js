import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

function Members() {
  const [data, setData] = useState([]);

  const getData = async () => {

    let mem=sessionStorage.getItem("commitee_member") === "true" ?{society_id: sessionStorage.getItem("society_id")}:{society_id: sessionStorage.getItem("society_id"),member_id: sessionStorage.getItem("member_id")}

    await fetch("http://localhost:5000/maintainance/getData",{
      method: "POST",
      body: JSON.stringify(mem),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setData(result);
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData()
  }, []);

  const columns = [
    { field: "id", headerName: "id", width: 170 },
    { field: "Member_id", headerName: "Member id", width: 170 },
    { field: "member.name", headerName: "Member name", width: 170,valueGetter: (params) => params.row.member.name
  },
    { field: "member.Flat_Number", headerName: "Flat number", width: 170 ,        valueGetter: (params) => params.row.member.Flat_Number,
  },
    { field: "Amount", headerName: "Amount", width: 170 },
    { field: "Interest_Amount", headerName: "Interest_Amount", width: 170 },
    { field: "Maintainance_date", headerName: "Maintainance date", width: 170 },
    { field: "payment_status", headerName: "Payment status", width: 170 },
  ];

  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    let rowsSelected = rowSelectionModel.map((num) => {
      return data.find((item) => item?.id == num);
    });
    setSelectedRows(rowsSelected);
  }, [rowSelectionModel]);

  const navigate = useNavigate();

  const handleAddMember = () => {
    navigate("/Addmaintainance");
  };
  
  
  const handlePaidMember = () => {
    handleApiCall();

  }

  const payloadArray = selectedRows?.map(({ id }) => ({
    id,
  }));

  const payloadObject = {
    scheduleMaintanance: payloadArray,
  };
 


  const handleApiCall = (commitee_member) => {

    payloadObject.scheduleMaintanance.forEach((maintainance) => {
      maintainance.payment_status = 'completed';
    });
    

    fetch("http://localhost:5000/maintainance/", {
      method: "PUT",
      body: JSON.stringify(payloadObject),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        alert("Payment status updated successfully");
        getData()
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main">
      <br/>
      <h1 style={{ fontSize: "34px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
        Hi {sessionStorage.getItem("name")}! View your Maintaianance
      </h1>
      <br/>
      
      {sessionStorage.getItem("commitee_member") === "true" && (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleAddMember}
          >
            Add Maintaianance
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handlePaidMember}
          >
            Paid Member
          </button>
        
        </>
      )}

      <DataGrid
        rows={data}
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        disableRowSelectionOnClick
        autoHeight
      />
    </div>
  );
}

export default Members;
