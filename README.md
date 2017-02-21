## Poggle
[Live Version](https://github.com/jbt/markdown-editor)

This is a basic (and much easier) version of the class game Boggle. It is built using React, HTML, and CSS.

### Features
* Game board which randomly displays tiles on refresh.
* Interactive tiles which can be selected and deselected to spell "Current Word".
* Scores calculated by word and up-to-date "Total Score".

### If I had more time...
* I'd impose more logic on which tiles can be selected. (In the real game, you can only select tiles adjacent to the previous selected tile, etc.)
* I'd figure out a better way to give child component's keys so that I can get rid of the console warnings (which would also improve performance since React uses those keys to quickly update the DOM).
