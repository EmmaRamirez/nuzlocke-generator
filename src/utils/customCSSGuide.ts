

export const customCSSGuide = `# Custom CSS Guide
Last updated \`v1.5.0\`

Curious about the different ways you can use CSS in the nuzlocke-generator to tweak your template? Well, look no further! This guide covers key gotchas and ways to write CSS, and some recipes to make your life easier.

## Getting Started

You'll need a [baseline understanding of CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS) to fully grok the recipes and examples listed here.

## Modifying the Base

* Scope: Entire result

### Adding a gradient

You can use a CSS gradient as a background image for a result image. For example:

\`\`\`css
.result {
    background-image: linear-gradient(0deg, rgba(1,0,36,1) 0%, rgba(207,0,255,1) 100%) !important;
}
\`\`\`

Creates a purple to dark-blue gradient.

> [This site](https://cssgradient.io/) contains a useful gradient generator








`;
