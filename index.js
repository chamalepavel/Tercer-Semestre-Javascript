document.addEventListener("DOMContentLoaded", function() {
    let titulo = document.getElementById("titulo");

    document.getElementById("btnDom").addEventListener("click", function() {
        titulo.textContent = "Hello Dom!";
    });

    document.getElementById("btnWorld").addEventListener("click", function() {
        titulo.textContent = "Hello Worl!";
    });

    document.getElementById("btnBoth").addEventListener("click", function() {
        titulo.textContent = "Hello Worl! Hello DOM!";
    });
});
