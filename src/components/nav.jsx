import css from './nav.module.css'

export default function Nav() {
  return(
    <p className={css.body}>
    <p className={`${css.structure} ${css.sides}`}></p>
      <main className={`${css.structure} ${css.main}`}>main</main>
    <p className={`${css.structure} ${css.sides}`}></p>
    </p>
  )
}