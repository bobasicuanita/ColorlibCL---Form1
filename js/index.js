const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const messages = document.querySelectorAll('.message');
const onSubmit = document.querySelector('.btn');
const validateInput = document.querySelectorAll('.validate-input');
const error = document.querySelectorAll('.error');

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getMessage = (index, message) => {
    return messages[index].innerHTML = `${message} <i class="fas fa-exclamation-circle"></i>`;
}

onSubmit.addEventListener('click', () => {

    for (i = 0; i < messages.length; i++) {
            error[i].style.display = 'none';
            messages[i].textContent = '';
    }

    if (name.value === '') {
        error[0].style.display = 'inline-block';
        getMessage(0, 'Name is required.');
    }
    if (email.value === '' || !regex.test(email.value)) {
        error[1].style.display = 'inline-block';
        getMessage(1, 'Valid Email is required: ex@abc.xyz');
    }
    if (subject.value === '') {
        error[2].style.display = 'inline-block';
        getMessage(2, 'Subject is required.');
    }
    if (message.value === '') {
        error[3].style.display = 'inline-block';
        getMessage(3, 'You must enter your message.');
    }
});