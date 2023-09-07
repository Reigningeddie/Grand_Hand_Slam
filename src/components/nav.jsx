import nav from './nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={nav.nav}>
      <ul className={nav.list}>
        <p className={nav.left}>
          <Link className={nav.items}>Back</Link>
          <Link className={nav.items}>User Name</Link>
        </p>
        <p className={nav.right}>
          <Link className={nav.items}>search</Link>
          <Link className={nav.items}>Menu</Link>
        </p>

      </ul> 
    </nav>
  )
}