import styled from 'styled-components'
import laptop from '../laptop.png'
import Timeline from '../components/Timeline'
import ImageFadeIn from 'react-image-fade-in'
import { Title } from './Home'

const AboutSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

`
const ContentLeft = styled.div`
  width: 40%;
  align-items: center;
  display: flex;
  text-align: left;
`

const Typography = styled.p`
    font-family: "Red Hat Display";
    color: #fff;
    font-weight: 500;
    font-size: 1.5em;
`

const About = () => {
  return (
    <div>
      <Title>What about me?</Title>

      <AboutSection>
        <ContentLeft>
          <Typography>
          My name is Gabriel Barbosa David. When i was child, i loved computer, and I found out that I wanted to work with this
          when I started my technical course. Since then, i study technologies for frontend and backend. Actually 
          I work developing web and mobile applications. So if you need a web software, a mobile app or a simple site, it will be a pleasure to serve you.
          </Typography>
        </ContentLeft>
        <div>
          <ImageFadeIn
            opacityTransition={2}
            src={laptop}
          />
        </div>
      </AboutSection>

      <Timeline titleOne="Professional Experience" titleTwo="Academic Formation"/>

    </div>
  );
};

export default About;
