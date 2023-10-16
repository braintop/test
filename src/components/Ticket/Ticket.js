import styles from "./Ticket.module.css";

export default function Ticket({ ticket }) {
    return (
        <div className={styles.container}>
            <h1>Ticket id : {ticket.id}</h1>
            <p>Firstname : {ticket.fname}</p>
            <p>Lastname : {ticket.lname}</p>
        </div>
    );
}
