var TSC = TSC || {};
TSC.textSanitizer = (function() {
    return{htmlEncode: function(b, a) {
            if (b) {
                if (a) {
                    return b.replace(/&/g, "&amp;").replace(/(<|&amp;lt;)/g, "&lt;").replace(/(>|&amp;gt;)/g, "&gt;").replace(/&amp;amp;/g, "&amp;")
                } else {
                    return b.replace(/&/g, "&amp;").replace(/("|&amp;quot;)/g, "&quot;").replace(/(<|&amp;lt;)/g, "&lt;").replace(/(>|&amp;gt;)/g, "&gt;").replace(/&amp;amp;/g, "&amp;")
                }
            } else {
                return b
            }
        }}
}());
var TSC = TSC || {};
TSC.languageCodes = (function() {
    var c = "en-US";
    var a = "de-DE";
    var b = "ja-JP";
    return{ENGLISH: c, GERMAN: a, JAPANESE: b, ENU: c, DEU: a, JPN: b, isValid: function(d) {
            if (d !== c && d !== a && d !== b) {
                return false
            } else {
                return true
            }
        }}
}());
var TSC = TSC || {};
TSC.localizationStrings = (function() {
    var d = TSC.languageCodes;
    var c = "default";
    var a = c;
    var f;
    var e = "";
    var b = {};
    b.xmpError = {};
    b.xmpError[d.ENGLISH] = "There seems to be a problem accessing certain features of this video. Please contact the video Author.";
    b.xmpError[d.GERMAN] = "Einige Merkmale dieses Videos sind offenbar nicht zugänglich. Bitte setzen Sie sich mit dem Autor des Videos in Verbindung.";
    b.xmpError[d.JAPANESE] = "�?��?�ビデオ�?�特定機能�?�アクセス�?�る時�?��?題�?�発生�?��?�よ�?��?��?�。ビデオ�?�作�?者�?�連絡�?��?��??�?��?��?�。";
    b.xmpSecurity = {};
    b.xmpSecurity[d.ENGLISH] = "Certain features in your video are currently disabled due to Local Network Security. These features work correctly when the video is played from a Website or Server.";
    b.xmpSecurity[d.GERMAN] = "Einige Merkmale Ihrem Video sind zurzeit aufgrund der Sicherheitseinstellungen im lokalen Netzwerk deaktiviert. Diese Merkmale funktionieren wie vorgesehen, wenn das Video über eine Website oder einen Server wiedergegeben wird.";
    b.xmpSecurity[d.JAPANESE] = "ローカル �?ットワーク�?�セキュリティ�?��?��?�?��?ビデオ�?�特定機能�?��?�在無効�?��?��?��?��?��?��?�。�?�れら�?�機能�?��?Web サイト�?��?��?�サー�?ー�?�らビデオを�?生�?�る�?�正�?��??動作�?��?��?�。";
    b.videoNotSupported = {};
    b.videoNotSupported[d.ENGLISH] = "Your browser cannot play this video.";
    b.videoNotSupported[d.GERMAN] = "Ihr Browser kann dieses Video nicht wiedergeben.";
    b.videoNotSupported[d.JAPANESE] = "�?�使�?��?�ブラウザ�?��?��?��?�ビデオを�?生�?��??�?��?�ん。";
    b.videoNotSupportedUseFlash = {};
    b.videoNotSupportedUseFlash[d.ENGLISH] = "This browser does not support the video format needed for playback.  Please install the Flash Player or use a different browser.";
    b.videoNotSupportedUseFlash[d.GERMAN] = "Dieser Browser unterstützt das zur Wiedergabe erforderliche Videoformat nicht. Bitte installieren Sie den Flash Player oder verwenden Sie einen anderen Browser.";
    b.videoNotSupportedUseFlash[d.JAPANESE] = "�?��?�ブラウザ�?��?�?生�?�必�?�?�ビデオ形�?をサ�?ート�?��?��?��?��?�ん。最新版�?�Flash Player をインストール�?�る�?��?別�?�ブラウザを使用�?��?��??�?��?��?�。";
    b.noWebMSupport = {};
    b.noWebMSupport[d.ENGLISH] = "This browser does not support WebM video.";
    b.noWebMSupport[d.GERMAN] = "Dieser Browser bietet keine WebM-Video-Unterstützung.";
    b.noWebMSupport[d.JAPANESE] = "�?��?�ブラウザ�?� WebM ビデオをサ�?ート�?��?��?��?��?�ん。";
    b.playlistLocalError = {};
    b.playlistLocalError[d.ENGLISH] = "Videos in a Playlist cannot be viewed from a local drive. The videos will play correctly from a Playlist hosted on a Website or Server.";
    b.playlistLocalError[d.GERMAN] = "Videos in einer Wiedergabeliste können nicht von einem lokalen Laufwerk aus abgespielt werden. Die Videos werden über eine auf einer Website oder einem Server gehostete Wiedergabeliste korrekt abgespielt.";
    b.playlistLocalError[d.JAPANESE] = "プレイリスト�?�ビデオ�?�ローカル ドライブ�?�ら�?生�?��??�?��?�ん。Web サイト�?��?��?�サー�?ー�?�ホスト�?�れ�?��?�るプレイリスト�?�ら�?��?ビデオ�?�正�?��??�?生�?�れ�?��?�。";
    b.search = {};
    b.search[d.ENGLISH] = "Search...";
    b.search[d.GERMAN] = "Suchen…";
    b.search[d.JAPANESE] = "検索…";
    b.videoFailedToLoad = {};
    b.videoFailedToLoad[d.ENGLISH] = "This video failed to load completely.";
    b.videoFailedToLoad[d.GERMAN] = "Dieses Video wurde nicht vollständig geladen.";
    b.videoFailedToLoad[d.JAPANESE] = "�?��?�ビデオを正�?��??読�?�込�?�?��?�ん�?��?��?�。";
    b.videoFailedToLoadUseFlash = {};
    b.videoFailedToLoadUseFlash[d.ENGLISH] = "This video failed to load completely.  You may need to try another browser or use the Flash plugin.";
    b.videoFailedToLoadUseFlash[d.GERMAN] = "Dieses Video wurde nicht vollständig geladen. Vielleicht müssen Sie einen anderen Browser ausprobieren oder das Flash-Plug-In verwenden.";
    b.videoFailedToLoadUseFlash[d.JAPANESE] = "�?��?�ビデオを正�?��??読�?�込�?�?��?�ん�?��?��?�。別�?�ブラウザを試�?��?��?Flash プラグインを使用�?�る必�?�?��?�り�?��?�。";
    b.searchDisabledFullScreen = {};
    b.searchDisabledFullScreen[d.ENGLISH] = "Search is disabled in fullscreen mode.";
    b.searchDisabledFullScreen[d.GERMAN] = "Die Suche ist im Vollbildmodus deaktiviert.";
    b.searchDisabledFullScreen[d.JAPANESE] = "フル画�?�モード�?��?�検索機能�?�無効�?��?�。";
    b.videoLoading = {};
    b.videoLoading[d.ENGLISH] = "Please wait... the video is loading.";
    b.videoLoading[d.GERMAN] = "Bitte warten... Das Video wird geladen.";
    b.videoLoading[d.JAPANESE] = "�?�待�?��??�?��?��?�... ビデオを読�?�込ん�?��?��?��?�。";
    b.clickToClose = {};
    b.clickToClose[d.ENGLISH] = "Click to Close";
    b.clickToClose[d.GERMAN] = "Hier klicken, um zu schließen";
    b.clickToClose[d.JAPANESE] = "クリック�?��?�終了";
    b.playWithSmartPlayer = {};
    b.playWithSmartPlayer[d.ENGLISH] = "Play with TechSmith Smart Player";
    b.playWithSmartPlayer[d.GERMAN] = "Mit TechSmith Smart Player abspielen";
    b.playWithSmartPlayer[d.JAPANESE] = "クリック�?��?�終了";
    b.playVideoOnly = {};
    b.playVideoOnly[d.ENGLISH] = "Play Video Only";
    b.playVideoOnly[d.GERMAN] = "Nur Video wiedergeben";
    b.playVideoOnly[d.JAPANESE] = "ビデオ�?��?生�?��?�";
    b.FullscreenKeyboardDisabled = {};
    b.FullscreenKeyboardDisabled[d.ENGLISH] = "Warning!, keyboard support is disabled in fullscreen.";
    b.FullscreenKeyboardDisabled[d.GERMAN] = "Warnung! Tastaturunterstützung ist im Vollbildmodus deaktiviert.";
    b.FullscreenKeyboardDisabled[d.JAPANESE] = "警告! フル画�?��?��?�キーボード サ�?ート�?�無効�?��?�。";
    b.txtRequiredMessage = {};
    b.txtRequiredMessage[d.ENGLISH] = "A first name, last name, and email address are required to take this quiz.";
    b.txtRequiredMessage[d.GERMAN] = "Sie müssen Vor- und Nachnamen und eine E-Mail-Adresse angeben, um an diesem Quiz teilzunehmen.";
    b.txtRequiredMessage[d.JAPANESE] = "�?��?�クイズ�?�解答�?�る�?��?��?�?�??�?�電�?メール アドレスを入力�?�る必�?�?��?�り�?��?�。";
    b.txtSkip = {};
    b.txtSkip[d.ENGLISH] = "Watch Video Only - No Quiz";
    b.txtSkip[d.GERMAN] = "Nur Video ansehen - Kein Quiz";
    b.txtSkip[d.JAPANESE] = "ビデオを見る�?��?��?�クイズ�?�解答�?��?��?�";
    b.txtBegin = {};
    b.txtBegin[d.ENGLISH] = "Watch Video and Take Quiz";
    b.txtBegin[d.GERMAN] = "Video ansehen und am Quiz teilnehmen";
    b.txtBegin[d.JAPANESE] = "ビデオを見�?�クイズ�?�解答�?�る";
    b.txtFirstName = {};
    b.txtFirstName[d.ENGLISH] = "First";
    b.txtFirstName[d.GERMAN] = "Vorname";
    b.txtFirstName[d.JAPANESE] = "�??";
    b.txtLastName = {};
    b.txtLastName[d.ENGLISH] = "Last";
    b.txtLastName[d.GERMAN] = "Nachname";
    b.txtLastName[d.JAPANESE] = "姓";
    b.txtEmail = {};
    b.txtEmail[d.ENGLISH] = "Email";
    b.txtEmail[d.GERMAN] = "E-Mail";
    b.txtEmail[d.JAPANESE] = "電�?メール";
    b.txtReview = {};
    b.txtReview[d.ENGLISH] = "Replay Last Section";
    b.txtReview[d.GERMAN] = "Letzten Abschnitt erneut wiedergeben";
    b.txtReview[d.JAPANESE] = "最後�?��?�択�?��?�範囲をも�?�一度�?生";
    b.txtAnswerQuestion = {};
    b.txtAnswerQuestion[d.ENGLISH] = "Take Quiz Now";
    b.txtAnswerQuestion[d.GERMAN] = "Jetzt am Quiz teilnehmen";
    b.txtAnswerQuestion[d.JAPANESE] = "今�?��??クイズ�?�解答�?�る";
    b.txtPrev = {};
    b.txtPrev[d.ENGLISH] = "Previous";
    b.txtPrev[d.GERMAN] = "Zurück";
    b.txtPrev[d.JAPANESE] = "�?�?�";
    b.txtNext = {};
    b.txtNext[d.ENGLISH] = "Next";
    b.txtNext[d.GERMAN] = "Weiter";
    b.txtNext[d.JAPANESE] = "次�?�";
    b.txtSubmit = {};
    b.txtSubmit[d.ENGLISH] = "Submit Answers";
    b.txtSubmit[d.GERMAN] = "Antworten abschicken";
    b.txtSubmit[d.JAPANESE] = "解答・回答�?��?信";
    b.txtContinue = {};
    b.txtContinue[d.ENGLISH] = "Continue";
    b.txtContinue[d.GERMAN] = "Fortsetzen";
    b.txtContinue[d.JAPANESE] = "続行";
    b.txtReviewAnswer = {};
    b.txtReviewAnswer[d.ENGLISH] = "View Answers";
    b.txtReviewAnswer[d.GERMAN] = "Antworten anzeigen";
    b.txtReviewAnswer[d.JAPANESE] = "解答・回答を表示";
    b.txtAnswerSent = {};
    b.txtAnswerSent[d.ENGLISH] = "Your answers have been sent.";
    b.txtAnswerSent[d.GERMAN] = "Ihre Antworten wurden gesendet.";
    b.txtAnswerSent[d.JAPANESE] = "解答・回答�?��?信�?�れ�?��?��?�。";
    b.txtDisabledLocalQuizReporting = {};
    b.txtDisabledLocalQuizReporting[d.ENGLISH] = "Keyboard input is disabled in full screen mode. Press the ESC key to exit full screen mode.";
    b.txtDisabledLocalQuizReporting[d.GERMAN] = "Bestimmte Merkmale in Ihrem Video sind aufgrund der Sicherheitseinstellungen im lokalen Netzwerk zurzeit deaktiviert. Sie funktionieren jedoch ordnungsgemäß, wenn das Video von einer Website oder einem Server aus wiedergegeben wird.";
    b.txtDisabledLocalQuizReporting[d.JAPANESE] = "ローカル �?ットワーク�?�セキュリティ�?��?�由�?�より�?ビデオ�?�特定機能�?��?�在無効化�?�れ�?��?��?��?�。Web サイト�?��?��?�サー�?ー�?�らビデオを�?生�?�る場�?��?�?�れら�?�機能�?�正�?��??動作�?��?��?�。";
    b.txtErrorMessage = {};
    b.txtErrorMessage[d.ENGLISH] = "We're sorry, a network error has prevented the quiz from loading. The video is available to view. To try and reload the quiz, refresh the browser page or check your network connection.";
    b.txtErrorMessage[d.GERMAN] = "Das Quiz konnte aufgrund eines Netzwerkfehlers nicht geladen werden. Das Video steht zur Ansicht bereit. Sie können versuchen das Quiz erneut zu laden, indem Sie die Browserseite aktualisieren bzw. Ihre Netzwerkverbindung überprüfen.";
    b.txtErrorMessage[d.JAPANESE] = "申�?�訳�?�り�?��?�ん�?��?�?ットワーク エラー�?�よりクイズを読�?�込�?�?��?�ん�?��?��?�。ビデオ�?�表示�?��??�?��?�。クイズを�?度読�?�込む�?��?��?ブラウザ�?�ページを更新�?�る�?��?�?ットワーク接続を確�?�?��?��??�?��?��?�。";
    b.txtLoaderMessageInstance = {};
    b.txtLoaderMessageInstance[d.ENGLISH] = "Please wait... the quiz is loading.";
    b.txtLoaderMessageInstance[d.GERMAN] = "Bitte warten... Das Quiz wird geladen.";
    b.txtLoaderMessageInstance[d.JAPANESE] = "�?�待�?��??�?��?��?�... クイズを読�?�込ん�?��?��?��?�。";
    b.txtLoaderMessageDefinition = {};
    b.txtLoaderMessageDefinition[d.ENGLISH] = "Please wait... the quiz is loading.";
    b.txtLoaderMessageDefinition[d.GERMAN] = "Bitte warten... Das Quiz wird geladen.";
    b.txtLoaderMessageDefinition[d.JAPANESE] = "�?�待�?��??�?��?��?�... クイズを読�?�込ん�?��?��?��?�。";
    b.txtQuestionCount = {};
    b.txtQuestionCount[d.ENGLISH] = "{{currentQuestion}} of {{totalQuestions}}";
    b.txtQuestionCount[d.GERMAN] = "{{currentQuestion}} von {{totalQuestions}}";
    b.txtQuestionCount[d.JAPANESE] = "{{currentQuestion}} �? ({{totalQuestions}} �?中)";
    b.txtAutoResults = {};
    b.txtAutoResults[d.ENGLISH] = "{{numberCorrect}} correct answer{{plural}}.";
    b.txtAutoResults[d.GERMAN] = "{{numberCorrect}} richtige Antwort{{plural}}.";
    b.txtAutoResults[d.JAPANESE] = "{{numberCorrect}} 個�?�正解{{plural}}�?��?�り�?��?�。";
    b.txtManualResults = {};
    b.txtManualResults[d.ENGLISH] = "{{numberUngraded}} question{{plural}} could not be scored.";
    b.txtManualResults[d.GERMAN] = "{{numberUngraded}} Frage{{plural}} konnte nicht bewertet werden.";
    b.txtManualResults[d.JAPANESE] = "{{numberUngraded}} 個�?��?題{{plural}}�?�スコアを付�?�る�?��?��?��?��??�?��?�ん�?��?��?�。";
    b.txtQuizFullscreenMode = {};
    b.txtQuizFullscreenMode[d.ENGLISH] = "Keyboard input is disabled in full screen mode. Press the ESC key to exit full screen mode.";
    b.txtQuizFullscreenMode[d.GERMAN] = "Die Tastatureingabe ist im Vollbildmodus deaktiviert.  Drücken Sie &gt;Esc&lt;, um den Vollbildmodus zu beenden.";
    b.txtQuizFullscreenMode[d.JAPANESE] = "全画�?�表示�?��?�キーボード入力�?�無効�?��?�。ESC キーを押�?��?�全画�?�モードを終了�?��?��?�。";
    return{setLanguage: function(g) {
            if (d.isValid(g) && a === c) {
                a = g
            }
        }, getLanguage: function() {
            return a
        }, getQuestionCountPreposition: function() {
            if (!e) {
                f = (a === c) ? d.ENGLISH : a;
                var h = b.txtQuestionCount[f].split(" ");
                for (var g = 0; g < h.length; g++) {
                    if (h[g].indexOf("{{") === -1) {
                        e = h[g];
                        break
                    }
                }
            }
            return e
        }, getString: function(g) {
            f = (a === c) ? d.ENGLISH : a;
            return b[g][f]
        }}
}());
var TSC = TSC || {};
TSC.videoAnalytics = (function() {
    var f;
    var h;
    var j = 0;
    var a = [{duration: 300000, segmentLength: 2000}, {duration: 1800000, segmentLength: 5000}];
    var i = 30000;
    var g;
    var b;
    var c = 0;
    var e;
    var d = false;
    return{setVideoLoadStartTime: function(k) {
            f = k
        }, setVideoLoadEndTime: function(k) {
            h = k
        }, getVideoLoadTime: function() {
            var k = 0;
            if (f && h) {
                k = h - f
            }
            return k
        }, getNumberSegments: function() {
            return g
        }, getNumberWatchedSegments: function() {
            return c
        }, isPercentWatchedInitialized: function() {
            return j > 0
        }, clearPercentWatched: function() {
            j = 0
        }, initPercentWatched: function(l) {
            if (l <= 0) {
                return
            }
            j = l;
            for (var k = 0; k < a.length; k++) {
                if (l <= a[k].duration) {
                    i = a[k].segmentLength;
                    break
                }
            }
            b = [];
            g = Math.ceil(l / i);
            for (k = 0; k < g; k++) {
                b.push(false)
            }
            c = 0
        }, markTimeWatched: function(k) {
            if (k > j) {
                return
            }
            e = Math.floor(k / i);
            if (e < 0 || e >= g) {
                return
            }
            if (!b[e]) {
                c++;
                b[e] = true
            }
        }, getPercentageWatched: function() {
            if (g && g > 0) {
                return c / g
            } else {
                return 0
            }
        }, getPercentageWatchedForVideoSegment: function(q, p) {
            var r = 0;
            if (j > 0 && (q <= p)) {
                var o = Math.floor(q / i);
                var m = Math.floor(p / i);
                var l = 0;
                var k = m - o + 1;
                for (var n = o; n <= m; n++) {
                    if (b[n]) {
                        l++
                    }
                }
                r = l / k
            }
            return r
        }, setEnabled: function(k) {
            d = k
        }, isEnabled: function() {
            return d
        }}
}());
var TSC = TSC || {};
TSC.mediaType = (function() {
    return{WEBM: "webm", H264: "h264", OGG: "ogg", UNKNOWN: "unknown", NOT_AVAILABLE: "not available", MULTIPLE_TYPES: "multiple types"}
}());
var TSC = TSC || {};
TSC.rtfParser = (function() {
    var g = "\\";
    var a = "0";
    var l = " ";
    var o = " ";
    function c(q) {
        var p = "par ";
        return q.toLowerCase() == p
    }
    function d(v, s) {
        if (s === undefined) {
            s = 0
        }
        var q = "a";
        var w = "z";
        var u = q.charCodeAt();
        var t = w.charCodeAt();
        var p = -1;
        if (v) {
            p = v.indexOf(g, s);
            while (p != -1) {
                if (p + 1 < v.length) {
                    var r = v.toLowerCase().charCodeAt(p + 1);
                    if (u <= r && r <= t) {
                        break
                    }
                }
                p = v.indexOf(g, p + 1)
            }
        }
        return p
    }
    function j(s, q) {
        if (q === undefined) {
            q = 0
        }
        var p = d(s, q);
        while (p != -1) {
            var r = i(s, p);
            if (r && !c(r)) {
                break
            }
            p = d(s, p + 1)
        }
        return p
    }
    function i(p, r) {
        var q;
        if (r != -1) {
            var t = p.indexOf(l, r + 1);
            if (t != -1) {
                var s = (t + 1) - (r + 1);
                q = p.substr(r + 1, s)
            } else {
                q = p.substr(r + 1)
            }
        }
        return q
    }
    function n(t, s) {
        var q = "";
        var u = [];
        var r = s.pop();
        while (r && r != t && s.length) {
            q += (g + r);
            u.push(e(r));
            if (s.length) {
                r = s.pop()
            }
        }
        q += (g + t);
        while (u.length) {
            var p = u.pop();
            if (p) {
                q += (g + p);
                s.push(e(p))
            }
        }
        return q
    }
    function b(p) {
        return p.indexOf(a) != -1
    }
    function e(q) {
        var p;
        if (q != "") {
            if (b(q)) {
                p = q.substr(0, q.indexOf(a))
            } else {
                if (q.indexOf(o) != -1) {
                    p = q.substr(0, q.indexOf(o))
                }
                p += a
            }
            p += o
        }
        return p
    }
    function m(s, q) {
        var r = s;
        if (q != -1 && r && q < r.length) {
            var p = r.indexOf(l, q);
            if (p != -1) {
                r = r.substr(0, q) + r.substr(p + 1)
            } else {
                r = r.substr(0, q)
            }
        }
        return r
    }
    function k(r) {
        var p = " ";
        var q = r;
        while (q.length > 1 && q.charAt(0) == p) {
            q = q.substr(1)
        }
        while (q.length > 1 && q.charAt(q.length - 1) == p) {
            q = q.substr(0, q.length - 1)
        }
        if (q == p) {
            q = ""
        }
        return q
    }
    function f(w) {
        var v = w;
        if (v) {
            var r = [];
            var q = j(v);
            var u = 0;
            while (q !== -1) {
                var t = i(v, q);
                if (t && b(t)) {
                    var p = n(t, r);
                    var s = v.indexOf(l, q);
                    if (s !== -1) {
                        v = v.substr(0, q) + p + v.substr(s + 1)
                    } else {
                        v = v.substr(0, q) + p
                    }
                    q += p.length
                } else {
                    if (t && !c(t)) {
                        r.push(e(t))
                    }
                    q = Number(q) + 1
                }
                q = d(v, q)
            }
        }
        return v
    }
    function h(r) {
        var q = r;
        if (q) {
            var p = 1;
            while (p > 0) {
                p = 0;
                var v = j(q);
                while (v != -1) {
                    var x = j(q, v + 1);
                    var u = i(q, v);
                    if (u) {
                        if (x != -1) {
                            var t = e(u);
                            var s = i(q, x);
                            if (s && s == t) {
                                var y = v + 1 + u.length;
                                var w = q.substr(y, x - y);
                                if (!k(w).length) {
                                    q = m(q, x);
                                    q = m(q, v);
                                    x -= (u.length + 1);
                                    p++
                                }
                            }
                        }
                    }
                    v = x
                }
            }
        }
        return q
    }
    return{NestAndCleanUpTags: function(q) {
            var p = q;
            if (p) {
                p = f(p);
                p = h(p)
            }
            return p
        }}
}());
var TSC = TSC || {};
TSC.textFormatter = (function() {
    return{rtfToText: function(b) {
            var a = false;
            if (b.indexOf("{\\rtf1") != -1) {
                b = b.split("{\\rtf1 ").join("");
                a = true
            }
            b = b.split("\\i ").join("");
            b = b.split("\\i0 ").join("");
            b = b.split("\\b ").join("");
            b = b.split("\\b0 ").join("");
            b = b.split("\\ul ").join("");
            b = b.split("\\ul0 ").join("");
            b = b.split("\\par ").join("");
            b = b.split("\\{").join("{");
            b = b.split("\\}").join("}");
            b = b.split("\\\\").join("\\");
            if (a && (b.charAt(b.length - 1) == "}")) {
                b = b.substr(0, b.length - 1)
            }
            return b
        }, rtfToHTML: function(b) {
            b = TSC.rtfParser.NestAndCleanUpTags(b);
            b = b.split("<").join("&lt;");
            b = b.split(">").join("&gt;");
            var a = false;
            if (b.indexOf("{\\rtf1") != -1) {
                b = b.split("{\\rtf1 ").join("");
                a = true
            }
            b = b.split("\\i0 ").join("</i>");
            b = b.split("\\b0 ").join("</b>");
            b = b.split("\\ul0 ").join("</u>");
            b = b.split("\\i ").join("<i>");
            b = b.split("\\b ").join("<b>");
            b = b.split("\\ul ").join("<u>");
            b = b.split("\\par ").join("<br/>");
            b = b.split("\\{").join("{");
            b = b.split("\\}").join("}");
            b = b.split("\\\\").join("\\");
            if (a && (b.charAt(b.length - 1) == "}")) {
                b = b.substr(0, b.length - 1)
            }
            b = b.split("&lt;br&gt;").join("<br/>");
            b = b.split("&lt;BR&gt;").join("<br/>");
            return b
        }}
}());
var TSC = TSC || {};
TSC.deviceInfo = (function() {
    var m = false;
    var q;
    var t;
    var r;
    var l;
    var f = false;
    var o;
    var s = false;
    var g = false;
    var c = false;
    var b = false;
    var u = false;
    var h = false;
    var j = false;
    var a = false;
    var n = false;
    var k = false;
    var p = false;
    function e() {
        switch (window.location.protocol) {
            case"http:":
            case"https:":
                return false;
                break;
            case"file:":
                return true;
                break
        }
    }
    function d() {
        for (var v in navigator.plugins) {
            if (navigator.plugins[v].filename && navigator.plugins[v].filename.toLowerCase().indexOf("pepflashplayer") !== -1) {
                return true
            }
        }
        return false
    }
    function i() {
        var v = document.createElement("video") || false;
        q = v && typeof v.canPlayType !== "undefined";
        t = q && (v.canPlayType("video/mp4") === "maybe" || v.canPlayType("video/mp4") === "probably");
        r = q && (v.canPlayType("video/ogg") === "maybe" || v.canPlayType("video/ogg") === "probably");
        l = q && (v.canPlayType("video/webm") === "maybe" || v.canPlayType("video/webm") === "probably");
        c = navigator.userAgent.match(/iPad/i) !== null;
        b = navigator.userAgent.match(/iPhone/i) !== null;
        u = navigator.userAgent.match(/iPod/i) !== null;
        h = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
        g = navigator.userAgent.toLowerCase().indexOf("chrome") !== -1;
        f = navigator.appName == "Microsoft Internet Explorer";
        if (g && e()) {
            p = d()
        }
        if (f) {
            var w = navigator.userAgent;
            var x = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (x.exec(w) != null) {
                o = parseFloat(RegExp.$1)
            }
        }
        s = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        j = navigator.userAgent.match(/Nuevo/i) !== null;
        a = navigator.userAgent.match(/Safari/i) !== null;
        k = ((screen.availWidth < 640) && (screen.availHeight < 480) || (screen.availWidth < 480) && (screen.availHeight < 640));
        n = (b || u || c) && (window.devicePixelRatio >= 2);
        if ((b || u) && j && n) {
            c = true;
            b = u = false
        }
    }
    return{isSmallScreen: function() {
            return k
        }, isRetinaDisplay: function() {
            return n
        }, isNuevoApp: function() {
            return j
        }, isIPad: function() {
            return c
        }, isIPhoneOrIPod: function() {
            return(b || u)
        }, isIE: function() {
            return f
        }, getIEVersion: function() {
            return o
        }, isFirefox: function() {
            return s
        }, isChrome: function() {
            return g
        }, isSafari: function() {
            return a
        }, isAndroid: function() {
            return h
        }, canPlayHTML5Video: function() {
            return q
        }, canPlayMP4: function() {
            return t
        }, canPlayOgg: function() {
            return r
        }, canPlayWebM: function() {
            return l
        }, isTouchInterface: function() {
            return Modernizr.touch
        }, supportsFullScreenKeyboardInput: function() {
            var v = false;
            if (g && Element.ALLOW_KEYBOARD_INPUT !== undefined) {
                v = true
            }
            return v
        }, mediaLocation: function() {
            var x = (document.location.href);
            var v = x.lastIndexOf("/");
            var w = x.substring(0, v + 1);
            if (TSC.deviceInfo.isIE() == true) {
                w = encodeURI(w)
            }
            w = w.split("%25").join("%");
            return w
        }, isLocal: function() {
            return e()
        }, isLocalPepperFlash: function() {
            return p
        }, lookAtDevice: function() {
            i()
        }}
}());
var TSC = TSC || {};
TSC.playerConfiguration = (function() {
    var N = "10.2.0";
    var h = [];
    var y;
    var c;
    var m;
    var i = "'playerProductInstall.swf";
    var g = "tsc_player.swf";
    var f = "100%";
    var D = "100%";
    var e = "stop";
    var r = true;
    var s = true;
    var I = false;
    var v = -1;
    var B = false;
    var p = false;
    var d = "left";
    var t = "#000";
    var u = false;
    var a = false;
    var F = true;
    var H = false;
    var o = true;
    var z = false;
    var j = false;
    var k = false;
    var A = false;
    var J;
    var O = true;
    var n = true;
    var l = false;
    var K;
    var w = false;
    var x = false;
    var M = false;
    var E = true;
    var C = ".";
    var q = {};
    var L = "flash";
    function G() {
        var Q = false;
        var P = (document.location.href);
        if (P.indexOf("http") == 0) {
            Q = true
        }
        return Q
    }
    function b(Q) {
        var P = Q.replace("&#8217;", "'");
        return P
    }
    return{getUnicodeSafeString: function(P) {
            if (P === undefined) {
                return P
            }
            if (TSC.playerConfiguration.getProcessUnicodeNames()) {
                if (TSC.deviceInfo.isIE() == true) {
                    if (G()) {
                        return encodeURI(P)
                    } else {
                        return decodeURIComponent(P)
                    }
                } else {
                    return encodeURIComponent(P)
                }
            } else {
                return P
            }
        }, getMediaSrc: function() {
            return h.length > 0 ? h[0] : ""
        }, setMediaSrc: function(P) {
            h.push(b(P))
        }, addMediaSrc: function(P) {
            h.push(b(P))
        }, getMediaSources: function() {
            return h
        }, getMediaFileName: function() {
            var P = h.length > 0 ? h[0] : undefined;
            var R;
            if (P) {
                var Q = P.split("/");
                R = Q[Q.length - 1];
                R = R.split("?")[0];
                if (R === undefined || R === "") {
                    R = "Unnamed Media"
                }
            } else {
                R = "No Media"
            }
            return R
        }, getXMPSrc: function() {
            return TSC.playerConfiguration.getUnicodeSafeString(y)
        }, setXMPSrc: function(P) {
            y = b(P)
        }, setSwfBase: function(P) {
            C = b(P)
        }, getSwfBase: function() {
            return C
        }, getConfigurationSrc: function() {
            return TSC.playerConfiguration.getUnicodeSafeString(c)
        }, setConfigurationSrc: function(P) {
            c = P
        }, getPosterImageSrc: function() {
            return TSC.playerConfiguration.getUnicodeSafeString(m)
        }, setPosterImageSrc: function(P) {
            m = P
        }, getUnableToDisplayContentString: function() {
            return TSC.localizationStrings.getString("videoNotSupported")
        }, getFlashUpdateBootstrapSwf: function() {
            return i
        }, setFlashUpdateBootstrapSwf: function(P) {
            i = P
        }, getFlashPlayerSwf: function() {
            return g
        }, setFlashPlayerSwf: function(P) {
            g = b(P)
        }, getPlayerWidth: function() {
            return f
        }, setPlayerWidth: function(P) {
            f = P
        }, getPlayerHeight: function() {
            return D
        }, setPlayerHeight: function(P) {
            D = P
        }, getEndActionType: function() {
            return e
        }, setEndActionType: function(P) {
            e = P
        }, getEndActionParam: function() {
            return r
        }, setEndActionParam: function(P) {
            r = P
        }, getIsSearchable: function() {
            return s
        }, setIsSearchable: function(P) {
            s = P
        }, getAutoPlayMedia: function() {
            return I
        }, setAutoPlayMedia: function(P) {
            I = P
        }, getAllowRewind: function() {
            return v
        }, setAllowRewind: function(P) {
            v = P
        }, getCaptionsEnabled: function() {
            return B
        }, setCaptionsEnabled: function(P) {
            B = P
        }, getSidebarEnabled: function() {
            return p
        }, setSidebarEnabled: function(P) {
            p = P
        }, getSidebarLocation: function() {
            return d
        }, setSidebarLocation: function(P) {
            d = P
        }, getBackgroundColor: function() {
            return t
        }, setBackgroundColor: function(P) {
            t = P
        }, getMinFlashPlayerVersion: function() {
            return N
        }, setDebugHotspot: function(P) {
            u = P
        }, getDebugHotspot: function() {
            return u
        }, setAutoHideControls: function(P) {
            F = P
        }, getAutoHideControls: function() {
            return F
        }, setProcessUnicodeNames: function(P) {
            a = P
        }, getProcessUnicodeNames: function() {
            return a
        }, setReportScormComplete: function(P) {
            H = P
        }, getReportScormComplete: function() {
            return H
        }, setEnforceLinearAssessment: function(P) {
            o = P
        }, getEnforceLinearAssessment: function() {
            return o
        }, setDisableFullframeMode: function(P) {
            z = P
        }, getDisableFullframeMode: function() {
            return z
        }, getDisableControls: function() {
            return j
        }, setDisableControls: function(P) {
            j = P
        }, getMobileWebViewCanAutoPlay: function() {
            return k
        }, setMobileWebViewCanAutoPlay: function(P) {
            k = P
        }, setGoogleAnalyticsID: function(P) {
            J = P
        }, getGoogleAnalyticsID: function() {
            return J
        }, setGAPageViewTracking: function(P) {
            O = P
        }, getGAPageViewTracking: function() {
            return O
        }, setGAEventTracking: function(P) {
            n = P
        }, getGAEventTracking: function() {
            return n
        }, useCustomEventTracking: function(P, Q) {
            l = P;
            K = Q
        }, getTrackEvents: function() {
            return(l || J !== undefined)
        }, getCustomEventTracking: function() {
            return l
        }, getCustomEventCallback: function() {
            return K
        }, setAltEventCategoryAsFilename: function(P) {
            w = P
        }, getAltEventCategoryAsFilename: function() {
            return w
        }, setAltLoadTimeAsSeconds: function(P) {
            x = P
        }, getAltLoadTimeAsSeconds: function() {
            return x
        }, setAdvancedSeeking: function(P) {
            A = P
        }, getAdvancedSeeking: function() {
            return A
        }, setIframeCommunicationsEnabled: function(P) {
            E = P
        }, getIframeCommunicationsEnabled: function() {
            return E
        }, getFrameElement: function() {
            try {
                if (window != window.top && E) {
                    return $(window.frameElement)
                } else {
                    return""
                }
            } catch (P) {
                TSC.playerConfiguration.setDisableFullframeMode(true)
            }
        }, setTechPreference: function(P) {
            if (P === "flash" || P === "html5") {
                L = P
            }
        }, getTechPreference: function() {
            return L
        }, setURLParams: function(P) {
            q = P
        }, getURLParams: function(P) {
            return q
        }, setDebugUIMode: function(P) {
            M = P
        }, getDebugUIMode: function() {
            return M
        }}
}());
var TSC = TSC || {};
TSC.mediaList = (function() {
    var b = ".m3u";
    var m;
    var i = [];
    var j = 0;
    var a;
    var l;
    var d = false;
    function e() {
        j = 0;
        if (m[0].toLowerCase().indexOf(b) != -1) {
            d = true;
            f(TSC.playerConfiguration.getUnicodeSafeString(m[0]))
        } else {
            d = false;
            i.push(m);
            a.call()
        }
    }
    function f(n) {
        $.ajax({type: "GET", url: n, isLocal: true, dataType: "text", success: h, error: g})
    }
    function h(p) {
        i = p.split(/\r?\n/g);
        var o = i.length - 1;
        for (var n = o; n >= 0; n--) {
            if (i[n] === "") {
                i.splice(n, 1)
            } else {
                i[n] = TSC.playerConfiguration.getUnicodeSafeString(i[n])
            }
        }
        if (a) {
            a.call()
        }
    }
    function g(n) {
        if (l) {
            l.call()
        }
    }
    function c(p) {
        var o = "";
        var n = k(p);
        switch (n) {
            case TSC.mediaType.WEBM:
                o = "video/webm";
                break;
            case TSC.mediaType.H264:
                o = "video/mp4";
                break;
            case TSC.mediaType.OGG:
                o = "video/ogg";
            default:
                break
        }
        return o
    }
    function k(p) {
        var n = TSC.mediaType.UNKNOWN;
        var q = p.split(".");
        if (q.length > 0) {
            var o = q.pop().toLowerCase();
            switch (o) {
                case"webm":
                    n = TSC.mediaType.WEBM;
                    break;
                case"mp4":
                case"m4v":
                case"mov":
                    n = TSC.mediaType.H264;
                    break;
                case"ogv":
                    n = TSC.mediaType.OGG;
                    break;
                default:
                    break
            }
        }
        return n
    }
    return{init: function(n) {
            m = n;
            e()
        }, currentVideoSrc: function() {
            if (i.length > 0) {
                return i[j]
            } else {
                return undefined
            }
        }, currentVideoIndex: function() {
            return j
        }, setCurrentVideo: function(n) {
            if (n === "next") {
                if (j < i.length - 1) {
                    j++
                }
            } else {
                if (n === "previous") {
                    if (j > 0) {
                        j--
                    }
                } else {
                    if (Number(n) >= 0 && Number(n) < i.length) {
                        j = Number(n)
                    }
                }
            }
        }, getMediaList: function() {
            return i
        }, getVideoIndexBySrc: function(o) {
            var q = j;
            for (var p = 0; p < i.length; p++) {
                if (d) {
                    if (i[p] === o) {
                        q = p;
                        break
                    }
                } else {
                    for (var n = 0; n < i[p].length; n++) {
                        if (i[p][n] === o) {
                            q = p;
                            break
                        }
                    }
                }
            }
            return q
        }, getMediaType: function() {
            var n = TSC.mediaType.NOT_AVAILABLE;
            if (i.length > 0) {
                n = TSC.mediaType.UNKNOWN;
                if (d) {
                    n = k(i[j])
                } else {
                    var o = i[j].length;
                    if (o === 1) {
                        n = k(i[j][0])
                    } else {
                        n = TSC.mediaType.MULTIPLE_TYPES
                    }
                }
            }
            return n
        }, getMediaMimeType: function(n) {
            return c(n)
        }, isMediaTypeAvailable: function(o) {
            var n = false;
            if (i.length > 0) {
                if (d) {
                    n = (o === k(i[j]))
                } else {
                    var q = i[j].length;
                    for (var p = 0; p < q; p++) {
                        n = (o === k(i[j][p]));
                        if (n) {
                            break
                        }
                    }
                }
            }
            return n
        }, isPlaylist: function() {
            return d
        }, onFirstVideo: function() {
            return(j === 0)
        }, onLastVideo: function() {
            return((j + 1) === i.length)
        }, getErrorMessage: function() {
            return TSC.localizationStrings.getString("playlistLocalError")
        }, addEventListener: function(n, o) {
            if (n === "READY") {
                a = o
            } else {
                if (n === "ERROR") {
                    l = o
                }
            }
        }, removeEventListener: function(n, o) {
            if (n === "READY") {
                a = undefined
            } else {
                if (n === "ERROR") {
                    l = undefined
                }
            }
        }}
}());
var TSC = TSC || {};
TSC.ioOverlayView = (function() {
    var d = "#tsc_io_container";
    var a = "#tsc_io_overlay";
    var c = '<div id="tsc_io_container"><div id="tsc_io_message"><span>{{ioMessage}}</span><img src="{{loaderImg}}" /></div></div><div id="tsc_io_overlay"></div>';
    var b = "data:image/gif;base64,R0lGODlhIAAgAPMAAAAAAP///zg4OHp6ekhISGRkZMjIyKioqCYmJhoaGkJCQuDg4Pr6+gAAAAAA AAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ CgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6 k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1Z BApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYty WTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/ nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDU olIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY /CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXil oUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx6 1WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwA AAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZ KYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCE WBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKU MIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJ pQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg 1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFh lQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWM PaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgo jwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAA ACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQk WyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8c cwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIG wAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhk PJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBSh pkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuH jYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOU qjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQ CdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5 BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA 7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyND J0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQUL XAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3x EgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJK hWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTE SJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMD OR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ 0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIA ACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqU ToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyA SyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwID aH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLr ROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJ aVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ 9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOU jY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgG BqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY 0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9Uk UHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCX aiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgev r0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfL zOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnq zaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLK F0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5 VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBu zsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaL Cwg1RAAAOwAAAAAAAAAAAA==";
    var e = false;
    return{getViewMarkup: function(h) {
            var g = Handlebars.compile(c);
            var f = {ioMessage: h, loaderImg: b};
            return g(f)
        }, setViewMessage: function(f) {
            $(d + " span").html(f)
        }, hideLoadingGraphic: function() {
            $(d + " img").hide()
        }, showLoadingGraphic: function() {
            $(d + " img").show()
        }, viewOpen: function() {
            return e
        }, showView: function() {
            $(d).css("opacity", 0);
            $(d).animate({opacity: 1}, 300);
            e = true
        }, removeView: function(f) {
            e = false;
            $(a).animate({opacity: 0}, 200, function() {
                $(a).remove()
            });
            $(d).animate({opacity: 0}, 200, function() {
                if (f !== undefined) {
                    f.call()
                }
                $(d).remove()
            })
        }}
}());
var TSC = TSC || {};
TSC.playerView = function() {
    var by;
    var cj;
    var b;
    var cc;
    var bt;
    var H = false;
    var a1 = "#tscplayer";
    var ap = "embeddedObject";
    var aY, w, g, bo, D, bA, bw, av, S, bM, am, i, P, r, bb, cd, a3, V, aB, b8, l, F, ce, ah, be, O, y, b3;
    var s = 300, bX = 100, al, aj, u = -1, ao = -1, aM = false, bn = false, ae = false, bq = false, b6 = 5, bC = false, c = false, aK = 0, bZ = 0, aD = 0, aC = 0, ch = 0, m = false, aE = -1, bB = 1, ca = false, a7 = false, aU = -1, cf = 0, bG = false, bF = false, bH = 250, aX, Q = "", K = 1, T = false, aO = false, ak = -1, A = 5000, bK = false, br = "click", bS = false, aQ = false, az = 1, a4 = -1, aW = -1, cb = 0, U = 0, bk = false, bf = -1, bQ = false, b1 = false, bp = false, aJ = true, R = 0, a6 = 10, a9 = "HTML5-Video";
    var bE = 32;
    var h = TSC.ioOverlayView;
    var q = TSC.localizationStrings;
    var ar;
    var bN = '<a id="videoClickToPlayLink"><table id="videoClickToPlay" class="videoDimensions centeredImage"><tr><td><div id="ctoplay" class="spritesheet play_button_overlay_normal" /></td></tr></table></a><a id="videoClickToReplayLink"><table id="videoClickToReplay" class="videoDimensions centeredImage"><tr><td><div id="ctoplay" class="spritesheet replay_button_overlay_normal" /></td></tr></table></a><div id="videoWrapper" class="videoDimensions"><canvas id="hotspotContainerDebug" width="1" height="1" ></canvas><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUZFRTQ3RTgzQjlFMTFFMUE1QzU4ODA1ODE4NzA1RTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUZFRTQ3RTkzQjlFMTFFMUE1QzU4ODA1ODE4NzA1RTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRkVFNDdFNjNCOUUxMUUxQTVDNTg4MDU4MTg3MDVFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRkVFNDdFNzNCOUUxMUUxQTVDNTg4MDU4MTg3MDVFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuQAJiQAAAAXSURBVHjaYvz//z8DOmBiwAIoFAQIMAA2UAMHLJ+dVwAAAABJRU5ErkJggg%3D%3D" id="hotspotContainer" usemap="#hotspotMap" width="1" height="1" /><div id="videoSidebar"><div id="videoSidebarHead"><div id="searchArea"><input id="searchBox" value="Search..." /><span id="clearSearchButton" ></span></div></div><div id="videoSidebarContentWrapper"> <div id="videoSidebarContent"> <ol id="tableOfContentsList"> </ol> </div> </div> </div> <div id="videoDiv"></div><div id="volume_slider_container" class="spritesheet volumebar_backdrop"><div id="volume_slider_vertical"></div></div><div id="controls" class="spritesheet sprite_repeat control_backdrop"> <div id="rewind" class="spritesheet rewind_button_normal bitmap_control"><span></span> </div><div id="play" class="spritesheet play_button_normal bitmap_control"><span></span> </div><div id="previous" class="spritesheet previous_button_disabled bitmap_control"><span></span> </div><div id="next" class="spritesheet next_button_normal bitmap_control"><span></span> </div><div id="progress" class="bitmap_control"><div id="progress_box"><span id="progress_scrubbar_track_left" class="spritesheet scrubbar_track_left"></span><span id="progress_scrubbar_track" class="spritesheet sprite_repeat scrubbar_track"><span id="load_progress" class="spritesheet sprite_repeat scrubbar_loaded_track"><span id="play_progress" class="spritesheet sprite_repeat scrubbar_played_track"></span></span></span> <span id="progress_scrubbar_track_right" class="spritesheet scrubbar_track_right"></span><canvas id="markers"></canvas><span id="scrubbar_scrubber" class="spritesheet scrubbar_scrubber_normal"></span> </div><div class="spritesheet seperator bitmap_control"></div><div id="play_time"> <span id="current_time_display">00:00</span> / <span id="duration_display">00:00</span> </div> </div><div id="volume" class="spritesheet volume_button_normal bitmap_control"></div><div id="closedCaptionButton" class="spritesheet closed_caption_button_normal bitmap_control"></div><div id="tocButton" class="spritesheet toc_button_normal bitmap_control"></div><div id="fullscreen_enter_button" class="bitmap_control spritesheet fullscreen_enter_button_normal"></div></div><div id="currentCaption" class="hide"></div><div id="alertDialog"></div></div><div id="captions"></div><div id="screenText"></div><div id="speechText"></div><map name="hotspotMap" id="hotspotMap"></map>';
    function aS(cn, cl, cm) {
        if (TSC.playerConfiguration.getCustomEventTracking()) {
            if (TSC.playerConfiguration.getCustomEventCallback()) {
                if (TSC.playerConfiguration.getAltEventCategoryAsFilename()) {
                    TSC.playerConfiguration.getCustomEventCallback().call(this, {category: TSC.playerConfiguration.getMediaFileName(), action: cn, label: cl, value: cm})
                } else {
                    TSC.playerConfiguration.getCustomEventCallback().call(this, {category: a9, action: cn, label: cl, value: cm})
                }
            }
        }
        if (TSC.playerConfiguration.getGoogleAnalyticsID()) {
            _gaq.push(["_trackEvent", a9, cn, cl])
        }
    }
    function ba(cl) {
        if (aY && ae && cl.keyCode === bE) {
            cl.originalEvent.preventDefault();
            if (aY[0].paused) {
                aY[0].play()
            } else {
                aY[0].pause()
            }
        }
    }
    function C() {
        $(document).bind("keydown", ba)
    }
    function t() {
        $(document).unbind("keydown", ba)
    }
    function f(cl) {
        cl = cl.replace(/\)/gi, "\\)");
        cl = cl.replace(/\(/gi, "\\(");
        $("#videoClickToPlay, #videoClickToReplay").css("background-image", "url(" + cl + ")")
    }
    function bc() {
        $("#videoClickToPlay, #videoClickToReplay").css("background-image", "none")
    }
    function af(cl) {
        if (K != -1) {
            $("#tableOfContentsList li:nth-child(" + K + ") ").removeClass("selectedTocItem")
        }
        K = cl;
        $("#tableOfContentsList li:nth-child(" + K + ") ").addClass("selectedTocItem")
    }
    function d(cl) {
        for (var cm = 0; cm < cl.length; cm++) {
            var cn;
            if (cl[cm].start !== undefined) {
                cn = cl[cm].start
            } else {
                cn = cl[cm].time
            }
            bd(cl[cm].text, cn, cl[cm].file, cl[cm].imageRef, cl[cm].imageRect)
        }
    }
    function bW(cl) {
        var co = [];
        var cn;
        for (cn = 0; cn < cl.length; cn++) {
            var cq = cl[cn].text;
            if (cq.toLowerCase().indexOf(F.val().toLowerCase()) != -1) {
                co.push(cl[cn])
            }
        }
        var cp = co.length;
        var cm;
        for (cm = 0; cm < cp; cm++) {
            bz(co[cm])
        }
    }
    function bz(cy) {
        var cx = cy.items.length;
        var cu = (F.val().toLowerCase()).split(" ");
        for (var cs = 0; cs < cx; cs++) {
            var cq = "";
            var cn = cy.items[cs];
            var cp = cu[0];
            if (cn.toLowerCase().indexOf(cp) < 0) {
                continue
            }
            for (var cr = 0; cr < cu.length; cr++) {
                if (cs + cr >= cx) {
                    cq += ""
                } else {
                    if (cs == 0) {
                        cq += cy.items[cs + cr]
                    } else {
                        cq += " " + cy.items[cs + cr]
                    }
                }
            }
            if (cq.toLowerCase().indexOf(F.val().toLowerCase()) != -1) {
                var co;
                if (cu.length < 4) {
                    co = Math.floor(5 - (cu.length) / 2)
                } else {
                    co = 2
                }
                var cm;
                var cv = "";
                var cl = "";
                for (var ct = 1; ct <= co; ct++) {
                    if ((cs - ct) >= 0) {
                        cv = cy.items[cs - ct] + " "
                    }
                    if (cs + cr + ct < cx) {
                        cl += " " + cy.items[cs + cr + (ct - 1)]
                    }
                }
                cq = b7(cq, F.val());
                cm = "..." + cv + cq + cl + "...";
                var cz = cy.file;
                var cw = "";
                if (cz !== undefined) {
                    cw = "data-file='" + cz + "'"
                }
                aV("#searchList", cm, cy.start, cz, undefined, undefined, F.val())
            }
        }
    }
    function bd(cp, cl, cm, cn, co) {
        if (cp.toLowerCase().indexOf(F.val().toLowerCase()) != -1) {
            aV("#searchList", cp, cl, cm, cn, co, F.val())
        }
    }
    function x() {
        var cl = $("#hotspotContainerDebug");
        var cm = cl[0].getContext("2d");
        cm.clearRect(0, 0, $("#hotspotContainerDebug").width(), $("#hotspotContainerDebug").height());
        cm.fillStyle = "rgba(255, 0, 0, 0.5)";
        var cn;
        var co;
        $.each(TSC.xmp.getHotspotItemArray(), function() {
            co = $(this)[0];
            if (co.isActive) {
                cn = co.scaledPoints.length;
                cm.beginPath();
                for (var cp = 0; cp < cn; cp += 2) {
                    if (cp === 0) {
                        cm.moveTo(co.scaledPoints[cp], co.scaledPoints[cp + 1])
                    } else {
                        cm.lineTo(co.scaledPoints[cp], co.scaledPoints[cp + 1])
                    }
                }
                cm.lineTo(co.scaledPoints[0], co.scaledPoints[1]);
                cm.closePath();
                cm.fill()
            }
        })
    }
    function aR(cn, cm, cr, cl) {
        var cq = "";
        var cp = cm.points.length;
        for (var co = 0; co < cp; co++) {
            cm.scaledPoints[co] = Math.round(cm.points[co] * cr);
            if (cm.scaledPoints[co] < 0) {
                cm.scaledPoints[co] = 0
            }
            if (co === 0) {
                cq += cm.scaledPoints[co]
            } else {
                cq += "," + cm.scaledPoints[co]
            }
        }
        if (TSC.playerConfiguration.getDebugHotspot()) {
            x()
        }
        if (cl) {
            $(cl).attr("coords", cq)
        } else {
            $("#hotspotMap").append('<area shape="poly" coords="' + cq + '" hotspot_index="' + cn + '" href="#" alt="Hotspot" />');
            $("#hotspotMap area").bind("click", J)
        }
    }
    function n(cw, cq) {
        if (u < 0) {
            return
        }
        var cp = (Number(cw) - (Number(u) * az)) / 2;
        var cs = (Number(cq) - (Number(ao) * az)) / 2;
        if (cp < 0) {
            cp = 0
        }
        if (cs < 0) {
            cs = 0
        }
        var cm = (u * az);
        var cv = (ao * az);
        $("#hotspotContainer").attr("width", cm);
        $("#hotspotContainer").attr("height", cv);
        $("#hotspotContainer").css("left", cp);
        $("#hotspotContainer").css("top", cs);
        if (TSC.playerConfiguration.getDebugHotspot()) {
            $("#hotspotContainerDebug").attr("width", cm);
            $("#hotspotContainerDebug").attr("height", cv);
            $("#hotspotContainerDebug").css("left", cp);
            $("#hotspotContainerDebug").css("top", cs)
        }
        var cl = $("#hotspotMap area");
        var cn = cl.length;
        var co;
        var ct;
        if (cn > 0) {
            for (var cr = 0; cr < cn; cr++) {
                co = cl[cr];
                ct = $(co).attr("hotspot_index");
                if (ct) {
                    var cu = TSC.xmp.getHotspotItemArray();
                    var cx = cu[Number(ct)];
                    if (cx) {
                        aR(Number(ct), cx, az, co)
                    }
                }
            }
        }
    }
    function ag() {
        $("#searchList").remove();
        bw.show();
        cg()
    }
    function bY() {
        if (aY === undefined) {
            return
        }
        var cm = aY[0].offsetWidth;
        var cl = cm - 20;
        if (TSC.xmp.getCaptionPosition() === "under") {
            cl = cm;
            V.css("width", cl + "px");
            V.css("left", "0");
            V.css("bottom", i.height() + "px");
            V.css("height", (TSC.xmp.getCaptionBarHeight() * az) + "px")
        } else {
            cl = cm - 20;
            if (cl !== V.width()) {
                V.css("width", cl + "px");
                V.css("left", 10 + "px")
            }
            V.css("height", $("#currentCaption span").innerHeight())
        }
    }
    function an() {
        var cm = $("#markers");
        var cl = cm[0].getContext("2d");
        TSC.quizController.drawMarkers((aY[0].duration * 1000), cl, cb, U)
    }
    function Y() {
        aK = $("#videoSidebarHead")[0].offsetHeight + bZ;
        var cl;
        if (TSC.xmp.hasCaptionItems() && TSC.xmp.getCaptionPosition() === "under") {
            cl = (al - aK)
        } else {
            cl = (al - i.height() - aK)
        }
        $("#videoSidebarContent").height(cl)
    }
    function b0() {
        $("#tscVideoContent").css("width", TSC.playerConfiguration.getPlayerWidth());
        $("#tscVideoContent").css("height", TSC.playerConfiguration.getPlayerHeight());
        al = $("#tscVideoContent").innerHeight();
        aj = $("#tscVideoContent").innerWidth();
        if ((!bp || bS) && ao > 0 && TSC.xmp.hasCaptionItems() && TSC.xmp.getCaptionPosition() === "under") {
            al = ao * ((al - i.height()) / (ao + TSC.xmp.getCaptionBarHeight()))
        }
        i.width(aj);
        if (TSC.playerConfiguration.getSidebarLocation() === "right") {
            cd.css("left", aj - cd.outerWidth());
            cd.css("top", $("#tscVideoContent").offset().top)
        } else {
            cd.css("left", $("#tscVideoContent").offset().left);
            cd.css("top", $("#tscVideoContent").offset().top)
        }
        var cl;
        cl = r.outerWidth(true) + b6;
        var co = $("#play_time").outerWidth(true) + $(".seperator").outerWidth(true) + b6;
        if (TSC.deviceInfo.isIPad() || TSC.deviceInfo.isAndroid()) {
            $("#volume").remove();
            if (bG) {
                cl = cl + S.outerWidth(true)
            }
            if (bC) {
                cl = cl + av.outerWidth(true)
            }
            cl = cl + b6
        } else {
            if (bG) {
                cl = cl + a3.outerWidth(true) + S.outerWidth(true) + b6;
                if (c || bC) {
                    cl = cl + av.outerWidth(true)
                }
            } else {
                cl = cl + a3.outerWidth(true) + b6;
                if (c || bC) {
                    cl = cl + av.outerWidth(true)
                }
            }
        }
        if (aB.is(":visible")) {
            cl = cl + aB.outerWidth(true)
        }
        if (w.is(":visible")) {
            cl = cl + w.outerWidth(true)
        }
        if (bo.is(":visible")) {
            cl = cl + bo.outerWidth(true) + D.outerWidth(true)
        }
        if (bC) {
            $("#fullscreen_enter_button").removeClass("fullscreen_enter_button_normal");
            $("#fullscreen_enter_button").addClass("fullframe_enter_button_normal")
        }
        bM.width(aj - cl);
        am.width(aj - cl - co);
        $(".videoDimensions").width(aj);
        $(".videoDimensions").height(al);
        if (bG) {
            Y()
        }
        var cn = aY && aY.length > 0;
        if (cn) {
            aY.attr("height", al + "px");
            aY.attr("width", aj + "px")
        }
        if (ah.length > 0) {
            be.css("left", (a3.outerWidth(true) + (b6 * 2)) + "px")
        } else {
            var cm = a3.offset().left + (a3.width() / 2 - be.width() / 2);
            if ((cm + be.width()) > $("#tscVideoContent").offset().left + $("#tscVideoContent").width()) {
                cm = ($("#tscVideoContent").offset().left + $("#tscVideoContent").width()) - (be.width() + 5)
            }
            be.css("left", cm + "px")
        }
        if (cn && aY[0].duration) {
            I();
            if (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) {
                cb = aj - cl - co;
                U = i.height();
                $("#markers").attr("width", cb + "px");
                $("#markers").attr("height", U + "px");
                an();
                if (TSC.quizController.viewOpen()) {
                    TSC.quizController.pointViewAt(bD(aW))
                }
            }
        }
        bL();
        if (TSC.xmp.hasHotspotItems()) {
            n(aj, al)
        }
        if (TSC.xmp.hasCaptionItems()) {
            G();
            bY()
        }
    }
    function bL() {
        if (u > 0 && aj > 0) {
            var cm = aj / u;
            var cl = al / ao;
            var cn = Math.min(cm, cl);
            az = cn
        }
    }
    function ax() {
        if (bG && !TSC.deviceInfo.supportsFullScreenKeyboardInput()) {
            $("#searchArea").show();
            $("#fsSearchAlert").remove();
            Y()
        }
    }
    function bv() {
        if (!TSC.playerConfiguration.getDisableControls()) {
            i.show()
        }
        if (TSC.xmp.hasCaptionItems() && TSC.xmp.getCaptionPosition() === "under") {
            V.removeClass("hide")
        }
        if (TSC.deviceInfo.isTouchInterface()) {
            e()
        } else {
            if (TSC.playerConfiguration.getAutoHideControls()) {
                ai()
            }
        }
        X()
    }
    function E() {
        bk = true;
        if (!TSC.xmp.hasQuiz() || (TSC.xmp.hasQuiz() && (!TSC.quizController.quizEnabled() || TSC.quizController.getQuizReady()))) {
            bv()
        } else {
            aY[0].pause();
            b4(TSC.quizController.getLastStatusMessage())
        }
        if (TSC.videoAnalytics.isEnabled() && !TSC.videoAnalytics.isPercentWatchedInitialized()) {
            TSC.videoAnalytics.initPercentWatched(aY[0].duration * 1000)
        }
        if ((aY[0].webkitSupportsFullscreen && !TSC.deviceInfo.isIPad() && !TSC.deviceInfo.isAndroid())) {
            document.addEventListener("webkitfullscreenchange", function(cl) {
                if (cl.target.id.toString() === "tscVideoContent") {
                    aM = !aM;
                    if (aM) {
                        $("#fullscreen_enter_button").removeClass("fullscreen_enter_button_normal");
                        $("#fullscreen_enter_button").addClass("fullscreen_leave_button_normal")
                    } else {
                        ax();
                        $("#fullscreen_enter_button").removeClass("fullscreen_leave_button_normal");
                        $("#fullscreen_enter_button").addClass("fullscreen_enter_button_normal");
                        $("body").css("margin-left", "1px");
                        bq = true;
                        b0();
                        $("body").css("margin-left", "0");
                        bq = true;
                        b0()
                    }
                }
            });
            c = true
        } else {
            if (window != window.top && !TSC.playerConfiguration.getDisableFullframeMode()) {
                av.show();
                bC = true
            } else {
                $("#fullscreen_enter_button").remove()
            }
        }
        bq = true;
        b0();
        aY[0].removeEventListener("loadedmetadata", E, false)
    }
    function o() {
        var cl;
        if (TSC.xmp.getCaptionPosition() === "under") {
            cl = i.height();
            V.css("bottom", cl + "px")
        } else {
            if (V.hasClass("captionVAlignTop")) {
                cl = 20;
                V.css("bottom", "");
                V.css("top", cl + "px")
            } else {
                cl = i.height() + 10;
                V.css("top", "");
                V.css("bottom", cl + "px")
            }
        }
    }
    function bD(cm) {
        var cn = am.position().left;
        if (aY && aY[0].duration && aY[0].duration > 0) {
            if (cm >= 0 && cm <= aY[0].duration) {
                var cl = cm / aY[0].duration;
                cn += cl * am[0].offsetWidth
            }
        }
        return cn
    }
    function aa() {
        if (!ae || (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled() && !TSC.quizController.getQuizReady())) {
            return
        }
        var co = false;
        if (u === -1 || u === 0) {
            u = aY[0].videoWidth;
            ao = aY[0].videoHeight;
            bL();
            if (TSC.xmp.hasCaptionItems()) {
                G()
            }
            if (TSC.xmp.hasHotspotItems()) {
                n(aj, al)
            }
            b0();
            co = true
        }
        bp = Number(aY[0].currentTime.toFixed(2)) >= Number(aY[0].duration.toFixed(2));
        aD = ((aD + (aY[0].currentTime - aC)) / 2) + 0.33;
        if (co) {
            aC = 0
        } else {
            aC = aY[0].currentTime > aY[0].duration ? aY[0].duration : aY[0].currentTime
        }
        ch = aC * 1000;
        if (TSC.videoAnalytics.isEnabled()) {
            TSC.videoAnalytics.markTimeWatched(ch);
            if (TSC.playerConfiguration.getTrackEvents()) {
                var cn = Math.round(TSC.videoAnalytics.getPercentageWatched() * 100);
                if (cn >= (R + a6)) {
                    R += a6;
                    if (R < cn) {
                        R = (a6 * Math.floor(cn / a6)) + a6
                    }
                    if (R > 100) {
                        R = 100
                    }
                    aS("Video_Percent_Viewed", "Viewed: " + R + " Percent")
                }
            }
        }
        var cr = "";
        if (!bK && TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) {
            var cl = TSC.quizController.findQuestionSet(ch);
            if (cl.id >= 0) {
                if (a4 !== cl.id) {
                    if (!TSC.deviceInfo.isTouchInterface()) {
                        t()
                    }
                    aL();
                    b2(false);
                    if (cd) {
                        au(false)
                    }
                    a4 = cl.id;
                    aW = cl.markerTime / 1000;
                    aY[0].pause();
                    setTimeout(function() {
                        k(aW, true)
                    }, 100);
                    if (aM && !TSC.deviceInfo.supportsFullScreenKeyboardInput()) {
                        L("#videoWrapper", TSC.localizationStrings.getString("txtQuizFullscreenMode"), true)
                    }
                    TSC.quizController.displayConfirm(cl.id);
                    TSC.quizController.pointViewAt(bD(aW));
                    if (TSC.videoAnalytics.isEnabled()) {
                        var cn = TSC.videoAnalytics.getPercentageWatchedForVideoSegment((TSC.quizController.findPrevMarkerTimeForMarker(cl.id)), (cl.markerTime));
                        TSC.quizController.updatePercentWatchedForQuestionSet(a4, cn)
                    }
                    z(false)
                } else {
                }
            } else {
                a4 = -1
            }
        }
        var cm = 0;
        $.each(TSC.xmp.getHotspotItemArray(), function() {
            var cu = $(this)[0];
            var cs;
            if (TSC.mediaList.isPlaylist()) {
                cs = TSC.mediaList.currentVideoSrc()
            }
            var cv = true;
            if (cu.file !== undefined && cu.file !== cs) {
                cv = false
            }
            if (cu.start < aC && aC <= cu.end && cv) {
                if (cu.isActive === false) {
                    cu.isActive = true;
                    aR(cm, cu, az)
                }
                if (cu.pause !== undefined && cu.pause === true && aC + aD > cu.end && !aY[0].paused && !cu.hasPaused) {
                    if (cu.hasPaused === false) {
                        aY[0].pause()
                    }
                    cu.hasPaused = true;
                    ay(cu.end)
                }
            } else {
                if (cu.isActive) {
                    cu.isActive = false;
                    var ct = 0;
                    $("#hotspotMap area").each(function() {
                        var cw = $(this)[0];
                        ct++;
                        if (Number($(cw).attr("hotspot_index")) === cm) {
                            return false
                        }
                    });
                    if (ct > 0) {
                        $("#hotspotMap area:nth-child(" + ct + ")").remove()
                    }
                    if (TSC.playerConfiguration.getDebugHotspot()) {
                        x()
                    }
                }
                if (!aY[0].paused) {
                    cu.hasPaused = false
                }
            }
            cm++
        });
        var cq = false;
        var cp = false;
        $.each(TSC.xmp.getCaptionItemArray(), function() {
            var ct = $(this)[0];
            var cs;
            if (TSC.mediaList.isPlaylist()) {
                cs = TSC.mediaList.currentVideoSrc()
            }
            var cu = true;
            if (ct.file !== undefined && ct.file !== cs) {
                cu = false
            }
            if (ct.start < aC && aC <= ct.end && cu) {
                cp = true;
                if (ct.text !== V.text()) {
                    V.removeClass("captionHAlignLeft");
                    V.removeClass("captionHAlignCenter");
                    V.removeClass("captionHAlignRight");
                    V.addClass(ct.hAlignClass);
                    V.removeClass("captionVAlignTop");
                    V.removeClass("captionVAlignBottom");
                    V.addClass(ct.vAlignClass);
                    o();
                    cr = ct.htmlText;
                    cq = true
                }
            }
        });
        if (cp) {
            if (cq) {
                if (cr !== "") {
                    cr = "<span>" + cr + "</span>"
                }
                V.html(cr);
                if (cr !== "") {
                    if (TSC.xmp.getCaptionPosition() !== "under") {
                        $("#currentCaption span").css("background", TSC.xmp.getCaptionBg())
                    } else {
                        $("#currentCaption span").css("background", "none")
                    }
                }
                bY();
                if (b) {
                    b.call(cr)
                }
            }
        } else {
            V.html("")
        }
        if (a7) {
            aB.removeClass("closed_caption_off_button_normal");
            aB.addClass("closed_caption_button_normal");
            V.removeClass("hide");
            bY()
        } else {
            aB.removeClass("closed_caption_button_normal");
            aB.addClass("closed_caption_off_button_normal");
            V.addClass("hide")
        }
        if (TSC.playerConfiguration.getReportScormComplete() && TSC.videoAnalytics.getPercentageWatched() === 1) {
            TSC.playerConfiguration.setReportScormComplete(false);
            if (typeof userSubmitVideoCompletedToLMS == "function") {
                userSubmitVideoCompletedToLMS()
            }
        }
        if (!bK && a4 === -1 && bp && !b1) {
            b1 = true;
            aY[0].pause();
            aw()
        }
    }
    function bT(cl) {
        if (cl > 1) {
            cl = 1
        } else {
            if (cl < 0) {
                cl = 0
            }
        }
        aY[0].volume = cl
    }
    function ay(cl) {
        $.each(TSC.xmp.getHotspotItemArray(), function() {
            var cm = $(this)[0];
            if (cm.end === cl) {
                cm.hasPaused = true
            }
        })
    }
    function bm() {
        $.each(TSC.xmp.getHotspotItemArray(), function() {
            var cl = $(this)[0];
            cl.hasPaused = false;
            cl.isActive = false
        });
        $("#hotspotMap area").remove();
        if (TSC.playerConfiguration.getDebugHotspot()) {
            x()
        }
    }
    function b7(cn, cl) {
        var cm = new RegExp(cl, "ig");
        return cn.replace(cm, "<span class='foundSearchText'>" + cl + "</span>")
    }
    function aV(cA, cQ, cL, cv, cC, cu, cq) {
        var cp = "";
        var cn = "";
        var cx;
        var cE = "";
        var cG = "";
        var cH = 1;
        var cy;
        var cl;
        var cw = 0;
        var cF = 0;
        var cN = 20;
        var cI = 65;
        var cs = false;
        if (cv !== undefined) {
            cG = "data-file='" + cv + "'"
        }
        if (cu) {
            var cP = cu.split(",");
            var cD = -Number(cP[0]);
            var cJ = -Number(cP[1]);
            var cB = Number(cP[2]);
            var cO = Number(cP[3]);
            var cM = "";
            cx = "hasThumbImage";
            cE = "style='height:" + cO + "px'";
            if (cO < cI) {
                cs = true;
                cE = "style='height:" + cI + "px'"
            }
            if (TSC.xmp.getTocCellLayoutType() && TSC.xmp.getTocCellLayoutType() === "imageOnly" && cq === undefined) {
                cw = (bH - cB - cN) / 2
            } else {
                if (cB > (bH / 2 - cN)) {
                    cH = (bH / 2 - cN) / cB;
                    cB = bH / 2 - cN;
                    cF = Math.floor((cP[3] - (cP[3] * cH)) / 2)
                } else {
                    cF = Math.floor((cI - (cP[3] * cH)) / 2)
                }
            }
            cl = {};
            cl.width = Number(bH - cB - 40) + "px";
            cl.left = Number(cB + 5) + "px";
            cl.overflow = "hidden";
            cl["line-height"] = "1.2em";
            cl["max-height"] = "4.8em";
            if (cq !== undefined) {
                cy = '<div class="tocItemLabel">' + b7(cQ, cq) + "</div>"
            } else {
                if (TSC.xmp.getTocCellLayoutType() && TSC.xmp.getTocCellLayoutType() === "imageOnly") {
                    cy = ""
                } else {
                    cy = '<div class="tocItemLabel">' + cQ + "</div>"
                }
            }
            cn = "<div>" + cy + "</div>"
        } else {
            cE = "";
            cx = "noThumbImage";
            if (cq !== undefined) {
                cn = b7(cQ, cq)
            } else {
                cn = cQ
            }
        }
        var ct = "<li " + cE + " class='" + cx + "' data-time='" + cL + "' " + cG + " ></li>";
        $(cA).append(ct);
        if (cC) {
            var cK = cC.getContext("2d");
            cC.width = Number(cP[2]) * cH;
            cC.height = Number(cP[3]) * cH;
            cK.scale(cH, cH);
            if (y) {
                cK.drawImage(y, cP[0], cP[1], cP[2], cP[3], 0, 0, cP[2], cP[3])
            } else {
                cK.fillStyle = "#000000";
                cK.fillRect(0, 0, cP[2], cP[3])
            }
            $(cC).css("margin-left", cw);
            $(cC).css("margin-top", cF);
            $(cA + " li:last-child").append(cC)
        }
        $(cA + " li:last-child").append(cn);
        if (cC) {
            $(cA + " li:last-child .tocItemLabel").css(cl);
            var co = 0;
            var cm = cI;
            if (!$(cd).is(":visible")) {
                au(true);
                co = $(cA + " li:last-child .tocItemLabel").height();
                if (!cs) {
                    cm = $(cA + " li:last-child").height()
                }
                au(false)
            } else {
                co = $(cA + " li:last-child .tocItemLabel").height();
                if (!cs) {
                    cm = $(cA + " li:last-child").height()
                }
            }
            var cr = -8;
            if (!cs && cH === 1) {
                cr = 4
            }
            var cz = -Number(cm + cr);
            cz += (cm - co) / 2;
            cF = Math.floor((cm - (cP[3] * cH)) / 2);
            $(cC).css("margin-top", cF);
            $(cA + " li:last-child .tocItemLabel").css("top", cz + "px")
        }
        if (TSC.mediaList.isPlaylist()) {
            af(K)
        }
    }
    function bJ(cl) {
        y = new Image();
        y.onload = function() {
            cg()
        };
        y.onerror = function() {
            y.onload = undefined;
            y.onerror = undefined;
            y = undefined;
            cg()
        };
        y.src = cl
    }
    function cg() {
        var cn = TSC.xmp.getTocItemArray();
        var cl = cn.length;
        var co;
        $("#tableOfContentsList li").remove();
        for (var cm = 0; cm < cl; cm++) {
            if (cn[cm].imageRect) {
                cn[cm].imageRef = document.createElement("canvas")
            }
            aV("#tableOfContentsList", cn[cm].text, cn[cm].time, cn[cm].file, cn[cm].imageRef, cn[cm].imageRect)
        }
    }
    function bx() {
        var cp = b3.width;
        var cn = b3.height;
        var cr;
        var co;
        var cl;
        var cq = 0.6;
        if (cn <= cp) {
            if (cp > (bH - 20)) {
                cr = (bH - 20) / cp;
                co = (bH - 20);
                cl = cn * cr
            } else {
                cr = 1;
                co = cp;
                cl = cn
            }
        } else {
            if (cn > (bH - 20)) {
                cr = ((cp * cq) - 20) / cn;
                cl = ((bH * cq) - 20);
                co = cp * cr
            } else {
                cr = 1;
                cl = cn;
                co = cp
            }
        }
        var cm = '<div id="pipimage" style="background-image: url(' + TSC.xmp.getTocImageSrc() + ");background-repeat:no-repeat;background-size:contain;width: " + co + "px;height: " + cl + "px;border: 1px solid #FFFFFF;margin-left: " + ((bH - co) / 2) + "px;margin-right:" + ((bH - co) / 2) + 'px;margin-top: 10px;margin-bottom:  10px;"></div>';
        $(cm).prependTo($("#videoSidebarHead"));
        $("#videoSidebarHead").prepend(TSC.xmp.getTocTitle());
        Y()
    }
    function au(cl) {
        if (cl) {
            cd.show();
            z(false)
        } else {
            cd.hide();
            if (!aO) {
                z(true)
            }
        }
    }
    function W(co) {
        bS = false;
        if (TSC.deviceInfo.isTouchInterface() && aQ) {
            return
        }
        co.stopImmediatePropagation();
        co.preventDefault();
        var cl = $(this).attr("data-time");
        var cm = $(this).attr("data-file");
        if (cm !== undefined) {
            bm();
            var cn = TSC.mediaList.getVideoIndexBySrc(cm);
            if (cn === TSC.mediaList.currentVideoIndex()) {
                k(cl)
            } else {
                TSC.mediaList.setCurrentVideo(cn);
                N()
            }
            af(cn + 1)
        } else {
            bm();
            k(cl)
        }
    }
    function bh() {
        if (bF) {
            au(true)
        } else {
            au(false)
        }
        if (TSC.playerConfiguration.getIsSearchable()) {
            F.keyup(function() {
                if (F.val() != "") {
                    bw.hide();
                    $("#searchList").remove();
                    $("#videoSidebarContent").append("<ol id='searchList' ></ol>");
                    d(TSC.xmp.getTocItemArray());
                    d(TSC.xmp.getCaptionItemArray());
                    bW(TSC.xmp.getScreenTextItemArray());
                    if (TSC.xmp.getCaptionItemArray().length < 1 && TSC.xmp.getScreenTextItemArray().length > 0) {
                        bW(TSC.xmp.getScreenTextItemArray())
                    }
                    $("#searchList").show()
                } else {
                    ag()
                }
            });
            bA.click(function() {
                F.val("");
                ag()
            })
        } else {
            $("#searchArea").remove()
        }
        if (TSC.xmp.getTocImageSrc()) {
            b3 = new Image();
            b3.onload = bx;
            b3.src = TSC.xmp.getTocImageSrc()
        } else {
            $("#videoSidebarHead").prepend(TSC.xmp.getTocTitle())
        }
        if (TSC.xmp.tocContainsThumbs()) {
            bJ(TSC.xmp.getTocThumbImageSrc())
        } else {
            cg()
        }
        if (TSC.deviceInfo.isTouchInterface()) {
            br = "touchend";
            aQ = false
        } else {
            $("#videoSidebarContent ol li").live(br, W)
        }
    }
    function a5(cn) {
        var cm;
        bK = true;
        if (!TSC.deviceInfo.isTouchInterface()) {
            window.clearTimeout(ak)
        }
        if (aY[0].paused) {
            cm = false
        } else {
            cm = true;
            aY[0].pause()
        }
        bP();
        if (TSC.deviceInfo.isTouchInterface()) {
            ab(cn.originalEvent.touches[0].clientX);
            document.ontouchmove = function(co) {
                co.preventDefault();
                ab(co.pageX)
            };
            document.ontouchend = cl
        } else {
            document.onmousemove = function(co) {
                ab(co.pageX)
            };
            document.onmouseup = cl
        }
        function cl(co) {
            if (bK && !TSC.deviceInfo.isTouchInterface() && TSC.playerConfiguration.getAutoHideControls()) {
                bs()
            }
            bK = false;
            p();
            if (TSC.deviceInfo.isTouchInterface()) {
                document.ontouchmove = null;
                document.ontouchend = null
            } else {
                document.onmousemove = null;
                document.onmouseup = null
            }
            if (cm && !bp) {
                aY[0].play()
            }
            aa()
        }}
    function bU() {
        aY.bind("timeupdate", function() {
            I()
        });
        aY.bind("progress", function() {
            M()
        });
        aY.bind("durationchange", function() {
            M();
            if (aX) {
                window.clearInterval(aX)
            }
            aX = window.setInterval(M, 1000)
        });
        if (!TSC.deviceInfo.isTouchInterface()) {
            am.bind("mousedown", a5);
            am.bind("mouseup", function(cl) {
                ab(cl.originalEvent.pageX)
            })
        }
    }
    function M() {
        if (aY && aY.length > 0) {
            var cm = 0;
            if (aY[0].buffered && aY[0].buffered.length) {
                for (var cl = 0; cl < aY[0].buffered.length; cl++) {
                    cm = Math.ceil(((aY[0].buffered.end(cl) / aY[0].duration) * 100))
                }
            }
            $("#load_progress").css("width", cm + "%");
            if (cm === 100) {
                if (aX) {
                    window.clearInterval(aX)
                }
            }
        }
    }
    function bP() {
        document.body.focus();
        document.onselectstart = function() {
            return false
        }
    }
    function p() {
        document.onselectstart = function() {
            return true
        }
    }
    function k(cr, cq) {
        if (cq === undefined) {
            cq = false
        }
        try {
            var cl = false;
            for (var cn = 0; cn < aY[0].seekable.length; cn++) {
                var co = aY[0].seekable.start(cn);
                var cm = aY[0].seekable.end(cn);
                if (cr >= co && cr <= cm) {
                    cl = true
                }
            }
            if (cl) {
                if (!m) {
                    aY[0].currentTime = cr;
                    I()
                } else {
                    aE = cr
                }
            } else {
                if (cq) {
                    setTimeout(function() {
                        k(cr, true)
                    }, 100)
                }
            }
        } catch (cp) {
            if (cq) {
                setTimeout(function() {
                    k(cr, true)
                }, 100)
            }
        }
    }
    function ab(cq) {
        bm();
        var cl = Math.max(0, Math.min(1, (cq - am.position().left) / am[0].offsetWidth));
        var co = cl * (am[0].offsetWidth - 2);
        if (O.length > 0) {
            var cp = P.offset().left;
            var cn = O.width();
            var cm = co - Math.floor(cn / 2);
            O.css("left", cm + 1)
        }
        P.width(co);
        bS = false;
        k(Number(cl * aY[0].duration));
        ac()
    }
    function I() {
        P.width((aY[0].currentTime / aY[0].duration) * (am[0].offsetWidth - 2));
        var cn = P.offset().left;
        var cm = (aY[0].currentTime / aY[0].duration) * (am[0].offsetWidth - 2);
        if (O.length > 0) {
            var cl = O.width();
            O.css("left", cm - Math.floor(cl / 2))
        }
        ac()
    }
    function ac() {
        r[0].innerHTML = j(aY[0].currentTime);
        if (aY[0].duration) {
            bb[0].innerHTML = j(aY[0].duration)
        }
    }
    function j(cm) {
        cm = Math.round(cm);
        var cl = Math.floor(cm / 60);
        cl = (cl >= 10) ? cl : "0" + cl;
        cm = Math.floor(cm % 60);
        cm = (cm >= 10) ? cm : "0" + cm;
        return cl + ":" + cm
    }
    function aA(cm, co) {
        var cl = 100;
        try {
            cl = localStorage.getItem("volume") == undefined ? 100 : localStorage.getItem("volume")
        } catch (cn) {
        }
        cm.slider({orientation: co, range: "min", min: 0, max: 100, value: cl, slide: function(cp, cq) {
                a3.removeClass("volume_button_high_normal");
                a3.removeClass("volume_button_med_normal");
                a3.removeClass("volume_button_low_normal");
                a3.removeClass("volume_button_normal");
                a3.removeClass("unmute_button_normal");
                if (cq.value > 70) {
                    a3.addClass("volume_button_high_normal")
                } else {
                    if (cq.value > 30) {
                        a3.addClass("volume_button_med_normal")
                    } else {
                        if (cq.value > 0) {
                            a3.addClass("volume_button_low_normal")
                        } else {
                            a3.addClass("unmute_button_normal")
                        }
                    }
                }
                bT(cq.value / 100);
                try {
                    localStorage.setItem("volume", cq.value)
                } catch (cr) {
                }
            }});
        try {
            bT(localStorage.getItem("volume") == undefined ? 100 : localStorage.getItem("volume") / 100)
        } catch (cn) {
        }
    }
    function aI() {
        be.show(bX)
    }
    function ci() {
        if (aU !== -1) {
            clearTimeout(aU);
            aU = -1
        }
        be.unbind("mouseenter");
        be.unbind("mouseleave");
        be.hide(bX)
    }
    function a8() {
        if (bG && bF) {
            $(this).removeClass("toc_off_button_normal");
            $(this).addClass("toc_button_normal");
            au(false)
        }
        $("#hotspotContainer").hide();
        if (TSC.playerConfiguration.getDebugHotspot()) {
            $("#hotspotContainerDebug").hide()
        }
        l.show()
    }
    function ck(cl, cm) {
        b1 = false;
        bS = false;
        l.hide();
        b8.css("visibility", "visible");
        bm();
        if (!TSC.deviceInfo.isTouchInterface()) {
            C()
        }
        if (!TSC.mediaList.isPlaylist()) {
            k(cl)
        }
        if (cm) {
            if (TSC.mediaList.isPlaylist()) {
                TSC.mediaList.setCurrentVideo(0);
                af(TSC.mediaList.currentVideoIndex() + 1);
                N()
            } else {
                aY[0].play()
            }
        }
        $("#hotspotContainer").show();
        if (TSC.playerConfiguration.getDebugHotspot()) {
            $("#hotspotContainerDebug").show()
        }
        if (TSC.xmp.hasCaptionItems() && TSC.xmp.getCaptionPosition() === "under") {
            V.show();
            bp = false;
            b0()
        }
    }
    function aw() {
        if (Math.floor(aY[0].currentTime) < Math.floor(aY[0].duration)) {
            if (aX) {
                window.clearInterval(aX)
            }
            var cn = q.getString("videoFailedToLoad");
            if (!TSC.deviceInfo.isIPad() || TSC.deviceInfo.isAndroid()) {
                cn = q.getString("videoFailedToLoadUseFlash")
            }
            L(undefined, cn, false);
            return
        }
        if (TSC.mediaList.isPlaylist() && !TSC.mediaList.onLastVideo()) {
            bq = true;
            TSC.mediaList.setCurrentVideo("next");
            af(TSC.mediaList.currentVideoIndex() + 1);
            N()
        } else {
            if (!TSC.deviceInfo.isTouchInterface()) {
                t()
            }
            aY[0].pause();
            g.removeClass("pause_normal");
            g.addClass("play_normal");
            setTimeout(bg, 1000);
            var cl = false;
            var cm = true;
            var co = false;
            var cq = true;
            if (TSC.playerConfiguration.getEndActionType() != undefined) {
                var cp = TSC.playerConfiguration.getEndActionParam();
                switch (TSC.playerConfiguration.getEndActionType().toLowerCase()) {
                    case"loop":
                        cl = (cp === "true" || cp === "1") ? true : false;
                        break;
                    case"stop":
                        cm = (cp === "false" || cp === "0") ? false : true;
                        break;
                    case"jumptotime":
                        co = true;
                        break;
                    case"jumptotimeandstop":
                        cq = false;
                        co = true;
                        break;
                    case"jumptourl":
                        if (TSC.playerConfiguration.getTrackEvents()) {
                            aS("Video_Finished_Action", cp)
                        }
                        if (TSC.deviceInfo.isNuevoApp()) {
                            setTimeout(function() {
                                window.open("" + cp, "_parent")
                            }, 500)
                        } else {
                            window.open("" + cp, "_parent")
                        }
                        break;
                    case"jumptourlnew":
                        if (TSC.playerConfiguration.getTrackEvents()) {
                            aS("Video_Finished_Action", cp)
                        }
                        window.open("" + cp, "_blank");
                        break
                }
            }
            if (cl) {
                ck(0, true)
            } else {
                if (co) {
                    ck((cp / 1000), cq)
                } else {
                    if (cm) {
                        if (aM) {
                            document.webkitCancelFullScreen()
                        }
                        if (!TSC.deviceInfo.isTouchInterface()) {
                            aL()
                        }
                        bu();
                        a8();
                        if (TSC.xmp.hasCaptionItems() && TSC.xmp.getCaptionPosition() === "under") {
                            V.hide();
                            b0()
                        }
                    } else {
                        bS = true
                    }
                }
            }
        }
    }
    function a0() {
        bn = !bn;
        if (ar.hasClass("tscplayer_inline")) {
            $("#fullscreen_enter_button").removeClass("fullframe_enter_button_normal");
            $("#fullscreen_enter_button").addClass("fullframe_leave_button_normal");
            cf = window.parent.scrollY || window.top.pageYOffset;
            window.parent.scrollTo(0, 0);
            $("html", window.parent.document).css("overflow", "hidden");
            if (TSC.deviceInfo.isIPad() || TSC.deviceInfo.isAndroid()) {
                if (T) {
                    $("#searchBox").blur();
                    setTimeout(aZ, 100)
                } else {
                    aZ()
                }
            } else {
                ar.removeClass("tscplayer_inline");
                ar.attr("width", "100%");
                ar.attr("height", "100%");
                ar.addClass("tscplayer_fullframe")
            }
        } else {
            $("#fullscreen_enter_button").removeClass("fullframe_leave_button_normal");
            $("#fullscreen_enter_button").addClass("fullframe_enter_button_normal");
            $("html", window.parent.document).css("overflow", "auto");
            ar.removeClass("tscplayer_fullframe");
            ar.removeAttr("width");
            ar.removeAttr("height");
            ar.addClass("tscplayer_inline");
            if (TSC.deviceInfo.isIPad() || TSC.deviceInfo.isAndroid()) {
                clearTimeout(bf);
                aG();
                b0()
            }
            window.top.scrollTo(0, cf)
        }
    }
    function at() {
        $("#hotspotContainer").unbind("touchstart");
        $("#hotspotContainer").unbind("touchmove");
        $("#hotspotContainer").unbind("touchend");
        $("#videoDiv").unbind("touchstart");
        $("#videoDiv").unbind("touchmove");
        $("#videoDiv").unbind("touchend");
        am.unbind("touchstart");
        $("#videoSidebarContent ol li").die("touchstart");
        $("#videoSidebarContent ol li").die("touchmove");
        $("#videoSidebarContent ol li").die(br, W)
    }
    function e() {
        var cl = false;
        $("#hotspotContainer").bind("touchstart", function(cm) {
            cl = false
        });
        $("#hotspotContainer").bind("touchmove", function() {
            cl = true
        });
        $("#hotspotContainer").bind("touchend", function(cm) {
            if (!cl) {
                if (aO) {
                    b2()
                } else {
                    bu()
                }
            }
            cl = false
        });
        $("#videoDiv").bind("touchstart", function(cm) {
            cl = false
        });
        $("#videoDiv").bind("touchmove", function() {
            cl = true
        });
        $("#videoDiv").bind("touchend", function() {
            if (!cl) {
                if (aO) {
                    b2()
                } else {
                    bu()
                }
            }
            cl = false
        });
        am.bind("touchstart", a5);
        $("#videoSidebarContent ol li").live("touchstart", function(cm) {
            aQ = false
        });
        $("#videoSidebarContent ol li").live("touchmove", function(cm) {
            aQ = true
        });
        $("#videoSidebarContent ol li").live(br, W)
    }
    function aP() {
        if (TSC.playerConfiguration.getAllowRewind() !== -1) {
            w.click(function() {
                bS = false;
                var cl = Number(aY[0].currentTime) - TSC.playerConfiguration.getAllowRewind();
                k(Number(cl))
            })
        } else {
            w.hide()
        }
        g.click(function(cl) {
            if (aY[0].paused) {
                if (bS) {
                    ad()
                } else {
                    aY[0].play()
                }
            } else {
                aY[0].pause()
            }
            cl.preventDefault()
        });
        bo.click(function(cl) {
            if (!TSC.mediaList.onFirstVideo()) {
                TSC.mediaList.setCurrentVideo("previous");
                af(TSC.mediaList.currentVideoIndex() + 1);
                N()
            }
            cl.preventDefault()
        });
        D.click(function(cl) {
            if (!TSC.mediaList.onLastVideo()) {
                TSC.mediaList.setCurrentVideo("next");
                af(TSC.mediaList.currentVideoIndex() + 1);
                N()
            }
            cl.preventDefault()
        });
        aY.bind("play", function() {
            g.removeClass("play_button_normal");
            g.addClass("pause_button_normal")
        });
        aY.bind("pause", function() {
            g.removeClass("pause_button_normal");
            g.addClass("play_button_normal")
        });
        aY.bind("ended", function() {
            if (bK) {
                return
            }
            aa();
            if (TSC.playerConfiguration.getTrackEvents()) {
                if (TSC.playerConfiguration.getAltEventCategoryAsFilename()) {
                    aS("Video_Finished", a9)
                } else {
                    aS("Video_Finished", TSC.mediaList.currentVideoSrc().toString())
                }
            }
        });
        l.click(function() {
            ad()
        });
        bU();
        a3.mouseover(function() {
            if (aU != -1) {
                clearTimeout(aU);
                aU = -1
            }
            aI()
        });
        a3.mouseout(function() {
            if (ce.length > 0) {
                be.bind("mouseenter", function() {
                    if (aU != -1) {
                        clearTimeout(aU);
                        aU = -1
                    }
                });
                be.bind("mouseleave", function() {
                    aU = setTimeout(function() {
                        ci();
                        aU = -1
                    }, 1000)
                });
                if (aU != -1) {
                    clearTimeout(aU);
                    aU = -1
                }
                aU = setTimeout(function() {
                    ci();
                    aU = -1
                }, 1000)
            }
        });
        a3.click(function() {
            var cl;
            ca = !ca;
            if (ca) {
                bB = aY[0].volume;
                cl = 0;
                ce.slider("value", [0])
            } else {
                cl = bB;
                ce.slider("value", [bB * 100])
            }
            a3.removeClass("volume_button_high_normal");
            a3.removeClass("volume_button_med_normal");
            a3.removeClass("volume_button_low_normal");
            a3.removeClass("volume_button_normal");
            a3.removeClass("unmute_button_normal");
            if (cl > 0.7) {
                a3.addClass("volume_button_high_normal")
            } else {
                if (cl > 0.3) {
                    a3.addClass("volume_button_med_normal")
                } else {
                    if (cl > 0) {
                        a3.addClass("volume_button_low_normal")
                    } else {
                        a3.addClass("unmute_button_normal")
                    }
                }
            }
            bT(cl)
        });
        if (ah.length > 0) {
            aA(ah, "horizontal");
            be.show()
        } else {
            aA(ce, "vertical")
        }
        if (TSC.xmp.hasCaptionItems()) {
            if (TSC.xmp.getCaptionPosition() === "under") {
                a7 = true;
                V.css("background", TSC.xmp.getCaptionBg());
                V.css("padding", "0");
                V.addClass("captionUnderVideo");
                bY()
            } else {
                aB.click(function() {
                    a7 = !a7;
                    if (a7) {
                        $(this).removeClass("closed_caption_off_button_normal");
                        $(this).addClass("closed_caption_button_normal");
                        V.removeClass("hide");
                        bY()
                    } else {
                        $(this).removeClass("closed_caption_button_normal");
                        $(this).addClass("closed_caption_off_button_normal");
                        V.addClass("hide")
                    }
                })
            }
        }
        av.click(function(cm) {
            if (bC) {
                a0()
            } else {
                if (!aM) {
                    var cl = document.getElementById("tscVideoContent");
                    if (TSC.deviceInfo.supportsFullScreenKeyboardInput()) {
                        cl.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                    } else {
                        if (bG && TSC.playerConfiguration.getIsSearchable()) {
                            $("#searchArea").hide();
                            $("#videoSidebarHead").append("<div id='fsSearchAlert'>" + q.getString("searchDisabledFullScreen") + "</div>")
                        }
                        cl.webkitRequestFullScreen()
                    }
                } else {
                    if (TSC.playerConfiguration.getIsSearchable()) {
                        ax()
                    }
                    document.webkitCancelFullScreen()
                }
            }
            cm.preventDefault()
        });
        if (bG) {
            S.click(function() {
                bF = !bF;
                if (bF) {
                    $(this).removeClass("toc_off_button_normal");
                    $(this).addClass("toc_button_normal")
                } else {
                    $(this).removeClass("toc_button_normal");
                    $(this).addClass("toc_off_button_normal")
                }
                if (cd.css("display") === "none") {
                    au(true);
                    Y()
                } else {
                    au(false)
                }
            });
            if (TSC.playerConfiguration.getSidebarEnabled()) {
                bF = true;
                S.removeClass("toc_off_button_normal");
                S.addClass("toc_button_normal");
                au(true)
            } else {
                S.removeClass("toc_button_normal");
                S.addClass("toc_off_button_normal")
            }
        }
        if (TSC.deviceInfo.isIPad() || TSC.deviceInfo.isAndroid()) {
            $("textarea").live("blur", function() {
                bQ = false;
                e();
                if (bn) {
                    bl()
                }
            });
            $("textarea").live("focus", function() {
                bQ = true;
                at();
                if (bn) {
                    aG()
                }
            });
            $("input:text").live("blur", function() {
                bQ = false;
                e();
                if (bn) {
                    bl()
                }
            });
            $("input:text").live("focus", function() {
                bQ = true;
                at();
                if (bn) {
                    aG()
                }
            });
            window.parent.onorientationchange = function() {
                if (bn) {
                    if (T) {
                        $("#searchBox").blur();
                        setTimeout(aq, 500)
                    } else {
                        aq()
                    }
                }
            }
        } else {
            C()
        }
        if (TSC.playerConfiguration.getDisableControls()) {
            bu()
        }
    }
    function b9(cl) {
        if (!TSC.deviceInfo.isTouchInterface() && TSC.playerConfiguration.getAutoHideControls()) {
            ai()
        } else {
            b2()
        }
        ck(cl, true);
        if (TSC.playerConfiguration.getTrackEvents()) {
            if (TSC.playerConfiguration.getAltEventCategoryAsFilename()) {
                aS("Video_Replay", a9)
            } else {
                aS("Video_Replay", TSC.mediaList.currentVideoSrc().toString())
            }
        }
    }
    function ad() {
        b9(0)
    }
    function B() {
        if (window.parent.scrollX > 0 || window.parent.scrollY > 0) {
            if (bQ) {
                window.parent.scrollTo(0, window.parent.scrollY)
            } else {
                var cl = window.parent.scrollY - 50;
                cl < 0 ? 0 : cl;
                window.parent.scrollTo(0, cl)
            }
        }
        bf = setTimeout(B, 10)
    }
    function aG() {
        $(document).unbind("touchmove");
        $(document).unbind("gesturestart");
        $(window.parent).unbind("gesturestart");
        $(document).unbind("gestureend");
        $(window.parent).unbind("gestureend")
    }
    function bl() {
        $(document).bind("touchmove", function(cl) {
            if (!(($.contains(bw[0], cl.target)) || (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled() && TSC.quizController.viewOpen()))) {
                cl.preventDefault()
            }
        });
        $(document).bind("gesturestart", function(cl) {
            cl.preventDefault()
        });
        $(window.parent).bind("gesturestart", function(cl) {
            cl.preventDefault()
        });
        $(document).bind("gestureend", function(cl) {
            a0()
        });
        $(window.parent).bind("gestureend", function(cl) {
            a0()
        })
    }
    function aZ() {
        B();
        bl();
        ar.removeClass("tscplayer_inline");
        ar.attr("width", window.parent.innerWidth);
        ar.attr("height", window.parent.innerHeight);
        ar.addClass("tscplayer_fullframe");
        b0()
    }
    function aq() {
        if (window != window.top) {
            window.parent.scrollTo(0, 0)
        } else {
            window.scrollTo(0, 0)
        }
        ar.attr("width", window.parent.innerWidth);
        ar.attr("height", window.parent.innerHeight);
        b0()
    }
    function ai() {
        if (TSC.deviceInfo.isTouchInterface() || (TSC.xmp.hasCaptionItems() && TSC.xmp.getCaptionPosition() === "under")) {
            return
        }
        $(by).hover(b2, bu);
        var cl = null;
        $(by).bind("mousemove", function(cm) {
            if (cl == null || (cl.pageX != cm.pageX && cl.pageY != cm.pageY)) {
                cl = cm;
                b2(true)
            }
        });
        bs()
    }
    function aL() {
        window.clearTimeout(ak);
        $(by).unbind("mousemove");
        $(by).unbind("mouseenter mouseleave")
    }
    function bu() {
        z(false);
        if (T || bK) {
            return
        }
        aO = true;
        i.stop(true, true);
        i.fadeOut(s);
        if (bF) {
            cd.stop(true, true);
            cd.fadeOut(s)
        }
        if (aU !== -1) {
            ci()
        }
    }
    function b2(cl) {
        if (TSC.playerConfiguration.getDisableControls()) {
            return
        }
        if (aO) {
            aO = false;
            i.stop(true, true);
            i.fadeIn(s);
            if (bF) {
                cd.stop(true, true);
                cd.fadeIn(s)
            } else {
                z(true)
            }
            if (cl) {
                I()
            }
            if (bq) {
                bq = false;
                b0()
            }
        }
        if (cl) {
            bs()
        }
    }
    function z(cl) {
        if (TSC.deviceInfo.isNuevoApp()) {
            if (cl) {
                document.location = "nuevo://shownavbar"
            } else {
                document.location = "nuevo://hidenavbar"
            }
        }
    }
    function bg() {
        if (TSC.deviceInfo.isNuevoApp()) {
            var cl = document.location;
            document.location = "nuevo://hasPlayedToEnd?url=" + cl
        }
    }
    function bs() {
        window.clearTimeout(ak);
        ak = window.setTimeout(bu, A)
    }
    function J(cn) {
        var cp = TSC.xmp.getHotspotItemArray();
        var cl = Number($(cn.target).attr("hotspot_index"));
        if (cp[cl].jumpFile !== undefined) {
            var co = TSC.mediaList.getVideoIndexBySrc(cp[cl].jumpFile);
            TSC.mediaList.setCurrentVideo(co);
            af(TSC.mediaList.currentVideoIndex() + 1);
            N()
        } else {
            if (cp[cl].jumpTime !== "") {
                bS = false;
                bm();
                k(Number(cp[cl].jumpTime));
                aY[0].play()
            } else {
                if (cp[cl].targetURL !== "") {
                    if (TSC.playerConfiguration.getTrackEvents()) {
                        aS("Hotspot_Action", cp[cl].targetURL)
                    }
                    var cm = "_parent";
                    if (cp[cl].newWindow !== undefined && cp[cl].newWindow === true) {
                        cm = "_blank"
                    }
                    window.open(cp[cl].targetURL, cm)
                } else {
                    aY[0].play()
                }
            }
        }
    }
    function G() {
        var cl = Math.round(Number(TSC.xmp.getCaptionFontSize()) * az);
        cl = cl < TSC.xmp.getMinCaptionFontSize() ? TSC.xmp.getMinCaptionFontSize() : cl;
        cl = cl > TSC.xmp.getMaxCaptionFontSize() ? TSC.xmp.getMaxCaptionFontSize() : cl;
        $("#currentCaption").css("font-size", cl)
    }
    function b5() {
        if (TSC.videoAnalytics.isEnabled()) {
            TSC.videoAnalytics.setVideoLoadEndTime(new Date().getTime());
            if (TSC.playerConfiguration.getTrackEvents()) {
                if (TSC.playerConfiguration.getAltEventCategoryAsFilename()) {
                    if (TSC.playerConfiguration.getAltLoadTimeAsSeconds()) {
                        aS("Video_Loading_Time_In_Seconds", a9, TSC.videoAnalytics.getVideoLoadTime() / 1000)
                    } else {
                        aS("Video_Loading_Time", a9, TSC.videoAnalytics.getVideoLoadTime())
                    }
                } else {
                    if (TSC.playerConfiguration.getAltLoadTimeAsSeconds()) {
                        aS("Video_Loading_Time_In_Seconds", TSC.mediaList.currentVideoSrc().toString(), TSC.videoAnalytics.getVideoLoadTime() / 1000)
                    } else {
                        aS("Video_Loading_Time", TSC.mediaList.currentVideoSrc().toString(), TSC.videoAnalytics.getVideoLoadTime())
                    }
                }
            }
        }
        ae = true
    }
    function aF(cl) {
        m = true
    }
    function bO(cl) {
        m = false;
        if (aE > -1) {
            k(aE);
            aE = -1
        }
    }
    function aH(cm) {
        aY.unbind("playing");
        if (TSC.playerConfiguration.getURLParams().t) {
            var cl = bR(TSC.playerConfiguration.getURLParams().t);
            if (cl < aY[0].duration) {
                k(Number(cl), true)
            }
        }
        if (TSC.playerConfiguration.getDebugUIMode() && bt) {
            bt.call(this)
        }
    }
    function v() {
        if (TSC.xmp.hasHotspotItems()) {
            if (TSC.playerConfiguration.getDebugHotspot()) {
                $("#hotspotContainerDebug").css("display", "block")
            }
        }
        if (TSC.xmp.hasCaptionItems()) {
            $("#currentCaption").css("font-family", TSC.xmp.getCaptionFontFamily());
            $("#currentCaption").css("color", TSC.xmp.getCaptionTextColor());
            G();
            a7 = TSC.playerConfiguration.getCaptionsEnabled()
        }
        if (TSC.playerConfiguration.getTrackEvents() || TSC.xmp.hasCaptionItems() || TSC.xmp.hasHotspotItems() || (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) || TSC.playerConfiguration.getReportScormComplete()) {
            aY.bind("timeupdate", aa)
        }
    }
    function bI(cl, cq, cp, cs, co) {
        if (!cp) {
            cp = TSC.playerConfiguration.getPlayerWidth()
        }
        if (!cs) {
            cs = TSC.playerConfiguration.getPlayerHeight()
        }
        if (!co) {
            co = false
        }
        var cn = '<video width="' + cp + '" height="' + cs + '"';
        if (co && TSC.playerConfiguration.getPosterImageSrc()) {
            cn += ' poster="' + TSC.playerConfiguration.getPosterImageSrc() + '"'
        }
        if (cq) {
            cn += " controls"
        }
        if (TSC.deviceInfo.isNuevoApp()) {
            cn += " webkit-playsinline"
        }
        cn += ">";
        var cr = cl.length;
        for (var cm = 0; cm < cr; cm++) {
            cn += '<source src="' + cl[cm] + '" type="' + TSC.mediaList.getMediaMimeType(cl[cm]) + '" />'
        }
        cn += TSC.playerConfiguration.getUnableToDisplayContentString() + "</video>";
        return cn
    }
    function b4(cm) {
        if (h.viewOpen()) {
            h.setViewMessage(cm)
        } else {
            var cl = h.getViewMarkup(cm);
            $(by).append(cl);
            h.showView()
        }
    }
    function X() {
        if (h.viewOpen()) {
            h.removeView()
        }
    }
    function a2() {
        $("#videoClickToPlay").hide();
        TSC.quizController.init(TSC.playerConfiguration.getEnforceLinearAssessment())
    }
    function bj() {
        var cm = bI(TSC.mediaList.currentVideoSrc(), false);
        $("#videoDiv").html(cm);
        aY = $("video");
        aY[0].addEventListener("loadedmetadata", E, false);
        aY.bind("playing", aH);
        aY.bind("canplay", b5);
        aY.bind("seeking", aF);
        aY.bind("seeked", bO);
        if (TSC.playerConfiguration.getPosterImageSrc()) {
            bc()
        }
        $("#videoClickToPlay").hide();
        $("#videoWrapper").show();
        v();
        aP();
        if (bG) {
            bh()
        }
        if (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) {
            var cl = $("<div/>");
            cl.addClass("quizMarker");
            $(by).append(cl);
            TSC.quizMarker.setSize($(".quizMarker").css("width").replace(/px/g, ""));
            TSC.quizMarker.setColor($(".quizMarker").css("color"));
            $("#markers").show()
        }
        bq = true;
        b0();
        if (cj) {
            cj.call()
        }
        i.hide();
        b4(q.getString("videoLoading"));
        N()
    }
    function N() {
        b1 = false;
        bS = false;
        if (TSC.mediaList.isPlaylist()) {
            if (TSC.mediaList.onFirstVideo()) {
                bo.removeClass("previous_button_normal");
                bo.addClass("previous_button_disabled")
            } else {
                bo.addClass("previous_button_normal");
                bo.removeClass("previous_button_disabled")
            }
            if (TSC.mediaList.onLastVideo()) {
                D.removeClass("next_button_normal");
                D.addClass("next_button_disabled")
            } else {
                D.addClass("next_button_normal");
                D.removeClass("next_button_disabled")
            }
            if (TSC.videoAnalytics.isEnabled()) {
                TSC.videoAnalytics.clearPercentWatched();
                R = 0
            }
            aY[0].src = TSC.mediaList.currentVideoSrc()
        }
        if (TSC.deviceInfo.isIPad() || TSC.deviceInfo.isAndroid()) {
            aY[0].play()
        } else {
            aY[0].load();
            aY[0].play()
        }
        if (TSC.videoAnalytics.isEnabled()) {
            TSC.videoAnalytics.setVideoLoadStartTime(new Date().getTime())
        }
        if (TSC.playerConfiguration.getTrackEvents() && aJ) {
            aJ = false;
            if (TSC.playerConfiguration.getAltEventCategoryAsFilename()) {
                aS("Video_Started", a9)
            } else {
                aS("Video_Started", TSC.mediaList.currentVideoSrc().toString())
            }
            aS("Video_Percent_Viewed", "Viewed: 0 Percent")
        }
    }
    function bV(cm) {
        switch (cm.type) {
            case"COMPLETE":
            case"REVIEW":
                if (cd && bF) {
                    au(true)
                } else {
                    z(true)
                }
                if (!TSC.deviceInfo.isTouchInterface()) {
                    C();
                    if (TSC.playerConfiguration.getAutoHideControls()) {
                        ai()
                    }
                }
                an();
                if (cm.type === "REVIEW" && TSC.playerConfiguration.getEnforceLinearAssessment()) {
                    var cl = TSC.quizController.findPrevMarkerTimeForMarker(a4);
                    a4 = -1;
                    k(cl / 1000);
                    aY[0].play()
                } else {
                    aY[0].play()
                }
                break;
            case"BEGIN":
            case"SKIP":
                TSC.quizController.setViewContainer("#videoWrapper");
                $("#videoClickToPlayLink").unbind("click", a2);
                if (!aY) {
                    bj()
                } else {
                    if (bk && TSC.quizController.getQuizReady()) {
                        bv();
                        aY[0].play();
                        bq = true;
                        b0()
                    }
                }
                break;
            case"ERROR":
                if (!aY) {
                    bj()
                }
                L("#videoWrapper", TSC.localizationStrings.getString("txtErrorMessage"), true);
                break;
            case"STATUS":
                b4(cm.message);
                break
        }
    }
    function Z(cn, cl) {
        by = cn;
        bG = cl;
        $(by).html(bN);
        $(by).css("background-color", TSC.playerConfiguration.getBackgroundColor());
        if (TSC.playerConfiguration.getPosterImageSrc()) {
            f(TSC.playerConfiguration.getPosterImageSrc())
        }
        $(by).fadeIn(s);
        $("#videoClickToPlay").fadeIn(s);
        w = $("#rewind");
        g = $("#play");
        bo = $("#previous");
        D = $("#next");
        bM = $("#progress");
        am = $("#progress_box");
        i = $("#controls");
        P = $("#play_progress");
        r = $("#current_time_display");
        bb = $("#duration_display");
        cd = $("#videoSidebar");
        a3 = $("#volume");
        V = $("#currentCaption");
        aB = $("#closedCaptionButton");
        b8 = $("#videoWrapper");
        l = $("#videoClickToReplay");
        F = $("#searchBox");
        bA = $("#clearSearchButton");
        bw = $("#tableOfContentsList");
        av = $("#fullscreen_enter_button");
        S = $("#tocButton");
        ce = $("#volume_slider_vertical");
        ah = $("#volume_slider_horizontal");
        be = $("#volume_slider_container");
        O = $("#scrubbar_scrubber");
        if (TSC.deviceInfo.isIPad() || TSC.deviceInfo.isAndroid()) {
            a3.hide();
            av.hide()
        }
        if (bG) {
            S.show()
        }
        if (TSC.xmp.hasCaptionItems()) {
            if (TSC.xmp.getCaptionPosition() === "under") {
                TSC.playerConfiguration.setAutoHideControls(false)
            } else {
                aB.show()
            }
        }
        if (!TSC.mediaList.isPlaylist()) {
            bo.hide();
            D.hide()
        }
        b0();
        $(window).resize(function() {
            bq = true;
            b0()
        });
        F.focus(function() {
            T = true;
            if (F.val() == q.getString("search")) {
                F.val("")
            }
            if (!TSC.deviceInfo.isTouchInterface()) {
                t();
                window.clearTimeout(ak)
            }
        });
        F.blur(function() {
            T = false;
            if (F.val().replace(/ /g, "") === "") {
                F.val(q.getString("search"))
            }
            if (!TSC.deviceInfo.isTouchInterface()) {
                C();
                if (TSC.playerConfiguration.getAutoHideControls()) {
                    bs()
                }
            }
        });
        F.val(q.getString("search"));
        var cm = TSC.deviceInfo.isIPad() && !TSC.deviceInfo.isNuevoApp();
        if ((cm || TSC.deviceInfo.isAndroid() || (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled())) && !TSC.playerConfiguration.getMobileWebViewCanAutoPlay()) {
            TSC.playerConfiguration.setAutoPlayMedia(false)
        }
        if (TSC.playerConfiguration.getAutoPlayMedia() === true) {
            setTimeout(bj, 80)
        } else {
            if (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) {
                $("#videoClickToPlayLink").bind("click", a2)
            } else {
                $("#videoClickToPlayLink").bind("click", bj)
            }
        }
        if (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) {
            TSC.quizController.setViewContainer(by);
            TSC.quizController.setQuestionData(TSC.quizModel);
            TSC.quizController.setViewControlBarOffset(i.height());
            TSC.quizController.addEventListener("COMPLETE", bV);
            TSC.quizController.addEventListener("REVIEW", bV);
            TSC.quizController.addEventListener("BEGIN", bV);
            TSC.quizController.addEventListener("SKIP", bV);
            TSC.quizController.addEventListener("ERROR", bV);
            TSC.quizController.addEventListener("STATUS", bV);
            if (TSC.playerConfiguration.getURLParams().t) {
                setTimeout(a2, 80)
            }
        } else {
            if (TSC.playerConfiguration.getURLParams().t) {
                setTimeout(bj, 80)
            }
        }
        if (TSC.playerConfiguration.getTrackEvents() || TSC.playerConfiguration.getReportScormComplete() || (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled())) {
            TSC.videoAnalytics.setEnabled(true);
            if (TSC.xmp.xmpAvailable()) {
                TSC.videoAnalytics.initPercentWatched(TSC.xmp.getMediaDuration())
            }
        }
        H = true;
        if (TSC.playerConfiguration.getDebugUIMode() && cc) {
            cc.call(this)
        }
    }
    function aT(cp) {
        var cl = {};
        cl.src = TSC.playerConfiguration.getUnicodeSafeString(TSC.playerConfiguration.getMediaSrc());
        if (TSC.playerConfiguration.getXMPSrc()) {
            cl.xmp = TSC.playerConfiguration.getXMPSrc()
        }
        if (TSC.playerConfiguration.getAutoPlayMedia()) {
            cl.autoPlayJS = TSC.playerConfiguration.getAutoPlayMedia()
        }
        if (TSC.playerConfiguration.getAllowRewind() !== -1) {
            cl.allowRewind = TSC.playerConfiguration.getAllowRewind()
        }
        if (TSC.playerConfiguration.getConfigurationSrc()) {
            cl.configuration = TSC.playerConfiguration.getConfigurationSrc()
        }
        cl.debugHotspots = TSC.playerConfiguration.getDebugHotspot();
        if (TSC.playerConfiguration.getPosterImageSrc()) {
            cl.poster = TSC.playerConfiguration.getPosterImageSrc()
        }
        cl.authoredLanguage = q.getLanguage();
        if (TSC.playerConfiguration.getGoogleAnalyticsID() && TSC.playerConfiguration.getGoogleAnalyticsID() != "") {
            cl.analytics = TSC.playerConfiguration.getGoogleAnalyticsID();
            if (!TSC.playerConfiguration.getGAEventTracking()) {
                cl.trackEvents = false
            }
            if (!TSC.playerConfiguration.getGAPageViewTracking()) {
                cl.trackPageViews = false
            }
        }
        if (TSC.playerConfiguration.getCustomEventTracking()) {
            cl.customEventTracking = true;
            cl.customEventJSCallback = TSC.playerConfiguration.getCustomEventCallback().name
        }
        cl.altEventCategoryAsFilename = TSC.playerConfiguration.getAltEventCategoryAsFilename();
        cl.altLoadTimeAsSeconds = TSC.playerConfiguration.getAltLoadTimeAsSeconds();
        cl.debugUI = TSC.playerConfiguration.getDebugUIMode();
        cl.advancedSeeking = TSC.playerConfiguration.getAdvancedSeeking();
        cl.enforceLinearAssessments = TSC.playerConfiguration.getEnforceLinearAssessment();
        cl.scormComplete = TSC.playerConfiguration.getReportScormComplete();
        cl.hostingPage = document.location;
        var cn = TSC.playerConfiguration.getMinFlashPlayerVersion();
        var co = {};
        co.quality = "high";
        co.bgcolor = "#000000";
        co.allowscriptaccess = "always";
        co.allowfullscreen = "true";
        co.wmode = "direct";
        co.allowNetworking = "all";
        if (TSC.playerConfiguration.getSwfBase() !== ".") {
            co.base = TSC.playerConfiguration.getSwfBase()
        }
        var cm = {};
        cm.id = "tscplayer";
        cm.name = "tscplayer";
        cm.align = "middle";
        swfobject.embedSWF(TSC.playerConfiguration.getFlashPlayerSwf(), cp.replace(/#/, ""), TSC.playerConfiguration.getPlayerWidth(), TSC.playerConfiguration.getPlayerHeight(), cn, TSC.playerConfiguration.getFlashUpdateBootstrapSwf(), cl, co, cm);
        swfobject.createCSS(cp, "display:block;text-align:left;");
        $(cp).show()
    }
    function L(cn, cm, cl) {
        cm = "<span>" + cm + "</span>";
        if (cl) {
            cm += "<h4>" + q.getString("clickToClose") + "</h4>"
        }
        if (H) {
            $("#alertDialog").html(cm);
            $("#alertDialog").fadeIn(s)
        } else {
            $(cn).css("background-color", TSC.playerConfiguration.getBackgroundColor());
            $(cn).css("height", "100%");
            $(cn).html('<div id="alertDialog">' + cm + "</div>");
            $(cn).fadeIn(s);
            $("#alertDialog").show()
        }
        if (cl) {
            $("#alertDialog").bind("click", function() {
                $("#alertDialog").hide();
                $("#alertDialog").unbind("click")
            })
        }
    }
    function bi() {
        var cl = "#000";
        if (TSC.playerConfiguration.getPosterImageSrc()) {
            cl += " url(" + TSC.playerConfiguration.getPosterImageSrc() + ") center no-repeat"
        }
        $(".appplayer").css({background: cl, position: "relative", "border-radius": "5px", "background-size": "cover", height: "100%", "z-index": "1"})
    }
    function aN() {
        var cl = '<div class="appplayer"><div class="posterFade"><div class="topBrdr"><div class="topBrdrInner"></div></div>                    <div class="content">                        <h2>' + q.getString("playWithSmartPlayer") + '</h2>                        <a class="appNuevoPlayBtn"></a>                        <a href="" class="appstoreBtn"></a>                    </div>                    <a class="appNativePlayBtn">                       <div class="appNativePlayBtnText">' + q.getString("playVideoOnly") + '</div>                    </a>                    <div class="btmBrdr"><div class="btmBrdrInner"></div></div>                </div>            </div>';
        return cl
    }
    function a(cl) {
        if (TSC.mediaPlayer.isNuevoAppCapableAndAvailable()) {
            $(cl).after(aN());
            bi();
            $(".appplayer").show();
            $(cl).hide();
            $(".appNuevoPlayBtn").click(function() {
                $(".appplayer").hide();
                $(cl).show();
                TSC.mediaPlayer.redirectToiPhoneApp()
            });
            $(".appNativePlayBtn").click(function() {
                $(".appplayer").hide();
                $(cl).show();
                aY = $("video");
                aY[0].play()
            });
            $(".appstoreBtn").click(function() {
                TSC.mediaPlayer.redirectToiPhoneAppDownload()
            });
            if (ar && ar !== "") {
                ar.removeClass(ap);
                ar.css("width", "500px");
                ar.css("height", "334px")
            }
        } else {
            $(cl).fadeIn(s)
        }
    }
    function bR(cm) {
        if (isNaN(cm)) {
            var cx = 0;
            var co = 0;
            var cp = 0;
            var cu = cm.toLowerCase();
            var cv = new RegExp("(\\d+[h])", "g");
            var cw = new RegExp("(\\d+[m])", "g");
            var cq = new RegExp("(\\d+[s])", "g");
            var cr = new RegExp("\\d+", "g");
            var cn = cu.match(cv);
            var ct = cu.match(cw);
            var cs = cu.match(cq);
            var cl = cu.match(cr);
            if (cs || ct || cn) {
                if (cn) {
                    cx = Number(cn[0].split("h").join("")) * 60 * 60
                }
                if (ct) {
                    co = Number(ct[0].split("m").join("")) * 60
                }
                if (cs) {
                    cp = Number(cs[0].split("s").join(""))
                }
                return Number(cx + co + cp)
            } else {
                if (cl) {
                    cp = Number(cl[0]);
                    return cp
                } else {
                    return 0
                }
            }
        } else {
            if (cm < 0) {
                cm = 0
            }
            return cm
        }
    }
    return{initHtml5View: function(cm, cl) {
            ar = TSC.playerConfiguration.getFrameElement();
            Z(cm, cl)
        }, initSimpleHtml5View: function(cs) {
            ar = TSC.playerConfiguration.getFrameElement();
            if (TSC.mediaList.isPlaylist()) {
                var cr = $(window).innerWidth() - 20;
                if (ar && ar !== "") {
                    ar.addClass("tscplayer_fullframe");
                    ar.css("width", $(window.parent).innerWidth());
                    ar.css("height", "100%");
                    cr = $(window.parent).innerWidth() - 20
                }
                var cm = TSC.mediaList.getMediaList();
                var cq = cm.length;
                var cp = "<ol>";
                for (var cn = 0; cn < cq; cn++) {
                    cp += "<li>" + bI([cm[cn]], true, cr, 75, true) + "</li>"
                }
                cp += "</ol>";
                $(cs).html(cp);
                $(cs).css("background-color", "#ffffff");
                $("body").css("overflow", "auto");
                $(cs).css("overflow", "auto");
                $(cs + " ol").css("list-style", "none");
                $(cs + " ol").css("margin", "10px");
                $(cs + " ol").css("padding", "0")
            } else {
                $(cs).html(bI(TSC.mediaList.currentVideoSrc(), true, undefined, undefined, true));
                if (window != window.top && TSC.playerConfiguration.getIframeCommunicationsEnabled()) {
                    var cl = $(window.parent).innerWidth() - 40;
                    var co = cl * 1.33333333333333;
                    ar.css("width", cl);
                    ar.css("height", co)
                }
            }
            a(cs)
        }, initFlashView: function(cl) {
            ar = TSC.playerConfiguration.getFrameElement();
            aT(cl)
        }, getFlashId: function() {
            return a1
        }, jsSeekTime: function(cn) {
            if (H) {
                if (aY) {
                    if (aY[0].duration && cn < aY[0].duration) {
                        if (bp) {
                            b9(cn)
                        } else {
                            if (!TSC.xmp.hasQuiz() || (TSC.xmp.hasQuiz() && !TSC.quizController.viewOpen())) {
                                k(cn, true)
                            }
                        }
                    }
                } else {
                    var cl = {};
                    cl.t = cn;
                    TSC.playerConfiguration.setURLParams(cl);
                    if (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) {
                        if (!TSC.quizController.viewOpen()) {
                            setTimeout(a2, 80)
                        }
                    } else {
                        setTimeout(bj, 80)
                    }
                }
            } else {
                var cm = $(a1);
                cm[0].jsSeekTime(cn)
            }
        }, jsPlay: function() {
            if (H) {
                if (aY) {
                    if (bp) {
                        b9(0)
                    } else {
                        aY[0].play()
                    }
                } else {
                    if (TSC.xmp.hasQuiz() && TSC.quizController.quizEnabled()) {
                        if (!TSC.quizController.viewOpen()) {
                            setTimeout(a2, 80)
                        }
                    } else {
                        setTimeout(bj, 80)
                    }
                }
            } else {
                var cl = $(a1);
                cl[0].jsPlay()
            }
        }, jsDebugUI: function() {
            var cl = $(a1);
            if (!H && cl) {
                cl[0].jsDebugUI(true)
            }
        }, displayMessagePanel: function(cm, cl) {
            L(cm, cl, true)
        }, addEventListener: function(cl, cm) {
            if (cl === "VIDEO_START") { //console.log ( 'dfdfdfd' );
                cj = cm
            } else {
                if (cl === "CAPTION_CHANGE") {
                    b = cm
                } else {
                    if (cl === "READY") {
                        cc = cm
                    } else {
                        if (cl === "VIDEO_PLAY") { //console.log ( 'dfdfdfd' );
                            bt = cm
                        }
                    }
                }
            }
        }, removeEventListener: function(cl) {
            if (cl === "VIDEO_START") {
                console.log('dfdfdfd');
                cj = undefined
            } else {
                if (cl === "CAPTION_CHANGE") {
                    b = undefined
                } else {
                    if (cl === "READY") {
                        cc = undefined
                    } else {
                        if (cl === "VIDEO_PLAY") {
                            bt = undefined
                        }
                    }
                }
            }
        }}
}();
var TSC = TSC || {};
TSC.xmp = (function() {
    $.fn.filterNode = function(ab) {
        return this.find("*").filter(function() {
            return this.nodeName === ab
        })
    };
    var h = TSC.localizationStrings;
    var D;
    var a;
    var R = false;
    var X = false;
    var A = false;
    var l = false;
    var W = false;
    var k = false;
    var e = false;
    var s;
    var g;
    var aa;
    var w;
    var i;
    var d;
    var Y;
    var n;
    var y;
    var r = null;
    var x;
    var B;
    var M = false;
    var q = "";
    var U = 0;
    var T = "en-US";
    var z = "#ffffff";
    var G = "#000000";
    var o = 0.9;
    var P = "Arial, Helvetica, sans-serif;";
    var m = 18;
    var V = {r: 255, g: 255, b: 255};
    var E = "overlay";
    var N = 0;
    var u = 2;
    var K = 144;
    var J = [];
    var C = [];
    var c = [];
    var b = [];
    var f = [];
    function F(ac, ab, ad) {
        if (a) {
            a.call()
        }
    }
    function O(ag, af, ab) {
        var ae = (ag << 16 | af << 8 | ab).toString(16);
        var ac = 6 - ae.length;
        for (var ad = 0; ad < ac; ad++) {
            ae = "0" + ae
        }
        return"#" + ae
    }
    function t(ab) {
        $(ab).find("*").filterNode("rdf:Description").each(function() {
            var ae = Number($(this).attr("xmpDM:startTime")) / 1000;
            var ac = TSC.playerConfiguration.getUnicodeSafeString($(this).attr("tscDM:file"));
            var af = $(this).attr("xmpDM:name");
            var ad = $(this).attr("tscDM:image");
            var ah = $(this).attr("tscDM:imagerect");
            if (ah && !M) {
                M = true;
                if (TSC.playerConfiguration.getSwfBase() !== ".") {
                    q = TSC.playerConfiguration.getSwfBase() + TSC.playerConfiguration.getUnicodeSafeString(ad)
                } else {
                    q = TSC.playerConfiguration.getUnicodeSafeString(ad)
                }
            }
            var ag = {time: ae, text: af, file: ac, image: ad, imageRect: ah};
            J.push(ag)
        })
    }
    function j(ad) {
        var ac = $(ad).find("*").length;
        var ae = ad.find("*").eq(ac - 2);
        if (ae && ae.length > 0 && ae[0].nodeName === "tsc:fgColor") {
            var ag = ae.attr("xmpG:red");
            var af = ae.attr("xmpG:green");
            var ab = ae.attr("xmpG:blue");
            z = O(ag, af, ab)
        }
        var ah = ad.find("*").eq(ac - 1);
        if (ah && ah.length > 0 && ah[0].nodeName === "tsc:bgColor") {
            V.r = ah.attr("xmpG:red");
            V.g = ah.attr("xmpG:green");
            V.b = ah.attr("xmpG:blue");
            G = O(V.r, V.g, V.b)
        }
        $(ad).find("*").filterNode("rdf:Description").each(function() {
            var ak = Number($(this).attr("xmpDM:startTime")) / 1000;
            var ao = Number($(this).attr("xmpDM:duration")) / 1000;
            var ar = ak + ao;
            var ai = $(this).find("*").filterNode("rdf:li").text();
            var al = TSC.textFormatter.rtfToText(ai);
            var ap = $(this).attr("tscDM:valign");
            var am = $(this).attr("tscDM:halign");
            var an;
            var aj;
            switch (ap) {
                case"top":
                    an = "captionVAlignTop";
                    break;
                default:
                    an = "captionVAlignBottom";
                    break
            }
            switch (am) {
                case"left":
                    aj = "captionHAlignLeft";
                    break;
                case"right":
                    aj = "captionHAlignRight";
                    break;
                default:
                    aj = "captionHAlignCenter";
                    break
            }
            ai = TSC.textFormatter.rtfToHTML(ai);
            var at = TSC.playerConfiguration.getUnicodeSafeString($(this).attr("tscDM:file"));
            if (al.replace(/ /g, "") !== "") {
                var aq = {start: ak, end: ar, text: al, htmlText: ai, file: at, vAlign: ap, vAlignClass: an, hAlignClass: aj};
                C.push(aq)
            }
        })
    }
    function I(af, ad) {
        var ai = [];
        var ac = Number(af[4]) - Number(af[0]);
        var ak = Number(af[5]) - Number(af[1]);
        var ag = (ac / 2) + Number(af[0]);
        var ae = (ak / 2) + Number(af[1]);
        var aj = af.length;
        for (var ah = 0; ah < aj; ah += 2) {
            var ab = H(Number(af[ah]), Number(af[ah + 1]), ac, ak, ag, ae, ad);
            ai.push(Number(ab[0]));
            ai.push(Number(ab[1]))
        }
        return ai
    }
    function H(ab, ao, ah, aj, ag, af, ae) {
        ae = ae * Math.PI / 180;
        var ap = ab - ag;
        var an = ao - af;
        var al = Math.atan2(an, ap);
        var ak = Math.sqrt(ap * ap + an * an);
        var ac = al + ae;
        var am = Math.cos(ac) * ak;
        var ai = Math.sin(ac) * ak;
        var ad = [];
        ad[0] = (am + ag);
        ad[1] = (ai + af);
        return ad
    }
    function Q(ab) {
        $(ab).find("*").filterNode("rdf:Description").each(function() {
            var ad = $(this).attr("xmp:label");
            var al = Number($(this).attr("xmpDM:startTime")) / 1000;
            var ai = Number($(this).attr("xmpDM:duration")) / 1000;
            var ah = al + ai;
            var ae = $(this).attr("tscDM:boundingPoly");
            var aj = $(this).attr("tscDM:rotate");
            var ag = TSC.playerConfiguration.getUnicodeSafeString($(this).attr("tscHS:jumpFile"));
            var am = ae.replace(/\;/ig, ",");
            if (am.lastIndexOf(",") == am.length - 1) {
                am = am.substr(0, am.length - 1)
            }
            var ao = am.split(",");
            if (aj !== 0) {
                ao = I(ao, aj)
            }
            var an = false;
            var af = "";
            var ak = "";
            var ac = "";
            if ($(this).attr("tscHS:pause") === "1") {
                an = true
            }
            if ($(this).attr("tscHS:jumpTime") !== undefined) {
                af = Number($(this).attr("tscHS:jumpTime")) / 1000
            }
            if ($(this).attr("tscHS:newWindow") !== undefined) {
                ak = $(this).attr("tscHS:newWindow");
                ak = (ak === "0" || ak.toLowerCase() === "false") ? false : true
            }
            if ($(this).attr("xmpDM:location") !== undefined) {
                ac = $(this).attr("xmpDM:location")
            }
            var aq = TSC.playerConfiguration.getUnicodeSafeString($(this).attr("tscDM:file"));
            var ap = {id: ad, start: al, end: ah, pause: an, hasPaused: false, points: ao, scaledPoints: ao.concat([]), rotation: aj, file: aq, jumpTime: af, jumpFile: ag, newWindow: ak, targetURL: ac, isActive: false};
            c.push(ap)
        })
    }
    function L(am) {
        var af = -1;
        var ad = false;
        var ak;
        var ae;
        var ac;
        var ag;
        var al;
        var ai = [];
        var ab;
        var ah;
        var aj;
        TSC.quizModel.clearAllQuestions();
        $(am).find("*").filterNode("rdf:Description").each(function() {
            var ao = $(this).attr("tscIQ:questionSetName");
            if (ao) {
                ao = TSC.textSanitizer.htmlEncode(ao);
                if (ad) {
                    TSC.quizModel.addQuestion(af, ak, ac, ag, ai, ab);
                    ad = false;
                    ag = undefined;
                    ac = undefined;
                    ai = [];
                    ab = undefined
                }
                var ap = ($(this).attr("tscIQ:feedback") === "1");
                var an = Number($(this).attr("xmpDM:startTime"));
                af = TSC.quizModel.addQuestionSet(ao, an, ap)
            } else {
                ae = $(this).attr("tscIQ:type");
                if (ae) {
                    if (ad) {
                        TSC.quizModel.addQuestion(af, ak, ac, ag, ai, ab);
                        ad = false;
                        ad = false;
                        ag = undefined;
                        ac = undefined;
                        ai = [];
                        ab = undefined
                    }
                    ac = $(this).attr("tscIQ:id");
                    ak = ae;
                    ah = $(this).children();
                    ag = TSC.textSanitizer.htmlEncode($(ah[0]).text(), true);
                    ab = TSC.textSanitizer.htmlEncode($(ah[1]).text(), true);
                    ad = true
                } else {
                    al = $(this).attr("tscIQ:orderId");
                    if (al) {
                        ah = $(this).children();
                        aj = $(ah[0]).text();
                        if (aj) {
                            ai.push(TSC.textSanitizer.htmlEncode(aj, true))
                        }
                    }
                }
            }
        });
        if (ad) {
            TSC.quizModel.addQuestion(af, ak, ac, ag, ai, ab)
        }
    }
    function p(ag) {
        var af = [];
        $(ag).find("*").filterNode("rdf:Description").each(function() {
            var an = Number($(this).attr("xmpDM:startTime")) / 1000;
            var ak = Number($(this).attr("xmpDM:duration")) / 1000;
            var am = $(this).attr("xmpDM:name");
            var aj = TSC.playerConfiguration.getUnicodeSafeString($(this).attr("tscDM:file"));
            var al = {start: an, end: String(Number(an) + Number(ak)), text: am, file: aj};
            af.push(al)
        });
        var ac = af.length;
        if (ac < 1) {
            return
        }
        var ad = af[0].start;
        var ai = "";
        var ab = [];
        var ah;
        for (var ae = 0; ae < ac; ae++) {
            if (af[ae].start !== ad) {
                ah = {start: af[ae - 1].start, end: af[ae - 1].end, text: ai, items: ab, file: af[ae - 1].file};
                b.push(ah);
                ai = "";
                ab = []
            }
            ai += af[ae].text + " ";
            ab.push(af[ae].text);
            ad = af[ae].start
        }
        ah = {start: af[ae - 1].start, end: af[ae - 1].end, text: ai, items: ab, file: af[ae - 1].file};
        b.push(ah)
    }
    function v(ag) {
        var ab = [];
        $(ag).find("*").filterNode("rdf:Description").each(function() {
            var ap = Number($(this).attr("xmpDM:startTime")) / 1000;
            var am = Number($(this).attr("xmpDM:duration")) / 1000;
            var ao = $(this).attr("xmpDM:name");
            var al = TSC.playerConfiguration.getUnicodeSafeString($(this).attr("tscDM:file"));
            var an = {start: ap, end: String(Number(ap) + Number(am)), text: ao, file: al};
            ab.push(an)
        });
        var ah = ab.length;
        if (ah < 1) {
            return
        }
        var af = ab[0].start;
        var aj = af;
        var ai = "";
        var ae = [];
        for (var ad = 0; ad < ah; ad++) {
            if (ab[ad].start - af > 2.5) {
                var ak = {start: aj, end: ab[ad - 1].end, text: ai, items: ae, file: ab[ad - 1].file};
                aj = ab[ad].start;
                ab.push(ak);
                ai = "";
                ae = []
            }
            ai += ab[ad].text + " ";
            ae.push(ab[ad].text);
            af = ab[ad].start
        }
        var ac = {start: aj, end: ab[ah - 1].end, text: ai, items: ae, file: ab[ah - 1].file};
        f.push(ac)
    }
    function S() {
        if (R) {
            t(d)
        }
        if (X) {
            j(Y)
        }
        if (l) {
            L(y)
        }
        if (A) {
            Q(n)
        }
        if (W) {
            p(i)
        }
        if (k) {
            v(w)
        }
        e = true;
        if (D) {
            D.call()
        }
    }
    function Z(ad) {
        var az = $(ad).find("*").eq(2);
        s = az.attr("dc:title");
        aa = az.attr("tscDM:originId");
        g = az.attr("tscDM:project");
        U = Number($(ad).find("*").eq(3).attr("xmpDM:value"));
        r = s;
        var af;
        var ap = $(ad).find("*").length;
        var at;
        var aA = 0;
        for (af = 4; af < ap; af++) {
            if ($(ad).find("*").eq(af)[0].nodeName === "xmpDM:Tracks") {
                at = $(ad).find("*").eq(af).children();
                break
            }
        }
        var ak;
        var ab = $(at).find("*").length;
        for (var ar = 0; ar < ab; ar++) {
            var an = $(at).find("*").eq(ar);
            ak = an.attr("xmpDM:trackType");
            if (ak !== undefined) {
                switch (ak.toLowerCase()) {
                    case"tableofcontents":
                        x = ($(an)).attr("tscDM:tocCellLayout");
                        if (TSC.playerConfiguration.getSwfBase() !== ".") {
                            B = TSC.playerConfiguration.getSwfBase() + TSC.playerConfiguration.getUnicodeSafeString(($(an)).attr("tscDM:image"))
                        } else {
                            B = TSC.playerConfiguration.getUnicodeSafeString(($(an)).attr("tscDM:image"))
                        }
                        R = true;
                        d = $(an);
                        ar += d.find("*").length;
                        break;
                    case"quiz":
                        if (TSC.quizModel) {
                            l = true;
                            var ai = ($(an)).attr("tscIQ:quizGuid");
                            var aq = ($(an)).attr("tscIQ:reportMethod");
                            var ac = ($(an)).attr("tscIQ:requireUserId") === "1";
                            var ay = ($(an)).attr("tscIQ:authoredEmail");
                            var aw = ($(an)).attr("tscIQ:clientId");
                            var av = ($(an)).attr("tscIQ:quizHash");
                            var ao = ($(an)).attr("tscIQ:locale");
                            if (!ao) {
                                ao = TSC.languageCodes.ENGLISH
                            }
                            TSC.quizModel.setLocale(ao);
                            TSC.quizModel.setProductionMetadata(g, s, aa);
                            TSC.quizModel.setQuizTitle(s);
                            TSC.quizModel.setQuizID(ai);
                            TSC.quizModel.setReportMethod(aq);
                            TSC.quizModel.setRequireUserId(ac);
                            TSC.quizModel.setAuthoredEmail(ay);
                            TSC.quizModel.setClientId(aw);
                            TSC.quizModel.setQuizHash(av);
                            TSC.quizModel.setMediaDuration(U)
                        }
                        y = $(an);
                        ar += y.find("*").length;
                        break;
                    case"caption":
                        var am = ($(an)).attr("stFnt:fontFamily");
                        if (am) {
                            P = am
                        }
                        var ax = ($(an)).attr("tscDM:fontSize");
                        if (ax) {
                            m = Number(ax)
                        }
                        var au = ($(an)).attr("tscDM:bgOpacity");
                        if (au) {
                            o = Number(au)
                        }
                        var ae = ($(an)).attr("tscDM:position");
                        if (ae) {
                            E = ae
                        }
                        var ah = ($(an)).attr("tscDM:captionbarheight");
                        if (ah) {
                            N = Number(ah)
                        }
                        X = true;
                        Y = $(an);
                        ar += Y.find("*").length;
                        break;
                    case"hotspot":
                        A = true;
                        n = $(an);
                        ar += n.find("*").length;
                        break;
                    case"speechtext":
                        k = true;
                        w = $(an);
                        ar += w.find("*").length;
                        break;
                    case"screentext":
                        W = true;
                        i = $(an);
                        ar += i.find("*").length;
                        break
                }
            }
        }
        af += aA;
        var ag;
        var aj;
        var al = 0;
        for (af = af; af < ap; af++) {
            if ($(ad).find("*").eq(af)[0].nodeName === "tscDM:controller") {
                ag = $(ad).find("*").eq(af).children();
                al = $(ag).find("*").length;
                break
            }
        }
        $(ag).find("*").filterNode("rdf:li").each(function() {
            if ($(this).attr("xmpDM:name") != undefined) {
                aj = $(this).attr("xmpDM:value").toLowerCase();
                switch (($(this).attr("xmpDM:name")).toLowerCase()) {
                    case"autohide":
                        var aC = aj === "true" ? true : false;
                        TSC.playerConfiguration.setAutoHideControls(aC);
                        break;
                    case"autoplay":
                        var aE = aj === "true" ? true : false;
                        if (!TSC.playerConfiguration.getAutoPlayMedia()) {
                            TSC.playerConfiguration.setAutoPlayMedia(aE)
                        }
                        break;
                    case"searchable":
                        var aD = aj === "true" ? true : false;
                        TSC.playerConfiguration.setIsSearchable(aD);
                        break;
                    case"captionsenabled":
                        var aH = aj === "true" ? true : false;
                        TSC.playerConfiguration.setCaptionsEnabled(aH);
                        break;
                    case"sidebarenabled":
                        var aG = aj === "true" ? true : false;
                        TSC.playerConfiguration.setSidebarEnabled(aG);
                        break;
                    case"unicodeenabled":
                        var aB = aj === "true" ? true : false;
                        TSC.playerConfiguration.setProcessUnicodeNames(aB);
                        break;
                    case"backgroundcolor":
                        var aF = aj;
                        if (aF.indexOf("#") === -1) {
                            aF = "#" + aF
                        }
                        TSC.playerConfiguration.setBackgroundColor(aF);
                        break;
                    case"sidebarlocation":
                        var aI = (aj === "right" || aj === "r") ? "right" : "left";
                        TSC.playerConfiguration.setSidebarLocation(aI);
                        break;
                    case"endaction":
                        TSC.playerConfiguration.setEndActionType(aj);
                        break;
                    case"endactionparam":
                        TSC.playerConfiguration.setEndActionParam(aj);
                        break;
                    case"locale":
                        TSC.localizationStrings.setLanguage($(this).attr("xmpDM:value"));
                        break
                }
            }
        });
        setTimeout(S, 500)
    }
    return{loadXMP: function(ab) {
            if (ab) {
                try {
                    $.ajax({type: "GET", url: ab, isLocal: true, dataType: "xml", success: Z, error: F})
                } catch (ac) {
                }
            }
        }, parseXMP: function(ab) {
            Z($.parseXML(ab))
        }, xmpAvailable: function() {
            return e
        }, getMediaDuration: function() {
            return U
        }, getTocTitle: function() {
            return r
        }, getTocImageSrc: function() {
            return B
        }, getTocCellLayoutType: function() {
            return x
        }, tocContainsThumbs: function() {
            return M
        }, getTocThumbImageSrc: function() {
            return q
        }, getTocItemArray: function() {
            return J
        }, getHotspotItemArray: function() {
            return c
        }, getCaptionItemArray: function() {
            return C
        }, getCaptionFontFamily: function() {
            return P
        }, getCaptionFontSize: function() {
            return m
        }, getMinCaptionFontSize: function() {
            return u
        }, getMaxCaptionFontSize: function() {
            return K
        }, getCaptionBgOpacity: function() {
            return o
        }, getCaptionTextColor: function() {
            return z
        }, getCaptionBgColor: function() {
            return G
        }, getCaptionBg: function() {
            return"rgba(" + V.r + ", " + V.g + ", " + V.b + ", " + o + ")"
        }, getCaptionPosition: function() {
            return E
        }, getCaptionBarHeight: function() {
            return N
        }, getSpeechTextItemArray: function() {
            return f
        }, getScreenTextItemArray: function() {
            return b
        }, getLanguage: function() {
            return T
        }, hasTocItems: function() {
            return R
        }, hasCaptionItems: function() {
            return X
        }, hasHotspotItems: function() {
            return A
        }, hasQuiz: function() {
            return l
        }, hasScreenTextItems: function() {
            return W
        }, hasSpeechTextItems: function() {
            return k
        }, getLocalErrorMessage: function() {
            return h.getString("xmpSecurity")
        }, get404ErrorMessage: function() {
            return h.getString("xmpError")
        }, addEventListener: function(ab, ac) {
            if (ab === "READY") {
                D = ac
            } else {
                if (ab === "ERROR") {
                    a = ac
                }
            }
        }, removeEventListener: function(ab, ac) {
            if (ab === "READY") {
                D = undefined
            } else {
                if (ab === "ERROR") {
                    a = undefined
                }
            }
        }}
}());
var TSC = TSC || {};
var _gaq = _gaq || [];
TSC.mediaPlayer = (function() {
    var z = "1.0.32";
    var u = "http://www.techsmith.com/redirect.asp?";
    var j = "target=nuevoappdata&product=camtasia&lang=enu&ver=1.0.0&os=mac";
    var m = "false";
    var d = "";
    var n;
    var w = TSC.playerConfiguration;
    var s = TSC.mediaList;
    var h = TSC.playerView;
    var t = TSC.localizationStrings;
    var i = TSC.xmp;
    var f = TSC.deviceInfo;
    var a = false;
    function p() {
        if (TSC.mediaList.getMediaType() !== TSC.mediaType.WEBM && swfobject.hasFlashPlayerVersion(w.getMinFlashPlayerVersion()) && w.getTechPreference() === "flash") {
            h.initFlashView(n)
        } else {
            h.displayMessagePanel(n, TSC.mediaList.getErrorMessage())
        }
    }
    function b() {
        D();
        if (f.isLocal()) {
            h.displayMessagePanel(n, TSC.xmp.getLocalErrorMessage())
        } else {
            h.displayMessagePanel(n, TSC.xmp.get404ErrorMessage())
        }
    }
    function e() {
        _gaq.push(["_setAccount", w.getGoogleAnalyticsID()]);
        if (w.getGAPageViewTracking()) {
            _gaq.push(["_trackPageview", w.getMediaFileName()])
        }
        (function() {
            var F = document.createElement("script");
            F.type = "text/javascript";
            F.async = true;
            F.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
            var E = document.getElementsByTagName("script")[0];
            E.parentNode.insertBefore(F, E)
        })()
    }
    function y() {
        if (f.isNuevoApp()) {
            var E = document.querySelector("meta[name=viewport]");
            if (E) {
                E.setAttribute("content", "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;")
            }
        }
    }
    function o() {
        f.lookAtDevice();
        y();
        r();
        if (!A()) {
            v()
        }
        if (w.getGoogleAnalyticsID() && !swfobject.hasFlashPlayerVersion(w.getMinFlashPlayerVersion())) {
            e()
        }
    }
    function r() {
        var E = {};
        (function() {
            var F, H = /\+/g, G = /([^&=]+)=?([^&]*)/g, K = function(L) {
                return decodeURIComponent(L.replace(H, " "))
            }, I = "";
            if (w.getIframeCommunicationsEnabled()) {
                try {
                    I = window.top.location.search.substring(1)
                } catch (J) {
                    I = ""
                }
            }
            while (F = G.exec(I)) {
                E[K(F[1])] = K(F[2])
            }
        })();
        w.setURLParams(E)
    }
    function v() {
        s.addEventListener("READY", k);
        s.addEventListener("ERROR", p);
        s.init(w.getMediaSources())
    }
    function g() {
        if (f.isNuevoApp() && i.xmpAvailable()) {
            var E = document.location;
            var G = i.getTocTitle();
            var F = i.getMediaDuration();
            document.location = "nuevo://info?url=" + E + "?title=" + G + "?duration=" + F
        }
    }
    function q() {
        if (!a) {
            h.removeEventListener("VIDEO_START");
            $(document).trigger("techsmith.cloud.videofirstclickplay");
            a = true
        }
    }
    function k() {
        s.removeEventListener("READY", k);
        s.removeEventListener("ERROR", p);
        if (TSC.mediaList.getMediaType() === TSC.mediaType.WEBM) {
            if (f.canPlayWebM()) {
                l()
            } else {
                h.displayMessagePanel(n, t.getString("noWebMSupport"))
            }
        } else {
            if (!f.canPlayHTML5Video() || (TSC.mediaList.isMediaTypeAvailable(TSC.mediaType.H264) && !f.canPlayMP4())) {
                w.setTechPreference("flash")
            }
            if (f.isIPhoneOrIPod()) {
                h.initSimpleHtml5View(n)
            } else {
                if ((w.getTechPreference() === "flash" && !f.isLocalPepperFlash() && swfobject.hasFlashPlayerVersion(w.getMinFlashPlayerVersion()))) {
                    h.initFlashView(n)
                } else {
                    if (f.canPlayHTML5Video() && (TSC.mediaList.isMediaTypeAvailable(TSC.mediaType.H264) && f.canPlayMP4()) || (TSC.mediaList.isMediaTypeAvailable(TSC.mediaType.WEBM) && f.canPlayWebM()) || (TSC.mediaList.isMediaTypeAvailable(TSC.mediaType.OGG) && f.canPlayOgg())) {
                        l()
                    } else {
                        h.displayMessagePanel(n, t.getString("videoNotSupportedUseFlash"))
                    }
                }
            }
        }
    }
    function l() {
        if (w.getXMPSrc()) {
            i.addEventListener("READY", D);
            i.addEventListener("ERROR", b);
            i.loadXMP(w.getXMPSrc())
        } else {
            D()
        }
    }
    function C(E) {
        if (w.getIframeCommunicationsEnabled()) {
            $(parent.document).trigger("techsmith.screencast.captionchanged", E)
        }
    }
    function D() {
        var E = false;
        var F = false;
        if (i.xmpAvailable()) {
            i.removeEventListener("READY", D);
            i.removeEventListener("ERROR", b);
            if (i.hasTocItems() || ((i.hasCaptionItems() || i.hasScreenTextItems() || i.hasSpeechTextItems()) && w.getIsSearchable())) {
                E = true
            }
            if (i.hasCaptionItems()) {
                if (w.getIframeCommunicationsEnabled()) {
                    $(parent.document).trigger("techsmith.screencast.hascaptions")
                }
            }
            if (i.hasQuiz()) {
                if (f.isLocal() && TSC.quizModel.getReportMethod() !== TSC.reportType.NONE) {
                    F = true;
                    TSC.quizModel.setReportMethod(TSC.reportType.NONE)
                } else {
                    if (TSC.quizModel.getReportMethod() === TSC.reportType.SCORM && TSC.quizModel.getTotalNumberOfGradedQuestionSets() === 0) {
                        w.setReportScormComplete(true)
                    }
                }
            }
            g()
        }
        h.addEventListener("VIDEO_START", q);
        h.addEventListener("CAPTION_CHANGE", C);
        h.initHtml5View(n, E);
        if (F) {
            h.displayMessagePanel(n, TSC.localizationStrings.getString("txtDisabledLocalQuizReporting"))
        }
    }
    function c(E) {
        var F = document.createElement("script");
        F.setAttribute("type", "text/javascript");
        F.setAttribute("src", E);
        F.async = true;
        F.onload = function() {
            v()
        };
        if (typeof F != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(F)
        }
    }
    function A() {
        if (B()) {
            c(u + j);
            return true
        }
        return false
    }
    function x() {
        return(m === "true")
    }
    function B() {
        if (f.isIPhoneOrIPod() && f.isRetinaDisplay() && !f.isNuevoApp()) {
            return true
        }
        return false
    }
    return{init: function(E) {
            n = E;
            o()
        }, getVersion: function() {
            return z
        }, keyValueDataCallback: function(E) {
            m = E.isAppReady;
            d = E.appDownloadURL
        }, isNuevoAppCapableAndAvailable: function() {
            return(B() && x())
        }, redirectToiPhoneAppDownload: function() {
            if (B()) {
                window.open(d, "_parent")
            }
        }, jsSeekTime: function(E) {
            h.jsSeekTime(E)
        }, jsPlay: function() {
            h.jsPlay()
        }, jsDebugUI: function(E) {
            TSC.playerConfiguration.setDebugUIMode(E);
            h.jsDebugUI(E)
        }, redirectToiPhoneApp: function() {
            if (B() && x()) {
                var G = String(document.location);
                var E = w.getPosterImageSrc();
                var H = (new Date()).getTime();
                setTimeout(function() {
                    var I = (new Date()).getTime();
                    if ((I - H) < 1000) {
                        window.open(d, "_parent")
                    }
                }, 300);
                var F = "nuevo://import?url=";
                if (G.indexOf("?") !== -1) {
                    F += G + "&posterImage=" + E
                } else {
                    F += G + "?posterImage=" + E
                }
                window.open(F, "_parent")
            }
        }, addEventListener: function(E, F) {
            h.addEventListener(E, F)
        }, removeEventListener: function(E) {
            h.removeEventListener(E)
        }}
}());