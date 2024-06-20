# Vanlife

In progress ...

## Nested Routes

- Only use if there's some shared UI between elements.
- Not recommended if you only want to eliminate path repetition.

### Example

Which of the following is the best solution?

```jsx
// 1) NON-NESTED - repetition of 'vans' in the paths.
<Route
  path="vans"
  element={<Vans />}
/>
<Route
  path="vans/:id"
  element={<VanDetail />}
/>


// OR

// 2) NESTED - repetition of 'vans' eliminated from paths.
<Route path="vans">
  <Route
    index
    element={<Vans />}
  />
  <Route
    path=":id"
    element={<VanDetail />}
  />
</Route>
```

- Both work, but as `<Vans />` and `<VanDetail />` do **not** share UI, "1) NON-NESTED" is the best choice.

---

## Synch `vite.config.js`, `package.json` and `BrowserRouter basename`

### `vite.config.js`

```JavaScript
base: "/vanlife",

// NOT "/protected-routes/",
```

### `package.json`

```JSON
"homepage": "https://chrisnajman.github.io/vanlife",

// NOT "https://chrisnajman.github.io/protected-routes/",

```

### `BrowserRouter basename`

```jsx
<BrowserRouter basename="/vanlife">

{/* NOT "/protected-routes/" */}
```

---

1. What is the primary reason to use a nested route?
   Whenever we have some shared UI between routes in our app.

2. What is a "Layout Route"?
   It's the parent route of some nested routes that contains just
   the portion of the UI that will be shared. It will use an Outlet
   component.

3. What does the `<Outlet />` component do? When do you use it?
   We use it anytime we have a parent Route that's wrapping
   children routes. It renders the matching child route's
   `element` prop given in its route definition

4. What is an "Index Route"?
   It's the "default route" we want to render when the path
   of the parent route matches. It gives us a chance to render
   an element inside the parent's `<Outlet />` at the same path
   as the parent route.

---

## Loaders

1. When does the code in a loader function run?

Before the route change happens and the component for that route loads

2. What are some benefits of using a data loader function
   instead of fetching our data in a useEffect in a component?
   - Don't need to worry about handling loading state in the
     component
   - Don't need to have lengthy/confusing useEffect code in our
     component
   - Don't need to handle error state in the component
3. What change do we need to make to our BrowserRouter before
   we can use loaders (or any of the new data-layer API features)
   in our app?

   Get rid of the BrowserRouter component and use
   createBrowserRouter() instead. Can use
   createRoutesFromElements() to make the transition a bit easier

4. What are the steps we need to take in order to use
   a loader on any given route?

   1. Define and export a loader function
   2. Import the loader and pass it to the route we're wanting
      to fetch data for
   3. Use the useLoaderData() hook to get the data from the loader
      function.

---
