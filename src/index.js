import React from "react";
import reactDom from "react-dom/client";
import data from "./data.js";

import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    const style = { color: "red", fontSize: "30px" };
    return <h1 style={style}>Warung Mang Racing</h1>;
}

function Menu() {
    const foods = data;
    const numFoods = foods.length;

    return (
        <main className="menu">
            <h2>Menu Kita</h2>
            {numFoods > 0 && (
                <ul className="foods">
                    {data.map((food) => (
                        <Food key={food.nama} foodObj={food} />
                    ))}
                </ul>
            )}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const jamBuka = 9;
    const jamTutup = 22;
    const isOpen = hour >= jamBuka && hour <= jamTutup;

    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>
                        {new Date().getFullYear()} Warung Mang Racing | jam buka: {jamBuka} - jam tutup: {jamTutup}
                    </p>

                    <button className="btn">Order</button>
                </div>
            )}
        </footer>
    );
}

function Food(props) {
    return (
        <li className="food">
            <div>
                <img src={props.foodObj.foto} alt={props.foodObj.nama} width={100} height={70} />
            </div>
            <div>
                <h3>{props.foodObj.nama}</h3>
                <p>{props.foodObj.deskripsi}</p>
                <span>Rp {props.foodObj.harga}</span>
            </div>
        </li>
    );
}

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
