# Fast React Pizza Co.

Link to deployed application: https://fast-react-pizza-co.netlify.app/

Application that allows the customers to order pizzas and get them delivered to their home.

- Application, where users can order one or more pizzas from a menu
- Requires no user accounts and no login: users just input their names before using the app
- The pizza menu can change, so it is loaded from an API
- Users can add multiple pizzas to a cart before ordering
- Ordering requires the user’s name, phone number, and address
- GPS location is also provided, to make delivery easier
- User’s can mark their order as “priority” for an additional 20% of the cart price
- Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API
- Payments are made on delivery, so no payment processing is necessary in the app
- Each order is getting a unique ID that is displayed, so the user can later look up their order based on the ID
- Users are able to mark their order as “priority” order even after it has been placed

# Technology desicions

- Routing -> ReactRouter
- Styling -> tailwindcss
- UI state management -> Redux
- Remote state management -> ReactRouter


