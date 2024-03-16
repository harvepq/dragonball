// Import components and pages
import headerComponent from "../templates/header";
import homePage from "../pages/home";
import characterPage from "../pages/character";
import error404 from "../pages/error404";

// Import utils
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// Project routes
const routes = {
  '/': homePage,
  '/:id': characterPage,
  '/contact': 'Contact'
}

// Router
const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content-page')

  // Add header component to template
  header.innerHTML = await headerComponent();

  // Obtain a url route and render the page into content
  // obtain character id
  let hash = getHash(); // id or '/' or route
  let route = await resolveRoutes(hash); // return '/' or '/:id'
  let render = routes[route] ? routes[route] : error404;
  
  // render 'homePage' or 'characterPage' or 'error404'
  content.innerHTML = await render();
}

export default router