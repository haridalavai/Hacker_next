import Axios from "axios";
import Layout from "../coponents/Layout";
import Title from "../coponents/postTitle";

export async function getStaticProps() {
  let posts;
  const res = await fetch("https://node-hnapi.herokuapp.com/news?page=1");
  posts = await res.json();
  // console.log(posts);

  return { props: { posts } };
}

const Index = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <Title posts={posts} />
    </Layout>
  );
};

export default Index;
