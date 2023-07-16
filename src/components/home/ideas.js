import React from "react"
import Idea from "./idea"

const Ideas = () => (
  <section className="c-ideas">
    <div className="c-ideas__heading-container">
      <h2 className="t-title c-ideas__heading">Ideas</h2>
      <p className="t-paragraph c-ideas__text">Some of the things I have learned, perspectives I hold, and Figma resources I have built for&nbsp;designers.</p>
    </div>
    <div className="c-ideas__scroll-container">
      <ul className="c-ideas__list">
        <Idea
          type="Figma Plugin"
          title="Contrast Description"
          actionText="Try it out"
          actionLink="https://www.figma.com/community/plugin/1010556985353208247"
          callout
        />
        <Idea
          type="Article"
          title="How to Build Trust with Clients and Why It’s Worth Your Time"
          forName="Adobe XD"
          actionText="Read"
          actionLink="https://xd.adobe.com/ideas/perspectives/leadership-insights/building-trust-client-designer-relationships/"
        />
        <Idea
          type="Article"
          title="Design Principles for Developers"
          forName="CSS Tricks"
          actionText="Read"
          actionLink="https://css-tricks.com/design-principles-for-developers-processes-and-css-tips-for-better-web-design/"
        />
        <Idea
          type="Figma Resource"
          title="UI Starter Kit"
          actionText="Try it out"
          actionLink="https://www.figma.com/community/file/1179139131585085734"
        />
        <Idea
          type="Talk"
          title="The Ladder of System Thinking"
          forName="UnConference"
          actionText="Watch"
          actionLink="https://www.youtube.com/watch?v=cSbLpbXZYYI"
        />
        <Idea
          type="Article"
          title="Advanced CSS selectors for common scenarios"
          forName="LogRocket"
          actionText="Read"
          actionLink="https://blog.logrocket.com/advanced-css-selectors-for-common-scenarios/"
        />
        <Idea
          type="Article"
          title="The Case for Including a Designer from Project Start to Finish"
          forName="Sparkbox"
          actionText="Read"
          actionLink="https://sparkbox.com/foundry/include_designer_in_web_design_process"
        />
        <Idea
          type="Article"
          title="Accessible by Design"
          forName="Sparkbox"
          actionText="Read"
          actionLink="https://sparkbox.com/foundry/accessible_by_design"
        />
        <Idea
          type="Article"
          title="Performant Design"
          forName="Sparkbox"
          actionText="Read"
          actionLink="https://sparkbox.com/foundry/improve_website_speed_performance_with_design_choices"
        />
        <Idea
          type="Article"
          title="Maintaining Design Vision"
          forName="Sparkbox"
          actionText="Read"
          actionLink="https://sparkbox.com/foundry/maintaining_design_vision"
        />
      </ul>
    </div>
  </section>
)

export default Ideas
