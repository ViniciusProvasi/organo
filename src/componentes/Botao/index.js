import './Botao.css'

const Botao = (props) => {
    return(<button className='botao'>
        {props.children} 
        </button>
    )
}

export default Botao 
// o comando children, segue para conseguimos colocar no formulario imagens de icone ou qualquer tipo de coisas, lembrando que ele precisa ficar no Js e no html