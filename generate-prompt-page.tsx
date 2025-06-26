"use client"

import type React from "react"

import { useState } from "react"
import {
  Sparkles,
  ArrowLeft,
  ImageIcon,
  Layout,
  MessageCircle,
  Search,
  Video,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  outputType: string
  goal: string
  tone: string
  audience: string
  description: string
}

interface OutputType {
  id: string
  label: string
  icon: React.ReactNode
  description: string
}

const outputTypes: OutputType[] = [
  {
    id: "image",
    label: "Image Generation",
    icon: <ImageIcon className="w-8 h-8" />,
    description: "Create visual content, artwork, or graphics",
  },
  {
    id: "ui",
    label: "UI/UX Design",
    icon: <Layout className="w-8 h-8" />,
    description: "Design interfaces, layouts, or components",
  },
  {
    id: "chat",
    label: "Conversational AI",
    icon: <MessageCircle className="w-8 h-8" />,
    description: "Build chatbots or dialogue systems",
  },
  {
    id: "research",
    label: "Research & Analysis",
    icon: <Search className="w-8 h-8" />,
    description: "Gather information and insights",
  },
  {
    id: "video",
    label: "Video Content",
    icon: <Video className="w-8 h-8" />,
    description: "Create video scripts or concepts",
  },
]

const goals = [
  { value: "create", label: "Create something new" },
  { value: "improve", label: "Improve existing content" },
  { value: "analyze", label: "Analyze and understand" },
  { value: "solve", label: "Solve a problem" },
  { value: "educate", label: "Educate or teach" },
]

const tones = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual & Friendly" },
  { value: "creative", label: "Creative & Artistic" },
  { value: "technical", label: "Technical & Detailed" },
  { value: "persuasive", label: "Persuasive & Compelling" },
]

const audiences = [
  { value: "general", label: "General Public" },
  { value: "professionals", label: "Industry Professionals" },
  { value: "students", label: "Students & Learners" },
  { value: "experts", label: "Subject Matter Experts" },
  { value: "beginners", label: "Beginners & Newcomers" },
]

export default function GeneratePromptPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    outputType: "",
    goal: "",
    tone: "",
    audience: "",
    description: "",
  })
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [copied, setCopied] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      if (currentStep === 3) {
        generatePrompt()
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generatePrompt = () => {
    const selectedType = outputTypes.find((type) => type.id === formData.outputType)
    const selectedGoal = goals.find((goal) => goal.value === formData.goal)
    const selectedTone = goals.find((tone) => tone.value === formData.tone)
    const selectedAudience = audiences.find((audience) => audience.value === formData.audience)

    const prompt = `Act as an expert ${selectedType?.label.toLowerCase()} specialist. Your task is to ${selectedGoal?.label.toLowerCase()} for ${selectedAudience?.label.toLowerCase()}. 

Context: ${formData.description}

Requirements:
- Maintain a ${selectedTone?.label.toLowerCase()} approach
- Focus on ${selectedType?.description.toLowerCase()}
- Provide specific, actionable guidance
- Include relevant examples where appropriate
- Ensure the output is tailored for ${selectedAudience?.label.toLowerCase()}

Please provide a comprehensive response that addresses all aspects of this request while maintaining clarity and relevance to the target audience.`

    setGeneratedPrompt(prompt)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.outputType !== ""
      case 2:
        return formData.goal !== "" && formData.tone !== "" && formData.audience !== ""
      case 3:
        return formData.description.trim() !== ""
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-white font-bold text-xl">Prompt Genius Hub</div>
          </div>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Generate a Prompt</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Create the perfect prompt tailored to your specific needs
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white"
                        : "bg-white/20 text-white/60"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                        step < currentStep ? "bg-gradient-to-r from-cyan-400 to-blue-400" : "bg-white/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-white/80 text-lg">Step {currentStep} of 4</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-10">
            {/* Step 1: Output Type Selection */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">What type of output do you need?</h2>
                  <p className="text-white/80 text-lg">Choose the category that best matches your goal</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {outputTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, outputType: type.id })}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        formData.outputType === type.id
                          ? "border-cyan-400 bg-cyan-400/20 scale-105"
                          : "border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50"
                      }`}
                    >
                      <div className="text-white mb-4">{type.icon}</div>
                      <h3 className="text-white font-semibold text-lg mb-2">{type.label}</h3>
                      <p className="text-white/70 text-sm">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Dropdowns */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Tell us more about your needs</h2>
                  <p className="text-white/80 text-lg">Help us customize the perfect prompt for you</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <label className="block text-white font-semibold text-lg">What's your goal?</label>
                    <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                      <SelectTrigger className="bg-white/10 border-white/30 text-white h-12 rounded-xl">
                        <SelectValue placeholder="Select goal" />
                      </SelectTrigger>
                      <SelectContent>
                        {goals.map((goal) => (
                          <SelectItem key={goal.value} value={goal.value}>
                            {goal.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-white font-semibold text-lg">What tone do you prefer?</label>
                    <Select value={formData.tone} onValueChange={(value) => setFormData({ ...formData, tone: value })}>
                      <SelectTrigger className="bg-white/10 border-white/30 text-white h-12 rounded-xl">
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {tones.map((tone) => (
                          <SelectItem key={tone.value} value={tone.value}>
                            {tone.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-white font-semibold text-lg">Who's your audience?</label>
                    <Select
                      value={formData.audience}
                      onValueChange={(value) => setFormData({ ...formData, audience: value })}
                    >
                      <SelectTrigger className="bg-white/10 border-white/30 text-white h-12 rounded-xl">
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        {audiences.map((audience) => (
                          <SelectItem key={audience.value} value={audience.value}>
                            {audience.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Description */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Describe your specific needs</h2>
                  <p className="text-white/80 text-lg">Provide context to help us create the perfect prompt</p>
                </div>
                <div className="space-y-4">
                  <label htmlFor="description" className="block text-white font-semibold text-lg">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe what you want to create, any specific requirements, style preferences, or constraints..."
                    className="w-full h-40 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none text-lg"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 4: Generated Prompt */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Your Optimized Prompt</h2>
                  <p className="text-white/80 text-lg">Here's your custom-generated prompt ready to use</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <pre className="text-white/90 text-lg leading-relaxed whitespace-pre-wrap font-mono">
                    {generatedPrompt}
                  </pre>
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={handleCopy}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-2xl text-lg transition-all duration-300"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 mr-2" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between mt-12">
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === 3 ? "Generate Prompt" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
