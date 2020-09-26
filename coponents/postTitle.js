import Axios from "axios";
import Link from "next/link";

// export async function get

const Title = ({ posts }) => {
  // const { postss } = posts;
  const { stories } = posts;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="story">
          <div className="story__title">
            <p>
              <a href={post.url}>{post.title}</a>
            </p>
          </div>
          <div className="story__details">
            <span>{post.points || 0}points</span>
            <span>
              <Link href={`stories/${post.id}`}>
                <a>
                  {post.comments_count || 0}
                  <span>comments</span>
                </a>
              </Link>
            </span>
          </div>
        </div>
      ))}
      <style jsx>{`
        .story {
          margin: 0;

          margin-right: 5rem;
        }

        .story__title a {
          text-decoration: none;
          color: red;
          font-size: 1.3em;
        }
        .story__title a:hover {
          color: blue;
        }
        .story__details {
          display: flex;
          justify-content: flex-start;
          width: 50%;
          font-weight: bold;
        }
        .story__details a {
          text-decoration: none;
          padding-left: 2em;
          margin: 0;
        }
        .story__details span {
          padding-left: 2em;
        }
        .story__details a:hover {
          color: red;
        }
      `}</style>
    </>
  );
};

export default Title;
