const config = window.BARBER_CONFIG;
const money = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
const nav = document.querySelector('#navigation');
const toggle = document.querySelector('.menu-toggle');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); }
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
const serviceSelect = document.querySelector('#service');
config.services.forEach((service, index) => {
  const card = document.createElement('article'); card.className = 'service-card' + (service.featured ? ' featured' : '');
  const icon = document.createElement('span'); icon.className = 'service-icon'; icon.textContent = service.icon; icon.setAttribute('aria-hidden', 'true'); card.append(icon);
  if (service.featured) { const badge = document.createElement('span'); badge.className = 'badge'; badge.textContent = 'O RITUAL COMPLETO'; card.append(badge); }
  const title = document.createElement('h3'); title.textContent = service.name;
  const description = document.createElement('p'); description.textContent = service.description;
  const price = document.createElement('div'); price.className = 'price';
  const amount = document.createElement('strong'); amount.textContent = money(service.price);
  const duration = document.createElement('span'); duration.textContent = service.duration;
  if (service.startingAt) { const from = document.createElement('small'); from.textContent = 'a partir de'; price.append(from); }
  price.append(amount, duration);
  const link = document.createElement('a'); link.href = '#booking'; link.className = 'service-link'; link.textContent = 'Escolher serviço ↗'; link.setAttribute('aria-label', `Agendar ${service.name}`); link.addEventListener('click', () => { serviceSelect.value = String(index); document.querySelector('#booking-result').hidden = true; });
  card.append(title, description, price, link); document.querySelector('#service-list').append(card);
  serviceSelect.add(new Option(`${service.name} — ${service.startingAt ? 'a partir de ' : ''}${money(service.price)}`, String(index)));
});
document.querySelectorAll('[data-brand]').forEach(element => { element.textContent = config.name; });
document.title = `${config.name} — Seu estilo. Sua assinatura.`;
document.querySelector('meta[property="og:title"]').content = document.title;
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#hours').textContent = config.hours;
if (!config.demo) { document.querySelector('#demo-banner').hidden = true; document.querySelector('#footer-note').textContent = 'Cabelo, barba e cuidado nos detalhes.'; }
if (config.address) { document.querySelector('#address').textContent = config.address; const maps = document.querySelector('#maps-link'); maps.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`; maps.hidden = false; }
if (config.instagram && /^https:\/\/(www\.)?instagram\.com\//.test(config.instagram)) { const instagram = document.querySelector('#instagram-link'); instagram.href = config.instagram; instagram.hidden = false; }
const dateInput = document.querySelector('#date');
function localToday() { const date = new Date(); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`; }
dateInput.min = localToday();
dateInput.addEventListener('input', () => dateInput.setCustomValidity(''));
const form = document.querySelector('#booking-form');
form.addEventListener('input', () => { document.querySelector('#booking-result').hidden = true; });
form.addEventListener('submit', event => {
  event.preventDefault(); dateInput.min = localToday();
  if (dateInput.value < localToday()) { dateInput.setCustomValidity('Escolha hoje ou uma data futura.'); dateInput.reportValidity(); return; }
  const name = document.querySelector('#customer').value.trim();
  if (!name) { document.querySelector('#customer').setCustomValidity('Informe seu nome.'); document.querySelector('#customer').reportValidity(); return; }
  const service = config.services[Number(serviceSelect.value)];
  const date = dateInput.value.split('-').reverse().join('/');
  const message = `Olá, ${config.name}! Meu nome é ${name}. Gostaria de agendar ${service.name} (${service.startingAt ? 'a partir de ' : ''}${money(service.price)}). Minha preferência é ${date}, período: ${document.querySelector('#period').value.toLowerCase()}. Vocês têm disponibilidade?`;
  const result = document.querySelector('#booking-result'); result.replaceChildren(); result.hidden = false;
  if (config.demo || !/^55\d{10,11}$/.test(config.whatsapp)) {
    const title = document.createElement('strong'); title.textContent = config.demo ? 'Demonstração: sua mensagem está pronta.' : 'WhatsApp ainda não configurado.';
    const preview = document.createElement('p'); preview.textContent = message;
    const note = document.createElement('small'); note.textContent = 'Nenhuma mensagem foi enviada. Na versão do cliente, a solicitação continua no WhatsApp da barbearia.';
    result.append(title, preview, note);
  } else {
    const link = document.createElement('a'); link.href = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.className = 'text-link'; link.textContent = 'Abrir conversa no WhatsApp ↗'; result.append(link); link.click();
  }
});
document.querySelector('#customer').addEventListener('input', event => event.target.setCustomValidity(''));
