import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../index.css";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";

export default function PurchaseTicket(props) {
  document.title = "TicketBlaster | Event Details";

  const productId = "price_1MC3E3DM4nrUdWXdpVAePbuO";
  const params = useParams();
//"https://app.ticketmaster.com/discovery/v2/events/" + id + ".json?apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";
 
        const id = params.id.toString();
    displayData(id);
 

  return (
    <div className="event-container">
      <h2 className="title"></h2>
      <div className="venue"></div>      
      <div className="price"></div>
      <img src="" className="event-img"></img>
      <img src="" className="seatmap"></img>
    <ProductCard product={productId} />
    </div>
  );
}

function displayData(id) {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events/" +
      id +
      ".json?apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq",
    {}
  )
    .then((data) => data.json())
    .then((json) => {
      console.log(JSON.stringify(json));
      document.querySelector(".title").innerHTML = json.name;
      document.querySelector(".venue").innerHTML = json.name;
      document.querySelector(".seatmap").src = json.seatmap.staticUrl;
      document.querySelector(".event-img").src = json.images[0].url;
      document.querySelector(".price").innerHTML =
        "Ticket price: Min: " +
        json.priceRanges[0].min +
        "------ Max: " +
        json.priceRanges[0].max;
    });
}