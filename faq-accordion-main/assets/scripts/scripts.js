/**
 * 
 * 
 * 
 * 
 */

document.addEventListener('DOMContentLoaded', () => {
    const triggerButton = document.querySelectorAll('.trigger-button');
    triggerButton.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isOpen = trigger.parentElement.children[1].classList.contains("open");
            if (isOpen) {
                trigger.parentElement.children[1].classList.add("content");
                trigger.parentElement.children[1].classList.remove("open");
                trigger.parentElement.children[0].classList.remove("trigger-button--expanded");
            } else {
                trigger.parentElement.children[1].classList.remove("content");
                trigger.parentElement.children[1].classList.add("open");
                trigger.parentElement.children[0].classList.add("trigger-button--expanded");
            }
        });
    })
});