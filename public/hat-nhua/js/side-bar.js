function loadSideBar() {
    fetch('side-bar.html')
      .then(response => response.text())
      .then(html => {
        const footerElement = document.getElementById('side-bar');
        if (footerElement) {
          footerElement.innerHTML = html;
        } else {
          console.error('Không tìm thấy phần tử side-bar với ID "side-bar"');
        }
      })
      .catch(error => console.error('Lỗi khi tải side-bar.html:', error));
  }
  
  window.addEventListener('DOMContentLoaded', loadSideBar);