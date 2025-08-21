import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Donation() {
  const [data2, setData2] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5000/donations/getData",{
      method: "POST",
      body: JSON.stringify({society_id: sessionStorage.getItem("society_id")}),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setData2(result);
      })
      .catch((error) => console.log(error));
  }, []);
  const columns2 = useMemo(
    () => [
      {
        accessorKey: "Member_id",
        header: "Member_id ",
      },
      {
        accessorKey: "member.name",
        header: "Name ",
      },
      {
        accessorKey: "Purpose",
        header: "Purpose",
      },
     
      {
        accessorKey: "Amount",
        header: "Amount ",
      }
    ],
    []
  );

  const handleIssue = () => {
    navigate("/AddDonation")
  }

  return (
    <div className="main">
        <br/>
      <h1 style={{ fontSize: "34px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
        Hi {sessionStorage.getItem("name")}! View the donations
      </h1>
      <br/>
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"  onClick={handleIssue}>Add Donation</button>
      <MaterialReactTable
      columns = {columns2}
      data= {data2}
      />
    </div>
  );
}

export default Donation;
