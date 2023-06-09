import React from "react";
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that,
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your sites.
 */

import image from "../images/bachelors.svg";
const imageAltText = "graduation cap and degree";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = "Don't let what you cannot do interfere with what you can do.";

/*random 4 education cell grid*/
const educationList = [
  {
    title: "Thomas More University",
    description: "Bachelor of Science in Data Science",
    date: "2021 - 2024",
    image: "../images/TM.svg",
  },
  {
    title: "University Of Buea",
    description: "Bachelor of Science Geology & Petroleum Engineering",
    date: "2010 - 2014",
    image: "../images/UBueaLogo.svg",
  },
];

/**
 * Use this to give a quotes, or a detail about your education.
 */
const detailOrQuote =
  "Data is the new oil, Analytics is the new refinery & Intelligence is the gasoline which drives growth.";

/* display education list */
const EducationList = () => {
  return (
    <section className="light" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "1rem",
        }}
      >
        <h2>My Education</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "1rem",
          }}
        >
          {educationList.map((education) => (
            <li key={education.title}>
              <h3>{education.title}</h3>
              <p>{education.description}</p>
              <p>{education.date}</p>
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>
          <b>{detailOrQuote}</b>
        </p>
      </div>
    </section>
  );
};

export default EducationList;
