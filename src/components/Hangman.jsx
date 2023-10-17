function Hangman({word, guesses}) {

    const letters = word.split('');
    const maxGuesses = 6;

    return (
        <>
            <div class="body">
					<div class="drawing">
						<div class="person-right-leg"></div>
						<div class="person-left-leg"></div>
						<div class="person-right-arm"></div>
						<div class="person-left-arm"></div>
						<div class="person-body"></div>
						<div class="person-head"></div>
						<div class="pole-down"></div>
						<div class="top"></div>
						<div class="pole-upright"></div>
						<div class="base"></div>
					</div>
					<div class="container-word">
						<span class="word-letter">
							<span class="active">W</span>
						</span>
						<span class="word-letter">
							<span class="over">O</span>
						</span>
						<span class="word-letter">
							<span class="active">R</span>
						</span>
						<span class="word-letter">
							<span class="active">D</span>
						</span>
					</div>
				</div>
        </>
    );

}

export default Hangman;