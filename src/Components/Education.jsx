import React from "react";
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that,
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

import image from "../images/education.svg";
const imageAltText = "table with pens and pencils";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Data Science student studying at Thomas More University. I enjoy transforming and analyzing data in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "MICROSOFT CERTIFIED",
  "Azure Fundamentals",
  "Azure Data Fundamentals",
  "Azure AI Fundamentals",
  "GOOGLE CERTIFIED",
  "Advanced Google Analytics",
  "CISCO CERTIFIED NETWORK ASSOCIATE",
  "Routing and Switching (CCNA R&S) ",
  "Security (CCNA Security)",
  "OTHERS",
  "AOE General Data Protection Regulation (GDPR) Certification",
];
/**
 * Use this to give a quotes, or a detail about your education.
 */
const detailOrQuote = "Data is a precious thing and will last longer than the systems themselves.";

const Education = () => {
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
        }}
      >
        <h2>My Certifications</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>
          <i>
            <b>{detailOrQuote}</b>
          </i>
        </p>
      </div>
    </section>
  );
};

export default Education;
