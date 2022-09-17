import React from "react";
import { Grid, View, useTheme, Image, Text } from "@aws-amplify/ui-react";
import img from "../../image/Herosection-bg-removebg-preview1.png";

import "./HeroSection.css";

const HeroSection = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <Grid
        templateColumns={{ base: "1fr", large: "1fr 1fr" }}
        templateRows="10rem 10rem"
        gap={tokens.space.small}
        marginTop={{ large: "6rem", base: "6rem" }}
        alignItems="center"
      >
        <View marginLeft={{ large: "4rem", base: "2rem" }}>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div
                style={{
                  borderTopRightRadius: "9rem",
                  borderTopLeftRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                  borderBottomLeftRadius: "9rem",
                }}
                className="flip-box-front"
              >
                <Image
                  alt="Picture"
                  src={img}
                  style={{
                    borderTopRightRadius: "9rem",
                    borderTopLeftRadius: "2rem",
                    borderBottomRightRadius: "3rem",
                    borderBottomLeftRadius: "9rem",
                  }}
                  objectFit="initial"
                  objectPosition="50% 50%"
                  backgroundColor={tokens.colors.pink[30]}
                  opacity="100%"
                  onClick={() => alert("📸 Say cheese!")}
                />
              </div>
              <div
                style={{
                  borderTopRightRadius: "9rem",
                  borderTopLeftRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                  borderBottomLeftRadius: "9rem",
                }}
                className="flip-box-back"
              >
                <Image
                  alt="Picture"
                  src={img}
                  style={{
                    borderTopRightRadius: "9rem",
                    borderTopLeftRadius: "2rem",
                    borderBottomRightRadius: "3rem",
                    borderBottomLeftRadius: "9rem",
                  }}
                  objectFit="initial"
                  objectPosition="50% 50%"
                  backgroundColor={tokens.colors.pink[30]}
                  opacity="100%"
                  onClick={() => alert("📸 Say cheese!")}
                />
              </div>
            </div>
          </div>
        </View>
        <View marginTop={{ large: "0", base: "20rem" }}>
          <Text
            color={tokens.colors.white}
            textAlign="justify"
            fontSize="1.5rem"
            fontWeight="900"
            padding="1rem"
          >
            Hello, <br /> As a Computer Science and Engineering student, I am
            here to make sure a good career opportunity using my knowledge and
            skills. I am always devoted towards my work and ready to make a
            significant contribution in my job.
          </Text>
        </View>
      </Grid>
    </div>
  );
};

export default HeroSection;
