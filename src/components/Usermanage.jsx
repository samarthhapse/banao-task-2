import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";
import Avatar from 'react-avatar';
import Intro from "./Intro";
const Usermanage = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(true);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="record" >
        <Intro/>
        <div className="newuser">
        </div>
        {loading ? (
          <table className="table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Id</th>
                <th>Username</th>
                <th>JobTitle</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <Avatar
                      src={user.avatar}
                    />
                    <td>{user.id}</td>
                  <td>  <Link to={`/user/${user.id}`} style={{ textDecoration: 'none', color:"black" }} >{user.profile.username}</Link></td>
                    <td className="hide-on-small">{user.jobTitle}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center">No data to show.</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <div className="loader">
            <Oval
              height={80}
              width={80}
              color="#0d1117"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#0d1117"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Usermanage;