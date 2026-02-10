// JavaScript files are compiled and minified during the build process to the assets/built folder.

// Import CSS
import "../css/index.css";

// Table of Contents generator for posts
(function () {
    const tocContainer = document.querySelector('.gh-toc');
    const content = document.querySelector('.gh-content');
    if (!tocContainer || !content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (headings.length < 3) {
        tocContainer.style.display = 'none';
        return;
    }

    const list = document.createElement('ol');
    headings.forEach(function (heading) {
        if (!heading.id) {
            heading.id = heading.textContent
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
        }
        const li = document.createElement('li');
        li.className = heading.tagName === 'H3' ? 'toc-h3' : '';
        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        list.appendChild(li);
    });

    tocContainer.appendChild(list);
})();
