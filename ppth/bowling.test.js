class BowlingGame{
  pins = [];

  roll(pinsHit) {
    this.pins.push(pinsHit);
  }

  getScore(){
    let score = 0;
    for (let roll = 0; roll<this.pins.length; roll++){
      score += this.pins[roll];
    }

    return score;
  }
}

describe('Testing class bowlingGame, its methods and implementations', () =>{
  
  function gameComplete(pin){
    let bowling = new BowlingGame();

    for (let roll = 0; roll<20; roll++){
      bowling.roll(pin);
    }

    return bowling.getScore();
  }

  function gameRounds(pins){
    let bowling = new BowlingGame();

    bowling.roll(pins);

    return bowling.getScore();
  }

  
  test('Testing for zero score', () => {
    let pin = 0;

    expect(gameComplete(pin)).toBe(0);
  });

  test('Testing hitting 1 pin each roll', () => {
    let pin = 1;

    expect(gameComplete(pin)).toBe(20);
  });

  test('Testing spare functionalitie', () => {
    let pin = 0;

    gameRounds(5);
    gameRounds(5);
  })
})