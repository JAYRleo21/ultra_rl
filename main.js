import './style.css'

const companyData = {
  name: "ULTRARL COURIER",
  nit: "6183560010",
  email: "ultrarl.bolivia@gmail.com",
  phone: "2 455741",
  cell: "73242746",
  address: "Plaza Alonzo de Mendoza Nº180 edif. El fundador piso 1 of. 8D, La Paz"
};

const locations = [
  {
    city: "LA PAZ",
    manager: "SR RAMIRO LARICO",
    cell: "73242746",
    phone: "2455741",
    address: "PLAZA ALONZO DE MENDOZA EDIFICIO CENTRO COMERCIAL FUNDADOR PISO 1 OFICINA 8",
    note: ""
  },
  /* {
    city: "SANTA CRUZ",
    manager: "SRA ROSA ZARATE",
    cell: "67791611",
    address: "CALLE WARNES 1001",
    note: "NO DISPONIBLE POR EL MOMENTO",
    unavailable: true
  }, */
  {
    city: "COCHABAMBA",
    manager: "SR LUIS JAVIER ARIAS",
    cell: "71549870",
    address: "CALLE ECUADOR 251 ENTRE JUNIN Y HAMIRAYA FRENTE AL COLEGIO 8 DE MAYO O BARRIENTOS",
    note: ""
  },
  {
    city: "TRINIDAD",
    manager: "SR. CARLOS GANDARILLAS O.",
    cell: "71144403 - 75198161",
    address: "CALLE ROMULO MENDOZA Nº 135",
    note: ""
  },
  {
    city: "SUCRE",
    manager: "RICHARD SANDOVAL",
    cell: "73466826",
    address: "AV. ITALIA N.º 54",
    coords: "-19.077032, -65.241281",
    note: ""
  },
  {
    city: "POTOSI",
    manager: "SRA. ALEXANDER CASTRO",
    cell: "73890436 - 78636188",
    address: "CALLE HOYOS Nº 216",
    coords: "-19.587369, -65.754012",
    note: ""
  },
  {
    city: "ORURO",
    manager: "SR. PABLO AYLLON",
    cell: "71840884",
    address: "CALLE PETOT No 2524 Y ADOLFO MIER",
    note: ""
  },
  {
    city: "TARIJA",
    manager: "SRA. ISIDORA ALFARO",
    cell: "71191525 - 75121095",
    address: "CALLE VIRGINIA LEMA Nº 443, ENTRE CAMPERO Y GRAL. TRIGO",
    coords: "-21.534776, -64.735040",
    note: "plazuela San Agustín galería plaza"
  },
  {
    city: "COBIJA",
    manager: "SRA. VIVIAN TORRICO",
    cell: "70034443",
    address: "BARRIO CONAVI CALLE ELVIRA GUTIERREZ Nº 58 FRENTE A DEFENSORIA NNA",
    note: ""
  },
  {
    city: "RIBERALTA",
    manager: "SR. LUIS FERNANDO SUAREZ",
    cell: "75196921",
    phone: "8524786",
    address: "AV. SUCRE Nº 885",
    note: ""
  },
  {
    city: "GUAYARAMERIN",
    manager: "SR. ALEXANDER ALVAREZ NOVOA",
    cell: "67359943",
    address: "TARIJA ESQ. NICOLAS SUAREZ, AL LADO DE LA EMBOTELLADORA DE NUDELPA LTDA.",
    note: ""
  },
  {
    city: "BERMEJO",
    manager: "SR. ALEJANDRO ALFARO",
    cell: "61876724",
    address: "AV. LUIS DE FUENTE Nº 525 ENTRE CALLE TARIJA Y COCHABAMBA",
    note: ""
  },
  {
    city: "YACUIBA",
    manager: "SR. RIMBER CARREÑO",
    cell: "76834647",
    address: "CALLE SAN PEDRO CASI ESQ. COMERCIO, FRENTE A UNIDAD EDUCATIVA",
    note: ""
  },
  {
    city: "ENTRE RIOS",
    manager: "SRA. ADA GRIMALDO",
    cell: "72980672",
    address: "ENTRE RIOS S/N",
    note: ""
  },
  {
    city: "VILLAMONTES",
    manager: "SRA. KATIA APARICIO VILLA",
    cell: "78193920",
    address: "AV. INGAVI ESQ. CAPITAN MANCHEGO, LADO VETERINARIO",
    note: ""
  },
  {
    city: "CARAPARI",
    manager: "SR. ANSELMO ALFARO",
    cell: "71893920",
    address: "CALLE CAMPERO E INDEPENDENCIA, FRENTE A LA PLAZA PRINCIPAL",
    note: ""
  },
  {
    city: "UYUNI",
    manager: "SR. LUIS CALISAYA",
    cell: "74242402",
    address: "CALLE COLON Nº 412",
    note: ""
  },
  {
    city: "CARANAVI",
    manager: "SRA. LIDIA PACO DE QUENTA",
    cell: "71233814 - 65153678",
    address: "CARANAVI CALLE BOLIVAR Y CALAMA, OFICINAS DE RADIO ORIGEN",
    note: ""
  },
  {
    city: "TUPIZA",
    manager: "SRA. ROSMERY ISNADO",
    cell: "73850755",
    address: "TERMINAL DE BUSES, AREA GUARDA EQUIPAJES",
    note: ""
  },
  {
    city: "CAMARGO",
    manager: "SRA. MARIA URZAGASTE",
    cell: "74459910",
    address: "CAMARGO S/N",
    note: ""
  },
  {
    city: "MONTEAGUDO - SUCRE",
    manager: "SR. ROBERTO MONTERO",
    cell: "73471991",
    address: "SUCRE BARRIO LOS PINOS CALLE SAUL ABDELNUR No 14",
    note: ""
  },
  {
    city: "VILLAZON",
    manager: "SRA. ROSARIO SOLIZ",
    cell: "79455794",
    address: "EX TERMINAL AV 20 DE MAYO S/N",
    note: ""
  },
  {
    city: "PUERTO SUAREZ",
    manager: "SR. PEDRO LIJERON",
    cell: "72187600 - 75755841",
    address: "AV. SIMON BOLIVAR Nº 8",
    note: ""
  },
  {
    city: "LLALLAGUA",
    manager: "SRA. TEODOCIA DAZA",
    cell: "74409623",
    address: "URB. SALVADORA S/N",
    note: ""
  },
  {
    city: "COROICO",
    manager: "SRA. GUADALUPE MAMANI CHURA",
    cell: "72050883",
    address: "AV. PRINCIPAL AV. SAGARNAGA FRENTE AL JUZGADO",
    note: ""
  }
];

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <div class="logo-container">
        <img src="./logo.png" alt="ULTRARL COURIER Logo" class="logo-img">
        <span class="logo-text">ULTRARL COURIER</span>
      </div>
      <div class="nav-links">
        <a href="#home">Inicio</a>
        <a href="#services">Servicios</a>
        <a href="#locations">Sucursales</a>
        <a href="./rastreo/">Rastreo</a>
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
        <h4>ULTRARL COURIER</h4>
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
          <li><a href="./rastreo/">Rastreo</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 ULTRARL COURIER. Todos los derechos reservados.</p>
    </div>
  </footer>
