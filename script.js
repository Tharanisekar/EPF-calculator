function calculateEPF() {
    var basicSalary = parseFloat(document.getElementById("basicSalary").value);
    var epfRate = parseFloat(document.getElementById("epfRate").value);

    if (isNaN(basicSalary) || isNaN(epfRate)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
    } else {
        var epfContribution = (basicSalary * epfRate) / 100;
        var totalContribution = basicSalary + epfContribution;
        document.getElementById("result").innerHTML = "EPF Contribution: $" + epfContribution.toFixed(2) + "<br>Total Contribution: $" + totalContribution.toFixed(2);
    }
}
