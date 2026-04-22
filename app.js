function calculateEMI(){

  let P = document.getElementById("amount").value;
  let R = document.getElementById("rate").value / 12 / 100;
  let N = document.getElementById("tenure").value;

  let EMI = (P * R * Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);

  EMI = EMI.toFixed(0);

  document.getElementById("result").innerHTML = 
    "EMI: ₹ " + EMI;
}