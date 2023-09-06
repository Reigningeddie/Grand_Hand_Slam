import nav from './nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={nav.nav}>
      <ul className={nav.list}>
        <Link className={nav.items}>Back</Link>
        <p className={nav.profile}>profile</p>
        <Link className={nav.items}>search</Link>
        <button className={nav.btn}>Menu</button>
      </ul> 
    </nav>
  )
}