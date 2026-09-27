/* Personalize este arquivo para cada cliente. Só desative demo com dados reais. */
window.BARBER_CONFIG = {
  demo: true,
  name: 'Barber Studio',
  whatsapp: '', // Código do país + DDD + número, somente dígitos.
  address: '',
  hours: 'Segunda a sábado, das 9h às 20h',
  instagram: '', // URL completa do perfil do cliente.
  services: [
    { name: 'Corte masculino', description: 'Do clássico ao degradê. Um corte que acompanha seu estilo.', price: 35, duration: '40 min', icon: '✂' },
    { name: 'Barba completa', description: 'Desenho, alinhamento e acabamento na medida certa.', price: 25, duration: '30 min', icon: '⌁' },
    { name: 'Corte + barba', description: 'Seu ritual completo. Renove o visual do início ao fim.', price: 55, duration: '60 min', icon: '✦', featured: true },
    { name: 'Pigmentação', description: 'Mais definição para complementar o seu visual.', price: 40, duration: '40 min', icon: '◈', startingAt: true }
  ]
};
