import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from "../../../Components/progress";
import Timeline from '../parts/Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Skills
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""} onClick={() => this.setState({tab: "experience"})}>
                        Experience
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""} onClick={() => this.setState({tab: "education"})}>
                        Education
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <Progress text="JavaScript , React , React-Native , Node.js " />
                        <Progress text="Java , Spring Framework , Android Studio , JUnit" />
                        <Progress text="C , C# , C++ , OpenGl , Unity , Unreal Engine" />
                        <Progress text="MongoDB , SQL , HSQLDB , JPQL" />
                        <Progress text="Python , Git " />


                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "experience" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "September 2020 – Present" :  {
                                    title: "Software Developer – Co-op Work Term 2",
                                    institution: "CANADA LIFE",
                                    description:
                                        "• Developing a financial system for the internal business team using React, Redux, Java (Spring Framework).\n" +
                                        "• Implementing new UI features in React, rest services in Java Spring and unit testing them in three different environments to ensure it behaves as intended with a large data volume.\n" +
                                        "• Implemented a WebSocket protocol to open a two-way interactive communication session between the user's browser and a server.\n" +
                                        "• Implemented AES Encryption using cryptoJS to ensure a secure login.\n" +
                                        "• Created a Splunk dashboard to give real-time log analysis on an insurance application, log files from the application are used for error checking to reduce downtime and activities for threat remediation."
                                },
                                "Jan 2020 – April 2020" : {
                                    title: "Jr. Front-End Developer (React) – Co-op Work Term 1",
                                    institution: "LOTLINX",
                                    description:
                                        "• Revamped an award-winning website’s UI and app interface with new responsive components and layouts (turn3). Added animations to components using react-springs for enhanced user experience.\n" +
                                        "• Documented and developed UI components with addons in isolation utilizing Storybook JS.\n" +
                                        "• Used GraphQL to query schema, create mutations and shape query data to the required format for various libraries.\n" +
                                        "• Collaborated with design team using mock-up tools like Avocode."
                                },
                                "2018 - Present" : {
                                    title: "Logistic Controller",
                                    institution: "SkipTheDishes",
                                    description: "• Pro-actively managing the network’s performance from making important logistical decisions to ensure each stakeholder’s experience meets Skip’s standards.\n" +
                                        "• Applying Skip’s technology and tools to continuously optimize the efficiency of the network.\n" +
                                        "• Multi-tasking and prioritization to work on multiple orders at once.\n" +
                                        "• Working fluidly with a group of skilled and dynamic team members to ensure every order is completed successfully"
                                },
                            }
                        }
                    />
                    </Tab>
                    <Tab style={{
                            display: this.state.tab === "education" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "2017 - Present" : {
                                    title: "B.Sc in Computer Science",
                                    institution: "University of Manitoba",
                                    description: "Doing an Honors in Computer Science with a specialization in HCI and AI"
                                },
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart