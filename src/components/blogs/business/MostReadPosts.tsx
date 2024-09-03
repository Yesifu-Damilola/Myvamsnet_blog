import { Postprops } from "../../Posts";
import BlogLayout from "../BlogLayout";
import { BlogLists } from "./BlogLists";

export const MostReadPosts = ({ posts, title }: BlogsProps) => {
  return (
    <BlogLayout title={title}>
      <BlogLists posts={posts} />
    </BlogLayout>
  );
};
export interface BlogsProps {
  posts: Postprops[];
  title: string;
}
