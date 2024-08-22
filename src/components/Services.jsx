import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Unlock New Opportunities with Our Expertise"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We specialize in transforming your ideas into digital reality,
          leveraging our extensive experience and innovative approach.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Development">
              Crafting high-quality, visually appealing marketing pages tailored
              to your brand. Our team ensures that your website not only looks
              great but also performs seamlessly.
            </ListItem>
            <ListItem title="Application Development">
              Building robust applications using the latest frameworks like
              React and Flutter. We focus on creating scalable and efficient
              applications that meet your business needs.
            </ListItem>
            <ListItem title="E-commerce">
              Developing modern e-commerce solutions to enhance your online
              presence. Our solutions are designed to provide a seamless
              shopping experience for your customers.
            </ListItem>
            <ListItem title="Custom Content Management">
              Providing scalable and customized CMS solutions to meet your
              unique needs. Our CMS solutions are designed to be user-friendly
              and adaptable to your specific requirements.
            </ListItem>
            <ListItem title="DevOps">
              Streamlining your development and operations processes with our
              DevOps services. We help you achieve faster delivery, improved
              collaboration, and continuous integration and deployment.
            </ListItem>
            <ListItem title="AI and Machine Learning">
              Integrating AI and machine learning solutions to automate
              processes and enhance decision-making. Our services include custom
              AI development, model training, and deployment.
            </ListItem>
            <ListItem title="UI/UX Design">
              Creating intuitive and engaging web and app interfaces using Figma
              and Adobe Photoshop. Our design team focuses on user-centered
              design principles to deliver exceptional user experiences.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
