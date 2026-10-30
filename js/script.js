function sayHello() {
    alert("Привет! Это мой первый JavaScript");
}

function changeWelcomeText() {
    document.getElementById("welcomeText").innerHTML = "Рад видеть тебя на моем сайте!"
} 

function changeBackground() {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "#dff3ff";
    } else {
        document.body.style.backgroundColor = "white";
    }
}

function toggleHobby() {
    let hobby = document.getElementById("hobbyText")
    if (hobby.style.display === "none") {
        hobby.style.display = "block";
    } else {
        hobby.style.display = "none";
    }
}