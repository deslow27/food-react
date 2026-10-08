import React from "react";
import reactDom from "react-dom/client";

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return <h1>Warung Mang Racing</h1>;
}

function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <Food />
            <Food />
        </div>
    );
}

function Footer() {
    return <footer>Copyright {new Date().getFullYear()}</footer>;
}

function Food() {
    return (
        <div>
            <img src="food/soto-betawi.jpg" alt="Soto Betawi" width={100} height={70} />
            <h2>Soto Betawi</h2>
            <p>Soto betawi dari Jakarta</p>
        </div>
    );
}

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
