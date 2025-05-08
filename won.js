// Mappings for Sinhala Typing Conversion
var gn_c = new Array;
var gn_cUni = new Array;
var gn_v = new Array;
var gn_vUni = new Array;
var gn_vmUni = new Array;
var specialgn_c = new Array;
var specialgn_cUni = new Array;
var gn_sc = new Array;
var gn_scUni = new Array;

// Vowel mappings
gn_vUni[0] = "ඌ"; gn_v[0] = "oo"; gn_vmUni[0] = "ූ";
gn_vUni[1] = "ඕ"; gn_v[1] = "o\\)"; gn_vmUni[1] = "ෝ";
gn_vUni[2] = "ඕ"; gn_v[2] = "oe"; gn_vmUni[2] = "ෝ";
gn_vUni[3] = "ආ"; gn_v[3] = "aa"; gn_vmUni[3] = "ා";
gn_vUni[4] = "ආ"; gn_v[4] = "a\\)"; gn_vmUni[4] = "ා";
gn_vUni[5] = "ඈ"; gn_v[5] = "Aa"; gn_vmUni[5] = "ෑ";
gn_vUni[6] = "ඈ"; gn_v[6] = "A\\)"; gn_vmUni[6] = "ෑ";
gn_vUni[7] = "ඈ"; gn_v[7] = "ae"; gn_vmUni[7] = "ෑ";
gn_vUni[8] = "ඊ"; gn_v[8] = "ii"; gn_vmUni[8] = "ී";
gn_vUni[9] = "ඊ"; gn_v[9] = "i\\)"; gn_vmUni[9] = "ී";
gn_vUni[10] = "ඊ"; gn_v[10] = "ie"; gn_vmUni[10] = "ී";
gn_vUni[11] = "ඊ"; gn_v[11] = "ee"; gn_vmUni[11] = "ී";
gn_vUni[12] = "ඒ"; gn_v[12] = "ea"; gn_vmUni[12] = "ේ";
gn_vUni[13] = "ඒ"; gn_v[13] = "e\\)"; gn_vmUni[13] = "ේ";
gn_vUni[14] = "ඒ"; gn_v[14] = "ei"; gn_vmUni[14] = "ේ";
gn_vUni[15] = "ඌ"; gn_v[15] = "uu"; gn_vmUni[15] = "ූ";
gn_vUni[16] = "ඌ"; gn_v[16] = "u\\)"; gn_vmUni[16] = "ූ";
gn_vUni[17] = "ඖ"; gn_v[17] = "au"; gn_vmUni[17] = "ෞ";
gn_vUni[18] = "ඇ"; gn_v[18] = "/a"; gn_vmUni[18] = "ැ";
gn_vUni[19] = "අ"; gn_v[19] = "a"; gn_vmUni[19] = "";
gn_vUni[20] = "ඇ"; gn_v[20] = "A"; gn_vmUni[20] = "ැ";
gn_vUni[21] = "ඉ"; gn_v[21] = "i"; gn_vmUni[21] = "ි";
gn_vUni[22] = "එ"; gn_v[22] = "e"; gn_vmUni[22] = "ෙ";
gn_vUni[23] = "උ"; gn_v[23] = "u"; gn_vmUni[23] = "ු";
gn_vUni[24] = "ඔ"; gn_v[24] = "o"; gn_vmUni[24] = "ො";
gn_vUni[25] = "ඓ"; gn_v[25] = "I"; gn_vmUni[25] = "ෛ";
ngn_v = 26;

// Special character mappings
specialgn_cUni[0] = "ං"; specialgn_c[0] = /\\n/g;
specialgn_cUni[1] = "ඃ"; specialgn_c[1] = /\\h/g;
specialgn_cUni[2] = "ඞ"; specialgn_c[2] = /\\N/g;
specialgn_cUni[3] = "ඍ"; specialgn_c[3] = /\\R/g;
specialgn_cUni[4] = "ර්‍"; specialgn_c[4] = /R/g;
specialgn_cUni[5] = "ර්‍"; specialgn_c[5] = /\\r/g;

