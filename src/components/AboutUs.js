import React from 'react';
import tal from "../imges/1.jpg"
import '../style/AboutUs.css';
import ortal from "../imges/2.jpg"
import rotem from "../imges/3.jpg"
import itay from "../imges/4.jpg"




function AboutUs() {
  return (

    <div className="form-container">
      <div className="images-container">
        
        <img src={tal} alt="Image 1" className="img-left" />
        <img src={ortal} alt="Image 2" className="img-left" />
      </div>
      <form className="about-us">
        <h1 style={{ textAlign: "center" }}>קצת עלינו</h1>
        <p>
          ברוכים הבאים לאתר שלנו המוקדש לתמיכה בנשים שחוו בעבר או חוות בהווה אלימות במשפחה. אנו צוות של ארבעה סטודנטים מ-SCE באר שבע, איתי בן יאיר, רותם חדד, טל מימון ואורטל נוסיק, אשר נלהבים מהעצמת נשים וקידום זכויותיהן.        </p>
        <p>
          אנו מבינים שאלימות במשפחה היא נושא רציני שמשפיע על נשים מכל הגילאים, הרקעים והתרבויות. המשימה שלנו היא לספק פלטפורמה בטוחה ותומכת לנשים לבקש עזרה, לשתף את הסיפורים שלהן ולהתחבר לאחרים שחוו אתגרים דומים.        </p>
        <p>
          הצוות שלנו מחויב לעבוד עם ארגונים ויחידים החולקים את החזון שלנו ליצור חברה שמעריכה ומכבדת נשים. אנו מאמינים שלכל אחד מגיע לחיות חיים נקיים מפחד, הפחדה ואלימות. ביחד, נוכל לעשות שינוי בחייהן של נשים ומשפחותיהן.        </p>
        <p>
          אנא אל תהסס לגלוש באתר האינטרנט שלנו ולחקור את המשאבים והתמיכה שאנו מציעים. אם אתה צריך עזרה או יש לך שאלות כלשהן, אל תהסס לפנות אלינו. אנחנו כאן כדי לעזור ולתמוך בך בכל דרך שנוכל.        </p>
      </form>
      <div className="images-container">
        <img src={rotem} alt="Image 3" className="img-right" />
        <img src= {itay} alt="Image 4" className="img-right" />
      </div>
    </div>

  );
}

export default AboutUs;
