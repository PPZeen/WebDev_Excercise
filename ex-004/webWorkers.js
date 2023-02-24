var i = 0;

function timedCount() {
    const color = ["#87CEFA", "#98FB98", "#FFFFE0", "#F5DEB3", "#FFC0CB", "#FFB6C1", "#DDA0DD", "#EEE9E9"];
    const color2 = ["#0000CD", "#006400", "#B8860B", "#8B4513", "#FF0000", "#FF1493", "#9400D3", "#8B8989"];
    postMessage([color[i], color2[i]]);
    i = i + 1;
    if (i === 8){i = 0}
    setTimeout("timedCount()",1000);
}

timedCount();