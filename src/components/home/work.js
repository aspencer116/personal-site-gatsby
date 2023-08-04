import React from "react"
import WorkListing from "./workListing"

const Work = () => (
  <section className="c-work">
      <h2 className="t-title c-work__title">Work</h2>
      <div className="c-work__text">
        <p className="t-paragraph">Having spent most of my career working at digital agencies, I’ve developed a broad skillset while working alongside some incredibly talented people on a diverse array of&nbsp;projects.</p>
        <p className="t-paragraph t-subtle">Case studies coming <s>soon</s> someday.</p>
      </div>
      <ul className="u-delist c-work__listings">
        <WorkListing
          title="Harvard Business Review"
          description="A product overhaul to help business leaders discover and engage with&nbsp;HBR."
          date="2023"
          tags={["Product Design", "User Research"]}
        />
        <WorkListing
          title="Groups Recover Together"
          description="A digital platform to provide hope for those recovering from&nbsp;addiction."
          date="2022"
          tags={["Product Design"]}
        />
        <WorkListing
          title="Fanatics"
          description="A new consumer app for the leader in licensed sports&nbsp;merchandise."
          date="2022"
          tags={["Product Design"]}
        />
        <WorkListing
          title="National Kidney Foundation"
          description="A website redesign to help patients and professionals find critical&nbsp;info."
          date="2019"
          tags={["Web Design", "Frontend Dev"]}
          liveSite={"https://www.kidney.org"}
        />
        <WorkListing
          title="Seegrid"
          description="An ecosystem of digital tools to help humans manage warehouse automation&nbsp;robots."
          date="2021"
          tags={["Product Design", "Design System"]}
        />
        <WorkListing
          title="Dealer Tire"
          description="A first of its kind product to help car dealerships inspect, track, and sell&nbsp;tires."
          date="2019"
          tags={["Product Design", "Frontend Dev"]}
        />
        <WorkListing
          title="Frontrow Health"
          description="A zero to MVP launch for a health tech startup delivering a health products marketplace for consumers powered by reviews from&nbsp;providers."
          date="2022"
          tags={["Product Design", "UX Testing"]}
        />
        <WorkListing
          title="Prolegis"
          description="A startup on Capitol&nbsp;Hill delivering valuable, nonpartisan tools for politcal leaders."
          date="2023"
          tags={["Product Design"]}
        />
        <WorkListing
          title="Design System Survey"
          description="A visual guide to the latest on design&nbsp;systems."
          date="2021"
          tags={["Web Design", "Branding"]}
          liveSite="https://designsystemsurvey.sparkbox.com/2021/"
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