/**
 * 
 * 
 * The first building (first real challenge) is to use mobile-first concept.
 * 
 * 
 */

// const triggerButton = document.querySelectorAll(".trigger-button");
// triggerButton.forEach(trigger => {
//     console.log(trigger);
//     trigger.addEventListener("click", () => {
//         console.log(trigger.childNodes);
//         const isOpen = trigger.parentElement.classList.contains("open");
//         if (isOpen) {
//             trigger.parentElement.classList.remove("open");
//         } else {
//             trigger.parentElement.classList.add("open");
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const triggerButton = document.querySelectorAll('.trigger-button');
    triggerButton.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isOpen = trigger.parentElement.children[1].classList.contains("open");
            if (isOpen) {
                trigger.parentElement.children[1].classList.add("content");
                trigger.parentElement.children[1].classList.remove("open");
                trigger.parentElement.children[0].classList.remove("expanded");
            } else {
                trigger.parentElement.children[1].classList.remove("content");
                trigger.parentElement.children[1].classList.add("open");
                trigger.parentElement.children[0].classList.add("expanded");
            }
        });
    })
});