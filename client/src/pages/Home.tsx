import Navigation from '@/components/Navigation';
import { ArrowRight, Droplet, Leaf, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col overflow-hidden">
        <div className="relative w-full">
          <img
            src="/images/hero-nueva.jpg"
            alt="La Colectiva"
            className="w-full h-auto"
          />
        </div>

        <div className="bg-gradient-to-b from-[#2a4a3a] to-[#1e3a2e] py-10 md:py-14">
          <div className="container flex flex-col items-center text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md max-w-3xl font-medium">
              {t('home.subtitle')}
            </p>
            <p className="text-base md:text-lg text-white/75 mb-8 max-w-3xl leading-relaxed">
              {t('home.value_prop')}
            </p>

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

      {/* About */}
      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 text-center">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-primary/80 text-center mb-10 font-medium">
            {t('about.subtitle')}
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {t('about.intro')
              .split('\n')
              .filter(Boolean)
              .map((paragraph, idx) => (
                <p key={idx} className="text-lg text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section id="mission" className="py-16 md:py-24 bg-background pattern-subtle">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            {t('pvm.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
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

      {/* Organization */}
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

          <div className="flex justify-center mb-4">
          <img
            src="/images/Circulos-Colectiva.jpg"
            alt={t('org.title')}
            className="w-full max-w-2xl h-auto"
          />
        </div>
        </div>
      </section>

      {/* Projects */}
      <section id="units" className="py-16 md:py-24 bg-background pattern-subtle">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            {t('units.title')}
          </h2>

          <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-12">
            {t('units.intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t('units.mdlt.title'),
                subtitle: '',
                desc: t('units.mdlt.desc'),
                image: '/images/mercado-de-la-tierra-ecovilla-san-mateo.jpg',
              },
              {
                title: t('units.prmrm.title'),
                subtitle: t('units.prmrm.subtitle'),
                desc: t('units.prmrm.desc'),
                image: '/images/la-colectiva-valle-machuca--proyectos--amigos-del-rio-machuca.jpg',
              },
              {
                title: t('units.rcu.title'),
                subtitle: '',
                desc: t('units.rcu.desc'),
                image: '/images/mercado-de-la-tierra-la-colectiva-valle-machuca.jpg',
              },
              {
                title: t('units.ehvm.title'),
                subtitle: '',
                desc: t('units.ehvm.desc'),
                image: '/images/WqHGaaAXhTwdEQlY.jpg',
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
                <h3 className="text-lg font-bold text-primary mb-1">{unit.title}</h3>
                {unit.subtitle && (
                  <p className="text-sm text-primary/80 font-medium mb-3">{unit.subtitle}</p>
                )}
                <p className="text-foreground/80 leading-relaxed">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory */}
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
                    <h4 className="font-semibold text-foreground mb-1">
                      {t('territory.water_label')}
                    </h4>
                    <p className="text-foreground/70">{t('territory.water')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t('territory.soil_label')}
                    </h4>
                    <p className="text-foreground/70">{t('territory.soil')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t('territory.biodiversity_label')}
                    </h4>
                    <p className="text-foreground/70">{t('territory.biodiversity')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/Mapa-Rio-Machuca-La-Colectiva-Valle-Machuca.jpg"
                alt={t('territory.title')}
                className="w-full h-auto"
              />
              <p className="text-xs text-muted-foreground mt-2 text-left">
                {t('territory.map_caption')}
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-8 text-center">
              {t('territory.allied_orgs')}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img src="/images/usgHJCCGvQjZgqwq.png" alt="Mercado de la Tierra" className="h-20 object-contain" />
              <img src="/images/zWFsCTuRPXqIOtkl.png" alt="Amigos del Río Machuca" className="h-20 object-contain" />
              <img src="/images/TuGgqwYBTVFtjFJD.png" alt="CATIE" className="h-16 object-contain" />
              <img src="/images/PMYxNaPcgfqTpxiJ.jpeg" alt="Municipalidad de San Mateo" className="h-20 object-contain" />
              <img src="/images/bloom-logo.webp" alt="Bloom" className="h-20 object-contain" />
              <img src="/images/TsERGIhfSJWzIiEZ.png" alt="iNaturalist" className="h-20 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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

      {/* Donations */}
      <section id="donate" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto card-soft pt-0">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="text-primary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                {t('donate.title')}
              </h2>
            </div>

            <div className="space-y-5 text-foreground/80">
              <p>{t('donate.intro_1')}</p>
              <p>{t('donate.intro_2')}</p>

              <div>
                <p className="font-semibold text-foreground mb-3">{t('donate.support_title')}</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{t('donate.item_1')}</li>
                  <li>{t('donate.item_2')}</li>
                  <li>{t('donate.item_3')}</li>
                  <li>{t('donate.item_4')}</li>
                  <li>{t('donate.item_5')}</li>
                </ul>
              </div>

              <p>{t('donate.outro_1')}</p>
              <p>{t('donate.outro_2')}</p>

              <div className="pt-4 text-center">
                <a
                  href={t('donate.link')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary bg-primary text-white hover:opacity-90 px-8 py-3 rounded-lg font-semibold"
                >
                  {t('donate.button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-background">
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

              <div className="mt-8 text-sm text-foreground/75 space-y-2">
                <p>
                  <span className="font-semibold">{t('contact.email_label')}:</span>{' '}
                  {t('contact.email')}
                </p>
                <p>
                  <span className="font-semibold">{t('contact.whatsapp_label')}:</span>{' '}
                  {t('contact.whatsapp')}
                </p>
                <p>{t('contact.location')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/images/La-Colectiva-Logo-Nuevo-Curvas.webp"
                alt={t('footer.brand_title')}
                className="h-16 w-auto mb-4"
              />
              <p className="text-sm opacity-90">
                {t('footer.brand_text')}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('footer.projects_title')}</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li>{t('footer.project_1')}</li>
                <li>{t('footer.project_2')}</li>
                <li>{t('footer.project_3')}</li>
                <li>{t('footer.project_4')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('footer.contact_title')}</h4>
              <p className="text-sm opacity-90">
                {t('contact.email_label')}: {t('contact.email')}
                <br />
                {t('contact.whatsapp_label')}: {t('contact.whatsapp')}
                <br />
                {t('contact.location')}
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}