const getIP = require('./get_ip');

getIP("8.8.8.8", (resp) => {
    if (resp.ip != undefined) {
        console.log(`IP: ${resp.ip}`)
    }
    
    if (resp.country_capital != undefined) {
        console.log(`Country Capital: ${resp.country_capital}`)
    }

    if (resp.country_code != undefined) {
        console.log(`Country Code: ${resp.country_code}`)
    }

    if (resp.timezone != undefined) {
        console.log(`Country Timezone: ${resp.timezone}`)
    }

    if (resp.timezone != undefined) {
        console.log(`Country Timezone: ${resp.timezone}`)
    }

    if (resp.timezone != undefined) {
        console.log(`Country Timezone: ${resp.timezone}`)
    }

    if (resp.timezone != undefined) {
        console.log(`Country Timezone: ${resp.timezone}`)
    }

    if (resp.timezone != undefined) {
        console.log(`Country Timezone: ${resp.timezone}`)
    }
})