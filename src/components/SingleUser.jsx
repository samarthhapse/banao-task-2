import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Avatar from "react-avatar";
import Intro from "./Intro";
const SingleUser = () => {
  const { userId } = useParams();

  const [singleUser, setSingleUser] = useState({});
  const [loading, setLoading] = useState(false);
  const getSingleUsers = async () => {
    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${userId}`)
      .then((response) => {
        setSingleUser(response.data);
        setLoading(true);
      });
  };

  useEffect(() => {
    getSingleUsers();
  }, [userId]);

  return (
    <div>
      <div style={{marginTop:"40px" ,marginLeft: "420px",marginBottom:"-90px"}}>
      <Intro />
      </div>
      {loading ? (
        <div className="detail">
          <div className="detail-container">
            <Avatar style={{marginLeft: "100px",marginBottom:"20px"}} src={singleUser.avatar}/>
            <h1>{singleUser.profile.username}</h1>
            <p>Job Title : {singleUser.jobTitle}</p>
            <p>Firstname : {singleUser.profile.firstName}</p>
            <p>Lastname : {singleUser.profile.lastName}</p>
            <p>email : {singleUser.profile.email}</p>
            <p>Bio : {singleUser.Bio}</p>
            <p>created at : {singleUser.createdAt}</p>
            <a
              href={`https://602e7c2c4410730017c50b9d.mockapi.io/users/${userId}`}
            >
              Know More about the User
            </a>
          </div>
        </div>
      ) : (
        <div className="loader" style={{marginTop:"200px"}}>
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
  );
};

export default SingleUser;
