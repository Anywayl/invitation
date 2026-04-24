! function() {
    "use strict";
    const e = {
            section1: [{
                top: {
                    default: "-15%",
                    sm: "-20%"
                },
                left: {
                    default: "-5%",
                    sm: "2%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "-2%",
                    sm: "-30%"
                },
                left: {
                    default: "17%",
                    sm: "64%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "10%",
                    sm: "-50%"
                },
                left: {
                    default: "-3%",
                    sm: "30%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "-18%",
                    sm: "-50%"
                },
                left: {
                    default: "34%",
                    sm: "70%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "-17%",
                    sm: "-15%"
                },
                right: {
                    default: "42%",
                    sm: "7%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "-5%",
                    sm: "13%"
                },
                right: {
                    default: "22%",
                    sm: "-12%"
                },
                size: {
                    default: 22,
                    sm: 0
                },
                delay: 50
            }, {
                top: {
                    default: "-5%",
                    sm: "13%"
                },
                right: {
                    default: "0%",
                    sm: "-12%"
                },
                size: {
                    default: 22,
                    sm: 0
                },
                delay: 50
            }],
            section2: [{
                bottom: {
                    default: "40px",
                    sm: "-90%"
                },
                left: {
                    default: "147px",
                    sm: "5%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "38px",
                    sm: "-113%"
                },
                right: {
                    default: "164px",
                    sm: "2%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "18px",
                    sm: "-240%"
                },
                right: {
                    default: "30px",
                    sm: "-3%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "18px",
                    sm: "-250%"
                },
                left: {
                    default: "30px",
                    sm: "10%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }],
            section3: [{
                top: {
                    default: "26%",
                    sm: "99px"
                },
                left: {
                    default: "-7%",
                    sm: "3%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "46%",
                    sm: "99px"
                },
                left: {
                    default: "-7%",
                    sm: "54%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "26%",
                    sm: "71px"
                },
                left: {
                    default: "-4%",
                    sm: "5%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "26%",
                    sm: "13%"
                },
                right: {
                    default: "7%",
                    sm: "-12%"
                },
                size: {
                    default: 22,
                    sm: 0
                },
                delay: 50
            }, {
                top: {
                    default: "46%",
                    sm: "13%"
                },
                right: {
                    default: "7%",
                    sm: "-12%"
                },
                size: {
                    default: 22,
                    sm: 0
                },
                delay: 50
            }, {
                bottom: {
                    default: "26%",
                    sm: "71px"
                },
                right: {
                    default: "4%",
                    sm: "40%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }],
            section4: [{
                bottom: {
                    default: "226px"
                },
                left: {
                    default: "10%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "141px"
                },
                left: {
                    default: "13%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "53px"
                },
                left: {
                    default: "7%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "226px"
                },
                right: {
                    default: "36%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "141px"
                },
                right: {
                    default: "30%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "53px"
                },
                right: {
                    default: "38%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }]
        },
        t = {
            section1: [{
                top: {
                    default: "14%",
                    sm: "110%"
                },
                left: {
                    default: "4%",
                    sm: "7%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "-15%",
                    sm: "106%"
                },
                left: {
                    default: "13%",
                    sm: "25%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "-23%",
                    sm: "120%"
                },
                left: {
                    default: "38%",
                    sm: "48%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "-30%",
                    sm: "10%"
                },
                right: {
                    default: "46%",
                    sm: "9%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "-10%",
                    sm: "10%"
                },
                right: {
                    default: "20%",
                    sm: "5%"
                },
                size: {
                    default: 21,
                    sm: 0
                },
                delay: 50
            }, {
                bottom: {
                    default: "-10%",
                    sm: "10%"
                },
                right: {
                    default: "0%",
                    sm: "5%"
                },
                size: {
                    default: 21,
                    sm: 0
                },
                delay: 50
            }],
            section2: [{
                bottom: {
                    default: "27px",
                    sm: "-27%"
                },
                left: {
                    default: "34px",
                    sm: "0%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "0%",
                    sm: "-170%"
                },
                left: {
                    default: "50%",
                    sm: "-3%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "75px",
                    sm: "-30%"
                },
                right: {
                    default: "95px",
                    sm: "5%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "75px",
                    sm: "-190%"
                },
                right: {
                    default: "95px",
                    sm: "5%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "75px",
                    sm: "-250%"
                },
                right: {
                    default: "95px",
                    sm: "50%"
                },
                size: {
                    default: 21,
                    sm: 17
                },
                delay: 50
            }],
            section3: [{
                top: {
                    default: "36%",
                    sm: "137px"
                },
                left: {
                    default: "7%",
                    sm: "30%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "56%",
                    sm: "118px"
                },
                left: {
                    default: "7%",
                    sm: "80%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "16%",
                    sm: "33px"
                },
                left: {
                    default: "7%",
                    sm: "35%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }, {
                top: {
                    default: "36%",
                    sm: "13%"
                },
                right: {
                    default: "-7%",
                    sm: "-12%"
                },
                size: {
                    default: 22,
                    sm: 0
                },
                delay: 50
            }, {
                top: {
                    default: "56%",
                    sm: "13%"
                },
                right: {
                    default: "-7%",
                    sm: "-12%"
                },
                size: {
                    default: 22,
                    sm: 0
                },
                delay: 50
            }, {
                bottom: {
                    default: "16%",
                    sm: "52px"
                },
                right: {
                    default: "-7%",
                    sm: "13%"
                },
                size: {
                    default: 22,
                    sm: 17
                },
                delay: 50
            }],
            section4: [{
                bottom: {
                    default: "188px"
                },
                left: {
                    default: "32%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "108px"
                },
                left: {
                    default: "35%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "21px"
                },
                left: {
                    default: "33%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "188px"
                },
                right: {
                    default: "15%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "108px"
                },
                right: {
                    default: "17%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }, {
                bottom: {
                    default: "21px"
                },
                right: {
                    default: "8%"
                },
                size: {
                    default: 0,
                    sm: 17
                },
                delay: 50
            }]
        };

    function s(e) {
        const t = window.innerWidth;
        return "object" != typeof e ? e : t <= 768 && void 0 !== e.sm ? e.sm : t <= 1024 && void 0 !== e.md ? e.md : t <= 1280 && void 0 !== e.ld ? e.ld : e.default
    }

    function l(e, t, l, d = 0) {
        const a = gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 40%",
                once: !0
            },
            delay: d / 3e3
        });
        t.sort(((e, t) => (e.delay || 0) - (t.delay || 0))), t.forEach((t => {
            const d = document.createElement("img");
            d.src = l, d.classList.add("heart"), d.style.position = "absolute", d.style.opacity = 0, t.top && (d.style.top = s(t.top)), t.left && (d.style.left = s(t.left)), t.right && (d.style.right = s(t.right)), t.bottom && (d.style.bottom = s(t.bottom)), d.style.width = s(t.size) + "px", e.appendChild(d), a.to(d, {
                opacity: 1,
                scale: 1,
                duration: .3,
                ease: "back.out(1)"
            }, "+=" + (t.delay || 0) / 3e3)
        }))
    }
    document.querySelectorAll("[data-heart], [data-heart-dark]").forEach((s => {
        if (s.style.position = "relative", s.dataset.heart) {
            const t = s.dataset.heart;
            e[t] && l(s, e[t], "./img/press/heart_1.svg", 0)
        }
        if (s.dataset.heartDark) {
            const e = s.dataset.heartDark;
            t[e] && l(s, t[e], "./img/press/heart_dark.png", 500)
        }
    }))
}();
const gridSize = 15,
    grid = document.getElementById("grid"),
    canvas = document.getElementById("lineCanvas"),
    ctx = canvas.getContext("2d"),
    wordList = document.getElementById("wordList"),
    wordData = document.getElementById("words-data"),
    words = wordData.dataset.words.split(",").map((e => e.trim().toUpperCase())),
    foundWords = new Set;
let selectedCells = [];
words.forEach((e => {
    const t = document.createElement("span");
    t.textContent = e, t.dataset.word = e, wordList.appendChild(t)
}));
for (let e = 0; e < gridData.length; e++) {
    const t = document.createElement("p");
    t.className = "cell", t.textContent = gridData[e], t.dataset.letter = gridData[e], t.dataset.row = Math.floor(e / 15), t.dataset.col = e % 15, grid.appendChild(t)
}
const cells = Array.from(document.querySelectorAll(".cell"));

function getCellFromEvent(e) {
    const t = e.touches ? e.touches[0] : e,
        s = document.elementFromPoint(t.clientX, t.clientY);
    return s && s.classList.contains("cell") ? s : null
}

function startSelect(e) {
    e.preventDefault(), clearSelection();
    const t = getCellFromEvent(e);
    t && selectCell(t)
}

function continueSelect(e) {
    if (1 !== e.buttons && !e.touches) return;
    const t = getCellFromEvent(e),
        s = selectedCells[selectedCells.length - 1];
    t && !t.classList.contains("selected") && isNeighbor(t, s) && selectCell(t)
}

function endSelect() {
    if (0 === selectedCells.length) return;
    const e = selectedCells.map((e => e.dataset.letter)).join(""),
        t = [...wordList.children].find((t => t.dataset.word === e));
    t && !foundWords.has(e) ? (selectedCells.forEach((e => e.classList.add("correct"))), drawLine(selectedCells, "green"), t.classList.add("found"), foundWords.add(e), foundWords.size === words.length && showPopup2()) : (drawLine(selectedCells, "red"), setTimeout((() => {
        clearSelection(), clearCanvas()
    }), 600)), selectedCells = []
}

function selectCell(e) {
    e.classList.add("selected"), selectedCells.push(e)
}

function clearSelection() {
    cells.forEach((e => e.classList.remove("selected"))), selectedCells = []
}

function isNeighbor(e, t) {
    if (!e || !t) return !1;
    const s = +e.dataset.row,
        l = +e.dataset.col,
        d = +t.dataset.row,
        a = +t.dataset.col;
    return Math.abs(s - d) <= 1 && Math.abs(l - a) <= 1
}

function drawLine(e, t) {
    const s = grid.getBoundingClientRect();
    ctx.strokeStyle = t, ctx.lineWidth = 1, ctx.beginPath(), e.forEach(((e, t) => {
        const l = e.getBoundingClientRect(),
            d = l.left - s.left + l.width / 2,
            a = l.top - s.top + l.height / 2;
        0 === t ? ctx.moveTo(d, a) : ctx.lineTo(d, a)
    })), ctx.stroke()
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
grid.addEventListener("mousedown", startSelect), grid.addEventListener("mousemove", continueSelect), document.addEventListener("mouseup", endSelect), grid.addEventListener("touchstart", startSelect, {
    passive: !1
}), grid.addEventListener("touchmove", continueSelect, {
    passive: !1
}), document.addEventListener("touchend", endSelect);
const wrapper = document.querySelector(".grid-wrapper"),
    closeFlipper = document.querySelector(".close_flipper");

function resizeCanvas() {
    const e = document.getElementById("lineCanvas"),
        t = wrapper.clientWidth,
        s = wrapper.clientHeight;
    e.width = t, e.height = s, e.style.width = t + "px", e.style.height = s + "px", clearCanvas()
}
const popup = document.getElementById("popup"),
    flipper = document.querySelector(".flipper_img");

function showPopup2() {
    closeFlipper.classList.add("active"), wrapper.classList.add("active"), flipper.classList.add("active")
}

function closePopup2() {
    closeFlipper.classList.remove("active"), wrapper.classList.remove("active"), flipper.classList.remove("active"), clearSelection()
}
window.addEventListener("resize", resizeCanvas), window.addEventListener("load", resizeCanvas), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector(".section_countdown");
    new IntersectionObserver((t => {
        t.forEach((t => {
            t.isIntersecting ? e.classList.add("visible") : e.classList.remove("visible")
        }))
    }), {
        root: null,
        rootMargin: "100px 0px 100px 0px",
        threshold: 0
    }).observe(e)
})), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector(".last__section");
    new IntersectionObserver((t => {
        t.forEach((t => {
            t.isIntersecting ? e.classList.add("visible") : e.classList.remove("visible")
        }))
    }), {
        root: null,
        rootMargin: "100px 0px 100px 0px",
        threshold: 0
    }).observe(e)
})), AOS.init({
    once: !0,
    offset: .1 * window.innerHeight,
    duration: 2e3
}), AOS.refresh(), document.querySelectorAll("._color_item img").forEach((e => {
    e.onerror = () => e.style.display = "none"
}));
const music = document.getElementById("background-music"),
    muteBtn = document.getElementById("mute-button"),
    soundOn = document.getElementById("sound-on"),
    soundOff = document.getElementById("sound-off");
let isDragging = !1,
    startX = 0,
    offsetX = 0,
    musicStarted = !1,
    isMuted = !1;

function tryPlayMusic() {
    musicStarted || music.play().then((() => {
        musicStarted = !0, muteBtn.style.display = "block", console.log("Музика запущена на дотик")
    })).catch((e => {
        console.log("Автовідтворення заблоковано:", e)
    }))
}
muteBtn?.addEventListener("click", (() => {
    isMuted = !isMuted, music.muted = isMuted, soundOn.style.display = isMuted ? "inline" : "none", soundOff.style.display = isMuted ? "none" : "inline"
})), document.addEventListener("visibilitychange", (() => {
    document.hidden ? music.pause() : musicStarted && !isMuted && music.play().catch((e => console.log("Помилка продовження музики:", e)))
})), window.addEventListener("beforeunload", (() => {
    music.pause(), music.currentTime = 0
})), document.addEventListener("touchstart", tryPlayMusic, {
    once: !0
}), document.addEventListener("click", tryPlayMusic, {
    once: !0
});