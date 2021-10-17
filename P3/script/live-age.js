// Born 12 april 2020
displayAge = document.querySelector('#displayAge');

function timeSinceBorn(){
    const millisec = Date.parse('12 Apr 2020 00:12:00 GMT')
    const millisecNow = Date.parse(Date())
    const millisecSinceBorn = millisecNow - millisec

    const yearInMillisec = 31556952000
    const monthInMillisec = 2.628e+9
    const dayInMillisec = 8.64e+7
    const hourInMillisec = 3.6e+6
    const minuteInMillisec = 60000
    const secondInMillisec = 1000
    let rest = 0

    const n_yearsSinceBorn = Math.floor(millisecSinceBorn / yearInMillisec)
    rest = millisecSinceBorn % yearInMillisec

    const n_monthsSinceBorn = Math.floor(rest / monthInMillisec)
    rest = rest % monthInMillisec

    const n_daysSinceBorn = Math.floor(rest / dayInMillisec)
    rest = rest % dayInMillisec

    const n_hoursSinceBorn = Math.floor(rest / hourInMillisec)
    rest = rest % hourInMillisec

    const n_minutesSinceBorn = Math.floor(rest / minuteInMillisec)
    rest = rest % minuteInMillisec

    const n_secondsSinceBorn = Math.floor(rest / secondInMillisec)

    
    displayAge.innerHTML = `
        I am currently ${n_yearsSinceBorn} yr, ${n_monthsSinceBorn} mth, ${n_hoursSinceBorn} hrs, ${n_minutesSinceBorn} min, ${n_secondsSinceBorn} sec old
    `
}



setInterval(timeSinceBorn, 1000)