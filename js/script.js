function submit() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;


    const data = `Name : ${fname} ${lname}\nEmail : ${email}\nSubject : ${subject} \nMessage : ${message}`;
    const blob = new Blob([data], {type: 'text/plain'});

    const link =document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'formData.txt';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}