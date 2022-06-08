import React from 'react'
import styles from './hero.module.scss'

function Hero({ title, subTitle }) {
    return (
        <section>
            <header className={styles.header}>
                <div className={styles.graphic}>Graphic</div>
                <div className={styles.text}>
                    <h1>
                        {title}
                    </h1>
                    {subTitle}
                </div>
            </header>
        </section>
    )
}

export { Hero }