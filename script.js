/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Amadou',
  lastName: 'Sow',
  jobTitle: "Recherche d'Alternance en informatique décisionels",
  city: 'Épinal',
  country: 'France',
  phone: '+33781965497',
  email: 'madousow88@gmail.com',
  education: [
    {
      school: 'IUT Saint Die Des Vosges',
      degree: 'Diplome',
      graduationDate: '2024',
      description: 'BUT Informatique'
    },
     {
      school: 'Lycee Pierre Mendes France',
      degree: 'Lycee',
      graduationDate: '2020',
      description: "Bac S, Science de L'ingénieur"
    }
  ],
  links: [
      {
      label: 'GitHub',
      link: 'https://github.com/akumq'
    },
    {
      label : 'Linkedin',
      link : 'https://www.linkedin.com/in/amadou-sow-861765212/'
    }
    // {
    //   label : 'Portafolio',
    //   link : 'https://cv-portafolioakc.netlify.app'
    // }
  ],
  skills: [   
    'C# / net / ASP NET',
    'C / C++',
    'Lua',
    'Vulkan / OpenGL',
    'PHP',
    'Java', 
    'Node',
    'SQL',
    'GIT',
    'Docker',
    'API-REST'
  ],
  languages: ['Francais: Native','Anglais: Toeic 870 / 990'],
  professionalSummary: `je suis passionné par le digital. Grâce à mon parcours scolaire, j'ai acquis des compétences solides en algorithmique en gestion de projet et en anglais. Mon expérience en alternance m'a permis de mettre en pratique mes connaissances théoriques et de travailler efficacement en équipe. Je vise à créer des solutions innovantes et à contribuer activement à la réussite des projets en maîtrisant de nombreuses technologies différentes.`,
  employmentHistory: [
    {
      jobTitle: 'Alternant Développeur Junior',
      startDate: 'Septembre 2022',
      endDate: 'Août 2024',
      employer: 'Prefabat',
      city: 'Le Kertoff',
      achievements: [
        "Dévellopement .NET",
        "C#, ASP, VB",
        "Gestion de Projet",
        "Gestion de Base de donnée",
        "SQL SERVER, UML, Modélisation",
        "Création de Module Wordpress",
        "Microsoft Dynamics NAV"
      ]
    },
    {
      jobTitle: 'Agent de quai manutentionnaire',
      endDate: 'été 2021',
      employer: 'GLS France HUB',
      city: 'Île De France',
      achievements: [
        "Déchargement de camions",
        "pose des colis sur une chaine de tri",
        "Divers travaux de manutention"
      ]
    },
    {
      jobTitle: 'Stage de Troisième',
      employer: 'CAF Vosges',
      city: 'Epinal',
      achievements: [
        "Maintenance informatique",
        "Veille informatique ",
        "Installation et configuration de poste de travail"
      ]
    },
  ],
  certificatesHistory: [
    {
      jobTitle: 'BUT Informatique',
      startDate: '2024',
      endDate: '',
      employer: '',
      achievements: [
        'IUT de Saint-Die-Des-Vosges ',
      ]
    },
    {
      jobTitle: 'TOIEC (Test of English for International Communication)',
      startDate: '2024',
      endDate: '',
      employer: '',
      achievements: [
        'Score: 870/990',
      ]
    },
    {
      jobTitle: "Baccalauréat Scientifique| Science de l'ingénieur",
      startDate: '2021',
      endDate: '',
      employer: '',
      achievements: [
        'Lycée Pierre Mendes France | Epinal ',
      ]
    }
  ],
  passions: [
    {
      name: "Digital",
      content: "Je suis depuis très jeune passionné par le digital. Je suis de la génération qui est née avec un smartphone dans les mains et depuis lors, je ne cesse de m'intéresser à ce domaine qui sera une pierre angulaire au futur de l'humanité."
    },
    {
      name: "Jeux Vidéo",
      content: "J'utilise autant les jeux vidéo dans un aspect ludique, mais également en tant que développeur, ça m'a permis de toucher à de nombreux domaines différents, aussi bien dans l'imagerie numérique, en UI/UX, en modélisation 3D, etc. C'est un domaine pluridisciplinaire que j'affectionne."
    }
  ],
  photo: '',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()
