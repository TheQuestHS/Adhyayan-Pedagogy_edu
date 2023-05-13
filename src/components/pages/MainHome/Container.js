import React from 'react'
import Footer from '../MainHome/Footer';
import Icon from '../MainHome/Icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Work</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Mission</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Gamified Lessons</Footer.Link>
                    <Footer.Link href="#">Content</Footer.Link>
                    <Footer.Link href="#">Courses</Footer.Link>
                    <Footer.Link href="#">Website</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">India</Footer.Link>
                    <Footer.Link href="#">Business Queries</Footer.Link>
                    <Footer.Link href="#">Ask Doubts</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#" ><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}