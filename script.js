function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
}

function closeStartMenu() {
    document.getElementById('startMenu').style.display = 'none';
}

function openApp(app) {
    closeStartMenu();
    document.getElementById(app).style.display = 'block';
}

function closeApp(app) {
    document.getElementById(app).style.display = 'none';
}

function appendToCalc(value) {
    const input = document.getElementById('calcInput');
    input.value += value;
}

function calculate() {
    const input = document.getElementById('calcInput');
    input.value = eval(input.value);
}
