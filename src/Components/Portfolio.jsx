/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Oil Circulation in Heat Pumps 🎉",
    description:
      "Study of oil circulation rate in variable speed scroll compressor working with propane.",
    url: "https://doi.org/10.1016/j.ijrefrig.2020.12.002",
  },
  {
    title: "Compressor Testing",
    description:
      "Testing of Variable-Speed Scroll Compressors and their inverters for the evaluation of compact energy consumption models.",
    url: "https://doi.org/10.1016/j.applthermaleng.2023.120725",
  },
  {
    title: "Heat Exchanger Design",
    description:
      "A novel methodology to assist manufacturers in the heat exchanger sizing for variable-speed heat pumps based on part load conditions and econom-ic assessment.",
    url: "https://doi.org/10.1016/j.applthermaleng.2023.120725",
  },
  {
    title: "UPV Researcher",
    description:
      "Researcher at the Universitat Politècnica de València since 2018,  with a PhD in Mechanical Engineering.",
    url: "https://www.upv.es/ficha-personal/rubossan",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
