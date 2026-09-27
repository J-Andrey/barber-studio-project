# Barber Studio — modelo comercial

Site de apresentação para barbearias, com solicitação de horário pelo WhatsApp. HTML, CSS e JavaScript, sem instalação de dependências e sem mensalidade de software própria.

## Abrir

Abra index.html no navegador ou execute `node preview.cjs` e acesse http://127.0.0.1:4173. O servidor é apenas para prévia local; não publique preview.cjs.

## Personalizar cada venda

1. Copie a pasta para o cliente e edite js/config.js: nome, WhatsApp brasileiro (55 + DDD + número), endereço completo, horários, Instagram, serviços, valores e duração.
2. Troque fotos ilustrativas pelas fotos autorizadas do cliente. As imagens estão em index.html e a capa em css/style.css. Revise os textos alternativos, a seção de inspiração e a indicação de fotos ilustrativas conforme o material utilizado.
3. Revise textos em index.html, descrição de busca e metadados de compartilhamento. O nome/título são atualizados pelo JavaScript, mas também devem ser personalizados no HTML para indexação sem JavaScript.
4. Com os dados reais conferidos, altere demo para false em js/config.js. Um número inválido não abre o WhatsApp. Em demonstração, o formulário apenas exibe a mensagem e não envia nada.
5. Teste todos os serviços, data passada, nome vazio, menu no celular, WhatsApp, endereço e Instagram. Abra a conversa de WhatsApp para conferir o destinatário antes de entregar; o envio final é manual.
6. Publique somente index.html, css/ e js/ em uma hospedagem estática com HTTPS. Domínio, provedor e custos devem ser combinados com o cliente. A demonstração usa GitHub Pages. O workflow .github/workflows/pages.yml publica apenas index.html, css/ e js/ a cada push na branch master, após validar a sintaxe dos scripts.
7. Confira o endereço publicado em celular real e computador. Entregue cópia dos arquivos e registre a aprovação do cliente.

## Escopo e limites

- O formulário prepara uma solicitação. Não há agenda com horários livres, bloqueio de vagas, painel administrativo, pagamento ou confirmação automática.
- Nenhum dado de formulário é salvo no site. Ao abrir o WhatsApp, os campos são incluídos no link destinado a esse serviço.
- Fontes do Google Fonts e fotografias remotas do Unsplash precisam de internet e fazem solicitações a terceiros. Há fontes de sistema de reserva. Para autonomia total, substitua por arquivos locais com direitos de uso confirmados.
- Não há avaliações, números de clientes ou profissionais inventados. Adicione prova social somente com informações reais e autorização.
- Horários, preços e marca são exemplos, não dados de uma empresa verificada.
- Links de mapas e Instagram só aparecem após configuração.

## Arquivos

- index.html: conteúdo, estrutura e metadados.
- css/style.css: visual, telas pequenas, foco e movimento reduzido.
- js/config.js: personalização por cliente.
- js/script.js: menu, serviços, validação e WhatsApp.
- VENDA.md: oferta, abordagem e roteiro de entrega.

## Verificação realizada

Sintaxe dos scripts validada com Node. Prévia inspecionada no navegador em 390 px e 1440 px. Imagens carregadas, seleção do combo e mensagem demonstrativa conferidas, menu com Escape verificado. O envio para um WhatsApp real depende do número do cliente e deve ser conferido após personalização.

