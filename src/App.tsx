import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    /* ListGroup Component */

    // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // }
    //
    // // Every component has its own state
    // return <div>
    //     <ListGroup
    //         items={items}
    //         heading="Cities"
    //         onSelectItem={handleSelectItem}/>
    //     {/*<ListGroup/>*/}
    // </div>


    /* Passing Children */
    // return (
    //     <div>
    //         <Alert>Hello <span>World</span></Alert>
    //     </div>
    // )

    /* Button Component */
    return (
        <div>
            <Button color={undefined} onClick={() => console.log('Clicked!')}>My Button</Button>
        </div>
    )
}

export default App;