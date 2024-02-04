import React, { useState, useEffect } from 'react'
import Title from './Title';
import Login from './Login';
import axios from 'axios';

import Post from './Post';
import CreatPost from './CreatPost';
import '../style/Main.css';


function Main(props) {
    const [posts, setPosts] = useState([]);
    const [imgIndex , setimgIndex] = useState(0)
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const motivationSentence = [
        "ברכות לך על העצמתך והתמדתך לעקוב אחרי חלומותיך!",
        "את מוכיחה שאין גבולות לכוח הרצון וההתמודדות!",
        "המסע שעברת דורש הרבה כוח והתמדה, ואת עשית את זה!",
        "כל הכבוד על עזיבת המצב הלא משמעותי הזה ועל החדשנות שלך!",
        "את משמעת לדרך שלך ומוכנה לקחת את הקצוות בידיים!",
        "העולם פותח לך דלתות חדשות להתקדמות בחיים!",
        "החזקי ותמשיכי להיות למען עצמך ומשפחתך!",
        "העבר שלך מצביע על התמדתך והנחישות שלך להשגת המטרות שלך!",
        "כל אישה יכולה לעשות הכל שתמיד חלמה עליו, את כוחה בתוך עצמה!",
        "אין מצב שתפסיקי להתפתח ולהתגבר כל יום חדש בחיים שלך!"
    ];
    const imges = [
        'https://imageio.forbes.com/specials-images/imageserve/1024882748/0x0.jpg?format=jpg&crop=11000,6187,x0,y568,safe&width=1200',
        'https://img.freepik.com/premium-photo/portrait-happy-beautiful-happy-youngwoman-relaxing-park-joyful-female-model-breathing-fresh-air-outdoors-enjoying-smell-flower-spring-summer-garden-vintage-tone_1423-707.jpg?w=1380',
        'https://img.freepik.com/free-photo/portrait-happy-woman-laughing-with-copy-space-mouth_23-2148850675.jpg?w=1480&t=st=1685289466~exp=1685290066~hmac=125d63e44c0b021d295da6cd1eab9b5b85002b423163afd39e645fc472f0899c',
        'https://img.freepik.com/free-photo/portrait-happy-woman-laughing_23-2148850676.jpg?w=1480&t=st=1685294950~exp=1685295550~hmac=80bf8d4982022b0a74a24fb784e9fb2c239b5e86f36497655223f9bb8ce64287',
        'https://img.freepik.com/free-photo/cute-emotive-woman-happy-achieve-goal-accomplish-good-result-clenches-fists-smiles-happily_273609-27621.jpg?w=1380&t=st=1685296107~exp=1685296707~hmac=a1e8b70f42164176cf253cbd5be0aee775ccb2ab9646b1f70ec2a2508094eaa4',
        'https://img.freepik.com/free-photo/portrait-happy-woman-laughing-with-copy-space-mustache_23-2148850674.jpg?w=1480&t=st=1685289879~exp=1685290479~hmac=e8eae09df86f69c35c82d2b8678b93ceccd80365a96a70ba210301e000f102d6'

    ]

    

    useEffect(() => {
        const timer = setInterval(() => {
            setSentenceIndex((sentenceIndex + 1) % motivationSentence.length);
            setimgIndex((imgIndex+1)%imges.length);

        }, 10000);
        return () => clearInterval(timer);
    }, [sentenceIndex, motivationSentence.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setimgIndex((imgIndex+1)%imges.length);

        }, 10000);
        return () => clearInterval(timer);
    }, [imgIndex, imges.length]);


    useEffect(() => {
        async function getPost() {
            try {

                const response = await axios.get('http://localhost:3200/post');
                if (response && response.data) {
                    setPosts(response.data);
                } else {
                    console.error = jest.fn();
                    console.error('Invalid response:', response);
                }
               
            } catch (err) {
                console.error(err);
            }
        }

        getPost();
    }, []);

    return (
        <div >

            <div>
                <Title text={motivationSentence[sentenceIndex]} img={imges[imgIndex]} />
            </div>

            <br></br>
            {!props.isLoggedIn && <div className='unConnectMassage'>         

                    <p>
                    משתמש יקר , על מנת לקבל את כל פונקציונאליות האתר עלייך להירשם או להיתחבר לאתר
                    </p>

            </div> }
        
            {props.isLoggedIn && <div>

                <div>
                    <CreatPost img={props.img} name={props.name} /> 
                </div>


                <div className="container">
                    
                <div className="POSTS">
                    {posts.map(post => (
                        <Post
                            userEmail = {props.email}
                            postId = {post._id}
                            nameUser ={props.name}
                            imgUser = {props.img} 
                            author={post.author}
                            date={post.date}
                            content={post.content}
                            authorImg={post.authorImg}
                            Likes={post.likes}
                            theme={post.theme}
                            comments = {post.comments}
                        />))}

                </div>
                </div> 

            </div>}



        </div>

    )

}






export default Main;
