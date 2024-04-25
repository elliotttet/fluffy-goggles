let clicks = 0;
let upgrade = 1;
let cps = 0;

const element = (elem) => document.getElementById(elem);

let Game = {
    upgrades: [{
        name: "more cliks per click",
        amount: 20,
        addcpc: 1,
        addcps: 0,
    }, {
        name: "more cliks per secondd",
        amount: 25,
        addcpc: 0,
        addcps: 1,
    }, {
        name: "op mouse",
        amount: 1000,
        addcpc: 100,
        addcps: 0,
    }, {
        name: "op autoclicker",
        amount: 12500,
        addcpc: 0,
        addcps: 1000,
    }, {
        name: "super op mouse",
        amount: 50000,
        addcpc: 10000,
        addcps: 0,
    }, {
        name: "super op autoclicker",
        amount: 750000,
        addcpc: 0,
        addcps: 50000
    }],
    init: () => {
        if ("CCGRSave" in localStorage) {
            Game.load();
        } else {
            Swal.fire({
                title: "warning",
                text: "this gaem doesnt auto save!!! you hav to manually save it by clicking the buttens!!! or you can go in settings and enable autosaving but its in beta ok bye",
                icon: "warning"
            });
        }
        element("game").hidden = false;
        element("loading").hidden = true;
        Game.loadevents();
        Game.tick();
        Game.fps();
        Game.loadmods();
    },
    loadmods: () => {
        let currentArray = localStorage.getItem("CCGRMods") ?? "[]";
        let parsed = JSON.parse(currentArray);
        parsed.forEach(thing => {
            eval(atob(thing));
        })
    },
    loadevents: () => {
        element("cookie").addEventListener("click", () => {
            Game.click();
        });

        element("enableautosave").addEventListener("click", () => {
            Swal.fire({
                title: 'enable autosave?',
                text: 'THIS IS GOOD FOR CASUAL PLAYERS but terible for advance players!!! its kinda buggy',
                showDenyButton: true,
            }).then((data) => {
                if (data.isConfirmed) {
                    localStorage.setItem("CCGRAutosave", "enabled");
                } else {
                    localStorage.setItem("CCGRAutosave", "disabled");
                }
            });
        });

        element("save").addEventListener("click", () => {
            Game.save();
        });

        element("loadsave").addEventListener("click", () => {
            Game.load();
        });

        element("mods").addEventListener("click", () => {
            element("modmenu").hidden = !element("modmenu").hidden;
        });

        element("loadmod").addEventListener("click", () => {
            eval(element("modjs").value);
        });
        
        element("removemods").addEventListener("click", () => {
            localStorage.removeItem("CCGRMods");
            Swal.fire({
                icon: "success",
                title: "success",
                text: "removed mods successfully! reload?"
            });
        });

        element("savemod").addEventListener("click", () => {
            let currentArray = localStorage.getItem("CCGRMods") ?? "[]";
            let parsed = JSON.parse(currentArray);
            parsed.push(btoa(element("modjs").value));
            localStorage.setItem("CCGRMods", JSON.stringify(parsed));
        });

        Game.renderUpgrades();
        setInterval(() => {
            clicks += cps / 4;
        }, 250);
    },
    click: () => {
        clicks += upgrade;
    },
    tick: () => {
        element("cookiecounter").textContent = Math.round(clicks);
        element("upgradecounter").textContent = `${upgrade} cliks per clik`;

        if (clicks >= 10) {
            element("upgradesnotunlocked").hidden = true;
            element("upgrades").hidden = false;
        } else {
            element("upgradesnotunlocked").hidden = false;
            element("upgrades").hidden = true;
        }

        if (localStorage.getItem("CCGRAutosave") == "enabled") {
            Game.save();
        }

        requestAnimationFrame(Game.tick);
    },
    renderUpgrades: () => {
        let btns = element("upgradesbuttons");

        let upgs = Game.upgrades;
        upgs.forEach(upgradeobj => {
            let btn = document.createElement("button");

            btn.innerText = upgradeobj.name;
            btn.addEventListener("click", () => {
                if (clicks >= upgradeobj.amount) {
                    cps += upgradeobj.addcps;
                    upgrade += upgradeobj.addcpc;

                    clicks -= upgradeobj.amount;
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'no',
                        text: `this upgrade is ${upgradeobj.amount} you need ${upgradeobj.amount - clicks} more`
                    });
                }
            });
            btns.appendChild(btn);
        })
    },
    save: () => {
        localStorage.setItem("CCGRSave", JSON.stringify({clicks: clicks, upgrade: upgrade, cps: cps, saveVersion: "v1"}));
    },
    load: () => {
        try {
            let saveObject = JSON.parse(localStorage.getItem("CCGRSave"));
            clicks = saveObject.clicks;
            upgrade = saveObject.upgrade;
            cps = saveObject.cps;
        } catch (excption) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            });
            console.error(excption);
            Toast.fire({icon: 'error', text: "the save files corrupted!!!!"});
            Game.reset(); //just in case any strings or other types that are not numbers get in
        }
    },
    reset: () => {
        clicks = 0;
        upgrade = 1;
        cps = 0;
    },
    fps: () => {
        const times = [];
        let fps;
        Number.prototype.clamp = function(min, max) {
            return Math.min(Math.max(this, min), max);
        };
        function refreshLoop() {
            window.requestAnimationFrame(() => {
                const now = performance.now();
                while (times.length > 0 && times[0] <= now - 1000) {
                times.shift();
                }
                times.push(now);
                fps = times.length;
                element("fpscounter").textContent = `${fps.clamp(0, 60)} fps`;
                refreshLoop();
            });
        }
        refreshLoop();
    }
};

Game.init();