import React from "react"
import './pages/Home.css';

export default function Footer() {

    return (
        <div class="d-flex flex-column bg-dark text-white">
            <footer class="footer">
                <div className="Carou">
                    <a href="https://coreui.io">Clothes Store</a>
                    <span >&copy; 2020.</span>
                </div>
                <div className="Carou">
                    <span>Powered by</span>
                    <a href="https://coreui.io">Clothes</a>
                </div>
            </footer>
        </div>
    )
}