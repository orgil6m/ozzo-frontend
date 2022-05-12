export const secondFormat = (given_seconds)=>{
    if(!given_seconds || given_seconds == NaN || given_seconds == undefined){
    return ""
    }
    let hours = Math.floor(given_seconds / 3600);
    let minutes = Math.floor((given_seconds - (hours * 3600)) / 60);
    let seconds = given_seconds - (hours * 3600) - (minutes * 60);
    let timeString = minutes.toString().padStart(1, '0') + ':' + seconds.toString().padStart(2, '0');
    return timeString
}