`

// Update links to Rastreo
document.querySelectorAll('a[href="./rastreo.html"]').forEach(link => {
  link.setAttribute('href', './rastreo/');
});

const locationsContainer = document.getElementById('locations-container');

// Sort locations: those with coords first, then others
locations.sort((a, b) => {
  if (a.coords && !b.coords) return -1;
  if (!a.coords && b.coords) return 1;
  return 0;
});

locations.forEach(loc => {
  const card = document.createElement('div');
  // Add 'no-map' class if no coords
  const mapClass = loc.coords ? '' : 'no-map';
  card.className = `location-card ${loc.unavailable ? 'unavailable' : ''} ${mapClass}`;

  if (loc.unavailable) {
    card.style.opacity = '0.7';
    card.style.backgroundColor = '#f8f9fa';
  }

  // Only create map link if coords exist
  const mapLink = loc.coords
    ? `<a href="https://www.google.com/maps/search/?api=1&query=${loc.coords}" target="_blank" class="map-link">Ver en Google Maps &rarr;</a>`
    : '';

  card.innerHTML = `
    <div class="location-header" style="${loc.unavailable ? 'background-color: #6c757d;' : ''}">
      <h3>${loc.city}</h3>
      ${loc.coords ? '<i class="fas fa-map-marker-alt"></i>' : '<i class="fas fa-building"></i>'}
    </div>
    <div class="location-body">
      ${loc.unavailable ? '<div class="location-info" style="color: #dc3545; font-weight: bold;">NO DISPONIBLE</div>' : ''}
      <div class="location-info">
        <strong>Encargado:</strong> <span>${loc.manager}</span>
      </div>
      <div class="location-info">
        <strong>Celular:</strong> <span>${loc.cell}</span>
      </div>
      ${loc.phone ? `<div class="location-info"><strong>Teléfono:</strong> <span>${loc.phone}</span></div>` : ''}
      <div class="location-info">
        <strong>Dirección:</strong> <span>${loc.address}</span>
      </div>
      ${loc.note ? `<div class="location-info"><em>${loc.note}</em></div>` : ''}
      ${mapLink}
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
