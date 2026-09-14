function addition() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);

    const ans = a + b;

    document.getElementById("output").textContent = "Addition = " + ans;
}