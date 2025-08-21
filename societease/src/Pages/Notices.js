import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Members() {
  const [data, setData] = useState([]);
const tableRef = useRef()
  const navigate = useNavigate()


  useEffect(() => {
    fetch("http://localhost:5000/notices/getData",{
      method: "POST",
      body: JSON.stringify({society_id: sessionStorage.getItem("society_id")}),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = useMemo(
    () => [
  
      {
        accessorKey: "content",
        header: "Content Description",
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "created_at",
        header: "Created Date",
      },
      {
        accessorKey: "updated_at",
        header: "Updated Date",
      },
      {
        accessorKey: "priority",
        header: "Priority",
      },
      
    ],
    []
  );

  const handleAddMember = () => {
    navigate("/AddNotices")
  }
console.log(tableRef?.current?.dataManager?.data?.filter(o => o.tableData.checked))
  return (
    <div className="main">
       <br/>
      <h1 style={{ fontSize: "34px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
        Hi {sessionStorage.getItem("name")}! View Your Recent Updates
      </h1>
      <br/>
      {sessionStorage.getItem("commitee_member") ==="true" ? (
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={handleAddMember}>
          Add Notices
        </button>
      ) : null}
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection={true}
        tableRef={tableRef}
      />
    </div>
  );
}

export default Members;
