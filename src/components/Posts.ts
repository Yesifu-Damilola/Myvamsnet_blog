import business1 from "../assets/business1.png";
import businessTech from "../assets/businessTech.png";
import business2 from "../assets/business2.png";

export const posts: Postprops[] = [
  {
    tags: ["Business", "Frontend"],
    image: business1,
    date: "Jun 11, 2023",
    author: "by Sam Victor",
    title: "How to Become a Product Manager",
    body: "Don't let a lack of job and exper...",
  },
  {
    tags: ["Business", "Ecosystem"],
    image: businessTech,
    date: "Jun 20, 2023 ",
    author: "by Sam Victor",
    title: "How to Become a Creative Web Designer",
    body: "Don't let a lack of job and exper...",
  },
  {
    tags: ["Business", "Tech"],
    image: business2,
    date: "Jun 24, 2023",
    author: "by Sam Victor",
    title: "AI Might not be Exactly What You Think it is.",
    body: "Don't let a lack of job and exper...",
  },
  {
    tags: ["Business", "Tech"],
    image: business1,
    date: "Jun 11, 2023",
    author: "by Sam Victor",
    title: "How to Become a Product Manager",
    body: "Don't let a lack of job and exper...",
  },
  {
    tags: ["Business", "Tech"],
    image: businessTech,
    date: "Jun 20, 2023",
    author: "by Sam Victor",
    title: "How to Become a Product Manager",
    body: "Don't let a lack of job and exper...",
  },
  {
    tags: ["Business", "Tech"],
    image: business2,
    date: "Jun 24, 2023",
    author: "by Sam Victor",
    title: "AI Might not be Exactly What You Think it is.",
    body: "Don't let a lack of job and exper...",
  },
];

export interface Postprops {
  tags: string[];
  date: string;
  author: string;
  title: string;
  body: string;
  image: string;
}
