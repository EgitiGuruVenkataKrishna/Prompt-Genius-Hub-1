import { Target, Wand2, Users, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-400 relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Prompt Genius Hub</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Empowering creators with AI-powered prompt optimization and generation tools
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-10 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              At Prompt Genius Hub, we believe that the quality of your prompts directly impacts the quality of
              AI-generated results. Our mission is to democratize access to expert-level prompt engineering, helping
              creators, professionals, and enthusiasts unlock the full potential of AI through better prompts.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Scoring</h3>
              <p className="text-white/80">
                AI-powered analysis that evaluates your prompts across multiple dimensions for optimal performance.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Prompt Generation</h3>
              <p className="text-white/80">
                Create tailored prompts for any use case with our intelligent generation system.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community Driven</h3>
              <p className="text-white/80">
                Built by creators, for creators. Join our community of prompt engineers and AI enthusiasts.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-white/80">
                    We continuously push the boundaries of what's possible with AI prompt engineering.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Quality</h3>
                  <p className="text-white/80">
                    Every feature is crafted with attention to detail and user experience in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
