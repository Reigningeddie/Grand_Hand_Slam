import css from './home.module.css';

export default function Home() {
  return (
    <main className={css.body}>
      <h1 className={css.title}>Grand Hand Slam</h1>
      <p className={css.pic}></p>
      <h4 className={css.name}>User Name</h4>
      <p className={css.grid}>
        <span className={`${css.gSum} ${css.items}`}>101</span>
        <span className={`${css.gSum} ${css.items}`}>253</span>
        <span className={`${css.gSum} ${css.items}`}>361</span>
        <span className={`${css.gName} ${css.items}`}>points</span>
        <span className={`${css.gName} ${css.items}`}>followers</span>
        <span className={`${css.gName} ${css.items}`}>following</span>
      </p>
      <p className={css.dez}>Description (add max characters)</p>
    </main>
  )
}