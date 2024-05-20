const supportedPrefix = ['day', 'hour', 'minute', 'second']
const timeUnitsInMilliseconds: { [unit: string]: number } = {
    'day': 86400000, // 24*60*60*1000
    'hour': 3600000,  // 60*60*1000
    'minute': 60000,    // 60*1000
    'second': 1000      // 1000
};

const supportedLanguage = ['Korean', 'English']
const languageStrings: { [language: string]: { [type: string]: { [unit: string]: string } } } = {
    'Korean': {
        "over": {
            "day": "(TIME)일 지남.",
            "hour": "(TIME)시간 지남.",
            "minute": "(TIME)분 지남.",
            "second": "(TIME)초 지남."
        }, 
        "under": {
            "day": "(TIME)일 남음.",
            "hour": "(TIME)시간 남음.",
            "minute": "(TIME)분 남음.",
            "second": "(TIME)초 남음."
        }, 
    },
    'English': {
        "over": {
            "day": "D+(TIME)",
            "hour": "H+(TIME)",
            "minute": "Minute+(TIME)",
            "second": "Second+(TIME)"
        }, 
        "under": {
            "day": "D-(TIME)",
            "hour": "H-(TIME)",
            "minute": "Minute-(TIME)",
            "second": "Second-(TIME)"
        }, 
    }
}

function determinePrefix(gapBetweenDate: number): string {
    if (gapBetweenDate >= 86400000) { // 24*60*60*1000(24시간, 하루)
        return 'day'
    } else if (gapBetweenDate >= 3600000) { // 60*60*1000(1시간)
        return 'hour'
    } else if (gapBetweenDate >= 60000) { //60*1000 (1분)
        return 'minute'
    } else {
        return 'second'
    }
}
/**
 * Converts a Unix timestamp to a human-readable time gap in the specified language and with the given prefix. like 'D-3'
 * @param {number} unixTime - The Unix timestamp to convert.
 * @param {string} prefix - The prefix to use for the time gap.(day, hour, minute, second)
 * @param {string} language - The language to use for the time gap string.(Korean, English)
 * @returns {string} The formatted time gap string.
 */
function UnixToDday(unixTime: number, prefix: string, language: string): string {
    if (!supportedLanguage.includes(language)) language = 'English'
    const currentDateUnix = new Date().getTime()
    const gapBetweenDate = unixTime - currentDateUnix
    const timeString = languageStrings[language][(gapBetweenDate < 0 ? 'under' : 'over')]
    if (!supportedPrefix.includes(prefix)) prefix = determinePrefix(Math.abs(gapBetweenDate))
    return timeString[prefix].replace('(TIME)', `${Math.abs(Math.trunc(gapBetweenDate / timeUnitsInMilliseconds[prefix]))}`)
}

module.exports = { UnixToDday };