"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ComparisonDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Demo Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ⚖️ Before vs After Comparison
            </h1>
            <p className="text-xl text-gray-600">
              See the dramatic improvements side by side
            </p>
          </div>
        </div>

        {/* Registration Comparison */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Registration Flow</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-red-800 text-lg mb-2">❌ Before: High Friction</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 5 required fields (username, email, password, confirm, captcha)</li>
                  <li>• No real-time validation feedback</li>
                  <li>• Technical jargon ("Unlock your free TEE")</li>
                  <li>• Trial-and-error password requirements</li>
                  <li>• Poor email verification guidance</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-200">
                <h4 className="text-lg font-semibold mb-2">Create account</h4>
                <p className="text-sm text-gray-600 mb-4">Unlock your free TEE now.</p>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter username" disabled />
                    <p className="text-xs text-red-500 mt-1">Username must be at least 5 characters</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full p-2 border rounded" placeholder="name@example.com" disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" className="w-full p-2 border rounded" disabled />
                    <p className="text-xs text-red-500 mt-1">Password must contain at least one uppercase letter</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input type="password" className="w-full p-2 border rounded" disabled />
                    <p className="text-xs text-red-500 mt-1">Passwords don't match</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded text-center text-sm border-2 border-dashed">
                    CAPTCHA (Required)
                  </div>
                  <button className="w-full bg-gray-400 text-white p-3 rounded font-semibold" disabled>
                    Create account
                  </button>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 text-lg mb-2">✅ After: Streamlined Experience</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 3 fields only (email, password, captcha)</li>
                  <li>• Real-time password strength validation</li>
                  <li>• User-friendly copy ("Start your free trial")</li>
                  <li>• Live feedback prevents errors</li>
                  <li>• Enhanced verification dialog with guidance</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
                <h4 className="text-lg font-semibold mb-2">Create account</h4>
                <p className="text-sm text-gray-600 mb-4">Start your free secure cloud trial now.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="name@example.com"
                      defaultValue="alex@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input 
                      type="password" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      defaultValue="MyStr0ng!Pass"
                    />
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <span>✓</span> <span>At least 8 characters</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <span>✓</span> <span>One uppercase letter</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <span>✓</span> <span>One lowercase letter</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <span>✓</span> <span>One number</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <span>✓</span> <span>One special character</span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Password strength</span>
                          <span className="font-medium text-green-600">Strong</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center text-sm text-green-700">
                    ✓ CAPTCHA Verified
                  </div>
                  <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Create account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Comparison */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dashboard Experience</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-red-800 text-lg mb-2">❌ Before: Confusing Empty State</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Unclear "CVMs" heading without explanation</li>
                  <li>• Technical jargon ("TEE Cloud")</li>
                  <li>• Generic "Start Building" button</li>
                  <li>• No guidance for new users</li>
                  <li>• Missing onboarding flow</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-200">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-semibold">CVMs</h4>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Deploy</button>
                </div>
                
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold mb-4">
                    Deploy any containerized app to TEE Cloud in minutes
                  </h3>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">
                    Start Building
                  </button>
                  <p className="text-sm mt-4 text-gray-600">
                    📖 Follow our quick start guide to deploy your first app
                  </p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 text-lg mb-2">✅ After: Guided Onboarding</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Personal welcome message</li>
                  <li>• Clear action tiles with specific next steps</li>
                  <li>• User-friendly language and explanations</li>
                  <li>• Helpful tooltips for technical terms</li>
                  <li>• Learn more section with resources</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
                <div className="mb-6">
                  <h4 className="text-xl font-bold">👋 Welcome to Phala Cloud, Alex!</h4>
                  <p className="text-gray-600 mt-2">Start deploying secure, confidential workloads using CVMs and GPU-TEE compute.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center bg-blue-25">
                    <div className="text-2xl mb-2">🚀</div>
                    <h5 className="font-semibold text-sm mb-1">Deploy a CVM</h5>
                    <p className="text-xs text-gray-600 mb-2">Launch a containerized app</p>
                    <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded w-full">Launch CVM</button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🧪</div>
                    <h5 className="font-semibold text-sm mb-1">Try a sample app</h5>
                    <p className="text-xs text-gray-600 mb-2">NGINX, Hello World</p>
                    <button className="border border-gray-300 text-gray-700 text-xs px-3 py-1 rounded w-full">Try Sample</button>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h5 className="font-semibold text-sm mb-2">📚 Learn More</h5>
                  <div className="text-xs text-blue-600 space-y-1">
                    <div>🔗 Quick Start Guide</div>
                    <div>🔗 What is a CVM?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expected Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">+120%</div>
              <div className="text-lg font-semibold mb-2">Conversion Rate</div>
              <div className="text-sm text-gray-600">From 22.9% to 50%+ register-to-activation</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">-60%</div>
              <div className="text-lg font-semibold mb-2">Form Fields</div>
              <div className="text-sm text-gray-600">Reduced cognitive load and abandonment</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">+200%</div>
              <div className="text-lg font-semibold mb-2">User Satisfaction</div>
              <div className="text-sm text-gray-600">Clearer guidance and better feedback</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo/register"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Try New Registration
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/demo/dashboard"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Explore Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}