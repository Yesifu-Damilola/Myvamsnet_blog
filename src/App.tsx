import "./App.css";
import { Privacy } from "./components/Privacy";
import { Terms } from "./components/Terms";
// import { AllFeaturedPosts } from "./components/blogs/business/AllFeaturedPosts";
// import { MostReadPosts } from "./components/blogs/business/MostReadPosts";
// import { MostRecentPosts } from "./components/blogs/business/MostRecentPosts";
// import { CategoryBlog } from "./components/blogs/CategoryBlog";

// import { ShowcaseBlog } from "./components/blogs/ShowcaseBlog";
// import { posts } from "./components/Posts";

function App() {
  return (
    <>
      {/* <ShowcaseBlog />
      <CategoryBlog />
      <MostReadPosts posts={posts} title="Most Read Posts" />
      <MostRecentPosts title="Most Recent Posts" posts={posts} />
      <AllFeaturedPosts posts={posts} title="All Featured Posts" /> */}
      <Terms />
      <Privacy />
    </>
  );
}

export default App;
