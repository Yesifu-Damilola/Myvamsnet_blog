import { ReactNode } from "react";

const BlogLayout = ({ title, children }: LayoutProps) => {
  return (
    <section className="mx-auto md:containers py-10 w-full">
      <h2 className="font-normal text-[32px] leading-[28px] text-black my-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default BlogLayout;
interface LayoutProps {
  title: string;
  children: ReactNode;
}
