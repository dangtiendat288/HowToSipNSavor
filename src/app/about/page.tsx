// import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Pradyumn Varma",
      position: "Developer",
      bio: "A skilled developer with expertise in modern web technologies. Pradyumn plays a key role in building and maintaining the core functionalities of SipNSavor, ensuring a smooth user experience across all features.",
      avatar: "pradyumn.jpg" 
    },
    {
      id: 2,
      name: "Utkarsh Bhagat",
      position: "Developer",
      bio: "Passionate about creating intuitive user interfaces, Utkarsh brings his technical expertise to implement the interactive elements of SipNSavor. He focuses on performance optimization and responsive design across all devices.",
      avatar: "utkarsh.jpg"
    },
    {
      id: 3,
      name: "Christian Coker",
      position: "Developer",
      bio: "With a strong background in software engineering, Christian works on the backend systems that power SipNSavor's data management and AI features. He ensures the app's architecture is robust and scalable.",
      avatar: "christian.jpg"
    },
    {
      id: 4,
      name: "Tien Dat Dang",
      position: "Developer",
      bio: "Specializing in mobile application development, Tien Dat contributes to making SipNSavor's features responsive and user-friendly. He works on implementing the interactive learning modules and tasting journal components.",
      avatar: "tien.jpg"
    },
    {
      id: 5,
      name: "Jia-Jui Jang",
      position: "Developer",
      bio: "Jia-Jui excels at solving complex programming challenges in the SipNSavor platform. He specializes in integrating the AI functionality and ensuring seamless data flow between different app components.",
      avatar: "jia-jui.jpg"
    },
    {
      id: 6,
      name: "Waley Lin",
      position: "Developer",
      bio: "With an eye for detail and a passion for clean code, Waley works on SipNSavor's frontend elements and user interface improvements. He ensures the app maintains an elegant and intuitive design across all features.",
      avatar: "waley.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#051630] to-[#0a2547] text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">Our Story</h1>
          <p className="text-xl font-light max-w-3xl mx-auto">
            Meet the passionate team behind SipNSavor and discover our mission to make wine more approachable.
          </p>
        </div>
      </header>

      {/* Company Story */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-[#0a1929]/50 backdrop-blur rounded-2xl shadow-lg p-10 md:p-16 border border-blue-900/30">
          <h2 className="text-3xl font-serif font-light mb-8 text-white">The SipNSavor Journey</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-blue-100">
              SipNSavor was born in 2023 from a simple observation: while wine brings joy to millions, many people find the world of wine intimidating and complex. Our founder, Emma Laurent, a certified sommelier with extensive experience in wine education, realized that technology could bridge this knowledge gap and make wine more accessible to everyone.
            </p>
            <p className="mt-4 text-blue-100">
              What began as a small passion project quickly evolved as Emma assembled a team of experts spanning wine education, technology, and user experience design. Together, they crafted an app that combines deep wine knowledge with cutting-edge technology, all presented in an approachable, engaging format.
            </p>
            <p className="mt-4 text-blue-100">
              Since our launch, we have helped thousands of users develop their palates, expand their wine knowledge, and most importantly, gain the confidence to explore new wines and regions without intimidation. Our community has grown to include everyone from casual wine enthusiasts to aspiring sommeliers, all connected by their love for learning and appreciation for the rich culture of wine.
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="mt-12 bg-gradient-to-r from-blue-800/50 to-indigo-800/50 p-8 rounded-xl border border-blue-700/30">
            <h3 className="text-2xl font-serif font-light mb-4 text-white">Our Mission</h3>
            <p className="text-lg font-medium text-blue-200">
              To transform wine exploration into an engaging journey of discovery, making the world of wine accessible and enjoyable for enthusiasts at every knowledge level through technology and education.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-light mb-16 text-center text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-[#0a1929]/50 backdrop-blur rounded-2xl shadow-md overflow-hidden flex flex-col border border-blue-900/30">
              <div className="bg-gradient-to-r from-blue-800 to-indigo-700 h-48 relative">
                {/* Team member image would go here */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-light bg-blue-900/20 backdrop-blur-sm">
                  Team Photo: {member.name}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-blue-300 font-medium mb-4">{member.position}</p>
                <p className="text-blue-100">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-light mb-8 text-white">Get in Touch</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10">
            We would love to hear from you! Whether you have questions about SipNSavor, feedback on our app, or just want to share your wine journey with us, our team is here for you.
          </p>
          
          <div className="bg-[#0a1929]/70 backdrop-blur rounded-2xl shadow-lg p-10 max-w-2xl mx-auto border border-blue-900/30">
            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Email Us</h3>
                <a href="mailto:hello@sipnsavor.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                  hello@sipnsavor.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Follow Us</h3>
                <div className="flex justify-center space-x-8">
                  <a href="https://instagram.com/sipnsavor" className="text-blue-200 hover:text-white transition-colors">
                    Instagram: @sipnsavor
                  </a>
                  <a href="https://twitter.com/sipnsavor" className="text-blue-200 hover:text-white transition-colors">
                    Twitter: @sipnsavor
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Press & Partnerships</h3>
                <a href="mailto:partners@sipnsavor.com" className="text-blue-300 hover:text-blue-200 transition-colors">
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
            <li>Discover wines that match your unique palate</li>
            <li>Learning about wine should be as enjoyable as drinking it</li>
            <li>Your personal sommelier journey begins here</li>
            <li>Uncork your potential with every tasting</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#051630] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-serif font-light mb-4">SipNSavor</h3>
              <p className="text-blue-200 text-sm">Your personal sommelier in your pocket</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
                <Link href="/features" className="text-blue-200 hover:text-white transition-colors">Features</Link>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm">© {new Date().getFullYear()} SipNSavor. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}