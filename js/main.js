const Data = [
    ["Яке з наведених співвідношень записано правильно?","i=U/r"],
    ["Яке з наведених співвідношень записано невірно?","i=U****r"],
];

$(()=>{
    $(".input__field").on('input', ()=>{
         let value = $(".input__field").val();
        $(".answers").html("");
         for(let i = 0; i < Data.length; i++) {
             if(Data[i][0].indexOf(value) !== -1) {
                 $(".answers").append(`<div class="new-line"><div class="question">${Data[i][0]}</div><div class="answer">${Data[i][1]}</div></div>`);
             }
         }
    })
});