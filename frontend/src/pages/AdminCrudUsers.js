import React from "react";
import RecordList from "../components/admin/RecordList";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
export default function AdminCrudUsers() {
  document.title = "TicketBlaster | Admin";
  
  return (
    <>
      <Box
        style={{
          backgroundColor: "#DDEEDD",
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