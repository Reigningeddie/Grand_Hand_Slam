import css from './home.module.css';

export default function Home() {
  return (
    <main className={css.body}>
      <h1 className={css.title}>Grand Hand Slam</h1>
      <p className={css.pic}></p>
      <p className={css.name}>User Name</p>
      <p className={css.dez}>Description (add max characters)</p>
      <p className={css.grid}>grid here</p>
    </main>
  )
}