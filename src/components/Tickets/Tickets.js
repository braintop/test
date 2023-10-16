import Ticket from "../Ticket/Ticket";
import styles from "./Tickets.module.css";

import React, { useState } from "react";

export default function Tickets({ tickets }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTickets, setFilterTickets] = useState(tickets);
    function handleSearch(event) {
        const value = event.target.value;
        console.log(searchTerm);
        //[t1, t2 , t3 , t4 , t5 .....]
        const filters = tickets.filter((ticket) => {
            return ticket.fname.toLowerCase().includes(value.toLowerCase());
        });
        setFilterTickets(filters);
    }
    return (
        <div>
            <h1>Tickets</h1>
            <div>
                <input
                    type="text"
                    placeholder="search"
                    onChange={handleSearch}
                />
            </div>

            <div>
                {filterTickets.map((item, index) => (
                    <Ticket key={index} ticket={item} />
                ))}
            </div>
        </div>
    );
}
