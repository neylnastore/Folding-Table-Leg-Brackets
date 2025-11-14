class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background-color: #1a365d;
          color: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
          color: white;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #ed8936;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background-color: #1a365d;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .nav-links.active {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">IMPORTAN.CO</a>
        <button class="mobile-menu-btn" id="menuBtn">
          <i data-feather="menu"></i>
        </button>
        <div class="nav-links" id="navLinks">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#order">Order</a>
        </div>
      </nav>
    `;

    const menuBtn = this.shadowRoot.getElementById('menuBtn');
    const navLinks = this.shadowRoot.getElementById('navLinks');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);
