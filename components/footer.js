class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1a365d;
          color: white;
          padding: 2rem 0;
          margin-top: 3rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #ed8936;
        }
        .footer-section p, .footer-section a {
          color: #cbd5e0;
          margin-bottom: 0.5rem;
          display: block;
          text-decoration: none;
        }
        .footer-section a:hover {
          color: white;
        }
        .copyright {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #2d3748;
          color: #cbd5e0;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>Providing high quality folding table brackets since 2015.</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#order">Order</a>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <a href="mailto:info@importan.co">info@importan.co</a>
        </div>
      </div>
      <div class="copyright">
        &copy; ${new Date().getFullYear()} IMPORTAN.CO. All rights reserved.
      </div>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
