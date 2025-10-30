"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span className="text-xs">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span className="text-xs">{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span className="text-xs">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
