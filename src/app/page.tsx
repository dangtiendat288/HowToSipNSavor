import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Feature preview data
  const featuresPreviews = [
    {
      id: 1,
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging quizzes that adapt to your learning level and help you discover new wine facts.",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Tasting Logs",
      description: "Record and revisit your favorite wines with detailed tasting notes, ratings, and photos to build your personal wine journal.",
      icon: "📝"
    },
    {
      id: 3,
      title: "Learning Flashcards",
      description: "Master wine terminology, regions, and grape varieties with our easy-to-use digital flashcards for everyday learning.",
      icon: "🧠"
    },
    {
      id: 4,
      title: "Interactive Maps",
      description: "Explore the world's wine regions through interactive maps that reveal local varieties, climate insights, and tasting notes.",
      icon: "🗺️"
    },
    {
      id: 5,
      title: "AI Sommelier Bot",
      description: "Get personalized wine recommendations and food pairings from our sophisticated AI sommelier that learns your preferences.",
      icon: "🤖"
    },
    {
      id: 6,
      title: "Progress Tracking",
      description: "Visualize your wine knowledge growth with achievement badges, progress charts, and personalized learning paths.",
      icon: "📈"
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sophie Turner",
      occupation: "Restaurant Owner",
      quote: "SipNSavor transformed how I select wines for my restaurant. The knowledge I've gained has impressed even veteran sommeliers!",
      avatar: "😊"
    },
    {
      id: 2,
      name: "Marcus Chen",
      occupation: "Wine Enthusiast",
      quote: "As a beginner, I was intimidated by wine culture until I found this app. Now I confidently choose wines for any occasion.",
      avatar: "😎"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      occupation: "Culinary Student",
      quote: "The food pairing suggestions are spot-on! SipNSavor has become my secret weapon for creating memorable dining experiences.",
      avatar: "🥂"
    },
    {
      id: 4,
      name: "William Hughes",
      occupation: "Travel Blogger",
      quote: "The interactive maps feature helped me plan amazing wine tours across Europe. It's like having a sommelier in your pocket!",
      avatar: "✈️"
    }
  ];

  // Screenshot captions
  const screenshotCaptions = [
    "Track Your Tastings",
    "Expert Recommendations",
    "Interactive Learning",
    "Regional Exploration",
    "Personal Progress"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-rose-50 text-slate-800">
      {/* Hero Section */}
      <header className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-rose-900/70 z-10"></div>
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-center">
          {/* Hero image from public/images/hero.jpg */}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white p-6">
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-wide mb-6 text-center">
            Elevate Your Wine Experience
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl text-center leading-relaxed mb-8">
            Discover, learn, and savor the world of wine with your personal sommelier companion app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://apps.apple.com/app/sipnsavor"
              target="_blank"
              className="bg-white/90 backdrop-blur text-purple-900 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 shadow-lg font-medium"
            >
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={24}
                height={24}
                className=""
              />
              Download Now
            </a>
            <Link
              href="/features"
              className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Feature Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 text-slate-800">Discover What Makes Us Special</h2>
          <p className="text-lg text-rose-700 max-w-3xl mx-auto">
            SipNSavor combines expert knowledge, interactive learning, and personalized tracking to create your ultimate wine companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresPreviews.map((feature) => (
            <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100">
              <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-r from-rose-200 to-purple-200 text-slate-800 rounded-full shadow-md mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="bg-gradient-to-r from-purple-100 to-rose-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-slate-800">See SipNSavor in Action</h2>
            <p className="text-lg text-rose-700 max-w-2xl mx-auto">
              Beautiful design meets intuitive functionality for seamless wine exploration
            </p>
          </div>
          
          <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide">
            {screenshotCaptions.map((caption, index) => (
              <div key={index} className="flex-none w-72">
                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[9/16] bg-gradient-to-b from-purple-500 to-rose-500 relative">
                    {/* App screenshots would replace these placeholders */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-light">
                      App Screenshot {index + 1}
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-medium text-slate-700">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-slate-800">What Our Users Say</h2>
          <p className="text-lg text-rose-700 max-w-2xl mx-auto">
            Join thousands of wine enthusiasts who've transformed their appreciation for wine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-r from-rose-200 to-purple-200 rounded-full mr-4 text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">{testimonial.name}</h4>
                  <p className="text-slate-500">{testimonial.occupation}</p>
                </div>
              </div>
              <p className="text-slate-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-rose-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-8">Begin Your Wine Journey Today</h2>
          <p className="text-xl font-light max-w-3xl mx-auto mb-10">
            Join a community of wine lovers and start building your personalized wine experience with expert guidance at your fingertips.
          </p>
          <a
            href="https://apps.apple.com/us/app/sipnsavor/id6745084274"
            target="_blank"
            className="bg-white text-purple-900 px-10 py-5 rounded-full inline-flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors duration-300 shadow-lg font-medium text-lg"
          >
            <Image
              src="/images/app-store.png"
              alt="App Store"
              width={28}
              height={28}
              className=""
            />
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-serif font-light mb-4">SipNSavor</h3>
              <p className="text-slate-300 text-sm">Your personal sommelier in your pocket</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
                <Link href="/features" className="text-slate-300 hover:text-white transition-colors">Features</Link>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} SipNSavor. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
