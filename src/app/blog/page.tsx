"use client";

import { useState } from "react";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">SaveCash Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Financial Wisdom Powered by AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explore insights on AI financial assistants, FinBots integration, savings strategies, 
              and the future of personal finance technology.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-card/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands using SaveCash and FinBots to automate savings, 
            optimize investments, and achieve financial freedom.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
}
