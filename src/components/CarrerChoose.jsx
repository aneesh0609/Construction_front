import React, { useState } from 'react';
import { 
  Trophy, Users, TrendingUp, Heart, Shield, Zap, 
  Award, Globe, Rocket, Star, Gift, Target,
  ChevronRight, Sparkles, Building2, Hammer
} from 'lucide-react';

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Accelerated Growth',
      description: 'Fast-track your career with clear advancement paths and mentorship programs.',
      stat: '3x Faster',
      statLabel: 'Career Progression',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:border-blue-400'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Work on award-winning projects that shape skylines and communities.',
      stat: '50+ Awards',
      statLabel: 'Project Excellence',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      hoverColor: 'hover:border-amber-400'
    },
    
    {
      icon: Users,
      title: 'Inclusive Culture',
      description: 'Join a diverse team where every voice matters and innovation thrives.',
      stat: '45+',
      statLabel: 'Nationalities',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:border-purple-400'
    },
    
    {
      icon: Globe,
      title: 'Global Projects',
      description: 'Opportunity to work on international projects across 15+ countries.',
      stat: '15+',
      statLabel: 'Countries',
      color: 'from-rose-500 to-red-500',
      bgColor: 'bg-rose-50',
      hoverColor: 'hover:border-rose-400'
    }
  ];

  const perks = [
    { icon: Gift, text: 'Performance Bonuses', highlight: 'Up to 20% annually' },
    { icon: Rocket, text: 'Learning Budget', highlight: '$3K per year' },
    { icon: Heart, text: 'Flexible Work', highlight: 'Hybrid options' },
    { icon: Target, text: 'Career Coaching', highlight: '1-on-1 mentorship' },
    { icon: Trophy, text: 'Employee Recognition', highlight: 'Quarterly awards' },
    { icon: Sparkles, text: 'Wellness Programs', highlight: 'Gym + Mental health' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 right-20 opacity-10 animate-bounce">
        <Building2 size={80} className="text-orange-500" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 animate-pulse">
        <Hammer size={60} className="text-slate-600" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Star className="text-orange-600" size={20} />
            <span className="text-orange-700 font-semibold">Why Beena Construction?</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Job</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Beena Construction, we don't just build structures—we build careers, communities, and futures. 
            Join a legacy of excellence that spans decades and transforms lives.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-slate-600 font-medium">Team Members</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-600 font-medium">Years Building</div>
          </div>
         
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-slate-600 font-medium">Satisfaction Rate</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
            <div className="text-slate-600 font-medium">Projects</div>
          </div>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100 ${benefit.hoverColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-800 transition-all">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Stat Badge */}
                  <div className={`inline-flex flex-col ${benefit.bgColor} px-4 py-3 rounded-lg border border-slate-200`}>
                    <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${benefit.color}`}>
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute bottom-6 right-6 transform transition-all duration-300 ${
                  activeCard === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                }`}>
                  <ChevronRight className="text-orange-500" size={24} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}