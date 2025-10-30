"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Code, TrendingUp, Shield, Zap, BookOpen, Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import { getLatestPosts } from "@/lib/blog-data";
import { useEffect, useState } from "react";

export default function Home() {
  const latestPosts = getLatestPosts(3);
  const [mounted, setMounted] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  
  const fullCode = `import { SaveCash } from '@savecash/finbots';

const savecash = new SaveCash({
  apiKey: process.env.SAVECASH_API_KEY
});

// Create an expense tracking FinBot
const expenseBot = await savecash.finbots.create({
  type: 'expense-tracker',
  config: {
    categories: ['food', 'transport', 'entertainment'],
    alertThreshold: 500
  }
});

// Get AI-powered insights
const insights = await expenseBot.analyze();
console.log(insights.recommendations);`;

  useEffect(() => {
    setMounted(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setTypedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 animate-bounce" style={{ animationDuration: '2s' }}>
              <Zap className="h-3 w-3 mr-1 animate-pulse" />
              AI-Powered Financial Freedom
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              SaveCash
            </h1>
            
            <div className="relative inline-block mb-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Your AI Financial Assistant with Integratable{" "}
                <span className="text-primary font-semibold relative inline-block animate-pulse">
                  FinBots
                  <Sparkles className="absolute -top-2 -right-6 h-4 w-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                </span>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Automate savings, optimize investments, and integrate powerful AI financial agents 
              into all your projects with just a few lines of code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button size="lg" className="text-lg px-8 group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI Financial Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From personal finance to enterprise integration, SaveCash FinBots adapt to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Bot, title: "AI Financial Agents", desc: "Specialized FinBots that automate expense tracking, savings optimization, and investment strategies", delay: "0ms" },
            { icon: Code, title: "Easy Integration", desc: "Integrate FinBots into any project with our simple SDK. Just a few lines of code to add AI financial intelligence", delay: "100ms" },
            { icon: TrendingUp, title: "Smart Analytics", desc: "Real-time insights, predictive analytics, and personalized recommendations powered by machine learning", delay: "200ms" },
            { icon: Shield, title: "Bank-Level Security", desc: "AES-256 encryption, SOC 2 Type II compliance, and zero-trust architecture protect your financial data", delay: "300ms" },
            { icon: Zap, title: "Automated Savings", desc: "Let AI analyze your spending patterns and automatically optimize your savings without manual effort", delay: "400ms" },
            { icon: Bot, title: "Custom FinBots", desc: "Build and monetize your own FinBots in our marketplace. Create specialized agents for any financial use case", delay: "500ms" }
          ].map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: feature.delay, animationDuration: '1000ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <CardHeader className="relative z-10">
                <feature.icon className="h-10 w-10 text-primary mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                  {feature.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16 md:py-24 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Integrate in Minutes
              </h2>
              <p className="text-lg text-muted-foreground">
                Add AI financial intelligence to your app with our developer-friendly SDK
              </p>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-white/10 overflow-hidden relative group animate-in fade-in zoom-in-95 duration-1000 delay-200">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                animation: 'shimmer 3s infinite'
              }} />
              
              <CardContent className="p-6 relative">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                
                <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm border border-white/5 relative group-hover:border-white/10 transition-colors duration-500" style={{
                  animation: 'code-glow 3s infinite'
                }}>
                  <code className="text-white/90 font-mono">
                    {mounted ? typedCode : fullCode}
                    {mounted && typedCode.length < fullCode.length && (
                      <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                    )}
                  </code>
                </pre>
                
                {/* Floating Code Elements */}
                <div className="absolute -top-4 -right-4 text-6xl opacity-5 animate-spin" style={{ animationDuration: '20s' }}>
                  {'{}'}
                </div>
                <div className="absolute -bottom-4 -left-4 text-6xl opacity-5 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  {'</>'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex items-center justify-between mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Latest from the Blog
            </h2>
            <p className="text-lg text-muted-foreground">
              Insights on AI finance, FinBots tutorials, and savings strategies
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-white/20 hover:border-white/40 hover:bg-white/5 group transition-all duration-300">
              <BookOpen className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              View All Posts
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="block group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: '1000ms' }}
            >
              <Card className="overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 border-white/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 relative">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    animation: 'float 10s ease-in-out infinite'
                  }} />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="animate-in fade-in zoom-in-95 duration-500 backdrop-blur-sm">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            animation: 'float 15s ease-in-out infinite'
          }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Join thousands using SaveCash and FinBots to automate savings, 
            optimize investments, and achieve financial freedom.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="font-semibold text-lg px-8 group hover:scale-110 transition-all duration-300 hover:shadow-xl animate-in fade-in zoom-in-95 duration-1000 delay-300"
          >
            Start Free Trial
            <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h3 className="text-xl font-bold mb-4 text-primary">SaveCash</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered financial savings application with integratable FinBots 
                for all your projects.
              </p>
              <p className="text-xs text-muted-foreground">
                &copy; 2024 SaveCash. All rights reserved.
              </p>
            </div>

            {/* Product */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                {["Features", "Pricing", "FinBots Marketplace", "Documentation", "API Reference"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2 hover:translate-x-1">
                    <BookOpen className="h-3 w-3" />
                    Blog
                  </Link>
                </li>
                {["Tutorials", "Case Studies", "Community", "Support"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {["About Us", "Careers", "Press Kit", "Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground animate-pulse" style={{ animationDuration: '3s' }}>
                Built with AI • Secured with Trust • Powered by Innovation
              </p>
              <div className="flex gap-4">
                {[
                  { name: "Twitter", path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
                  { name: "GitHub", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                  { name: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
                ].map((social) => (
                  <Link 
                    key={social.name}
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:rotate-6"
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}