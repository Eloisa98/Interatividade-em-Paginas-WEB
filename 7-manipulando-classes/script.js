document.querySelector("button").addEventListener("click", function() {
  const div = document.querySelector("div");
  const ps = document.querySelectorAll("p");
  
  ps.forEach(p => {
      p.style.display = p.style.display === "none" ? "block" : "none";
  });

  div.style.backgroundColor = div.style.backgroundColor === "blue" ? "" : "blue";
});
