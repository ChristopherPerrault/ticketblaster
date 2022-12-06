import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

export default function PurchaseTicket() {
    const [events, setEvents] = useState([]);
    const params = useParams();

    useEffect(() => {
        const url =
            // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";
            // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=qiJ5AkBhkvr6IFdd9UamBev1hYovx46M"; 
            "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=LVpUpS7gaeXxvoQMKgDF1zSNbXbASUgS";

        const loadData = async () => {
            const id = params.id.toString();
            await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setEvents(
                        data._embedded.events.map((info, index) => {
                            if (info.id === id) {
                                return (
                                    <div>
                                        <h2 className="name">{info.name}</h2>
                                        <p className="date">{info.dates.start.localDate}</p>
                                        <img srcSet={info.seatmap.staticUrl} alt="map" />
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })
                    );
                });
        };
        loadData();
    }, [params.id]);

    return (
        <div>
            <div>
                {events}
            </div>
        </div>

    )
}