import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecordList.css"
const Record = (props) => (
  <tr>
    <td>{props.record.email}</td>
    <td>{props.record.firstName}</td>
    <td>{props.record.lastName}</td>
    <td>{props.record.address}</td>
    <td>{props.record.phoneNumber}</td>
    <td>{props.record.creditCard}</td>
    <td>{props.record.securityCode}</td>
    <td>{props.record.expDate}</td>
    <td>
      <Link  to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        
        onClick={() => {
          props.deleteRecord(props.record.id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3001/users/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
   
    return records.map((record) => {
      return (
        <Record 
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h2 className="table-heading">List of Users</h2>
      <table
        className="table table-striped table-container"
        style={{ marginTop: 20 }}
      >
     
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Credit Card</th>
            <th>Security Code</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
