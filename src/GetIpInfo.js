

async function GetIp() {
    const res = await fetch("https://api64.ipify.org?format=json");
    const data = await res.json()
    return data.ip
    
}
async function GetInfo() {
    const ip = await GetIp();
    const res = await fetch(`http://ipwho.is/${ip}`)
    const data = await res.json()
    console.log(data);
    return data;
    
}

export default GetInfo;