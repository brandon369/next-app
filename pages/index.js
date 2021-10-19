import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation";
import Layout from "../components/layout";
import User from "../components/User";

export default function Home({users}) {
  console.log(users)
  return (
    <Layout title='Inicio'>

      <div className='container'>

        <h1>Next</h1>
        <ul className='list-group'>
          {users && users.map(user => (
            <User user={user} key={user.id}/>
          ))}
        </ul>


        {/*<main className={styles.main}>*/}
        {/*  <h1 className={styles.title}>*/}
        {/*    Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
        {/*  </h1>*/}

        {/*  <p className={styles.description}>*/}
        {/*    Get started by editing{' '}*/}
        {/*    <code className={styles.code}>pages/index.js</code>*/}
        {/*  </p>*/}

        {/*  <div className={styles.grid}>*/}
        {/*    <a href="https://nextjs.org/docs" className={styles.card}>*/}
        {/*      <h2>Documentation &rarr;</h2>*/}
        {/*      <p>Find in-depth information about Next.js features and API.</p>*/}
        {/*    </a>*/}

        {/*    <a href="https://nextjs.org/learn" className={styles.card}>*/}
        {/*      <h2>Learn &rarr;</h2>*/}
        {/*      <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
        {/*    </a>*/}

        {/*    <a*/}
        {/*      href="https://github.com/vercel/next.js/tree/master/examples"*/}
        {/*      className={styles.card}*/}
        {/*    >*/}
        {/*      <h2>Examples &rarr;</h2>*/}
        {/*      <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
        {/*    </a>*/}

        {/*    <a*/}
        {/*      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*      className={styles.card}*/}
        {/*    >*/}
        {/*      <h2>Deploy &rarr;</h2>*/}
        {/*      <p>*/}
        {/*        Instantly deploy your Next.js site to a public URL with Vercel.*/}
        {/*      </p>*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</main>*/}

        {/*<footer className={styles.footer}>*/}
        {/*  <a*/}
        {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Powered by{' '}*/}
        {/*    <span className={styles.logo}>*/}
        {/*    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>*/}
        {/*  </span>*/}
        {/*  </a>*/}
        {/*</footer>*/}
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`https://reqres.in/api/users`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      users: data.data
    }, // will be passed to the page component as props
  }
}
