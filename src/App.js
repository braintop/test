import logo from "./logo.svg";
import styles from "./App.module.css";
import Ticket from "./components/Ticket/Ticket";
import { Counter } from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Tickets from "./components/Tickets/Tickets";
// 1. components
// 2. create Ticket component with ticket parameter
// 3. create Ticket.module.css ( classname = {styles.x}  )
// 4. display flex , flex dirction , gap
// 5. create persons = [{},....]
// 5. use array.map((item, index) => { <div><Ticket ticket={}/></div>} )
//
function App() {
    // phase 1 - state + const and vars

    // phase 2 - functions
    const persons = [
        {
            id: 1,
            fname: "oren",
            lname: "davidi",
        },
        {
            id: 2,
            fname: "david",
            lname: "davidi",
        },
        {
            id: 3,
            fname: "yoel",
            lname: "davidi",
        },
        {
            id: 4,
            fname: "uzi",
            lname: "davidi",
        },
        {
            id: 5,
            fname: "oren",
            lname: "davidi",
        },
    ];

    //phase 3 - return jsx
    return (
        <div className={styles.container}>
            <Input />
            <Counter />
            <h1>
                Welcome {persons[0].fname} {persons[0].lname}
            </h1>
            {/* <Ticket ticket={persons[0]} /> */}
            <div>
                <Tickets tickets={persons} />
            </div>
        </div>
    );
}
export default App;
