import styles from '../styles/Home.module.css'

export default function Main () {
  return (
    <main className={styles['main']}>
      {/* visually-hidden? */}
      <h1>Riverse title</h1>
      <section className={styles['section--two-cols']}>
        <div>
          <h2>PLATEFORME DE RÉDUCTION ET DE CAPTURE DE CARBONE</h2>
          <p>
            Contribuer à la transition vers une société neutre en carbone
            <a href='/projects' className='button-style'>
              Découvrez nos projets
            </a>
          </p>
        </div>
        <div className={styles['img-wrapper']}>
          <img src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1640188466258x756727085543603700%2Findustry-5-buildings.jpg?w=1024&h=&auto=compress&dpr=1&fit=max' />
        </div>
      </section>
      <section className={styles['section--text']}>
        <h2>NOTRE MISSION</h2>
        <p>
          Nous facilitons le développement de solutions à fort impact
          environnemental par le financement d'entreprises soucieuses du climat.
          Riverse est une place de marché de compensation carbone, permettant
          aux entreprises d'acheter des crédits carbone étroitement liés à leurs
          activités.
          <a href='/about' className='button-style'>
            A propos
          </a>
        </p>
      </section>
      <section className={styles['section--text']}>
        <h2>LE FONCTIONNEMENT</h2>
        <p>
          Nous réunissons tous les acteurs pertinents pour permettre une
          contribution carbone vertueuse.
          <img src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1644569353367x635401191925254300%2Fschema_howitworks7.png?w=1536&h=535&auto=compress&dpr=1&fit=max' />
          <a href='/processus' className='button-style'>
            Notre processus
          </a>
        </p>
      </section>
      <section className={styles['section--two-cols']}>
        <div>
          <h2>POURQUOI C'EST IMPORTANT</h2>
          <p>
            Les entreprises ont un rôle central à jouer dans cette transition
            Contribuer à la transition vers une société neutre en carbone
            <span className={styles['text-small']}>
              Les investissements dans les solutions bas carbone doivent être
              multipliés par 6 pour financer leur déploiement[1] à grande
              échelle Les entreprises et les institutions sont responsables de
              75 % des efforts de réduction[2] nécessaires à la décarbonisation
              de notre système Les entreprises ayant un contrôle limité sur leur
              scope 3, une action climatique significative doit donc aller au
              delà de la réduction de leurs émissions directes Pour réussir
              notre transition, les solutions de réduction doivent être
              financées par la contribution tout autant que celles de capture
            </span>
            <a href='/projects' className='button-style'>
              Découvrez nos projets
            </a>
          </p>
        </div>
        <div className={styles['img-wrapper']}>
          <img src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1644483103757x216584966952864540%2Findsutry-11-buildings%2520-%2520Copie.jpg?w=1024&h=&auto=compress&dpr=1&fit=max' />
        </div>
      </section>
      <section className={styles['section--text']}>
        <h2>NOTRE APPROCHE</h2>
        <p>
          Nous souhaitons favoriser une contribution vertueuse, en appliquant
          les règles suivantes
          <div className={styles['text-blocks-wrapper']}>
            <p>Uniquement pour les entreprises soucieuses du climat</p>
            <p>Des projets liés à vos propres émissions</p>
            <p>
              Des prix reflétant le coût réel de la transition environnementale
            </p>
            <p>Engagement honnête de votre écosystème</p>
          </div>
          <a href='/explore' className='button-style'>
            {/* add accessible name */}
            Commencer
          </a>
        </p>
      </section>
    </main>
  )
}
