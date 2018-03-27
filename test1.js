alert('Ana are mere');

<html>
<body>

<h2>My First JavaScript</h2>

<button type="button"
onclick="days+' '+document.getElementById('demo').innerHTML = Date()">
Unde suntem in timp?.</button>

<p id="demo"></p>

<script>
var d = new Date();
var days = ["Dumineca","Lunie","Martz","Miercure","Jhoie","Viniere","Sambata"];
document.getElementById("demo").innerHTML = days[d.getDay()];
</script>

</body>
</html> 
