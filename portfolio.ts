import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Vishnu Vardhan Sanikommu',
  title: "Hello all, I'm Vishnu Vardhan",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Ruby and Ruby on Rails",
  resumeLink:
    'https://drive.google.com/file/d/1T0tdoLrzuaRlR9HvM9JxGqFgEiY6xcEU/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'vardhan-saniko',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://portfoliomiwt.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/vishnu-vardhan-sanikommu-b8336792/',
  github: 'https://github.com/vardhan-saniko',
  instagram: 'https://www.instagram.com/vardhan054/',
  facebook: 'https://www.facebook.com/sanikommu.vishnuvardhan',
  twitter: 'https://twitter.com/svardhanvishnu',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Ruby',
          fontAwesomeClassName: 'vscode-icons:file-type-ruby',
        },
        {
          skillName: 'Ruby on Rails',
          fontAwesomeClassName: 'vscode-icons:file-type-rails',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
  {
    Stack: 'Frontend',
    progressPercentage: '50',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Arizona State University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'August 2021 - May 2023',
    desc: '',
    grade: 'Grade A-',
    descBullets: [
      'Graduate Research Assistant in Data Science and Analytics lab',
      'Software Developer in Digital Innovation Group',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Graduate Research Assistant',
    company: 'Data Science and Analytics Lab, ASU',
    companyLogo: '/img/icons/common/asu2.png',
    date: 'Jan 2023 – May 2023',
    desc: 'Worked as a full stack web developer to develop an end to end web application using Django and ReactJs and deploy in Nginx server. The application allows includes an interface using Django templates and Django dynamic routing to allow the admin to create multiple survey web pages and integrate the surveyed data to display on dashboard with user based authentication',
  },
  {
    role: 'Software Developer',
    company: 'Digital Innovation Group, ASU',
    companyLogo: '/img/icons/common/dgng5.png',
    date: 'Feb 2022 – May 2023',
    desc: 'I worked as a Java developer on a Citesphere App. Citesphere is a web application that can link to Zotero and allows you to manage your Zotero citations. I created API endpoints in Spring framework to query for various data from MangoDb.',
  },
  {
    role: 'Software Engineer',
    company: 'Zenefits',
    companyLogo: '/img/icons/common/zenefits.png',
    date: 'Mar 2019 - Aug 2021',
    desc: 'Worked as a software Engineer on PayConnect App in Zenefits. PayConnect integrates Zenefits payroll with third party payroll providers. Ex: ADP, Paychex, Gusto etc. Switched Gusto inegration from Web scraping to API using Oauth2 authentication.',
  },
  {
    role: 'Full Stack Developer',
    company: 'ReportGarden',
    companyLogo: '/img/icons/common/rg.png',
    date: 'Jun 2016 - Aug 2018',
    desc: "Worked on integrating various ad agencies with the reportgarden tool using API's. Technologies includes Ruby on Rails stack, ReactJs, JQuery",
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Image Recognition as a service',
    desc: 'A django based REST API elastic application to recognise the input image using a deep learning model. This app uses AWS resources and takes images from users and automatically scales in and scales out based on the request overload.',
    github: 'https://github.com/vardhan-saniko/ImageRecognitionIaaS',
    link: '',
  },
  {
    name: 'XV6 page fault handler',
    desc: 'Implemented page fault handler for on demand memory allocation for processes on page faults. FIFO page replacement algorithm is implemented to swap out pages to disk and then retrieve the pages from disk when needed.',
    github: 'https://github.com/vardhan-saniko/xv6_riscv',
  },
  {
    name: 'Network Analysis Website',
    desc: 'Developed a web application using the d3 JavaScript library to depict the network analysis of TechBridge surveyed data and deployed it in the Nginx server. This website helps stakeholders to visualize the survey data with option to filter, segregate by color and click to view immediate network connections.',
    github: '',
    link: 'https://drive.google.com/file/d/1BQkZyPLYytDmP9hRa6cB4iUHvVoUf3nG/view',
  },
  {
    name: 'Image Classifier',
    desc: "Implemented CNN architecture and trained data with Stochastic gradient descent for 20 epochs to attain image classification accuracy of 94% for SVHN dataset's testing data using TensorFlow’s Keras module.",
    github: 'https://github.com/vardhan-saniko/image_classifier_cnn',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Vishnu Vardhan',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Vishnu Vardhan',
  image: '',
  url: 'https://portfoliomiwt.vercel.app/',
  keywords: [
    'Vishnu',
    'Vishnu Vardhan',
    'vardhan054',
    'Portfolio',
    'Vishnu Portfolio ',
    'Vishnu Vardhan Portfolio',
  ],
};
