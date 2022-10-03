var now = new Date;

function createtime() {
    var t = new Date("09/14/2022 00:00:00");
    now.setTime(now.getTime() + 250);
    var e = (now - t) / 1e3 / 60 / 60 / 24,
        a = Math.floor(e), n = (now - t) / 1e3 / 60 / 60 - 24 * a,
        r = Math.floor(n);
    1 == String(r).length && (r = "0" + r);

    let g = "";
    g = r < 18 && r >= 9 ? `<img class='boardsign' src='../../svg/上班打卡.svg' title='努努力，进阿里~'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span><i class='fas fa-heartbeat' style='color:red'></i>`: `<img class='boardsign' src='../../svg/下班学习.svg' title='下班了就该继续卷，哼~'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span> <i class='fas fa-heartbeat' style='color:red'></i>`, document.getElementById("workboard") &&(document.getElementById("workboard").innerHTML = g)
}

createtime();

setInterval((() => {
    createtime()
}), 30000);