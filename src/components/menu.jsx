import css from './menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <p className={css.left}>
          <Link className={css.items}>Back</Link>
          <Link className={css.items}>User Name</Link>
        </p>
        <p className={css.right}>
          <Link className={css.items}>Search</Link>
          <Link className={css.items}>Menu</Link>
        </p>
      </ul> 
    </nav>
  )
}