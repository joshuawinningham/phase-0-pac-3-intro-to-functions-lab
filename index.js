function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}

logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase());
}

logWhisper("hello");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    if (string === string) {
        return "I would love to!"
    }
}

sayHiToHeadphonedRoommate("Let's have dinner together!");





