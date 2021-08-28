// const modalLinks = document.querySelectorAll('.modalLinks');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 500;

// if (modalLinks.length > 0) {

//     for (let index = 0; index < modalLinks.length; index++) {

//         const modalLink = modalLinks[index];
//         modalLink.addEventListener("click", function (e) {
//             const modalName = modalLink.getAttribute('href').replace('#', '');
//             const currentModal = document.getElementById(modalName);
//             modalOpen(currentModal);
//             e.preventDefault();
//         });
//     }
// }

// const closeModalIcon = document.querySelectorAll('.close-modal');

// if (closeModalIcon.length > 0) {

//     for (let index = 0; index < closeModalIcon.length; index++) {

//         const el = closeModalIcon[index];
//         el.addEventListener('click', function (e) {
//             modalClose(el.closest('.modal'));
//             e.preventDefault();
//         });
//     }

// }

// function modalOpen(currentModal) {
//     if (currentModal && unlock) {
//         const modalActive = document.querySelector('.modal.active');

//         if (modalActive) {
//             modalClose(modalActive, false);
//         } else {
//             // bodyLock();
//         }
//         currentModal.classList.add('active');
//         currentModal.addEventListener('click', function (e) {
//             if (!e.target.closest('.modal-content')) {
//                 modalClose(e.target.closest('.modal'))
//             }
//         });
//     }
// }

// function modalClose(modalActive) {
//     if (unlock) {
//         modalActive.classList.remove('active');
//     }
// }





