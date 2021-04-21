function insert(num) {
  document.form.hasil.value = document.form.hasil.value + num;
}

function equal() {
  var hasil = document.form.hasil.value;

  document.form.hasil.value = eval(hasil);
}

function clean() {
  document.form.hasil.value = "";
}
function back() {
  var hasil = document.form.hasil.value;
  document.form.hasil.value = hasil.substring(0, hasil.length - 1);
}
