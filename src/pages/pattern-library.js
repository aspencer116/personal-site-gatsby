import React from "react"

import Layout from "../components/layout"
import Color from "../components/color"
import SEO from "../components/seo"

const PatternLibrary = () => (
  <Layout>
    <SEO title="Pattern Library" />
    <h1>Pattern Library</h1>
    <p>A collection of styles and patterns for use across the site.</p>


    <h2>Colors</h2>
    <ul class="o-grid o-grid-4">
      <Color colorName="pine"/>
      <Color colorName="pine-dark"/>
      <Color colorName="seafoam"/>
      <Color colorName="seafoam-light"/>
      <Color colorName="stone"/>
      <Color colorName="stone-light"/>
      <Color colorName="stone-dark"/>
      <Color colorName="mist"/>
      <Color colorName="mist-dark"/>
    </ul>
  </Layout>
)

export default PatternLibrary
