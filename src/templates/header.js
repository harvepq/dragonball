// Header component template
const headerComponent = () => {
  const view = `
    <div class="header-main">
      <div class="header-logo">
        <a href="/">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/dragonball-z-logo-png-transparent.png"/>
        </a>
      </div>
      <div class="header-about">
        <a href="#/about/">
          ABOUT
        </a>
      </div>
    </div>
  `
  return view
}

export default headerComponent;

