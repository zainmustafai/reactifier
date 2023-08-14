import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import BlogCard from "./components/BlogCard";
import { blogPosts } from "../../data/Datafile";

const BlogPage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeading>
        Recent <span className="text-primary">Blogs</span>
      </PageHeading>
      <div className="lg:container grid grid-cols-1 md:grid-cols-2  gap-8">
        {
          // Loop through the blogPosts array and render a BlogCard component for each item in the array
          blogPosts.map((post) => {
            return (
              <BlogCard
                key={post.id}
                link={post.link}
                image={post.image}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default BlogPage;
