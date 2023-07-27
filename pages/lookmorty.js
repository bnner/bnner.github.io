import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import lookMortyImg from '../public/images/look_morty.png'
import eye from '../public/images/eye.png'
import styles from '../styles/Index.module.css'

export default function LookMorty() {
    const eye1 = useRef(null)
    const eye2 = useRef(null)
    const eye3 = useRef(null)
    const eye4 = useRef(null)

    const angle = (cx, cy, ex, ey) => {
        const dy = ey - cy
        const dx = ex - cx
        const rad = Math.atan2(dy, dx)
        const deg = rad * 180 / Math.PI;
        return deg
    }

    const handleMouseMove = (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY

        const anchor = document.getElementById('anchor')
        const rekt = anchor.getBoundingClientRect()
        const anchorX = rekt.left + rekt.width / 2
        const anchorY = rekt.top + rekt.height / 2

        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

        eye1.current.style.transform = `rotate(${90 + angleDeg}deg)`
        eye2.current.style.transform = `rotate(${90 + angleDeg}deg)`
        eye3.current.style.transform = `rotate(${90 + angleDeg}deg)`
        eye4.current.style.transform = `rotate(${90 + angleDeg}deg)`
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }

    }, [eye1, eye2, eye3, eye4])

    return (
        <div className={styles.follow}>
            <main>
                <Image src={lookMortyImg} alt='look Morty' id='anchor' />
                <div className={styles.eyes}>
                    <Image src={eye} width={50} height={50} ref={eye1} alt='eye' className={styles.eye} style={{
                        top: "160px",
                        right: "160px"
                    }} />
                    <Image src={eye} width={50} height={50} ref={eye2} alt='eye' className={styles.eye} style={{
                        top: "125px",
                        right: "27px"
                    }} />
                    <Image src={eye} width={50} height={50} ref={eye3} alt='eye' className={styles.eye} style={{
                        bottom: "105px",
                        left: "105px"
                    }} />
                    <Image src={eye} width={50} height={50} ref={eye4} alt='eye' className={styles.eye} style={{
                        bottom: "100px",
                        left: "225px"
                    }} />
                </div>
            </main>
        </div>
    )
}