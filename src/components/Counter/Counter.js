import styles from "./Counter.module.css";
import { useState } from "react";
export function Counter() {
    const [c, setC] = useState(0);
    function inc() {
        setC(c + 1); // async function
    }
    console.log("Count render again");
    return (
        <div className={styles.container}>
            <h1>Counter</h1>
            <button onClick={inc} className={styles.btn}>
                +
            </button>
            <p className={styles.p}>{c}</p>
        </div>
    );
}
