import Image from 'next/future/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import styles from '../styles/Nav.module.css'

import { useState } from 'react'

const menuButtonSVG = (
  <>
    <rect
      className='line--top'
      x={3}
      y={5}
      height={2}
      width={18}
      rx={1}
      ry={1}
    />
    <rect
      className='line--middle'
      x={3}
      y={11}
      height={2}
      width={18}
      rx={1}
      ry={1}
    />
    <rect
      className='line--bottom'
      x={3}
      y={17}
      height={2}
      width={18}
      rx={1}
      ry={1}
    />
  </>
)

const arrowButton = (
  <path d='M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,15.5L7.5,11l1.42-1.41L12,12.67 l3.08-3.08L16.5,11L12,15.5z' />
)

function ExpandButton ({
  elemToShow,
  ariaLabel,
  className = '',
  menuButton = false
}) {
  const [expanded, setExpanded] = useState(false)
  function handleExpand (e) {
    e.target.setAttribute('aria-expanded', !expanded)
    setExpanded(!expanded)
  }
  return (
    <button
      type='button'
      aria-controls={elemToShow}
      className={`${className} expand-button ${
        menuButton ? 'menu-button' : ''
      }`}
      aria-expanded={expanded}
      aria-label={ariaLabel}
      onClick={handleExpand}
    >
      <svg
        enableBackground='new 0 0 24 24'
        viewBox='0 0 24 24'
        aria-hidden='true'
        focusable='false'
        fill='currentColor'
        style={{ pointerEvents: 'none' }}
        width='24px'
        height='24px'
      >
        {menuButton ? menuButtonSVG : arrowButton}
      </svg>
    </button>
  )
}

function Nav ({}) {
  return (
    <header className={styles['header']}>
      <div className='gap-xs flex container flex-block-center'>
        <div className={styles['logo-wrapper']}>
          <Image src={logo} className={styles['logo']} alt='riverse logo' />
        </div>
        {/* <ExpandButton
          menuButton={true}
          className={styles['toggle-nav-button']}
          elemToShow='nav--main'
          ariaLabel='Main navigation'
        /> */}
        <nav
          id='nav--main'
          className={`${styles['nav--main']}`}
          aria-label='main'
        >
          <ul
            role='list'
            className={`${styles['nav--main__list']} flex flex-block-center`}
          >
            <div className={styles['nav-links-wrapper'] + ' flex'}>
              <li>
                <Link href='/'>
                  <a className={styles['nav-link']} aria-current='page'>
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/path'>
                  <a className={styles['nav-link']}>Découvrez nos projets</a>
                </Link>
              </li>
              <li className={styles['with-sublinks-wrapper']}>
                <Link href='/path'>
                  <a className={styles['nav-link']}>Fonctionnement</a>
                </Link>
                <ExpandButton
                  elemToShow='fonctionnement-sublinks'
                  ariaLabel='Fonctionnement'
                  className={styles['expand-button']}
                />
                <ul
                  id='fonctionnement-sublinks'
                  className={styles['nav-sublinks']}
                >
                  <li>
                    <Link href='/path'>
                      <a className={styles['nav-link']}>Notre processus</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/path'>
                      <a className={styles['nav-link']}>Nos principes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/path'>
                      <a className={styles['nav-link']}>Nos méthodologies</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/path'>
                  <a className={styles['nav-link']}>A propos</a>
                </Link>
              </li>
            </div>
            <li>
              <Link href='/path'>
                <a className={styles['new-project-link'] + ' button-style'}>
                  Proposer un projet
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav
