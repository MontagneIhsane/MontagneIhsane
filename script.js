document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if (name && phone && email) {
            addContact(name, phone, email);
            contactForm.reset();
        }
    });

    function addContact(name, phone, email) {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${name} - ${phone} - ${email}</span>
            <button onclick="deleteContact(this)">Supprimer</button>
        `;

        contactList.appendChild(li);
    }
});

