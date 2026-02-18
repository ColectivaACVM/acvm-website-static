import Navigation from '@/components/Navigation';
import { ArrowRight, Droplet, Leaf, Users, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', interest: '' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '', interest: '' });
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://private-us-east-1.manuscdn.com/sessionFile/wsa61KxqRktTrs8oBYrWMR/sandbox/74Qb5sLre7Kuh23gsAc2Dz-img-1_1770410513000_na1fn_aGVyby1yZWdlbmVyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3NhNjFLeHFSa3RUcnM4b0JZcldNUi9zYW5kYm94Lzc0UWI1c0xyZTdLdWgyM2dzQWMyRHotaW1nLTFfMTc3MDQxMDUxMzAwMF9uYTFmbl9hR1Z5YnkxeVpXZGxibVZ5WVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iWqeENG2hIu~vRq8d6gdR1k5nkLYscs8QxksnAy3SXhRViYUwMarOM2mKLiipKCcRLdqzxigoQ9RbSoHEXA6eT5J-8SwbY-a5fd13rlhjl9umBHW~UMrwMN~S0uYt7ZYlsLvnvGS~lEsa174I7TuwR8DFtTkpkEEUqFC1RUWdaErokZiewpTIZe3jskLoBX~EY~QAE3Y~smP2LsdXcZ6wDnzfaDdLBfffg7sFnbKLJmRsRYmO82d6MeRCvObwk1C~Soq1qmeh3RpvUaDGxAhHwE8oeN7oD19UYKMM9dA3FGDMKqbIOmOzAJIO77gcpup6FPw3RpGrE~k1mDTlh68Cg__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20 flex flex-col items-center text-center">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/kCZSfJmgnFiDuOBz.png"
            alt="ACVM Logo"
            className="h-24 w-24 mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-2xl">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-3xl leading-relaxed drop-shadow-md">
            {t('home.value_prop')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('mission')}
              className="btn-primary bg-primary text-white flex items-center justify-center gap-2 hover:opacity-90"
            >
              {t('home.cta_model')}
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('units')}
              className="btn-secondary border-white text-white"
            >
              {t('home.cta_initiatives')}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            {t('about.title')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">{t('about.intro')}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{t('about.mission_text')}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{t('about.role')}</p>
          </div>
        </div>
      </section>

      {/* Purpose, Vision, Mission */}
      <section id="mission" className="py-16 md:py-24 bg-background pattern-subtle">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            {t('pvm.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t('pvm.purpose_title'),
                text: t('pvm.purpose'),
                color: 'border-primary',
              },
              {
                title: t('pvm.vision_title'),
                text: t('pvm.vision'),
                color: 'border-accent',
              },
              {
                title: t('pvm.mission_title'),
                text: t('pvm.mission'),
                color: 'border-secondary',
              },
            ].map((item, idx) => (
              <div key={idx} className={`card-soft border-t-4 ${item.color}`}>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section id="organization" className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            {t('org.title')}
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-foreground/80 text-center leading-relaxed mb-12">
              {t('org.intro')}
            </p>
          </div>

          {/* Three Circles Diagram */}
          <div className="flex justify-center mb-12">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/xikztfDeIfSmjEbb.png"
              alt="Círculos de Organización"
              className="w-full max-w-2xl h-auto"
            />
          </div>


        </div>
      </section>

      {/* Collective Units Section */}
      <section id="units" className="py-16 md:py-24 bg-background pattern-subtle">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            {t('units.title')}
          </h2>

          <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-12">
            {t('units.intro')}
          </p>

          {/* Units Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t('units.mdlt.title'),
                desc: t('units.mdlt.desc'),
                image:
                  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/LPKpjnFUTVUgxlhJ.png',
              },
              {
                title: t('units.rcu.title'),
                desc: t('units.rcu.desc'),
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/dAZwABHgzDqulfNI.png',
              },
              {
                title: t('units.ehvm.title'),
                desc: t('units.ehvm.desc'),
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/WqHGaaAXhTwdEQlY.jpg',
              },
              {
                title: t('units.prmrm.title'),
                desc: t('units.prmrm.desc'),
                image:
                  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/CHTYeABehKNMnYll.jpeg',
              },
            ].map((unit, idx) => (
              <div key={idx} className="card-soft overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted overflow-hidden rounded-lg mb-4">
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{unit.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory Section */}
      <section id="territory" className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            {t('territory.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-12">
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t('territory.intro')}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Droplet className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Agua</h4>
                    <p className="text-foreground/70">{t('territory.water')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Suelos</h4>
                    <p className="text-foreground/70">{t('territory.soil')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Biodiversidad</h4>
                    <p className="text-foreground/70">{t('territory.biodiversity')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/BnrTruMYdPrLZKKz.png"
                alt="River"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Partner Organizations */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-primary mb-6">Aliados en el Territorio</h3>
            <div className="flex justify-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/WvmdEqNJoQqxAjAH.jpeg"
                alt="Mapa Río Machuca"
                className="w-full max-w-2xl h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background pattern-subtle">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            {t('values.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              t('values.common_good'),
              t('values.regeneration'),
              t('values.solidarity'),
              t('values.autonomy'),
              t('values.transparency'),
              t('values.equity'),
              t('values.care'),
              t('values.learning'),
              t('values.peace'),
              t('values.reciprocity'),
            ].map((value, idx) => (
              <div key={idx} className="card-soft border-l-4 border-primary">
                <p className="font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            {t('contact.title')}
          </h2>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="card-soft text-center">
              <p className="text-lg text-foreground/80 mb-6">
                {t('contact.intro')}
              </p>
              <a
                href="https://tally.so/r/zxqzlq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary bg-primary text-white hover:opacity-90 px-8 py-3 rounded-lg font-semibold"
              >
                Completa el formulario
              </a>
            </div>
            
            <div className="card-soft text-center">
              <h3 className="text-lg font-bold text-primary mb-4">O envía un correo a:</h3>
              <a
                href="mailto:colectivavallemachuca@gmail.com"
                className="text-primary hover:underline text-lg font-semibold"
              >
                colectivavallemachuca@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">ACVM</h4>
              <p className="text-sm opacity-90">
                Plataforma de gobernanza y regeneración territorial en Valle Machuca, Costa Rica.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Iniciativas</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li>Mercado de la Tierra</li>
                <li>Red Colaborativa Ubuntu</li>
                <li>Salud Holística</li>
                <li>Regeneración Microcuenca</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-sm opacity-90">
                Valle Machuca<br />
                Costa Rica
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>© 2026 Asociación Colectiva Valle Machuca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
