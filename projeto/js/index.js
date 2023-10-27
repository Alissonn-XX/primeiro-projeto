let menu = document.querySelector('.menu ul');
let iconeMobile = document.querySelector('.icone-mobile');
let lupa = document.querySelector('#pesquisa svg');
let campoPesquisa = document.querySelector('#pesquisa input');
let conteinerPesquisa = document.querySelector('#pesquisa');
let detalhePesquisa = document.querySelector('#pesquisa span');
let itensSubMenu = document.querySelectorAll(".opicoes [data-sub-menu]");
let btnMobile = document.querySelector('.btn-menu');
const login = document.querySelector('#login')


/*Função resposável pelo menu mobile*/
    btnMobile.addEventListener('click', ()=>{
        menu.classList.toggle('ativo')
        iconeMobile.classList.add('mobile-ativo')
        iconeMobile.classList.remove('mobile-desativado')
        conteinerPesquisa.setAttribute('style', 'display:none');
        
       
           if(!menu.classList.contains('ativo')){
            opcoes.classList.remove('sub-menu-ativo')
            secoes.forEach(item =>{ item.classList.remove('visivel'),item.classList.add('desativado') })
           } 
       

        const desativandoMenu = () =>{
            if(!menu.classList.contains('ativo')){
                iconeMobile.classList.remove('mobile-ativo')
                
                
                if(!iconeMobile.classList.contains('mobile-ativo')){
                    iconeMobile.classList.toggle('mobile-desativado')
                    conteinerPesquisa.setAttribute('style', 'display:block');
                    campoPesquisa.classList.remove('inputPesquisa');
                    conteinerPesquisa.append(lupa,detalhePesquisa);
                
                }
            }
        }
        
        desativandoMenu();
    
    });
   

/*Função do ícone da lupa */

    lupa.addEventListener('click',()=> {
       if(!campoPesquisa.classList.contains('inputPesquisa')){
            campoPesquisa.classList.toggle('inputPesquisa');
            document.querySelector('#pesquisa input').focus();
            campoPesquisa.setAttribute('style','top:15px;')
            lupa.remove();
            detalhePesquisa.remove();
        } 
    })

     /*Função responsável por verificar se o campo de pesquisa está em foco */
    let focuFora = ()=>{ 
        
        if(campoPesquisa.classList.contains('inputPesquisa') && !conteinerPesquisa.append(lupa)){
            campoPesquisa.classList.remove('inputPesquisa') 
            conteinerPesquisa.append(lupa,detalhePesquisa)
            campoPesquisa.removeAttribute('style','top:15px;')
            campoPesquisa.value=""
        }    

    } 

    /*Deixar o campo de pesquisa limpo*/
campoPesquisa.value=""

/*Arrays que contem os OBJETOS do DOMStringMap dos elementos do HTML */
let objDataSetSubMenu =[]
let objDataSetMenuPrincipal =[];
let controle = null
/*Função que extrai os objetos do DOMStringMap */
    function conversaoItensCategoria(itens){
        let rest =''
        for (let i = 0; i < itensSubMenu.length; i++) {
            
            objDataSetSubMenu.push(Object.assign({}, itensSubMenu[i].dataset));          
            
        objDataSetSubMenu.filter(item =>{
            if(item.subMenu === itens){
                return rest = item.subMenu
            }
          })

        } 

        return rest
    }

/*Função do menu responsável por abrir as opções de cada categoria, baseado no tópico que for clicado.*/
    let menuAtivaAbas = () =>{ 
        let itensMenuPrincipal = document.querySelectorAll(".menu [data-menu-principal]");
        let resumo = ''

             for(let liMenu of itensMenuPrincipal){

                 liMenu.addEventListener('click', (event)=>{
                  
                     objDataSetMenuPrincipal.push(Object.assign({}, event.currentTarget.dataset))
                     
                        objDataSetMenuPrincipal.filter((item)=>{
                                
                                if(item.menuPrincipal == liMenu.dataset.menuPrincipal){
                                    return  resumo = item.menuPrincipal
                                }
                            })
                            controle = resumo  
                            
                            if(resumo == conversaoItensCategoria(controle)){
                                menuCategorias(conversaoItensCategoria(controle))
                                
                            }   
                        
                   
                     })
                
                
             }
            
    }
    menuAtivaAbas();
      
let opcoes = document.querySelector('.opicoes')
let secoes = document.querySelectorAll('.opicoes section')

    let menuCategorias = (id)=>{
        let mostrarCategoria = id; 
        secoes.forEach(item =>{
             $(`#${item.id}`).filter(() => {  
                      if(item.id === mostrarCategoria){
                          opcoes.classList.add('sub-menu-ativo')
                           item.classList.remove('desativado')
                           item.classList.toggle('visivel')     
                           return item.id
                      } else{
                            item.classList.remove('visivel')
                            item.classList.add('desativado')
                        }
                 })
                
          })

         
    }

login.addEventListener('click',()=>{
   window.location.href="/html/login.html"
})


