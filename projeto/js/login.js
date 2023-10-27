const form = document.querySelector('form');
const sair = document.querySelector('#sair')
let visivelIcone ='/imagem/ICONES/olho-aberto.png'; 
let fechadoIcone ='/imagem/ICONES/olho-fechado.png';

let emailInput = ''
let senhaInput = ''
form.addEventListener('submit', (event)=>{
  event.preventDefault();
let senha = event.target.senhaCampo;
let iconeSenha = form.iconeVisivel;
let visivelSenha = senha.value.length;

    visivel(iconeSenha,senha,visivelSenha);
  
    
})

const visivel = (elemento,campo,conteudo) =>{
const btn = document.querySelector('#visualizar')
let inputSenha = elemento.classList.toggle('senha-oculta');

    btn.addEventListener('click',()=>{

        if(inputSenha && conteudo > 0){
         elemento.src=visivelIcone;
         campo.type='text';
        
        }else{
            elemento.src=fechadoIcone
            campo.type='password'
        }

        
    })
    
}

const btnSair = () =>{
    let confirmar = confirm('Deseja sair dessa página?')
    if(confirmar){
        window.location.href='/html/index.html'
        return
    }
}