// Consonants
gn_cUni[0] = "ඬ"; gn_c[0] = "nnd";
gn_cUni[1] = "ඳ"; gn_c[1] = "nndh";
gn_cUni[2] = "ඟ"; gn_c[2] = "nng";
gn_cUni[3] = "ථ"; gn_c[3] = "Th";
gn_cUni[4] = "ධ"; gn_c[4] = "Dh";
gn_cUni[5] = "ඝ"; gn_c[5] = "gh";
gn_cUni[6] = "ඡ"; gn_c[6] = "Ch";
gn_cUni[7] = "ඵ"; gn_c[7] = "ph";
gn_cUni[8] = "භ"; gn_c[8] = "bh";
gn_cUni[9] = "ශ"; gn_c[9] = "sh";
gn_cUni[10] = "ෂ"; gn_c[10] = "Sh";
gn_cUni[11] = "ඥ"; gn_c[11] = "GN";
gn_cUni[12] = "ඤ"; gn_c[12] = "KN";
gn_cUni[13] = "ළු"; gn_c[13] = "Lu";
gn_cUni[14] = "ද"; gn_c[14] = "dh";
gn_cUni[15] = "ච"; gn_c[15] = "ch";
gn_cUni[16] = "ඛ"; gn_c[16] = "kh";
gn_cUni[17] = "ත"; gn_c[17] = "th";
gn_cUni[18] = "ට"; gn_c[18] = "t";
gn_cUni[19] = "ක"; gn_c[19] = "k";
gn_cUni[20] = "ඩ"; gn_c[20] = "d";
gn_cUni[21] = "න"; gn_c[21] = "n";
gn_cUni[22] = "ප"; gn_c[22] = "p";
gn_cUni[23] = "බ"; gn_c[23] = "b";
gn_cUni[24] = "ම"; gn_c[24] = "m";
gn_cUni[25] = "‍ය"; gn_c[25] = "\\u005Cy";
gn_cUni[26] = "‍ය"; gn_c[26] = "Y";
gn_cUni[27] = "ය"; gn_c[27] = "y";
gn_cUni[28] = "ජ"; gn_c[28] = "j";
gn_cUni[29] = "ල"; gn_c[29] = "l";
gn_cUni[30] = "ව"; gn_c[30] = "v";
gn_cUni[31] = "ව"; gn_c[31] = "w";
gn_cUni[32] = "ස"; gn_c[32] = "s";
gn_cUni[33] = "හ"; gn_c[33] = "h";
gn_cUni[34] = "ණ"; gn_c[34] = "N";
gn_cUni[35] = "ළ"; gn_c[35] = "L";
gn_cUni[36] = "ඛ"; gn_c[36] = "K";
gn_cUni[37] = "ඝ"; gn_c[37] = "G";
gn_cUni[38] = "ඨ"; gn_c[38] = "T";
gn_cUni[39] = "ඪ"; gn_c[39] = "D";
gn_cUni[40] = "ඵ"; gn_c[40] = "P";
gn_cUni[41] = "ඹ"; gn_c[41] = "B";
gn_cUni[42] = "ෆ"; gn_c[42] = "f";
gn_cUni[43] = "ඣ"; gn_c[43] = "q";
gn_cUni[44] = "ග"; gn_c[44] = "g";
gn_cUni[45] = "ර"; gn_c[45] = "r";

// Special combinations
gn_scUni[0] = "ෲ"; gn_sc[0] = "ruu";
gn_scUni[1] = "ෘ"; gn_sc[1] = "ru";


// Helper Functions
function assignChars(text, pattern, replacement) {
    return text.replace(pattern, replacement);
}

function makeReplaceExp(pattern) {
    return new RegExp(pattern, "g");
}

