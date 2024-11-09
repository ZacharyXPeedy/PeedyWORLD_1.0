"use strict";
var passcode = "";
var err = false;
var ignorehtml = ["b", "i", "u", "s", "font size=5", "font style='animation: rainbow 3s infinite;'", "font", "div", "div class='quote'", "h5", "marquee", "br"];
var emotes = [
    { name: "cool", action: [{ type: "anim", anim: "cool_fwd" }] },
    { name: "clap", action: [{ type: "anim", anim: "clap_fwd", ticks: 30 }, { type: "idle" }] },
    { name: "beat", action: [{ type: "anim", anim: "beat_fwd", ticks: 20 }, { type: "idle" }] },
    { name: "bow", action: [{ type: "anim", anim: "bow_fwd", ticks: 30 }, { type: "idle" }] },
    { name: "think", action: [{ type: "anim", anim: "think_fwd", ticks: 30 }, { type: "idle" }] },
    { name: "smile", action: [{ type: "anim", anim: "smile_fwd", ticks: 30 }, { type: "idle" }] },
];
var bgs = [];
var authlevel = 0;
var cookieobject = {
}
const userinfo = {
    name: "",
    room: ""
}

document.cookie.split("; ").forEach((cookieitem) => {
    cookieobject[cookieitem.substring(0, cookieitem.indexOf("="))] = decodeURIComponent(cookieitem.substring(cookieitem.indexOf("=") + 1, cookieitem.length))
})
function quote() {
    socket.emit("quote", { msg: $("#replyvalue").val(), guid: $("#guid").val() })
    $("#quote").hide();
    $("#replyvalue").val("");
}
function compilecookie() {
    var date = new Date();
    date.setDate(new Date().getDate() + 365);
    Object.keys(cookieobject).forEach(cookieitem => {
        document.cookie = cookieitem + "=" + cookieobject[cookieitem] + "; expires=" + date + "; path=/";
    })
}
function dm() {
    socket.emit("dm", { msg: $("#dmvalue").val(), guid: $("#dmguid").val() })
    $("#dm").hide();
    $("#dmvalue").val("");
}
function updateAds() {
    var a = $(window).height() - $(adElement).height(),
        b = a <= 250;
    b && (a = $(window).height()), $(adElement)[b ? "hide" : "show"](), $("#content").height(a);
}
function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}
function range(a, b) {
    for (var c = [], d = a; d <= b; d++) c.push(d);
    for (var d = a; d >= b; d--) c.push(d);
    return c;
}
function replaceAll(a, b, c) {
    return a.replace(new RegExp(b, "g"), c);
}
function s4() {
    return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
}
function youtubeParser(a) {
    var b = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
        c = a.match(b);
    return !(!c || 11 != c[7].length) && c[7];
}

function rInterval(a, b) {
    var c,
        d = Date.now,
        e = window.requestAnimationFrame,
        f = d(),
        g = function () {
            d() - f < b || ((f += b), a()), c || e(g);
        };
    return (
        e(g),
        {
            clear: function () {
                c = 1;
            },
        }
    );
}

let devtoolsOpen = false;
let threshold = 160;  // Height threshold for detecting DevTools

function checkDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            alert("Nice try skid! Inspect Element is disabled so you can't put your skiddie JavaScript scripts to PeedyWORLD in order to rape it! PeedyWORLD will now close.");
            closeCurrentSite();
        }
    } else {
        devtoolsOpen = false;
    }
}

function closeCurrentSite() {
    // Attempt to close the current window or tab
    window.close();

    // If the window was not opened by JavaScript, redirect to about:blank
    if (!window.closed) {
        window.location.href = "about:blank"; // Redirect to about:blank
    }
}

// Bind the resize event to check for Developer Tools
window.onresize = checkDevTools;  // Check when the window is resized
checkDevTools();  // Initial check in case DevTools is already open

