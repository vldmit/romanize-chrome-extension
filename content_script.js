/* 
 * Translation table is borrowed from ISO 9:1995
 */
var convertAlphabet = function(text) {
	var result = "";
	for (var i =0; i < text.length; i++) {
		var c = text[i];
		var prev = i === 0 ? null : text[i-1];
		var next = i === text.length ? null : text[i+1];
		switch (c) {
			case "А":
				result += "A";
				break;
			case "Б":
				result += "B";
				break;
			case "В":
				result += "V";
				break;
			case "Г":
				result += "G";
				break;
			case "Д":
				result += "D";
				break;
			case "Е":
				result += "E";
				break;
			case "Ё":
				result += "Ë";
				break;
			case "Ж":
				result += "Ž";
				break;
			case "З":
				result += "Z";
				break;
			case "И":
				result += "I";
				break;
			case "Й":
				result += "J";
				break;
			case "К":
				result += "K";
				break;
			case "Л":
				result += "L";
				break;
			case "М":
				result += "M";
				break;
			case "Н":
				result += "N";
				break;
			case "О":
				result += "O";
				break;
			case "П":
				result += "P";
				break;
			case "Р":
				result += "R";
				break;
			case "С":
				result += "S";
				break;
			case "Т":
				result += "T";
				break;
			case "У":
				result += "U";
				break;
			case "Ф":
				result += "F";
				break;
			case "Х":
				result += "H";
				break;
			case "Ц":
				result += "C";
				break;
			case "Ч":
				result += "Č";
				break;
			case "Ш":
				result += "Š";
				break;
			case "Щ":
				result += "Ŝ";
				break;
			case "Ъ":
				result += "ʺ";
				break;
			case "Ы":
				result += "Y";
				break;
			case "Ь":
				result += "ʹ";
				break;
			case "Э":
				result += "È";
				break;
			case "Ю":
				result += "Û";
				break;
			case "Я":
				result += "Â";
				break;
			case "а":
				result += "a";
				break;
			case "б":
				result += "b";
				break;
			case "в":
				result += "v";
				break;
			case "г":
				result += "g";
				break;
			case "д":
				result += "d";
				break;
			case "е":
				result += "e";
				break;
			case "ё":
				result += "ë";
				break;
			case "ж":
				result += "ž";
				break;
			case "з":
				result += "z";
				break;
			case "и":
				result += "i";
				break;
			case "й":
				result += "j";
				break;
			case "к":
				result += "k";
				break;
			case "л":
				result += "l";
				break;
			case "м":
				result += "m";
				break;
			case "н":
				result += "n";
				break;
			case "о":
				result += "o";
				break;
			case "п":
				result += "p";
				break;
			case "р":
				result += "r";
				break;
			case "с":
				result += "s";
				break;
			case "т":
				result += "t";
				break;
			case "у":
				result += "u";
				break;
			case "ф":
				result += "f";
				break;
			case "х":
				result += "h";
				break;
			case "ц":
				result += "c";
				break;
			case "ч":
				result += "č";
				break;
			case "ш":
				result += "š";
				break;
			case "щ":
				result += "ŝ";
				break;
			case "ъ":
				result += "ʺ";
				break;
			case "ы":
				result += "y";
				break;
			case "ь":
				result += "ʹ";
				break;
			case "э":
				result += "è";
				break;
			case "ю":
				result += "û";
				break;
			case "я":
				result += "â";
				break;
			default:
				result += c;
		}
	}
	return result;
};

var convertTextNodes = function(node, convert) {
	if (node.nodeType == 3) {
		node.nodeValue = convert(node.nodeValue);
	} else {
		for (var i = 0; i < node.childNodes.length; i++) {
			convertTextNodes(node.childNodes[i], convert);
		}
	}
};

convertTextNodes(document, convertAlphabet);