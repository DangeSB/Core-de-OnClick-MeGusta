document.querySelectorAll("article").forEach(post => {
  const btn = post.querySelector(".btn-like");
  const count = post.querySelector(".count");

  btn.onclick = () => {
    count.innerText = Number(count.innerText) + 1;
  };
});