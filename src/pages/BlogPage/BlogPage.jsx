import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import BlogCard from "./components/BlogCard";

const BlogPage = () => {
  return (
    <div>
      <PageHeading>
        Recent <span className="text-primary">Blogs</span>
      </PageHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
