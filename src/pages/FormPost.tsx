import { Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

export default function FormPost() {
  const postData = useLoaderData();

  return (
    <div>
      FormPost
      <a href="/">Go to Home</a>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={postData.title} />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control as={"textarea"} rows={3} value={postData.body} />
        </Form.Group>
        <Form.Group controlId="userId">
          <Form.Label>User Id</Form.Label>
          <Form.Control type="number" value={postData.userId} />
        </Form.Group>
      </Form>
    </div>
  );
}
