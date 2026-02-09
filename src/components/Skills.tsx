"use client";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  Bell,
  Box,
  Cloud,
  ExternalLink,
  GitBranch,
  Grid,
  Settings,
  Shield,
  Layers,
} from "lucide-react";
import { skillGroups } from "@/data/skills";
import Link from "next/link";

const skills = [
  { title: "CI/CD Pipeline Design & Automation", icon: GitBranch },
  {
    title: "Infrastructure as Code (Terraform / CloudFormation)",
    icon: Layers,
  },
  { title: "Cloud Platforms (AWS / Azure / GCP)", icon: Cloud },
  { title: "Containerization (Docker)", icon: Box },
  { title: "Container Orchestration (Kubernetes)", icon: Grid },
  { title: "Monitoring & Observability", icon: Activity },
  { title: "Logging & Alerting", icon: Bell },
  { title: "Security & Compliance (DevSecOps)", icon: Shield },
  { title: "Configuration Management", icon: Settings },
  { title: "Incident Response & Root Cause Analysis", icon: AlertTriangle },
];

export default function Skills() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-16">
          {skillGroups.map((group) => (
            <div key={group.title} className="relative">
              <div className="absolute -left-1.75 top-2 h-3 w-3 rounded-full bg-primary"></div>

              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative group flex flex-col items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-3 group-hover:scale-110 transition"
                    />

                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {skill.name}
                    </p>

                    <Link
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group text-gray-500 hover:text-primary transition"
                      aria-label="Learn more"
                    >
                      <ExternalLink size={15} />
                      <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition rounded bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 shadow whitespace-nowrap">
                        Learn more
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          Soft Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />

                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                  {skill.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
