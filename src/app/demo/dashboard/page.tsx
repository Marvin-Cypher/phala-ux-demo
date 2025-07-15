"use client";

import { useState } from "react";
import { ArrowLeft, Rocket, CreditCard, Zap, TestTube, ExternalLink, BookOpen, MessageSquare, HelpCircle, Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardDemo() {
  const [activeView, setActiveView] = useState<"new" | "existing">("new");

  const InfoTooltip = ({ content }: { content: string }) => (
    <div className="group relative inline-block">
      <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-64 z-10">
        {content}
      </div>
    </div>
  );

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
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏠 Enhanced Dashboard Experience
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Welcome panel and quick actions that guide users to success
            </p>
            
            {/* View Toggle */}
            <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveView("new")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeView === "new" 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                New User View
              </button>
              <button
                onClick={() => setActiveView("existing")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeView === "existing" 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Existing User View
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {activeView === "new" ? (
            // New User Dashboard
            <div className="space-y-8">
              {/* Welcome Panel */}
              <div className="bg-white rounded-2xl shadow-lg border p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    👋 Welcome to Phala Cloud, Alex!
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Start deploying secure, confidential workloads using CVMs and GPU-TEE compute.
                  </p>
                </div>
                
                {/* Quick Action Tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer group">
                    <CreditCard className="h-8 w-8 mx-auto mb-3 text-gray-400 group-hover:text-blue-500" />
                    <h3 className="font-semibold mb-2">Finish setup</h3>
                    <p className="text-xs text-gray-600 mb-4">Add payment method, claim free credits</p>
                    <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                      Add Payment Method
                    </button>
                  </div>
                  
                  <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer group bg-blue-25">
                    <Rocket className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                    <h3 className="font-semibold mb-2">Deploy a CVM</h3>
                    <p className="text-xs text-gray-600 mb-4">Launch a containerized app in a secure TEE</p>
                    <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                      Launch CVM
                    </button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-yellow-500 hover:bg-yellow-50 transition-colors cursor-pointer group">
                    <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
                    <h3 className="font-semibold mb-2">Deploy with GPU-TEE</h3>
                    <p className="text-xs text-gray-600 mb-4">Access GPU acceleration for ML workloads</p>
                    <button className="bg-gray-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors w-full">
                      GPU Deploy
                    </button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-500 hover:bg-green-50 transition-colors cursor-pointer group">
                    <TestTube className="h-8 w-8 mx-auto mb-3 text-green-500" />
                    <h3 className="font-semibold mb-2">Try a sample app</h3>
                    <p className="text-xs text-gray-600 mb-4">NGINX, LLM API server, or Hello World</p>
                    <button className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors w-full">
                      Try Sample
                    </button>
                  </div>
                </div>
                
                {/* Learn More Section */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Learn More
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      Quick Start Guide
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      What is a CVM?
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                      Sample Apps Gallery
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      Ask on Discord
                    </a>
                  </div>
                </div>
              </div>

              {/* CVMs Section (Empty State) */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    CVMs
                    <InfoTooltip content="Confidential Virtual Machines - Secure, isolated compute environments that protect your applications and data using Trusted Execution Environment (TEE) technology." />
                  </h2>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="h-4 w-4" />
                    Deploy
                  </button>
                </div>
                
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-4">
                    Deploy your first secure application in minutes
                  </h3>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Deploy Now
                  </button>
                  <p className="text-sm mt-6 text-gray-600">
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      📖 Follow our quick start guide to deploy your first app
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Existing User Dashboard
            <div className="space-y-8">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  CVMs
                  <InfoTooltip content="Confidential Virtual Machines - Secure, isolated compute environments that protect your applications and data using Trusted Execution Environment (TEE) technology." />
                </h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  Deploy
                </button>
              </div>

              {/* CVM Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Example CVM Cards */}
                {[
                  { name: "my-nginx-app", status: "Running", type: "CVM", uptime: "2d 6h", icon: "🌐" },
                  { name: "llm-inference-api", status: "Running", type: "GPU-TEE", uptime: "3h 22m", icon: "🤖" },
                  { name: "hello-world-demo", status: "Stopped", type: "CVM", uptime: "0m", icon: "👋" },
                ].map((cvm, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                        {cvm.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{cvm.name}</h3>
                        <p className="text-sm text-gray-600">{cvm.type}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status</span>
                        <span className={`font-medium ${
                          cvm.status === "Running" ? "text-green-600" : "text-gray-500"
                        }`}>
                          {cvm.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Uptime</span>
                        <span className="font-medium">{cvm.uptime}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white text-sm px-3 py-2 rounded hover:bg-blue-700 transition-colors">
                        View Logs
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                        {cvm.status === "Running" ? "Stop" : "Start"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Key Improvements Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dashboard Improvements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Clear Guidance</h3>
              <p className="text-sm text-gray-600">Welcome panel shows new users exactly what to do next</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Quick Actions</h3>
              <p className="text-sm text-gray-600">Action tiles make common tasks one-click accessible</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold mb-2">Better Tooltips</h3>
              <p className="text-sm text-gray-600">Technical terms explained with helpful context</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}