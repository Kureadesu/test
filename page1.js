function function2() {
    let count = 0;
    let click2 = document.getElementById('click2');
    let disp = document.getElementById('disp');
    

    click2.onclick = function () {
        document.getElementById("textwindow").style.display="block";
        count++;
        disp.innerHTML = count;
        alert('I love you! <3');
    }
}
