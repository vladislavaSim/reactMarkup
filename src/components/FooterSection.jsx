import React from 'react';
import FooterItem from "./FooterItem";

const FooterSection = ({title}) => {
    const renderLis = () => {
        if (title === 'Destinations') {
            return (
                <>
                    <FooterItem text='Africa'/>
                    <FooterItem text='Antarctica'/>
                    <FooterItem text='Asia'/>
                    <FooterItem text='Europe'/>
                    <FooterItem text='America'/>
                </>
            )
        } else if (title === 'Shop') {
            return (
                <>
                    <FooterItem text='Destination Guides'/>
                    <FooterItem text='Pictorial & Gifts'/>
                    <FooterItem text='Special Offers'/>
                    <FooterItem text='Delivery Times'/>
                    <FooterItem text='FAQs'/>
                </>
            )
        } else if (title === 'Interests') {
            return (
                <>
                    <FooterItem text='Adventure Travel'/>
                    <FooterItem text='Art And Culture'/>
                    <FooterItem text='Wildlife And Nature'/>
                    <FooterItem text='Family Holidays'/>
                    <FooterItem text='Food And Drink'/>
                </>
            )
        }
    }
    let list = renderLis()
            return (
                <div className="footer-section">
                    <p className="footer-title">
                        {title}
                    </p>
                    <ul className="footer-list">
                        {list}
                    </ul>
                </div>
            );
    };

export default FooterSection;