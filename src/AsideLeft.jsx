import './AsideLeft.css'
import CardAmigos from './CardAmigos'
import { zoe, hannah } from "./UsersList"

export default function AsideLeft() {
  return (
    <aside className="relacao__amigos_container">
      <h2 className="relacao__amigos_titulo">Amigos</h2>
      <div className="cardAmigos">
        <CardAmigos nome={zoe.name} imagem={zoe.imagem} amigosComum={zoe.amigos} imagemAlt={zoe.imagemAlt} />
        <CardAmigos nome={hannah.name} imagem={hannah.imagem} amigosComum={hannah.amigos} imagemAlt={hannah.imagemAlt}/>
      </div>
    </aside>
  )
}