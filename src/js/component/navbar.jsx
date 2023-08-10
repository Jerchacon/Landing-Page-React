import React from 'react'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand m-2" href="#">Start Bootstrap</a>

                <div className="collapse navbar-collapse justify-content-end m-2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;