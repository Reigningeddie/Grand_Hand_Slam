import css from './leaderBoard.module.css';

export default function leaderBoard () {
  return(
    <p className={css.body}>
    <p className={`${css.structure} ${css.sides}`}></p>
      <main className={`${css.structure} ${css.main}`}>
      <container className={css.grid}>
        <div className={css.top}>
          <span className={css.leader}>No. 1</span>
        </div>
        <span className={css.item}>No. 2</span>
        <span className={css.item}>No. 3</span>
        <span className={css.item}>No. 4</span>
        <span className={css.item}>No. 5</span>
        <span className={css.item}>No. 6</span>
  </container>
      </main>
    <p className={`${css.structure} ${css.sides}`}></p>
    </p>
  )
}