import React from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Tech Insights & Industry Trends</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Resource Blog</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Expert insights on modern workplace AV, enterprise network security, cloud telephony, and smart surveillance architectures.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Designing High-Density Wi-Fi 6 Networks for Enterprise Workspaces', date: 'Sept 2026', cat: 'Networking' },
            { title: 'The Evolution of AI-Powered CCTV: License Plate & Face Recognition', date: 'Aug 2026', cat: 'Surveillance' },
            { title: 'Microsoft Teams vs Zoom Rooms: Choosing the Right Boardroom Kit', date: 'Jul 2026', cat: 'Unified Voice' }
          ].map((post, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-full font-semibold">{post.cat}</span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{post.title}</h3>
              <p className="text-xs text-slate-400 flex items-center space-x-1 mb-4"><Calendar className="w-3.5 h-3.5" /><span>{post.date}</span></p>
              <button className="text-sm font-semibold text-blue-400 flex items-center space-x-1"><span>Read Article</span><ArrowRight className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