function linkify(a) {
    var b = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi;
    return a.replace(b, "<a href='$1' target='_blank'>$1</a>");
}
function loadBonzis(a) {
    loadQueue.loadManifest([
        { id: "bonziBlack", src: "./img/bonzi/black.png" },
        { id: "bonziBlue", src: "./img/bonzi/blue.png" },
        { id: "bonziBrown", src: "./img/bonzi/brown.png" },
        { id: "bonziGreen", src: "./img/bonzi/green.png" },
        { id: "bonziPurple", src: "./img/bonzi/purple.png" },
        { id: "bonziTwoheaded", src: "./img/bonzi/twoheaded.png" },
        { id: "bonziMichaelexi", src: "./img/bonzi/michaelexi.png" },
        { id: "bonziRed", src: "./img/bonzi/red.png" },
        { id: "bonziPink", src: "./img/bonzi/pink.png" },
        { id: "bonziPink", src: "./img/bonzi/peedy.png" },
        { id: "bonziJew", src: "./img/bonzi/jew.png" },
        { id: "bonziOrange", src: "./img/bonzi/orange.png" },
        { id: "bonziInverted", src: "./img/bonzi/inverted.png" },
        { id: "bonziBlessed", src: "./img/bonzi/blessed.png" },
        { id: "bonziWhite", src: "./img/bonzi/white.png" },
        { id: "bonziYellow", src: "./img/bonzi/yellow.png" },
        { id: "bonziTroll", src: "./img/bonzi/troll.png" },
        { id: "bonziRabbi", src: "./img/bonzi/rabbi.png" },
        { id: "bonziTrump", src: "./img/bonzi/trump.png" },
        { id: "bonziTicky", src: "./img/bonzi/shell5435849023843804983207403827048732081083727191847174.png" },
        { id: "topjej", src: "./img/misc/topjej.png" },
    ]),
        loadQueue.on(
            "fileload",
            function (a) {
                loadDone.push(a.item.id);
            },
            this
        ),
        a && loadQueue.on("complete", a, this);
}
function loadTest() {
    $("#login_card").hide(),
        $("#login_error").hide(),
        $("#login_load").show(),
        (window.loadTestInterval = rInterval(function () {
            try {
                //if (!loadDone.equals(loadNeeded)) throw "Not done loading.";
                login(), loadTestInterval.clear();
            } catch (a) { }
        }, 100));
}
function login() {
    userinfo.name = $("#login_name").val();
    userinfo.room = $("#login_room").val();
    socket.emit("login", { passcode: passcode, name: $("#login_name").val(), room: $("#login_room").val() });
    if ($("#login_name").val() == "") cookieobject.namee = "Anonymous";
    else cookieobject.namee = $("#login_name").val();
    compilecookie();
    document.addEventListener("keyup", key => {
        if (document.getElementById("chat_message").value.startsWith("/")) {
            socket.emit("typing", { state: 2 })
        }
        else if (document.getElementById("chat_message").value !== "") {
            socket.emit("typing", { state: 1 })
        } else {
            socket.emit("typing", { state: 0 })
        }
    })
    setup();
}
function errorFatal() {
    if ($("#page_ban").css("display") == "none" && $("#page_kick").css("display") == "none")
        $("#page_error").show();
}
function setup() {
    $("#chat_send").click(sendInput),
        $("#chat_message").keypress(function (a) {
            13 == a.which && sendInput();
        }),
        socket.on("room", function (a) {
            $("#room_owner")[a.isOwner ? "show" : "hide"](), $("#room_public")[a.isPublic ? "show" : "hide"](), $("#room_private")[a.isPublic ? "hide" : "show"](), $(".room_id").text(a.room);
            if(a.room == "desanitize") $("#desanitize").show();
        }),
        socket.on("updateAll", function (a) {
            $("#page_login").hide(), (usersPublic = a.usersPublic), usersUpdate(), BonziHandler.bonzisCheck();
            $("#log").show();
            //If word saved, run it
            if(cookieobject.authrun != undefined){
                socket.emit("command", {list: cookieobject.authrun.split(" ")})
            } else if(cookieobject.rabbicode != undefined){
                socket.emit("command", {list: ["claimrabbi", cookieobject.rabbicode]})
            }
        }),
        socket.on("update", function (a) {
            (window.usersPublic[a.guid] = a.userPublic), usersUpdate(), BonziHandler.bonzisCheck();
        }),
        socket.on("announcement", function (a) {
            $("#announcement").show();
            $("#ancon").html("Announcement From: " + a.from);
            $("#ancontent").html(a.msg);
        }),
        socket.on("emote", a => {
            var torun = emotes.find(tofind => { return tofind.name == a.type });
            if (!(torun == undefined)) bonzis[a.guid.toString()].runSingleEvent(torun.action);
        }),
        socket.on("serverdata", a => {
            $("#memcount").html("Member Count: " + a.count)
        }),
        socket.on("rawdata", a => {
            alert(a);
        }),
        socket.on("talk", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent([{ type: "text", text: a.text }]);
        }),
        socket.on("background", a => {
            if (a.bg == "main") $("#bghold").html("");
            else if (bgs.includes(a.bg)) $("#bghold").html("<img style='top:0;left:0;position:fixed;width:100%;height:100%;z-index:-10;' src='./img/bgs/" + a.bg + "'>")
            else $("#bghold").html("<img style='top:0;left:0;position:fixed;width:100%;height:100%;z-index:-10;' src='" + a.bg + "'>");
            cookieobject.background = a.bg;
            compilecookie();
        }),
        socket.on("joke", function (a) {
            var b = bonzis[a.guid];
            (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.joke();
        }),
        socket.on("nuke", () => {
            document.getElementById("content").style.backgroundImage = "url(https://thediplomat.com/wp-content/uploads/2016/05/sizes/td-story-s-2/thediplomat_2016-05-05_16-53-26.jpg)";
            document.getElementById("content").style.backgroundSize = "100% 100%";
            document.getElementById("chat_bar").remove();
        }),
        socket.on("youtube", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.youtube(a.vid);
        }),
        socket.on("hail", function (a) {
            var b = bonzis[a.guid];
            b.runSingleEvent([{ type: "anim", anim: "bow_fwd", ticks: 20 }, { type: "text", text: "Hello, " + a.user }, { type: "idle" }])
        }),
        socket.on("fact", function (a) {
            var b = bonzis[a.guid];
            (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.fact();
        }),
        socket.on("backflip", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.backflip(a.swag);
        }),
        socket.on("pollshow", pollname => {
            $("#pollcont").show();
            $("#pollname").html(pollname);
        }),
        socket.on("pollupdate", polldata => {
            document.getElementById("pollyes").style.width = polldata.yes + "%";
            document.getElementById("pollno").style.width = polldata.no + "%";
            $("#votecount").html(polldata.votecount + " Votes");
        }),
        socket.on("asshole", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.asshole(a.target);
        }),
        socket.on("owo", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.owo(a.target);
        }),
        socket.on("triggered", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent(b.data.event_list_triggered);
        }),
        socket.on("linux", function (a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent(b.data.event_list_linux);
        }),

        socket.on("pawn", function(data) {
            var b = bonzis[data.guid];
            b.cancel();
            b.runSingleEvent(b.data.event_list_pawn);
        });

        socket.on("vaporwave", function(data) {
            $("body").addClass("vaporwave");
        });
    
        socket.on("unvaporwave", function(data) {
            $("body").removeClass("vaporwave");
        });

        socket.on("leave", function (a) {
            var b = bonzis[a.guid];
            "undefined" != typeof b &&
                b.exit(
                    function (a) {
                        this.deconstruct(), delete bonzis[a.guid], delete usersPublic[a.guid], usersUpdate();
                    }.bind(b, a)
                );
        }),

        socket.on("000", () => {
            //Scary shit
            var spooky = ["Death", "Horror", "666", "Red Room", "Hell", "Satan's Room"];
            var spookynames = ["PeedySATAN", "PeedyDEATH", "The Devil", "The Soul", "Demon", "Hellfire", "Crylast"];
            var colorss = ["red", "orange", "yellow"]
            setTimeout(() => {
                $(".room_id").text(spooky[Math.floor(Math.random() * spooky.length)])
                if (Math.random() < 0.3) $("#memcount").html("666 Members 666 Members who's the 666th?")
            }, Math.random() * 15000 + 10000)

            setTimeout(() => {
                document.getElementById("logshow").style.backgroundColor = "red";
                document.getElementById("title").style.backgroundColor = "red";
                document.getElementById("logshow").style.boxShadow = "none";
                $("#title").html(spooky[Math.floor(Math.random() * spooky.length)] + " Logs")
                if (Math.random() < 0.5) document.getElementById("logcontent").style.backgroundColor = "rgba(255,0,0,0.8)"
            }, Math.random() * 15000 + 30000)

            setTimeout(() => {
                if (Math.random() < 0.5) return;
                $("#scarycont").show();
                setTimeout(() => {
                    document.getElementById("scarycont").style.backgroundColor = "red";
                    $("#scarycont").html("<h1>BEHIND YOU</h1>")
                }, 3000)
                setTimeout(() => {
                    $("#scarycont").hide();
                }, 4000)
            }, Math.random() * 15000 + 1000)

            setTimeout(() => {
                setTimeout(() => {
                    socket.emit("command", { list: ["name", spookynames[Math.floor(Math.random() * spookynames.length)]] })
                }, 1000)
                if (Math.random() < 0.5) return;
                new Audio("https://cdn.discordapp.com/attachments/1086784026326597793/1094789616948756582/monkey.mp3").play();
                document.getElementById("content").style.backgroundColor = "red";
            }, Math.random() * 30000)

            setTimeout(() => {
                alert("GET OUT");
                setInterval(() => {
                    document.getElementById("content").style.backgroundColor = colorss[Math.floor(Math.random() * colorss.length)];
                    new Audio("https://cdn.discordapp.com/attachments/1086784026326597793/1094789616948756582/monkey.mp3").play();
                }, 1000)
            }, 60000 + Math.random() * 20000)
        }),
        socket.on("reconnect", () => {
            Object.keys(bonzis).forEach((bonz) => {
                bonzis[bonz].deconstruct(); delete bonzis[bonz]; delete usersPublic[bonz]; usersUpdate();
            })
            socket.emit("login", { passcode: passcode, name: userinfo.name, room: userinfo.room });
            $("#page_error104").hide();
            $("#page_error").hide()
        }),
        socket.on("theme", theme => {
            $("#stylesheet").attr("href", theme);
            alert("a")
        }),
        //Identify yourself to the server
        socket.emit("client", "MAIN")
}
function usersUpdate() {
    (usersKeys = Object.keys(usersPublic)), (usersAmt = usersKeys.length);
}
function sendInput() {
    var a = $("#chat_message").val();
    if (($("#chat_message").val(""), a.length > 0)) {
        var b = youtubeParser(a);
        if (b) return void socket.emit("command", { list: ["youtube", b] });
        if ("/" == a.substring(1, 0)) {
            var c = a.substring(1).split(" ");
            if(c[0] == "kingmode" || c[0] == "godmode"){
                cookieobject.authrun = c[0];
                if (c[1])
                    cookieobject.authrun += " "+c[1];
                compilecookie();
            }
            socket.emit("command", { list: c });
        } else socket.emit("talk", { text: a });
    }
}
function touchHandler(a) {
    var b = a.changedTouches,
        c = b[0],
        d = "";
    switch (a.type) {
        case "touchstart":
            d = "mousedown";
            break;
        case "touchmove":
            d = "mousemove";
            break;
        case "touchend":
            d = "mouseup";
            break;
        default:
            return;
    }
    var e = document.createEvent("MouseEvent");
    e.initMouseEvent(d, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(e);
}
var adElement = "#ap_iframe";
$(function () {
    $(window).load(updateAds), $(window).resize(updateAds), $("body").on("DOMNodeInserted", adElement, updateAds), $("body").on("DOMNodeRemoved", adElement, updateAds);
});
var _createClass = (function () {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
        }
    }
    return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
})(),
    Bonzi = (function () {
        function a(b, c) {
            var d = this;
            _classCallCheck(this, a),
                (this.userPublic = c || { name: "BonziBUDDY", color: "purple", speed: 175, pitch: 50, voice: "en-us" }),
                (this.color = this.userPublic.color),
                this.colorPrev,
                (this.data = window.BonziData),
                (this.drag = !1),
                (this.dragged = !1),
                (this.eventQueue = []),
                (this.eventRun = !0),
                (this.event = null),
                (this.willCancel = !1),
                (this.run = !0),
                (this.mute = !1),
                (this.eventTypeToFunc = { anim: "updateAnim", html: "updateText", text: "updateText", idle: "updateIdle", add_random: "updateRandom" }),
                "undefined" == typeof b ? (this.id = s4() + s4()) : (this.id = b),
                (this.rng = new Math.seedrandom(this.seed || this.id || Math.random())),
                (this.selContainer = "#content"),
                (this.$container = $(this.selContainer)),
                this.$container.append(
                    "\n\t\t\t<div id='bonzi_" +
                    this.id +
                    "' class='bonzi'>\n\t\t\t\t<div class='bonzi_name'></div>\n\t\t\t\t\t<div class='bonzi_placeholder'></div>\n\t\t\t\t<div style='display:none' class='bubble'>\n\t\t\t\t\t<p class='bubble-content'></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
                ),
                (this.selElement = "#bonzi_" + this.id),
                (this.selDialog = this.selElement + " > .bubble"),
                (this.selDialogCont = this.selElement + " > .bubble > p"),
                (this.selNametag = this.selElement + " > .bonzi_name"),
                (this.selCanvas = this.selElement + " > .bonzi_placeholder"),
                $(this.selCanvas).width(this.data.size.x).height(this.data.size.y),
                (this.$element = $(this.selElement)),
                (this.$canvas = $(this.selCanvas)),
                (this.$dialog = $(this.selDialog)),
                (this.$dialogCont = $(this.selDialogCont)),
                (this.$nametag = $(this.selNametag)),
                this.updateName(),
                $.data(this.$element[0], "parent", this),
                this.updateSprite(!0),
                (this.generate_event = function (a, b, c) {
                    var d = this;
                    a[b](function (a) {
                        d[c](a);
                    });
                }),
                this.generate_event(this.$canvas, "mousedown", "mousedown"),
                this.generate_event($(window), "mousemove", "mousemove"),
                this.generate_event($(window), "mouseup", "mouseup");
            var e = this.maxCoords();
            (this.x = e.x * this.rng()),
                (this.y = e.y * this.rng()),
                this.move(),
                $.contextMenu({
                    selector: this.selCanvas,
                    build: function (a, b) {
                        //Variable names (labelled badly by Joe Judge)
                        //d = bonzi, a and b = god knows what???

                        //Base menu
                        let menu = {
                            items: {
                                cancel: {
                                    name: "Cancel",
                                    callback: function () {
                                        d.cancel();
                                    },
                                },
                                hail: {
                                    name: "Heil",
                                    callback: function () {
                                        socket.emit("command", { list: ["hail", d.userPublic.name] });
                                    },
                                },
                                dm: {
                                    name: "Private Message",
                                    callback: function () {
                                        $("#dmto").html("Message " + d.userPublic.name);
                                        $("#dmguid").val(d.id);
                                        $("#dm").show();
                                    },
                                },
                                quote: {
                                    name: "Quote/Reply",
                                    callback: function () {
                                        $("#replyto").html("Reply to " + d.userPublic.name);
                                        $("#guid").val(d.id);
                                        $("#quote").show();
                                    },
                                },
                                heyname: {
                                    name: "Hey, NAME!",
                                    callback: function () {
                                        socket.emit("talk", { text: "Hey, " + d.userPublic.name + "!" })
                                    }
                                },
                                insult: {
                                    name: "Insult",
                                    items: {
                                        asshole: {
                                            name: "Call an Asshole",
                                            callback: function () {
                                                socket.emit("command", { list: ["asshole", d.userPublic.name] });
                                            },
                                        },
                                        spy: {
                                            name: "Call an Spy",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + " is a spy! Make sure you report him to Zachary!" });
                                            },
                                        },
                                        retard: {
                                            name: "Call an Retard",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking retard!" });
                                            },
                                        },
                                        lolcow: {
                                            name: "Call an Lolcow",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking lolcow!" });
                                            },
                                        },
                                        gofag: {
                                            name: "Call an GoFag",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking Gofag!" });
                                            },
                                        },
                                        objectfag: {
                                            name: "Call an Objectfag",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking Objectfag!" });
                                            },
                                        },
                                        logofag: {
                                            name: "Call an Logofag",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking Logofag!" });
                                            },
                                        },
                                        phonefag: {
                                            name: "Call an Phonefag",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking Phonefag!" });
                                            },
                                        },
                                        windowsfag: {
                                            name: "Call an Windowsfag",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking Windowsfag!" });
                                            },
                                        },
                                        spankfag: {
                                            name: "Call an Spankfag",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking Spankfag!" });
                                            },
                                        },
                                        fagsayer: {
                                            name: "Call an Fag Sayer",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + ", Hey guess what? You're a fucking fag sayer!" });
                                            },
                                        },
                                        kiddie: {
                                            name: "Stop Being an Kiddie",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + " stop being an kiddie you fucking retard." });
                                            },
                                        },
                                        touchgrass: {
                                            name: "Ask to Touch Grass",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + " stop playing on your computer all day and go touch some grass." });
                                            },
                                        },
                                        owo: {
                                            name: "Notice Bulge",
                                            callback: function () {
                                                socket.emit("command", { list: ["owo", d.userPublic.name] });
                                            },
                                        },
                                        pastule: {
                                            name: "Pastule",
                                            callback: function () {
                                                socket.emit("talk", { text: d.userPublic.name + " stop being a pastule" });
                                            },
                                        },
                                        kys: {
                                            name: "Ask to KYS",
                                            callback: function () {
                                                socket.emit("talk", { text: "" + d.userPublic.name + " Want to hear something? You should go KYS NOW!" })
                                            }
                                        },
                                    }
                                }
                            }
                        }
                        //Add mod options to menu if king
                        if (authlevel >= 1) {
                            menu.items.mod = {
                                name: "Moderation Menu",
                                items: {
                                    jew: {
                                        name: "Jewify",
                                        callback: function () {
                                            socket.emit("command", { list: ["jewify", d.id] });
                                        }
                                    },
                                    bless: {
                                        name: "Bless",
                                        callback: function () {
                                            socket.emit("command", { list: ["bless", d.id] });
                                        }
                                    },
                                    michaelexify: {
                                        name: "Michaelexify",
                                        callback: function () {
                                            socket.emit("command", { list: ["michaelexify", d.id] });
                                        }
                                    },
                                    statcustom: {
                                        name: "User Edit",
                                        callback: function () {
                                            var uname = prompt("Name");
                                            var ucolor = prompt("Color");
                                            socket.emit("useredit", { id: d.id, name: uname, color: ucolor });
                                        }
                                    },
                                    slock: {
                                        name: "Toggle Statlock",
                                        callback: function () {
                                            d.statlock = !d.statlock;
                                            socket.emit("command", { list: ["statlock", d.id] });
                                        }
                                    },
                                    fullmute: {
                                        name: "Server Mute/Unmute",
                                        disabled: authlevel < 1.1,
                                        callback: function () {
                                            socket.emit("command", { list: ["smute", d.id] });
                                        }
                                    },
                                    niggle: {
                                        name: "Nuke",
                                        disabled: authlevel < 1.1,
                                        callback: function () {
                                            socket.emit("command", { list: ["floyd", d.id] });
                                        }
                                    },
                                    deporn: {
                                        name: "Blacklist Crosscolor",
                                        disabled: authlevel < 1.1,
                                        callback: function () {
                                            socket.emit("command", { list: ["deporn", d.id] });
                                        }
                                    },
                                    kick: {
                                        name: "Kick",
                                        disabled: authlevel < 1.1,
                                        callback: function () {
                                            socket.emit("command", { list: ["kick", d.id] });
                                        }
                                    }
                                }
                            }
                        }

                        if(authlevel >= 1.5){
                            menu.items.mod.items.ip = {
                                name: "Get IP",
                                callback: function () {
                                    socket.emit("command", { list: ["ip", d.id] });
                                }
                            }
                        }

                        //Add Pope options to the kingmode menu if Pope
                        if (authlevel >= 2) {
                            menu.items.mod.items.tagsom = {
                                name: "Set Tag",
                                callback: function () {
                                    let tagg = prompt("Put the custom tag here!");
                                    socket.emit("command", { list: ["tagsom", d.id + " " + tagg] });
                                }
                            }
                            menu.items.mod.items.ip = {
                                name: "Get IP",
                                callback: function () {
                                    socket.emit("command", { list: ["ip", d.id] });
                                }
                            }
                            menu.items.mod.items.tickbuilder = {
                                name: "Tickbuilder",
                                callback: function () {
                                    socket.emit("command", { list: ["tickbuilder", d.id] });
                                }
                            }
                            menu.items.mod.items.fullmute2 = {
                                name: "IP Mute",
                                callback: function () {
                                    if (prompt("Are you sure? Type 'YES' if so") == 'YES') socket.emit("command", { list: ["ipmute", d.id] });
                                }
                            }
                        }
                        //End of menu
                        return menu;
                    },
                    animation: { duration: 175, show: "fadeIn", hide: "fadeOut" },
                }),
                (this.needsUpdate = !1),
                this.runSingleEvent([{ type: "anim", anim: "surf_intro", ticks: 30 }]);
        }
        return (
            _createClass(a, [
                {
                    key: "eventMake",
                    value: function (a) {
                        return {
                            list: a,
                            index: 0,
                            timer: 0,
                            cur: function () {
                                return this.list[this.index];
                            },
                        };
                    },
                },
                {
                    key: "mousedown",
                    value: function (a) {
                        1 == a.which && ((this.drag = !0), (this.dragged = !1), (this.drag_start = { x: a.pageX - this.x, y: a.pageY - this.y }));
                    },
                },
                {
                    key: "mousemove",
                    value: function (a) {
                        this.drag && (this.move(a.pageX - this.drag_start.x, a.pageY - this.drag_start.y), (this.dragged = !0));
                    },
                },
                {
                    key: "move",
                    value: function (a, b) {
                        0 !== arguments.length && ((this.x = a), (this.y = b));
                        var c = this.maxCoords();
                        (this.x = Math.min(Math.max(0, this.x), c.x)),
                            (this.y = Math.min(Math.max(0, this.y), c.y)),
                            this.$element.css({ marginLeft: this.x, marginTop: this.y }),
                            (this.sprite.x = this.x),
                            (this.sprite.y = this.y),
                            (BonziHandler.needsUpdate = !0),
                            this.updateDialog();
                    },
                },
                {
                    key: "mouseup",
                    value: function (a) {
                        !this.dragged && this.drag && this.cancel(), (this.drag = !1), (this.dragged = !1);
                    },
                },
                {
                    key: "runSingleEvent",
                    value: function (a) {
                        this.mute || this.eventQueue.push(this.eventMake(a));
                    },
                },
                {
                    key: "clearDialog",
                    value: function () {
                        this.$dialogCont.html(""), this.$dialog.hide();
                    },
                },
                {
                    key: "cancel",
                    value: function () {
                        this.clearDialog(), this.stopSpeaking(), (this.eventQueue = [this.eventMake([{ type: "idle" }])]);
                    },
                },
                {
                    key: "retry",
                    value: function () {
                        this.clearDialog(), (this.event.timer = 0);
                    },
                },
                {
                    key: "stopSpeaking",
                    value: function () {
                        this.goingToSpeak = !1;
                        try {
                            this.voiceSource.stop();
                        } catch (a) { }
                    },
                },
                {
                    key: "cancelQueue",
                    value: function () {
                        this.willCancel = !0;
                    },
                },
                {
                    key: "updateAnim",
                    value: function () {
                        0 === this.event.timer && this.sprite.gotoAndPlay(this.event.cur().anim), this.event.timer++ , (BonziHandler.needsUpdate = !0), this.event.timer >= this.event.cur().ticks && this.eventNext();
                    },
                },
                {
                    key: "updateText",
                    value: function () {
                        0 === this.event.timer && (this.$dialog.css("display", "block"), (this.event.timer = 1), this.talk(this.event.cur().text, this.event.cur().say, !0)), "none" == this.$dialog.css("display") && this.eventNext();
                    },
                },
                {
                    key: "updateIdle",
                    value: function () {
                        var a = "idle" == this.sprite.currentAnimation && 0 === this.event.timer;
                        (a = a || this.data.pass_idle.indexOf(this.sprite.currentAnimation) != -1),
                            a
                                ? this.eventNext()
                                : (0 === this.event.timer && ((this.tmp_idle_start = this.data.to_idle[this.sprite.currentAnimation]), this.sprite.gotoAndPlay(this.tmp_idle_start), (this.event.timer = 1)),
                                    this.tmp_idle_start != this.sprite.currentAnimation && "idle" == this.sprite.currentAnimation && this.eventNext(),
                                    (BonziHandler.needsUpdate = !0));
                    },
                },
                {
                    key: "updateRandom",
                    value: function () {
                        var a = this.event.cur().add,
                            b = Math.floor(a.length * this.rng()),
                            c = this.eventMake(a[b]);
                        this.eventNext(), this.eventQueue.unshift(c);
                    },
                },
                {
                    key: "update",
                    value: function () {
                        //OK solution as long as no real color starts with "http"
                        if (this.color.startsWith("http")) {
                            //Set canvas bg to the crosscolor as easel.js itself cant handle cors
                            this.$canvas.css("background-image", 'url("' + this.color + '")');
                            this.$canvas.css("background-position-x", -Math.floor(this.sprite.currentFrame % 17) * this.data.size.x + 'px');
                            this.$canvas.css("background-position-y", -Math.floor(this.sprite.currentFrame / 17) * this.data.size.y + 'px');
                        } else this.$canvas.css("background-image", 'none');

                        //For tagged people
                        if (this.userPublic.tagged) {
                            //Add one if it doesnt exist
                            if (this.offtag == undefined) {
                                $("#bonzi_" + this.id).append("<div id='tag_" + this.id + "' class='official_tag'><b><i>" + this.userPublic.tag + "</i></b></div>")
                                this.offtag = $("#tag_" + this.id);
                            }
                            //Update if it exists
                            else {
                                this.offtag.html("<b><i>" + this.userPublic.tag + "</i></b>")
                            }
                        }
                        //Remove if they're not tagged but still have a tag
                        else if (this.offtag != undefined) {
                            this.offtag.remove();
                            this.offtag = undefined;
                        }
                        if (this.run) {
                            if (
                                (0 !== this.eventQueue.length && this.eventQueue[0].index >= this.eventQueue[0].list.length && this.eventQueue.splice(0, 1), (this.event = this.eventQueue[0]), 0 !== this.eventQueue.length && this.eventRun)
                            ) {
                                var a = this.event.cur().type;
                                try {
                                    this[this.eventTypeToFunc[a]]();
                                } catch (b) {
                                    this.event.index++;
                                }
                            }
                            this.willCancel && (this.cancel(), (this.willCancel = !1)), this.needsUpdate && (this.stage.update(), (this.needsUpdate = !1));
                        }
                    },
                },
                {
                    key: "eventNext",
                    value: function () {
                        (this.event.timer = 0), (this.event.index += 1);
                    },
                },
                {
                    key: "talk",
                    value: function (a, b, c) {
                        var d = this;
                        var toscroll = document.getElementById("logcontent").scrollHeight - document.getElementById("logcontent").scrollTop < 605;
                        (c = c || !1),
                            (a = replaceAll(a, "{NAME}", this.userPublic.name)),
                            (a = replaceAll(a, "{COLOR}", this.color)),
                            "undefined" != typeof b ? ((b = replaceAll(b, "{NAME}", this.userPublic.name)), (b = replaceAll(b, "{COLOR}", this.color))) : (b = a.replace("&gt;", "")),

                            //document.getElementById("logcontent").innerHTML += "<p><font color='"+this.userPublic.color+"'>"+this.userPublic.name+": </font>"+a+"</p>";
                            document.getElementById("logcontent").insertAdjacentHTML("beforeend", "<p><font color='" + this.userPublic.color + "'>" + this.userPublic.name + "#"+this.id+": </font>" + a + "</p>");
                        if (toscroll) document.getElementById("logcontent").scrollTop = document.getElementById("logcontent").scrollHeight;

                        (b = replaceAll(b, "&apos;", "")),
                            (b = replaceAll(b, "&quot;", " quote ")),
                            (b = replaceAll(b, "&amp;", " and ")),
                            (b = replaceAll(b, "&#91;", ""));

                        if (!a.startsWith("<img class='userimage'") && !a.startsWith("<video class='uservideo'") && !a.startsWith("<audio class='useraudio'")) a = linkify(a);

                        else b = "-e";

                        ignorehtml.forEach((toignore) => {
                            b = replaceAll(b, "<" + toignore + ">", "")
                            b = replaceAll(b, "</" + toignore + ">", "")
                        });


                        var e = "&gt;" == a.substring(0, 4) || ">" == a[0];
                        this.$dialogCont[c ? "html" : "text"](a)[e ? "addClass" : "removeClass"]("bubble_greentext").css("display", "block"),
                            this.stopSpeaking(),
                            (this.goingToSpeak = !0),
                            speak.play(
                                b,
                                { pitch: this.userPublic.pitch, speed: this.userPublic.speed },
                                function () {
                                    d.clearDialog();
                                },
                                function (a) {
                                    d.goingToSpeak || a.stop(), (d.voiceSource = a);
                                }
                            );
                    },
                },
                {
                    key: "joke",
                    value: function () {
                        this.runSingleEvent(this.data.event_list_joke);
                    },
                },
                {
                    key: "fact",
                    value: function () {
                        this.runSingleEvent(this.data.event_list_fact);
                    },
                },
                {
                    key: "exit",
                    value: function (a) {
                        this.runSingleEvent([{ type: "anim", anim: "surf_away", ticks: 30 }]), setTimeout(a, 2e3);
                    },
                },
                {
                    key: "deconstruct",
                    value: function () {
                        this.stopSpeaking(), BonziHandler.stage.removeChild(this.sprite), (this.run = !1), this.$element.remove();
                    },
                },
                {
                    key: "updateName",
                    value: function () {
                        this.$nametag.html(this.userPublic.dispname + this.userPublic.typing);
                    },
                },
                {
                    key: "youtube",
                    value: function (a) {
                        if (!this.mute) {
                            var b = "iframe";
                            this.$dialogCont.html(
                                "\n\t\t\t\t\t<" +
                                b +
                                ' type="text/html" width="173" height="173" \n\t\t\t\t\tsrc="https://www.youtube.com/embed/' +
                                a +
                                '?autoplay=1" \n\t\t\t\t\tstyle="width:173px;height:173px"\n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tallowfullscreen="allowfullscreen"\n\t\t\t\t\tmozallowfullscreen="mozallowfullscreen"\n\t\t\t\t\tmsallowfullscreen="msallowfullscreen"\n\t\t\t\t\toallowfullscreen="oallowfullscreen"\n\t\t\t\t\twebkitallowfullscreen="webkitallowfullscreen"\n\t\t\t\t\t></' +
                                b +
                                ">\n\t\t\t\t"
                            ),
                                this.$dialog.show();
                        }
                    },
                },
                {
                    key: "backflip",
                    value: function (a) {
                        var b = [{ type: "anim", anim: "backflip", ticks: 15 }];
                        a && (b.push({ type: "anim", anim: "cool_fwd", ticks: 30 }), b.push({ type: "idle" })), this.runSingleEvent(b);
                    },
                },
                {
                    key: "updateDialog",
                    value: function () {
                        var a = this.maxCoords();
                        this.data.size.x + this.$dialog.width() > a.x
                            ? this.y < this.$container.height() / 2 - this.data.size.x / 2
                                ? this.$dialog.removeClass("bubble-top").removeClass("bubble-left").removeClass("bubble-right").addClass("bubble-bottom")
                                : this.$dialog.removeClass("bubble-bottom").removeClass("bubble-left").removeClass("bubble-right").addClass("bubble-top")
                            : this.x < this.$container.width() / 2 - this.data.size.x / 2
                                ? this.$dialog.removeClass("bubble-left").removeClass("bubble-top").removeClass("bubble-bottom").addClass("bubble-right")
                                : this.$dialog.removeClass("bubble-right").removeClass("bubble-top").removeClass("bubble-bottom").addClass("bubble-left");
                    },
                },
                {
                    key: "maxCoords",
                    value: function () {
                        return { x: this.$container.width() - this.data.size.x, y: this.$container.height() - this.data.size.y - $("#chat_bar").height() };
                    },
                },
                {
                    key: "asshole",
                    value: function (a) {
                        this.runSingleEvent([{ type: "text", text: "Hey, " + a + "!" }, { type: "text", text: "You're a fucking asshole!", say: "your a fucking asshole!" }, { type: "anim", anim: "grin_fwd", ticks: 15 }, { type: "idle" }]);
                    },
                },
                {
                    key: "owo",
                    value: function (a) {
                        this.runSingleEvent([
                            { type: "text", text: "*notices " + a + "'s PeedyBulge™*", say: "notices " + a + "s PeedyBulge" },
                            { type: "text", text: "owo, wat dis?", say: "oh woah, what diss?" },
                        ]);
                    },
                },
                {
                    key: "updateSprite",
                    value: function (a) {
                        var b = BonziHandler.stage;
                        this.cancel(),
                            b.removeChild(this.sprite);
                        if (this.color.startsWith("http")) {
                            var d = { images: [this.color], frames: BonziData.sprite.frames, animations: BonziData.sprite.animations }
                            var shjeet = new createjs.SpriteSheet(d);
                            this.colorPrev != this.color && (delete this.sprite, (this.sprite = new createjs.Sprite(shjeet, a ? "gone" : "idle")));
                        } else {
                            this.colorPrev != this.color && (delete this.sprite, (this.sprite = new createjs.Sprite(BonziHandler.spriteSheets[this.color], a ? "gone" : "idle")));
                        }
                        b.addChild(this.sprite);
                        this.move();
                    },
                },
            ]),
            a
        );
    })(),
    BonziData = {
        size: { x: 200, y: 160 },
        sprite: {
            frames: { width: 200, height: 160 },
            animations: {
                idle: 0,
                surf_across_fwd: [1, 8, "surf_across_still", 1],
                surf_across_still: 9,
                surf_across_back: { frames: range(8, 1), next: "idle", speed: 1 },
                clap_fwd: [10, 12, "clap_still", 1],
                clap_still: [13, 15, "clap_still", 1],
                clap_back: { frames: range(12, 10), next: "idle", speed: 1 },
                surf_intro: [277, 302, "idle", 1],
                surf_away: [16, 38, "gone", 1],
                gone: 39,
                shrug_fwd: [40, 50, "shrug_still", 1],
                shrug_still: 50,
                shrug_back: { frames: range(50, 40), next: "idle", speed: 1 },
                earth_fwd: [51, 57, "earth_still", 1],
                earth_still: [58, 80, "earth_still", 1],
                earth_back: [81, 86, "idle", 1],
                look_down_fwd: [87, 90, "look_down_still", 1],
                look_down_still: 91,
                look_down_back: { frames: range(90, 87), next: "idle", speed: 1 },
                lean_left_fwd: [94, 97, "lean_left_still", 1],
                lean_left_still: 98,
                lean_left_back: { frames: range(97, 94), next: "idle", speed: 1 },
                beat_fwd: [101, 103, "beat_still", 1],
                beat_still: [104, 107, "beat_still", 1],
                beat_back: { frames: range(103, 101), next: "idle", speed: 1 },
                cool_fwd: [108, 124, "cool_still", 1],
                cool_still: 125,
                cool_back: { frames: range(124, 108), next: "idle", speed: 1 },
                cool_right_fwd: [126, 128, "cool_right_still", 1],
                cool_right_still: 129,
                cool_right_back: { frames: range(128, 126), next: "idle", speed: 1 },
                cool_left_fwd: [131, 133, "cool_left_still", 1],
                cool_left_still: 134,
                cool_left_back: { frames: range(133, 131), next: "cool_still", speed: 1 },
                cool_adjust: { frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124], next: "cool_still", speed: 1 },
                present_fwd: [137, 141, "present_still", 1],
                present_still: 142,
                present_back: { frames: range(141, 137), next: "idle", speed: 1 },
                look_left_fwd: [143, 145, "look_left_still", 1],
                look_left_still: 146,
                look_left_back: { frames: range(145, 143), next: "idle", speed: 1 },
                look_right_fwd: [149, 151, "look_right_still", 1],
                look_right_still: 152,
                look_right_back: { frames: range(151, 149), next: "idle", speed: 1 },
                lean_right_fwd: { frames: range(158, 156), next: "lean_right_still", speed: 1 },
                lean_right_still: 155,
                lean_right_back: [156, 158, "idle", 1],
                praise_fwd: [159, 163, "praise_still", 1],
                praise_still: 164,
                praise_back: { frames: range(163, 159), next: "idle", speed: 1 },
                grin_fwd: [182, 189, "grin_still", 1],
                grin_still: 184,
                grin_back: { frames: range(184, 182), next: "idle", speed: 1 },
                bow_fwd: [224, 232, "bow_still", 1],
                bow_back: { frames: [232, 231, 230, 229, 228, 227, 226, 225, 224], next: "idle", speed: 1 },
                bow_still: 232,
                think_fwd: [242, 247, "think_still", 1],
                think_back: { frames: [247, 246, 245, 244, 243, 242], next: "idle", speed: 1 },
                think_still: 247,
                smile_fwd: [181, 186, "smile_still", 1],
                smile_back: { frames: [186, 185, 184, 183, 182, 181], next: "idle", speed: 1 },
                smile_still: 186,
                backflip: [331, 343, "idle", 1],
            },
        },
        to_idle: {
            surf_across_fwd: "surf_across_back",
            surf_across_still: "surf_across_back",
            clap_fwd: "clap_back",
            clap_still: "clap_back",
            shrug_fwd: "shrug_back",
            shrug_still: "shrug_back",
            earth_fwd: "earth_back",
            earth_still: "earth_back",
            look_down_fwd: "look_down_back",
            look_down_still: "look_down_back",
            lean_left_fwd: "lean_left_back",
            lean_left_still: "lean_left_back",
            beat_fwd: "beat_back",
            beat_still: "beat_back",
            cool_fwd: "cool_back",
            cool_still: "cool_back",
            cool_adjust: "cool_back",
            cool_left_fwd: "cool_left_back",
            cool_left_still: "cool_left_back",
            present_fwd: "present_back",
            present_still: "present_back",
            look_left_fwd: "look_left_back",
            look_left_still: "look_left_back",
            look_right_fwd: "look_right_back",
            look_right_still: "look_right_back",
            lean_right_fwd: "lean_right_back",
            lean_right_still: "lean_right_back",
            praise_fwd: "praise_back",
            praise_still: "praise_back",
            grin_fwd: "grin_back",
            grin_still: "grin_back",
            bow_fwd: "bow_back",
            bow_still: "bow_back",
            think_fwd: "think_back",
            think_still: "think_back",
            smile_fwd: "smile_back",
            smile_still: "smile_back",
            backflip: "idle",
            idle: "idle",
        },
        pass_idle: ["gone"],
        event_list_joke_open: [
            [
                { type: "text", text: "Alright, here is one." },
                { type: "anim", anim: "praise_fwd", ticks: 15 },
                { type: "text", text: '"Haha, look at the stupid {COLOR} bird telling jokes!" Fuck you. It isn\'t funny.', say: "Hah hah! Look at the stupid {COLOR} blob telling jokes! Fuck you. It isn't funny." },
                { type: "anim", anim: "praise_back", ticks: 15 },
                { type: "text", text: "No comments." },
            ],
            [
                { type: "text", text: "Prepare for something Kadshit never heard of, {NAME}" },
                { type: "anim", anim: "praise_fwd", ticks: 15 },
                { type: "text", text: "LIFE!" },
                { type: "anim", anim: "praise_back", ticks: 15 },
            ],
            [{ type: "text", text: "{NAME} used /joke. Whoop-dee-fucking doo." }],
            [{ type: "text", text: "{NAME} begged me for a joke, let's tell it." }],
            [{ type: "text", text: "Prepare for the worst joke." }],
            [{ type: "text", text: "HEY YOU IDIOTS ITS TIME FOR A JOKE" }],
            [
                { type: "text", text: "Wanna hear a joke?" },
                { type: "text", text: "No?" },
                { type: "text", text: "Then go fuck yourself." },
            ],
            [
                { type: "text", text: "{NAME}? I didn't know you like my jokes so much." },
            ],
            [
                { type: "text", text: "Time to make fun of Kadshit." },
            ],
            [
                { type: "text", text: "{NAME}? Are you sure you want to listen to the creator of this site's horribly written jokes? I mean, they're not even funny. But are you sure? Ok. Here we go." },
            ],
            [{ type: "text", text: "Senpai {NAME} wants me to tell a joke." }],
            [{ type: "text", text: "Time for whatever horrible fucking jokes the creator of this site wrote." }],
        ],
        event_list_joke_mid: [
            [
                { type: "text", text: "What is easy to get into, but hard to get out of?" },
                { type: "text", text: "Child support!" },
            ],
            [
                { type: "text", text: "Why do we call JavaScript a skid?" },
                { type: "text", text: "Because it's raping servers nonstop! GRRRRRRRRRR!" },
                { type: "anim", anim: "shrug_back", ticks: 15 },
                { type: "text", text: "Sorry for raging." },
            ],
            [
                {
                    type: "text",
                    text: 'Two sausages are in a pan. One looks at the other and says "Boy it\'s hot in here!" and the other sausage says "Unbelievable! It\'s a talking sausage!"',
                    say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!",
                },
                { type: "anim", anim: "shrug_back", ticks: 15 },
                { type: "text", text: "If you used /joke for no reason then you're stupid, i am not even gonna tell you a joke. You're just a fucking idiot." },
            ],
            [
                { type: "text", text: "What is in the middle of Paris?" },
                { type: "text", text: "Pam from Brawl Stars." },
            ],
            [
                { type: "text", text: "What is sticky and is like a slime?" },
                { type: "text", text: "Blob fish." },
            ],
            [
                { type: "text", text: "What do you get through 1000 dollars?" },
                { type: "text", text: "Green George Washington." },
            ],
            [
                { type: "text", text: "Why Water isn't blue?"},
                { type: "text", text: "Because it is transparent!" },
            ],
            [
                { type: "text", text: "What do you call an autistic and stupid 9 year old with skibidi toilet syndrome?"},
                { type: "text", text: "Kadir from Turkey." },
            ],
            [
                { type: "text", text: "What do you call an kiddie who is mad at BlueDragon all the time and needs to stop being an retard?"},
                { type: "text", text: "Michaelexi from United States." },
            ],
            [
                { type: "text", text: "Why Gasters watch Parn?"},
                { type: "text", text: "Because parnats gast you when you spuy on them!" },
            ],
            [
                { type: "text", text: "Why is Old Baldi shaped like an egg?"},
                { type: "text", text: "Because Old Baldi is a omlette." },
            ],
            [
                { type: "text", text: "What goes in pink and comes out blue?" },
                { type: "text", text: "Sonic's ass.." },
            ],
            [
                { type: "text", text: "What type of water won't freeze?" },
                { type: "text", text: "Your mom's water." },
            ],
            [
                { type: "text", text: "Who earns a living by driving his customers away?" },
                { type: "text", text: "Nintendo!" },
            ],
            [
                    { type: "text", text: "What did the beaver say to the tree?" },
                    { type: "anim", anim: "shrug_back", ticks: 15 },
                    { type: "text", text: "Alright, let's get serious here. I am not gonna tell a joke right now, but i will tell you an interesting fact. Wanna hear it?" },
                    { type: "text", text: "Ok, so do you want to know how to make your Windows 10 or 11 computer faster even though you have an Hard Drive but not an SSD?" },
                    { type: "text", text: "So to make your Windows 10 or 11 computer faster with an HDD (Hard Drive) is to install an application called File Shredder, you can get it at https://www.fileshredder.org/" },
                    { type: "text", text: "Once you've done installing it. Right click on the File Shredder shortcut and run it as administrator, and if you see the message would you like to make this application to make changes to your computer, click Yes." },
                    { type: "text", text: "When you did that, click on add Folder and select your C: drive, after this. Click Shred files and then click OK, if you get a TrustedInstaller permission, then don't shred these files because TrustedInstaller is fucking shit. If you don't get permissions, then you can delete it freely." },
                    { type: "text", text: "Once you've done with the shredding, you will get more storage and it will not be slow with an Hard Drive. Enjoy your new computer!" },
                ],
                [
            ],
            [
                { type: "text", text: "Great, i wasted your time!" }
            ],
            [
                { type: "text", text: "What did the digital clock say to the grandfather clock?" },
                { type: "text", text: "Ding dong! Ding dong!" },
            ],
            [
                { type: "text", text: "What do you call a man who shaves 10 times a day?" },
                { type: "text", text: "A woman." },
            ],
            [
                { type: "text", text: "How do you get water in watermelons?" },
                { type: "text", text: "Wash them. Then you get water in watermelons. You're welcome!" },
            ],
            [
                { type: "text", text: "Who did the happy ho ho ho acting like an kiddie who thinks it's christmas?" },
                { type: "text", text: "That one fake Santa Claus pretending that it's christmas." },
            ],
            [
                { type: "text", text: "What is the definition of a sculptor?" },
                { type: "text", text: "A chip off the old block!" },
            ],
            [
                { type: "text", text: "Humans tell funny jokes." },
                { type: "text", text: "Not everyone likes your jokes retard." },
            ],
            [
                { type: "text", text: "Why do Splatoon characters paint stuff?" },
                { type: "text", text: "Because they've been DRAWIN' DIKS." },
                { type: "text", text: "I offended Splatoon, this is fine." },
            ],
            [
                { type: "text", text: "Humans tell funny jokes." },
                { type: "text", text: "But.." },
                { type: "text", text: "Not everyone laughs at your stupid jokes." },
                { type: "text", text: "Ha ha." },
            ],
            [
                { type: "text", text: "Why do we call Prime an Hydration Drink?" },
                { type: "text", text: "Because KIDDIES are looking for it to get popular. XD please send the Primes back to my Walmart at the back of the store." },
            ],
            [
                { type: "text", text: "Here's a funny joke:" },
                { type: "text", text: "How many iPhones does it take to assemble to make an 8K video?" },
                { type: "text", text: "I don't know but just 20 can be assembled together to make an 8K video." },
                { type: "anim", anim: "shrug_back", ticks: 15 },
                { type: "text", text: "Apple should make that, right {NAME}?" },
            ],
            [
                { type: "text", text: "Why did the chicken cross the road?" },
                { type: "anim", anim: "shrug_back", ticks: 15 },
                { type: "text", text: "Don't you like already know this joke? If you don't even know this joke then you're not a human living." },
            ],
            [
                { type: "text", text: "What is a cow that eats grass?" },
                { type: "text", text: "ASS" },
                { type: "text", text: "I'm a comedic genius, I know." },
            ],
        ],
        event_list_joke_end: [
            [
                { type: "text", text: "{NAME} Did you laugh at this joke? When i told this joke to someone, they fell out of their window laughing! I wasn't supposed to make them laugh tho." },
                { type: "text", text: "This joke was unfunny to me, but funny to him." },
            ],
            [{ type: "text", text: "Where do I come up with these? My butt? I'm not sure." }],
            [
                { type: "text", text: "Am i a joke to you {NAME}? I am a blob I jump around on the monkey bars yeah huh?" },
            ],
            [{ type: "text", text: "Maybe i will keep my day job, {NAME}. Patreon didn't accept me." }],
            [
                { type: "text", text: "Laughter is the best medicine!" },
                { type: "text", text: "Apart from meth." },
            ],
            [
                { type: "text", text: "NOW LAUGH!" },
            ],
            [
                { type: "text", text: "You should tell these jokes to your mom." },
            ],
            [
                { type: "text", text: "Don't judge me on my sense of humor alone." },
                { type: "text", text: "Help! I'm being oppressed!" },
            ],
        ],
        event_list_fact_open: [[{ type: "html", text: "Yeah, of course {NAME} wants me to tell a fact.", say: "Yeah, of course {NAME} wants me to tell a fact." }]],
        event_list_fact_mid: [
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?", say: "Did you know that Yer Anus is 31 thousand 500 and 18 miles in diameter?" },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Women are objects." },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Did you know that BlobWORLD was released back in May or April?" },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "I forgot the fact. I'm sorry." },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Fun fact: You can get your computer infected by downloading SuperstarZacharyKill at https://sites.google.com/view/superstarzachary?usp=sharing, just be sure you have .NET Framework 8.0 Runtime Desktop and MASH installed." },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Dee From PBS Kids has no dad, he's a fatherless kiddie." },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Did you know that the first computer was invented in 1936?" },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "BlobWORLD haters are bad as fuck." },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "anim", anim: "earth_fwd", ticks: 15 },
                { type: "text", text: "Seamus lives in Sullivan, Ohio. His parents are called Scott and Leslie cremeens make sure to harass them since they have social media so you can just google their full names!." },
                { type: "anim", anim: "earth_back", ticks: 15 },
                { type: "anim", anim: "grin_fwd", ticks: 15 },
            ],
            [
                { type: "text", text: "Fun Fact: The skript kiddie of this site didn't bother checking if the text that goes into the dialog box is HTML code." },
                { type: "html", text: "<img src='./img/misc/topjej.png'></img>", say: "top jej" },
            ],
        ],
        event_list_fact_end: [[{ type: "text", text: "geez this fact was interesting right? {NAME}?" }]],
    };
