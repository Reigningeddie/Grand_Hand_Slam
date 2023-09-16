import css from './leaderBoard.module.css';

export default function leaderBoard () {
  return(
    <p className={css.body}>
    <p className={`${css.structure} ${css.sides}`}></p>
      <main className={`${css.structure} ${css.main}`}>
      <container className={css.grid}>
        <container className={css.top}>
          <span className={css.leader}></span>
        </container>
        <span className={css.item}>
        </span>
        <span className={css.item}></span>
        <span className={css.item}></span>
        <span className={css.item}></span>
        <span className={css.item}></span>
  </container>
      </main>
    <p className={`${css.structure} ${css.sides}`}></p>
    </p>
  )
}