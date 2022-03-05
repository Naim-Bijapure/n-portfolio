/** @format */

import { getAllFilesFrontMatter } from "@/lib/mdx";
import siteMetadata from "@/data/siteMetadata";
import ListLayout from "@/layouts/ListLayout";
import { PageSEO } from "@/components/SEO";
import WithTranstion from "@/components/WithTransition";
import WithTransition from "@/components/WithTransition";
import LayoutWrapper from "@/components/LayoutWrapper";

export const POSTS_PER_PAGE = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return { props: { initialDisplayPosts, posts, pagination } };
}

function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <LayoutWrapper>
        <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
        <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title="All Posts" />
      </LayoutWrapper>
    </>
  );
}
export default Blog;
