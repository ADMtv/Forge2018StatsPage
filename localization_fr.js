var loc_selected_language = "English";
var loc_strings = {
    "English": {
        "author": "English by <a href='https://klei.com/'>Klei</a>",
        "locale": "en",
        "progress_communityunlocks": "Community Unlocks",
        "progress_bar_title": "Progress: %1%",
        "progress_locked": "Locked",
        "progress_beetletaur": "Infernal Swineclops",
        "progress_boarrior": "Grand Forge Boarrior",
        "progress_book_elemental": "Tome of Beckoning & Spiral Spear",
        "progress_lavaarena_armor_hpextraheavy": "Steadfast Grand Armor",
        "progress_lavaarena_armor_hpdamager": "Jagged Grand Armor",
        "progress_lavaarena_armor_hprecharger": "Silken Grand Armor",
        "progress_lavaarena_armor_hppetmastery": "Whispering Grand Armor",
        "progress_lavaarena_heavyblade": "Blacksmith's Edge",
        "progress_lavaarena_firebomb": "Crystalized Magma Chamber",
        "progress_rhinodrill": "Rhinocebros",
        "progress_trails": "Boarilla",
        "progress_lastsync": "Last updated %1",
        "progress_lastsync_title": "Last updated on %1",
        "leaderboards-title": "Top Teams",
        "leaderboards-loading": "Loading top teams..",
        "leaderboards-noresults": "No results returned.. Try again later",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Time",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Deaths",
        "leaderboards-showmore": "Show More",
        "leaderboards-showless": "Show Fewer",
        "date": {
            "parentLocale": 'en',
            "months": 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            "longDateFormat": {
                LLL: 'MMMM D, YYYY h:mm A',
            },
            "relativeTime": {
                "future": "in %s",
                "past": "%s ago",
                "s": 'a few seconds',
                "ss": '%d seconds',
                "m": "a minute",
                "mm": "%d minutes",
                "h": "an hour",
                "hh": "%d hours",
                "d": "a day",
                "dd": "%d days",
                "M": "a month",
                "MM": "%d months",
                "y": "a year",
                "yy": "%d years"
            },
            "ordinal": function(number) {
                var b = number % 10,
                    output = (~~(number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
                return number + "<span class='ordinal'>" + output + "</span>";
            }
        },
        "localization-credits": "Localization Credits",
        "localization-help": "Want to help?",
        "localization-helptext": "Want to add your own language? Submit a pull request on %1."
    },
    "PortuguÃªs": {
        "author": "PortuguÃªs pela <a href='https://klei.com/'>Klei</a>",
        "locale": "pt-PT",
        "progress_communityunlocks": "Desbloqueios da Comunidade",
        "progress_bar_title": "Progresso: %1%",
        "progress_locked": "Bloqueado",
        "progress_beetletaur": "SuÃ­noclope Infernal",
        "progress_boarrior": "Grande Javaleiro da Forja",
        "progress_book_elemental": "Tomo de Encorajamento e LanÃ§a Espiral",
        "progress_lavaarena_armor_hpextraheavy": "Grande Armadura InabalÃ¡vel",
        "progress_lavaarena_armor_hpdamager": "Grande Armadura Denteada",
        "progress_lavaarena_armor_hprecharger": "Grande Armadura Sedosa",
        "progress_lavaarena_armor_hppetmastery": "Grande Armadura Sussurrante",
        "progress_lavaarena_heavyblade": "LÃ¢mina do Ferreiro",
        "progress_lavaarena_firebomb": "CÃ¢mara de Magma Cristalizado",
        "progress_rhinodrill": "Rinocemanos",
        "progress_trails": "Javarila",
        "progress_lastsync": "Actualizado %1",
        "progress_lastsync_title": "Actualizado em %1",
        "leaderboards-title": "Melhores Equipas",
        "leaderboards-loading": "A obter equipas..",
        "leaderboards-noresults": "Nenhuns dados obtidos.. Tenta novamente",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Tempo",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Mortes",
        "leaderboards-showmore": "Mostrar Mais",
        "leaderboards-showless": "Mostrar Menos",
        "date": {
            "parentLocale": 'en',
            "months": 'Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
            "longDateFormat": {
                LLL: 'D [de] MMMM [de] YYYY HH:mm',
            },
            "relativeTime": {
                "future": "daqui a %s",
                "past": "hÃ¡ %s atrÃ¡s",
                "s": 'alguns segundos',
                "ss": '%d segundos',
                "m": "um minuto",
                "mm": "%d minutos",
                "h": "uma hora",
                "hh": "%d horas",
                "d": "um dia",
                "dd": "%d dias",
                "M": "um mÃªs",
                "MM": "%d meses",
                "y": "um ano",
                "yy": "%d anos"
            },
            "ordinal": function(number) {
                return number + "Âº";
            }
        },
        "localization-credits": "Autores das TraduÃ§Ãµes",
        "localization-help": "Queres ajudar?",
        "localization-helptext": "Queres adicionar a tua lÃ­ngua? Envia um pull request no %1."
    },
    "ä¸­æ–‡": {
        "author": "ä¸­æ–‡ç”± <a href='https://klei.com/'>Kleiæä¾›</a>",
        "locale": "cn",
        "progress_communityunlocks": "å…¨å‘˜è§£é”è¿›åº¦",
        "progress_bar_title": "è¿›åº¦: %1%",
        "progress_locked": "æœªè§£é”",
        "progress_beetletaur": "åœ°ç‹±é‡ŽçŒª",
        "progress_boarrior": "å¤§ç†”ç‚‰çŒªæˆ˜å£«",
        "progress_book_elemental": "å¬å”¤å‘½ä»¤å¤å…¸ & èžºæ—‹çŸ›",
        "progress_lavaarena_armor_hpextraheavy": "åšå›ºçš„å¤§ç›”ç”²",
        "progress_lavaarena_armor_hpdamager": "é”¯é½¿çŠ¶å¤§ç›”ç”²",
        "progress_lavaarena_armor_hprecharger": "ä¸ç»¸å¤§ç›”ç”²",
        "progress_lavaarena_armor_hppetmastery": "è€³è¯­å¤§ç›”ç”²",
        "progress_lavaarena_heavyblade": "é“åŒ åˆ©é”‹",
        "progress_lavaarena_firebomb": "ç»“æ™¶å²©æµ†å®¤",
        "progress_rhinodrill": "é’»çŠ€å…„å¼Ÿ",
        "progress_trails": "çŒªçŒ©",
        "progress_lastsync": "æœ€è¿‘æ›´æ–° %1",
        "progress_lastsync_title": "æœ€è¿‘æ›´æ–°äºŽ %1",
        "leaderboards-title": "æœ€ä½³é˜Ÿä¼",
        "leaderboards-loading": "æ­£åœ¨åŠ è½½æœ€ä½³é˜Ÿä¼..",
        "leaderboards-noresults": "æœªèƒ½èŽ·å¾—ç»“æžœ.. è¯·ç¨å€™å†è¯•",
        "leaderboards-pos": "%1",
        "leaderboards-time": "æ—¶é—´",
        "leaderboards-seconds": "ç§’",
        "leaderboards-deaths": "æ­»äº¡",
        "leaderboards-showmore": "æ˜¾ç¤ºæ›´å¤š",
        "leaderboards-showless": "æ”¶èµ·",
        "date": {
            "parentLocale": 'en',
            "months": 'ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ'.split('_'),
            "longDateFormat": {
                LLL: 'YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†',
            },
            "relativeTime": {
                future: '%så†…',
                past: '%så‰',
                s: 'å‡ ç§’',
                ss: '%d ç§’',
                m: '1 åˆ†é’Ÿ',
                mm: '%d åˆ†é’Ÿ',
                h: '1 å°æ—¶',
                hh: '%d å°æ—¶',
                d: '1 å¤©',
                dd: '%d å¤©',
                M: '1 ä¸ªæœˆ',
                MM: '%d ä¸ªæœˆ',
                y: '1 å¹´',
                yy: '%d å¹´'
            },
            "ordinal": function(number, period) {
                switch (period) {
                    case 'd':
                    case 'D':
                    case 'DDD':
                        return number + 'æ—¥';
                    case 'M':
                        return number + 'æœˆ';
                    case 'w':
                    case 'W':
                        return number + 'å‘¨';
                    default:
                        return number;
                }
            },
        },
        "localization-credits": "æœ¬åœ°åŒ–äººå‘˜",
        "localization-help": "éœ€è¦å¸®åŠ©å—ï¼Ÿ",
        "localization-helptext": "æƒ³è¦æ·»åŠ æ‚¨è‡ªå·±çš„è¯­è¨€å—ï¼Ÿ åªéœ€è¦æäº¤ä¸€ä»½ç”³è¯· %1."
    },
	var loc_selected_language = "Français";
var loc_strings = {
    "Français": {
        "author": "Français par <a href='https://forums.kleientertainment.com/profile/913445-adm/'>ADM</a>",
        "locale": "fr",
        "progress_communityunlocks": "Déverrouillé par la Communauté",
        "progress_bar_title": "Progrès: %1%",
        "progress_locked": "Verrouillé",
        "progress_beetletaur": "Scara-Clops Infernal",
        "progress_boarrior": "Grand Forge Boarrior",
        "progress_book_elemental": "Codex d'Invocation & Lance en Spirale",
        "progress_lavaarena_armor_hpextraheavy": "Grande Armure Incassable",
        "progress_lavaarena_armor_hpdamager": "Grande Armure Déchiquetée",
        "progress_lavaarena_armor_hprecharger": "Grande Armure Soyeuse",
        "progress_lavaarena_armor_hppetmastery": "Grande Armure Murmurante",
        "progress_lavaarena_heavyblade": "Lame de Forgeron",
        "progress_lavaarena_firebomb": "Bombe de Magma Cristallisée",
        "progress_rhinodrill": "Rhinocédrill",
        "progress_trails": "Boarilla",
        "progress_lastsync": "Mis à jour il y a %1",
        "progress_lastsync_title": "Mis à jour le %1",
        "leaderboards-title": "Meilleures Teams",
        "leaderboards-loading": "Chargement des Meilleures Teams..",
        "leaderboards-noresults": "Aucun résultat renvoyé.. Réessayez plus tard",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Temps",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Morts",
        "leaderboards-showmore": "Afficher Plus",
        "leaderboards-showless": "Afficher Moins",
        "date": {
            "parentLocale": 'fr',
            "months": 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
            "longDateFormat": {
                LLL: 'D MMMM YYYY HH:mm',
            },
            "relativeTime": {
                "future": "dans %s",
                "past": "il y a %s",
                "s": 'il y a quelques secondes',
                "ss": '%d secondes',
                "m": "une minute",
                "mm": "%d minutes",
                "h": "une heure",
                "hh": "%d heures",
                "d": "un jour",
                "dd": "%d jours",
                "M": "un mois",
                "MM": "%d mois",
                "y": "un an",
                "yy": "%d années"
            },
            "ordinal": function(number) {
                var b = number % 10,
                    output = (~~(number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
                return number + "<span class='ordinal'>" + output + "</span>";
            }
        },
        "localization-credits": "Auteurs des Traductions",
        "localization-help": "Voulez-Vous Aider?",
        "localization-helptext": "Voulez-vous ajouter votre langue? Envoyez une demande de tirage sur %1."
    },
}

function LocalizeSetup() {
    // Add language selector
    var languageContainer = document.createElement("div");
    $(languageContainer).attr("id", "language");
    $(languageContainer).appendTo($("body"));

    var languageSelect = document.createElement("select");
    $(languageSelect).attr("class", "language-select");
    $(languageSelect).appendTo($(languageContainer));
    for (var language in loc_strings) {
        var languageOption = document.createElement("option");
        $(languageOption).attr("val", language);
        $(languageOption).text(language);
        $(languageOption).appendTo($(languageSelect));
    }

    // Look for a language cookie
    var language = LocalizeGetCookie("language");
    if (language != null && loc_strings[language] != null) {
        // Use cookie's language
        LocalizeSetLanguage(language);
    } else {
        // Use default language
        LocalizeSetLanguage(loc_selected_language);
    }

    // Select the corresponding language on the selector
    $(languageSelect).val(language);

    // Setup language selector listener
    $(languageSelect).on('change', function() {
        LocalizeSetLanguage(this.value);
    });

    // Show localization footer
    LocalizeSetupFooter();

}

(function() {
    LocalizeSetup();
})();

function UpdateLocalization(parent) {
    var parent = parent || "body";

    // Update credits hover on language selector
    $("#language").attr("title", LocalizeString("author") || loc_strings["English"]["author"]);

    // Try and update the locale on the Moment library
    if (typeof moment === 'function') {
        var locale = LocalizeString("locale") || "en";
        moment.locale(locale, LocalizeString("date"));
    }

    // Update translatable text elements
    var elements = $(parent).find("[i18n-text]");
    for (var i = 0; i < elements.length; i++) {
        var key = $(elements[i]).attr("i18n-text");
        var arg = $(elements[i]).attr("i18n-text-argument");
        var text = LocalizeString(key);
        text = LocalizeArguments(text, arg);
        $(elements[i]).html(text);
    }

    // Update translatable title elements
    var elements = $(parent).find("[i18n-title]");
    for (var i = 0; i < elements.length; i++) {
        var key = $(elements[i]).attr("i18n-title");
        var arg = $(elements[i]).attr("i18n-title-argument");
        var title = LocalizeString(key);
        title = LocalizeArguments(title, arg);
        $(elements[i]).attr("title", title);
    }
}

function LocalizeArguments(text, arg) {
    if (arg) {
        if (text.indexOf('%1') != -1) {
            // Check if this argument is an unix date that must be formatted

            // Relative formatting
            if (arg.indexOf('%rd') != -1) {
                var date = arg.substring(arg.indexOf('%rd') + 3);
                date = date.substring(0, date.indexOf(' ') != -1 || undefined);
                arg = moment.unix(date).fromNow();
            }

            // Short precise formatting
            if (arg.indexOf('%lll') != -1) {
                var date = arg.substring(arg.indexOf('%lll') + 4);
                date = date.substring(0, date.indexOf(' ') != -1 || undefined);
                arg = moment.unix(date).format("LLL");
            }

            // Ordinal formatting
            if (arg.indexOf('%o') != -1) {
                var numberText = arg.substring(arg.indexOf('%o') + 2);
                numberText = numberText.substring(0, numberText.indexOf(' ') != -1 || undefined);
                var number = parseInt(numberText);
                arg = loc_strings[loc_selected_language]["date"]["ordinal"](number) || arg;
            }

            text = text.replace('%1', arg);
        }
    }
    return text;
}

function LocalizeSetLanguage(languageKey) {
    loc_selected_language = languageKey;

    UpdateLocalization();

    // Set a cookie
    LocalizeSetCookie("language", loc_selected_language, 6);
}

function LocalizeSetCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function LocalizeGetCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function LocalizeString(key) {
    return loc_strings[loc_selected_language][key] ||
        loc_strings["English"][key] || "Invalid String";
}

function LocalizeSetupFooter() {
    var footerContainer = document.createElement("div");
    $(footerContainer).attr("class", "localization-footer");
    $(footerContainer).appendTo($("body"));

    var footerLeft = document.createElement("div");
    $(footerLeft).attr("class", "localization-credits");
    $(footerLeft).appendTo($(footerContainer));

    var footerRight = document.createElement("div");
    $(footerRight).attr("class", "localization-help");
    $(footerRight).appendTo($(footerContainer));

    $(footerLeft).append("<h1 i18n-text='localization-credits'></h1>");
    var creditsHtml = "";
    for (var language in loc_strings) {
        creditsHtml += "<span>" + loc_strings[language].author + ". </span>";
    }
    $(footerLeft).append(creditsHtml);

    $(footerRight).append("<h1 i18n-text='localization-help'></h1>");
    $(footerRight).append("<p i18n-text='localization-helptext' i18n-text-argument='<a href=\"https://github.com/kleientertainment/Forge2018StatsPage\">github</a>'></p>");
}
