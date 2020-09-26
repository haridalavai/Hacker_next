import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../coponents/Layout";

const Story = () => {
  const Router = useRouter();

  const { story } = Router.query;

  return (
    <Layout>
      <h1>{story}</h1>
      <span
        className="home"
        onClick={() => {
          Router.back();
        }}
      >
        {" < home "}
      </span>
      <style jsx>{`
        .home {
          text-decoration: none;
          padding-bottom: 1em;
          //   margin-bottom: 10px;
          color: #30475e;
          font-weight: bold;
          font-size: 1.5em;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
};
export default Story;