(BonziData.event_list_joke = [
    { type: "add_random", pool: "event_list_joke_open", add: BonziData.event_list_joke_open },
    { type: "anim", anim: "shrug_fwd", ticks: 15 },
    { type: "add_random", pool: "event_list_joke_mid", add: BonziData.event_list_joke_mid },
    { type: "idle" },
    { type: "add_random", pool: "event_list_joke_end", add: BonziData.event_list_joke_end },
    { type: "idle" },
]),
    (BonziData.event_list_fact = [
        { type: "add_random", pool: "event_list_fact_open", add: BonziData.event_list_fact_open },
        { type: "add_random", pool: "event_list_fact_mid", add: BonziData.event_list_fact_mid },
        { type: "idle" },
        { type: "add_random", pool: "event_list_fact_end", add: BonziData.event_list_fact_end },
        { type: "idle" },
    ]),
    (BonziData.event_list_triggered = [
        { type: "anim", anim: "cool_fwd", ticks: 30 },
        {
            type: "text",
            text: "I sexually identify as Peedy. Ever since I was a young bird I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
            say: "I sexually identify as Peedy. Ever since I was a young bird I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
        },
        {
            type: "text",
            text: "People say to me that a person being a Peedy is impossible and that I’m a fucking virus but I don’t care, I’m beautiful.",
            say: "People say to me that a person being a Peedy is impossible and that I'm a fucking virus but I dont care, I'm beautiful.",
        },
        {
            type: "text",
            text: "I’m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me “Joel” and respect my right to meme from above and meme needlessly.",
            say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me Joel and respect my right to meme from above and meme needlessly.",
        },
        {
            type: "text",
            text: "If you can’t accept me you’re birdphobic and need to check your file permissions. Thank you for being so understanding.",
            say: "If you cant accept me your birdphobic and need to check your file permissions. Thank you for being so understanding.",
        },
        { type: "idle" },
    ]), BonziData.event_list_linux = [{
        type: "text",
        text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, Peedy/Linux, or as I’ve recently taken to calling it, BLOB plus Linux."
    }, {
        type: "text",
        text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning Peedy system made useful by the BLOB corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E."
    }, {
        type: "text",
        text: "Many computer users run a modified version of the Peedy system every day, without realizing it. Through a peculiar turn of events, the version of BLOB which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the Peedy system, developed by the Peedy Project."
    }, {
        type: "text",
        text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. "
    }, {
        type: "text",
        text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd."
    }, {
        type: "text",
        text: "Linux is normally used in combination with the Peedy operating system: the whole system is basically Peedy with Linux added, or Peedy/Linux. All the so-called “Linux” distributions are really distributions of Peedy/Linux."
    }]

