import React from "react"

import Layout from "../components/layout"
import Color from "../components/color"
import SEO from "../components/seo"

const PatternLibrary = () => (
  <Layout>
    <SEO title="Pattern Library" />

    <div className="o-page-layout">
      <h1 style={{paddingTop: `8rem`}}>Pattern Library</h1>
      <p style={{paddingBottom: `4rem`}}>A collection of styles and patterns for use across the site.</p>

      <h2 className="t-heading-2">Colors</h2>

      <ul className="o-grid o-grid-4">
        <Color colorName="highlight"/>
        <Color colorName="white"/>
        <Color colorName="grayscale-1"/>
        <Color colorName="grayscale-2"/>
        <Color colorName="grayscale-3"/>
        <Color colorName="grayscale-4"/>
        <Color colorName="grayscale-5"/>
        <Color colorName="grayscale-6"/>
        <Color colorName="black"/>
      </ul>

      <h2 style={{paddingTop: `8rem`, paddingBottom: `2rem`}} className="t-heading-2">Typography</h2>

      <h1 className="t-title">Title</h1>
      <h1 className="t-heading-1">Heading One</h1>
      <h2 className="t-heading-2">Heading Two</h2>
      <h3 className="t-heading-3">Heading Three</h3>
      <h4 className="t-heading-4">Heading Four</h4>
      <h5 className="t-heading-5">Heading Five</h5>
      <h6 className="t-heading-6">Heading Six</h6>
      <hr/>
      <p className="t-paragraph t-paragraph--callout">Callout paragraph text style. Ultrices dui sapien eget mi. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.</p>
      <p className="t-paragraph">Example paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Ut lectus arcu bibendum at varius vel pharetra.</p>

      <p className="t-paragraph">Nunc aliquet bibendum enim facilisis gravida neque convallis. Ultrices dui sapien eget mi. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Maecenas sed enim ut sem viverra. Odio euismod lacinia at quis. Ridiculus mus mauris vitae ultricies leo integer. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Urna porttitor rhoncus dolor purus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.</p>
      <hr/>
      <p className="t-paragraph t-paragraph--small">Small paragraph text style.</p>
      <hr/>
      <p style={{marginBottom: `2rem`}} className="t-meta">Meta text style</p>
      <p className="t-meta t-meta--small">Small meta text style</p>
      <br/>
      <hr/>
      <p className="t-paragraph">This is a <a href="https://andrew-spencer.com" className="t-link">Link</a>.</p>
    </div>
  </Layout>
)

export default PatternLibrary
