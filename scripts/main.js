// DR9 AI Funnel - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
  console.log('DR9 AI Funnel ativo');

  // Cart functionality
  let cart = [];
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
      image: 'assets/icons/maxresdefault.jpg',
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
      image: 'assets/images/solucoes-personalizadas.jpg',
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
      <img class="prod-thumb" alt="${pack.title}" loading="lazy" src="${pack.image || 'assets/images/default-pack.jpg'}" />
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

  // Cart functions
  function addToCart(item) {
    try {
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
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
      updateCartUI();
      showNotification('Item removido do carrinho', 'info');
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
      showNotification('Erro ao remover item do carrinho', 'error');
    }
  }

  function updateCartUI() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

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

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        removeFromCart(e.target.dataset.id);
      });
    });

    const discount = calculateDiscount();
    const total = subtotal - discount;

    cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    cartDiscount.textContent = `R$ ${discount.toFixed(2).replace('.', ',')}`;
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  function calculateDiscount() {
    const packItems = cart.filter(item => item.id.startsWith('pack'));
    return packItems.reduce((total, pack) => total + pack.discount, 0);
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
              <img src="assets/icons/8380012.jpg" alt="WhatsApp" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;">
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
              <img src="assets/icons/logo-telegram_1055548-1.jpg" alt="Telegram" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;">
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
      showNotification('Carrinho vazio!');
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
      message += `\nDesconto: R$ ${discount.toFixed(2).replace('.', ',')}`;
    }
    message += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;

    openWhatsApp(message);
  }

  function checkoutViaTelegram() {
    if (cart.length === 0) {
      showNotification('Carrinho vazio!');
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
      message += `\nDesconto: R$ ${discount.toFixed(2).replace('.', ',')}`;
    }
    message += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;

    openTelegram(message);
  }

  function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/message/JLUZNOGJKK4UK1?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  function openTelegram(message) {
    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://t.me/dr9iSuporte?text=${encodedMessage}`;
    window.open(telegramUrl, '_blank');
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

  // Cart sidebar toggle
  document.getElementById('openCartBtn').addEventListener('click', () => {
    cartSidebar.setAttribute('aria-hidden', cartSidebar.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
  });

  document.getElementById('closeCartBtn').addEventListener('click', () => {
    cartSidebar.setAttribute('aria-hidden', 'true');
  });

  // Checkout buttons
  document.getElementById('checkoutWhatsapp').addEventListener('click', checkoutViaWhatsApp);
  document.getElementById('checkoutTelegram').addEventListener('click', checkoutViaTelegram);

  // Clear cart
  document.getElementById('clearCart').addEventListener('click', () => {
    if (cart.length === 0) {
      showNotification('Carrinho já está vazio', 'info');
      return;
    }

    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
      try {
        cart = [];
        updateCartUI();
        showNotification('Carrinho limpo!', 'info');
      } catch (error) {
        console.error('Erro ao limpar carrinho:', error);
        showNotification('Erro ao limpar carrinho', 'error');
      }
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

  // Initialize with error handling
  try {
    renderProducts();
    renderPacks();
    setupContactForm();
    updateCartUI();
  } catch (error) {
    console.error('Erro na inicialização:', error);
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
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
});