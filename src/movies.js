
function getAllDirectors(moviesArray) {}

function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function(movie){ 
        return movie.director
    })
        return directorsArray
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}

function howManyMovies(moviesArray) {
    const noOfMovies = moviesArray.filter(movie=> movie.director === 'Steven Spielberg'&&movie.genre.includes('Drama'))
        return noOfMovies.length     
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0
        }
        else{
        const onlyScoresArray = moviesArray.filter(movie => movie.score)
        const scoresAvg = onlyScoresArray.reduce((total, movie)=> total+movie.score,0)/moviesArray.length
        const roundedNumber = scoresAvg.toFixed(2)
        return parseFloat(roundedNumber)
        }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

function dramaMoviesScore(moviesArray) {
    for (let i=0;i<moviesArray.length;i++){
        if (!moviesArray[i].genre.includes('Drama')){
          return 0
        }
        else {
            const onlyDramaArray = moviesArray.filter(movie => movie.genre.includes('Drama'))
            const onlyDramaAndScoresArr = onlyDramaArray.filter(movie => movie.score)
            const dramaScoresAvg = onlyDramaAndScoresArr.reduce((total, movie)=> total+movie.score,0)/onlyDramaArray.length
            const roundedNumber = dramaScoresAvg.toFixed(2)
            return parseFloat(roundedNumber)
        }
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

function orderByYear(moviesArray) {
    let cloneArr = moviesArray.map(movies=>movies)

    let yearsArray = cloneArr.sort((a,b) =>{
        if (a.year !== b.year){
            return a.year-b.year}
        else{
            return a.title.localeCompare(b.title)
        }

    });
    return yearsArray

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

function orderAlphabetically(moviesArray) {
    let cloneArr = moviesArray.map(movies=>movies)
    let alphabetArr = cloneArr.sort((a,b)=>a.title.localeCompare(b.title))
    let titlesArr = []
    if (alphabetArr.length<=20){ 
        alphabetArr.forEach(item => titlesArr.push(item.title))
        return titlesArr
    }
    else{
        alphabetArr.splice(20)
        alphabetArr.forEach(item => titlesArr.push(item.title))
        return titlesArr
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

function turnHoursToMinutes(moviesArray) {

    let cloneArr = JSON.parse(JSON.stringify(moviesArray))
    let minsArr = []
    cloneArr.forEach((item)=>{
        if(item.duration.includes('h')&&item.duration.includes('m')){
            minsArr.push((parseFloat(item.duration.substring(0,item.duration.indexOf('h')))*60)
            + parseFloat(item.duration.substring(item.duration.indexOf(" ")+1,item.duration.indexOf("m"))))
        }
        else if (item.duration.includes('m')){
            minsArr.push(parseFloat(item.duration.substring(item.duration.indexOf(" ")+1,item.duration.indexOf("m"))))
        }
        else if (item.duration.includes('h')){
            minsArr.push((parseFloat(item.duration.substring(0,item.duration.indexOf('h')))*60))
        }
    })

    cloneArr.forEach((item, index)=>{
    item.duration = minsArr[index]
    })

    return cloneArr

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average



    console.log(JSON.stringify(bestYearAvg(movArr)));