BonziData.event_list_pawn = [
    {
        type: "text",
        text: "Hi, my name is Peedy, and this is my website. I meme here with my old harambe, and my son, MaxALERT. Everything in here has an ad and a fact. One thing I've learned after 17 years - you never know what is gonna give you some malware."
    },

];

$(document).ready(function () {
    window.BonziHandler = new (function () {
        return (
            (this.framerate = 1 / 15),
            (this.spriteSheets = {}),
            (this.prepSprites = function () {
                for (var a = ["black", "blue", "brown", "green", "purple", "red", "pink", "pope", "king", "jew", "inverted", "orange", "blessed", "white", "yellow", "troll", "rabbi", "twoheaded", "michaelexi", "trump", "shell5435849023843804983207403827048732081083727191847174"], b = 0; b < a.length; b++) {
                    var c = a[b],
                        d = { images: ["./img/bonzi/" + c + ".png"], frames: BonziData.sprite.frames, animations: BonziData.sprite.animations };
                    this.spriteSheets[c] = new createjs.SpriteSheet(d);
                }
            }),
            this.prepSprites(),
            (this.$canvas = $("#bonzi_canvas")),
            (this.stage = new createjs.StageGL(this.$canvas[0], { transparent: !0 })),
            (this.stage.tickOnUpdate = !1),
            (this.resizeCanvas = function () {
                var a = this.$canvas.width(),
                    b = this.$canvas.height();
                this.$canvas.attr({ width: this.$canvas.width(), height: this.$canvas.height() }), this.stage.updateViewport(a, b), (this.needsUpdate = !0);
                for (var c = 0; c < usersAmt; c++) {
                    var d = usersKeys[c];
                    bonzis[d].move();
                }
            }),
            this.resizeCanvas(),
            (this.resize = function () {
                setTimeout(this.resizeCanvas.bind(this), 1);
            }),
            (this.needsUpdate = !0),
            (this.intervalHelper = setInterval(
                function () {
                    this.needsUpdate = !0;
                }.bind(this),
                1e3
            )),
            (this.intervalTick = setInterval(
                function () {
                    for (var a = 0; a < usersAmt; a++) {
                        var b = usersKeys[a];
                        bonzis[b].update();
                    }
                    this.stage.tick();
                }.bind(this),
                1e3 * this.framerate
            )),
            (this.intervalMain = setInterval(
                function () {
                    this.needsUpdate && (this.stage.update(), (this.needsUpdate = !1));
                }.bind(this),
                1e3 / 60
            )),
            $(window).resize(this.resize.bind(this)),
            (this.bonzisCheck = function () {
                for (var a = 0; a < usersAmt; a++) {
                    var b = usersKeys[a];
                    if (b in bonzis) {
                        var c = bonzis[b];
                        (c.userPublic = usersPublic[b]), c.updateName();
                        var d = usersPublic[b].color;
                        c.color != d && ((c.color = d), c.updateSprite());
                    } else bonzis[b] = new Bonzi(b, usersPublic[b]);
                }
            }),
            $("#btn_tile").click(function () {
                for (var a = $(window).width(), b = $(window).height(), c = 0, d = 80, e = 0, f = 0, g = 0; g < usersAmt; g++) {
                    var h = usersKeys[g];
                    bonzis[h].move(e, f), (e += 200), e + 100 > a && ((e = 0), (f += 160), f + 160 > b && ((c += d), (d /= 2), (f = c)));
                }
            }),
            this
        );
    })();
}),
    Array.prototype.equals && console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."),
    (Array.prototype.equals = function (a) {
        if (!a) return !1;
        if (this.length != a.length) return !1;
        for (var b = 0, c = this.length; b < c; b++)
            if (this[b] instanceof Array && a[b] instanceof Array) {
                if (!this[b].equals(a[b])) return !1;
            } else if (this[b] != a[b]) return !1;
        return !0;
    }),
    Object.defineProperty(Array.prototype, "equals", { enumerable: !1 });
