class menuLateral{
    constructor(){

        this.inicio()

    }

    // fução para esconder o menu lateral.
    esconder(){
         this.menuLateral.classList.add('esconder')
           this.menuLateral.classList.remove('mostrar')
    }

    // função para iniciar as interações no documento
    inicio(){

        this.menuLateral = document.querySelector('.menuLateral')
        let check = document.querySelector('#check')
        let click = document.querySelector('.labelHeader')
        this.esconder()

       click.addEventListener('click',()=>{
           
       if(!check.checked){
           this.menuLateral.classList.add('mostrar')
           this.menuLateral.classList.remove('esconder')
        
       }
       else{
          this.esconder()
       }
        })
    }
}

window.a = new menuLateral
// Sem ideias para nome da instancia então puz a  :p