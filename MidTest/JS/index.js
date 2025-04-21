// 获取URL参数中的用户名，如果有的话
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }
});