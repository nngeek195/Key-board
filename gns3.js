// Helper function for string replacement
function s(g, regex, replacement) {
    return g.replace(regex, replacement);
}

// Arrays for consonants and vowels
var windowsKB, ngn_v,
    gn_c = ["k", "g", "gh", "ch", "j", "jh", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "y", "r", "l", "v", "s", "h"],
    gn_cUni = ["ක", "ග", "ඝ", "ච", "ජ", "ඡ", "ට", "ඨ", "ඩ", "ඪ", "ණ", "ප", "ඵ", "බ", "භ", "ම", "ය", "ර", "ල", "ව", "ස", "හ"];

var gn_v = ["a", "aa", "i", "ii", "u", "uu", "e", "ee", "ai", "o", "oo"],
    gn_vUni = ["අ", "ආ", "ඉ", "ඊ", "උ", "ඌ", "එ", "ඒ", "ඓ", "ඔ", "ඕ"],
    gn_vmUni = ["", "ා", "ි", "ී", "ු", "ූ", "ෙ", "ේ", "ෛ", "ො", "ෝ"];

var specialgn_c = ["sh", "ks", "ndh", "nd", "ng"],
    specialgn_cUni = ["ශ", "ක්ෂ", "ණ්ධ", "ණ්ඩ", "ඞ"];

var gn_sc = ["a", "aa", "i", "ii", "u", "uu", "e", "ee", "ai", "o", "oo"],
    gn_scUni = ["", "ා", "ි", "ී", "ු", "ූ", "ෙ", "ේ", "ෛ", "ො", "ෝ"];

// Main conversion function
function writeSinhalaWindowsKB(g) {
    g = s(g, /,/g, "￦");
    g = s(g, /\./g, "¡");
    g = s(g, /\(/g, "￫");
    g = s(g, /\)/g, "￩");
    g = s(g, /%/g, "ￕ");
    g = s(g, /\//g, "$");
    g = s(g, /–/g, "ￔ");
    g = s(g, /\?/g, "ￓ");
    g = s(g, /!/g, "ￒ");
    g = s(g, /\=/g, "ￏ");
    g = s(g, /\'/g, "ￎ");
    g = s(g, /\+/g, "ￍ");
    g = s(g, /\:/g, "ￌ");
    g = s(g, /\÷/g, "ￋ");
    g = s(g, /\;/g, "ﾶ");

    // Sample replacements for complex Sinhala characters
    g = s(g, /ත්‍රෛ/g, "ff;%");
    g = s(g, /ශෛ/g, "ffY");
    g = s(g, /චෛ/g, "ffp");
    g = s(g, /ජෛ/g, "ffc");
    g = s(g, /කෛ/g, "ffl");
    g = s(g, /මෛ/g, "ffu");
    g = s(g, /පෛ/g, "ffm");
    g = s(g, /දෛ/g, "ffo");
    g = s(g, /තෛ/g, "ff;");
    g = s(g, /ක්‍යා/g, "kya");

    return g;
}



// Trigger function when input changes
function startTextSf() {
    windowsKB = document.getElementById("box2").value;
    document.getElementById("box3").value = writeSinhalaWindowsKB(windowsKB);

    var g = document.getElementById("box2").value;
    document.getElementById("box4").value = toisiwara(g);
}