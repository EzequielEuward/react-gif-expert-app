import './header.css';
let vacio = '';

export function Header() {
    const abrir_cerrar_menu = () => {
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    };
    return (
        <>
            <div>
                <header>
                    <div className="barras">
                        <button onClick={abrir_cerrar_menu} className='boton_menu' id='x'>X</button>
                    </div>
                    <nav id='menu' className="desplegable">
                        <ul>
                            <li><a href={vacio}>Home</a></li>
                            <li><a href={vacio}>Gif Expert App</a></li>

                        </ul>
                    </nav>
                </header>
            </div>
        </>
    );
}

export default Header;