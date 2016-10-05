# Jeopardy Front-End Client

A Front-End Jeopardy Game Client, utilizing a custom [Jeopardy API](https://github.com/tuckyeah/jeopardy-api)

The game is live and available to play at:
<br/>
https://tuckyeah.github.io/jeopardy-client/

### Brief Overview

'Jeopardy' is meant to be a simple, playable, SPA adaptation of the classic game show. After signing up / signing in, a user is invited to create a new game with up to five categories.

The game board is populated with categories and clues, received from the API database. This back-end database is seeded with a random selection of 200 categories (and their respective clues) from a CSV file of every Jeopardy question since the show's premiere (found on Reddit [here](https://www.reddit.com/r/datasets/comments/1uyd0t/200000_jeopardy_questions_in_a_json_file/?st=itkburb0&sh=fed7e744)).

Each game created by a user has a unique collection of categories from this database, as the games are dynamically populated as the user creates them. A user 'owns' their games, and cannot access the games of other accounts.

The user's answers are validated through the API, with steps taken to account for minor typos and differences in punctuation between a user's input and the database provided solution.

For each correct clue, the clue's value is added to the user's winnings. The winnings are cumulative and stored on the user, although there is the option to 'reset' the score at any time (though it will end any games in progress.)


### Building Strategy & Approach

In building the backend of this app, I drew a lot of inspiration and guidance from the incredibly helpful [jService.io](http://jservice.io/) (who are also to thank for the Trebek vector drawing seen throughout the client).

However, jService only selects one category at a time - not enough to populate an entire game board. I quickly realized this would be a different animal.

The biggest challenge I faced in development was designing and structuring my models, which required multiple layers and complex relationships. I spent a significant amount of time drawing maps and ERDs before I began to code, and continued to redesign and tinker with these throughout the development process.

The inclusion of two separate 'virtual' models for the player's input and specific set of clues was a huge endeavour and turning point for me. While I'm sure there is much refactoring to be done, this has nevertheless been an incredible learning experience and crash course in the intricacies of tables and relationships in Rails.

At present, the one unsolved issue I am hoping to resolve ASAP is the matter of ensuring each game's categories has the correct number of clues and unique dollar values (eg - one category won't have 5 clues worth $100). I've started to play around with custom validations and builder functions to accomplish this, and while I'm not quite there yet, I think this is definitely an attainable goal in the near future.

### User Stories & Wireframes

- As a player, I want to play a full jeopardy game
- As a player, I want to be able to keep track of my winnings during a game
- As a player, I want to be able to answer a question and know if I'm right or wrong.
- As a player, I want to be able to pick a number of categories before starting a game, so I can play a 'quick' game if I want.

[Link to ERD](https://docs.google.com/drawings/d/1xK-dUKOK3-OUfcaeHzfsZcUjdpGg2neaxDWH23nHLMY/edit?usp=sharing)
<br />

[Link to Early Wireframe](https://docs.google.com/drawings/d/1z4qt1TeOHFHRrCau3mm7fQ_22rmmpFWq-HJwp2LVnF0/edit?usp=sharing)
