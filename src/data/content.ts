export interface Project {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  logo?: string;
}

export interface ProfessionalProject {
  company: string;
  companyUrl?: string;
  role: string;
  description: string;
  technologies?: string[];
}

export interface BioSection {
  title: string;
  icon: string;
  content: string;
}

export interface AboutContent {
  sections: BioSection[];
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
  };
}

export const projects: Project[] = [
  {
    name: 'PadelBoy',
    description: 'Organize and manage Padel tournaments with ease. Features two tournament formats (Americano & Mexicano), automatic match generation, smart scheduling for multiple courts, and historical player statistics. Works offline in your browser, no registration required.',
    url: 'https://padelboy.darikcube.com/',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'IndexedDB'],
    logo: '/padel-icon.svg'
  },
  {
    name: 'Coop',
    description: 'Application for Energy cooperatives. Analyzes energy flows and allows fair distribution of both energy and finances between cooperative members.',
    url: '',
    technologies: ['React', 'MUI', 'Vite', 'MySQL', 'Spring Boot'],
    logo: '/coop.svg'
  }
];

export const professionalProjects: ProfessionalProject[] = [
  {
    company: 'Stats Perform',
    companyUrl: 'https://www.statsperform.com/opta-stream/',
    role: 'Senior Engineer & Team Leader',
    description: 'Led development of automatically generated sport commentaries for Opta Stream and Opta Live platforms. Managed team and architected real-time sports data processing systems.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    company: 'Flex',
    companyUrl: 'https://flex.com/',
    role: 'Full Stack Engineer',
    description: 'Developed internal tool for Bill of Materials (BOM) optimization, helping factory engineers and procurement teams make data-driven decisions and conduct informed negotiations.',
    technologies: ['React', 'TypeScript', 'Python', 'Django', 'PostgreSQL']
  },
  {
    company: 'Thomson Reuters',
    companyUrl: 'https://www.thomsonreuters.com/',
    role: 'Software Engineer',
    description: 'Built automated data collection systems for energy market analysis and reporting.',
    technologies: ['Python', 'SQL Server', 'REST APIs', 'Azure']
  },
  {
    company: 'Asseco',
    companyUrl: 'https://www.gov.pl/web/popcwsparcie/p1-elektroniczna-platforma-gromadzenia-analizy-i-udostepniania-zasobow-cyfrowych-o-zdarzeniach-medycznych',
    role: 'Software QA Engineer',
    description: 'Quality assurance for P1 project, a multi-company government initiative to centralize and digitalize healthcare systems in Poland.',
    technologies: ['Java', 'Selenium', 'JUnit', 'JIRA', 'SQL']
  }
];

export const aboutContent: AboutContent = {
  sections: [
    {
      title: 'Software Engineering Journey',
      icon: 'FiCode',
      content: 'With over a decade in software engineering, I\'ve had the privilege of working on diverse projects spanning multiple technologies and industries. From startups to enterprise solutions, I\'ve built scalable applications that solve real-world problems and deliver exceptional user experiences.'
    },
    {
      title: 'Mathematical Background',
      icon: 'FiTrendingUp',
      content: 'My journey into tech was shaped by my background in mathematics, which gave me a unique perspective on problem-solving and system design. This foundation helps me approach complex challenges with analytical thinking and elegant solutions.'
    },
    {
      title: 'Sports & Padel',
      icon: 'FiActivity',
      content: 'Beyond coding, I\'m passionate about sports—I\'ve explored various disciplines over the years, and my latest love is Padel. This passion led me to create PadelBoy, combining my love for technology and sport to help the padel community organize better tournaments.'
    },
    {
      title: 'Family Life',
      icon: 'FiHeart',
      content: 'When I\'m not building software or on the court, I\'m enjoying life as a proud father of three. Being a parent keeps me grounded, constantly learning, and reminds me of the importance of creating technology that makes life better for everyone.'
    }
  ],
  contact: {
    email: 'witowski.dar@gmail.com',
    github: 'https://github.com/DarBrick',
    linkedin: 'https://www.linkedin.com/in/dariusz-witowski-439b76113'
  }
};
