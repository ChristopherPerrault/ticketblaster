import React from "react";
import RecordList from "../components/admin/RecordList";
import { Box } from "@mui/material";
export default function AdminCrudUsers() {
  document.title = "TicketBlaster | Admin";

  return (
    <>
      <Box
        style={{
          backgroundColor: "rgb(180, 179, 179)",
          width: "80vw",
          marginLeft: "10%",
          height: "33vh",
          borderRadius: "5%",
        }}
      >
        <div className="table-container">
          <RecordList />
        </div>
      </Box>
    </>
  );
}
