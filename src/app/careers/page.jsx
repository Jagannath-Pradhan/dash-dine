'use client';

import { Briefcase, MapPin, Clock, DollarSign, Heart, Users, Zap, Coffee, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const benefits = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career paths and professional development opportunities'
    },
    {
      icon: Coffee,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible working arrangements'
    },
    {
      icon: Award,
      title: 'Performance Bonus',
      description: 'Competitive salary with performance-based incentives'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building activities and celebrations'
    },
    {
      icon: Zap,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and training'
    }
  ];

  const openings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Bhubaneswar, Odisha',
      type: 'Full-time',
      salary: '₹12-18 LPA',
      description: 'Build and maintain our platform using React, Node.js, and modern technologies.',
      requirements: ['3+ years experience', 'React & Node.js expertise', 'Strong problem-solving skills']
    },
    {
      id: 2,
      title: 'Delivery Operations Manager',
      department: 'Operations',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      salary: '₹8-12 LPA',
      description: 'Oversee delivery operations and optimize logistics for maximum efficiency.',
      requirements: ['2+ years in logistics', 'Team management experience', 'Data-driven mindset']
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      salary: '₹6-10 LPA',
      description: 'Create beautiful, intuitive experiences for our mobile and web platforms.',
      requirements: ['Strong portfolio', 'Figma proficiency', 'User research experience']
    },
    {
      id: 4,
      title: 'Customer Success Executive',
      department: 'Support',
      location: 'Delhi, NCR',
      type: 'Full-time',
      salary: '₹4-6 LPA',
      description: 'Help our customers have the best experience with DashDine.',
      requirements: ['Excellent communication', '1+ year experience', 'Problem-solving skills']
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      salary: '₹10-15 LPA',
      description: 'Lead marketing campaigns and grow our brand presence.',
      requirements: ['3+ years in marketing', 'Digital marketing expertise', 'Creative thinking']
    },
    {
      id: 6,
      title: 'Data Analyst',
      department: 'Engineering',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹7-11 LPA',
      description: 'Analyze data to drive business decisions and improve operations.',
      requirements: ['SQL & Python skills', 'Statistical analysis', 'Business acumen']
    }
  ];

  const departments = ['all', 'Engineering', 'Operations', 'Design', 'Support', 'Marketing'];

  const filteredOpenings = selectedDepartment === 'all' 
    ? openings 
    : openings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg md:text-xl mb-6">
              Help us deliver happiness to millions. Build your career with DashDine and be part of something amazing.
            </p>
            <div className="flex items-center space-x-4 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>200+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>6 Open Positions</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 opacity-10 text-white text-9xl">💼</div>
        <div className="absolute top-10 right-20 opacity-10 text-white text-7xl">🚀</div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why DashDine?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. Join a culture of innovation, growth, and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">Find your perfect role and start your journey with us</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Requirements:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-white text-lg mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Submit Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;