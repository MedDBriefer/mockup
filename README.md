# mockup

This App pretty much follows what you get if you'd created a new app via either `npx create-react-app mockup`
or (my newly just discovered) `yarn create react-app mockup`.

you can see documentation up at https://create-react-app.dev/docs/getting-started

although basically,

* start up dev server (watches for code changes): `yarn start`
* create a production build: `yarn build`

packages added were
`bootstrap reactstrap classnames react-router-dom`

and some dev packages
`gh-pages`

* `reactstrap` - a bunch of components created for bootstrap entirely re-written as react components (no jquery or other bootstrap js dependencies), but using the bootstrap css, thus the need for bootstrap to be installed as well.  The other major competing project is `react-bootstrap`. I looked into it, chose this one, and haven't had problems, but I'm not necessarily requiring we use bootstrap
* `classnames` - simply a function which is useful in react when dynamically computing className props in components
* `react-router-dom` - one of the popular routers used in react projects. basically, lets our single-page-app (SPA) appear to do multiple web pages
* `gh-pages` - allows you to deploy your build to github pages simply by typing `yarn deploy`.  creates a gh-pages branch of this repo and uploads the `build` dir to it and it just works, (although you need to manully add the predeploy and deploy scripts in `package.json`.  It tells you to add the `homepage` field, but I think that's just informational, and it isn't actually used by this package)

Anyway,  since this is a single app which displays multiple mockups, The App is simply a router and then there are multiple mockups which I've added as routes, but pretty much have configured as if they were the main 'app'.

I the Mockups implemented as class Components, as they store the application state, and pass everything as props down through the conponent hierarchy - all other components are functional components.

I'm *currently* passing almost everything down as props.  There are a few places where I'm using the  `useState` hook, for example to keep track of what tab is selected or what things are collapsed, but I'm thinking it might be nice to save that as app state so that everything could be just as you left off if you return from accidentally closing your web browser, etc., althought that doesn't need to be done for this mockup, as we aren't even saving things to the db.  Also, each Mockup has it's own state, so switching between the two won't simply show how what you've done would look using the other scheme.  That would be nice, but we'd have to move the app state up to the App component so that it could be shared, in addition to figuring out a unified state shape - currently they will be slightly different.  Eventually, in the real system, I imagine there will be a few user preferences, so figuring out what that unified state should be will be a nice exercise.
