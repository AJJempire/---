
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[type="text"]').value;
        const password = this.querySelector('input[type="password"]').value;
        if (username && password) {
            window.location.href = 'index.html';
        } else {
            alert('请输入用户名和密码');
        }
    });
});