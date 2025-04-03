import Image from "next/image";

export default function Home() {
  // Installation steps data remains the same
  const installSteps = [
    {
      id: 1,
      title: "Download Expo Go",
      description: "Go to your phone's app store and download the Expo Go app (available on iOS and Android).",
      icon: "📱"
    },
    {
      id: 2,
      title: "Download Sip n Savor",
      description: "Once you have Expo Go installed, click the link below to run the app. Click Open next to Expo Go.",
      icon: "🍷"
    },
    {
      id: 3,
      title: "Create an Account",
      description: "Choose a username and password you'll remember. For testing, a simple password like 'password' will work fine.",
      icon: "👤"
    },
    {
      id: 4,
      title: "Try Out All Features",
      description: "Explore each feature: Quiz, Maps, ChatBot, Tasting Log, Info Guide, Explore, Badges, and Flashcards.",
      icon: "✨"
    },
    {
      id: 5,
      title: "Take the Feedback Survey",
      description: "Once you've tried everything, please fill out our short feedback survey to help us improve.",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-100 text-slate-700">
      {/* Hero Section */}
      <header className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-400/60 to-blue-300/60 z-10"></div>
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-center">
          {/* Hero image from public/images/hero.jpeg */}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white p-6">
          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-wide mb-4 text-center">
            🥂 Thank You for Beta Testing Sip n Savor!
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl text-center leading-relaxed">
            We're so excited to have you on board! Your feedback will help us polish and perfect the experience.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-slate-700">Here's How to Get Started</h2>
          <p className="text-lg text-blue-500 max-w-2xl mx-auto">
            Follow these simple steps to begin your journey into the world of fine beverages and exclusive tasting experiences.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="flex flex-col gap-10 mb-16">
          {installSteps.map((step) => (
            <div key={step.id} className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 hover:border-blue-200">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 flex items-center justify-center bg-gradient-to-r from-slate-300 to-blue-300 text-white rounded-full shadow-md">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-2 text-slate-700">✅ Step {step.id}: {step.title}</h3>
                  <p className="text-blue-500">{step.description}</p>
                  
                  {step.id === 2 && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-slate-100 to-blue-100 rounded-lg border border-slate-200">
                      <a 
                        href="https://expo.dev/preview/update?message=Merge%20branch%20'WaleyLin%3Amain'%20into%20main&updateRuntimeVersion=exposdk%3A52.0.0&createdAt=2025-04-03T01%3A19%3A29.747Z&slug=exp&projectId=c15de187-d9fe-4b8b-b42e-c4a219aca1a3&group=4f604040-a455-44b1-b028-394ebb77ec9d"
                        className="text-blue-500 underline font-medium hover:text-blue-700 flex items-center justify-center py-2"
                      >
                        <span className="mr-2">Click here to launch Sip n Savor in Expo Go</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    </div>
                  )}
                  
                  {step.id === 4 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Quiz", "Maps", "ChatBot", "Tasting Log", "Info Guide", "Explore", "Badges", "Flashcards"].map((feature) => (
                        <div key={feature} className="bg-gradient-to-r from-slate-200 to-blue-200 px-3 py-2 rounded-lg text-center text-slate-700 font-medium hover:from-slate-300 hover:to-blue-300 transition-colors cursor-pointer shadow-sm">
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {step.id === 5 && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-slate-100 to-blue-100 rounded-lg border border-slate-200">
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfpVDbj-HElUJPPGYqPEmwd7rB1ThGcfDhURwgGqxYBLmckUw/viewform?usp=header"
                        className="text-blue-500 underline font-medium hover:text-blue-700 flex items-center justify-center py-2"
                      >
                        <span className="mr-2">📋 Click here to take our feedback survey</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Buttons */}
        <div className="bg-gradient-to-r from-slate-300 to-blue-300 rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-2xl font-serif font-light mb-6 text-slate-800">Download Expo Go Now</h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Begin your journey into the world of fine beverages and personalized tasting experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/expo-go/id982107779"
              target="_blank"
              className="bg-white text-slate-700 px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors duration-300 shadow-md"
            >
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={24}
                height={24}
                className=""
              />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=host.exp.exponent"
              target="_blank"
              className="bg-white text-slate-700 px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors duration-300 shadow-md"
            >
              <Image
                src="/images/gg-play.png"
                alt="Google Play"
                width={24}
                height={24}
                className=""
              />
              Google Play
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-400 to-blue-400 text-white py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-light mb-2">Sip n Savor</h2>
            <p className="text-slate-100 text-sm">Thanks again for helping us make Sip n Savor the best it can be!</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-100 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-slate-100 hover:text-white transition-colors">
              Support
            </a>
            <a href="#" className="text-slate-100 hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
