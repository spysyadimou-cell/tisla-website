// كود JavaScript لموقع TISLA
document.addEventListener('DOMContentLoaded', function() {
    console.log('TISLA - منصة البيع والشراء المحلي');
    
    // تأثير التمرير لشريط التنقل
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(34, 197, 94, 0.95)';
        } else {
            navbar.style.background = '#22c55e';
        }
    });
    
    // إضافة تأثير للبطاقات
    const cards = document.querySelectorAll('.product-card, .store-card, .offer-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});