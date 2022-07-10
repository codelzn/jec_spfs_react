import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.homecontainer}>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h1>Main</h1>
      </main>
    </div>
  )
}
export const getStaticProps:GetStaticProps = async (ctx) => {
  return {
    props:{
      data:null
    }
  }
}

export default Home
