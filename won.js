// ================
// Helper Functions
// ================

function s(x, y, z) {
    return assignChars(x, y, z);
}

function assignChars(c, a, b) {
    return c.replace(a, b);
}

function makeReplaceExp(pattern) {
    return new RegExp(pattern, "g");
}

// =============================
// Unicode Conversion Function
// =============================
function doGnConvert(input) {
    if (!input || typeof input !== 'string') return '';

    const combinedPatterns = [];

    // Replace special characters like \n → ං
    for (let i = 0; i < specialgn_c.length; i++) {
        input = assignChars(input, specialgn_c[i], specialgn_cUni[i]);
    }

    // Handle consonant + special symbol combinations
    for (let a = 0; a < gn_sc.length; a++) {
        for (let i = 0; i < gn_c.length; i++) {
            const pattern = gn_c[i] + gn_sc[a];
            const replacement = gn_cUni[i] + gn_scUni[a];
            input = assignChars(input, new RegExp(pattern, "g"), replacement);
        }
    }

    // Handle Rakaransha (ක්‍ර): consonant + r + vowel
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

    // Build all possible consonant + vowel combinations
    for (let i = 0; i < gn_c.length; i++) {
        for (let j = 0; j < gn_v.length; j++) {
            const key = gn_c[i] + gn_v[j];
            const value = gn_cUni[i] + gn_vmUni[j];
            combinedPatterns.push({ key, value });
        }
    }

    // Sort by length descending
    combinedPatterns.sort((a, b) => b.key.length - a.key.length);

    // Apply substitutions in correct order
    for (let item of combinedPatterns) {
        const pattern = new RegExp(item.key, "g");
        input = input.replace(pattern, item.value);
    }

    // Handle standalone consonants (add virama: ක්)
    for (let i = 0; i < gn_c.length; i++) {
        const pattern = new RegExp(gn_c[i], "g");
        input = assignChars(input, pattern, gn_cUni[i] + "්");
    }

    // Handle standalone vowels
    for (let i = 0; i < gn_v.length; i++) {
        const pattern = new RegExp(`\\b${gn_v[i]}\\b`, "g");
        input = assignChars(input, pattern, gn_vUni[i]);
    }

    return input;
}

