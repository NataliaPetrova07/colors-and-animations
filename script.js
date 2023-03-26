"use strict";

// MOTION ONE
import { animate, scroll, stagger, timeline, inView } from "https://cdn.skypack.dev/motion";
animate(".header_text", { opacity: [0, 1] }, { duration: 5 });

const highlightAni = animate(".highligh_h2", { transform: "translateX(-300px)" }, { duration: 2, easing: "ease-out" });
inView(".highligh_h2", (info) => {
  // and remove it again
  console.log("highlight INVIEW");
  highlightAni.play();
  return () => {
    highlightAni.cancel();
    console.log("highlight OUT OF VIEW");
  };
});

scroll(
  animate(".product_graphics", {
    rotate: -360,
  }),
  { target: document.querySelector("#product") }
);

// ROCKET

const wiggleProp = {
  duration: 500,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};

const wiggleKey = [{ transform: "translateY(1.5vw)" }, { transform: "translateY(0)" }];

const rocketship = document.querySelector(".header_graphics");
const wiggleAnimation = rocketship.animate(wiggleKey, wiggleProp);

rocketship.addEventListener("mouseover", rocketHover);
rocketship.addEventListener("mouseleave", rocketUnHover);

function rocketHover() {
  console.log("Rocket hovered!");
  wiggleAnimation.pause();
}

function rocketUnHover() {
  wiggleAnimation.play();
}
