import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {FaGithubAlt,FaLinkedinIn,FaFigma} from 'react-icons/fa'
import About from './about'
import Projects from './projects'
import { motion,AnimatePresence } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      <motion.div initial={{ y: "0%" }} animate={{ y: "calc(80vw - 100%)"}} transition={{duration:2}} className='iconsContainer'>
        <a href="https://github.com/NishaSaraswat07" target="_blank"><FaGithubAlt /></a>
        <a href="https://www.linkedin.com/in/nishasaraswat/" target="_blank"><FaLinkedinIn /></a>
        <a href="https://www.figma.com/files/recent?fuid=933343078711531768" target="_blank"><FaFigma /></a>
        <div className="vl"></div>
        </motion.div>
        <div className={styles.topContainer}>
          <motion.div className={styles.center} initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}>
            <Image src='/picnisha.png' alt = 'my pic' width={260} height={260} priority/>
            <motion.h2 initial={{ x: "100%" }}
              animate={{ x: "calc(100vw - 100%)" }} transition={{duration:3}}>Nisha</motion.h2>
            <motion.p>I am a frontend developer</motion.p>
          </motion.div>
        </div>
      </main>
      <div>
        <About />
      </div>
      <div>
        <Projects/>
      </div>
    </>
  )
}
