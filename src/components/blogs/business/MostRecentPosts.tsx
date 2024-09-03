import BlogLayout from "../BlogLayout";
import { BlogLists } from "./BlogLists";
import { BlogsProps } from "./MostReadPosts";

export const MostRecentPosts = ({ title, posts }: BlogsProps) => {
  return (
    <BlogLayout title={title}>
      <BlogLists posts={posts} />
    </BlogLayout>
  );
};
