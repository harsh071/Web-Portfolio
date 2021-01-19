import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import styled, {keyframes} from 'styled-components'
import AnimationContainer from '../../Components/animation-container'
import AnimatedHeading from '../../Components/animated-heading'
import axios from "axios";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

export default class ServicesThree extends React.Component {
    constructor() {
        super();
        this.state = {projects: []};

    }

    componentDidMount() {

    }

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
        `
        const gradientAnimation = keyframes`
            0% {
                background-position: 15% 0%;
            }
            50% {
                background-position: 85% 100%;
            }
            100% {
                background-position: 15% 0%;
            }
        `

        const ColorAnimation = keyframes`
            0%  {background: #04e5e5;}
            10% {background: #f37055;}
            20% {background: #ef4e7b;}
            30% {background: #a166ab;}
            40% {background: #5073b8;}
            50% {background: #04e5e5;}
            60% {background: #07b39b;}
            70% {background: #6fba82;}
            80% {background: #5073b8;}
            90% {background: #1098ad;}
            100% {background: #f37055;}
        `

        const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
            20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
            30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
            40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
            70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
            80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
            100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
        `
        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                animation: ${AnimatedShadow} 10s infinite alternate;
                transform: translateY(-10px);
            }
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            width: 120px;
            height: 120px;
            margin: 0 auto 25px auto;
            background-color: #fff;
            border-radius: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                position: relative;
                bottom: 2.5px;
                animation: ${ColorAnimation} 10s infinite alternate;
            }
        `
        const ServiceLanguageElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 700;
            font-size: 14px;
            margin: 5px 0px;

        `
        // name=
        // description=
        // language=
        // url={project.html_url}
        console.log(this.state.projects)
        return (
            <Section id="projects">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Projects"/>
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" >
                                    <ServiceElement>
                                        <ServiceIcon>
                                            Backend Development
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            NodeJs MongoDB Boilerplate
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceLanguageElement>
                                                Node.js, MongoDb, Express, Mongoose, Nodemon.
                                            </ServiceLanguageElement>
                                            <ServiceListElement>
                                                A web API to be used in projects for database connection and used in dev
                                                environment for automatic restarts.
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown" >
                                    <ServiceElement>
                                        <ServiceIcon>
                                            Game Developement
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Project Space Boost
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceLanguageElement>
                                                C#, Unity, Git.
                                            </ServiceLanguageElement>
                                            <ServiceListElement>
                                                Core Mechanic: Skillfully fly spaceship and avoid environment without
                                                running out of fuel.
                                                Core game loop: Get from point A to B to complete the level, then
                                                progress to the next level.
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" >
                                    <ServiceElement>
                                        <ServiceIcon>
                                            Mobile Developement
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Lagan Matrimonial
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceLanguageElement>
                                                Node.js, MongoDb, React-Native, Redux, Mongoose.
                                            </ServiceLanguageElement>
                                            <ServiceListElement>
                                                A Gujarati matrimonial website made using React-Native and Redux with a
                                                backend in Node.js and a mongoDb database..
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" >
                                    <ServiceElement>
                                        <ServiceIcon>
                                            Mobile Developement
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            BetMates
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceLanguageElement>
                                                Java, Android Studio, Git, HSQLDB, Junit, Espresso.
                                            </ServiceLanguageElement>
                                            <ServiceListElement>
                                                A Social media platform for friendly virtual bet which is an android
                                                application that allows users to create and bet with their friends or
                                                against them where they can partake in friendly competition. Consists of
                                                a feed of data where friends can see each others’
                                                bets. </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" >
                                    <ServiceElement>
                                        <ServiceIcon>
                                            IOT
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            ARDUINO ROBOT CAR
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceLanguageElement>
                                                C++, Arduino
                                            </ServiceLanguageElement>
                                            <ServiceListElement>
                                                Smart Robot car that can track line track using reflected infrared
                                                light. </ServiceListElement>
                                            <ServiceListElement>
                                                Ultrasonic sensor detects distance between objects and avoids
                                                obstacles. </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" >
                                    <ServiceElement>
                                        <ServiceIcon>
                                            Web Developement and AI
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            React Chatbot: Commercial Web Chabot
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceLanguageElement>
                                                React, DiaglogFlow, Heroku, MongoDB, Node.js, Git.                                            </ServiceLanguageElement>
                                            <ServiceListElement>
                                                Conversational commerce bot that can sell products and give
                                                recommendations.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                A webpage chatbot that uses DiagFlow to process natural language and is
                                                hosted on Heroku.
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" >
                                    <ServiceElement>
                                        <ServiceIcon>
                                            Web Developement
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            RestoEat
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceLanguageElement>
                                                React, Redux
                                            </ServiceLanguageElement>

                                            <ServiceListElement>
                                                Online restaurant ordering website with stub functionalities of ordering these include ordering, viewing order history, login and updating information (Credit card information and address).
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}
