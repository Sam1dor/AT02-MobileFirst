import './AsideRight.css'
import CardAmigosComum from './CardAmigosComum'
import { hashiko } from "./UsersList"

export default function AsideRight() {
  return (
    <aside className="sugestao__amigos_container">
      <h2 className="relacao__amigos_titulo">Sugestão de Amizade</h2>
      <div>
        <CardAmigosComum nome={hashiko.name} imagem={hashiko.imagem} amigosComum={hashiko.amigosComum} imagemAlt={hashiko.imagemAlt}/> 
      </div>
    </aside>
  )
}