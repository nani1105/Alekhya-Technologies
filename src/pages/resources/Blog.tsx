import React from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { TextShimmer } from '../../components/ui/text-shimmer';
import wifiBlogImg from '../../Logo/Wifi 6.jpg';
import cctvBlogImg from '../../Logo/Deep video analysis.jpg';
import teamsBlogImg from '../../Logo/Teams  Zoom Room Systems.jpg';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#60a5fa] [--base-gradient-color:#ffffff] dark:[--base-color:#60a5fa] dark:[--base-gradient-color:#ffffff]">
              Tech Insights & Industry Trends
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Resource Blog</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Expert insights on modern workplace AV, enterprise network security, cloud telephony, and smart surveillance architectures.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Designing High-Density Wi-Fi 6 Networks for Enterprise Workspaces',
              date: 'Sept 2026',
              cat: 'Networking',
              image: wifiBlogImg
            },
            {
              title: 'The Evolution of AI-Powered CCTV: License Plate & Face Recognition',
              date: 'Aug 2026',
              cat: 'Surveillance',
              image: cctvBlogImg
            },
            {
              title: 'Microsoft Teams vs Zoom Rooms: Choosing the Right Boardroom Kit',
              date: 'Jul 2026',
              cat: 'Unified Voice',
              image: teamsBlogImg
            }
          ].map((post, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 text-xs bg-blue-600/80 backdrop-blur-md text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                    {post.cat}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-xs text-slate-400 flex items-center space-x-1 mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <button className="text-xs sm:text-sm font-semibold text-blue-400 flex items-center space-x-1 hover:text-blue-300">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
