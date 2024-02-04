import React from 'react';

import '../style/Articles.css';


function Articles() {
    return (
        <div>
            <h1 className="section-title">קישורים לחמישה מאמרים עבורך: </h1>
            <ul className="link-box">
                <li><a href="https://macom.org.il/definitions/topic_emotional_abuse/emotional_abuse/" target="_blank" rel="noopener noreferrer">אלימות פסיכולוגית</a></li>
                <li><a href="https://fs.knesset.gov.il/globaldocs/MMM/d4173c55-1064-ed11-814f-005056aac6c3/2_d4173c55-1064-ed11-814f-005056aac6c3_11_19771.pdf" target="_blank" rel="noopener noreferrer">נתונים על אלימות כלפי נשים</a></li>
                <li><a href="https://www.regashot-info.co.il/covert-emotional-abuse" target="_blank" rel="noopener noreferrer">הגדרה ומאפייני התעללות רגשית סמויה והשלכותיה לנפגעים</a></li>
                <li><a href="https://hadas-haramati.co.il/2016/07/%D7%9E%D7%99-%D7%9E%D7%AA%D7%A2%D7%9C%D7%9C-%D7%91%D7%91%D7%A0%D7%99-%D7%96%D7%95%D7%92/" target="_blank" rel="noopener noreferrer">מי מתעלל בבן/בת זוג?</a></li>
                <li><a href="https://www.betipulnet.co.il/articles/are_you_suffering_from_emotional_violence_within_a_relationship/" target="_blank" rel="noopener noreferrer" >האם אתם סובלים מאלימות רגשית בתוך קשר?</a></li>

            </ul>
        </div>

    );
}

export default Articles;

