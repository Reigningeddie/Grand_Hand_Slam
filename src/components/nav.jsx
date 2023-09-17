import css from './nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return(
    <div className={css.body}>
    <p className={`${css.structure} ${css.sides}`}></p>
      <main className={`${css.structure} ${css.main}`}>
      <container className={css.grid}>
        <Link to='leader' className={css.item}>LeaderBoards</Link>
        <Link to='power' className={css.item}>Power-Ups</Link>
        <Link className={css.item}>Specials</Link>
        <Link className={css.item}>Friends</Link>
        <Link className={css.item}>Rules</Link>
        <Link className={css.item}>Bars</Link>
  </container>
      </main>
    <p className={`${css.structure} ${css.sides}`}></p>
    </div>
  )
}