window.onload = function() {
    var tsp = document.getElementById("tsp");
    var tbsp = document.getElementById("tbsp");
    var oz = document.getElementById("oz");
    var c = document.getElementById("c");
    var pt = document.getElementById("pt");
    var qt = document.getElementById("qt");
    var all = [tsp,tbsp,oz,c,pt,qt];
    for(var i = 0; i < all.length; i++) {
        all[i].removeAttribute("readonly");
        all[i].removeAttribute("disabled");
    }
    tsp.oninput = function() {
        tbsp.value = tsp.value*2/3;
        oz.value = tbsp.value/2;
        c.value = oz.value/8;
        pt.value = c.value/2;
        qt.value = pt.value/2;
    }
    tbsp.oninput = function() {
        tsp.value = tbsp.value*3/2;
        oz.value = tbsp.value/2;
        c.value = oz.value/8;
        pt.value = c.value/2;
        qt.value = pt.value/2;
    }
    oz.oninput = function() {
        tbsp.value = oz.value*2;
        tsp.value = tbsp.value*3/2;
        c.value = oz.value/8;
        pt.value = c.value/2;
        qt.value = pt.value/2;
    }
    c.oninput = function() {
        oz.value = c.value*8;
        tbsp.value = oz.value*2;
        tsp.value = tbsp.value*3/2;
        pt.value = c.value/2;
        qt.value = pt.value/2;
    }
    pt.oninput = function() {
        c.value = pt.value*2;
        oz.value = c.value*8;
        tbsp.value = oz.value*2;
        tsp.value = tbsp.value*3/2;
        qt.value = pt.value/2;
    }
    qt.oninput = function() {
        pt.value = qt.value*2;
        c.value = pt.value*2;
        oz.value = c.value*8;
        tbsp.value = oz.value*2;
        tsp.value = tbsp.value*3/2;
    }
    
    function firstGrandChildren(htmlCollection) {
        var result = [];
        for(var i = 0; i < htmlCollection.length; ++i) {
            result.push(htmlCollection[i].firstChild);
        }
        return result;
    }
    
    function choose(arr) {
        var index = Math.trunc(Math.random()*arr.length);
        return arr[index];
    }
    
    var recipes = document.getElementById("entrees").children;
    var sides = document.getElementById("sides").children;
    var desserts = document.getElementById("desserts").children;
    document.getElementById("wtf").innerHTML = 
        '<h1>What Should I Make for Dinner?</h1>'+
        '<ul id="recommendation"></ul>'+
        '<p><a id="reroll" href="#">Try Something Else</a></p>';
    var recommendation = document.getElementById("recommendation");
    function reroll() {
        recommendation.innerHTML = "";
        recommendation.appendChild(choose(recipes).cloneNode(true));
        recommendation.appendChild(choose(sides).cloneNode(true));
        recommendation.appendChild(choose(desserts).cloneNode(true));
        return false;
    }
    document.getElementById("reroll").onclick = reroll;
    reroll();
}
