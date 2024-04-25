import './style.css';
import Swal from 'sweetalert2';

let game = () => window.Game;
let element = (elem) => document.getElementById(elem);

document.querySelector("main").hidden = false;

const MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

window.Game = {
  clicks: 0,
  upgrade: 1,
  cps: 0,
  upgrades: [
    {
      name: "Better Mouse",
      cost: 25,
      cpc: 1,
      cps: 0
    }, {
      name: "Gaming mouse",
      cost: 50,
      cpc: 2,
      cps: 0
    }, {
      name: "Autoclicker",
      cost: 100,
      cpc: 0,
      cps: 5
    }, {
      name: "Paid Autoclicker",
      cost: 200,
      cpc: 0,
      cps: 10,
    }, {
      name: "Server",
      cost: 400,
      cpc: 0,
      cps: 20
    }, {
      name: "Server Farm",
      cost: 800,
      cpc: 0,
      cps: 40
    }
  ],
  init: () => {
    setInterval(() => game().clicks += game().cps / 4, 250);

    let ccgrautosave = localStorage.getItem("CCGRRAutosave") ?? "enabled";

    localStorage.setItem("CCGRRAutosave", ccgrautosave);

    if ("CCGRRSave" in localStorage) {
      game().load();
    }

    try {
      let smarray = JSON.parse(localStorage.getItem("CCGRRMods") ?? "[]");
      smarray.forEach(mod => {
        eval(atob(mod));
        console.log(`[CCGRR] Loaded mod ${MD5(mod)}`);
      });
    } catch (ex) {
      console.log(`[CCGRR] Failed to load mods! ${ex.message}`)
    }

    game().renderUpgrades();
    game().events();
    game().tick();
  },
  tick: () => {
    element("clickscount").innerText = String(Math.floor(game().clicks));

    game().upgrades.forEach(upg => {
      let elem = element(String(upg.name).replace(" ", ""));
      elem.style.backgroundColor = game().clicks >= upg.cost ? "green" : "red";
    });

    if (localStorage.getItem("CCGRRAutosave") == "enabled") {
      game().save();
    }

    element("statsMonitor").innerText = `${game().upgrade} cpc\n${game().cps} cps`;

    requestAnimationFrame(game().tick);
  },
  events: () => {
    element("clickingthing").addEventListener("click", () => {
      game().clicks += game().upgrade;
    });

    element("modsBtn").addEventListener("click", async () => {
      let result = await Swal.fire({
        title: "Enter the mods code.",
        text: "Note: If you dont wanna save the mod, then run it with the console",
        input: 'textarea',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Load mod and save",
      });

      if (result.isConfirmed) {
        let smarray = JSON.parse(localStorage.getItem("CCGRRMods") ?? "[]");
        smarray.push(btoa(result.value));
        localStorage.setItem("CCGRRMods", JSON.stringify(smarray));
        eval(result.value);
      }
    });

    element("delmodsBtn").addEventListener("click", () => {
      localStorage.removeItem("CCGRRMods");
    });

    element("saveBtn").addEventListener("click", () => {
      game().save();
    });

    element("loadBtn").addEventListener("click", () => {
      game().load();
    });

    element("toggleAutosaveBtn").addEventListener("click", () => {
      Swal.fire({
        title: 'Enable autosave?',
        text: 'THIS IS GOOD FOR CASUAL PLAYERS but terible for advance players who play with mods.',
        showDenyButton: true,
      }).then((data) => {
          if (data.isConfirmed) {
              localStorage.setItem("CCGRRAutosave", "enabled");
          } else {
              localStorage.setItem("CCGRRAutosave", "disabled");
          }
      });
    });

    element("deleteSaveBtn").addEventListener("click", () => {
      if (confirm("Delete save?")) localStorage.removeItem("CCGRRSave");
    });
  },
  renderUpgrades: () => {
    game().upgrades.forEach(upg => {
      let newBtn = document.createElement("button");
      newBtn.innerText = `${upg.name} (Buy for $${upg.cost})`;
      newBtn.title = `+${upg.cpc} clicks per click and +${upg.cps} clicks per second`;
      newBtn.id = String(upg.name).replace(" ", "");
      newBtn.addEventListener("click", () => {
        if (game().clicks >= upg.cost) {
          game().upgrade += upg.cpc;
          game().cps += upg.cps;
          game().clicks -= upg.cost;
        } else {
          Swal.fire({
            title: 'Error',
            text: `You dont have enough to buy this, you need ${upg.cost - game().clicks} more.`
          });
        }
      });
      element("upgradesContainer").appendChild(newBtn);
    });
  },
  eval: (code) => eval(code),
  save: () => {
    localStorage.setItem("CCGRRSave", JSON.stringify({
      clicks: game().clicks,
      cps: game().cps,
      cpc: game().upgrade
    }));
  },
  load: () => {
    let saveObject = JSON.parse(localStorage.getItem("CCGRRSave"));
    game().clicks = saveObject.clicks;
    game().cps = saveObject.cps;
    game().upgrade = saveObject.cpc;
  }
};

game().init();