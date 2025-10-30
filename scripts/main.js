// DR9 AI Funnel - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
  console.log('DR9 AI Funnel ativo');

  // Device Detection & Optimization
  const deviceInfo = detectDevice();
  console.log('Device detected:', deviceInfo);

  // Apply device-specific optimizations
  optimizeForDevice(deviceInfo);

  // Device Detection Function
  function detectDevice() {
    const ua = navigator.userAgent;
    const platform = navigator.platform;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);
    const isDesktop = !isMobile;

    return {
      isMobile,
      isIOS,
      isAndroid,
      isDesktop,
      platform,
      userAgent: ua,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport: 'ontouchstart' in window,
      orientation: screen.orientation ? screen.orientation.type : 'unknown'
    };
  }

  // Device Optimization Function
  function optimizeForDevice(device) {
    const body = document.body;

    // Add device classes for CSS targeting
    if (device.isIOS) {
      body.classList.add('ios-device');
      console.log('iOS optimizations applied');
    } else if (device.isAndroid) {
      body.classList.add('android-device');
      console.log('Android optimizations applied');
    } else if (device.isDesktop) {
      body.classList.add('desktop-device');
      console.log('Desktop optimizations applied');
    }

    // Touch optimizations for mobile
    if (device.isMobile) {
      body.classList.add('mobile-device');

      // Prevent zoom on input focus (iOS)
      if (device.isIOS) {
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
          viewport.setAttribute('content', viewport.getAttribute('content') + ', user-scalable=no');
        }
      }

      // Add touch feedback
      document.addEventListener('touchstart', function(e) {
        const target = e.target;
        if (target.classList.contains('btn')) {
          target.style.transform = 'scale(0.98)';
        }
      });

      document.addEventListener('touchend', function(e) {
        const target = e.target;
        if (target.classList.contains('btn')) {
          setTimeout(() => {
            target.style.transform = '';
          }, 150);
        }
      });
    }

    // Performance optimizations
    if (device.isDesktop) {
      // Enable smooth scrolling for desktop
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Memory management for mobile
    if (device.isMobile) {
      // Reduce animation complexity on low-end devices
      if (device.screenWidth < 360 || navigator.hardwareConcurrency < 4) {
        body.classList.add('low-end-device');
      }
    }

    console.log('Device optimizations completed:', device);
  }

   // Cart functionality
   let cart = JSON.parse(localStorage.getItem('dr9_cart') || '[]');
  const cartCount = document.getElementById('cartCount');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartItems = document.getElementById('cartItems');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscount = document.getElementById('cartDiscount');
  const cartTotal = document.getElementById('cartTotal');

  // Product data
  const products = [
    {
      id: 1,
      title: 'Instalação Adobe Creative Suite',
      description: 'Instalação completa do Adobe Creative Suite (Photoshop, Illustrator, Premiere, After Effects, etc.) com configuração otimizada, scripts automatizados e suporte técnico.',
      price: 97,
      image: 'assets/icons/adobe-creative-suite_994141_full.webp',
      category: 'instalacao'
    },
    {
      id: 2,
      title: 'Pacote Corel Draw',
      description: 'Pacote completo Corel Draw com templates e vetores profissionais',
      price: 147,
      image: 'assets/icons/OIP.webp',
      category: 'pacotes'
    },
    {
      id: 3,
      title: 'Pacote Office Completo',
      description: 'Microsoft Office completo (Word, Excel, PowerPoint, Outlook) + Ativação',
      price: 197,
      image: 'assets/icons/R.png',
      category: 'pacotes'
    },
    {
      id: 4,
      title: 'Comandos Secretos ChatGPT',
      description: 'Lista completa de prompts e comandos secretos para maximizar o ChatGPT',
      price: 67,
      image: 'assets/icons/chatpt.webp',
      category: 'ebooks'
    },
    {
      id: 5,
      title: 'E-book Marketing Digital',
      description: 'Guia completo de marketing digital para empreendedores',
      price: 47,
      image: 'assets/icons/GuiaCompletodeMarketingDigitalEstrategiaseFerramentasEssenciais.png',
      category: 'ebooks'
    },
    {
      id: 6,
      title: 'E-book Gestão de Negócios',
      description: 'Estratégias avançadas para gestão e crescimento de negócios',
      price: 57,
      image: 'assets/icons/f0564fe86049b952992f3ef28aac736d(1).jpg',
      category: 'ebooks'
    },
    {
      id: 7,
      title: 'WA Sander - Automação WhatsApp',
      description: 'Software completo para automação e envio em massa no WhatsApp',
      price: 297,
      image: 'assets/icons/automacoes.png',
      category: 'automacao'
    },
    {
      id: 8,
      title: 'Insta Extractor Pro',
      description: 'Ferramenta profissional para extração de dados do Instagram',
      price: 197,
      image: 'assets/icons/INSTA EXTRACTOR.png',
      category: 'extratores'
    },
    {
      id: 9,
      title: 'Extractor Programs Suite',
      description: 'Suite completa de programas extratores para redes sociais e dados',
      price: 397,
      image: 'assets/icons/124-1247249_digital-marketing-logo-png-transparent-png.png',
      category: 'extratores'
    },
    {
      id: 10,
      title: 'Licença Chimera Tool Professional 12 meses',
      description: 'Ferramenta profissional para reparo de software celular - Licença 12 meses (Entrega em até 24h)',
      price: 1100,
      image: 'assets/icons/chimera.png',
      category: 'celular'
    },
    {
      id: 11,
      title: 'Licença UnlockTool 6 meses',
      description: 'Ferramenta completa para desbloqueio e reparo de celulares - Licença 6 meses (Entrega em até 24h)',
      price: 190,
      image: 'assets/icons/D_NQ_NP_703096-MLB71515396220_092023-O.webp',
      category: 'celular'
    },
    {
      id: 12,
      title: 'Licença Android Multi Tools 6 meses',
      description: 'Suite completa de ferramentas para manutenção Android - Licença 6 meses (Entrega em até 24h)',
      price: 170,
      image: 'assets/icons/android.webp',
      category: 'celular'
    },
    {
      id: 13,
      title: 'Esquema Elétrico Placa Celular Borneo Schematics',
      description: 'Esquemas elétricos completos para placa de celulares Borneo - 1 PC + 6 meses suporte (Entrega em até 24h)',
      price: 150,
      image: 'assets/icons/IMG-20241224-WA0017.jpg',
      category: 'celular'
    },
    {
      id: 14,
      title: 'IMEI Check Completo',
      description: 'Verificação completa de IMEI para Samsung, iPhone, Xiaomi, Motorola - Status de restrições, bloqueios e verificações (Entrega instantânea)',
      price: 15,
      image: 'assets/icons/samsung-imei-check-online.png',
      category: 'celular'
    },
    {
      id: 15,
      title: 'Soluções Personalizadas',
      description: 'Temos TODAS as soluções possíveis! Entre em contato para realizarmos um orçamento personalizado. Arsenal imenso de soluções para qualquer necessidade digital.',
      price: null,
      image: 'assets/images/WhatsApp Image 2025-10-30 at 02.42.16.jpeg',
      category: 'personalizado'
    }
  ];

  const packs = [
    {
      id: 'pack1',
      title: 'Pack Design Essencial',
      description: 'Adobe + Corel Draw + E-books de design + 12+ arquivos Canva premium',
      originalPrice: 341,
      price: 227,
      discount: 114,
      image: 'assets/icons/Prancheta 03.png',
      items: ['Instalação Adobe Suite', 'Pacote Corel Draw', 'E-book Marketing Digital', '12+ Arquivos Canva Premium', 'Suporte instalação']
    },
    {
      id: 'pack2',
      title: 'Pack Produtividade Total',
      description: 'Office + ChatGPT + Gestão completa + 20 plugins premium',
      originalPrice: 461,
      price: 307,
      discount: 154,
      image: 'assets/icons/Prancheta 1.png',
      items: ['Pacote Office Completo', 'Comandos Secretos ChatGPT', 'E-book Gestão de Negócios', '20 Plugins Premium', 'Templates incluídos']
    },
    {
      id: 'pack3',
      title: 'Pack Empreendedor Completo',
      description: 'Tudo que você precisa para começar seu negócio digital + backgrounds premium',
      originalPrice: 802,
      price: 497,
      discount: 305,
      image: 'assets/icons/Prancheta 02.png',
      items: ['Adobe Creative Suite', 'Pacote Office', 'Corel Draw', 'Todos os E-books', 'Backgrounds Premium', 'Imagens Premium PNG', 'Instalação remota', 'Suporte 30 dias']
    }
  ];

  // Render products
  function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
      const card = createProductCard(product);
      productsGrid.appendChild(card);
    });
  }

  // Render packs
  function renderPacks() {
    const packsGrid = document.getElementById('packsGrid');
    packsGrid.innerHTML = '';

    packs.forEach(pack => {
      const card = createPackCard(pack);
      packsGrid.appendChild(card);
    });
  }

  // Create product card
  function createProductCard(product) {
    const template = document.getElementById('productCardTpl');
    const card = template.content.cloneNode(true);

    const img = card.querySelector('.prod-thumb');
    img.src = product.image;
    img.alt = product.title;

    card.querySelector('.prod-title').textContent = product.title;
    card.querySelector('.prod-desc').textContent = product.description;

    const priceElement = card.querySelector('.price-value');
    if (product.price === null) {
      priceElement.textContent = 'Orçamento';
      priceElement.style.fontStyle = 'italic';
    } else {
      priceElement.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    }

    const addBtn = card.querySelector('.add-to-cart');
    const buyBtn = card.querySelector('.buy-now');

    if (product.category === 'personalizado') {
      addBtn.textContent = 'Solicitar Orçamento';
      addBtn.addEventListener('click', () => requestQuote(product));
      buyBtn.textContent = 'Falar Conosco';
      buyBtn.addEventListener('click', () => contactUs(product));
    } else {
      addBtn.addEventListener('click', () => addToCart(product));
      buyBtn.addEventListener('click', () => buyNow(product));
    }

    return card;
  }

  // Create pack card
  function createPackCard(pack) {
    const card = document.createElement('article');
    card.className = 'card pack-card';
    card.innerHTML = `
      <div class="pack-image-container">
        <img class="pack-main-image" alt="${pack.title} preview" loading="lazy" src="${getPackMainImage(pack)}" />
      </div>
      <div class="card-body">
        <h3 class="prod-title">${pack.title}</h3>
        <p class="prod-desc">${pack.description}</p>
        <div class="pack-items">
          ${pack.items.map(item => `<span class="pack-item">✓ ${item}</span>`).join('')}
        </div>
        <div class="card-meta">
          <div class="price">
            <span class="original-price">R$ ${pack.originalPrice.toFixed(2).replace('.', ',')}</span>
            <span class="price-value">R$ ${pack.price.toFixed(2).replace('.', ',')}</span>
            <span class="discount">Economia: R$ ${pack.discount.toFixed(2).replace('.', ',')}</span>
          </div>
          <div class="card-actions">
            <button class="btn small add-to-cart">Adicionar</button>
            <button class="btn small outline buy-now">Pedir</button>
          </div>
        </div>
      </div>
    `;

    const addBtn = card.querySelector('.add-to-cart');
    const buyBtn = card.querySelector('.buy-now');

    addBtn.addEventListener('click', () => addToCart(pack));
    buyBtn.addEventListener('click', () => buyNow(pack));

    return card;
  }

  // Get main image for pack based on pack ID
  function getPackMainImage(pack) {
    const packImages = {
      'pack1': 'assets/icons/Prancheta 03.png', // Pack Design Essencial
      'pack2': 'assets/icons/Prancheta 1.png',  // Pack Produtividade Total
      'pack3': 'assets/icons/Prancheta 02.png'  // Pack Empreendedor Completo
    };

    return packImages[pack.id] || pack.image || 'assets/images/default-pack.jpg';
  }

  // Cart functions
  function addToCart(item) {
    try {
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      saveCartToStorage();
      updateCartUI();
      showNotification(`${item.title} adicionado ao carrinho!`, 'success');
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
      showNotification('Erro ao adicionar item ao carrinho', 'error');
    }
  }

  function removeFromCart(itemId) {
    try {
      cart = cart.filter(item => item.id !== itemId);
      saveCartToStorage();
      updateCartUI();
      showNotification('Item removido do carrinho', 'info');
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
      showNotification('Erro ao remover item do carrinho', 'error');
    }
  }

  function updateCartUI() {
    try {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      cartCount.textContent = totalItems;

      cartItems.innerHTML = '';
      let subtotal = 0;

      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
          <div class="cart-item-info">
            <h4>${item.title}</h4>
            <p>R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</p>
          </div>
          <div class="cart-item-actions">
            <button class="btn small ghost remove-item" data-id="${item.id}">Remover</button>
          </div>
        `;
        cartItems.appendChild(itemElement);
        subtotal += item.price * item.quantity;
      });

      const discount = calculateDiscount();
      const total = subtotal - discount;

      cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

      // Show discount breakdown with automatic PIX discount
      if (discount > 0) {
        const packDiscount = cart.filter(item => item.id.startsWith('pack')).reduce((total, pack) => total + pack.discount, 0);
        const pixDiscount = discount - packDiscount;

        let discountText = '';
        if (packDiscount > 0) {
          discountText += `Pack: R$ ${packDiscount.toFixed(2).replace('.', ',')}`;
        }
        if (pixDiscount > 0) {
          if (discountText) discountText += ' + ';
          discountText += `PIX (5%): R$ ${pixDiscount.toFixed(2).replace('.', ',')}`;
        }

        cartDiscount.textContent = `R$ ${discount.toFixed(2).replace('.', ',')} (${discountText})`;
      } else {
        cartDiscount.textContent = `R$ ${discount.toFixed(2).replace('.', ',')}`;
      }

      cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

      // Update checkout buttons text to show discount info
      const checkoutWA = document.getElementById('checkoutWhatsapp');
      const checkoutTG = document.getElementById('checkoutTelegram');

      if (checkoutWA && checkoutTG) {
        if (totalItems >= 2) {
          checkoutWA.textContent = 'Pedir via WhatsApp (5% PIX)';
          checkoutTG.textContent = 'Pedir via Telegram (5% PIX)';
        } else {
          checkoutWA.textContent = 'Pedir via WhatsApp';
          checkoutTG.textContent = 'Pedir via Telegram';
        }
      }
    } catch (error) {
      console.error('Error updating cart UI:', error);
      showNotification('Erro ao atualizar carrinho', 'error');
    }
  }

  function calculateDiscount() {
    let discount = 0;

    // Pack discounts (existing logic)
    const packItems = cart.filter(item => item.id.startsWith('pack'));
    discount += packItems.reduce((total, pack) => total + pack.discount, 0);

    // PIX discount for 2+ items
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalItems >= 2) {
      const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      discount += subtotal * 0.05; // 5% discount for PIX payment
    }

    return discount;
  }

  function buyNow(item) {
    const message = `Olá! Gostaria de adquirir: ${item.title} - R$ ${item.price ? item.price.toFixed(2).replace('.', ',') : 'Orçamento personalizado'}`;

    // Show contact options modal
    showContactOptions(message);
  }

  function showContactOptions(message) {
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
      <div class="contact-modal-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div class="contact-modal-content" style="
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 30px;
          max-width: 400px;
          width: 90%;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          animation: modalSlideIn 0.3s ease-out;
        ">
          <h3 style="color: #00d4ff; margin-bottom: 20px; text-align: center; font-size: 1.5rem;">Escolha como falar conosco</h3>
          <div style="display: flex; gap: 15px; flex-direction: column;">
            <button class="btn whatsapp contact-option" style="
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 15px 20px;
              background: linear-gradient(135deg, #25d366, #128c7e);
              border: none;
              border-radius: 12px;
              color: white;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              font-size: 16px;
            ">
              <img src="assets/icons/8380012.jpg" alt="WhatsApp" style="width: 20px; height: 20px; border-radius: 50%; object-fit: cover;">
              Falar via WhatsApp
            </button>
            <button class="btn telegram contact-option" style="
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 15px 20px;
              background: linear-gradient(135deg, #0088cc, #006699);
              border: none;
              border-radius: 12px;
              color: white;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              font-size: 16px;
            ">
              <img src="assets/icons/logo-telegram_1055548-1.jpg" alt="Telegram" style="width: 20px; height: 20px; border-radius: 50%; object-fit: cover;">
              Suporte via Telegram
            </button>
          </div>
          <button class="contact-modal-close" style="
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            color: #888;
            font-size: 24px;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: all 0.3s ease;
          ">×</button>
        </div>
      </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes modalSlideIn {
        from {
          opacity: 0;
          transform: translateY(-20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .contact-option:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      }

      .contact-modal-close:hover {
        background: rgba(255,255,255,0.1);
        color: #fff;
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(modal);

    // Event listeners
    modal.querySelector('.contact-modal-overlay').addEventListener('click', (e) => {
      if (e.target === modal.querySelector('.contact-modal-overlay')) {
        closeModal();
      }
    });

    modal.querySelector('.contact-modal-close').addEventListener('click', closeModal);

    modal.querySelector('.btn.whatsapp').addEventListener('click', () => {
      openWhatsApp(message);
      closeModal();
    });

    modal.querySelector('.btn.telegram').addEventListener('click', () => {
      openTelegram(message);
      closeModal();
    });

    function closeModal() {
      modal.style.animation = 'modalSlideOut 0.3s ease-in';
      setTimeout(() => {
        if (modal.parentNode) {
          modal.parentNode.removeChild(modal);
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      }, 300);
    }

    // Add slide out animation
    style.textContent += `
      @keyframes modalSlideOut {
        to {
          opacity: 0;
          transform: translateY(-20px) scale(0.95);
        }
      }
    `;
  }

  function requestQuote(item) {
    const message = `Olá! Gostaria de solicitar um orçamento personalizado para: ${item.title}. Por favor, me ajudem a encontrar a melhor solução!`;
    openWhatsApp(message);
  }

  function contactUs(item) {
    const message = `Olá! Vi o produto "${item.title}" e gostaria de mais informações sobre soluções personalizadas.`;
    openWhatsApp(message);
  }

  function checkoutViaWhatsApp() {
    if (cart.length === 0) {
      showNotification('Carrinho vazio! Adicione produtos antes de fazer o pedido.');
      return;
    }

    let message = 'Olá! Gostaria de fazer um pedido:\n\n';
    cart.forEach(item => {
      message += `${item.title} - R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}\n`;
    });

    const discount = calculateDiscount();
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal - discount;

    message += `\nSubtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (discount > 0) {
      const packDiscount = cart.filter(item => item.id.startsWith('pack')).reduce((total, pack) => total + pack.discount, 0);
      const pixDiscount = discount - packDiscount;

      if (packDiscount > 0) {
        message += `\nDesconto Pack: R$ ${packDiscount.toFixed(2).replace('.', ',')}`;
      }
      if (pixDiscount > 0) {
        message += `\nDesconto PIX (5%): R$ ${pixDiscount.toFixed(2).replace('.', ',')}`;
      }
      message += `\nTotal com desconto: R$ ${total.toFixed(2).replace('.', ',')}`;
    } else {
      message += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Add PIX payment info
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalItems >= 2) {
      message += '\n\n💰 PAGAMENTO PIX: 5% de desconto automático!';
      message += '\n💳 Outros métodos: sem desconto.';
    }

    openWhatsApp(message);
  }

  function checkoutViaTelegram() {
    if (cart.length === 0) {
      showNotification('Carrinho vazio! Adicione produtos antes de fazer o pedido.');
      return;
    }

    let message = 'Olá! Gostaria de fazer um pedido:\n\n';
    cart.forEach(item => {
      message += `${item.title} - R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}\n`;
    });

    const discount = calculateDiscount();
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal - discount;

    message += `\nSubtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (discount > 0) {
      const packDiscount = cart.filter(item => item.id.startsWith('pack')).reduce((total, pack) => total + pack.discount, 0);
      const pixDiscount = discount - packDiscount;

      if (packDiscount > 0) {
        message += `\nDesconto Pack: R$ ${packDiscount.toFixed(2).replace('.', ',')}`;
      }
      if (pixDiscount > 0) {
        message += `\nDesconto PIX (5%): R$ ${pixDiscount.toFixed(2).replace('.', ',')}`;
      }
      message += `\nTotal com desconto: R$ ${total.toFixed(2).replace('.', ',')}`;
    } else {
      message += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Add PIX payment info
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalItems >= 2) {
      message += '\n\n💰 PAGAMENTO PIX: 5% de desconto automático!';
      message += '\n💳 Outros métodos: sem desconto.';
    }

    openTelegram(message);
  }

  function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);

    // Use the specific WhatsApp link provided
    const whatsappUrl = `https://wa.me/message/JLUZNOGJKK4UK1?text=${encodedMessage}`;

    console.log('Opening WhatsApp with URL:', whatsappUrl);

    // Method 1: Direct location change (most reliable)
    try {
      window.location.href = whatsappUrl;
      console.log('WhatsApp opened with location.href');
    } catch (error) {
      console.error('location.href failed:', error);

      // Method 2: window.open as fallback
      try {
        const newWindow = window.open(whatsappUrl, '_blank');
        if (newWindow) {
          newWindow.focus();
          console.log('WhatsApp opened with window.open');
        } else {
          throw new Error('window.open returned null');
        }
      } catch (windowError) {
        console.error('window.open failed:', windowError);

        // Method 3: Create a temporary link and click it
        try {
          const link = document.createElement('a');
          link.href = whatsappUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log('WhatsApp opened with temporary link');
        } catch (linkError) {
          console.error('All WhatsApp methods failed:', linkError);
          showNotification('Erro ao abrir WhatsApp. Copie este link: ' + whatsappUrl, 'error');
        }
      }
    }
  }

  function openTelegram(message) {
    const encodedMessage = encodeURIComponent(message);

    // Use the specific Telegram link provided
    const telegramUrl = `https://t.me/dr9iSuporte?text=${encodedMessage}`;

    console.log('Opening Telegram with URL:', telegramUrl);

    // Method 1: Direct location change (most reliable)
    try {
      window.location.href = telegramUrl;
      console.log('Telegram opened with location.href');
    } catch (error) {
      console.error('location.href failed:', error);

      // Method 2: window.open as fallback
      try {
        const newWindow = window.open(telegramUrl, '_blank');
        if (newWindow) {
          newWindow.focus();
          console.log('Telegram opened with window.open');
        } else {
          throw new Error('window.open returned null');
        }
      } catch (windowError) {
        console.error('window.open failed:', windowError);

        // Method 3: Create a temporary link and click it
        try {
          const link = document.createElement('a');
          link.href = telegramUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log('Telegram opened with temporary link');
        } catch (linkError) {
          console.error('All Telegram methods failed:', linkError);
          showNotification('Erro ao abrir Telegram. Copie este link: ' + telegramUrl, 'error');
        }
      }
    }
  }

  function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Fechar notificação">×</button>
      </div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#25d366' : type === 'error' ? '#ff4444' : '#00d4ff'};
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 10000;
      max-width: 300px;
      font-weight: 500;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);

    // Auto remove after 5 seconds
    const removeNotification = () => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    };

    setTimeout(removeNotification, 5000);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', removeNotification);
  }

  // Contact form handling
  function setupContactForm() {
    const nameInput = document.getElementById('inputName');
    const emailInput = document.getElementById('inputEmail');

    // Save to localStorage for persistence
    nameInput.value = localStorage.getItem('dr9_name') || '';
    emailInput.value = localStorage.getItem('dr9_email') || '';

    // Form validation
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function showError(input, message) {
      input.style.borderColor = '#ff4444';
      input.style.boxShadow = '0 0 0 2px rgba(255, 68, 68, 0.2)';
      let errorElement = input.parentNode.querySelector('.error-message');
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#ff4444';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '5px';
        input.parentNode.appendChild(errorElement);
      }
      errorElement.textContent = message;
    }

    function clearError(input) {
      input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      input.style.boxShadow = 'none';
      const errorElement = input.parentNode.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
      }
    }

    nameInput.addEventListener('input', () => {
      localStorage.setItem('dr9_name', nameInput.value);
      if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'Nome deve ter pelo menos 2 caracteres');
      } else {
        clearError(nameInput);
      }
    });

    emailInput.addEventListener('input', () => {
      localStorage.setItem('dr9_email', emailInput.value);
      if (emailInput.value && !validateEmail(emailInput.value)) {
        showError(emailInput, 'E-mail inválido');
      } else {
        clearError(emailInput);
      }
    });

    // Validate on blur
    nameInput.addEventListener('blur', () => {
      if (nameInput.value && nameInput.value.trim().length < 2) {
        showError(nameInput, 'Nome deve ter pelo menos 2 caracteres');
      }
    });

    emailInput.addEventListener('blur', () => {
      if (emailInput.value && !validateEmail(emailInput.value)) {
        showError(emailInput, 'E-mail inválido');
      }
    });
  }

  // Unified event handler for all interactions
  document.addEventListener('click', function(e) {
    // Contact buttons
    if (e.target.matches('#waMain') || e.target.closest('#waMain')) {
      e.preventDefault();
      openWhatsApp('Olá! Gostaria de falar com um especialista sobre suas soluções digitais.');
      return;
    }
    if (e.target.matches('#tgMain') || e.target.closest('#tgMain')) {
      e.preventDefault();
      openTelegram('Olá! Gostaria de falar com um especialista sobre suas soluções digitais.');
      return;
    }

    // Trust buttons in hero section
    if (e.target.closest('.trust-btn.whatsapp')) {
      e.preventDefault();
      openWhatsApp('Olá! Gostaria de suporte via WhatsApp.');
      return;
    }
    if (e.target.closest('.trust-btn.telegram')) {
      e.preventDefault();
      openTelegram('Olá! Gostaria de suporte via Telegram.');
      return;
    }

    // Cart sidebar toggle
    if (e.target.matches('#openCartBtn') || e.target.closest('#openCartBtn')) {
      e.preventDefault();
      cartSidebar.setAttribute('aria-hidden', cartSidebar.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
      return;
    }
    if (e.target.matches('#closeCartBtn') || e.target.closest('#closeCartBtn')) {
      e.preventDefault();
      cartSidebar.setAttribute('aria-hidden', 'true');
      return;
    }

    // Checkout buttons - Enhanced with discount display and duplicate prevention
    if (e.target.matches('#checkoutWhatsapp') || e.target.closest('#checkoutWhatsapp')) {
      e.preventDefault();
      e.stopPropagation();

      const button = e.target.closest('#checkoutWhatsapp');
      if (button.disabled) return;

      button.disabled = true;
      button.textContent = 'Abrindo WhatsApp...';

      try {
        checkoutViaWhatsApp();
        setTimeout(() => {
          button.disabled = false;
          button.textContent = cart.reduce((total, item) => total + item.quantity, 0) >= 2 ? 'Pedir via WhatsApp (5% PIX)' : 'Pedir via WhatsApp';
        }, 2000);
      } catch (error) {
        console.error('Error opening WhatsApp:', error);
        button.disabled = false;
        button.textContent = cart.reduce((total, item) => total + item.quantity, 0) >= 2 ? 'Pedir via WhatsApp (5% PIX)' : 'Pedir via WhatsApp';
      }
      return;
    }
    if (e.target.matches('#checkoutTelegram') || e.target.closest('#checkoutTelegram')) {
      e.preventDefault();
      e.stopPropagation();

      const button = e.target.closest('#checkoutTelegram');
      if (button.disabled) return;

      button.disabled = true;
      button.textContent = 'Abrindo Telegram...';

      try {
        checkoutViaTelegram();
        setTimeout(() => {
          button.disabled = false;
          button.textContent = cart.reduce((total, item) => total + item.quantity, 0) >= 2 ? 'Pedir via Telegram (5% PIX)' : 'Pedir via Telegram';
        }, 2000);
      } catch (error) {
        console.error('Error opening Telegram:', error);
        button.disabled = false;
        button.textContent = cart.reduce((total, item) => total + item.quantity, 0) >= 2 ? 'Pedir via Telegram (5% PIX)' : 'Pedir via Telegram';
      }
      return;
    }

    // Clear cart - Enhanced with duplicate prevention
    if (e.target.matches('#clearCart') || e.target.closest('#clearCart')) {
      e.preventDefault();
      e.stopPropagation();

      const button = e.target.closest('#clearCart');

      // Prevent multiple clicks
      if (button.disabled) return;

      if (cart.length === 0) {
        showNotification('Carrinho já está vazio', 'info');
        return;
      }

      if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        try {
          button.disabled = true;
          button.textContent = 'Limpando...';

          cart = [];
          saveCartToStorage();
          updateCartUI();
          showNotification('Carrinho limpo!', 'info');

          // Reset button after success
          setTimeout(() => {
            button.disabled = false;
            button.textContent = 'Limpar';
          }, 1000);
        } catch (error) {
          console.error('Erro ao limpar carrinho:', error);
          showNotification('Erro ao limpar carrinho', 'error');
          button.disabled = false;
          button.textContent = 'Limpar';
        }
      }
      return;
    }

    // Add to cart buttons - Enhanced with better error handling and duplicate prevention
    if (e.target.closest('.add-to-cart')) {
      e.preventDefault();
      e.stopPropagation();

      try {
        const button = e.target.closest('.add-to-cart');

        // Prevent double-clicks
        if (button.disabled) return;
        button.disabled = true;
        button.textContent = 'Adicionando...';

        const card = button.closest('.card');

        if (!card) {
          console.error('Card not found for add-to-cart button');
          showNotification('Erro: Card não encontrada', 'error');
          button.disabled = false;
          button.textContent = 'Adicionar';
          return;
        }

        const isPack = card.classList.contains('pack-card');
        const titleElement = card.querySelector('.prod-title');

        if (!titleElement) {
          console.error('Title element not found in card');
          showNotification('Erro: Título não encontrado', 'error');
          button.disabled = false;
          button.textContent = 'Adicionar';
          return;
        }

        const title = titleElement.textContent.trim();
        console.log('Adding to cart:', title, 'isPack:', isPack);

        // Find the product/pack data
        let itemData;
        if (isPack) {
          itemData = packs.find(pack => pack.title.trim() === title);
          console.log('Pack found:', itemData);
        } else {
          itemData = products.find(product => product.title.trim() === title);
          console.log('Product found:', itemData);
        }

        if (itemData) {
          addToCart(itemData);
          console.log('Item added to cart successfully');

          // Reset button after success
          setTimeout(() => {
            button.disabled = false;
            button.textContent = 'Adicionar';
          }, 1000);
        } else {
          console.error('Item data not found for title:', title);
          console.log('Available products:', products.map(p => p.title));
          console.log('Available packs:', packs.map(p => p.title));
          showNotification('Erro: Item não encontrado no catálogo', 'error');
          button.disabled = false;
          button.textContent = 'Adicionar';
        }
      } catch (error) {
        console.error('Unexpected error in add-to-cart:', error);
        showNotification('Erro inesperado ao adicionar item', 'error');
        // Reset button on error
        const button = e.target.closest('.add-to-cart');
        if (button) {
          button.disabled = false;
          button.textContent = 'Adicionar';
        }
      }
      return;
    }

    // Buy now buttons
    if (e.target.closest('.buy-now')) {
      e.preventDefault();
      e.stopPropagation();

      try {
        const button = e.target.closest('.buy-now');
        const card = button.closest('.card');

        if (!card) {
          console.error('Card not found for buy-now button');
          showNotification('Erro: Card não encontrada', 'error');
          return;
        }

        const isPack = card.classList.contains('pack-card');
        const titleElement = card.querySelector('.prod-title');

        if (!titleElement) {
          console.error('Title element not found in card');
          showNotification('Erro: Título não encontrado', 'error');
          return;
        }

        const title = titleElement.textContent.trim();

        // Find the product/pack data
        let itemData;
        if (isPack) {
          itemData = packs.find(pack => pack.title.trim() === title);
        } else {
          itemData = products.find(product => product.title.trim() === title);
        }

        if (itemData) {
          buyNow(itemData);
        } else {
          console.error('Item data not found for title:', title);
          showNotification('Erro: Item não encontrado', 'error');
        }
      } catch (error) {
        console.error('Unexpected error in buy-now:', error);
        showNotification('Erro inesperado ao comprar', 'error');
      }
      return;
    }

    // Remove from cart buttons - Enhanced with duplicate prevention
    if (e.target.closest('.remove-item')) {
      e.preventDefault();
      e.stopPropagation();

      try {
        const button = e.target.closest('.remove-item');

        // Prevent multiple clicks
        if (button.disabled) return;
        button.disabled = true;
        button.textContent = 'Removendo...';

        const itemId = button.dataset.id;
        removeFromCart(itemId);

        // Button will be removed from DOM by updateCartUI(), so no need to reset
      } catch (error) {
        console.error('Error removing item:', error);
        showNotification('Erro ao remover item', 'error');
        // Reset button on error
        const button = e.target.closest('.remove-item');
        if (button) {
          button.disabled = false;
          button.textContent = 'Remover';
        }
      }
      return;
    }
  });

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Loading states
  function showLoading(element, text = 'Carregando...') {
    element.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner"></div>
        <span>${text}</span>
      </div>
    `;
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
  }

  function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
  }

  // Lazy loading for images
  function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Error handling wrapper
  function withErrorHandling(fn, errorMessage = 'Ocorreu um erro inesperado') {
    return function(...args) {
      try {
        return fn.apply(this, args);
      } catch (error) {
        console.error(error);
        showNotification(errorMessage, 'error');
      }
    };
  }

  // Save cart to localStorage
  function saveCartToStorage() {
    try {
      localStorage.setItem('dr9_cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to storage:', error);
    }
  }

  // Initialize with error handling
  try {
    renderProducts();
    renderPacks();
    setupContactForm();
    updateCartUI();
    setupLazyLoading();
    console.log('DR9 AI Funnel initialized successfully');
  } catch (error) {
    console.error('Initialization error:', error);
    showNotification('Erro ao carregar a página. Recarregue e tente novamente.', 'error');
  }

  // PWA install prompt
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show install button if desired
  });

  // Service worker registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          // Service worker registered successfully
        })
        .catch(registrationError => {
          // Service worker registration failed
        });
    });
  }
});