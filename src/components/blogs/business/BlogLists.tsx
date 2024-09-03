import { FC } from "react";
import { CustomButton } from "../../UI/CustomButton";
import { Postprops } from "../../Posts";
import { ArrowRight } from "../ArrowRight";

export const BlogLists: FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 ">
      {posts?.map((post, i) => (
        <div
          className="border p-4 border-[#9C9C9C] w-full sm:w-[363px] h-auto sm:h-[400px] "
          key={`${post.title}-${i}`}
        >
          <div className="flex items-center gap-2">
            {post?.tags?.map((tag) => (
              <h5 className="font-normal text-xs text-black" key={tag}>
                {tag}
              </h5>
            ))}
          </div>
          <img
            src={post?.image}
            alt="business"
            className="w-full sm:w-[331px] h-auto sm:h-[154px] my-2"
          />
          <div className="space-y-1">
            <p className="text-dark-gray font-normal text-base/7 font">
              <span className="text-black">{post.date}</span> {post.author}
            </p>
            <h3 className="text-xl font-bold text-black">{post.title}</h3>
            <p className="font-normal text-xl text-dark-gray">{post.body}</p>
            <CustomButton
              className="text-black text-base font-normal"
              text="Read More"
            />
          </div>
        </div>
      ))}
      <div>
        <CustomButton
          className="text-primary-color-2 text-xl text-bold py-4 px-8 border-2 border-primary-color-2 flex items-center justify-center gap-1"
          text="See All"
          icon={<ArrowRight />}
        />
      </div>
    </div>
  );
};
interface Props {
  posts: Postprops[];
}
