# React Barbooks Gamestore

```
npm install
npm run dev
```

### a. What kind libraries your project is using?

- React
- Vite
- SCSS
- Redux RTK

### b. What could you do better in your code next iteration?

- If i had enough time I can do the ff.
  - **Error Handling** - as of now my implementation is more on happy path just to make sure that the use can visit the page and navigate thru the application
  - **Testing** - Could've add some test using Jest for unit testing and Playwright for e2e testing
  - **Performance** - With the provided deadline and limited time to work on the code. some implementation can be improve and one of them is performance, I'd like to add lazy loading and not show all games combined with infinite scrolling
  - **Responsiveness** - as of the moment my code is not responsive in mobile and tablet

### c. Any other notes you feel relevant for the evaluation of your solution.

I took a principled approach in adhering to the Single Responsibility Principle (SRP) throughout the development of pages and components. Each module focuses on a specific functionality, promoting maintainability and ease of future enhancements. Embracing the BEM (Block, Element, Modifier) methodology for styling, I meticulously scoped out elements and modifiers to ensure a consistent and scalable CSS structure.

In alignment with the project guidelines, I refrained from incorporating any third-party libraries beyond those explicitly mentioned in the assessment. This decision was made to demonstrate a proficiency in leveraging core technologies while avoiding unnecessary dependencies.

Regarding API integration, I encountered challenges with the proxy implementation, especially when dealing with query parameters in the latest React and Vite setup. While the proxy works seamlessly for plain endpoints like "/games," I encountered 500 internal errors when additional query parameters were introduced. Despite these challenges, I successfully employed the proxy on endpoints experiencing CORS errors, ensuring a smooth integration with the API.
