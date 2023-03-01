const answers = {
  q1: 1,
  q2: 2,
  q3: 2,
  q4: 4,
  q5: 2,
  q6: 3,
  q7: 1,
  q8: 3,
  q9: 2,
  q10: 3,
};
// ========================== clicking next button ==========================
var next = document.getElementById("next");
if (next) {
  next.addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
      if (document.getElementById(i.toString()).checked) {
        sessionStorage.setItem(
          document.getElementsByClassName("q-container")[0].id,
          i
        );
        location.assign(
          document.getElementsByClassName("q-container")[0].id[0] +
            (
              parseInt(
                document.getElementsByClassName("q-container")[0].id[1]
              ) + 1
            ).toString() +
            ".html"
        );
        var optionSelected = True;
        break;
      }
    }
    if (!optionSelected) {
      alert("select an option");
    }
  });
}
// ======================== clicking submit button =======================

var submit = document.getElementById("submit");
if (submit) {
  submit.addEventListener("click", function () {
    let endButtonHolder= document.getElementById("end-button-holder")
    endButtonHolder.style.display= "flex";
    for (let i = 1; i < 5; i++) {
      if (document.getElementById(i.toString()).checked) {
        sessionStorage.setItem(
          document.getElementsByClassName("q-container")[0].id,
          i
        );
        var optionSelected = true;
      }
    }
    if (document.getElementById("last-question")) {
      optionSelected = true;
    }
    if (!optionSelected) {
      alert("please select an option");
      return;
    }

    var j = 0;
    var score = 0;
    var wrong = 0;
    while (sessionStorage.key(j)) {
      if (sessionStorage.key(j).startsWith("q")) {
        if (
          sessionStorage.getItem(sessionStorage.key(j)) ==
          answers[sessionStorage.key(j)]
        ) {
          score += 1;
        } else {
          wrong += 1;
        }
      }
      j++;
    }

    document.getElementById("q10").style.display = "none";
    var user = document.getElementById("username");
    user.innerText=` ${sessionStorage.getItem("username")}`;
    document.getElementById("last-question").style.display = "none";
    document.getElementsByClassName("note")[0].style.display = "none";
    if (sessionStorage.getItem("username")) {
      document.getElementsByClassName("score-display")[0].style.display =
        "block";
      var marks = document.getElementById("marks");
      var stats = document.getElementById("stats");
      var correctAnswers = document.getElementById("correct-answers");
      var wrongAnswers = document.getElementById("wrong-answers");
      var skippedAnswers = document.getElementById("skipped-answers");
      correctAnswers.style.display = "inline-block";
      wrongAnswers.style.display = "inline-block";
      skippedAnswers.style.display = "inline-block";
      marks.style.display = "inline-block";
      marks.innerText = `${score}`;
      stats.style.display = "block";
      correctAnswers.innerText = `${score}`;
      wrongAnswers.innerText = `${wrong}`;
      skippedAnswers.innerText = `${10 - score - wrong}`;
    }
    else{
      alert("No user logged in to store the information");
    }
  });
}

// ======================= clicking try again button ==================

var tryAgain = document.getElementById("try-again");
if(tryAgain){
  tryAgain.addEventListener("click",function(){

 
  for(let i = 1 ; i<=10; i++){
    sessionStorage.removeItem(`q${i}`);
  }
  location.assign("q1.html");
}
)
}

// ========================clciking log out button =======================

var logOut = document.getElementById("log-out");
if(logOut){
  logOut.addEventListener("click",function(){
    sessionStorage.clear();
    location.assign("../index.html");
  })
}

// ======================= clicking skip button =======================

var skip = document.getElementById("skip");
if (skip) {
  skip.addEventListener("click", function () {
    location.assign(
      document.getElementsByClassName("q-container")[0].id[0] +
        (
          parseInt(document.getElementsByClassName("q-container")[0].id[1]) + 1
        ).toString() +
        ".html"
    );
  });
}
