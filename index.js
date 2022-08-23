//alert("hello");

//variables

// const contentContainer = document.getElementsByClassName("content-container");

// for(let i=0; i<contentContainer.length; i++)
// {
//     contentContainer[i].addEventListener("click", function(e){
//         //alert("hello");
//         this.classList.Toggle('active');
//     })
// };


const question= document.getElementsByClassName("question");
const answer= document.getElementsByClassName("answer");
const arrow= document.getElementsByClassName("arrow");

// question.addEventListener("click", function(){
//     answer.style.height ='150px';
// });

for(let i=0; i<question.length; i++){
    question[i].addEventListener("click", function(){
        //alert("hello");
        for(let j=0; j<answer.length; j++){
            if(j!=i){
                answer[j].style.height ='0px';
                arrow[j].textContent = '↓';
            }
        }
        if(answer[i].style.height == '150px'){
        answer[i].style.height ='0';
        arrow[i].textContent = '↓';
    }

        else{
            answer[i].style.height = '150px';
            arrow[i].textContent = '↑';
        }
    })

}