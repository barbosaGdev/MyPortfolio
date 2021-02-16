import React, { useEffect } from "react";
import styled from "styled-components";
import { useDencrypt } from "use-dencrypt-effect";
import TypeWriterEffect from "react-typewriter-effect";
import avatar from "../avatar.png";
import darkAvatar from "../dark-avatar.png";
import ImageFadeIn from "react-image-fade-in";

const FirstSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div``;

export const Title = styled.h3`
  font-size: 50px;
  font-family: sans-serif;
  color: #fff;
`;

const Home = () => {
  const { result, dencrypt } = useDencrypt();
  const myRef = document.querySelector("div");

  const title = "Gabriel David";

  useEffect(() => {
    const action = setInterval(() => {
      dencrypt(title);
    }, 500);

    return () => clearInterval(action);
  }, []);

  return (
    <FirstSection>
      <Content>
        <ImageFadeIn
          id="hoverAvatar"
          style={{ hover: { background: `url(${darkAvatar})` } }}
          opacityTransition={3}
          src={avatar}
        />

        <Title>{result || ""}</Title>

        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.5em",
            textAlign: "center",
          }}
          startDelay={2000}
          hideCursorAfterText={true}
          text="Hi, my name is Gabriel and i am a Software Engineer..."
          typeSpeed={50}
          scrollArea={myRef}
        />

        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.5em",
            textAlign: "center",
          }}
          startDelay={6000}
          hideCursorAfterText={true}
          text="My job is my passion, so i search to do my best ever, because this is my fun."
          typeSpeed={50}
          scrollArea={myRef}
        />

        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.5em",
            textAlign: "center",
          }}
          startDelay={11000}
          hideCursorAfterText={true}
          text="And the fun never stops!"
          typeSpeed={70}
          scrollArea={myRef}
        />
      </Content>
    </FirstSection>
  );
};

export default Home;
