# Scroll-controlled Manufacturing section

The homepage Manufacturing section has been rebuilt around a sticky, scroll-scrubbed video presentation.

## 1. Install the new dependency

From the project root:

```bash
npm install gsap@^3.13.0
```

## 2. Add the final cylinder video

Put the final rendered video at:

`public/videos/manufacturing-cylinder.mp4`

Recommended master:

- H.264 MP4
- 1920x1080
- muted / no audio
- roughly 3–8 seconds
- first frame: fully exploded cylinder
- final frame: fully assembled cylinder

## 3. What the implementation does

- pins the Manufacturing visual to the viewport while the section scrolls
- maps ScrollTrigger progress to `video.currentTime`
- uses requestAnimationFrame to avoid excessive seek calls
- keeps the video out of React state to avoid re-renders
- reverses naturally when scrolling upward
- synchronizes content stages to the same timeline
- uses the existing manufacturing image as a visual fallback/poster
- respects `prefers-reduced-motion`
- cleans up GSAP/ScrollTrigger and event listeners on unmount

## 4. Story stages

- 0–15%: Engineered for precision
- 15–35%: Precision in every component
- 35–60%: From raw material to finished component
- 60–80%: Built for demanding applications
- 80–100%: Manufacturing CTA

No company statistics or unsupported claims were added.
