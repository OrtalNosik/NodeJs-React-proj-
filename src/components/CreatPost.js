import React, { useState } from "react";
import '../style/CreatPost.css'


function CreatPost(props) {
    const [content, setcontent] = useState("");
    const [theme, setTheme] = useState('אחר');
    const [postCounts, setPostCounts] = useState({
        בית: 0,
        זוגיות: 0,
        משפחה: 0,
        אחר: 0
    });
    const [isAnonymous, setIsAnonymous] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsAnonymous(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3200", { //get the data
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                author: isAnonymous ? "Unkname" : props.name,
                date: new Date().toLocaleDateString('en-GB'),
                content,
                authorImg: props.img,
                likes: [],
                comments: [],
                theme: theme
            }),
        }).then((res) => res.json())
            .then((data) => {
                setPostCounts((prevCounts) => ({
                    ...prevCounts,
                    [theme]: prevCounts[theme] + 1
                }));
                window.location.href = '/';
            });

    };

    return (
        <div className="post-form-container">
            <form onSubmit={handleSubmit}>

                <div className="profile-picture">
                    <img src={props.img} alt="Profile" />
                </div>

                <div className="post-form-content">

                    <div className="anonymous-button-container">
                        <label>
                            <input type="checkbox"
                                name="isAnonymous"
                                id="isAnonymous"
                                checked={isAnonymous}
                                onChange={handleCheckboxChange} />
                            <span></span>
                        </label>
                        <span>Anonymous</span>
                    </div>
                    <div className="post-themes">
                        <label>
                            <input
                                type="checkbox"
                                value="בית"
                                checked={theme === 'בית'}
                                onChange={() => setTheme('בית')}
                            />
                            בית
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="זוגיות"
                                checked={theme === 'זוגיות'}
                                onChange={() => setTheme('זוגיות')}
                            />
                            זוגיות
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="משפחה"
                                checked={theme === 'משפחה'}
                                onChange={() => setTheme('משפחה')}
                            />
                            משפחה
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="אחר"
                                checked={theme === 'אחר'}
                                onChange={() => setTheme('אחר')}
                            />
                            אחר
                        </label>
                    </div>
                    <textarea
                        value={content}
                        onChange={(event) => setcontent(event.target.value)}
                        placeholder=" Start a post"
                    />

                </div>
                <button type="submit">Post</button>

            </form>
        </div>
    );
}

export default CreatPost;
