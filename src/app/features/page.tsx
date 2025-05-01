import Image from "next/image";
import Link from "next/link";

export default function Features() {
  // Detailed feature data
  const detailedFeatures = [
    {
      id: 1,
      title: "Exploring The App",
      description: "Discover SipNSavor's intuitive interface designed for both novices and experienced oenophiles. Navigate seamlessly between learning modules, personal tracking tools, and interactive features. Our thoughtfully organized sections guide you through your wine journey step by step, with personalized recommendations that evolve as you explore different varieties and regions. The clean, elegant design ensures you can focus on what matters most—deepening your appreciation of wine.",
      icon: "📱",
      image: "exploring.jpg"
    },
    {
      id: 2,
      title: "Comprehensive Guides",
      description: "Access expertly curated content covering everything from wine basics to advanced tasting techniques. Our guides break down complex topics like terroir, vintage variations, and food pairings into easily digestible information. Each guide combines beautiful visuals with concise explanations, helping you understand subtle differences between wine varieties and production methods. Perfect for building confidence when selecting, serving, or discussing wines in any setting.",
      icon: "📚",
      image: "guides.jpg"
    },
    {
      id: 3,
      title: "Quizzes",
      description: "Test and strengthen your wine knowledge through engaging, interactive quizzes tailored to your expertise level. From grape variety identification to regional characteristics and food pairings, our carefully crafted questions reinforce your learning while making education fun. Each completed quiz provides instant feedback with detailed explanations, helping you understand concepts more deeply. Track your progress over time and challenge yourself with increasingly advanced content as your expertise grows.",
      icon: "🧠",
      image: "quizzes.jpg"
    },
    {
      id: 4,
      title: "Flashcards",
      description: "Master wine terminology and concepts through our interactive flashcard system designed to strengthen memory retention. Each beautifully designed card features essential information about grape varieties, regions, tasting notes, or production methods. Our spaced repetition algorithm presents cards at optimal intervals to maximize learning efficiency. Create custom flashcard sets focused on specific regions or styles that interest you most, turning complex wine knowledge into easily remembered information.",
      icon: "🔄",
      image: "flashcards.jpg"
    },
    {
      id: 5,
      title: "Personal Tasting Journal",
      description: "Transform your wine experiences into a beautiful digital record with our comprehensive tasting journal. Document each wine with photos, detailed tasting notes, personal ratings, and custom tags for easy reference. Track flavor profiles, food pairings, purchase locations, and price points to identify your preferences over time. The journal automatically organizes your entries by variety, region, or rating, creating a personalized wine database you can reference when making future selections.",
      icon: "📔",
      image: "journal.jpg"
    },
    {
      id: 6,
      title: "Explore Beverage Geography",
      description: "Journey through the world's wine regions with our interactive maps showcasing appellations, climate conditions, and characteristic varieties. Zoom from continent-wide views to specific vineyard locations with detailed information about local winemaking traditions and terroir influences. Each region features stunning photography and video content that transports you to vineyards across the globe, connecting geographical knowledge with the wines in your glass.",
      icon: "🗺️",
      image: "maps.jpg"
    },
    {
      id: 7,
      title: "Master Sommelier AI Bot",
      description: "Get instant answers to your wine questions from our sophisticated AI sommelier. Whether you need food pairing suggestions, information about a specific bottle, or help deciphering a wine list, our virtual sommelier provides personalized recommendations based on your taste preferences and past favorites. The AI continuously learns from your interactions, becoming more tailored to your palate over time and introducing you to new wines that match your evolving preferences.",
      icon: "🤖",
      image: "ai-bot.jpg"
    },
    {
      id: 8,
      title: "Achievement System",
      description: "Track your progress and stay motivated with our gamified learning system that rewards your wine education journey. Earn badges for completing courses, participating in tasting challenges, or building comprehensive journal entries. Unlock exclusive content as you reach new expertise levels, from virtual masterclasses to expert interviews. Compare your progress with friends or the wider SipNSavor community, creating a friendly competitive environment that makes learning both rewarding and enjoyable.",
      icon: "🏆",
      image: "achievements.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-rose-50 text-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-rose-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">Powerful Features for Wine Lovers</h1>
          <p className="text-xl font-light max-w-3xl mx-auto">
            Discover all the tools and experiences SipNSavor offers to enhance your journey through the world of wine.
          </p>
        </div>
      </header>

      {/* Features Detail Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {detailedFeatures.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-purple-100 to-rose-100 p-1 rounded-2xl shadow-lg">
                  <div className="aspect-[4/3] bg-gradient-to-b from-purple-300 to-rose-300 rounded-xl overflow-hidden relative">
                    {/* Feature image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-light bg-slate-700/20 backdrop-blur-sm">
                      Feature Image: {feature.title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 flex items-center justify-center bg-gradient-to-r from-rose-300 to-purple-300 text-slate-800 rounded-full shadow-md mr-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h2 className="text-3xl font-serif font-light text-slate-800">{feature.title}</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-rose-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-8">Ready to Transform Your Wine Experience?</h2>
          <p className="text-xl font-light max-w-3xl mx-auto mb-10">
            SipNSavor brings together everything you need to discover, learn about, and enjoy wine like never before.
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