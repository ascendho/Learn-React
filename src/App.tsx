import ListGroup from "./components/ListGroup";

function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    // Every component has its own state
    return <div>
        <ListGroup
            items={items}
            heading="Cities"
            onSelectItem={handleSelectItem}/>
        {/*<ListGroup/>*/}
    </div>
}

export default App;