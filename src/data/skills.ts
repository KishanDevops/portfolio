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
    title: "Core Stack",
    skills: [
      {
        name: "JavaScript",
        icon: "/javascript.svg",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "/typescript.svg",
        href: "https://www.typescriptlang.org/",
      },
      { name: "React", icon: "/react.svg", href: "https://react.dev/" },
      { name: "Next.js", icon: "/nextjs1.svg", href: "https://nextjs.org/" },
      { name: "Node.js", icon: "/nodejs.svg", href: "https://nodejs.org/en" },
      {
        name: "Express.js",
        icon: "/expressjs.svg",
        href: "https://expressjs.com/",
      },
      { name: "GraphQL", icon: "/graphql.svg", href: "https://graphql.org/" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Linux", icon: "/linux.svg", href: "https://www.linux.org/" },
      { name: "Docker", icon: "/docker.svg", href: "https://www.docker.com/" },
      { name: "Kubernetes", icon: "/kubernetes.svg", href: "https://kubernetes.io/" },
      { name: "Terraform", icon: "/terraform.svg", href: "https://developer.hashicorp.com/terraform" },
      { name: "Jenkins", icon: "/jenkins.svg", href: "https://www.jenkins.io/" },
      { name: "Ansible", icon: "/ansible.svg", href: "https://docs.ansible.com/projects/ansible/latest/index.html" },
      { name: "Grafana", icon: "/Grafana.svg", href: "https://grafana.com/" },
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
