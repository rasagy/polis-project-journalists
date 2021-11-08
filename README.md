![Mapping Patterns Of Violence Against Journalists In India: Cover Image](https://github.com/rasagy/polis-project-journalists/raw/main/Polis-Project-Journalists-Cover.png)

# Mapping Patterns Of Violence Against Journalists In India

## About
Code repository for the interactive scrollable narrative highlighting the violence journalists faced in India between May 2019 — August 2021.

Created for Watch the State ([The Polis Project](https://www.thepolisproject.com/)), funded by [Arctivism Project](https://www.hrdhub.org/arctivism) by the [Human Rights Defenders Hub](https://www.hrdhub.org/documenting-state-violence) at the University of York, UK. 

Data curated by The Polis Project team. Visualization Design, Cartography & Code by Rasagy.

## Sharing this project

If your website allows you to embed the map with full-width, you can use the following code:
````
<iframe src="https://www.thepolisproject.com/mapping-patterns-of-violence-against-journalists-in-india-2019-2021/" frameborder="0" allowfullscreen style="display:block; width:100%; height:600px;">
<p><a href="https://www.thepolisproject.com/mapping-patterns-of-violence-against-journalists-in-india-2019-2021/" target="_blank">View the map on Polis Project website</a></p>
</iframe>
````

If the map doesn’t show up full-width (across the browser width) or the scrolling doesn’t work, then you can add a screenshot of the project [(link to image)](https://github.com/rasagy/polis-project-journalists/raw/main/Polis-Project-Journalists-Cover.png) and add a note below the image with a link to project on the Polis Project website: https://www.thepolisproject.com/mapping-patterns-of-violence-against-journalists-in-india-2019-2021/

## How this was built

* Data manually collected from news reports
* Tagged by names of journalists, events, location & source
* Manually geocoded using [geojson.io](https://geojson.io/)
* Structured using Pivot Table & added as a Mapbox Tileset
* Custom map style & visualization layer using [Mapbox Studio](https://mapbox.com/)
* Scrollytelling using [Mapbox’s Storytelling Template](https://github.com/mapbox/storytelling)
