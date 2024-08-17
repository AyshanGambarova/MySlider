import Slider from "./components/Slider";

const App = () => {
    const items = [
        {id: 1, title: 'Card 1', content: 'Content for Card 1'},
        {id: 2, title: 'Card 2', content: 'Content for Card 2'},
        {id: 3, title: 'Card 3', content: 'Content for Card 3'},
        {id: 4, title: 'Card 4', content: 'Content for Card 4'},
        {id: 5, title: 'Card 5', content: 'Content for Card 5'},
        {id: 6, title: 'Card 6', content: 'Content for Card 6'},
        {id: 7, title: 'Card 7', content: 'Content for Card 7'},
        {id: 8, title: 'Card 8', content: 'Content for Card 8'},
        {id: 9, title: 'Card 9', content: 'Content for Card 9'},
    ];
    return (
        <div className="App">
            <h1>Slider Example</h1>
            <Slider items={items}/>
        </div>
    );
};

export default App;
