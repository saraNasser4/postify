## Getting Started

First, I started with building the app and adding the necessary dependencies.


### Adding Auth.js

I added all of the requirements for the authentication and I used Github for that still not stylish yet.

### Adding Dark and Light Button

there was a small bug where i wrote the layout component in the (root) as layour which wasn't working but we're good now.
I added the logic of the toggle button still not stylish yet.

### Finish with the NavBar

Finished with the logic and the style in the NavBar component and made it first check if the user signin or not and based on that the buttons will chage.

### Adjusting

I added the logo and remove the unnecessary so I can focus only for the next step which building the Hero page.

### Finish with SubHeading component

I finished with the SubHeading comonent and the resone why I put it in individual component cuz we'll need it in difference pages so to save time and not copy and past.

### Add a component for the form in the SubHeading

because the btn in the form needed to be on client server I had to made an individual component.
Added a query to let me know what the user types in the form.

### Add a ui card component

Added a component takes a data as params and then return a card to display on the screen I'd added a fake data just to test.
To add an external photo I needed to tell next.config first so it be aware of the type of the url. 

### Added Sanity

In order to manage my content and store'em in a datastore, I had to add Sanity to do it for me.
The main problem that I faced here was I didn't have 'react.is' and it requireds in order to know whether or not if the components of react type.

### Finish the Sanity logic

I'd created my own schema which are author and startup still everything have to be doing throughout Sanity webpage. However everything works fine.
I had to provide which type of data I want and its name.

### Fetch data from Sanity

Made the project gets its data form the Sanity itself instead of writing the posts manually.
I changed the types.ts file to be suitable for the new data.

### Make the search dynamic

### ensure startup route works depends on the data

I made sure that when the user click on the details button in the card it shows up the right page with the right data.

### Adding final touch in the startup page

There were some things needed to improve in this page in the styling.
I added a small views box at this page. However, it's still not dynamic yet.