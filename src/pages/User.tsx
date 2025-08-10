import { Button, ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
/*

address: {
  street: 'Kulas Light', 
  suite: 'Apt. 556', 
  city: 'Gwenborough', 
  zipcode: '92998-3874', 
  geo: {…}
  }
company: 
  {name: 'Romaguera-Crona', 
  catchPhrase: 'Multi-layered client-server neural-net', 
  bs: 'harness real-time e-markets'
  }
email: "Sincere@april.biz"
id: 1
name: "Leanne Graham"
phone: "1-770-736-8031 x56442"
username: "Bret"
website: "hildegard.org" 
*/

export default function User() {
  const usersData = useLoaderData();

  return (
    <div>
      <h2>User</h2>
      <Button as={Link} to="formuser" variant="primary">
        Add New User
      </Button>
      <ListGroup>
        {usersData.length > 0 &&
          usersData.map((user: UserType) => (
            <ListGroup.Item key={user.id}>
              <Link to={`:${user.id}`}>{user.name}</Link>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
              <p>
                {user.address.suite}, {user.address.street}. {user.address.city}
              </p>
              <p>{user.address.zipcode}</p>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