// ✅ Fixed doGnConvert Function (Improved Logic)
function doGnConvert(input) {
    if (!input || typeof input !== 'string') return '';

    const combinedPatterns = [];

    // Step 1: Replace special characters (\n → ං, etc.)
    for (let i = 0; i < specialgn_c.length; i++) {
        input = assignChars(input, specialgn_c[i], specialgn_cUni[i]);
    }

    // Step 2: Handle consonant + special symbol combinations (කෲ, කෘ etc.)
    for (let a = 0; a < gn_sc.length; a++) {
        for (let i = 0; i < gn_c.length; i++) {
            const pattern = gn_c[i] + gn_sc[a];
            const replacement = gn_cUni[i] + gn_scUni[a];
            input = assignChars(input, new RegExp(pattern, "g"), replacement);
        }
    }

    // Step 3: Handle Rakaransha (ක්‍ර): consonant + r + vowel
    for (let i = 0; i < gn_c.length; i++) {
        for (let c = 0; c < gn_v.length; c++) {
            const pattern = gn_c[i] + "r" + gn_v[c];
            const replacement = gn_cUni[i] + "්‍ර" + gn_vmUni[c];
            input = assignChars(input, new RegExp(pattern, "g"), replacement);
        }

        const patternR = new RegExp(gn_c[i] + "r", "g");
        const replacementR = gn_cUni[i] + "්‍ර";
        input = assignChars(input, patternR, replacementR);
    }

    // Step 4: Build all possible consonant + vowel combinations
    for (let i = 0; i < gn_c.length; i++) {
        for (let j = 0; j < gn_v.length; j++) {
            const key = gn_c[i] + gn_v[j];
            const value = gn_cUni[i] + gn_vmUni[j];
            combinedPatterns.push({ key, value });
        }
    }

    // Sort by length descending to prioritize longer matches (like "ii" before "i")
    combinedPatterns.sort((a, b) => b.key.length - a.key.length);

    // Apply substitutions in order
    for (let item of combinedPatterns) {
        const pattern = new RegExp(item.key, "g");
        input = input.replace(pattern, item.value);
    }

    // Step 5: Handle standalone consonants (add virama: ක්)
    for (let i = 0; i < gn_c.length; i++) {
        const pattern = new RegExp(gn_c[i], "g");
        input = assignChars(input, pattern, gn_cUni[i] + "්");
    }

    // Step 6: Handle standalone vowels
    for (let i = 0; i < gn_v.length; i++) {
        const pattern = new RegExp(gn_v[i], "g");
        input = assignChars(input, pattern, gn_vUni[i]);
    }

    return input;
}


// Mappings for Sinhala Typing Conversion
var gn_c = new Array;
var gn_cUni = new Array;
var gn_v = new Array;
var gn_vUni = new Array;
var gn_vmUni = new Array;
var specialgn_c = new Array;
var specialgn_cUni = new Array;
var gn_sc = new Array;
var gn_scUni = new Array;

// Vowel mappings
gn_vUni[0] = "ඌ"; gn_v[0] = "oo"; gn_vmUni[0] = "ූ";
gn_vUni[1] = "ඕ"; gn_v[1] = "o\\)"; gn_vmUni[1] = "ෝ";
gn_vUni[2] = "ඕ"; gn_v[2] = "oe"; gn_vmUni[2] = "ෝ";
gn_vUni[3] = "ආ"; gn_v[3] = "aa"; gn_vmUni[3] = "ා";
gn_vUni[4] = "ආ"; gn_v[4] = "a\\)"; gn_vmUni[4] = "ා";
gn_vUni[5] = "ඈ"; gn_v[5] = "Aa"; gn_vmUni[5] = "ෑ";
gn_vUni[6] = "ඈ"; gn_v[6] = "A\\)"; gn_vmUni[6] = "ෑ";
gn_vUni[7] = "ඈ"; gn_v[7] = "ae"; gn_vmUni[7] = "ෑ";
gn_vUni[8] = "ඊ"; gn_v[8] = "ii"; gn_vmUni[8] = "ී";
gn_vUni[9] = "ඊ"; gn_v[9] = "i\\)"; gn_vmUni[9] = "ී";
gn_vUni[10] = "ඊ"; gn_v[10] = "ie"; gn_vmUni[10] = "ී";
gn_vUni[11] = "ඊ"; gn_v[11] = "ee"; gn_vmUni[11] = "ී";
gn_vUni[12] = "ඒ"; gn_v[12] = "ea"; gn_vmUni[12] = "ේ";
gn_vUni[13] = "ඒ"; gn_v[13] = "e\\)"; gn_vmUni[13] = "ේ";
gn_vUni[14] = "ඒ"; gn_v[14] = "ei"; gn_vmUni[14] = "ේ";
gn_vUni[15] = "ඌ"; gn_v[15] = "uu"; gn_vmUni[15] = "ූ";
gn_vUni[16] = "ඌ"; gn_v[16] = "u\\)"; gn_vmUni[16] = "ූ";
gn_vUni[17] = "ඖ"; gn_v[17] = "au"; gn_vmUni[17] = "ෞ";
gn_vUni[18] = "ඇ"; gn_v[18] = "/a"; gn_vmUni[18] = "ැ";
gn_vUni[19] = "අ"; gn_v[19] = "a"; gn_vmUni[19] = "";
gn_vUni[20] = "ඇ"; gn_v[20] = "A"; gn_vmUni[20] = "ැ";
gn_vUni[21] = "ඉ"; gn_v[21] = "i"; gn_vmUni[21] = "ි";
gn_vUni[22] = "එ"; gn_v[22] = "e"; gn_vmUni[22] = "ෙ";
gn_vUni[23] = "උ"; gn_v[23] = "u"; gn_vmUni[23] = "ු";
gn_vUni[24] = "ඔ"; gn_v[24] = "o"; gn_vmUni[24] = "ො";
gn_vUni[25] = "ඓ"; gn_v[25] = "I"; gn_vmUni[25] = "ෛ";
ngn_v = 26;

