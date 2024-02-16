function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);

    document.getElementById("result").value = q;
  }
  function calc() {
    var per = document.getElementById("result").value;
    var r = per / 100;
    document.getElementById("result").value = r;
  }