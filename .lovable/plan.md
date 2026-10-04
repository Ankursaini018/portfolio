# Premium Motion Upgrade

## Goal
Keep the current portfolio’s content, sections, links, typography, colors, imagery, and layout intact while adding a cohesive Diroz-inspired motion system built from scratch.

## What will change
- Add a weighted smooth-scroll layer that preserves anchor links, keyboard scrolling, touch usability, and native scrolling when reduced motion is enabled.
- Choreograph the initial load: navigation, hero labels, split hero copy, supporting controls, portrait, and image strips will enter in a deliberate sequence.
- Add one-time scroll reveals to each existing section: labels first, masked headings second, supporting copy and repeated content staggered afterward.
- Add subtle scroll-linked parallax to selected existing imagery and decorative layers without shifting layout or introducing overflow.
- Refine existing project, skill, link, button, navigation, portrait, and footer interactions with restrained transform-based motion.
- Add a subtle top scroll-progress line and make the existing back-to-top control appear after scrolling.
- Preserve the existing automatic three-portrait slideshow and integrate it with the new motion timing.

## Technical details
- Install and use GSAP with ScrollTrigger and Lenis; centralize setup and cleanup in a dedicated public-page motion controller.
- Mark existing elements with animation hooks only; do not rewrite their content or reorganize the page.
- Use transforms, opacity, clip paths, and requestAnimationFrame-friendly effects; avoid layout-property animation.
- Keep the no-arrow project-card rule. The brief’s project-arrow hover is excluded because it conflicts with the approved portfolio constraint.
- Skip project-image unveil and horizontal project scrolling because the current project design has no project images and its vertical list should remain visually unchanged.
- Skip counters and process-step animation because those content blocks do not exist; no new content will be invented.
- Disable custom cursor, heavy parallax, smooth scrolling, and large transforms for touch or reduced-motion users.

## Validation
- Check page load, anchors, menu, portrait slideshow, section reveals, project links, contact form validation, and back-to-top behavior.
- Test 320, 375, 430, 768, 1024, 1440, and 1920 widths for overflow, clipping, flicker, layout shifts, and usable mobile scrolling.
- Confirm no preview errors and that reduced-motion content is immediately visible.