// Special character mappings
specialgn_cUni[0] = "ං"; specialgn_c[0] = /\\n/g;
specialgn_cUni[1] = "ඃ"; specialgn_c[1] = /\\h/g;
specialgn_cUni[2] = "ඞ"; specialgn_c[2] = /\\N/g;
specialgn_cUni[3] = "ඍ"; specialgn_c[3] = /\\R/g;
specialgn_cUni[4] = "ර්‍"; specialgn_c[4] = /R/g;
specialgn_cUni[5] = "ර්‍"; specialgn_c[5] = /\\r/g;

// Consonants
gn_cUni[0] = "ඬ"; gn_c[0] = "nnd";
gn_cUni[1] = "ඳ"; gn_c[1] = "nndh";
gn_cUni[2] = "ඟ"; gn_c[2] = "nng";
gn_cUni[3] = "ථ"; gn_c[3] = "Th";
gn_cUni[4] = "ධ"; gn_c[4] = "Dh";
gn_cUni[5] = "ඝ"; gn_c[5] = "gh";
gn_cUni[6] = "ඡ"; gn_c[6] = "Ch";
gn_cUni[7] = "ඵ"; gn_c[7] = "ph";
gn_cUni[8] = "භ"; gn_c[8] = "bh";
gn_cUni[9] = "ශ"; gn_c[9] = "sh";
gn_cUni[10] = "ෂ"; gn_c[10] = "Sh";
gn_cUni[11] = "ඥ"; gn_c[11] = "GN";
gn_cUni[12] = "ඤ"; gn_c[12] = "KN";
gn_cUni[13] = "ළු"; gn_c[13] = "Lu";
gn_cUni[14] = "ද"; gn_c[14] = "dh";
gn_cUni[15] = "ච"; gn_c[15] = "ch";
gn_cUni[16] = "ඛ"; gn_c[16] = "kh";
gn_cUni[17] = "ත"; gn_c[17] = "th";
gn_cUni[18] = "ට"; gn_c[18] = "t";
gn_cUni[19] = "ක"; gn_c[19] = "k";
gn_cUni[20] = "ඩ"; gn_c[20] = "d";
gn_cUni[21] = "න"; gn_c[21] = "n";
gn_cUni[22] = "ප"; gn_c[22] = "p";
gn_cUni[23] = "බ"; gn_c[23] = "b";
gn_cUni[24] = "ම"; gn_c[24] = "m";
gn_cUni[25] = "‍ය"; gn_c[25] = "\\u005Cy";
gn_cUni[26] = "‍ය"; gn_c[26] = "Y";
gn_cUni[27] = "ය"; gn_c[27] = "y";
gn_cUni[28] = "ජ"; gn_c[28] = "j";
gn_cUni[29] = "ල"; gn_c[29] = "l";
gn_cUni[30] = "ව"; gn_c[30] = "v";
gn_cUni[31] = "ව"; gn_c[31] = "w";
gn_cUni[32] = "ස"; gn_c[32] = "s";
gn_cUni[33] = "හ"; gn_c[33] = "h";
gn_cUni[34] = "ණ"; gn_c[34] = "N";
gn_cUni[35] = "ළ"; gn_c[35] = "L";
gn_cUni[36] = "ඛ"; gn_c[36] = "K";
gn_cUni[37] = "ඝ"; gn_c[37] = "G";
gn_cUni[38] = "ඨ"; gn_c[38] = "T";
gn_cUni[39] = "ඪ"; gn_c[39] = "D";
gn_cUni[40] = "ඵ"; gn_c[40] = "P";
gn_cUni[41] = "ඹ"; gn_c[41] = "B";
gn_cUni[42] = "ෆ"; gn_c[42] = "f";
gn_cUni[43] = "ඣ"; gn_c[43] = "q";
gn_cUni[44] = "ග"; gn_c[44] = "g";
gn_cUni[45] = "ර"; gn_c[45] = "r";

