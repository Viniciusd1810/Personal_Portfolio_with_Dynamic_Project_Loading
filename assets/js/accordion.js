const accordionTrigger = document.querySelectorAll('.trigger')

accordionTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const accordion = trigger.parentElement
        const isOpen = accordion.classList.contains('accordion--open')

        if (isOpen) {
            accordion.classList.remove('accordion--open')
        } else {
            accordion.classList.add('accordion--open')
        }
    })
})