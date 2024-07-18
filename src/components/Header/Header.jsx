import './Header.css'
import Restaurant from '../Restaurants/Restaurants'
function Header() {
    return (
        <>
            <div className="navdiv">
                <nav className="navbarItem">
                    <section className="logo">
                        <img src="https://flowbite.com/docs/images/logo.svg" />
                        <p>GeekFood</p>
                    </section>

                    <section>

                        <ul className="list">
                            <li style={{ color: "#1d4ed8" }}>Home</li>
                            <li>Quote</li>
                            <li>Resturantse</li>
                            <li>Foods</li>
                            <li>Contact</li>
                        </ul>

                    </section>

                    <section>
                        <button className="getstartbtn">Get started</button>
                    </section>
                </nav>
            </div>
            <Restaurant />
        </>
    )
}


export default Header