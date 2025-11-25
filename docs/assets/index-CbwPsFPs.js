(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const i={email:"ultrarl.bolivia@gmail.com",phone:"2 455741",cell:"73242746",address:"Plaza Alonzo de Mendoza Nº180 edif. El fundador piso 1 of. 8D, La Paz"},n=[{city:"TARIJA",manager:"Isidora Alfaro",cell:"+591 71191525",address:"CALLE GRAL. BERNARDO TRIGO - FRENTE AL MUSEO NACIONAL PALEONTOLOGICO",coords:"-21.534776, -64.735040",note:"plazuela San Agustín galería plaza"},{city:"POTOSI",manager:"Alexander Castro Machuca",cell:"+591 78636188",address:"Calle Quijarro #7 entre Bolívar e Ingavi",coords:"-19.587369, -65.754012",note:""},{city:"SUCRE",manager:"Richard Sandoval",cell:"+591 73466826",address:"Av. Italia #54",coords:"-19.077032, -65.241281",note:""}];document.querySelector("#app").innerHTML=`
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
          <li><strong>Dirección:</strong> ${i.address}</li>
          <li><strong>Teléfono:</strong> ${i.phone}</li>
          <li><strong>Celular:</strong> ${i.cell}</li>
          <li><strong>Email:</strong> ${i.email}</li>
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
`;const l=document.getElementById("locations-container");n.forEach(a=>{const s=document.createElement("div");s.className="location-card";const r=`https://www.google.com/maps/search/?api=1&query=${a.coords}`;s.innerHTML=`
    <div class="location-header">
      <h3>${a.city}</h3>
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="location-body">
      <div class="location-info">
        <strong>Encargado:</strong> <span>${a.manager}</span>
      </div>
      <div class="location-info">
        <strong>Celular:</strong> <span>${a.cell}</span>
      </div>
      <div class="location-info">
        <strong>Dirección:</strong> <span>${a.address}</span>
      </div>
      ${a.note?`<div class="location-info"><em>${a.note}</em></div>`:""}
      <a href="${r}" target="_blank" class="map-link">Ver en Google Maps &rarr;</a>
    </div>
  `,l.appendChild(s)});document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(s){s.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});
