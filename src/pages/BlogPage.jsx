import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge'; 
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Cleaned placeholder data
const blogPosts = [
  {
    id: 2,
    title: 'The Future of Embedded C',
    category: 'Embedded Systems Programming',
    date: '2025-04-15',
    excerpt: 'Explore the latest trends shaping the future of Embedded C, from AI integration to...',
    imageAlt: 'Abstract web code',
    imageDesc: 'Futuristic digital representation of code',
    slug: 'embedded-c-trends',
  },
  {
    id: 3,
    title: 'Why IoT with ESP32',
    category: 'IoT (Internet of Things)',
    date: '2025-04-10',
    excerpt: 'Discover the growing demand for IoT and the skills needed to succeed...',
    imageAlt: 'IoT chart',
    imageDesc: 'Complex graph showing data points and connections',
    slug: 'data-science-career',
  },
  {
    id: 4,
    title: 'Mastering Automotive Software Engineering for Beginners',
    category: 'Automotive Embedded Software',
    date: '2025-04-05',
    excerpt: 'A step-by-step guide to understanding and implementing basic Automotive Embedded Software...',
    imageAlt: 'Magnifying glass over text',
    imageDesc: 'Stylized magnifying glass highlighting the letters SEO',
    slug: 'seo-for-beginners',
  },
  {
    id: 5,
    title: 'Linux for Embedded Systems',
    category: 'Embedded Systems Programming',
    date: '2025-04-05',
    excerpt: 'Learn how to build reliable embedded software using Linux-based platforms...',
    imageAlt: 'Magnifying glass over text',
    imageDesc: 'Stylized magnifying glass highlighting the letters SEO',
    slug: 'linux-embedded',
  },
  {
    id: 6,
    title: 'Python for Microcontrollers',
    category: 'Embedded Systems Programming',
    date: '2025-04-05',
    excerpt: 'Explore how Python can be used efficiently in microcontroller development...',
    imageAlt: 'Magnifying glass over text',
    imageDesc: 'Stylized magnifying glass highlighting the letters SEO',
    slug: 'python-microcontrollers',
  },
];

const categories = ['All', 'Embedded Systems Programming', 'IoT (Internet of Things)', 'Automotive Embedded Software'];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fixed filtering logic with trimming
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || post.category.trim() === selectedCategory.trim();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Insights & Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Stay updated with the latest trends, tips, and news from Duxes Academy.</p>
      </motion.section>

      {/* Blog Content Area */}
      <section className="container grid lg:grid-cols-4 gap-12">
        {/* Mobile Sidebar */}
        <aside className="block lg:hidden space-y-8 mb-8">
          {/* Search */}
          <div className="p-6 bg-card border rounded-lg">
            <Label htmlFor="blog-search-mobile" className="font-semibold mb-2 block">Search Blog</Label>
            <div className="relative">
              <Input
                id="blog-search-mobile"
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Categories */}
          <div className="p-6 bg-card border rounded-lg">
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start ${selectedCategory === category ? 'bg-accent text-accent-foreground' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Posts */}
        <main className="lg:col-span-3 space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300">
                  <div className="md:w-1/3 h-48 md:h-auto relative">
                    <img className="absolute inset-0 w-full h-full object-cover" alt={post.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link to={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <p>No posts found matching your criteria.</p>
            </div>
          )}
        </main>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 space-y-8 h-fit sticky top-24">
          {/* Search */}
          <div className="p-6 bg-card border rounded-lg">
            <Label htmlFor="blog-search-desktop" className="font-semibold mb-2 block">Search Blog</Label>
            <div className="relative">
              <Input
                id="blog-search-desktop"
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Categories */}
          <div className="p-6 bg-card border rounded-lg">
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start ${selectedCategory === category ? 'bg-accent text-accent-foreground' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BlogPage;
