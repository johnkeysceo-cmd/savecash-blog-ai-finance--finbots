"use client";

import { BlogPost } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 lg:p-12">
            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-xs">{post.authorRole}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <Separator className="mb-8" />

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      // Convert markdown-style headers
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-bold mt-4 mb-2">${line.slice(4)}</h3>`;
                      }
                      // Convert bold text
                      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      // Convert italic text
                      line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
                      // Convert inline code
                      line = line.replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>');
                      // Convert links
                      line = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
                      
                      // Handle code blocks
                      if (line.startsWith('```')) {
                        return line.includes('```typescript') || line.includes('```bash') || line.includes('```')
                          ? '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>'
                          : '</code></pre>';
                      }
                      
                      // Handle lists
                      if (line.trim().startsWith('- ')) {
                        return `<li class="ml-4">${line.slice(2)}</li>`;
                      }
                      if (/^\d+\./.test(line.trim())) {
                        return `<li class="ml-4">${line.slice(line.indexOf('.') + 1)}</li>`;
                      }
                      
                      // Regular paragraphs
                      return line.trim() ? `<p class="mb-4 leading-relaxed">${line}</p>` : '';
                    })
                    .join('\n')
                }}
              />
            </div>

            <Separator className="my-12" />

            {/* Author Bio */}
            <div className="bg-muted/50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{post.author}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{post.authorRole}</p>
                  <p className="text-sm">
                    Passionate about using technology to democratize financial wellness 
                    and empower people to achieve their financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Saving Smarter Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join SaveCash and let FinBots automate your path to financial freedom.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Try SaveCash Free
          </Button>
        </div>
      </section>
    </div>
  );
}
