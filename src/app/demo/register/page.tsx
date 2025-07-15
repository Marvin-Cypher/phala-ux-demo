"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, X, ArrowLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

// Password validation schema
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character");

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: passwordSchema,
});

type FormData = z.infer<typeof formSchema>;

const passwordRequirements = [
  { test: (pw: string) => pw.length >= 8, label: "At least 8 characters" },
  { test: (pw: string) => /[A-Z]/.test(pw), label: "One uppercase letter" },
  { test: (pw: string) => /[a-z]/.test(pw), label: "One lowercase letter" },
  { test: (pw: string) => /[0-9]/.test(pw), label: "One number" },
  { test: (pw: string) => /[^A-Za-z0-9]/.test(pw), label: "One special character" },
];

export default function RegisterDemo() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const password = watch("password") || "";
  const email = watch("email") || "";

  // Calculate password strength
  const metRequirements = passwordRequirements.filter(req => req.test(password));
  const strength = password ? Math.round((metRequirements.length / passwordRequirements.length) * 100) : 0;

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Check Your Email</h2>
            
            <div className="space-y-4 text-left">
              <p className="text-gray-600">
                We've sent a verification email to <strong>{email}</strong>
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">What to expect:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Email may take a few minutes to arrive</li>
                  <li>• Check your spam/junk folder if you don't see it</li>
                  <li>• The verification link will log you in automatically</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowSuccess(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                I'll check my email
              </button>
              <Link 
                href="/demo/dashboard"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Continue to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Demo Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ✨ Improved Registration Experience
            </h1>
            <p className="text-xl text-gray-600">
              Simplified form with real-time feedback and better guidance
            </p>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          {/* Before (Old) */}
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ Before: Complex Form</h3>
              <p className="text-sm text-red-700">5 fields + CAPTCHA = High abandonment</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 opacity-75">
              <h4 className="text-lg font-semibold mb-2">Create account</h4>
              <p className="text-sm text-gray-600 mb-4">Unlock your free TEE now.</p>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter username" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded text-sm" placeholder="name@example.com" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input type="password" className="w-full p-2 border rounded text-sm" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Confirm Password</label>
                  <input type="password" className="w-full p-2 border rounded text-sm" disabled />
                </div>
                <div className="bg-gray-100 p-2 rounded text-center text-xs">CAPTCHA</div>
                <button className="w-full bg-gray-400 text-white p-2 rounded text-sm" disabled>
                  Create account
                </button>
              </div>
            </div>
          </div>

          {/* After (New) */}
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">✅ After: Simplified & Smart</h3>
              <p className="text-sm text-green-700">3 fields + real-time validation = Better UX</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
              <h4 className="text-lg font-semibold mb-2">Create account</h4>
              <p className="text-sm text-gray-600 mb-6">Start your free secure cloud trial now.</p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  
                  {/* Real-time Password Validation */}
                  {password && (
                    <div className="mt-3 space-y-2">
                      <div className="space-y-1">
                        {passwordRequirements.map((req, index) => {
                          const isMet = req.test(password);
                          return (
                            <div
                              key={index}
                              className={`flex items-center gap-2 text-xs transition-colors ${
                                isMet ? "text-green-600" : "text-gray-500"
                              }`}
                            >
                              {isMet ? (
                                <Check className="h-3 w-3 text-green-600" />
                              ) : (
                                <X className="h-3 w-3 text-gray-400" />
                              )}
                              <span>{req.label}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Strength Meter */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Password strength</span>
                          <span className={`font-medium ${
                            strength < 40 ? "text-red-500" : 
                            strength < 80 ? "text-yellow-500" : 
                            "text-green-600"
                          }`}>
                            {strength < 40 ? "Weak" : strength < 80 ? "Medium" : "Strong"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${
                              strength < 40 ? "bg-red-500" : 
                              strength < 80 ? "bg-yellow-500" : 
                              "bg-green-500"
                            }`}
                            style={{ width: `${strength}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {errors.password && (
                    <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                  )}
                </div>

                {/* CAPTCHA Placeholder */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-3 text-center text-sm text-gray-600">
                  ✓ CAPTCHA (Cloudflare Turnstile)
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Key Improvements */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Improvements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold mb-2">60% Fewer Fields</h3>
              <p className="text-sm text-gray-600">Removed username and confirm password to reduce cognitive load</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Real-time Validation</h3>
              <p className="text-sm text-gray-600">Live password strength indicator prevents form submission errors</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold mb-2">Better Copy</h3>
              <p className="text-sm text-gray-600">User-focused language instead of technical jargon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}