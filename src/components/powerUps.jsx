import css from './powerUps.module.css';

function powerUps () {
  return(
    <div className={css.body}>
    <p className={`${css.structure} ${css.sides}`}></p>
      <main className={`${css.structure} ${css.main}`}>
      <container className={css.grid}>
        <span className={css.item}>No. 1</span>
        <span className={css.item}>No. 2</span>
        <span className={css.item}>No. 3</span>
        <span className={css.item}>No. 4</span>
        <span className={css.item}>No. 5</span>
        <span className={css.item}>No. 6</span>
  </container>
      </main>
    <p className={`${css.structure} ${css.sides}`}></p>
    </div>
  )
};

export default powerUps;