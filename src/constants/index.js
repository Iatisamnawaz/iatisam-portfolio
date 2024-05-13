import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  tensorflow,
  python,
  mysql,
  django,
  figma,
  docker,
  django_rest,
  jupyter,
  chash,
  gitlab,
  github,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  cplus,
  panda,
  movieapp,
  brainlink,
  ml_1,
  dataAnalysis,
  readnation,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'html',
    icon: html,
  },
  {
    name: 'css',
    icon: css,
  },
  {
    name: 'javascript',
    icon: javascript,
  },
  {
    name: 'reactjs',
    icon: reactjs,
  },
  {
    name: 'tailwind',
    icon: tailwind,
  },
  {
    name: 'nodejs',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'tensorflow',
    icon: tensorflow,
  },
  {
    name: 'djando',
    icon: django,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'cplus',
    icon: cplus,
  },
  {
    name: 'chash',
    icon: cplus,
  },
  {
    name: 'unity',
    icon: cplus,
  },
  {
    name: 'gitlab',
    icon: gitlab,
  },
  {
    name: 'jupyter',
    icon: jupyter,
  },
  {
    name: 'github',
    icon: github,
  },
];

const experiences = [
  {
    title: 'Startup CTO ( Part-Time )',
    company_name: 'Edulaxy',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2021 - Present',
  },
  {
    title: 'Technology Intern',
    company_name: 'Bright Network',
    icon: microverse,
    iconBg: '#333333',
    date: 'July 2023',
  },
  {
    title: 'Junior DevOps Engineer',
    company_name: 'Parkyeri',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2023 - Mar 2024',
  },

];

const projects = [

  {
    id: 'project-2',
    name: 'Hotel Data',
    description: 'An Exploratory data analysis on hotel reviews',
    languages: 'python, jupyter notebook',
    category: 'Data Analysis',

    tags: [
      {
        name: 'python',
      },
    ],
    image: dataAnalysis,
    repo: 'https://github.com/Iatisamnawaz/Hotel-Data-Analysis',
    demo: 'src/assets/demoProjects/hotelreviews.html',
  },
  {
    id: 'project-3',
    name: 'ReadNation',
    description: 'A simple Crud Application made on node js',
    languages: 'nodejs, mysql',
    category: 'Web Development',
    tags: [
      {
        name: 'python',
      },
      {
        name: 'mysql',
      },
      {
        name: 'html',
      },
      {
        name: 'css',
      },
      {
        name: 'bootstrap',
      },
    ],
    image: readnation,
    repo: 'https://github.com/Iatisamnawaz/readnation',
    demo: 'https://github.com/Iatisamnawaz/readnation',
  },
  {
    id: 'project-4',
    name: 'BrainLink',
    description: 'Social Media Application made on django',
    languages: 'python, mysql, html, bootstrap, reddis',
    category: 'Web Development',

    tags: [
      {
        name: 'python',
      },
      {
        name: 'mysql',
      },
      {
        name: 'html',
      },
      {
        name: 'css',
      },
      {
        name: 'bootstrap',
      },
    ],
    image: brainlink,
    repo: 'https://github.com/Iatisamnawaz/BrainLink',
    demo: 'https://iatisamnawaz.pythonanywhere.com/accounts/login/?next=/',
  },
  {
    id: 'project-5',
    name: 'Simple Rest Api',
    description: 'A rest API that takes csv data and displays it to the user',
    languages: 'python, postgres, html, bootstrap',
    category: 'Web Development',
    tags: [
      {
        name: 'python',
      },
      {
        name: 'mysql',
      },
      {
        name: 'html',
      },
      {
        name: 'css',
      },
      {
        name: 'bootstrap',
      },
    ],
    image: django_rest,
    repo: 'https://github.com/Iatisamnawaz/Simple-Restful-API',
    demo: 'https://github.com/Iatisamnawaz/Simple-Restful-API',
  },
  {
    id: 'project-6',
    name: 'Movie App',
    description: 'Movie App made on React Native cloning modern ott platform',
    languages: 'React Native',
    category: 'App Development',

    tags: [
      {
        name: 'react native',
      },
    ],
    image: movieapp,
    repo: 'https://github.com/Iatisamnawaz/Simple-Restful-API',
    demo: 'https://github.com/Iatisamnawaz/Simple-Restful-API',
  },
  {
    id: 'project-7',
    name: 'Potato Panda',
    description: 'A simple Crud Application made on node js',
    languages: 'JavaScript, P5.js',
    category: 'Games Development',

    tags: [
      {
        name: 'html',
      },
      {
        name: 'cs',
      },
      {
        name: 'javscript',
      },
      {
        name: 'p5.js',
      },
    ],
    image: panda,
    repo: 'https://github.com/Iatisamnawaz/readnation',
    demo: 'https://potatopanda.netlify.app/',
  },
  {
    id: 'project-8',
    name: 'Machine Learning',
    description: 'A machine learning project on comparing KNN and PCA using exploratory data analysis',
    languages: 'Python, Jupyter Notebook',
    category: 'Data Analysis',

    tags: [
      {
        name: 'python',
      },
      {
        name: 'tensorflow',
      },
    ],
    image: ml_1,
    repo: 'https://github.com/Iatisamnawaz/KNN-PCA',
    demo: 'src/assets/demoProjects/PCA.html',
  },

];

export { services, technologies, experiences, projects };
