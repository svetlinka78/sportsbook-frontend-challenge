![Ventures Lab](./docs/VL_signature.jpg)

# Ventures Lab Front-end challenge

## Welcome

Hey, welcome, dear candidate! We're thrilled to have you here. This is your front-end challenge. So, let's put some very clear statements, so you can be relaxed and confident.

# The General Rules

## What this challenge IS NOT:

This challenge intention is to know you. To help us know you quickly and effectively, we want this challenge to be easy, seamlessly and open in its implementation. So, this challenge CAN NOT be:

- Long: we hate long challenges where you spent 10 days building a complex solution that will never run.
- Unfair: we hate unfair challenges. We won't ask you to write an HTTP router from scratch. We want to know you, not hurt you.
- Full of traps: we hate obscure challenges. You have the right to demand for clarification and you'll should only code when you understood what you need to do. On the other hand, it's on you the responsibility to know, to ask, to justify and to clarify everything you did. You are responsible for your work. No dead bodies on the down the road.

## The Requisites

You will write a front-end application. The details will be downwards, but these are the your first rules/constraints.

- We wan't this application to be written in React with Javascript. You can use Create React App, NextJS or any other well known boilerplate. Please, avoid using a full custom boilerplate from the ground.
- You can use any UI Library/System you want. MaterialUI? Styled Components? Chakra UI? Tailwind? Use whatever you feel confident. But we will challenge you: why you choose it, what are the pros and cons of your choice. CSS? JSS? SASS? LESS? You decide, you support your decisions ;-) No dead bodies, remember?
- We wan't good component implementation. For that, we mean:
  - We want to see a good balance on your components regarding complexity/responsibility/reusability/composability. These are **very** important concepts for us.
  - We want to understand how and why some props are passed through components and why some of them are got from some global data layer.
  - Is it easy to move/reuse your components in different parts of the application?
- Another important rule: you will write a small application. Quick challenge, remember? But we will evaluate your solution **pretending you're building a big one**. So, we won't accept excuses like "Oh, this was a small challenge, so I just used a single local `useState` with a `allMyData` object inside". No. We don't want spend your time writing hundreds of components, but we **do want to see how you think when building a real world application**. Please, mind this concept when writing your solution.
- Unit tests: these are mandatory. You do NOT need to write tests for all parts of your application. BUT we'll judge what you tested and what you didn't. Tests are valuable, but they're also hard to keep. So, find a balance of your available time and what's more important to test on your solution.
- Time usage: you don't have a lot of time today and tomorrow. Use it wisely.
- GIT: we love good git commit description. If they follow some standard format, this is even greater.

## The bonuses

We're a gambling company. We LOVE bonuses. Our users love bonuses even more. So, here are yours:

- Bonus for good Typescript usage. If you know Typescript, we'll love to read and understand your types.
- Bonus if you use an HTTP layer manager, like ReactQuery. But, if you're not familiar with it, you won't loose points. Use it if you're confident with these concepts.
- Bonus for wise forms inputs and validations. This have a great impact for our eyes.
- Bonus for strong [ESLint](https://eslint.org/) rules and code formatter (like [Prettier](https://prettier.io/)). We love well formatted and automatically linted code. Even more when it's automatically linted on `git push` events.

## In the end, it's just Javascript. Right?

You'll build a Javascript (Typescript?) solution. And we value great code. Good, clear, concise and testable code is what we want in the end.Tips? Sure!

- Avoid unnecessary `else` statements using early returns
- Avoid switch cases using Object Literals strategy.
- Avoid global loops like `for (var i = 0; i < length; i++)`. We already have best options for those, right?
- Avoid useless imports and unused variables.

## The Application

You'll write a extremely simple sports grid application. On the left side, a menu made by Sports and Matches. Each Match is a button to display it's details on the center column of the screen. On the details, the user will have three different options to make place a bet. The user select one of the three buttons, the result is shown on the right column, as a shopping cart. For each option, the user can choose an amount of money he wants to place a bet. In the end, there will be a button to confirm all the bets, with the total amount.

The rules for the submission is:

- The total amount of the bet can't be less than 100,00 USD.
- The total amount of the bet can't be greater than 50.000,00 USD.
- The minimum bet for each type of bet can't be less than 20,00 USD.
- The maximum bet for each type of bet can't be greater than 20.000,00 USD.

After the bet being placed and successfully sent to the server, a notification/toast should be shown to the user and the bets should be cleared.

Please, [head to the mockups](https://www.figma.com/file/bSdenS7ehnGaa10FQyK5Cg/VL-FE-Challenge), so you can better understand what we're asking you to build.

### What about the API?

The API is up to you. You can use any library (like [MirageJS](https://miragejs.com/)) or [JSON Server](https://github.com/typicode/json-server) to mock or build the API. These are just suggestions, you can do it with any tool or way you feel comfortable. Just make sure you have the HTTP requests in place just like you would had on an real API.

### Bonuses on API:

- The URLs respect REST principles/specs
- The bet submitted should "fail" sometimes. A success ratio of 70% would be a great addition to see what happens to your screen when the request fails. Do you show a toast? The data is cleared or kept after a failure?
