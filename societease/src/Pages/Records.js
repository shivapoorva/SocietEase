import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Records() {
  const [data1, setData1] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5000/records/getData",{
      method: "POST",
      body: JSON.stringify({society_id: sessionStorage.getItem("society_id")}),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result1) => {
        setData1(result1);
      })
      .catch((error) => console.log(error));
  }, []);
console.log(data1)
  const columns1 = useMemo(
    () => [

      {
        accessorKey: "member_id",
        header: "Committee ID",
      },
      {accessorKey: "member.name",
      header: "Name",

      },
      {
        accessorKey: "payment_method",
        header: "Method of Payment",
      },
      {
        accessorKey: "Amount",
        header: "Amount",
      },
      {
        accessorKey: "Description",
        header: "Description",
      }
      
    ],
    []
  );

  const handleAddMember = () => {
    navigate("/AddAccountrecords")
  }

  return (
    <div className="main">
       <br/>
      <h1 style={{ fontSize: "34px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
        Hi {sessionStorage.getItem("name")}! View Expenses
      </h1>
      <br/>
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"  onClick={handleAddMember}>Add Records</button>
      <MaterialReactTable
      columns = {columns1}
      data= {data1}
      />
    </div>
  );
}

export default Records;
