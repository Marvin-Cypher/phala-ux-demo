"use client";

import { useState } from "react";
import { ChevronRight, ArrowRight, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                🚀 UX Improvements Demo
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Phala Cloud
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Reimagined</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the dramatically improved user experience with simplified registration, 
              intuitive onboarding, and crystal-clear guidance that converts visitors into active users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/demo/register"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg group"
              >
                Try New Registration
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/demo/dashboard"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-white transition-colors font-semibold text-lg"
              >
                See New Dashboard
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">60% Less</div>
                <div className="text-gray-600">Form Fields</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Zap className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">Real-time</div>
                <div className="text-gray-600">Validation</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">Clear</div>
                <div className="text-gray-600">Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before vs After Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dramatic UX Improvements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've addressed every friction point identified in the UX audit to boost conversion rates and user satisfaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Problem Card */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="text-red-600 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  ❌
                </div>
                <h3 className="text-xl font-bold mb-2">Current Issues</h3>
              </div>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>22.9% register-to-activation rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Complex 5-field registration form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>No real-time password feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Technical jargon everywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Poor email verification UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>No guidance for new users</span>
                </li>
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 rounded-full p-4">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            {/* Solution Card */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="text-green-600 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-bold mb-2">Our Solutions</h3>
              </div>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Target 50%+ conversion rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Simplified 3-field registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Live password strength indicator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>User-friendly language + tooltips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Enhanced verification flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Welcome panel with clear CTAs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Links */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Try The Experience
            </h2>
            <p className="text-xl text-gray-600">
              Click through each improved flow to see the difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Registration Demo */}
            <Link href="/demo/register" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  New Registration
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience the simplified form with real-time password validation and better guidance.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Try it now
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Dashboard Demo */}
            <Link href="/demo/dashboard" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Enhanced Dashboard
                </h3>
                <p className="text-gray-600 mb-4">
                  See the welcome panel and quick action tiles that guide new users to success.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Explore dashboard
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Comparison Demo */}
            <Link href="/demo/comparison" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Before vs After
                </h3>
                <p className="text-gray-600 mb-4">
                  Side-by-side comparison showing the dramatic improvements in user experience.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                  Compare flows
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Team Feedback Section */}
      <div className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost Conversions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            These UX improvements are designed to dramatically increase our register-to-activation rate 
            and provide a delightful user experience that converts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo/register"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
            >
              Start Demo
            </Link>
            <a 
              href="https://github.com/yourusername/phala-ux-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
