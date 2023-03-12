import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/Work.module.css'
import { motion } from 'framer-motion'
import first from '../images/first.png'
import second from '../images/second.png'
import third from '../images/third.png'
import fourth from '../images/fourth.png'
import fifth from '../images/fifth.png'
import {FaGithubAlt} from 'react-icons/fa'



export default function Projects() {

  const [projects, useSetProjects] = useState([
    {
      projectNo: 1,
      title: 'Assignment-1',
      discription: 'A simple react project',
      img: first,
      href:'https://github.com/NishaSaraswat07/React-Assignment1.git',
      
    },
    {
      projectNo: 2,
      title: 'Assignment-2',
      discription: 'Node-DateTime: Assignments',
      img: second,
      href:'https://github.com/NishaSaraswat07/Nodejs-Assignment2.git',
      
    },
    {
      projectNo: 3,
      title: 'Assignment-3',
      discription: 'Random number generator',
      img: third,
      href:'https://github.com/NishaSaraswat07/week3-PersonalProject-.git',
    },
    {
      projectNo: 4,
      title: 'Assignment-4',
      discription: 'API Assignment',
      img: fourth,
      href:'https://github.com/NishaSaraswat07/Assignment4-space-.git',
    },
    {
      projectNo: 5,
      title: 'Assignment-5',
      discription: 'Portfolio made with Nextjs',
      img: fifth,
      href:'https://github.com/NishaSaraswat07/Assignment4-space-.git',
    }
  ]);

  return (

    <>
    <div className={styles.projectContainer}>
            <div className={styles.hr}>
              <h3>Work</h3>
              <hr></hr>
            </div>
            </div>
        <div className={styles.cards}>
        {projects.map((project)=>{
          return(
          <>
            <motion.div whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 0 }} 
              className={styles.card}
              key={project.projectNo}>
              <div className={styles.cardContent}>  
                <Image src={project.img} alt='project image' width={230} height={200} style={{borderRadius:15}}/>
                <div className={styles.cardDetails}>
                  <p>{project.title}</p>
                  <p>{project.discription}</p>
                  <a href={project.href} alt='link to github' target='_blank'><FaGithubAlt/></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
        )}
        </div>
    </>
  )
}