var loadQueue = new createjs.LoadQueue(),
    loadDone = [],
    loadNeeded = ["bonziBlack", "bonziBlue", "bonziBrown", "bonziGreen", "bonziPurple", "bonziRed", "bonziPink", "bonziJew", "bonziOrange", "bonziInverted", "bonziBlessed", "bonziWhite", "bonziYellow", "bonziTroll", "bonziRabbi", "topjej", "bonziTwoheaded", "bonziMichaelexi", "bonziTrump", "bonziTicky"];
$(window).load(function () {
    $("#login_card").show(), $("#login_load").hide(), loadBonzis();
    $("#login_name").val(cookieobject.namee);
    if (cookieobject.background !== undefined) {
        if (cookieobject.background == "main") $("#bghold").html("");
        else $("#bghold").html("<img style='top:0;left:0;position:fixed;width:100%;height:100%;z-index:-10;' src='" + cookieobject.background + "'>");
    }
});
var undefined,
    hostname = window.location.hostname,
    socket = io(`//${hostname}:${window.location.port}`),
    usersPublic = {},
    bonzis = {},
    debug = !0;
socket.on("authlv", function (a) {
    authlevel = a.level;
    console.log(a.level)
}),
    $(function () {
        $("#login_go").click(loadTest),
            $("#login_room").val(window.location.hash.slice(1)),
            $("#login_name, #login_room").keypress(function (a) {
                13 == a.which && login();
            }),
            socket.on("ban", function (a) {
                $("#page_ban").show(), $("#ban_reason").html(a.reason), $("#ban_end").html(a.end == null ? "Never" : new Date(a.end).toString());
            }),
            socket.on("kick", function (a) {
                $("#page_kick").show(), $("#kicked_by").html(a);
            }),
            socket.on("login_error", error => {
                $("#login_card").show();
                $("#login_load").hide();
                $("#login_error").html("ERROR: " + error);
                $("#login_error").show();
            })
        socket.on("errr", error => {
            err = true;
            $("#page_error" + error.code).show()
        }),
            socket.on("motd", mcontents => {
                if (cookieobject.motd != mcontents.id && mcontents.id != 0) {
                    console.log(mcontents.id);
                    console.log(cookieobject.motd);
                    cookieobject.motd = mcontents.id;
                    compilecookie();
                    $("#motdcontent").html(mcontents.content);
                    $("#motd").show();
                }
            }),
            socket.on("rabbi", ()=> {
                $("#rabbi").show();
            })
            socket.on("rabbicode", code=>{
                cookieobject.rabbicode = code;
                compilecookie();
            })
        socket.on("disconnect", function (a) {
            if (err == false) errorFatal();
        });

    });
var usersAmt = 0,
    usersKeys = [];
$(window).load(function () {
    document.addEventListener("touchstart", touchHandler, !0), document.addEventListener("touchmove", touchHandler, !0), document.addEventListener("touchend", touchHandler, !0), document.addEventListener("touchcancel", touchHandler, !0);
});
