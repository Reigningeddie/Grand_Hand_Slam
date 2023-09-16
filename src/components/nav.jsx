import css from './nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return(
    <p className={css.body}>
    <p className={`${css.structure} ${css.sides}`}></p>
      <main className={`${css.structure} ${css.main}`}>
      <container className={css.grid}>
        <Link className={css.item}>LeaderBoards</Link>
        <Link className={css.item}>Power-Ups</Link>
        <Link className={css.item}>Specials</Link>
        <Link className={css.item}>Friends</Link>
        <Link className={css.item}>Rules</Link>
        <Link className={css.item}>Bars</Link>
  </container>
      </main>
    <p className={`${css.structure} ${css.sides}`}></p>
    </p>
  )
}