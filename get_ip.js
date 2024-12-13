async function getIP(IPAdress, callback) {
    const url = `https://ipapi.co/${IPAdress}/json/`
    const response = await fetch(url)
    const responseJSON = await response.json()

    if (responseJSON.error == true) {
        console.log(`error: ${responseJSON.reason}`)
        console.log(`error: ${responseJSON.reason}`)
        return
    } else {
        return callback(responseJSON)
    }
}

module.exports = getIP
