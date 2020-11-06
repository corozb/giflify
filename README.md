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
