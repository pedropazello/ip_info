async function getIP(IPAdress, callback) {
    const url = `https://ipapi.co/${IPAdress}/json/`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return callback(responseJSON)
}

module.exports = getIP;
