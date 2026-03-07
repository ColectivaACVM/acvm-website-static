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
        className="relative flex flex-col overflow-hidden"
      >
        {/* Hero Image - Full Width */}
        <div className="relative w-full">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/VbDAZXFJNFHZKdNS.jpeg"
            alt="Colectiva Valle Machuca"
            className="w-full h-auto"
          />
        </div>

        {/* Text Content Below Image */}
        <div className="bg-gradient-to-b from-[#2a4a3a] to-[#1e3a2e] py-10 md:py-14">
          <div className="container flex flex-col items-center text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md max-w-2xl font-medium">
              {t('home.subtitle')}
            </p>
            <p className="text-base md:text-lg text-white/75 mb-8 max-w-3xl leading-relaxed">
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
                className="btn-secondary border-white/60 text-white hover:bg-white/10"
              >
                {t('home.cta_initiatives')}
              </button>
            </div>
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
          <div className="flex justify-center mb-4">
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
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/ZPEOQKordZwDawmN.jpeg',
              },
              {
                title: t('units.prmrm.title'),
                desc: t('units.prmrm.desc'),
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/duqGuZzhsyuzffZR.webp',
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
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/PVjaJMdDBhLCQNVJ.jpeg"
                alt="Mapa Río Machuca"
                className="w-full h-auto"
              />
              <p className="text-2xs text-muted-foreground mt-2 text-left">Mapa adaptado por Yam Aisner - Elaborado para Amigos Río Machuca en Febrero de 2024</p>
            </div>
          </div>

          {/* Partner Organizations */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-8 text-center">{t('territory.allied_orgs')}</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/usgHJCCGvQjZgqwq.png" alt="Mercado de la Tierra" className="h-20 object-contain" />
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/zWFsCTuRPXqIOtkl.png" alt="Amigos Río Machuca" className="h-20 object-contain" />
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/TuGgqwYBTVFtjFJD.png" alt="CATIE" className="h-20 object-contain" />
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/PMYxNaPcgfqTpxiJ.jpeg" alt="Municipalidad de San Mateo" className="h-20 object-contain" />
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/meiqAbWeISAKvjfb.png" alt="Bloom" className="h-20 object-contain" />
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663286151170/TsERGIhfSJWzIiEZ.png" alt="iNaturalist" className="h-20 object-contain" />
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
                href={t('contact.form_link')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary bg-primary text-white hover:opacity-90 px-8 py-3 rounded-lg font-semibold"
              >
                {t('contact.form_button')}
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
                <li>Regeneración de Microcuenca</li>
                <li>Red Colaborativa Ubuntu</li>
                <li>Salud Holística</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-sm opacity-90">
                colectivavallemachuca@gmail.com<br />
                Valle Machuca, Costa Rica
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