// ===================================
// Legacy Font Conversion Function
// (Used with fonts like Isiwara)
// ===================================
function writeSinhalaWindowsKB(g) {
    g = s(g, /,/g, "￦"),
        g = s(g, /\./g, "¡"),
        g = s(g, /\(/g, "￫"),
        g = s(g, /\)/g, "￩"),
        g = s(g, /%/g, "ￕ"),
        g = s(g, /\//g, "$"),
        g = s(g, /–/g, "ￔ"),
        g = s(g, /\?/g, "ￓ"),
        g = s(g, /!/g, "ￒ"),
        g = s(g, /\=/g, "ￏ"),
        g = s(g, /\'/g, "ￎ"),
        g = s(g, /\+/g, "ￍ"),
        g = s(g, /\:/g, "ￌ"),
        g = s(g, /\÷/g, "ￋ"),
        g = s(g, /\;/g, "ﾶ"),
        g = s(g, /ත්‍රෛ/g, "ff;%"),
        g = s(g, /ශෛ/g, "ffY"),
        g = s(g, /චෛ/g, "ffp"),
        g = s(g, /ජෛ/g, "ffc"),
        g = s(g, /කෛ/g, "ffl"),
        g = s(g, /මෛ/g, "ffu"),
        g = s(g, /පෛ/g, "ffm"),
        g = s(g, /දෛ/g, "ffo"),
        g = s(g, /තෛ/g, "ff;"),
        g = s(g, /නෛ/g, "ffk"),
        g = s(g, /ධෛ/g, "ffO"),
        g = s(g, /වෛ/g, "ffj"),
        g = s(g, /ප්‍රෞ/g, "fm%!"),
        g = s(g, /ෂ්‍යෝ/g, "fIHda"),
        g = s(g, /ඡ්‍යෝ/g, "fPHda"),
        g = s(g, /ඪ්‍යෝ/g, "fVHda"),
        g = s(g, /ඝ්‍යෝ/g, "f>Hda"),
        g = s(g, /ඛ්‍යෝ/g, "fLHda"),
        g = s(g, /ළ්‍යෝ/g, "f<Hda"),
        g = s(g, /ඵ්‍යෝ/g, "fMHda"),
        g = s(g, /ඨ්‍යෝ/g, "fGHda"),
        g = s(g, /ශ්‍යෝ/g, "fYHda"),
        g = s(g, /ක්‍ෂ්‍යෝ/g, "fÌHda"),
        g = s(g, /බ්‍යෝ/g, "fnHda"),
        g = s(g, /ච්‍යෝ/g, "fpHda"),
        g = s(g, /ඩ්‍යෝ/g, "fâHda"),
        g = s(g, /ෆ්‍යෝ/g, "f*Hda"),
        g = s(g, /ග්‍යෝ/g, "f.Hda"),
        g = s(g, /ජ්‍යෝ/g, "fcHda"),
        g = s(g, /ක්‍යෝ/g, "flHda"),
        g = s(g, /ල්‍යෝ/g, "f,Hda"),
        g = s(g, /ම්‍යෝ/g, "fuHda"),
        g = s(g, /න්‍යෝ/g, "fkHda"),
        g = s(g, /ප්‍යෝ/g, "fmHda"),
        g = s(g, /ද්‍යෝ/g, "foHda"),
        g = s(g, /ස්‍යෝ/g, "fiHda"),
        g = s(g, /ට්‍යෝ/g, "fgHda"),
        g = s(g, /ව්‍යෝ/g, "fjHda"),
        g = s(g, /ත්‍යෝ/g, "f;Hda"),
        g = s(g, /භ්‍යෝ/g, "fNHda"),
        g = s(g, /ධ්‍යෝ/g, "fOHda"),
        g = s(g, /ථ්‍යෝ/g, "f:Hda"),
        g = s(g, /ෂ්‍යො/g, "fIHd"),
        g = s(g, /ශ්‍යො/g, "fYHd"),
        g = s(g, /ඛ්‍යො/g, "fLHd"),
        g = s(g, /ක්‍ෂ්‍යො/g, "fÌHd"),
        g = s(g, /බ්‍යො/g, "fnHd"),
        g = s(g, /ව්‍යො/g, "fjHd"),
        g = s(g, /ඩ්‍යො/g, "fvHd"),
        g = s(g, /ෆ්‍යො/g, "f*Hd"),
        g = s(g, /ග්‍යො/g, "f.Hd"),
        g = s(g, /ජ්‍යො/g, "fcHd"),
        g = s(g, /ක්‍යො/g, "flHd"),
        g = s(g, /ම්‍යො/g, "fuHd"),
        g = s(g, /ප්‍යො/g, "fmHd"),
        g = s(g, /ද්‍යො/g, "foHd"),
        g = s(g, /ස්‍යො/g, "fiHd"),
        g = s(g, /ට්‍යො/g, "fgHd"),
        g = s(g, /ව්‍යො/g, "fjHd"),
        g = s(g, /ත්‍යො/g, "f;Hd"),
        g = s(g, /භ්‍යො/g, "fNHd"),
        g = s(g, /ධ්‍යො/g, "fOHd"),
        g = s(g, /ථ්‍යො/g, "f:Hd"),
        g = s(g, /ෂ්‍යෙ/g, "fIH"),
        g = s(g, /ඡ්‍යෙ/g, "fPH"),
        g = s(g, /ළ්‍යෙ/g, "f<H"),
        g = s(g, /ණ්‍යෙ/g, "fKH"),
        g = s(g, /ච්‍යෙ/g, "fpH"),
        g = s(g, /ල්‍යෙ/g, "f,H"),
        g = s(g, /න්‍යෙ/g, "fkH"),
        g = s(g, /ශ්‍යෙ/g, "fYH"),
        g = s(g, /ඛ්‍යෙ/g, "fLH"),
        g = s(g, /ක්‍ෂ්යෙ/g, "fÌH"),
        g = s(g, /බ්‍යෙ/g, "fnH"),
        g = s(g, /ඩ්‍යෙ/g, "fvH"),
        g = s(g, /ෆ්‍යෙ/g, "f*H"),
        g = s(g, /ග්‍යෙ/g, "f.H"),
        g = s(g, /ජ්‍යෙ/g, "fcH"),
        g = s(g, /ක්‍යෙ/g, "flH"),
        g = s(g, /ම්‍යෙ/g, "fuH"),
        g = s(g, /ප්‍යෙ/g, "fmH"),
        g = s(g, /ද්‍යෙ/g, "foH"),
        g = s(g, /ස්‍යෙ/g, "fiH"),
        g = s(g, /ට්‍යෙ/g, "fgH"),
        g = s(g, /ව්‍යෙ/g, "fjH"),
        g = s(g, /ත්‍යෙ/g, "f;H"),
        g = s(g, /භ්‍යෙ/g, "fNH"),
        g = s(g, /ධ්‍යෙ/g, "fOH"),
        g = s(g, /ථ්‍යෙ/g, "f:H"),
        g = s(g, /ෂ්‍රෝ/g, "fI%da"),
        g = s(g, /ඝ්‍රෝ/g, "f>%da"),
        g = s(g, /ශ්‍රෝ/g, "fY%da"),
        g = s(g, /ක්‍ෂ්‍රෝ/g, "fÌ%da"),
        g = s(g, /බ්‍රෝ/g, "fn%da"),
        g = s(g, /ඩ්‍රෝ/g, "fv%da"),
        g = s(g, /ෆ්‍රෝ/g, "f*%da"),
        g = s(g, /ග්‍රෝ/g, "f.%da"),
        g = s(g, /ක්‍රෝ/g, "fl%da"),
        g = s(g, /ප්‍රෝ/g, "fm%da"),
        g = s(g, /ද්‍රෝ/g, "føda"),
        g = s(g, /ස්‍රෝ/g, "fi%da"),
        g = s(g, /ට්‍රෝ/g, "fg%da"),
        g = s(g, /ත්‍රෝ/g, "f;%da"),
        g = s(g, /ශ්‍රො/g, "fY%d"),
        g = s(g, /ඩ්‍රො/g, "fv%d"),
        g = s(g, /ෆ්‍රො/g, "f*%d"),
        g = s(g, /ග්‍රො/g, "f.%d"),
        g = s(g, /ක්‍රො/g, "fl%d"),
        g = s(g, /ප්‍රො/g, "fm%d"),
        g = s(g, /ද්‍රො/g, "fød"),
        g = s(g, /ස්‍රො/g, "fi%d"),
        g = s(g, /ට්‍රො/g, "fg%d"),
        g = s(g, /ත්‍රො/g, "f;%d"),
        g = s(g, /ශ්‍රේ/g, "fYa%"),
        g = s(g, /බ්‍රේ/g, "fí%"),
        g = s(g, /ඩ්‍රේ/g, "fâ%"),
        g = s(g, /ෆ්‍රේ/g, "f*a%"),
        g = s(g, /ග්‍රේ/g, "f.a%"),
        g = s(g, /ක්‍රේ/g, "fla%"),
        g = s(g, /ප්‍රේ/g, "fma%"),
        g = s(g, /ද්‍රේ/g, "føa"),
        g = s(g, /ස්‍රේ/g, "fia%"),
        g = s(g, /ත්‍රේ/g, "f;a%"),
        g = s(g, /ධ්‍රේ/g, "fè%"),
        g = s(g, /ෂ්‍රෙ/g, "fI%"),
        g = s(g, /ශ්‍රෙ/g, "fY%"),
        g = s(g, /බ්‍රෙ/g, "fn%"),
        g = s(g, /ෆ්‍රෙ/g, "f*%"),
        g = s(g, /ග්‍රෙ/g, "f.%"),
        g = s(g, /ක්‍රෙ/g, "fl%"),
        g = s(g, /ප්‍රෙ/g, "fm%"),
        g = s(g, /ද්‍රෙ/g, "fø"),
        g = s(g, /ස්‍රෙ/g, "fi%"),
        g = s(g, /ත්‍රෙ/g, "f;%"),
        g = s(g, /භ්‍රෙ/g, "fN%"),
        g = s(g, /ධ්‍රෙ/g, "fO%"),
        g = s(g, /්‍ය/g, "H"),
        g = s(g, /්‍ර/g, "%"),
        g = s(g, /ෂෞ/g, "fI!"),
        g = s(g, /ඡෞ/g, "fP!"),
        g = s(g, /ශෞ/g, "fY!"),
        g = s(g, /බෞ/g, "fn!"),
        g = s(g, /චෞ/g, "fp!"),
        g = s(g, /ඩෞ/g, "fv!"),
        g = s(g, /ෆෞ/g, "f*!"),
        g = s(g, /ගෞ/g, "f.!"),
        g = s(g, /ජෞ/g, "fc!"),
        g = s(g, /කෞ/g, "fl!"),
        g = s(g, /ලෞ/g, "f,!"),
        g = s(g, /මෞ/g, "fu!"),
        g = s(g, /නෞ/g, "fk!"),
        g = s(g, /පෞ/g, "fm!"),
        g = s(g, /දෞ/g, "fo!"),
        g = s(g, /රෞ/g, "fr!"),
        g = s(g, /සෞ/g, "fi!"),
        g = s(g, /ටෞ/g, "fg!"),
        g = s(g, /තෞ/g, "f;!"),
        g = s(g, /භෞ/g, "fN!"),
        g = s(g, /ඤෞ/g, "f[!"),
        g = s(g, /ෂෝ/g, "fIda"),
        g = s(g, /ඹෝ/g, "fUda"),
        g = s(g, /ඡෝ/g, "fPda"),
        g = s(g, /ඪෝ/g, "fVda"),
        g = s(g, /ඝෝ/g, "f>da"),
        g = s(g, /ඛෝ/g, "fLda"),
        g = s(g, /ළෝ/g, "f<da"),
        g = s(g, /ඟෝ/g, "fÕda"),
        g = s(g, /ණෝ/g, "fKda"),
        g = s(g, /ඵෝ/g, "fMda"),
        g = s(g, /ඨෝ/g, "fGda"),
        g = s(g, /ඬෝ/g, "fËda"),
        g = s(g, /ශෝ/g, "fYda"),
        g = s(g, /ඥෝ/g, "f{da"),
        g = s(g, /ඳෝ/g, "f|da"),
        g = s(g, /ක්‍ෂෝ/g, "fÌda"),
        g = s(g, /බෝ/g, "fnda"),
        g = s(g, /චෝ/g, "fpda"),
        g = s(g, /ඩෝ/g, "fvda"),
        g = s(g, /ෆෝ/g, "f*da"),
        g = s(g, /ගෝ/g, "f.da"),
        g = s(g, /හෝ/g, "fyda"),
        g = s(g, /ජෝ/g, "fcda"),
        g = s(g, /කෝ/g, "flda"),
        g = s(g, /ලෝ/g, "f,da"),
        g = s(g, /මෝ/g, "fuda"),
        g = s(g, /නෝ/g, "fkda"),
        g = s(g, /පෝ/g, "fmda"),
        g = s(g, /දෝ/g, "foda"),
        g = s(g, /රෝ/g, "frda"),
        g = s(g, /සෝ/g, "fida"),
        g = s(g, /ටෝ/g, "fgda"),
        g = s(g, /වෝ/g, "fjda"),
        g = s(g, /තෝ/g, "f;da"),
        g = s(g, /භෝ/g, "fNda"),
        g = s(g, /යෝ/g, "fhda"),
        g = s(g, /ඤෝ/g, "f[da"),
        g = s(g, /ධෝ/g, "fOda"),
        g = s(g, /ථෝ/g, "f:da"),
        g = s(g, /ෂො/g, "fId"),
        g = s(g, /ඹො/g, "fUd"),
        g = s(g, /ඡො/g, "fPd"),
        g = s(g, /ඪො/g, "fVd"),
        g = s(g, /ඝො/g, "f>d"),
        g = s(g, /ඛො/g, "fLd"),
        g = s(g, /ළො/g, "f<d"),
        g = s(g, /ඟො/g, "fÕd"),
        g = s(g, /ණො/g, "fKd"),
        g = s(g, /ඵො/g, "fMd"),
        g = s(g, /ඨො/g, "fGd"),
        g = s(g, /ඬො/g, "fËd"),
        g = s(g, /ශො/g, "fYd"),
        g = s(g, /ඥො/g, "f{d"),
        g = s(g, /ඳො/g, "f|d"),
        g = s(g, /ක්‍ෂො/g, "fÌd"),
        g = s(g, /බො/g, "fnd"),
        g = s(g, /චො/g, "fpd"),
        g = s(g, /ඩො/g, "fvd"),
        g = s(g, /ෆො/g, "f*d"),
        g = s(g, /ගො/g, "f.d"),
        g = s(g, /හො/g, "fyd"),
        g = s(g, /ජො/g, "fcd"),
        g = s(g, /කො/g, "fld"),
        g = s(g, /ලො/g, "f,d"),
        g = s(g, /මො/g, "fud"),
        g = s(g, /නො/g, "fkd"),
        g = s(g, /පො/g, "fmd"),
        g = s(g, /දො/g, "fod"),
        g = s(g, /රො/g, "frd"),
        g = s(g, /සො/g, "fid"),
        g = s(g, /ටො/g, "fgd"),
        g = s(g, /වො/g, "fjd"),
        g = s(g, /තො/g, "f;d"),
        g = s(g, /භො/g, "fNd"),
        g = s(g, /යො/g, "fhd"),
        g = s(g, /ඤො/g, "f[d"),
        g = s(g, /ධො/g, "fOd"),
        g = s(g, /ථො/g, "f:d"),
        g = s(g, /ෂේ/g, "fIa"),
        g = s(g, /ඹේ/g, "fò"),
        g = s(g, /ඡේ/g, "fþ"),
        g = s(g, /ඪේ/g, "fa"),
        g = s(g, /ඝේ/g, "f>a"),
        g = s(g, /ඛේ/g, "fÄ"),
        g = s(g, /ළේ/g, "f<a"),
        g = s(g, /ඟේ/g, "fÕa"),
        g = s(g, /ණේ/g, "fKa"),
        g = s(g, /ඵේ/g, "fMa"),
        g = s(g, /ඨේ/g, "fGa"),
        g = s(g, /ඬේ/g, "få"),
        g = s(g, /ශේ/g, "fYa"),
        g = s(g, /ඥේ/g, "f{a"),
        g = s(g, /ඳේ/g, "f|a"),
        g = s(g, /ක්‍ෂේ/g, "fÌa"),
        g = s(g, /බේ/g, "fí"),
        g = s(g, /චේ/g, "fÉ"),
        g = s(g, /ඩේ/g, "fâ"),
        g = s(g, /ෆේ/g, "f*"),
        g = s(g, /ගේ/g, "f.a"),
        g = s(g, /හේ/g, "fya"),
        g = s(g, /පේ/g, "fma"),
        g = s(g, /කේ/g, "fla"),
        g = s(g, /ලේ/g, "f,a"),
        g = s(g, /මේ/g, "fï"),
        g = s(g, /නේ/g, "fka"),
        g = s(g, /ජේ/g, "f–"),
        g = s(g, /දේ/g, "foa"),
        g = s(g, /රේ/g, "f¾"),
        g = s(g, /සේ/g, "fia"),
        g = s(g, /ටේ/g, "fÜ"),
        g = s(g, /වේ/g, "fõ"),
        g = s(g, /තේ/g, "f;a"),
        g = s(g, /භේ/g, "fNa"),
        g = s(g, /යේ/g, "fha"),
        g = s(g, /ඤේ/g, "f[a"),
        g = s(g, /ධේ/g, "fè"),
        g = s(g, /ථේ/g, "f:a"),
        g = s(g, /ෂෙ/g, "fI"),
        g = s(g, /ඹෙ/g, "fU"),
        g = s(g, /ඓ/g, "ft"),
        g = s(g, /ඡෙ/g, "fP"),
        g = s(g, /ඪෙ/g, "fV"),
        g = s(g, /ඝෙ/g, "f>"),
        g = s(g, /ඛෙ/g, "fn"),
        g = s(g, /ළෙ/g, "f<"),
        g = s(g, /ඟෙ/g, "fÕ"),
        g = s(g, /ණෙ/g, "fK"),
        g = s(g, /ඵෙ/g, "fM"),
        g = s(g, /ඨෙ/g, "fG"),
        g = s(g, /ඬෙ/g, "fË"),
        g = s(g, /ශෙ/g, "fY"),
        g = s(g, /ඥෙ/g, "f{"),
        g = s(g, /ඳෙ/g, "fË"),
        g = s(g, /ක්‍ෂෙ/g, "fÌ"),
        g = s(g, /බෙ/g, "fn"),
        g = s(g, /චෙ/g, "fp"),
        g = s(g, /ඩෙ/g, "fv"),
        g = s(g, /ෆෙ/g, "f*"),
        g = s(g, /ගෙ/g, "f."),
        g = s(g, /හෙ/g, "fy"),
        g = s(g, /ජෙ/g, "fc"),
        g = s(g, /කෙ/g, "fl"),
        g = s(g, /ලෙ/g, "f,"),
        g = s(g, /මෙ/g, "fu"),
        g = s(g, /නෙ/g, "fk"),
        g = s(g, /පෙ/g, "fm"),
        g = s(g, /දෙ/g, "fo"),
        g = s(g, /රෙ/g, "fr"),
        g = s(g, /සෙ/g, "fi"),
        g = s(g, /ටෙ/g, "fg"),
        g = s(g, /වෙ/g, "fj"),
        g = s(g, /තෙ/g, "f;"),
        g = s(g, /භෙ/g, "fN"),
        g = s(g, /යෙ/g, "fh"),
        g = s(g, /ඤෙ/g, "f["),
        g = s(g, /ධෙ/g, "fO"),
        g = s(g, /ථෙ/g, "f:"),
        g = s(g, /තු/g, ";="),
        g = s(g, /ගු/g, ".="),
        g = s(g, /කු/g, "l="),
        g = s(g, /තූ/g, ";+"),
        g = s(g, /ගූ/g, ".+"),
        g = s(g, /කූ/g, "l+"),
        g = s(g, /රු/g, "re"),
        g = s(g, /රූ/g, "rE"),
        g = s(g, /ආ/g, "wd"),
        g = s(g, /ඇ/g, "we"),
        g = s(g, /ඈ/g, "wE"),
        g = s(g, /ඌ/g, "W!"),
        g = s(g, /ඖ/g, "T!"),
        g = s(g, /ඒ/g, "ta"),
        g = s(g, /ඕ/g, "´"),
        g = s(g, /ඳි/g, "¢"),
        g = s(g, /ඳී/g, "£"),
        g = s(g, /දූ/g, "¥"),
        g = s(g, /දී/g, "§"),
        g = s(g, /ලූ/g, "Æ"),
        g = s(g, /ර්‍ය/g, "©"),
        g = s(g, /ඳූ/g, "ª"),
        g = s(g, /ර්/g, "¾"),
        g = s(g, /ඨි/g, "À"),
        g = s(g, /ඨී/g, "Á"),
        g = s(g, /ඡී/g, "Â"),
        g = s(g, /ඛ්/g, "Ä"),
        g = s(g, /ඛි/g, "Å"),
        g = s(g, /ලු/g, "¨"),
        g = s(g, /ඛී/g, "Ç"),
        g = s(g, /දි/g, "È"),
        g = s(g, /ච්/g, "É"),
        g = s(g, /ජ්/g, "Ê"),
        g = s(g, /රී/g, "Í"),
        g = s(g, /ඪී/g, "Î"),
        g = s(g, /ඪී/g, "Ð,"),
        g = s(g, /චි/g, "Ñ"),
        g = s(g, /ථී/g, "Ò"),
        g = s(g, /ථී/g, "Ó"),
        g = s(g, /ජී/g, "Ô"),
        g = s(g, /චී/g, "Ö"),
        g = s(g, /ඞ්/g, "Ù"),
        g = s(g, /ඵී/g, "Ú"),
        g = s(g, /ට්/g, "Ü"),
        g = s(g, /ඵි/g, "Ý"),
        g = s(g, /රි/g, "ß"),
        g = s(g, /ටී/g, "à"),
        g = s(g, /ටි/g, "á"),
        g = s(g, /ඩ්/g, "â"),
        g = s(g, /ඩී/g, "ã"),
        g = s(g, /ඩි/g, "ä"),
        g = s(g, /ඬ්/g, "å"),
        g = s(g, /ඬි/g, "ç"),
        g = s(g, /ධ්/g, "è"),
        g = s(g, /ඬී/g, "é"),
        g = s(g, /ධි/g, "ê"),
        g = s(g, /ධී/g, "ë"),
        g = s(g, /බි/g, "ì"),
        g = s(g, /බ්/g, "í"),
        g = s(g, /බී/g, "î"),
        g = s(g, /ම්/g, "ï"),
        g = s(g, /ජි/g, "ð"),
        g = s(g, /මි/g, "ñ"),
        g = s(g, /ඹ්/g, "ò"),
        g = s(g, /මී/g, "ó"),
        g = s(g, /ඹි/g, "ô"),
        g = s(g, /ව්/g, "õ"),
        g = s(g, /ඹී/g, "ö"),
        g = s(g, /ඳු/g, "÷"),
        g = s(g, /ද්‍ර/g, "ø"),
        g = s(g, /වී/g, "ù"),
        g = s(g, /වි/g, "ú"),
        g = s(g, /ඞ්/g, "û"),
        g = s(g, /ඞී/g, "ü"),
        g = s(g, /ඡි/g, "ý"),
        g = s(g, /ඡ්/g, "þ"),
        g = s(g, /දු/g, "ÿ"),
        g = s(g, /ජ්/g, "–"),
        g = s(g, /ර්‍ණ/g, "“"),
        g = s(g, /ණී/g, "KS"),
        g = s(g, /ජී/g, "„"),
        g = s(g, /ඡි/g, "‰"),
        g = s(g, /ඩි/g, ""),
        g = s(g, /ඤු/g, "™"),
        g = s(g, /ග/g, "."),
        g = s(g, /ළු/g, "¿"),
        g = s(g, /ෂ/g, "I"),
        g = s(g, /ං/g, "x"),
        g = s(g, /ඃ/g, "#"),
        g = s(g, /ඹ/g, "U"),
        g = s(g, /ඡ/g, "P"),
        g = s(g, /ඪ/g, "V"),
        g = s(g, /ඝ/g, ">"),
        g = s(g, /ඊ/g, "B"),
        g = s(g, /ඣ/g, "CO"),
        g = s(g, /ඛ/g, "L"),
        g = s(g, /ළ/g, "<"),
        g = s(g, /ඟ/g, "Õ"),
        g = s(g, /ණ/g, "K"),
        g = s(g, /ඵ/g, "M"),
        g = s(g, /ඨ/g, "G"),
        g = s(g, /ඃ/g, "#"),
        g = s(g, /\"/g, ","),
        g = s(g, /\//g, "$"),
        g = s(g, /\)/g, "&"),
        g = s(g, /:/g, "("),
        g = s(g, /ෆ/g, "*"),
        g = s(g, /ල/g, ","),
        g = s(g, /-/g, "-"),
        g = s(g, /රැ/g, "/"),
        g = s(g, /ථ/g, ":"),
        g = s(g, /ත/g, ";"),
        g = s(g, /ළ/g, "<"),
        g = s(g, /ඝ/g, ">"),
        g = s(g, /රෑ/g, "?"),
        g = s(g, /ඊ/g, "B"),
        g = s(g, /ක‍/g, "C"),
        g = s(g, /‍ෘ/g, "D"),
        g = s(g, /ෑ/g, "E"),
        g = s(g, /ත‍/g, "F"),
        g = s(g, /ඨ/g, "G"),
        g = s(g, /්‍ය/g, "H"),
        g = s(g, /ෂ/g, "I"),
        g = s(g, /න‍/g, "J"),
        g = s(g, /ණ/g, "K"),
        g = s(g, /ඛ/g, "L"),
        g = s(g, /ඵ/g, "M"),
        g = s(g, /භ/g, "N"),
        g = s(g, /ධ/g, "O"),
        g = s(g, /ඡ/g, "P"),
        g = s(g, /ඍ/g, "R"),
        g = s(g, /ඔ/g, "T"),
        g = s(g, /ඹ/g, "U"),
        g = s(g, /ඪ/g, "V"),
        g = s(g, /උ/g, "W"),
        g = s(g, /ශ/g, "Y"),
        g = s(g, /ඤ/g, "["),
        g = s(g, /ඉ/g, "b"),
        g = s(g, /ජ/g, "c"),
        g = s(g, /ට/g, "g"),
        g = s(g, /ය/g, "h"),
        g = s(g, /ස/g, "i"),
        g = s(g, /ව/g, "j"),
        g = s(g, /න/g, "k"),
        g = s(g, /ක/g, "l"),
        g = s(g, /ප/g, "m"),
        g = s(g, /බ/g, "n"),
        g = s(g, /ද/g, "o"),
        g = s(g, /ච/g, "p"),
        g = s(g, /ර/g, "r"),
        g = s(g, /එ/g, "t"),
        g = s(g, /ම/g, "u"),
        g = s(g, /ඩ/g, "v"),
        g = s(g, /අ/g, "w"),
        g = s(g, /හ/g, "y"),
        g = s(g, /ඥ/g, "{"),
        g = s(g, /ඳ/g, "|"),
        g = s(g, /ක්‍ෂ/g, "Ì"),
        g = s(g, /ැ/g, "e"),
        g = s(g, /ෑ/g, "E"),
        g = s(g, /ෙ/g, "f"),
        g = s(g, /ු/g, "q"),
        g = s(g, /ි/g, "s"),
        g = s(g, /ූ/g, "Q"),
        g = s(g, /ී/g, "S"),
        g = s(g, /ෘ/g, "D"),
        g = s(g, /ෲ/g, "DD"),
        g = s(g, /ෟ/g, "!"),
        g = s(g, /ා/g, "d"),
        g = s(g, /්/g, "a"),
        g = s(g, /￦/g, '"'),
        g = s(g, /￫/g, "^"),
        g = s(g, /￩/g, "&"),
        g = s(g, /ￔ/g, "‐`"),
        g = s(g, /ￓ/g, "@"),
        g = s(g, /ￒ/g, "æ"),
        g = s(g, /ￏ/g, "}"),
        g = s(g, /ￎ/g, "~"),
        g = s(g, /\ￍ/g, "¤"),
        g = s(g, /\ￌ/g, "•"),
        g = s(g, /\ￊ/g, "›"),
        g = s(g, /\ﾶ/g, "∙"),
        g = s(g, /ￕ/g, "]")

    return g;
}

// ==============
// Event Handlers
// ==============
function handleTyping(value) {
    document.getElementById("box3").value = doGnConvert(value);
    document.getElementById("box4").value = writeSinhalaWindowsKB(value);
}

function toggleOutput() {
    const useFont = document.getElementById("mode-switch").checked;

    if (useFont) {
        document.getElementById("box3").style.display = "none";
        document.getElementById("box4").style.display = "block";
    } else {
        document.getElementById("box3").style.display = "block";
        document.getElementById("box4").style.display = "none";
    }
}

function copyText() {
    const useFont = document.getElementById("mode-switch").checked;
    const box = useFont ? document.getElementById("box4") : document.getElementById("box3");
    box.select();
    document.execCommand("copy");
    alert("Copied!");
}

function clearText() {
    document.getElementById("box2").value = '';
    document.getElementById("box3").value = '';
    document.getElementById("box4").value = '';
}

// ============
// Mappings
// ============
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


// ==========
// On Load
// ==========
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box2");
    box.addEventListener("input", () => handleTyping(box.value));
    handleTyping(box.value); // Initial load
});
