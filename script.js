function answer(response) {
    document.getElementById('question').style.display = 'none';
    document.getElementById('response').style.display = 'block';

    if (response === 'yes') {
        document.getElementById('heart-container').style.display = 'block';
    } else {
        document.getElementById('angry-message').style.display = 'block';
    }
}
