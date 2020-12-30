# Giflify

In this app you can find **gifs** whatever topic you want. It was built using [GIPHY API](https://developers.giphy.com/)

I use:

- React Hooks
- Wouter instead React Router because is lighter <br>
  `npm i wouter`
  this library uses useLocation instead useHistory but basically have the same functionality
- Service Layer `getData`
- Create a custom hook `useGif`
- Context for global state
- Responsive Design
- baseUrl with jsconfig.json for clean imports
- Intersection Observer API fro lazy loading
- `npm i intersection-observer` **Polyfill** to add functionality in different kind of browsers
- Custom hook for Lazy Loading
- React Lazy load and Suspense
- [React SVG Placeholder](https://github.com/danilowoz/react-content-loader)
- Pagination
- Grid Layout
- [debounce](https://github.com/angus-c/just#just-debounce-it) to call a function after last call
  `npm install just-debounce-it`
- useCallback: avoid a function execution with every re-render and just every time that any depencie changes in its array.
- Infinity Scroll
- Basic testing with React Testing Library (async)
- Evaluate Performance with React Developer Tools and use React.memo
- Deploy with CLI of Vercel
- Custom Hooks to manage the SEO in title and description metadata
- [React Helmet](https://www.npmjs.com/package/react-helmet) `npm i react-helmet`: Is a reusable component to manage all changes in document head
- useReducer to manage state
- Create a custom hook (useForm) to manage state
