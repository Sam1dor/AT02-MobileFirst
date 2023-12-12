import './App.css'
import AsideLeft from './AsideLeft'
import AsideRight from './AsideRight'
import Cabecalho from './Cabecalho'
import Feed from './Feed'
import MenuGlobal from './MenuGlobal'

export default function App() {
  return (
    <div className='container'>
      <Cabecalho />
      <MenuGlobal />
      <div className="container__feed">
        <AsideLeft />
        <Feed />
        <AsideRight />
      </div>
    </div>
  )
}
