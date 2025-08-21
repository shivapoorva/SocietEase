import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Incident() {
  const [data2, setData2] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5000/Incident/")
      .then((response) => response.json())
      .then((result) => {
        setData2(result);
      })
      .catch((error) => console.log(error));
  }, []);
console.log(data2,"issue report")
  const columns2 = useMemo(
    () => [
      {
        accessorKey: "Member_id",
        header: "Member ID",
      },
      {
        accessorKey: "member.name",
        header: "Member Name",
      },
      {
        accessorKey: "Description",
        header: "Description of the Issue ",
      },
      {
        accessorKey: "created_date",
        header: "Date ",
      }
    ],
    []
  );

  const handleAddMember = () => {
    navigate("/features")
  }

  return (
    <div className="main">
       <button onClick={handleAddMember}>Add Member</button>
      <MaterialReactTable
      columns = {columns2}
      data= {data2}
      />
    </div>
  );
}

export default Incident;
