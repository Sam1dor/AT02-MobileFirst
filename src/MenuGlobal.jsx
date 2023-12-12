import "./MenuGlobal.css"
import { ExpandeColapsa } from './ExpandeColapsa'

function MenuGlobal() {
  return (
    <nav id="navbar" className="navbar">
      <div className="navItem">
        <a className="navItem__a" href="#">Home</a>
        <a className="navItem__a" href="#">Postagens</a>
        <a className="navItem__a" href="#">Amigos</a>
        <a className="navItem__a" href="#">Perfil</a>
      </div>
      <a onClick={ExpandeColapsa} id="toggle" className="toggle" href="#">=</a>
    </nav>
  )
}

export default MenuGlobal;
