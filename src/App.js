import logo from "./logo.svg";
import styles from "./App.module.css";
import Ticket from "./components/Ticket/Ticket";
import { Counter } from "./components/Counter/Counter";
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
            fname: "oren",
            lname: "davidi",
        },
        {
            id: 3,
            fname: "oren",
            lname: "davidi",
        },
        {
            id: 4,
            fname: "oren",
            lname: "davidi",
        },
        {
            id: 5,
            fname: "oren",
            lname: "davidi",
        },
    ];

    const personList = persons.map((item, index) => {
        return <Ticket key={index} ticket={item} />;
    });
    console.log("App render again");

    //phase 3 - return jsx
    return (
        <div className={styles.container}>
            <h1>
                <Counter />
                Welcome {persons[0].fname} {persons[0].lname}
                {/* <Ticket ticket={persons[0]} /> */}
                <div>
                    <input type="text" />
                </div>
                <div className={styles.persons}>{personList}</div>
            </h1>
        </div>
    );
}

export default App;
