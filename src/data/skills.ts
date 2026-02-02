type Skill = {
  name: string;
  icon: string;
  href: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "DevOps",
    skills: [
      { name: "Linux", icon: "/linux.svg", href: "https://www.linux.org/" },
      { name: "Docker", icon: "/docker.svg", href: "https://www.docker.com/" },
      { name: "Jenkins", icon: "/jenkins.svg", href: "https://www.jenkins.io/" },
      {
        name: "Mongoose",
        icon: "/mongoose.svg",
        href: "https://mongoosejs.com/",
      },
      { name: "Git", icon: "/git.svg", href: "https://git-scm.com/" },
    ],
  },
  {
    title: "DataBase",
    skills: [
      {
        name: "MongoDB",
        icon: "/mongodb.svg",
        href: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        icon: "/postgresql.svg",
        href: "https://www.postgresql.org/",
      },
      {
        name: "MySQL",
        icon: "/mysql.svg",
        href: "https://www.mysql.com/",
      },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: "/aws.svg", href: "https://aws.amazon.com/" },
      { name: "GCP", icon: "/gcp.svg", href: "https://cloud.google.com/" },
      { name: "Azure", icon: "/azure.svg", href: "https://azure.microsoft.com/" },
      { name: "Vercel", icon: "/favicon.ico", href: "https://vercel.com/" },
    ]
  }
];
