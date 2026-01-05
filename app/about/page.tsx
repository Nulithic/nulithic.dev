import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Code, Target, Users, Zap, Award } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Nulithic
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Empowering businesses through data-driven insights and innovative software solutions
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  At Nulithic, we believe that data is the foundation of intelligent decision-making. Our mission is to help businesses unlock the full
                  potential of their data through advanced analytics, insightful visualizations, and custom software solutions.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  We specialize in transforming complex data into actionable insights and building scalable software that drives business growth. We work with
                  businesses across industries to modernize their data infrastructure and unlock new opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-12 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Specialized knowledge in data analytics and software development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Advanced statistical analysis, predictive modeling, and business intelligence to help you make data-driven decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Software Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Full-stack development expertise with modern frameworks and cloud technologies for scalable, maintainable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">Strategic Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Strategic guidance to help you leverage technology and data effectively for competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 px-4 bg-gray-100 dark:bg-gray-800 rounded-2xl my-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Staying at the forefront of technology and data science</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Delivering high-quality solutions that exceed expectations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Working closely with clients as trusted partners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Results-Driven</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Focused on delivering measurable business impact</p>
            </div>
          </div>
        </section>

        {/* Industry Focus Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Industry Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  As a data analyst and software development company, we understand the unique challenges facing businesses in today's data-driven economy. Our
                  expertise spans across industries, with particular focus on:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Consumer Electronics & Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span>E-commerce and Retail Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Business Intelligence and Reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-orange-600 dark:text-orange-400 font-bold">•</span>
                    <span>Custom Software Solutions</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
                  We're committed to helping businesses transform their data challenges into opportunities through innovative solutions and expert guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
