const fortune = ['very bad', 'bad', 'slightly bad', 'fair', 'slightly good', 'good', 'excilent']

function getFortune() {

    return Math.floor(Math.random() * 7);
}

function fortuneString() {

    let fortuneIndex = getFortune();
    console.log(fortuneIndex);
    return `Your fortune today is ${fortune[fortuneIndex]}`;
}
