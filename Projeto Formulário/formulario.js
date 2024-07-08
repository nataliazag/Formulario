function Enviar(){
let nomeUsuario = document.getElementById('name').value
let emailUsuario = document.getElementById('email').value
let cpfUsuario = document.getElementById('number').value
let dataReserva = document.getElementById('data').value

let lugar1 = document.querySelector("input[name='lugar1']:checked").value

alert('Seu nome ' + nomeUsuario + '\n' 
+ 'Seu email é: ' +emailUsuario+ '\n' 
+ 'Seu CPF é: ' +cpfUsuario+ '\n'
+ 'A data da sua reserva foi: ' +dataReserva)

}