import React, { useState, useEffect } from 'react';
import { GrLike, GrLikeFill } from 'react-icons/gr';

function Associations(props) {
  const [associations, setAssociations] = useState([]);
  const [likes, setLikes] = useState(props.likes || 0);
  const [hasLiked, setHasLiked] = useState(false); // just one like for post

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };
  


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://data.gov.il/api/3/action/datastore_search?q=&resource_id=be5b7935-3922-45d4-9638-08871b17ec95&limit=120'
        );
        const data = await response.json();
        setAssociations(data.result.records);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



  return (
    <div >
      <div className="post-header-text">
        <h3 style={{ fontWeight: 'bold' ,fontSize: '30px',textAlign:'center' }}>עמותות</h3>
      </div>
      {associations && associations.length > 0 && associations.reduce((acc, curr, i) => {
        if (i % 4 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(curr);
        return acc;
      }, []).map((row, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          {row.map((association) => (
            <div
              className="post-content"
              key={association._id}
              style={{
                width: '25%',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p style={{ fontWeight: 'bold' }}>שם עמותה:</p>

              <p>{association['שם עמותה בעברית']}</p>

              <p style={{ fontWeight: 'bold' }}>תאריך רישום עמותה:</p>

              <p>{association['תאריך רישום עמותה']}</p>

              <p style={{ fontWeight: 'bold' }}>מספר עמותה:</p>

              <p>{association['מספר עמותה']}</p>

              <p style={{ fontWeight: 'bold' }}>כתובת - רחוב:</p>

              <p>{association['כתובת - רחוב']}</p>

              <div className="post-actions">

                <button onClick={handleLike}>
                  <GrLike className="category-icon" />
                  {likes} {'Like'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Associations;