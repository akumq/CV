/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Amadou',
  lastName: 'Sow',
  jobTitle: 'Développeur  en Alternance',
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
    }
    // {
    //   label : 'Linkedin',
    //   link : 'https://www.linkedin.com/in/alberto-rojas-caceres/'
    // },
    // {
    //   label : 'Portafolio',
    //   link : 'https://cv-portafolioakc.netlify.app'
    // }
  ],
  skills: [   
    'C# / net / ASP NET',
    'C / C++',
    'Lua',
    'Java', 
    'Node',
    'SQL',
    'GIT',
    'Docker',
    'API-REST'
  ],
  languages: ['Francais: Native','Anglais: Toeic 870'],
  professionalSummary: `Étudiant, je suis passionné par le développement d'applications et l'imagerie numérique. Grâce à mon parcours scolaire, j'ai acquis des compétences solides en algorithmique et en anglais. Mon expérience en alternance m'a permis de mettre en pratique mes connaissances théoriques et de travailler efficacement en équipe. Je vise à créer des solutions innovantes et à contribuer activement à la réussite des projets en maîtrisant de nombreuses technologies différentes.`,
  employmentHistory: [
    {
      jobTitle: 'Développeur Junior',
      startDate: 'Septembre 2022',
      endDate: 'Août 2024',
      employer: 'Prefabat',
      city: 'Le Kertoff',
      achievements: [
        "Diverses tâches de maintenance logicielle",
        "Réalisation de nouvelles solutions pour l'entreprise",
        "Gérer le déploiement d'une nouvelle solution au sein de l'entreprise."
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
        "Maintenance informatique" ,
        "Veille informatique ",
        "Installation et configuration de poste de travail "
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
        'IUT de Saint-Die-Des-Vosges',
      ]
    },
    {
      jobTitle: 'TOIEC',
      startDate: '2024',
      endDate: '',
      employer: '',
      achievements: [
        'Score: 870',
      ]
    },
    {
      jobTitle: "Baccalauréat Scientifique| Science de l'ingénieur",
      startDate: '2021',
      endDate: '',
      employer: '',
      achievements: [
        'Lycée Pierre Mendes France',
      ]
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
