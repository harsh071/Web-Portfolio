import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";


export default class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #111;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        `

        const SocialIcons = styled.div`
            .social_icon {
                font-size: 15px;
                color: #555;
                margin: 0 5px;
                cursor: pointer;
                transition: .5s;
                &:hover {
                    color: #04e5e5;
                }
            }
        `
        return (
            <FooterMain id={"contact"}>
                <SocialIcons>
                    <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/harsh071')}/>
                    <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/harshp071/')} />
                    <FontAwesomeIcon icon={faEnvelope} className="social_icon" onClick={() => window.location.href = "mailto:hypharsh@gmail.com"}/>
                        />
                </SocialIcons>
            </FooterMain>
        )
    }
}
