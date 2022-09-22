import Link from 'next/link'
import Image from 'next/future/image'
import styles from '../styles/Footer.module.css'

function Footer () {
  return (
    <footer className={styles['footer']}>
      <div className={`${styles['footer-wrapper']} container`}>
        <div>
          <h2>Riverse maintenant!</h2>
          <section className={`${styles['rendez-vous']} flow-spacer spacer-xs`}>
            {/* visually-hidden? */}
            <h3 className='visually-hidden'>RDV</h3>
            <p className='flow-spacer spacer-xs'>
              <span>Vous voulez en savoir plus sur nos projets ?</span>
              <Link href='/rdv'>
                <a className={`${styles['button-style']} button-style`}>
                  Prendre rendez-vous
                </a>
              </Link>
            </p>
          </section>
        </div>
        <section className={`${styles['newsletter']}`}>
          {/* visually-hidden? */}
          <h3 className='visually-hidden'>Newsletter</h3>
          <form
            action='/newsletter-subscribe'
            className='flow-spacer spacer-xs'
          >
            <label htmlFor='newsletter-input'>
              Recevez notre newsletter sur les façons de contribuer à
              l&apos;accélération des solutions à faible émission de carbone.
            </label>
            <div className={styles['input-button-wrapper']}>
              <input
                type='section--text'
                name='email'
                autoComplete='email'
                id='newsletter-input'
                placeholder='Entrez votre email'
              ></input>
              <button type='submit'>S&apos;inscrire</button>
            </div>
          </form>
        </section>
        <section className={styles['footer-links-wrapper']}>
          {/* visually-hidden? */}
          <h3 className='visually-hidden'>Liens utiles</h3>
          {/* <ul className={styles['links-list']}> */}
          <ul className='flow-spacer spacer-xs'>
            <li>
              <Link href='#'>
                <a>Explorer nos solutions</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Comment ça marche</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>A propos de nous</a>
              </Link>
            </li>
            {/* add mailto */}
            <li>
              <Link href='#'>
                <a>Contactez nous à contact@riverse.io</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles['footer-links-wrapper']}>
          {/* visually-hidden? */}
          <h3 className='visually-hidden'>Retrouvez nous sur les réseaux</h3>
          {/* <ul className={styles['links-list']}> */}
          <ul className='flow-spacer spacer-xs'>
            <li>
              <Link href='#'>
                <a>
                  {/* <svg aria-hidden='true'>LI</svg> */}
                  Suivez-nous sur LinkedIn
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>
                  {/* <svg aria-hidden='true'>M</svg> */}
                  Lisez nos histoires sur Medium
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Tous droits réservés Riverse SAS</a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          {/* visually-hidden? */}
          <h3>Mouvement Impact France</h3>
          <Link href='https://www.impactfrance.eco/'>
            <a>
              {/* <svg></svg> */}
              ImpactFranceLogo
            </a>
          </Link>
        </section>
      </div>
    </footer>
  )
}

export default Footer
