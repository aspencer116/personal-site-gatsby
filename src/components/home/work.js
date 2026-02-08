import React from "react"
import HBRimageHover from "../../images/hbr/HBR_card-hover.png"
import HBRimage from "../../images/hbr/HBR_mockup-1_min.jpg"
import WorkListing from "./workListing"

const Work = () => (
  <section className="c-work">
    <h2 className="t-title c-work__title">Work</h2>
    <div className="c-work__text">
      <p className="t-paragraph t-paragraph--callout">
        As a designer who codes, I us an analytical approach to design to
        deliver digital experiences that&nbsp;scale.
      </p>
      <p className="t-paragraph">
        Having worked as a design consultant for almost a decade, I've helped
        build teams and launch successful products for companies of all sizes.
        I'm a generalist designer who bridges the gap between design and code to
        help teams deliver great&nbsp;products.
      </p>
      <p className="t-paragraph t-subtle">
        More case studies coming soon. Portfolio available by request.
      </p>
    </div>
    <ul className="u-delist c-work__listings">
      <WorkListing
        title="Harvard Business Review"
        description="A completely reimagined mobile app for a new generation of business leaders."
        date="2023"
        tags={["Lead Product Designer", "User Research", "UX/UI Design", "React Native"]}
        caseStudy="/case-study/hbr"
        image={HBRimage}
        image2={HBRimageHover}
        imageAlt="Woman holding a phone with the HBR app on it."
        featured
      />
      <WorkListing
        title="HopSkipDrive"
        description="A multi-platform feature launch for wheelchair accessible student transportation."
        date="2025"
        tags={["Product Design"]}
      />
      <WorkListing
        title="Groups Recover Together"
        description="A digital platform to provide hope for those recovering from addiction."
        date="2022"
        tags={["Product Design"]}
      />
      <WorkListing
        title="Fanatics"
        description="A new consumer app for the leader in licensed sports merchandise."
        date="2022"
        tags={["Product Design"]}
      />
      <WorkListing
        title="National Kidney Foundation"
        description="A website redesign to help patients and professionals find critical info."
        date="2019"
        tags={["Web Design", "Frontend Dev"]}
      // liveSite={"https://www.kidney.org"}
      />
      <WorkListing
        title="Seegrid"
        description="An ecosystem of digital tools to help humans manage warehouse automation robots."
        date="2021"
        tags={["Product Design", "Design System"]}
      />
      <WorkListing
        title="Dealer Tire"
        description="A first of its kind product to help car dealerships inspect, track, and sell tires."
        date="2019"
        tags={["Product Design", "Frontend Dev"]}
      />
      <WorkListing
        title="Frontrow Health"
        description="A zero to MVP launch for a health tech startup delivering a health products marketplace for consumers powered by reviews from providers."
        date="2022"
        tags={["Product Design", "UX Testing"]}
      />
      <WorkListing
        title="Prolegis"
        description="A startup on Capitol Hill delivering valuable, nonpartisan tools for political leaders."
        date="2023"
        tags={["Product Design"]}
      />
      <WorkListing
        title="Design System Survey"
        description="A visual guide to the latest on design systems."
        date="2021"
        tags={["Web Design", "Branding"]}
      // liveSite="https://designsystemsurvey.sparkbox.com/2021/"
      />
      {/* <WorkListing
          title="Shoes for Crews"
          description="A complete redesign of a multi-brand e-commerce&nbsp;website."
          date="2019"
          tags={["Web Design", "Frontend Dev"]}
        /> */}
      {/* <WorkListing
          title="YoPortfolio"
          description="A playful brand and MVP product for a startup stock market&nbsp;tool."
          date="2017"
          tags={["Branding", "Product Design"]}
        />
        <WorkListing
          title="Tommy John"
          description="A checkout flow optimized for an emerging online clothing&nbsp;brand."
          date="2019"
          tags={["Web Design", "Frontend Dev"]}
        /> */}
    </ul>
  </section>
)

export default Work
