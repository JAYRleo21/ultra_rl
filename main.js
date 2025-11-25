import './style.css'

const companyData = {
    name: "ULTRA RL",
    nit: "6183560010",
    email: "ultrarl.bolivia@gmail.com",
    phone: "2 455741",
    cell: "73242746",
    address: "Plaza Alonzo de Mendoza Nº180 edif. El fundador piso 1 of. 8D, La Paz"
};

const locations = [
    {
        city: "TARIJA",
        manager: "Isidora Alfaro",
        cell: "+591 71191525",
        address: "CALLE GRAL. BERNARDO TRIGO - FRENTE AL MUSEO NACIONAL PALEONTOLOGICO",
        coords: "-21.534776, -64.735040",
        note: "plazuela San Agustín galería plaza"
    },
    {
        city: "POTOSI",
        manager: "Alexander Castro Machuca",
        cell: "+591 78636188",
        address: "Calle Quijarro #7 entre Bolívar e Ingavi",
        coords: "-19.587369, -65.754012",
        note: ""
    },
    {
        city: "SUCRE",
        manager: "Richard Sandoval",
        cell: "+591 73466826",
        address: "Av. Italia #54",
        coords: "-19.077032, -65.241281",
        note: ""
    }
];

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <div class="logo-container">
        <img src="./logo.png" alt="Ultra RL Logo" class="logo-img">
        <span class="logo-text">ULTRA RL</span>
      </div>
      <div class="nav-links">
        <a href="#home">Inicio</a>
        <a href="#services">Servicios</a>
        <a href="#locations">Sucursales</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  </header>

  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Envíos Rápidos y Seguros a Todo el País</h1>
      <p>Conectando Bolivia con eficiencia y confianza. Tu carga en las mejores manos.</p>
      <a href="#locations" class="cta-button">Ver Sucursales</a>
    </div>
  </section>

  <section id="services" class="section">
    <h2 class="section-title">Nuestros Servicios</h2>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">📦</div>
        <h3>Paquetería Express</h3>
        <p>Envíos rápidos de documentos y paquetes pequeños con entrega garantizada.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🚛</div>
        <h3>Carga Pesada</h3>
        <p>Transporte seguro para cargas de gran volumen y peso a nivel nacional.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🏠</div>
        <h3>Puerta a Puerta</h3>
        <p>Recogemos y entregamos tu envío directamente en la dirección que indiques.</p>
      </div>
    </div>
  </section>

  <section id="locations" class="section locations">
    <h2 class="section-title">Nuestras Sucursales</h2>
    <div class="locations-grid" id="locations-container">
      <!-- Locations will be injected here -->
    </div>
  </section>

  <footer id="contact">
    <div class="footer-content">
      <div class="footer-col">
        <h4>Ultra RL</h4>
        <p>Tu socio logístico de confianza en Bolivia.</p>
      </div>
      <div class="footer-col">
        <h4>Contacto Central</h4>
        <ul>
          <li><strong>Dirección:</strong> ${companyData.address}</li>
          <li><strong>Teléfono:</strong> ${companyData.phone}</li>
          <li><strong>Celular:</strong> ${companyData.cell}</li>
          <li><strong>Email:</strong> ${companyData.email}</li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Enlaces Rápidos</h4>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#locations">Sucursales</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Ultra RL. Todos los derechos reservados.</p>
    </div>
  </footer>
`

const locationsContainer = document.getElementById('locations-container');

locations.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'location-card';

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${loc.coords}`;

    card.innerHTML = `
    <div class="location-header">
      <h3>${loc.city}</h3>
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="location-body">
      <div class="location-info">
        <strong>Encargado:</strong> <span>${loc.manager}</span>
      </div>
      <div class="location-info">
        <strong>Celular:</strong> <span>${loc.cell}</span>
      </div>
      <div class="location-info">
        <strong>Dirección:</strong> <span>${loc.address}</span>
      </div>
      ${loc.note ? `<div class="location-info"><em>${loc.note}</em></div>` : ''}
      <a href="${googleMapsUrl}" target="_blank" class="map-link">Ver en Google Maps &rarr;</a>
    </div>
  `;
    locationsContainer.appendChild(card);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
