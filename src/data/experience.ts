export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "DevOps Engineer",
    company: "Anansi Techsol LLP",
    duration: "October 2025 - Present",
    description:
      "Leading scalable infrastructure and deployment workflows using DevOps best practices. Responsible for CI/CD pipelines, system reliability, cloud deployments, and mentoring interns on automation and operational excellence.",
  },
  {
    title: "Internship - DevOps Engineer",
    company: "Infydots Technologies",
    duration: "May 2025 - September 2025",
    description:
      "Contributed to backend infrastructure and platform engineering, focusing on performance optimization, secure service communication, monitoring, and scalable enterprise-grade systems.",
  },
  {
    title: "Trainee",
    company: "Divine ERP Solutions Pvt. Ltd.",
    duration: "October 2024 - April 2025",
    description:
      "Completed hands-on training in DevOps tools and cloud technologies, focusing on containerization with Docker, orchestration with Kubernetes, CI/CD using GitHub Actions/Jenkins, cloud services, and implementing secure authentication, networking, and infrastructure automation.",
  },
];
