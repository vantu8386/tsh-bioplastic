// list-posts.js
const files = [
  {
    id: 1,
    files_href: "ve-chung-toi.html",
    name: "Giới thiệu về TSH",
  },
  {
    id: 2,
    files_href: "go-nhua-la-gi.html",
    name: "Gỗ nhựa là gì",
  },
  {
    id: 3,
    files_href: "nhua-goc-tinh-bot-la-gi.html",
    name: "Nhựa gốc tinh bột là gì",
  },
  {
    id: 4,
    files_href: "nhua-ca-phe-la-gi.html",
    name: "Nhựa cà phê là gì",
  },
  {
    id: 5,
    files_href: "nhua-soi-tre-la-gi.html",
    name: "Nhựa sợi tre là gì",
  },
  {
    id: 6,
    files_href: "nhua-abs-la-gi.html",
    name: "Nhựa ABS là gì",
  },
];

const shownFiles = []; // Mảng để lưu trữ các file đã hiển thị

const randomFiles = [];
for (let i = 0; i < 15; i++) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * files.length);
  } while (shownFiles.includes(files[randomIndex])); // Kiểm tra xem file đã được hiển thị hay chưa

  randomFiles.push(files[randomIndex]);
  shownFiles.push(files[randomIndex]); // Thêm file vào mảng đã hiển thị
}

// Hiển thị các file ngẫu nhiên
for (const file of randomFiles) {
  const link = `<a href="${file.files_href}" class="">${file.name}</a>`;
  document.querySelector("#links-container").innerHTML += link;
}
