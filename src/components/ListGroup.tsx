/* Fragment */

// import {Fragment} from "react";

const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

function ListGroup() {
    return <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map(item =>
                // a unique key prop
                <li key={item} className="list-group-item"> {item}</li>
            )}
        </ul>
    </>;

}

export default ListGroup;
