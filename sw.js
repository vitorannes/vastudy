// Apenas para fins de requisito de instalabilidade PWA.
// Não implementa cache ou funcionalidade offline.

// 1. EVENTO DE INSTALAÇÃO
// O Service Worker passa pelo ciclo de vida: Instalação -> Ativação.
// Este evento é o primeiro passo para o registro.
self.addEventListener('install', (event) => {
  console.log('Service Worker: Evento de Instalação disparado. Pulando espera...');
  // O self.skipWaiting() força a ativação imediata após a instalação.
  self.skipWaiting();
});


// 2. EVENTO DE ATIVAÇÃO
// Este evento é disparado quando o SW está pronto para assumir o controle.
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativado e pronto para assumir o controle.');
  // Claiming clients garante que o SW controle todas as guias abertas imediatamente.
  event.waitUntil(self.clients.claim());
});


// 3. EVENTO DE FETCH (VAZIO)
// A ausência de um listener 'fetch' ou um listener vazio garante que
// o Service Worker não irá interceptar NENHUMA requisição de rede.
// A requisição de rede passará diretamente para o servidor (online) ou falhará (offline).
// Se o aplicativo estiver offline, ele não vai carregar (conforme solicitado).
self.addEventListener('fetch', (event) => {
  // Não fazemos nada aqui. A requisição vai para a rede.
  return; 
});
