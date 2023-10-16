import { useState } from "react";

export default function Input() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    function fnameChange(event) {
        console.log(event.target.value);
        setFname(event.target.value);
    }
    function lnameChange(event) {
        setLname(event.target.value);
    }

    return (
        <div>
            <h1>Input</h1>
            <input type="text" onChange={fnameChange} />
            <input type="text" onChange={lnameChange} />

            <p>
                {fname} {lname}
            </p>
            <button>submit</button>
        </div>
    );
}
