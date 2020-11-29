import React from "react"
import CaseStudyLink from "./caseStudyLink"

const CaseStudyLinks = () => (
  <section className="c-case-study-links">
    <h2 className="t-heading-2 c-case-study-links__heading">Case Studies</h2>

    <ul className="o-delist c-case-study-links__grid-container">

      <CaseStudyLink
        linkPath="/case-study/yo-portfolio"
        linkTitle="YoPortfolio"
        linkDescription="A startup investment product needed a playful brand and UI design to launch them into the&nbsp;future."
        tags={["Branding", "Product Design", "Animation"]}
        color="#27770B"
        image="images/homepage/homepage-graphic_YOP.jpg"
        callout
      />
      <CaseStudyLink
        linkPath="/"
        linkTitle="National Kidney Foundation"
        linkDescription="A national healthcare organization needed a website update to bring consistency and clarity to their&nbsp;vision."
        tags={["Web Design"]}
        color="#3e4859"
        image="images/homepage/homepage-graphic_NKF.jpg"
        comingSoon
      />
      <CaseStudyLink
        linkPath="/case-study/shoes-for-crews"
        linkTitle="Shoes For Crews"
        linkDescription="A leader in slip resistant footwear needed a website overhaul to support multiple brands and a cohesive desktop to mobile&nbsp;experience."
        tags={["Web Design", "Frontent Dev", "E-ecommerce"]}
        color="#1D3C7C"
        image="images/homepage/homepage-graphic_SFC.jpg"
        callout
      />
      <CaseStudyLink
        linkPath="/"
        linkTitle="Whitworth University"
        linkDescription="A nationally ranked university was looking to update the look and structure of their homepage and&nbsp;navigation."
        tags={["UX", "Web Design", "Frontend Dev"]}
        color="#3e4859"
        image="images/homepage/homepage-graphic_Whitworth.jpg"
        comingSoon
      />
      <CaseStudyLink
        linkPath="/case-study/picsnippets"
        linkTitle="PicSnippets"
        linkDescription="A growing digital product needed a marketing site and product redesign to take them to the next&nbsp;level."
        tags={["Web Design", "Product Design"]}
        color="#112639"
        image="images/homepage/homepage-graphic_PicSnippets.jpg"
        callout
      />
      <CaseStudyLink
        linkPath="/"
        linkTitle="Tommy John"
        linkDescription="An ecommerce site for high-quality undergarments was looking to add functionality and speed to their checkout&nbsp;experience."
        tags={["Web Design", "Frontend Dev", "Animation"]}
        color="#3e4859"
        image="images/homepage/homepage-graphic_TommyJohn.jpg"
        comingSoon
      />
    </ul>
  </section>
)

// Not being used

// <CaseStudyLink
//   linkPath="/"
//   linkTitle="Tire Company"
//   linkDescription="A leader in the tire sales industry was looking to build the first web app to help dealerships inspect and sell&nbsp;tires."
//   tags={["UX", "Product Design", "Frontend Dev"]}
//   color="#175882"
//   comingSoon
// />

export default CaseStudyLinks
