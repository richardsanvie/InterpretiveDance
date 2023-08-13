// $(document).ready(function() {
//     console.log(document.querySelector('#inputChecked')); 
//     console.log($('#inputChecked')); 
// });

// $('#inputChecked').click(function(){
//     $('inputLine')
// })

        $(document).ready(function() {
            $("#plus").click(function() {
                $('<tr><td scope="checklist"><div class="input-group"><div class="input-group-text"><input type="checkbox" id="inputChecked"></div><input type="text" class="form-control" id="inputLine" placeholder="Your task here"></div></td></tr>').appendTo("tbody");
            });
            
            $("tbody").on("click", "#inputChecked", function() {
                $(this).parents("tr").find("#inputLine").toggleClass("texto-riscado");
            });

        });
                
        // $("tbody").on("click", ".inputChecked", function() {
        //     $(".inputLine").toggleClass("texto-riscado");
        // });

        // $(".inputChecked").click(function() {
        //     $(".inputLine").toggleClass("texto-riscado");
        //    // alert('dldklkld')
        // });

    
    
    
    

    


    // let linhas = '';
    // const form = document.getElementById('form');
    // form.addEventListener('submit', function(e){
    //     e.preventDefault();

        
    // // function adicaoDeNome(name, cellphone){
    //     const inputName = document.getElementById('name');
    //     const inputCellphone = document.getElementById('cellphone');
        
    //     // alert(`${inputName.value} / ${inputCellphone.value}`);
    //     let linha = ' <tr>';
    //     linha += `<td>${inputName.value}</td>`;
    //     linha += `<td>${inputCellphone.value}</td>`;
    //     linha += `<tr>`;
    //     linhas += linha;

    //     const corpoTabela = document.querySelector('tbody');
    //     corpoTabela.innerHTML = linhas;
    // });


// function myFunction() {
//     let x = parseFloat(document.getElementById("numberA").value);
//     let y = parseFloat(document.getElementById("numberB").value);

//     let text;
//     if (x < y) {
//         text = "Condição válida: Número B maior que número A.";
//     } else if (y < x) {
//         text = "Condição inválida: Número A maior que número B.";
//     } else {
//         text = "Os números A e B são iguais.";
//     }
//     document.getElementById("result").innerHTML = text;
// }