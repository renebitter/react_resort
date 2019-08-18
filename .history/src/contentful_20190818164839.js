import { createClient } from 'contentful';

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESSS_TOKEN
});

// const contentful = require("contentful");
// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: process.env.REACT_APP_API_SPACE,
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: process.env.REACT_APP_ACCESSS_TOKEN
// });
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//   .then(entry => console.log(entry))
//   .catch(err => console.log(err));
