import React from 'react';
import { render } from '@testing-library/react';
import Articles from '../components/Articles';


describe('Articles component', () => {
    test('renders the component', () => { //first test - test the article title
        const { getByText, getAllByRole } = render(<Articles />);
        const sectionTitle = getByText('קישורים לחמישה מאמרים עבורך:');
        expect(sectionTitle).toBeInTheDocument();
    });
});

describe('Articles link', () => {
    test('check link', () => { //test the list of the articles
        const { getByText, getAllByRole } = render(<Articles />);
        const links = getAllByRole('link');
        expect(links).toHaveLength(5);
    });
});

describe('Articles titles', () => {
    test('check titles and links', () => { //test the correct article titles and links
        const { getByText, getAllByRole } = render(<Articles />);
        const articleTitles = [
            'האם אתם סובלים מאלימות רגשית בתוך קשר?',
            'אלימות פסיכולוגית',
            'נתונים על אלימות כלפי נשים',
            'הגדרה ומאפייני התעללות רגשית סמויה והשלכותיה לנפגעים',
            'מי מתעלל בבן/בת זוג?'
        ];
        articleTitles.forEach((title, index) => {
            const link = getByText(title);
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', expect.stringContaining('https://'));
        });
    });
});
describe('Articles CSS', () => {
    test('test CSS class names', () => { //test the css in the article page
        const { container } = render(<Articles />);
        const sectionTitle = container.querySelector('h1');
        expect(sectionTitle).toHaveClass('section-title');
        const linkBox = container.querySelector('ul');
        expect(linkBox).toHaveClass('link-box');
    });

});