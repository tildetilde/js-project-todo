import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/placeholder.svg?height=400&width=1200");
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.title};
`;

const AboutText = styled.p`
  font-family: "Libre Baskerville", serif;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <HeaderImage />
      <AboutTitle>About LISTAT</AboutTitle>
      <AboutText>
        LISTAT is a minimalist task management application designed with a
        clean, editorial aesthetic inspired by Japanese design principles. The
        application focuses on simplicity and elegance, allowing users to record
        and track their daily activities, thoughts, and emotions without
        distraction.
      </AboutText>
      <AboutText>
        The design philosophy behind LISTAT emphasizes the beauty of negative
        space, typography, and subtle interactions. Each element has been
        carefully considered to create a calm, focused environment for managing
        your tasks and reflections.
      </AboutText>
    </AboutContainer>
  );
};

export default AboutPage;
