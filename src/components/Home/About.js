import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpg'
export default function About() {
    return (
        <section className={styles.about}>
          
            <Title  title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                <div className={styles.imgContainer}>
                <img src={img} alt="about company" />

                </div>

                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>gdgfddddddddddddddddddddddddddddd</p>
                    <p>fdddddddddddddddddddddddddddddddd</p>
                    <button type="button" className="btn-primary">
                        read more
                    </button>
                </article>
            </div>
        </section>
    )
}
