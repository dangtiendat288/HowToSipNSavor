import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Emma Laurent",
      position: "Founder & CEO",
      bio: "Certified sommelier with 15 years of experience in the wine industry. Emma's passion for making wine accessible to everyone led her to create SipNSavor after noticing how technology could bridge the knowledge gap for wine enthusiasts.",
      avatar: "emma.jpg" // These would be replaced with actual team images
    },
    {
      id: 2,
      name: "James Chen",
      position: "Head of Product",
      bio: "Former tech executive and wine collector, James combines his technological expertise with his love for wine culture. He oversees all product development, ensuring SipNSavor delivers an intuitive and educational experience.",
      avatar: "james.jpg"
    },
    {
      id: 3,
      name: "Sofia Mendez",
      position: "Master Sommelier",
      bio: "With credentials from the Court of Master Sommeliers and experience at Michelin-starred restaurants, Sofia develops our educational content and ensures all wine information is accurate, current, and presented in an approachable way.",
      avatar: "sofia.jpg"
    },
    {
      id: 4,
      name: "Marcus Williams",
      position: "Lead Developer",
      bio: "Tech innovator specializing in mobile applications and AI integration. Marcus is the architectural mind behind SipNSavor's smart features including the AI Sommelier Bot and the interactive learning modules.",
      avatar: "marcus.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-rose-50 text-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-rose-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">Our Story</h1>
          <p className="text-xl font-light max-w-3xl mx-auto">
            Meet the passionate team behind SipNSavor and discover our mission to make wine more approachable.
          </p>
        </div>
      </header>

      {/* Company Story */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16">
          <h2 className="text-3xl font-serif font-light mb-8 text-slate-800">The SipNSavor Journey</h2>
          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              SipNSavor was born in 2023 from a simple observation: while wine brings joy to millions, many people find the world of wine intimidating and complex. Our founder, Emma Laurent, a certified sommelier with extensive experience in wine education, realized that technology could bridge this knowledge gap and make wine more accessible to everyone.
            </p>
            <p className="mt-4">
              What began as a small passion project quickly evolved as Emma assembled a team of experts spanning wine education, technology, and user experience design. Together, they crafted an app that combines deep wine knowledge with cutting-edge technology, all presented in an approachable, engaging format.
            </p>
            <p className="mt-4">
              Since our launch, we've helped thousands of users develop their palates, expand their wine knowledge, and most importantly, gain the confidence to explore new wines and regions without intimidation. Our community has grown to include everyone from casual wine enthusiasts to aspiring sommeliers, all connected by their love for learning and appreciation for the rich culture of wine.
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="mt-12 bg-gradient-to-r from-rose-50 to-purple-50 p-8 rounded-xl border border-rose-100">
            <h3 className="text-2xl font-serif font-light mb-4 text-slate-800">Our Mission</h3>
            <p className="text-lg font-medium text-rose-700">
              To transform wine exploration into an engaging journey of discovery, making the world of wine accessible and enjoyable for enthusiasts at every knowledge level through technology and education.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-light mb-16 text-center text-slate-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-purple-200 to-rose-200 h-48 relative">
                {/* Team member image would go here */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 text-xl font-light bg-slate-200/20 backdrop-blur-sm">
                  Team Photo: {member.name}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-rose-600 font-medium mb-4">{member.position}</p>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-100 to-rose-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-light mb-8 text-slate-800">Get in Touch</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-10">
            We'd love to hear from you! Whether you have questions about SipNSavor, feedback on our app, or just want to share your wine journey with us, our team is here for you.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl mx-auto">
            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2 text-slate-800">Email Us</h3>
                <a href="mailto:hello@sipnsavor.com" className="text-rose-600 hover:text-rose-700 transition-colors">
                  hello@sipnsavor.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-slate-800">Follow Us</h3>
                <div className="flex justify-center space-x-8">
                  <a href="https://instagram.com/sipnsavor" className="text-slate-700 hover:text-rose-600 transition-colors">
                    Instagram: @sipnsavor
                  </a>
                  <a href="https://twitter.com/sipnsavor" className="text-slate-700 hover:text-rose-600 transition-colors">
                    Twitter: @sipnsavor
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-slate-800">Press & Partnerships</h3>
                <a href="mailto:partners@sipnsavor.com" className="text-rose-600 hover:text-rose-700 transition-colors">
                  partners@sipnsavor.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Voice Guidelines - Hidden section for reference */}
      <div className="hidden">
        <div className="brand-voice">
          <h3>Brand Voice Guidelines</h3>
          <p><strong>Tone:</strong> Professional but approachable, educational but fun. We speak with authority on wine topics but avoid pretension. Our content is accessible to beginners while still valuable to connoisseurs.</p>
          <p><strong>Target Audience:</strong> Adults 25-65 with disposable income, interested in self-improvement, culinary experiences, and social activities. They range from complete wine novices to experienced enthusiasts seeking to deepen their knowledge.</p>
          <p><strong>Sample Phrases:</strong></p>
          <ul>
            <li>"Discover wines that match your unique palate"</li>
            <li>"Learning about wine should be as enjoyable as drinking it"</li>
            <li>"Your personal sommelier journey begins here"</li>
            <li>"Uncork your potential with every tasting"</li>
          </ul>
        </div>
      </div>

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