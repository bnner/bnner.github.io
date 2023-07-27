// index.html
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <>
            <div className={styles.index}>
                <div className={styles['open-line']}>
                    <Link href="/lookmorty" style={{ color: "black", textDecoration: "none" }}>
                        Welcome to my website Kim<span className={styles.blink}>.</span>
                    </Link>
                </div>
            </div>
        </>
    );
}