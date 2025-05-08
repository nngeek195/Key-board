
// sinhalaToFontMap - This contains all mappings from Unicode Sinhala to legacy font codes
const sinhalaToFontMap = {
    // Complex Ligatures First (Longest Match First)
    "ත්‍රෛ": "ff;%",
    "ශෛ": "ffY",
    "චෛ": "ffp",
    "ජෛ": "ffc",
    "කෛ": "ffl",
    "මෛ": "ffu",
    "පෛ": "ffm",
    "දෛ": "ffo",
    "තෛ": "ff;",
    "නෛ": "ffk",
    "ධෛ": "ffO",
    "වෛ": "ffj",

    "ක්‍ෂො": "la%fId",
    "ක්‍ෂෞ": "la%fI!",
    "ක්‍ෂැ": "la%Ie",
    "ක්‍ෂෑ": "la%IE",
    "ක්‍ෂෙ": "la%fI",
    "ක්‍ෂේ": "la%fIa",
    "ක්‍ෂො": "la%fId",
    "ක්‍ෂෝ": "la%fIda",

    "ක්‍රි": "l%s",
    "ක්‍රී": "l%S",
    "ක්‍රෙ": "fl%",
    "ක්‍රේ": "fla%",
    "ක්‍රො": "fl%d",
    "ක්‍රෝ": "fl%da",
    "ග්‍රි": ".%s",
    "ග්‍රී": ".%S",
    "ග්‍රෙ": "f.%",
    "ග්‍රේ": "f.a%",
    "ග්‍රො": "f.d",
    "ග්‍රෝ": "f.da",
    "ත්‍රෙ": "f;%",
    "ත්‍රේ": "f;a%",
    "ත්‍රො": "f;%d",
    "ත්‍රෝ": "f;%da",
    "බ්‍රැ": "n%e",
    "බ්‍රෑ": "n%E",
    "බ්‍රෙ": "fn%",
    "බ්‍රේ": "fn%a",
    "බ්‍රො": "fnd",
    "බ්‍රෝ": "fnda",
    "ස්‍රි": "i%s",
    "ස්‍රී": "i%S",
    "ස්‍රෙ": "fi%",
    "ස්‍රේ": "fia%",
    "ස්‍රො": "fid",
    "ස්‍රෝ": "fida",
    "ශ්‍රි": "Y%s",
    "ශ්‍රී": "Y%S",
    "ශ්‍රෙ": "fY%",
    "ශ්‍රේ": "fYa%",
    "ශ්‍රො": "fY%d",
    "ශ්‍රෝ": "fY%da",
    "ජ්‍රි": "c%s",
    "ජ්‍රී": "c%S",
    "ජ්‍රෙ": "fc%",
    "ජ්‍රේ": "fca%",
    "ජ්‍රො": "fcd",
    "ජ්‍රෝ": "fcda",

    // Simple Mappings
    "අ": "w",
    "ආ": "wd",
    "ඇ": "we",
    "ඈ": "wE",
    "ඉ": "b",
    "ඊ": "B",
    "උ": "W",
    "ඌ": "W!",
    "ඍ": "R",
    "ඎ": "#",
    "ඏ": "#",
    "ඐ": "#",
    "එ": "t",
    "ඒ": "ta",
    "ඓ": "ft",
    "ඔ": "T",
    "ඕ": "´",
    "ඖ": "T!",

    "ක": "l",
    "ඛ": "L",
    "ග": ".",
    "ඝ": ">",
    "ඞ": "ඞ",
    "ච": "p",
    "ඡ": "P",
    "ජ": "c",
    "ඣ": "CO",
    "ඤ": "[",
    "ට": "g",
    "ඨ": "G",
    "ඩ": "v",
    "ඪ": "V",
    "ණ": "K",
    "ත": ";",
    "ථ": ":",
    "ද": "o",
    "ධ": "O",
    "න": "k",
    "ප": "m",
    "ඵ": "M",
    "බ": "n",
    "භ": "N",
    "ම": "u",
    "ය": "h",
    "ර": "r",
    "ල": ",",
    "ව": "j",
    "ශ": "Y",
    "ෂ": "I",
    "ස": "i",
    "හ": "y",
    "ළ": "<",
    "ඳ": "|",
    "ඥ": "{",
    "ඟ": "Õ",
    "ඤ": "[",
    "ඳු": "÷",
    "ඳූ": "ª",
    "ඳි": "¢",
    "ඳී": "£",
    "ඳු": "÷",
    "ඳූ": "¥",
    "ඳී": "§",
    "ඳෙ": "Ë",
    "ඳේ": "Ð,",
    "ඳො": "÷",
    "ඳෝ": "ª",
    "ඳං": "ªx",
    "ඳෞ": "ª!",

    // Punctuation / Symbols
    "(": "￫",
    ")": "￩",
    "%": "ￕ",
    "/": "$",
    "–": "ￔ",
    "?": "ￓ",
    "!": "ￒ",
    "=": "ￏ",
    "'": "ￎ",
    "+": "ￍ",
    ":": "ￌ",
    "÷": "ￋ",
    ";": "ﾶ",
    "\"": ",",
    "\\": "$",
};

// ✅ Legacy Font Converter Function
function writeSinhalaWindowsKB(input) {
    // Sort keys by length descending to match longest sequences first
    const sortedKeys = Object.keys(sinhalaToFontMap).sort((a, b) => b.length - a.length);

    let result = input;

    for (let key of sortedKeys) {
        const value = sinhalaToFontMap[key];
        const regex = new RegExp(key, 'g');
        result = result.replace(regex, value);
    }

    return result;
}

// ✅ Unified Function for HTML Integration
function convertSinglishToLegacyFont(input) {
    const unicodeText = doGnConvert(input);            // Singlish → Unicode
    const legacyText = writeSinhalaWindowsKB(unicodeText); // Unicode → Legacy Font
    return legacyText;
}