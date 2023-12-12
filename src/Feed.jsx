import './Feed.css';
import IconCheckboxes from './IconCheckboxes';

export default function Feed() {
  return (
    <div className="postagem__amigos">
      <h2>Feed</h2>
      <div className="container__card">
        <div>
          <h3>Tobby da galera!</h3>
          <div className="curtidas">
            <img src="./src/img/calendario.png"></img>
              <p>Postado em: 09/12/2023</p>
          </div>
          <div className="feed__img__container">
            <img src="./src/img/cachorropraia.jpg" className="feed__img"></img>
          </div>
          <div className="compartilhamento">
            <IconCheckboxes />
          </div>
        </div>
        <h4>De boa aqui na praia!!!</h4>
        <div className="texto">
          <img src="./src/img/dialog.svg"></img>
            <p>Comentarios:</p>
        </div>
        <ul className="comentarios">
          <li>Ralf: Da hora!</li>
          <li>Hannah: Quero irrrrrrr</li>
          <li>Zoe: Só de boa ai, aproveite</li>
        </ul>
      </div>
    </div>
  )
}