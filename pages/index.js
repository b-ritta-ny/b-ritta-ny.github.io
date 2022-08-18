import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Layout, { siteTitle } from '@components/Layout'
import utilStyles from '@styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Header>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Header>

      <section className={utilStyles.headingMd}>
        <p>I'm a Georgia born, former NCAA Division I, All-American collegiate athlete, international fashion model, and tech-loving full stack software engineer. 
<br></br>
I'm experienced in Ruby on Rails and JavaScript based programming and a background in front end development from an early age. Possess strong skills in leadership and competitive focus that assist ambitious, powerhouse companies knock down goals through promoting high performance culture. Open minded and curious, I’m eager to learn from others whilst applying my own unique view.</p>
      </section>

      <Footer />
    </Layout>
  )
}
