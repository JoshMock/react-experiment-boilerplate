# react-experiment-boilerplate

I do a lot of experiments with React. React is not trivial to set up.  And so I
made a boilerplate repo that includes all the stuff I need to run a React app.
All I have to do is this:

```bash
git clone git@github.com:JoshMock/react-experiment-boilerplate.git some-folder
cd some-folder
npm install
npm start
```

This installs everything I need so I can just start editing
[`index.js`](./index.js) and [`index.html`](./index.html) and it will hot
reload on `localhost:8080`!

Yes, it does blow away the `.git` directory on install. That's on purpose. I
don't want to accidentally commit stuff to the boilerplate that's specific to a
particular experiment. ¯\\\_(ツ)\_/¯
