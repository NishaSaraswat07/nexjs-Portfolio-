import React from 'react'
import styles from '../styles/About.module.css'
import {TiHtml5} from 'react-icons/ti'
import {FaJsSquare, FaReact, FaNodeJs} from 'react-icons/fa'
import {BsFiletypeCss} from 'react-icons/bs'

export default function About() {
  return (
    <>
      <div className={styles.aboutPage}>
        <div className={styles.hr}>
          <h3>About</h3>
          <hr />
        </div>
        <h2>Nisha</h2>
        <div className={styles.details}>
          <p> Currently pursuing Frontend Devloper course from Changemaker Education
           Till now i have learnt html,css and javascript and the journey is still on and trying my best to learn React javascript framework.
          </p>
          <div className={styles.skills}>
            <h3>
              Skills
              <hr />
            </h3>
            <ul>
              <li><TiHtml5 /></li>
              <li><BsFiletypeCss /></li>
              <li><FaJsSquare /></li>
              <li><FaReact /></li>
              <li><FaNodeJs /></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.leftCard} />
        <div className={styles.backCard} />
      </div>
    </>
  )
}