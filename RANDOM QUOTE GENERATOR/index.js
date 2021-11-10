function Quote (){
    let Quote = document.getElementById('Quote').innerHTML
    let QuoteGroup = [{
        quote: ' “The purpose of our lives is to be happy.”',
        Writer:'-Dalai Lama'
    },{
        quote: '“Life is what happens when you’re busy making other plans.”',
        Writer:'-John Lennon'
    },{
        quote: '“Get busy living or get busy dying."',
        Writer:'-Stephen King'
    },{
        quote: '“You only live once, but if you do it right, once is enough.” ',
        Writer:'-Mae West'
    },{
        quote: '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”',
        Writer:'-Thomas A. Edison'
    }]
    let ChangeMath = Math.floor(Math.random()*5+2-1)
    let Change = ChangeMath
    let Change2 = ChangeMath
    if (Change == Change2) {
        document.getElementById('Quote').innerHTML = QuoteGroup[Change].quote
        document.getElementById('writer').innerHTML = QuoteGroup[Change2].Writer
    }
}