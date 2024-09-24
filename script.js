let isAuthenticated = false;

document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        isAuthenticated = true; // Giả lập xác thực
        document.getElementById('auth').style.display = 'none';
        document.getElementById('task-section').style.display = 'block';
        alert('Đăng nhập thành công!');
    }
});

document.getElementById('register-btn').addEventListener('click', function() {
    alert('Chức năng đăng ký chưa được triển khai.');
});

// Quản lý Công việc
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!isAuthenticated) return;

    const taskInput = document.getElementById('task-input');
    const category = document.getElementById('category-select').value;
    const task = taskInput.value;

    const li = document.createElement('li');
    li.textContent = `${task} [${category}]`;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Hoàn thành';
    completeButton.onclick = function() {
        li.style.textDecoration = 'line-through';
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(li);

    taskInput.value = '';
});

// Blog Cá nhân
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!isAuthenticated) return;

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const tags = document.getElementById('post-tags').value;

    const li = document.createElement('li');
    li.innerHTML = `<h3>${title}</h3><p>${content}</p><p><strong>Thẻ:</strong> ${tags}</p>`;
    
    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');

    const commentInput = document.createElement('input');
    commentInput.placeholder = 'Nhập bình luận...';
    
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Bình luận';
    commentButton.onclick = function() {
        const comment = document.createElement('p');
        comment.textContent = commentInput.value;
        commentSection.appendChild(comment);
        commentInput.value = '';
    };

    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);
    li.appendChild(commentSection);
    
    document.getElementById('post-list').appendChild(li);

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-tags').value = '';
});

// Chuyển đổi giữa các phần
function showBlog() {
    document.getElementById('task-section').style.display = 'none';
    document.getElementById('blog-section').style.display = 'block';
}

function showTasks() {
    document.getElementById('blog-section').style.display = 'none';
    document.getElementById('task-section').style.display = 'block';
}
