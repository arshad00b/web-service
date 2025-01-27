function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}
