import { useEffect, useState } from 'react';

const email = 'nicolas.banza21@nicodelas.com';
const whatsapp = '242056990880';

const projects = [
  { name: 'Yllonna Shop', type: 'Boutique en ligne', status: 'Projet client', href: 'https://yllonna-shop.pages.dev/', tone: 'mint', image: '/images/yllonna-desktop-preview.jpg', imageAlt: 'Capture de la boutique Yllonna ouverte sur ordinateur', description: 'Boutique en ligne réalisée pour une cliente.' },
  { name: 'PASSAGE', type: 'Mode & accessoires', status: 'Démonstration publiée', href: 'https://passage-demo-nicodelas.gloirebanza21.workers.dev/', tone: 'orange', image: '/images/passage-desktop-preview.jpg', imageAlt: 'Capture de la boutique PASSAGE ouverte sur ordinateur', description: 'Vitrine e-commerce fictive pour une marque de mode.' },
  { name: 'CADRE', type: 'Immobilier', status: 'Démo fictive', href: 'https://nicodelas-cadre-demo.pages.dev/', tone: 'blue', description: 'Site immobilier avec catalogue et fiches de biens fictifs.', image: '/images/cadre-desktop.jpg' },
  { name: 'RIVAGE', type: 'Immobilier', status: 'Démo fictive', href: 'https://nicodelas-rivage-demo.pages.dev/', tone: 'sea', description: 'Une seconde direction de site pour l’immobilier.' },
  { name: 'Le Jardin d’Olive', type: 'Restaurant', status: 'Démo fictive', href: 'https://nicodelas-jardin-olive-demo.pages.dev/', tone: 'olive', description: 'Menu, horaires et parcours de réservation de démonstration.' },
  { name: 'Côté Récolte', type: 'Alimentation', status: 'Démo fictive', href: 'https://nicodelas-cote-recolte-demo.pages.dev/', tone: 'harvest', description: 'Catalogue de produits frais pour une épicerie fictive.' },
  { name: 'FORMA CLUB', type: 'Fitness & bien-être', status: 'Démo fictive', href: 'https://nicodelas-forma-club-demo.pages.dev/', tone: 'lime', description: 'Programmes et cours pour une salle de sport fictive.' },
  { name: 'Garage Nova', type: 'Automobile', status: 'Démo fictive', href: 'https://nicodelas-garage-nova-demo.pages.dev/', tone: 'garage', description: 'Services et contact pour un garage fictif.' },
  { name: 'Atelier 21', type: 'Automobile', status: 'Démo fictive', href: 'https://nicodelas-atelier-21-demo.pages.dev/', tone: 'atelier', description: 'Entretien et services automobiles de démonstration.' },
  { name: 'Prochain projet : plateforme', type: 'SaaS · hôtellerie', status: 'En conception', href: null, tone: 'violet', description: 'Une idée d’agrégateur d’hôtels encore en réflexion.' },
];

const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent('Bonjour Nicolas, je souhaite parler de mon projet web.')}`;

function Arrow({ diagonal = false }) {
  return <svg className="arrow" viewBox="0 0 20 20" aria-hidden="true">{diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3 10h13m-5-5 5 5-5 5" />}</svg>;
}

function MailIcon() {
  return <svg className="mail-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
}

function Header() {
  const [active, setActive] = useState('top');
  const links = [
    { id: 'top', label: '<Accueil>', selector: '.hero' },
    { id: 'projets', label: 'Projets', selector: '#projets' },
    { id: 'services', label: 'Services', selector: '#services' },
    { id: 'about', label: 'À propos', selector: '#about' },
    { id: 'contact', label: 'Contact', selector: '#contact' },
  ];

  useEffect(() => {
    const updateActive = () => {
      const marker = window.innerHeight * 0.3;
      let current = 'top';
      for (const item of links) {
        const element = document.querySelector(item.selector);
        if (element && element.getBoundingClientRect().top <= marker) current = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActive(current);
    };
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  return (
    <header className="site-nav" id="top">
      <a className="site-brand mono" href="#top"><span>&lt;N/&gt;</span> Nicolas</a>
      <nav className="nav-links mono" aria-label="Navigation principale">
        {links.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setActive(item.id)}>{item.label}</a>)}
      </nav>
      <a className="nav-mail" href={`mailto:${email}`} aria-label={`Écrire à ${email}`}><MailIcon /></a>
    </header>
  );
}

function DevicePreview() {
  return (
    <div className="device-stage">
      <img className="device-render" src="/images/hero-devices-cadre-passage-v2.png" alt="Maquette 3D détourée montrant CADRE sur un ordinateur portable et PASSAGE sur un téléphone" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
        <h1 id="hero-title">Salut,<br />moi c’est <em>Nicolas</em>.<br />Je crée votre <u>présence en ligne.</u></h1>
        <p className="hero-subtitle mono">sites web · boutiques · commandes WhatsApp</p>
        <p className="hero-description">Des sites adaptés aux commerçants, petites entreprises et professionnels indépendants. Présentez votre activité et donnez à vos clients un moyen simple de vous retrouver.</p>
        <div className="hero-actions mono"><a className="button-outline" href="#projets">Voir mes projets</a><a className="button-text" href={whatsappLink} target="_blank" rel="noreferrer">Parler de votre projet <Arrow diagonal /></a></div>
        <div className="hero-tags"><span>Site vitrine</span><span>Boutique en ligne</span><span>Mobile first</span><span>WhatsApp</span></div>
        <p className="hand-note">Same ideas, local impact <b>✦</b></p>
      </div>
      <DevicePreview />
    </section>
  );
}

function SectionHeading({ number, title }) {
  return <div className="section-heading"><b className="section-number mono">{number}</b><span className="section-rule" /><span className="section-label mono">{title} <Arrow /></span></div>;
}

function ProjectCard({ project }) {
  const cardContent = (
    <>
      <div className={`project-visual visual-${project.tone}`}>
        {project.image ? <img src={project.image} alt={project.imageAlt || `Aperçu de la démonstration ${project.name}`} loading="lazy" /> : project.href ? <iframe className="project-iframe" src={project.href} title={`Aperçu du site ${project.name}`} loading="lazy" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer" tabIndex={-1} aria-hidden="true" /> : <><span className="visual-window" /><span className="visual-title">{project.name}</span><span className="visual-dots"><i /><i /><i /></span></>}
        {project.href && <span className="project-open"><Arrow diagonal /></span>}
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <small>{project.type} · {project.status}</small>
    </>
  );
  return <article className="project-card reveal-item">{project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${project.name}, ${project.type}`}>{cardContent}</a> : <div>{cardContent}</div>}</article>;
}

