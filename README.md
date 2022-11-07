![Ventures Lab](./docs/VL_signature.jpg)

# Ventures Lab Front-end challenge

## Welcome

Hey, welcome, dear candidate! We're thrilled to have you here. This is your front-end challenge. First of all, let's put some very clear statements, so you can be relaxed and confident.

# The General Rules

## What this challenge **IS NOT**:

This challenge intention is to know you. To help us know you quickly and effectively, we want this challenge to be easy, seamlessly and open in its implementation. So, this challenge CAN'T AND WON'T be:

- Long: we hate long challenges where you spent 15 days building a complex solution that will never run.
- Unfair: we hate unfair challenges. We won't ask you to write an HTTP router from scratch. We want to know you, not boring you.
- Full of traps: we hate obscure challenges. You have the right to demand for clarification and you should only write code when you understood what you need to do. On the other hand, it's on you the responsibility to know what you need, to ask for help, to justify and to clarify everything you do. You are responsible for your work. No dead bodies down the road, ok?

## The Requisites

You will write a front-end application. The details of this application will be detailed downwards. But first, these are your first rules/constraints:

- Please, [fork the project](https://support.atlassian.com/bitbucket-cloud/docs/fork-a-repository/) to your own user. In the end, you will submit a [Pull Request (a.k.a. PR)](https://www.atlassian.com/git/tutorials/making-a-pull-request) to our repo with your solution, so we can evaluate your code.
- Time usage: take your time. We all have a busy life. Let us know your schedule. We'll only check your code when you say it's complete and ready to be reviewed (and you provide the PR against our repo, of course).
- We want this application to be written in React with Javascript, although we like Typescript even more. You can use Create React App, NextJS or any other well known boilerplate. Please, avoid using a full custom boilerplate from the ground.
- You can use any UI Library/System you want. MaterialUI? Styled Components? Chakra UI? Tailwind? Use whatever you feel comfortable and confident. But we will challenge you: why you choose it, what are the pros and cons of your choice. CSS? JSS? SASS? LESS? You decide, you support your decisions ;-) No dead bodies down the road, remember?
- We wan't good component implementation. For that, what we mean is:
  - We want to see a good balance on your components regarding complexity/responsibility/reusability/composability. These are **very important concepts** for us.
  - We want to understand how and why some data are passed through props to the components and why some of the data are get from some global data layer - in case you think you need one.
  - Is it easy to move/reuse your components in different parts of the application?
- You will write a small application. Quick challenge, remember? But we will evaluate your solution **pretending you're building a big one**. So, we won't accept excuses like "Oh, this was a small challenge, so I just used a single local `useState` with a `allMyData` object inside". No, that's not fair. We don't want spend your time writing hundreds of components, but we **do want to see how you think when building a real world React application**. Please, mind this concept when writing your solution.
- Unit tests: these are important. You do NOT need to write tests for all parts of your application. BUT we'll judge what you tested and what you didn't. Tests are valuable, but they're also hard to keep. So, finding a balance of time and check what's more important to test on your solution is also on the line. And we will ask you about your decisions on this subject.
- GIT: we love good Git commit description. If they follow some standard format, this is even better. Also, we want to understand the progress of your work through your commits, so avoid to send just a single commit with "that's all" message on it.

## The bonuses

We're a gambling company. We LOVE bonuses. Our users love bonuses even more. So, here are your bonuses:

- Bonus for excellent Typescript usage. If you know Typescript, we'll love to read and understand your types, interfaces, etc.
- Bonus if you use an HTTP/Cache managed layer, like ReactQuery. But, if you're not familiar with it, you won't loose points. Use it if you're confident with these concepts.
- Bonus for wise form input data control and validations. This have a great impact for our eyes.
- Bonus for strong [ESLint](https://eslint.org/) rules and code formatter (like [Prettier](https://prettier.io/)). We love well formatted and linted code. Even more when it's automatically linted on `git push` events.

> Remember: these are bonus points. Keep your focus and deliver the important parts first.

## In the end, it's just Javascript. Right?

You'll build a Javascript (Typescript?) solution. And we value great code. Good, clear, concise, and testable code is what we want in the end. Tips? Sure!

- Avoid unnecessary `else` statements using early returns
- Avoid switch cases using Object Literals strategy.
- Avoid global loops like `for (var i = 0; i < length; i++)`. We already have best options for those, right?
- Avoid useless imports and unused variables.

## The Application

You'll write a extremely simple sports grid application. On the left side, a menu made by Sports and Matches. Each Match is a button to display its details on the center column of the screen. On the details, the user will have three different options to make place a bet. The user select one of the three buttons, the result is shown on the right column, as a shopping cart. Than, for that, the user can choose an amount of money he wants to place as a bet. On top of the bet value, there will be a multiplier percentage number, that is the possible profit for that bet. In the end, there will be a button to submit the form, confirming the bet, with the total amount.

The rules for the submission is:

- The total amount of the bet can not be less than 100,00 USD.
- The total amount of the bet can't be greater than 1.000,00 USD.

After the bet being placed and successfully sent to the server, a notification/toast should be shown to the user and the bet items should be cleared of the right column.

Please, [head to the mockups](https://www.figma.com/file/bSdenS7ehnGaa10FQyK5Cg/VL-FE-Challenge?node-id=19%3A139), so you can better understand what we're asking you to build.

### What about the API?

The API is up to you. You can use any library (like [MirageJS](https://miragejs.com/)) or [JSON Server](https://github.com/typicode/json-server) to mock or build the API. These are just suggestions, you can do it with any tool or way you feel comfortable. A simple ExpressJS can do the job. You decide. Just **make sure you have the HTTP requests in place** just like you would had on an real world API. A fully hard-coded data solution is not acceptable.

### Bonuses on API:

- The URLs respect REST principles/specs
- The bet submitted should "fail" sometimes. What we suggest is: if the total amount of bet is even, the request is successfully answered (HTTP 200). If the total amount is odd, the API should answer with a failed response (HTTP 400 or something like that).
  - When the API fails, what do you do? Do you show a toast? The data is cleared or kept after a failure in the right column? Why?

## Final Notes

If you want, you can add a "SOLUTION.md" file, to add notes to your solution. Instructions on how to build and run your solution are very welcomed.

Optional: any other information you want to share/consider is also welcomed. Feel free to highlight the strong points of your code or maybe improvements you could do in case you had more time or if it were a real application. This is optional, don't spend too much time on it or don't do it at all.

If you need help, please reach out! Talk to our team by mail or any other contact you may have. We're here to help and clarify your path. Just like we would in our real projects. Let's create some beautiful software together.