// Special combinations
gn_scUni[0] = "ෲ"; gn_sc[0] = "ruu";
gn_scUni[1] = "ෘ"; gn_sc[1] = "ru";


// Helper Functions
function assignChars(text, pattern, replacement) {
    return text.replace(pattern, replacement);
}

function makeReplaceExp(pattern) {
    return new RegExp(pattern, "g");
}

// ✅ Fixed doGnConvert Function (Improved Logic)
function doGnConvert(input) {
    if (!input || typeof input !== 'string') return '';

    const combinedPatterns = [];

    // Step 1: Replace special characters (\n → ං, etc.)
    for (let i = 0; i < specialgn_c.length; i++) {
        input = assignChars(input, specialgn_c[i], specialgn_cUni[i]);
    }

    // Step 2: Handle consonant + special symbol combinations (කෲ, කෘ etc.)
    for (let a = 0; a < gn_sc.length; a++) {
        for (let i = 0; i < gn_c.length; i++) {
            const pattern = gn_c[i] + gn_sc[a];
            const replacement = gn_cUni[i] + gn_scUni[a];
            input = assignChars(input, new RegExp(pattern, "g"), replacement);
        }
    }

    // Step 3: Handle Rakaransha (ක්‍ර): consonant + r + vowel
    for (let i = 0; i < gn_c.length; i++) {
        for (let c = 0; c < gn_v.length; c++) {
            const pattern = gn_c[i] + "r" + gn_v[c];
            const replacement = gn_cUni[i] + "්‍ර" + gn_vmUni[c];
            input = assignChars(input, new RegExp(pattern, "g"), replacement);
        }

        const patternR = new RegExp(gn_c[i] + "r", "g");
        const replacementR = gn_cUni[i] + "්‍ර";
        input = assignChars(input, patternR, replacementR);
    }

    // Step 4: Build all possible consonant + vowel combinations
    for (let i = 0; i < gn_c.length; i++) {
        for (let j = 0; j < gn_v.length; j++) {
            const key = gn_c[i] + gn_v[j];
            const value = gn_cUni[i] + gn_vmUni[j];
            combinedPatterns.push({ key, value });
        }
    }

    // Sort by length descending to prioritize longer matches (like "ii" before "i")
    combinedPatterns.sort((a, b) => b.key.length - a.key.length);

    // Apply substitutions in order
    for (let item of combinedPatterns) {
        const pattern = new RegExp(item.key, "g");
        input = input.replace(pattern, item.value);
    }

    // Step 5: Handle standalone consonants (add virama: ක්)
    for (let i = 0; i < gn_c.length; i++) {
        const pattern = new RegExp(gn_c[i], "g");
        input = assignChars(input, pattern, gn_cUni[i] + "්");
    }

    // Step 6: Handle standalone vowels
    for (let i = 0; i < gn_v.length; i++) {
        const pattern = new RegExp(gn_v[i], "g");
        input = assignChars(input, pattern, gn_vUni[i]);
    }

    return input;
}



