const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');

        const isVisible = content.style.display === 'block';

        accordionItems.forEach(i => {
            i.querySelector('.accordion-content').style.display = 'none';
        });

        if (!isVisible) {
            content.style.display = 'block';
        }
    });
});