function Projects() {
  return (
    <section className="content-section reveal" id="projets" aria-labelledby="projects-title">
      <SectionHeading number="01" title="projets" />
      <h2 className="section-title" id="projects-title">Sites réalisés</h2>
      <div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
      <p className="fiction-note">Les entreprises, annonces, produits et tarifs des cartes marquées « Démo fictive » sont imaginaires. Ces démonstrations ne prennent pas de commandes, réservations ou paiements réels.</p>
    </section>
  );
}

function Icon({ name }) {
  const paths = {
    screen: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8m-4-4v4"/></>,
    cart: <><path d="M3 4h2l2.5 12h11L21 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></>,
    tools: <><path d="M14 6a5 5 0 0 0 6 6l-9 9a2 2 0 0 1-3-3l9-9a5 5 0 0 0-6-6l3 3-4 4-3-3a5 5 0 0 0 7 6"/></>,
  };
  return <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function Services() {
  return (
    <section className="content-section reveal" id="services" aria-labelledby="services-title">
      <SectionHeading number="02" title="services" />
      <h2 className="section-title" id="services-title">Ce que je fais pour vous</h2>
      <div className="service-grid">
        <article className="service-card reveal-item"><Icon name="screen" /><h3>Site vitrine</h3><p>Une présence claire pour présenter votre commerce, vos services, vos horaires et vos coordonnées.</p></article>
        <article className="service-card reveal-item"><Icon name="cart" /><h3>Boutique en ligne</h3><p>Catalogue, panier et commande par WhatsApp. Le paiement en ligne se définit selon le fournisseur disponible et validé pour votre activité.</p></article>
        <article className="service-card reveal-item"><Icon name="tools" /><h3>Espace de gestion</h3><p>Selon le projet, un espace de gestion peut permettre de mettre à jour produits, photos et disponibilités. Je peux aussi accompagner l’hébergement et les mises à jour.</p></article>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-section reveal" id="about" aria-labelledby="about-title">
      <SectionHeading number="03" title="à propos" />
      <div className="about-layout"><div className="about-copy"><h2 id="about-title">Un étudiant ingénieur qui aime construire.</h2><p>Depuis l’enfance, l’informatique me passionne. Je suis en deuxième année à l’Institut UCAC-ICAM et je me forme en parallèle au web et aux outils d’IA pour accompagner les commerçants de chez nous.</p><div className="stats"><div><b>2</b><span>sites publiés</span></div><div><b>7</b><span>démos fictives</span></div><div><b>2e</b><span>année d’ingénieur</span></div></div></div>
        <aside className="cv-card reveal-item" id="cv"><h3 className="mono">&lt;CV/&gt;</h3><p>Étudiant ingénieur · UCAC-ICAM<br />Créateur de sites & boutiques<br />Autodidacte web & IA</p><a href="/documents/cv-nicolas-banza.pdf" download="CV-Nicolas-Banza.pdf" aria-label="Télécharger le CV de Nicolas au format PDF">Télécharger mon CV (PDF) <Arrow /></a></aside></div>
    </section>
  );
}

function Contact() {
  return (
    <section className="content-section reveal" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel"><SectionHeading number="04" title="contact" /><h2 id="contact-title">Prêt à lancer votre site ?</h2><p>Écris-moi pour présenter ton activité. On en parle sans engagement.</p><div className="contact-actions mono"><a className="button-outline" href={`mailto:${email}`}>{email}</a><a className="button-text" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a></div></div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer mono">&lt;/&gt; © {new Date().getFullYear()} Nicolas · Pointe-Noire</footer>;
}

export default function App() {
  useEffect(() => {
    const targets = [...document.querySelectorAll('.reveal, .reveal-item')];
    const preference = window.matchMedia('(prefers-reduced-motion: no-preference)');
    let observer;
    const syncReveals = () => {
      observer?.disconnect();
      if (!preference.matches || !('IntersectionObserver' in window)) {
        targets.forEach((target) => target.classList.add('is-visible'));
        return;
      }
      targets.forEach((target) => target.classList.remove('is-visible'));
      observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }), { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
      targets.forEach((target) => observer.observe(target));
    };
    syncReveals();
    preference.addEventListener('change', syncReveals);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', syncReveals);
    };
  }, []);

  return <><Header /><main id="main"><Hero /><Projects /><Services /><About /><Contact /></main><Footer /></>;
}
