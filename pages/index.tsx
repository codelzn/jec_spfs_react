import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import HamMenu from '../components/hamMenu'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <HamMenu />
        <h1>Header</h1>
      </header>
      <main>
        <h1>Main</h1>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default Home
