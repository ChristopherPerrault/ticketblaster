import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

export default function PurchaseTicket() {
    const [events, setEvents] = useState([]);
    const params = useParams();

    useEffect(() => {
        const url =
            // Chris:
            // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";

            // Matt #1:
            //"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=qiJ5AkBhkvr6IFdd9UamBev1hYovx46M";

            // Matt #2:
            // https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=hu5LlW3eJkDoVLKyUGnAZmbpZS8k6eCE111

            // Kevin:
            "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=LVpUpS7gaeXxvoQMKgDF1zSNbXbASUgS";

        const loadData = async () => {
            const id = params.id.toString();
            await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setEvents(
                        data._embedded.events.map((event, index) => {
                            if (event.id === id) {
                                return (
                                    <div>
                                        <h2 className="name">{event.name}</h2>
                                        <p className="date">{event.dates.start.localDate}</p>
                                        <img srcSet={event.seatmap.staticUrl} alt="map" />
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