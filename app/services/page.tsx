"use client";

import React from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  BarChart3, 
  Code, 
  Database, 
  TrendingUp, 
  FileText, 
  Cloud,
  Shield,
  Zap,
  Target,
  BarChart2
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Data Analytics & Business Intelligence",
    description: "Transform your raw data into actionable insights with advanced analytics and comprehensive business intelligence solutions.",
    icon: <BarChart3 className="w-8 h-8" />,
    features: [
      "Custom dashboard development",
      "Predictive analytics and forecasting",
      "Data visualization and reporting",
      "KPI tracking and performance metrics",
      "Real-time data monitoring",
      "Statistical analysis and modeling"
    ],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900"
  },
  {
    title: "Software Development",
    description: "Build scalable, modern software solutions tailored to your business needs with cutting-edge technology.",
    icon: <Code className="w-8 h-8" />,
    features: [
      "Full-stack web applications",
      "API development and integration",
      "Cloud-native solutions",
      "Microservices architecture",
      "Mobile-responsive design",
      "Legacy system modernization"
    ],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900"
  },
  {
    title: "Data Engineering & ETL",
    description: "Design and implement robust data pipelines to ensure reliable data flow and processing across your organization.",
    icon: <Database className="w-8 h-8" />,
    features: [
      "ETL/ELT pipeline development",
      "Data warehousing solutions",
      "Data quality and validation",
      "Automated data processing",
      "Data integration services",
      "Big data processing"
    ],
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900"
  },
  {
    title: "Business Intelligence Consulting",
    description: "Strategic guidance to help you leverage data effectively and make informed business decisions.",
    icon: <Target className="w-8 h-8" />,
    features: [
      "Data strategy development",
      "Analytics roadmap planning",
      "Tool selection and implementation",
      "Team training and enablement",
      "Best practices and governance",
      "Performance optimization"
    ],
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900"
  },
  {
    title: "Data Visualization",
    description: "Create compelling, interactive visualizations that make complex data easy to understand and act upon.",
    icon: <BarChart2 className="w-8 h-8" />,
    features: [
      "Interactive dashboards",
      "Custom chart development",
      "Report automation",
      "Data storytelling",
      "Executive summaries",
      "Self-service analytics"
    ],
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900"
  },
  {
    title: "Cloud Solutions",
    description: "Leverage cloud infrastructure for scalable, cost-effective data and software solutions.",
    icon: <Cloud className="w-8 h-8" />,
    features: [
      "Cloud migration services",
      "AWS/Azure/GCP implementation",
      "Serverless architecture",
      "Container orchestration",
      "Cloud data storage",
      "Scalable infrastructure"
    ],
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-100 dark:bg-cyan-900"
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <Card className="h-full border-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
          <div className={service.color}>
            {service.icon}
          </div>
        </div>
        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
              <Zap className={`w-5 h-5 ${service.color} mr-2 mt-0.5 flex-shrink-0`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default function Services() {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Comprehensive data analytics and software development solutions designed to drive your business forward
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            From data strategy to custom software development, we provide end-to-end solutions tailored to your unique needs
          </p>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 rounded-2xl my-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven methodology for delivering successful projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Discovery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Understanding your business needs and objectives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Planning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Designing a strategic solution tailored to your goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building and implementing with agile methodologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Optimization</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Continuous improvement and performance monitoring
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how we can help transform your data and build innovative solutions for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

