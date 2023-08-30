import React, {useState} from 'react';
import MyButton from "./MyButton";

function App() {
    function Hello() {
        setCount(count + 1);
    }

    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <MyButton count={count} onClick={Hello}/>
            <MyButton count={count} onClick={Hello}/>
        </div>
    );
}

export default App;
