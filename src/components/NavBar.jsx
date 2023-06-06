import ContactBtn from "./Recursos/ContactoBtn";

export default function NavBar () {

    return (
        <>
            <div className="nav-container">
                <div className="nav_inicio">
                    <p>Inicio</p>
                </div>
                <div className="nav_productos">
                    <p>Productos</p>
                </div>
                <div className="nav_comercio">
                    <p>Comercio</p>
                </div>
                <ContactBtn />
            </div>
        </>
    )
}