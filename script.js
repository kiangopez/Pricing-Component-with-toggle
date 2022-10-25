const toggler = document.getElementById("toggler");
const basic = document.getElementById("basic");
const pro = document.getElementById("pro");
const master = document.getElementById("master");

toggler.addEventListener("click", () => {
  const val = toggler.checked;
  if (val == false) {
    basic.innerHTML = `<span class="dollar">$</span>199.99`;
    pro.innerHTML = `<span class="dollar">$</span>249.99`;
    master.innerHTML = `<span class="dollar">$</span>399.99`;
  } else {
    basic.innerHTML = `<span class="dollar">$</span>19.99`;
    pro.innerHTML = `<span class="dollar">$</span>24.99`;
    master.innerHTML = `<span class="dollar">$</span>39.99`;
  }
});
