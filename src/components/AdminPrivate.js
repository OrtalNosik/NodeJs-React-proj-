import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/AdminPrivate.css';

function AdminPrivate() {
  const [users, setUsers] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [postCounts, setPostCounts] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch users
        const userResponse = await axios.get('http://localhost:3200/users');
        if (userResponse && userResponse.data) {
          setUsers(userResponse.data);
        } else {
          console.log('User response:', userResponse);
        }

        // Fetch post count
        const postResponse = await axios.get('http://localhost:3200/post/count');
        if (postResponse && postResponse.data && postResponse.data.count) {
          setPostCount(postResponse.data.count);
        } else {
          console.log('Post count response:', postResponse);
        }

        // Fetch post counts by theme
        const postCountsResponse = await axios.get('http://localhost:3200/post/counts-by-theme');
        if (postCountsResponse && postCountsResponse.data) {
          setPostCounts(postCountsResponse.data);
        } else {
          console.log('Post counts by theme response:', postCountsResponse);
        }

        const usersResponse = await axios.get('http://localhost:3200/user/count');
        if (usersResponse && usersResponse.data && usersResponse.data.count) {
          setUserCount(usersResponse.data.count);
        } else {
          console.log('Users count response:', usersResponse);
        }
      } catch (error) {
        console.error(error);
      }
    }


    fetchData();
  }, []);

  return (
    <div>
      <h1>כל המשתמשים באתר</h1>
      <div className="user-list">
        {users.map(user => (
          <div className="user" key={user._id}>
            <div className="user-details">
              <h3>{user.fname} {user.lname}</h3>
              {user.email && <p><strong>Email:</strong> {user.email}</p>}
            </div>
          </div>
        ))}
      </div>
      <h1>כמות הפוסטים באתר: {postCount}</h1>
      <h1>כמות המשתמשים באתר: {userCount}</h1>
      <div className="post-counts">
        <h1>כמות פוסטים מסווגים לפי נושאים:</h1>
        <ul>
          <li>בית: {postCounts['בית']}</li>
          <li>זוגיות: {postCounts['זוגיות']}</li>
          <li>משפחה: {postCounts['משפחה']}</li>
          <li>אחר: {postCounts['אחר']}</li>
        </ul>
      </div>

    </div>


  );
}

export default AdminPrivate;
