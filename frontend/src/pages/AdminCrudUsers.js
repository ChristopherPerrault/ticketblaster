import React from "react";
import RecordList from "../components/admin/RecordList";

export default function AdminCrudUsers() {
  document.title = "TicketBlaster | Admin";
  
  return (
    <>
      <div className="table-container">
        <RecordList />
      </div>
    </>
  );
}
