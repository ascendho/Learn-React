/* Fragment */

// import {Fragment} from "react";

// import {MouseEvent} from "react";


import {useCallback, useState} from "react";

interface Props {
    items: string[];
    heading: string;

    /* Passing Functions via Props */
    onSelectItem: (item: string) => void
}

/* Passing Data via Props */
function ListGroup({items, heading, onSelectItem}: Props) {

    /* Event handler */
    // const handleClick = (event: MouseEvent) => {
    //     console.log(event);
    // }

    // Hook, Managing State
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return <>
        <h1>{heading}</h1>
        {/*Conditional Rendering */}

        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
            {items.map((item, index) =>
                // a unique key prop
                <li
                    key={item}
                    className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    // Handling events
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }
                    }>
                    {item}
                </li>
            )}
        </ul>
    </>;

}

export default ListGroup;
