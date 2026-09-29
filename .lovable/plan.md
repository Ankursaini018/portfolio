# Diroz Portfolio Redesign

## Goal
Rebuild the public portfolio as a faithful Diroz-style experience: immersive blue visual world, oversized geometric typography, full-screen composition, layered portrait treatment, and responsive 3D motion. Keep Ankur’s content intact and separated by topic—no mixing projects, experience, education, skills, or contact details.

## What will change
- Replace the current light editorial direction across the public portfolio with the Diroz visual system.
- Build a full-viewport opening scene around Ankur’s portrait, with depth layers, pointer-responsive 3D tilt/parallax, floating labels, oversized name typography, and reduced-motion support.
- Restyle navigation, section labels, typography, buttons, links, and transitions to match the reference’s sharp glass panels, blue/white palette, and compact sans-serif type treatment.
- Give About, Skills, Experience, Projects, Education, and Contact their own clearly separated full-width scenes; each retains only its existing content.
- Preserve all project years, links, tags, the no-arrow-on-project-cards rule, contact form submissions, authentication, and admin access.
- Verify the result on desktop and mobile for motion, readability, overflow, links, and form behavior.

## Technical details
- Use the supplied portrait as the central visual and create the depth effect in React/CSS with layered transforms and pointer tracking.
- Reproduce the Diroz motion language rather than copying proprietary Webflow code or media.
- Update semantic color/type tokens and public components only; production data and authorization logic remain unchanged.
- Record the new approved visual direction in the project architecture rules.

## Needed to make it fully complete
- Nothing is required to build the redesign now.
- Optional later: a high-resolution transparent-background portrait would make the central Diroz-style cutout more exact than the current rectangular photo.
- Optional later: live-demo URLs for SkinScan AI and Crop Recommendation if those projects are deployed.
