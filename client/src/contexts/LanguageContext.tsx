import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': '¿Quiénes somos?',
    'nav.mission': 'Visión · Misión',
    'nav.organization': '¿Cómo nos organizamos?',
    'nav.units': 'Proyectos',
    'nav.territory': 'Territorio',
    'nav.donate': 'Donar',
    'nav.contact': 'Contacto',

    // Home / Hero
    'home.title': 'La Colectiva',
    'home.subtitle': 'Colectiva que articula iniciativas comunitarias para cuidar y regenerar el territorio',
    'home.value_prop':
      'Coordinamos, acompañamos y captamos recursos para iniciativas colectivas que promueven el bien común y la regeneración socioambiental de la biorregión.',
    'home.cta_model': 'Nuestro Modelo',
    'home.cta_initiatives': 'Proyectos',

    // About
    'about.title': '¿Quiénes somos?',
    'about.subtitle': 'Nuestro Propósito',
    'about.intro':
      'Somos una asociación de mujeres al servicio del territorio de Valle Machuca. Reunimos voluntades y recursos para cuidar y regenerar la naturaleza, promover el bienestar y la integración entre comunidades, mientras honramos la cultura originaria.\n\nNuestra Colectiva es una organización sin fines de lucro que actúa a través de cuatro proyectos orientados al desarrollo regenerativo del Valle, y permanece abierta a impulsar nuevas iniciativas que compartan este propósito. Actualmente, los proyectos que la conforman son Mercado de la Tierra, Amigos del Río Machuca, Ubuntu y Salud Holística.\n\nCreemos que el desarrollo verdadero no extrae: escucha, reinvierte, restaura y conecta. Desde esta mirada, el territorio orienta al capital, poniéndolo al servicio de la vida.',

    // Vision / Mission
    'pvm.title': 'Visión · Misión',
    'pvm.vision_title': 'Visión',
    'pvm.vision':
      'La biorregión de Valle Machuca regenerada, donde naturaleza y comunidades florecen en equilibrio y colaboración.',
    'pvm.mission_title': 'Misión',
    'pvm.mission':
      'Consolidar un modelo colectivo para cuidar y regenerar el territorio, basado en colaboración, innovación, equidad, transparencia y soberanía.',

    // Organization
    'org.title': '¿Cómo nos organizamos?',
    'org.intro':
      'La Colectiva funciona a través de tres círculos internos que garantizan transparencia, participación y corresponsabilidad:',

    // Units / Projects
    'units.title': 'Proyectos de La Colectiva',
    'units.intro':
      'La Colectiva integra cuatro proyectos colectivos, con capacidad de expandirse a nuevas iniciativas según las necesidades del territorio:',

    'units.mdlt.title': 'Mercado de la Tierra',
    'units.mdlt.desc':
      'Un espacio donde productores y artesanos ofrecen alimentos y productos cultivados o elaborados de forma agroecológica y regenerativa. También es un lugar de encuentro con actividades y eventos culturales que fortalecen la economía del territorio, la conexión entre las comunidades y el bienestar integral.',

    'units.prmrm.title': 'Amigos del Río Machuca',
    'units.prmrm.subtitle': 'Regeneración de Cuencas',
    'units.prmrm.desc':
      'Una iniciativa comunitaria para cuidar el agua y el territorio en la microcuenca del Río Machuca, parte de la cuenca del Río Jesús María. Promueve la protección del río, la biodiversidad y los medios de vida locales mediante la colaboración entre comunidades, productores e instituciones.',

    'units.rcu.title': 'Ubuntu',
    'units.rcu.desc':
      'Una planta de procesamiento de alimentos que aprovecha excedentes del Mercado de la Tierra y de productores locales y asociados. A partir de ellos se desarrollan productos locales con valor agregado, prolongando su vida útil y aportando alto valor nutricional.',

    'units.ehvm.title': 'Salud Holística',
    'units.ehvm.desc':
      'Una iniciativa que promueve la salud y el bienestar individual y colectivo. Ofrece charlas, espacios de aprendizaje, terapias complementarias y productos medicinales naturales en el espacio comunitario del Mercado de la Tierra, con la intención de desarrollar en el futuro un espacio dedicado a estas prácticas.',

    // Territory
    'territory.title': 'Territorio: Microcuenca Río Machuca',
    'territory.intro':
      'Valle Machuca es una biorregión de excepcional biodiversidad y riqueza hídrica en Costa Rica. Su microcuenca es vital para la región, albergando ecosistemas únicos y comunidades que dependen de sus recursos.',
    'territory.water_label': 'Agua',
    'territory.water':
      'El agua es el corazón del territorio. El Río Machuca y sus afluentes sustentan la biodiversidad, la agricultura regenerativa y el bienestar de las comunidades.',
    'territory.soil_label': 'Suelos',
    'territory.soil':
      'Los suelos de Valle Machuca poseen potencial regenerativo excepcional. Nuestro trabajo busca restaurar su fertilidad y capacidad de captura de carbono.',
    'territory.biodiversity_label': 'Biodiversidad',
    'territory.biodiversity':
      'La biodiversidad del territorio es irreemplazable. Proteger y restaurar los ecosistemas es central para la resiliencia de la región frente al cambio climático.',
    'territory.allied_orgs': 'Organizaciones Aliadas',
    'territory.map_caption':
      'Mapa adaptado por Yam Aisner - Elaborado para Amigos Río Machuca en Febrero de 2024',

    // Values
    'values.title': 'Principios y Valores',
    'values.common_good': 'Bien común y propósito colectivo',
    'values.regeneration': 'Regeneración y equilibrio ecológico',
    'values.solidarity': 'Solidaridad y cooperación',
    'values.autonomy': 'Autonomía y autosuficiencia',
    'values.transparency': 'Transparencia y auditoría participativa',
    'values.equity': 'Equidad y respeto a la diversidad',
    'values.care': 'Cuidado y bienestar integral',
    'values.learning': 'Aprendizaje y evolución continua',
    'values.peace': 'Cultura de paz y corresponsabilidad',
    'values.reciprocity': 'Interdependencia y reciprocidad con la Tierra',

    // Donations
    'donate.title': 'Donaciones',
    'donate.intro_1': 'La Colectiva está en una etapa inicial de activación en el territorio.',
    'donate.intro_2':
      'Tu aporte nos permite sostener este proceso: organizarnos, levantar información y preparar acciones para una implementación responsable.',
    'donate.support_title': 'Con tu donación apoyás:',
    'donate.item_1': 'Monitoreo comunitario del Río Machuca',
    'donate.item_2': 'Formación de custodios del territorio',
    'donate.item_3': 'Acompañamiento a fincas en transición regenerativa',
    'donate.item_4': 'Espacios de articulación entre comunidad e instituciones',
    'donate.item_5': 'Desarrollo de herramientas y metodologías',
    'donate.outro_1':
      'Estamos construyendo las bases para acciones bien diseñadas y sostenibles.',
    'donate.outro_2':
      'Si deseás impulsar este proceso desde su inicio, puedes contribuir aquí.',
    'donate.button': 'Donar ahora',
    'donate.link': 'https://checkout.stripe.com/',

    // Contact
    'contact.title': '¿Quieres ser parte de La Colectiva?',
    'contact.intro':
      'Queremos conocerte. Si te interesa colaborar o sumarte a nuestra iniciativa, te invitamos a llenar el formulario',
    'contact.form_button': 'Completa el formulario',
    'contact.form_link': 'https://tally.so/r/zxqzlq',
    'contact.email_label': 'E-mail',
    'contact.email': 'colectivavallemachuca@gmail.com',
    'contact.whatsapp_label': 'Whatsapp',
    'contact.whatsapp': '+(506) 8645-3870',
    'contact.location': 'Valle Machuca, Costa Rica',

    // Footer
    'footer.brand_title': 'La Colectiva',
    'footer.brand_text':
      'Colectiva que articula iniciativas comunitarias para cuidar y regenerar el territorio.',
    'footer.projects_title': 'Proyectos',
    'footer.project_1': 'Mercado de la Tierra',
    'footer.project_2': 'Amigos del Río Machuca',
    'footer.project_3': 'Ubuntu',
    'footer.project_4': 'Salud Holística',
    'footer.contact_title': 'Contacto',
    'footer.copyright': '© 2026 La Colectiva. Todos los derechos reservados.',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.mission': 'Vision · Mission',
    'nav.organization': 'How We Work as a Collective',
    'nav.units': 'La Colectiva Projects',
    'nav.territory': 'Territory',
    'nav.donate': 'Donate',
    'nav.contact': 'Contact',

    // Home / Hero
    'home.title': 'La Colectiva',
    'home.subtitle':
      'A collective that connects community initiatives to care for and regenerate the territory.',
    'home.value_prop':
      'We coordinate, support, and receive funding for collective initiatives that promote the common good and the socio-environmental regeneration of the bioregion.',
    'home.cta_model': 'Our Model',
    'home.cta_initiatives': 'Projects',

    // About
    'about.title': 'About Us',
    'about.subtitle': 'Our Purpose',
    'about.intro':
      'We are a women-led association in service of the Valle Machuca territory. We bring together people, intention, and resources to care for and regenerate nature, promote wellbeing, and strengthen connection among communities, while honoring ancestral culture.\n\nOur Collective is a non-profit organization that operates through four projects oriented toward the regenerative development of the Valley, and remains open to supporting new initiatives that share this purpose. The projects that currently make up the Collective are Mercado de la Tierra, Amigos del Río Machuca, Ubuntu, and Salud Holística.\n\nWe believe that true development does not extract: it listens, reinvests, restores, and connects. From this perspective, the territory guides capital, placing it in service of life.',

    // Vision / Mission
    'pvm.title': 'Vision · Mission',
    'pvm.vision_title': 'Vision',
    'pvm.vision':
      'The Valle Machuca bioregion, regenerated; where nature and communities flourish in balance and collaboration.',
    'pvm.mission_title': 'Mission',
    'pvm.mission':
      'To build and strengthen a collective model that cares for and regenerates the territory, rooted in collaboration, innovation, equity, transparency, and sovereignty.',

    // Organization
    'org.title': 'How We Work as a Collective',
    'org.intro':
      'La Colectiva operates through three internal circles that ensure transparency, participation, and shared responsibility:',

    // Units / Projects
    'units.title': 'La Colectiva Projects',
    'units.intro':
      'La Colectiva brings together four collective projects, with the capacity to expand to new initiatives in response to territorial needs:',

    'units.mdlt.title': 'Mercado de la Tierra',
    'units.mdlt.desc':
      'A space where producers and artisans offer food and products grown or made through agroecological and regenerative practices. It also serves as a gathering place for cultural activities and events that strengthen the local economy, deepen connections among communities, and support overall wellbeing.',

    'units.prmrm.title': 'Amigos del Río Machuca',
    'units.prmrm.subtitle': 'Watershed Regeneration',
    'units.prmrm.desc':
      'A community initiative focused on caring for water and the territory within the Machuca River micro-watershed, part of the Jesús María River basin. It promotes the protection of the river, biodiversity, and local livelihoods through collaboration among communities, producers, and institutions.',

    'units.rcu.title': 'Ubuntu',
    'units.rcu.desc':
      'A food processing facility that uses surplus from the Mercado de la Tierra and from local and partner producers. The surplus is transformed into new local products, extending their shelf life while preserving their nutritional value.',

    'units.ehvm.title': 'Salud Holística',
    'units.ehvm.desc':
      'An initiative that supports individual and collective health and wellbeing. It offers talks, learning spaces, complementary therapies, and natural remedies at the Mercado de la Tierra community space. This initiative is gradually evolving into a dedicated space for these practices.',

    // Territory
    'territory.title': 'Territory: Río Machuca Watershed',
    'territory.intro':
      'Valle Machuca is a bioregion of exceptional biodiversity and water richness in Costa Rica. Its watershed is vital for the region, harboring unique ecosystems and communities that depend on its resources.',
    'territory.water_label': 'Water',
    'territory.water':
      'Water is the heart of the territory. The Río Machuca and its tributaries sustain biodiversity, regenerative agriculture, and community well-being.',
    'territory.soil_label': 'Soils',
    'territory.soil':
      'The soils of Valle Machuca have exceptional regenerative potential. Our work seeks to restore their fertility and carbon capture capacity.',
    'territory.biodiversity_label': 'Biodiversity',
    'territory.biodiversity':
      "The territory's biodiversity is irreplaceable. Protecting and restoring ecosystems is central to regional resilience in the face of climate change.",
    'territory.allied_orgs': 'Allied Organizations',
    'territory.map_caption':
      'Map adapted by Yam Aisner — created for Amigos del Río Machuca in February 2024.',

    // Values
    'values.title': 'Principles and Values',
    'values.common_good': 'Common good and collective purpose',
    'values.regeneration': 'Regeneration and ecological balance',
    'values.solidarity': 'Solidarity and cooperation',
    'values.autonomy': 'Autonomy and self-sufficiency',
    'values.transparency': 'Transparency and participatory audit',
    'values.equity': 'Equity and respect for diversity',
    'values.care': 'Care and integral well-being',
    'values.learning': 'Learning and continuous evolution',
    'values.peace': 'Culture of peace and shared responsibility',
    'values.reciprocity': 'Interdependence and reciprocity with the Earth',

    // Donations
    'donate.title': 'Donations',
    'donate.intro_1': 'La Colectiva is in an early stage of activation in the territory.',
    'donate.intro_2':
      'Your contribution helps sustain this process: organizing, gathering information, and preparing actions for responsible implementation.',
    'donate.support_title': 'With your donation, you support:',
    'donate.item_1': 'Community monitoring of the Machuca River',
    'donate.item_2': 'Training of territorial stewards',
    'donate.item_3': 'Support for farms transitioning to regenerative practices',
    'donate.item_4': 'Spaces for coordination between communities and institutions',
    'donate.item_5': 'Development of tools and methodologies',
    'donate.outro_1':
      'We are laying the foundations for well-designed and sustainable actions.',
    'donate.outro_2':
      'If you would like to support this process from the beginning, you can contribute here.',
    'donate.button': 'Donate now',
    'donate.link': 'https://checkout.stripe.com/',

    // Contact
    'contact.title': 'Want to be part of La Colectiva?',
    'contact.intro':
      'We want to know you. If you are interested in collaborating or joining our initiative, we invite you to fill out the form',
    'contact.form_button': 'Fill out the form',
    'contact.form_link': 'https://tally.so/r/aQ606W',
    'contact.email_label': 'E-mail',
    'contact.email': 'colectivavallemachuca@gmail.com',
    'contact.whatsapp_label': 'Whatsapp',
    'contact.whatsapp': '+(506) 8645-3870',
    'contact.location': 'Valle Machuca, Costa Rica',

    // Footer
    'footer.brand_title': 'La Colectiva',
    'footer.brand_text':
      'A collective that connects community initiatives to care for and regenerate the territory.',
    'footer.projects_title': 'Projects',
    'footer.project_1': 'Mercado de la Tierra',
    'footer.project_2': 'Amigos del Río Machuca',
    'footer.project_3': 'Ubuntu',
    'footer.project_4': 'Salud Holística',
    'footer.contact_title': 'Contact',
    'footer.copyright': '© 2026 La Colectiva. All rights reserved.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};