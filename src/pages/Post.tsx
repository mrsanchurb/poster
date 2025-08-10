import { Link, useLoaderData } from "react-router-dom";
import { Post as PostType } from "../types/post";
import { Button, ListGroup } from "react-bootstrap";
import { capitalizeFirstLetter } from "../utility/Cadena";

export default function Post() {
  const dataPosts = useLoaderData();

  return (
    <div>
      <div className="my-5 d-flex justify-content-between align-items-center mb-4">
        <h1>Posts</h1>
        <Button as={Link} to="formpost" variant="primary">
          Add New Post
        </Button>
      </div>

      <ListGroup>
        {dataPosts.length > 0 &&
          dataPosts.map((post: PostType) => (
            <ListGroup.Item key={post.id}>
              <Link to={`${post.id}`}>{capitalizeFirstLetter(post.title)}</Link>
              <p>{capitalizeFirstLetter(post.body)}</p>
              <small>{post.userId}</small>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
