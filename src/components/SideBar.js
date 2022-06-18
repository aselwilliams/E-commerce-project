function SideBar() {
    return (
      <div class='sidebar-overlay'>
        <aside class='sidebar'>
          {/* close */}
          <button class='sidebar-close'>
            <i class='fas fa-times'></i>
          </button>
          {/* links */}
          <ul class='sidebar-links'>
            <li>
              <a href='index.html' class='sidebar-link'>
                <i class='fas fa-home fa-fw'></i>
                home
              </a>
            </li>
            <li>
              <a href='products.html' class='sidebar-link'>
                <i class='fas fa-couch fa-fw'></i>
                products
              </a>
            </li>
            <li>
              <a href='about.html' class='sidebar-link'>
                <i class='fas fa-book fa-fw'></i>
                about
              </a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
  
  export default SideBar;