// You manually update this list (or automate generation server-side later)
const posts = [
    "2024-05-02.html",
    "2024-05-01.html"
  ];
  
  const list = document.getElementById("til-list");
  
  posts.forEach(filename => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `posts/${filename}`;
    link.textContent = filename.replace(".html", "").replace(/-/g, " – ");
    item.appendChild(link);
    list.appendChild(item);
  });
  