import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

function Members() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch("http://localhost:5000/member/getData",{
      method: "POST",
      body: JSON.stringify({society_id: sessionStorage.getItem("society_id")}),
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
    {field: "id", headerName: "Member id", width: 170 },
    { field: "name", headerName: "Name", width: 170 },
    { field: "Email", headerName: "Email", width: 170 },
    { field: "DOB", headerName: "Date of Birth", width: 170 },
    { field: "Salutations", headerName: "Salutations", width: 170 },
    { field: "contact_number", headerName: "Contact Number", width: 170 },
    { field: "Owner", headerName: "Owner", width: 170 },
    { field: "Validated_by", headerName: "Validated by", width: 170 },
    { field: "Flat_Number", headerName: "Flat Number", width: 170 },
    { field: "Society_id", headerName: "Society id", width: 170 },
    { field: "committee_member", headerName: "Commitee Member", width: 170 },
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
    navigate("/AddMember");
  };
  const handleAddCommiteeMember = () => {
    handleApiCall(true);
    
  }
  const handleRemoveCommiteeMember = () => {
    handleRemoveApiCall(true);
  }
  const handleRemoveMember = () => {
    handleRemoveApiCall(false);

  }

  const payloadArray = selectedRows?.map(({ id }) => ({
    id,
  }));

  const payloadObject = {
    member_updated: payloadArray,
    validated_by: sessionStorage.getItem("member_id"),
  };
 

  const handleRemoveApiCall = (commitee_member) => {

    let url='http://localhost:5000/member/'
    if (commitee_member) {
      url+='committeeMember'
    }

    fetch(url, {
      method: "DELETE",
      body: JSON.stringify({member_updated:payloadArray}),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        alert("Members Removed successfully");
        getData()
      })
      .catch((error) => console.log(error));
  };

  const handleApiCall = (commitee_member) => {

    payloadObject.member_updated.forEach((member) => {
      member.commitee_member = commitee_member ? true:false;
    });
    

    fetch("http://localhost:5000/member/", {
      method: "PUT",
      body: JSON.stringify(payloadObject),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        alert("Members Updated successfully");
        getData()
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main">
      <br/>
      <h1 style={{ fontSize: "34px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
        Hi {sessionStorage.getItem("name")}! View your Neighbours
      </h1>
      <br/>
      
      {sessionStorage.getItem("commitee_member") === "true" && (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleApiCall}
          >
            Validate Member
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleAddMember}
          >
            Add Member
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleAddCommiteeMember}
          >
            Make CommiteeMember
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleRemoveCommiteeMember}
          >
            Remove CommiteeMember
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleRemoveMember}
          >
            Remove Member
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
