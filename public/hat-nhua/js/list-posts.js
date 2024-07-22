// // list-posts.js
// const files = [
//   {
//     id: 1,
//     files_href: "ve-chung-toi.html",
//     name: "Giới thiệu về TSH",
//   },
//   {
//     id: 2,
//     files_href: "go-nhua-la-gi.html",
//     name: "Gỗ nhựa là gì",
//   },
//   {
//     id: 3,
//     files_href: "nhua-goc-tinh-bot-la-gi.html",
//     name: "Nhựa gốc tinh bột là gì",
//   },
//   {
//     id: 4,
//     files_href: "nhua-ca-phe-la-gi.html",
//     name: "Nhựa cà phê là gì",
//   },
//   {
//     id: 5,
//     files_href: "nhua-soi-tre-la-gi.html",
//     name: "Nhựa sợi tre là gì",
//   },
//   {
//     id: 6,
//     files_href: "nhua-abs-la-gi.html",
//     name: "Nhựa ABS là gì",
//   },
// ];

// const shownFiles = []; 

// const randomFiles = [];
// for (let i = 0; i < 15; i++) {
//   let randomIndex;
//   do {
//     randomIndex = Math.floor(Math.random() * files.length);
//   } while (shownFiles.includes(files[randomIndex])); 

//   randomFiles.push(files[randomIndex]);
//   shownFiles.push(files[randomIndex]);
// }

// // Hiển thị các file ngẫu nhiên
// for (const file of randomFiles) {
//   const link = `<a href="${file.files_href}" class="">${file.name}</a>`;
//   document.querySelector("#links-container").innerHTML += link;
// }


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
  {
    id: 7,
    files_href: "bio-ca-phe-pp.html",
    name: "BIO cà phê PP",
  },
  {
    id: 8,
    files_href: "bio-go-pp.html",
    name: "BIO Gỗ PP",
  },
  {
    id: 9,
    files_href: "bio-rom-abs.html",
    name: "BIO Rơm ABS",
  },
  {
    id: 10,
    files_href: "bio-rom-pe.html",
    name: "BIO Rơm PE",
  },
  {
    id: 11,
    files_href: "bio-rom-pla.html",
    name: "BIO Rơm PLA",
  },
  {
    id: 11,
    files_href: "bio-rom-pp.html",
    name: "BIO Rơm PP",
  },
  {
    id: 12,
    files_href: "bio-tre-pp.html",
    name: "BIO Tre PP",
  },
];

const shownFiles = new Set(); // Sử dụng Set để kiểm tra nhanh hơn

const randomFiles = [];
const maxFilesToShow = Math.min(files.length, 15); // Đảm bảo không vượt quá số phần tử có sẵn

for (let i = 0; i < maxFilesToShow; i++) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * files.length);
  } while (shownFiles.has(randomIndex));

  randomFiles.push(files[randomIndex]);
  shownFiles.add(randomIndex);
}

// Hiển thị các file ngẫu nhiên
let linksHtml = '';
for (const file of randomFiles) {
  const link = `<a href="${file.files_href}" class="">${file.name}</a><br>`;
  linksHtml += link;
}
document.querySelector("#links-container").innerHTML = linksHtml;

