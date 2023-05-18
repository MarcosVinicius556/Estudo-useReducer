import { useReducer } from 'react'
import './App.css'

/*
  Por padrão ao utilizar o use reducer, a função recebe 2 parâmetros:
    -> state que seria os estados que estão sendo controlados
    -> action que é como podemos pegar alterações e decidir o fluxo da aplicação 
 */
const reducer = (state, action) => {
  //Normalmente se utiliza o switch para fazer o controle de fluxo
  console.log('Caiu na função reducer!');
  switch (action.type) {
    case "incremento":
      console.log('Caiu no incremento');
      return {
        /**
         * Aqui é guardado o valor anterior da state (spread operator),
         * e atualizado apenas o estado que desejamos
         * modificar no action "incremento"
         **/
        ...state,
        count: state.count + 1
      };
    case 'showText':
      console.log('Caiu no showText!');
      return {
        ...state, showText: !state.showText
      };
    case 'incrementaEshowText':
    console.log('Caiu no incrementaEshowText!');
    return {
      showText: !state.showText,
      count: state.count + 1,
    };
    case 'reset':
      return {
        count: 0, 
        showText: true,
      }
    default: 
      console.log('Caiu no case default');
      return {
        ...state
      }
  }
}

function App() {

  /*
    useReducer é mais utilizado quando se precisa manipular mais de um estado
    recebe 2 parâmetros: 
      -> Função que será executada para quando for chamado o dispatch
      -> Estado inicial dos states
   */
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  // const [count, setCount] = useState(0)
  // const [showText, setShowText] = useState(true);

  const handleClick = () => {
    //dispatch --> action
    console.log('dispatch');
    dispatch({type: 'incremento'});
    dispatch({type: 'showText'});

    // setCount((count) => count + 1);
    // setShowText(!showText);
  }

  const {count, showText} = state;

  return (
    <>
      <div className='App'>
          <h1>useReducer!</h1>
          <h3>{count}</h3>
          <button onClick={handleClick}>Clique</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Resetar</button>
          {showText && <p>Agora eu apareço!</p>}
      </div>
    </>
  )
}

export default App
