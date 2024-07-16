
function loadFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        const footerElement = document.getElementById('footer');
        if (footerElement) {
          footerElement.innerHTML = html;
        } else {
          console.error('Không tìm thấy phần tử footer với ID "footer"');
        }
      })
      .catch(error => console.error('Lỗi khi tải footer.html:', error));
  }
  
  window.addEventListener('DOMContentLoaded', loadFooter);