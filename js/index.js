/* jquery.js */
/* jquery.velocity.js */
/* velocity.ui.js */
/* jquery.blast.js */

$(".mariska")
  // Blast the text apart by word.
  .blast({ delimiter: "character" })
  // use "word" to make it looks faster
  // Fade the words into view using Velocity.js.
  .velocity("transition.fadeIn", { 
    display: null,
    duration: 1250,
    stagger: 40,
    delay: 400
  });
