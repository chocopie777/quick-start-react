import React from 'react';

let string = "О привет";

let user = {
    name: "vor"
}
let content;
if (true) {
    content = "true";
} else {
    content = "false";
}
const products = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3},
];

function MyButton({count, onClick}) {
    return (
        <>
            <button onClick={onClick}>{string}</button>
            <p>{count}</p>
            <img src={user.name} alt="photo"/>
            <p>{content}</p>
            <p>{true && "what"}</p>
            <p>{true
                ? "вот" :
                "так"}</p>
            {products.map((product) => {
                return <p key={product.id}>{product.title}</p>
            })}
        </>
    );
}

export default MyButton;