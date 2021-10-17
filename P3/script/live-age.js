// Born 12 april 2020
displayAge = document.querySelector('#displayAge');

function timeSinceBorn(){
    const millisec = Date.parse('12 Apr 2020 00:12:00 GMT')
    const millisecNow = Date.parse(Date())
    const secSinceBorn = (millisecNow - millisec)/1000

    const yearInMillisec = 30.5*60*60*24*12
    const monthInMillisec = 60*60*24*30.5
    const dayInMillisec = 60*60*24
    const hourInMillisec = 60*60
    const minuteInMillisec = 60

    const n_yearsSinceBorn = Math.floor(secSinceBorn / yearInMillisec)
    let rest = secSinceBorn % yearInMillisec

    const n_monthsSinceBorn = Math.floor(rest / monthInMillisec)
    rest %=  monthInMillisec

    const n_daysSinceBorn = Math.floor(rest / dayInMillisec)
    rest %= dayInMillisec

    const n_hoursSinceBorn = Math.floor(rest / hourInMillisec)
    rest %= hourInMillisec

    const n_minutesSinceBorn = Math.floor(rest / minuteInMillisec)
    rest %=  minuteInMillisec

    const n_secondsSinceBorn = Math.floor(rest)

    displayAge.innerHTML = `
        I am currently ${n_yearsSinceBorn} yr, ${n_monthsSinceBorn} mth, ${n_daysSinceBorn} days, ${n_hoursSinceBorn} hrs, ${n_minutesSinceBorn} min and ${n_secondsSinceBorn} sec old
    `
}

timeSinceBorn()
setInterval(timeSinceBorn, 1000)