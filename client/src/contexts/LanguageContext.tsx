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
    'nav.mission': 'Propósito · Visión · Misión',
    'nav.organization': '¿Cómo nos organizamos?',
    'nav.units': 'Unidades del Colectivo',
    'nav.territory': 'Territorio',
    'nav.contact': 'Contacto',
    
    // Home
    'home.title': 'Asociación Colectiva Valle Machuca',
    'home.subtitle': 'Plataforma de gobernanza y regeneración territorial',
    'home.value_prop': 'Articulamos y fortalecemos iniciativas colectivas que impulsan la regeneración socioambiental de la biorregión, promoviendo el bien común.',
    'home.context': 'Valle Machuca enfrenta desafíos de fragmentación territorial, presión ambiental y desconexión entre iniciativas locales. La Asociación Colectiva actúa como una plataforma de gobernanza que integra esfuerzos, redistribuye recursos y promueve la regeneración integral del territorio.',
    'home.umbrella': 'Asociación Colectiva Valle Machuca',
    'home.umbrella_desc': 'Plataforma de gobernanza territorial',
    'home.cta_model': 'Conocer el modelo',
    'home.cta_initiatives': 'Iniciativas',
    'home.cta_contact': 'Contacto',
    
    // About
    'about.title': '¿Quiénes somos?',
    'about.intro': 'Somos una entidad colectiva sin fines de lucro, con estructura asociativa y colaborativa, orientada a la gestión y regeneración socioambiental en la biorregión de Valle Machuca.',
    'about.mission_text': '',
    'about.role': '',
    
    // Purpose, Vision, Mission
    'pvm.title': 'Propósito · Visión · Misión',
    'pvm.purpose_title': 'Propósito',
    'pvm.purpose': 'Gestionar recursos, coordinar, supervisar proyectos, e impulsar iniciativas territoriales para el bien común y la regeneración socioambiental.',
    'pvm.vision_title': 'Visión',
    'pvm.vision': 'Una biorregión regenerada, con gobernanza integrada, en armonía con la naturaleza y las comunidades.',
    'pvm.mission_title': 'Misión',
    'pvm.mission': 'Consolidar un modelo de gestión territorial regenerativa basado en colaboración, transparencia, equidad y autosuficiencia',
    
    // Organization
    'org.title': '¿Cómo nos organizamos?',
    'org.intro': 'La Asociación Colectiva funciona a través de tres círculos internos que garantizan transparencia, participación y corresponsabilidad:',
    'org.ctr': 'Círculo Tejido Red',
    'org.ctr_desc': 'Coordina y ejecuta proyectos alineados con la visión colectiva.',
    'org.cf': 'Círculo Finanzas',
    'org.cf_desc': 'Administra, recibe y distribuye fondos con auditoría participativa.',
    'org.cs': 'Círculo Saberes',
    'org.cs_desc': 'Media ante conflictos, trae una visión mayor y aporta consejo para el bien mayor.',
    'org.principles': '',
    
    // Units
    'units.title': 'Unidades del Colectivo',
    'units.intro': 'La Asociación Colectiva integra cuatro unidades de negocio colectivo, con capacidad de expandirse a nuevos proyectos según las necesidades del territorio:',
    
    'units.mdlt.title': 'Mercado de la Tierra',
    'units.mdlt.desc': 'Espacio de comercialización agroecológica y regenerativa, intercambio cultural y dinamización local. Opera de forma continua fortaleciendo los circuitos cortos de producción y consumo.',
    
    'units.rcu.title': 'Red Colaborativa Ubuntu',
    'units.rcu.desc': 'Planta de procesamiento de alimentos y subproductos de los productos orgánicos comercializados en el MDLT o de los productores locales y asociados. Impulsa la innovación y desarrollo de productos locales con valor agregado, prolongando su vida útil y aportando alto valor nutricional.',
    
    'units.ehvm.title': 'Salud Holística',
    'units.ehvm.desc': 'Iniciativa dedicada al fomento, cuidado y restauración de la salud y bienestar individual y colectivo. Comprende desarrollo personal, espiritual y sanación mediante charlas, información, en el espacio comunitario del MDLT, oferta de terapias complementarias y productos medicinales naturales, y eventualmente un espacio físico diseñado para este fin.',
    
    'units.prmrm.title': 'Proyecto de Regeneración de la Subcuenca del Río Machuca',
    'units.prmrm.desc': 'Iniciativa Comunitaria para la Gestión del Agua, Territorio y Producción Regenerativa en la Microcuenca del Río Machuca, Cuenca Río Jesús María, orientada a fortalecer la protección del recurso hídrico, la biodiversidad y los medios de vida locales mediante una gestión integrada y corresponsable entre actores comunitarios, productivos e institucionales en este territorio.',
    
    // Territory
    'territory.title': 'Territorio: Microcuenca Río Machuca',
    'territory.intro': 'Valle Machuca es una biorregión de excepcional biodiversidad y riqueza hídrica en Costa Rica. Su microcuenca es vital para la región, albergando ecosistemas únicos y comunidades que dependen de sus recursos.',
    'territory.water': 'El agua es el corazón del territorio. El Río Machuca y sus afluentes sustentan la biodiversidad, la agricultura regenerativa y el bienestar de las comunidades.',
    'territory.soil': 'Los suelos de Valle Machuca poseen potencial regenerativo excepcional. Nuestro trabajo busca restaurar su fertilidad y capacidad de captura de carbono.',
    'territory.biodiversity': 'La biodiversidad del territorio es irreemplazable. Proteger y restaurar los ecosistemas es central para la resiliencia de la región frente al cambio climático.',
    'territory.allied_orgs': 'Organizaciones Aliadas',
    
    // Contact
    'contact.title': '¿Quieres ser parte de la ACVM?',
    'contact.intro': 'Queremos conocerte. Si te interesa colaborar o sumarte a nuestra iniciativa, te invitamos a llenar el formulario',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.phone': 'Teléfono',
    'contact.interest': 'Área de interés',
    'contact.interest_funding': 'Financiamiento',
    'contact.interest_collaboration': 'Colaboración',
    'contact.interest_partnership': 'Alianza',
    'contact.interest_other': 'Otro',
    'contact.form_button': 'Completa el formulario',
    'contact.form_link': 'https://tally.so/r/zxqzlq',
    
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
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.mission': 'Purpose · Vision · Mission',
    'nav.organization': 'How We Organize',
    'nav.units': 'Collective Units',
    'nav.territory': 'Territory',
    'nav.contact': 'Contact',
    
    // Home
    'home.title': 'Asociación Colectiva Valle Machuca',
    'home.subtitle': 'Platform for territorial governance and regeneration',
    'home.value_prop': 'We articulate and strengthen collective initiatives that drive socio-environmental regeneration of the bioregion, promoting the common good.',
    'home.context': 'Valle Machuca faces challenges of territorial fragmentation, environmental pressure, and disconnection between local initiatives. The Collective Association acts as a governance platform that integrates efforts, redistributes resources, and promotes comprehensive territorial regeneration.',
    'home.umbrella': 'Asociación Colectiva Valle Machuca',
    'home.umbrella_desc': 'Territorial governance platform',
    'home.cta_model': 'Learn the model',
    'home.cta_initiatives': 'Initiatives',
    'home.cta_contact': 'Contact',
    
    // About
    'about.title': 'About Us',
    'about.intro': 'We are a non-profit collective entity with an associative and collaborative structure, oriented toward socio-environmental management and regeneration in the Valle Machuca bioregion.',
    'about.mission_text': '',
    'about.role': '',
    
    // Purpose, Vision, Mission
    'pvm.title': 'Purpose · Vision · Mission',
    'pvm.purpose_title': 'Purpose',
    'pvm.purpose': 'To manage resources, coordinate, supervise projects, and drive territorial initiatives for the common good and socio-environmental regeneration.',
    'pvm.vision_title': 'Vision',
    'pvm.vision': 'A regenerated bioregion with integrated governance, in harmony with nature and communities.',
    'pvm.mission_title': 'Mission',
    'pvm.mission': 'To consolidate a model of regenerative territorial management based on collaboration, transparency, equity, and self-sufficiency',
    
    // Organization
    'org.title': 'How We Organize',
    'org.intro': 'The Collective Association functions through three internal circles that ensure transparency, participation, and shared responsibility:',
    'org.ctr': 'Tejido Red Circle',
    'org.ctr_desc': 'Coordinates and executes projects aligned with the collective vision.',
    'org.cf': 'Finance Circle',
    'org.cf_desc': 'Administers, receives, and distributes funds with participatory audit.',
    'org.cs': 'Knowledge Circle',
    'org.cs_desc': 'Mediates conflicts, brings a greater vision, and provides counsel for the greater good.',
    'org.principles': '',
    
    // Units
    'units.title': 'Collective Units',
    'units.intro': 'The Collective Association integrates four collective business units, with capacity to expand to new projects according to territorial needs:',
    
    'units.mdlt.title': 'Mercado de la Tierra (Earth Market)',
    'units.mdlt.desc': 'Space for agroecological and regenerative commercialization, cultural exchange, and local dynamization. Operates continuously strengthening short production and consumption circuits.',
    
    'units.rcu.title': 'Red Colaborativa Ubuntu (Ubuntu Collaborative Network)',
    'units.rcu.desc': 'Food processing plant and by-products of organic products commercialized in the MDLT or from local and associated producers. Drives innovation and development of local products with added value, extending their shelf life and providing high nutritional value.',
    
    'units.ehvm.title': 'Salud Holística (Holistic Health)',
    'units.ehvm.desc': 'Initiative dedicated to promoting, caring for, and restoring individual and collective health and well-being. Includes personal development, spiritual work, and healing through talks, information, in the MDLT community space, offering complementary therapies and natural medicinal products, and eventually a physical space designed for this purpose.',
    
    'units.prmrm.title': 'Proyecto de Regeneración de la Subcuenca del Río Machuca (Watershed Regeneration Project)',
    'units.prmrm.desc': 'Community Initiative for Water Management, Territory and Regenerative Production in the Río Machuca Microwatershed, Río Jesús María Watershed, aimed at strengthening the protection of water resources, biodiversity, and local livelihoods through integrated and shared responsibility management among community, productive, and institutional actors in this territory.',
    
    // Territory
    'territory.title': 'Territory: Río Machuca Watershed',
    'territory.intro': 'Valle Machuca is a bioregion of exceptional biodiversity and water richness in Costa Rica. Its watershed is vital for the region, harboring unique ecosystems and communities that depend on its resources.',
    'territory.water': 'Water is the heart of the territory. The Río Machuca and its tributaries sustain biodiversity, regenerative agriculture, and community well-being.',
    'territory.soil': 'The soils of Valle Machuca have exceptional regenerative potential. Our work seeks to restore their fertility and carbon capture capacity.',
    'territory.biodiversity': 'The territory\'s biodiversity is irreplaceable. Protecting and restoring ecosystems is central to regional resilience in the face of climate change.',
    'territory.allied_orgs': 'Allied Organizations',
    
    // Contact
    'contact.title': 'Want to be part of ACVM?',
    'contact.intro': 'We want to know you. If you are interested in collaborating or joining our initiative, we invite you to fill out the form',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.phone': 'Phone',
    'contact.interest': 'Area of Interest',
    'contact.interest_funding': 'Funding',
    'contact.interest_collaboration': 'Collaboration',
    'contact.interest_partnership': 'Partnership',
    'contact.interest_other': 'Other',
    'contact.form_button': 'Fill out the form',
    'contact.form_link': 'https://tally.so/r/aQ606W',
    
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
