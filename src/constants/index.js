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
  merkelrex,
  portfolio,
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
  // {
  //   name: 'html',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
  // },
  // {
  //   name: 'css',
  //   icon: css,
  // },
  // {
  //   name: 'javascript',
  //   icon: javascript,
  // },
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
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  },
  {
    name: 'unity',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg',
  },
  {
    name: 'gitlab',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain-wordmark.svg',
  },
  {
    name: 'jupyter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg',
  },
  {
    name: 'github',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
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
    // demo: 'https://github.com/Iatisamnawaz/Simple-Restful-API',
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
    // demo: 'https://github.com/Iatisamnawaz/Simple-Restful-API',
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
  {
    id: 'project-9',
    name: 'Merkelrex-Exchange',
    description: 'A crypto trading bot that predicts and gives a signal to buy and sell bitcoin using csv data input.',
    languages: 'C++',
    category: 'Data Analysis',

    tags: [
      {
        name: 'C++',
      },
    ],
    image: merkelrex,
    repo: 'https://github.com/Iatisamnawaz/Merkelrex-Exchange',
  },
  {
    id: 'project-10',
    name: 'Portfolio Website',
    languages: 'Reactjs',
    category: 'Data Analysis',

    tags: [
      {
        name: 'reactjs',
      },
      {
        name: 'tailwindCSS',
      },
      {
        name: 'Threejs',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/Iatisamnawaz/Merkelrex-Exchange',
  },

];

export { services, technologies, experiences, projects };
