import Head from 'next/head'
import styles from '../../styles/BlogPage.module.css'
import Header from '../../components/Header'
import BlogPost from '../../components/BlogPost'
import convertPrismicToData from '../../utils/convertPrismicToData'
import Prismic from '@prismicio/client'

const ONE_DAY_IN_SECONDS = 86400

export async function getStaticProps(context) {
  const client = Prismic.client(process.env.PRISMIC_URL, {})
  const data = await client.getByUID('blog_post', context.params.slug)
  console.log('DATA', data)

  return {
    props: {
      data: convertPrismicToData(data),
      revalidate: ONE_DAY_IN_SECONDS
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default function Blog({ data }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <BlogPost isMainPage {...data} />
      </main>
    </>
  )
}
