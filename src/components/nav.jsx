import css from './nav.module.css'

export default function Nav() {
  return(
    <p className={css.body}>
    <p className={`${css.structure} ${css.sides}`}></p>
      <main className={`${css.structure} ${css.main}`}>
        <container className={css.grid}>
          <span className={css.item}>No.1</span>
          <span className={css.item}>No.2</span>
          <span className={css.item}>No.3</span>
          <span className={css.item}>No.4</span>
        </container>
      </main>
    <p className={`${css.structure} ${css.sides}`}></p>
    </p>
  )
}