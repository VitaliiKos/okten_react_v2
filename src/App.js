import SimpsonPage from "./pages/SimpsonPage";
import RickAndMortyPage from "./pages/RickAndMortyPage";
import './App.css';

function App() {
    const simpsonActive = () => {
        let simsonBtn = document.querySelector('.simpsonBlock>button')
        document.querySelector('.simpsonBlock>.active') ?
            simsonBtn.textContent = "Hide Simpson's family" :
            simsonBtn.textContent = "Show Simpson's family";

        let simsonContent = document.querySelector('.simpsonContent')
        simsonContent.classList.toggle('active')
    }

    const RickAndMortyActive = () => {
        let characterBtn = document.querySelector('.characterBlock>button')
        document.querySelector('.characterBlock>.active') ?
            characterBtn.textContent = "Hide Rick And Morty characters" :
            characterBtn.textContent = "Show Rick And Morty characters";

        let characterContent = document.querySelector('.characterContent')
        characterContent.classList.toggle('active')
    }

    return (

        <div className="background-container">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""/>
            <div className="stars"></div>
            <div className="App">

                <div className='simpsonBlock'>
                    <button className={'button fire'} onClick={() => simpsonActive()}>Hide Simpson's family</button>
                    <div className='simpsonContent'>
                        <SimpsonPage/>
                    </div>
                </div>
                <div className='characterBlock'>
                    <button className={'button ice'} onClick={() => RickAndMortyActive()}>Hide Rick And Morty
                        characters
                    </button>
                    <div className='characterContent'>
                        <RickAndMortyPage/>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default App;