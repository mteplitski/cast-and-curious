# Cast and Curious

Our SheHacks V submission! [Check it out](https://cast-and-curious.herokuapp.com/)

## About the project

Cast and Curious is a tool providing curated podcast recommendations for eager listeners.

### Inspiration

Keeping up with constant political unrest, an economic recession, an ever evolving pandemic, and then some can be a challenging feat. Due to the overabundance of information available, individuals  **don’t know where to start** when looking for ways to educate themselves on topics that interest them. And when they do get around to keeping up with the news, **current events are often confusing without any context**.

Podcasts, along with other news and educational sources, suffer from the issue that a plethora of content causes: **an overwhelmed audience that cannot effectively access the information they want and need.**

### What it does

Every day, it recommends podcast episodes based on top news articles from the New York Times, as well as favourite topics set by the user. Users can also dive deeper into topics of their choice on the `Trending Topics` and `My Topics` pages. Lastly, if users read an article and want to dive deeper through podcasts, `Custom Cast` takes a link to an article and provides recommended podcast episodes based on its main topics.

### How we built it

We built the frontend using React, the backend with Django, and used PostgreSQL as our database.

In order to generate daily recommendations, the app runs a script to retrieve the past day's most viewed articles on the New York Times (using the [Most Popular API]([https://developer.nytimes.com/docs/most-popular-product/1/overview](https://developer.nytimes.com/docs/most-popular-product/1/overview))), and related podcast episodes using Spotify's [search]([https://developer.spotify.com/documentation/web-api/reference/search/search/](https://developer.spotify.com/documentation/web-api/reference/search/search/)) and [episodes]([https://developer.spotify.com/documentation/web-api/reference/episodes/](https://developer.spotify.com/documentation/web-api/reference/episodes/)) APIs, and stores the information in Postgres.

Finally, we deployed everything onto Heroku!

### Challenges we ran into

Our project had two subcomponents: a client and a server. We organized our repository by having two separate folders for these, and deploying each one separately on Heroku. This ended up taking more time than if we had deployed once because of it having two different configurations. However, after collaborating and reading through documentation online, we were able to deploy and connect both parts of our app 🙂.

### Accomplishments that we're proud of

We're really excited that we were able to build a 0 to 1 solution that solves a real problem we've noticed in our community, and in our own lives. During development, we even noted some podcast recommendations we would listen to later!

In addition, this was our first time working together on a coding project, and it was really fun to collaborate through ideation to execution.

### What we learned

In doing research on potential projects, we learned a lot about different APIs and datasets available to the public! While the NYT and Spotify APIs were the two that helped us bring our vision to life, we discovered a lot of good resources that we can take with us in the future.

### What's next for Cast and Curious

Next, we'd like to broaden the news sources for the trending topics. We can use the APIs of additional news sources to determine trending topics from a more holistic view. Then, we'd learn more about the preferences of uses by providing a more tailored experience using supervised machine learning to build a recommendation model. Lastly, we aim to build a mobile-friendly view to empower users to learning more about any topic from anywhere.
