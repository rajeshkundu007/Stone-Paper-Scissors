let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".btnbox");
const msg = document.querySelector(".msgbox");
const user_score = document.querySelector(".user-score");
const comp_score = document.querySelector(".comp-score");

const showwinner = (userwin) => {
    if (userwin) {
        msg.innerText =`${userchice} Beats ${compchoice} And YOU WIN`;
        msg.style.backgroundColor="green";
        userscore++;
        user_score.innerText = userscore;
    } else {
        msg.innerText = "OHH!! YOU LOSE";
        msg.style.backgroundColor="red";
        compscore++;
        comp_score.innerText = compscore;
    }
}
const genCompChoice = () => {
    const options = ["paper", "rock", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return options[random]; 
}
const playgame = (userchice) => {
    let compchoice = genCompChoice();
    let userwin = true;
    if (userchice === compchoice) {
        document.msgbox.style.innertext = "GAME DRAW PLZ TRY AGN!";
    } else if (userchice === "rock") {
        userwin = compchoice === "paper" ? false : true;

    } else if (userchice === "paper") {
        userwin = compchoice === "scissor" ? false : true;
    } else {
        userwin = compchoice === "rock" ? false : true;
    }

    showwinner(userwin,);
};
choice.forEach((btnbox) => {
    btnbox.addEventListener("click", () => {
        const userchoice = btnbox.getAttribute("class");
        playgame(userchoice);
    });
});
