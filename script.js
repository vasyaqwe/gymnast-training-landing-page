const hiddenElements = document.querySelectorAll('.hidden');
const arrow = document.querySelector('.arrow');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            arrow.classList.add('hidden');
        } else {
            arrow.classList.add('show');
            arrow.classList.remove('hidden');
        }
    })
})
hiddenElements.forEach(el => observer.observe(el));
