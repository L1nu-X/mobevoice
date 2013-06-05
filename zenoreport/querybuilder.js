var a = "Parth";
var b = "main-container";
var c = "main-toolbar";
var d = "view-designer";
var e = "view-syntax";
var f = "view-result";
var g = "query-graph";
var h = "query-clauses";
var i = "query-objects";
var j = "result-container";
var k = "result-header";
var l = "result-body";
var savedqueryId = "savedQuerySelect";
var m =
{
    n:{
        width:0, height:0
    }, o:function () {
    var p = document.createElement("div");
    p.id = b;
    document.body.appendChild(p);
    q.o();
    r.o();
    s.o();
    t.o();
    m.u();
    window.onresize = this.v;
}, u:function () {
    m.n = w();
    var x = document.getElementById(b);
    x.style.height = m.n.height + "px";
    r.u();
    t.u();
}, appendChild:function (y) {
    var z = document.getElementById(b);
    z.appendChild(y);
}, v:function () {
    var aa = w();
    if (m.n.width != aa.width || m.n.height != aa.height) {
        m.u();
    }
}, ab:function () {
    if (ac() && ad()) {
        ad().style.display = "none";
        ac().style.display = "block";
        s.ae();
        m.u();
        var af = document.getElementById(c).firstChild;
        for (ag = 0; ag < af.rows[0].cells.length; ag++) {
            var ah = af.rows[0].cells[ag].firstChild;
            if (ah == null)continue;
            if (ah.className == "toolbar") {
                ah.disabled = ah.value == 'Design';
            }
        }
    }
}, ai:function () {
    if (ac() && ad()) {
        ad().style.display = "block";
        ac().style.display = "none";
        s.aj();
        m.u();
        var af = document.getElementById(c).firstChild;
        for (ag = 0; ag < af.rows[0].cells.length; ag++) {
            var ah = af.rows[0].cells[ag].firstChild;
            if (ah == null)continue;
            if (ah.className == "toolbar") {
                ah.disabled = ((ah.value != 'Design') && (ah.value != 'Export CSV') && (ah.value != 'Save Query'));
            }
        }
        var ak = r.al();
        am.an(ak);
    }
}
};

var charting = {
    init:function () {
        var queryName = prompt("Report Name ?");
        if (queryName) {
            console.log(queryName);

            YUI().use("io", function (Y) {
                Y.io("database.php?action=saveQuery&name=" + queryName, {
                    on:{
                        success:function (d, res) {
                            d = res.response;
                            if (d == "success") {
                                charting.addSavedQuery(queryName);
                                alert("Query saved");
                            } else {
                                alert("Failed to save");
                            }
                        }
                    }
                })
            });
        }
    },
    load:function () {
        ah = document.getElementById(savedqueryId);
        while (ah.children.length > 0) {
            ah.removeChild(ah.children[0]);
        }
        YUI().use("io", function (Y) {
            Y.io("database.php?action=getSaved", {
                method:"get",
                on:{
                    success:function (d, res) {
                        d = res.response;
                        eval("var queries=" + d);
                        charting.addSavedQuery("");
                        for (iik = 0; iik < queries.length; iik++) {
                            var ax = document.createElement("option");
                            ax.innerHTML = queries[iik]['name'];
                            ax.setAttribute("value", queries[iik].name);
                            ah.appendChild(ax);
                        }
                    }
                }
            });
        });
    },
    addSavedQuery:function (queryname) {
        var xr = document.createElement("option");
        xr.value = queryname;
        xr.innerHTML = queryname;
        document.getElementById(savedqueryId).appendChild(xr);
    },
    onchange:function () {

    }
};

function csvGo() {
    top.location = "database.php?action=csvgo";
}

var q =
{
    o:function () {
        var p = document.createElement("div");
        p.id = c;
        var af = document.createElement("table");
        af.setAttribute("width", "100%");
        af.setAttribute("height", "100%");
        af.insertRow(0);
        p.appendChild(af);
        m.appendChild(p);
        this.ao('New Query', r.ap, true);
        this.ao('Design', m.ab, false).setAttribute("disabled", "true");
        this.ao('Result', m.ai, true);
        this.ao('Tables', s.ae, true);
        this.ao('Save Query', charting.init, true);
        this.ao('Export CSV', csvGo, true);
        aq = af.rows[0].insertCell(-1);
        aq.setAttribute("align", "right");
        aq.setAttribute("width", "100%");
        var ah = document.createElement("select");
        ah.id = savedqueryId;
        ah.onchange = function (d) {
            var queryName = this.value;
            YUI().use("io", function (Y) {
                var limit = prompt("Row Limit ?");
                if (!isFinite(limit)) {
                    limit = 1000;
                }
                Y.io("database.php?action=getSavedQuery&name=" + queryName + "&limit=" + limit.toString(), {
                    on:{
                        success:function (io, d) {
                            var response = d.response;
                            if (response == "success") {
                                csvGo();
                            }
                        }
                    }
                })
            });
        }
        aq.appendChild(ah);
        aq = af.rows[0].insertCell(-1);
        //aq.innerHTML = "<font size=1><b>" + a + "<b></font>";
        aq.setAttribute("valign", "middle");
        aq.setAttribute("nowrap", "nowrap");
        charting.load();
    }, ar:function () {
    return document.getElementById(c).offsetHeight;
},
    ao:function (as, at, au) {
        var af = document.getElementById(c).firstChild;
        var aq = af.rows[0].insertCell(-1);
        if (au)aq.className = "delimiter";
        var ah = document.createElement("input");
        ah.className = "toolbar";
        ah.setAttribute("type", "button");
        ah.setAttribute("value", as);
        if (at != null)ah.onclick = at;
        aq.appendChild(ah);
        return ah;
    }
}
var r =
{
    o:function () {
        var p = document.createElement("div");
        p.id = d;
        m.appendChild(p);
        this.av.o();
        this.aw.o();
    }, u:function () {
    var ax = document.getElementById(d);
    ax.style.height = (m.n.height - q.ar()) + "px";
    var y = document.getElementById(h);
    var ay = document.getElementById(g);
    ay.style.height = (ax.offsetHeight - y.offsetHeight) + "px";
}, appendChild:function (y) {
    var ax = document.getElementById(d);
    ax.appendChild(y);
}, ap:function () {
    r.av.ap();
    r.aw.ap();
}, al:function () {
    var ak = '<?xml version="1.0" encoding="UTF-8"?>';
    ak += '<q>';
    for (ag = 0; ag < this.av.az.length; ag++) {
        var ba = this.av.az[ag];
        var bb = ba.childNodes[0].firstChild.firstChild.firstChild.innerHTML;
        ak += '<e>' + bb + '</e>';
    }
    for (ag = 0; ag < this.av.bc.length; ag++) {
        ak += '<r>';
        bd = this.av.bc[ag][0];
        be = this.av.bc[ag][1];
        var bf = bd.parentNode.parentNode.parentNode.parentNode.parentNode;
        var bg = be.parentNode.parentNode.parentNode.parentNode.parentNode;
        ak += '<es>' + bf.childNodes[0].firstChild.firstChild.firstChild.innerHTML + '</es>';
        ak += '<fs>' + bd.innerHTML + '</fs>';
        ak += '<et>' + bg.childNodes[0].firstChild.firstChild.firstChild.innerHTML + '</et>';
        ak += '<ft>' + be.innerHTML + '</ft>';
        ak += '</r>';
    }
    var bh = document.getElementById(h).firstChild;
    for (ag = 1; ag < bh.rows[1].cells.length; ag++) {
        if (bh.rows[1].cells[ag].firstChild.value == "")continue;
        ak += '<c>';
        ak += '<fn>' + bh.rows[1].cells[ag].firstChild.value + '</fn>';
        ak += '<colName>' + bh.rows[12].cells[ag].firstChild.value + '</colName>';
        ak += '<a>' + bh.rows[2].cells[ag].firstChild.value + '</a>';
        ak += '<tn>' + bh.rows[3].cells[ag].firstChild.value + '</tn>';
        ak += '<t>' + bh.rows[4].cells[ag].firstChild.selectedIndex + '</t>';
        ak += '<s>' + bh.rows[5].cells[ag].firstChild.selectedIndex + '</s>';
        ak += '<d>' + bh.rows[6].cells[ag].firstChild.checked + '</d>';
        ak += '<o1>' + bh.rows[7].cells[ag].firstChild.value + '</o1>';
        ak += '<o2>' + bh.rows[8].cells[ag].firstChild.value + '</o2>';
        ak += '<o3>' + bh.rows[9].cells[ag].firstChild.value + '</o3>';
        ak += '<ag>' + bh.rows[10].cells[ag].firstChild.value + '</ag>';
        ak += '<gb>' + bh.rows[11].cells[ag].firstChild.checked + '</gb>';
        ak += '</c>';
    }
    ak += '</q>';

    return ak;
}, av:{
    bi:null, az:new Array(), bc:new Array(), bj:new Array(), bk:20, bl:20, o:function () {
        var p = document.createElement("div");
        p.id = g;
        r.appendChild(p);
    }, ap:function () {
        while (this.bm() > 0) {
            this.bn(this.az[0]);
        }
    }, bo:function (bp, bb) {
        var bq = document.createElement("table");
        bq.setAttribute("cellPadding", "0");
        bq.setAttribute("cellSpacing", "0");
        bq.style.cssText = "background:#fff;";
        var br = bq.insertRow(-1);
        br.setAttribute("height", "18px");
        var aq = br.insertCell(0);
        aq.innerHTML = bb;
        aq.className = "entityCaption";
        aq.setAttribute("colSpan", "2");
        aq = br.insertCell(1);
        aq.innerHTML = '<img src="xbox.png" onclick="r.av.bn(this);">';
        aq.className = "entityButton";
        br = bq.insertRow(-1);
        aq = br.insertCell(0);
        aq.innerHTML = "<input type=checkbox onclick=\"javascript : r.av.ct('" + bb + "', '*', this.checked); \">";
        aq.setAttribute("width", "18px");
        aq = br.insertCell(1);
        aq.innerHTML = "<b>*</b>";
        aq = br.insertCell(2);
        bi = document.createElement("div");
        bi.className = "entity";
        bi.style.cssText = "position:absolute; background:#eee8d8; border:1px solid #bbbbbb; padding:1px; top:" + this.bk + "px; left:" + this.bl + "px; z-index:10;";
        bi.appendChild(bq);
        am.bs(bp, bb);
    }, bm:function () {
        return this.az.length;
    }, bn:function (ba) {
        while (ba && ba.className != "entity") {
            ba = ba.parentNode;
        }
        if (ba) {
            var ay = document.getElementById(g);
            var bt = ay.getElementsByTagName("img");
            for (ag = 0; ag < bt.length; ag++) {
                if (bt[ag].className == "lineH" || bt[ag].className == "lineV") {
                    var bu = bv(this.bj, bt[ag].bw);
                    if (bu != -1)this.bj.splice(bu, 1);
                    ay.removeChild(bt[ag-- ]);
                }
            }
            for (ag = 0; ag < this.bc.length; ag++) {
                bd = r.av.bc[ag][0];
                be = r.av.bc[ag][1];
                var bf = bd.parentNode.parentNode.parentNode.parentNode.parentNode;
                var bg = be.parentNode.parentNode.parentNode.parentNode.parentNode;
                if (bf != ba && bg != ba)this.bx(true);
                else this.bc.splice(ag--, 1);
            }
            for (ag = 0; ag < this.az.length; ag++) {
                if (this.az[ag] == ba) {
                    this.az.splice(ag, 1);
                    ay.removeChild(ba);
                    var bb = ba.childNodes[0].firstChild.firstChild.firstChild.innerHTML;
                    r.aw.by(bb);
                    break;
                }
            }
        }
    }, bz:function (responseXML) {
        var bb = bi.firstChild.rows[0].cells[0].innerHTML;
        var ca = responseXML.getElementsByTagName("columns")[0];
        for (ag = 0; ag < ca.childNodes.length; ag++) {
            var bq = ca.childNodes[ag];
            var bw = bq.getElementsByTagName("name")[0];
            var cb = bq.getElementsByTagName("type")[0];
            var cc = bw.childNodes[0].nodeValue;
            br = bi.firstChild.insertRow(-1);
            aq = br.insertCell(0);
            aq.innerHTML = "<input type=checkbox onclick=\"javscript : r.av.ct('" + bb + "', '" + cc + "', this.checked); \">";
            aq = br.insertCell(1);
            aq.innerHTML = "<span class='entityField'>" + cc + "</span>";
            aq = br.insertCell(2);
        }
        var ay = document.getElementById(g);
        ay.appendChild(bi);
        this.az.push(bi);
        hideLoading();
    }, bx:function (cd) {
        var ax = new Date();
        if (bd != be) {
            var bf = bd.parentNode.parentNode.parentNode.parentNode.parentNode;
            var ce = bd.parentNode.parentNode;
            var bg = be.parentNode.parentNode.parentNode.parentNode.parentNode;
            var cf = be.parentNode.parentNode;
            var cg = (bf.offsetTop + ce.offsetTop) + (ce.offsetHeight / 2) + 2;
            var ch = (bg.offsetTop + cf.offsetTop) + (cf.offsetHeight / 2) + 2;
            var ci = bf.offsetLeft;
            var cj = bg.offsetLeft;
            var ck = 0;
            if ((ci + bf.offsetWidth) < cj) {
                ci += bf.offsetWidth;
                ck = (cj - ci) / 2;
                this.cl(ax.getTime(), cg, ci, ck);
                this.cl(ax.getTime(), ch, cj - ck, ck);
                if (cg > ch)this.cm(ax.getTime(), ch, ci + ck, cg - ch);
                else this.cm(ax.getTime(), cg, ci + ck, ch - cg);
            }
            else if ((cj + bg.offsetWidth) < ci) {
                cj += bg.offsetWidth;
                ck = (ci - cj) / 2;
                this.cl(ax.getTime(), ch, cj, ck);
                this.cl(ax.getTime(), cg, ci - ck, ck);
                if (cg > ch)this.cm(ax.getTime(), ch, cj + ck, cg - ch);
                else this.cm(ax.getTime(), cg, cj + ck, ch - cg);
            }
            else {
                ci += bf.offsetWidth;
                cj += bg.offsetWidth;
                ck = (ci > cj ? ci : cj) + 10;
                this.cl(ax.getTime(), cg, ci, ck - ci);
                this.cl(ax.getTime(), ch, cj, ck - cj);
                if (cg > ch)this.cm(ax.getTime(), ch, ck, cg - ch);
                else this.cm(ax.getTime(), cg, ck, ch - cg);
            }
            if (!cd) {
                this.bj.push(ax.getTime());
                this.bc.push(new Array(bd, be));
            }
        }
        bd = null;
        be = null;
    }, cn:function (co) {
        co = co || window.event;
        var cp = co.srcElement ? co.srcElement : co.target;
        var bw = cp.bw;
        var cq = cr("img", cp.bw);
        for (var ag = 0; ag < cq.length; ag++) {
            if (cq[ag].className == "lineH")cq[ag].setAttribute("src", "lineH2.jpg");
            else cq[ag].setAttribute("src", "lineV2.jpg");
        }
        if (confirm("Do you want to remove this relation?")) {
            var ay = document.getElementById(g);
            for (var ag = 0; ag < cq.length; ag++) {
                ay.removeChild(cq[ag]);
            }
            var bu = bv(this.bj, bw);
            if (bu != -1) {
                this.bj.splice(bu, 1);
                this.bc.splice(bu, 1);
            }
        }
        else {
            for (var ag = 0; ag < cq.length; ag++) {
                if (cq[ag].className == "lineH")cq[ag].setAttribute("src", "lineH.jpg");
                else cq[ag].setAttribute("src", "lineV.jpg");
            }
        }
    }, cl:function (bw, top, left, width) {
        var cs = document.createElement("img");
        cs.onclick = function (co) {
            r.av.cn(co);
        }
        ;
        cs.bw = bw;
        cs.className = "lineH";
        cs.setAttribute("src", "lineH.jpg");
        cs.style.cssText = "cursor:pointer; position:absolute; top:" + top + "px; left:" + left + "px; width:" + width + "px; height:1px; z-index:1;";
        var ay = document.getElementById(g);
        ay.appendChild(cs);
    }, cm:function (bw, top, left, height) {
        var cs = document.createElement("img");
        cs.onclick = function (co) {
            r.av.cn(co);
        }
        ;
        cs.bw = bw;
        cs.className = "lineV";
        cs.setAttribute("src", "lineV.jpg");
        cs.style.cssText = "cursor:pointer; position:absolute; top:" + top + "px; left:" + left + "px; width:1px; height:" + height + "px; z-index:1;";
        var ay = document.getElementById(g);
        ay.appendChild(cs);
    }, ct:function (bb, cc, checked) {
        if (checked)r.aw.cu(bb, cc);
        else r.aw.cv(bb, cc);
    }
}, aw:{
    o:function () {
        var p = document.createElement("div");
        p.id = h;
        var bh = document.createElement("table");
        bh.setAttribute("cellPadding", "0");
        bh.setAttribute("cellSpacing", "1");
        bh.setAttribute("width", "100%");
        p.appendChild(bh);
        r.appendChild(p);
        var cw = new Array("Field:", "Alias:", "Table:", "Total:", "Sort:", "Display:", "Criteria:", "Or:", "Or:", "Aggregate:", "Group By:", "");
        var bt = bh.insertRow(0);
        var y = bt.insertCell(-1);
        y.className = "clauseHeader";
        for (ag = 0; ag < cw.length; ag++) {
            bt = bh.insertRow(ag + 1);
            y = bt.insertCell(-1);
            y.className = "clauseLabel";
            y.innerHTML = cw[ag];
        }
        for (ag = 1; ag < 11; ag++)this.cx();
        bh.rows[4].style.display = 'none';
    }, ap:function () {
        var bh = document.getElementById(h).firstChild;
        for (ag = 1; ag < bh.rows[1].cells.length; ag++) {
            bh.rows[1].cells[ag].firstChild.value = "";
            bh.rows[1].cells[ag].firstChild.disabled = false;
            bh.rows[2].cells[ag].firstChild.value = "";
            bh.rows[3].cells[ag].firstChild.value = "";
            bh.rows[3].cells[ag].firstChild.disabled = false;
            bh.rows[4].cells[ag].firstChild.selectedIndex = 0;
            bh.rows[5].cells[ag].firstChild.selectedIndex = 0;
            bh.rows[6].cells[ag].firstChild.checked = false;
            bh.rows[7].cells[ag].firstChild.value = "";
            bh.rows[8].cells[ag].firstChild.value = "";
            bh.rows[9].cells[ag].firstChild.value = "";
            bh.rows[10].cells[ag].firstChild.selectedIndex = 0;
            bh.rows[11].cells[ag].firstChild.disabled = false;
        }
        while (bh.rows[1].cells.length > 11) {
            bh.rows[1].deleteCell(10);
            bh.rows[2].deleteCell(10);
            bh.rows[3].deleteCell(10);
            bh.rows[4].deleteCell(10);
            bh.rows[5].deleteCell(10);
            bh.rows[6].deleteCell(10);
            bh.rows[7].deleteCell(10);
            bh.rows[8].deleteCell(10);
            bh.rows[9].deleteCell(10);
            bh.rows[10].deleteCell(10);
            bh.rows[11].deleteCell(10);
        }
    }, cx:function () {
        var bh = document.getElementById(h).firstChild;
        var y = bh.rows[0].insertCell(-1);
        y.className = "clauseHeader";
        y = bh.rows[1].insertCell(-1);
        y.innerHTML = "<input type=text>";
        y = bh.rows[2].insertCell(-1);
        y.innerHTML = "<input type=text>";
        y = bh.rows[3].insertCell(-1);
        y.innerHTML = "<input type=text>";
        y = bh.rows[4].insertCell(-1);
        y.innerHTML = '<select style="width:100%;"><option>totlas</option></select>';
        y = bh.rows[5].insertCell(-1);
        y.innerHTML = '<select style="width:100%;"><option></option><option value="ASC">Ascending</option><option value="DESC">Descending</option></select>';
        y = bh.rows[6].insertCell(-1);
        y.innerHTML = "<input type=checkbox>";
        y.style.cssText = "text-align:center;";
        y = bh.rows[7].insertCell(-1);
        y.innerHTML = "<input type=text>";
        y = bh.rows[8].insertCell(-1);
        y.innerHTML = "<input type=text>";
        y = bh.rows[9].insertCell(-1);
        y.innerHTML = "<input type=text>";
        y = bh.rows[10].insertCell(-1);
        y.innerHTML = "<select>" +
            "<option></option>" +
            "<option value='avg'>avg</option>" +
            "<option value='sum'>sum</option>" +
            "<option value='max'>max</option>" +
            "<option value='min'>min</option>" +
            "<option value='count'>count</option>" +
            "</select>";

        y = bh.rows[11].insertCell(-1);
        y.innerHTML = "<input type=checkbox>";

        y = bh.rows[12].insertCell(-1);
        y.innerHTML = "<input type=hidden>";

        return bh.rows[0].cells.length - 1;
    }, cu:function (bb, cc) {
        var y = -1;
        var bh = document.getElementById(h).firstChild;
        for (ag = 1; ag < bh.rows[1].cells.length; ag++) {
            if (bh.rows[1].cells[ag].firstChild.value == null || bh.rows[1].cells[ag].firstChild.value == "") {
                y = ag;
                break;
            }
        }
        if (y == -1)y = this.cx();
        bh.rows[1].cells[y].firstChild.value = cc;
        bh.rows[1].cells[y].firstChild.disabled = false;
        bh.rows[2].cells[y].firstChild.value = "";
        bh.rows[3].cells[y].firstChild.value = bb;
        bh.rows[3].cells[y].firstChild.disabled = true;
        bh.rows[4].cells[y].firstChild.selectedIndex = 0;
        bh.rows[5].cells[y].firstChild.selectedIndex = 0;
        bh.rows[6].cells[y].firstChild.checked = true;
        bh.rows[7].cells[y].firstChild.value = "";
        bh.rows[8].cells[y].firstChild.value = "";
        bh.rows[9].cells[y].firstChild.value = "";
        bh.rows[10].cells[y].firstChild.selectedIndex = 0;
        bh.rows[11].cells[y].firstChild.checked = false;
        bh.rows[12].cells[y].firstChild.checked = cc;
    }, by:function (bb) {
        var bh = document.getElementById(h).firstChild;
        for (ag = 0; ag < bh.rows[1].cells.length; ag++) {
            if (bh.rows[3].cells[ag].firstChild.value == bb) {
                var cc = bh.rows[1].cells[ag].firstChild.value;
                this.cv(bb, cc);
                ag--;
            }
        }
    }, cv:function (bb, cc) {
        var bh = document.getElementById(h).firstChild;
        for (ag = 0; ag < bh.rows[1].cells.length; ag++) {
            if (bh.rows[1].cells[ag].firstChild.value == cc && bh.rows[3].cells[ag].firstChild.value == bb) {
                if (bh.rows[1].cells.length > 11) {
                    bh.rows[0].deleteCell(ag);
                    bh.rows[1].deleteCell(ag);
                    bh.rows[2].deleteCell(ag);
                    bh.rows[3].deleteCell(ag);
                    bh.rows[4].deleteCell(ag);
                    bh.rows[5].deleteCell(ag);
                    bh.rows[6].deleteCell(ag);
                    bh.rows[7].deleteCell(ag);
                    bh.rows[8].deleteCell(ag);
                    bh.rows[9].deleteCell(ag);
                    bh.rows[10].deleteCell(ag);
                    bh.rows[11].deleteCell(ag);
                    bh.rows[12].deleteCell(ag);
                }
                else {
                    bh.rows[1].cells[ag].firstChild.value = "";
                    bh.rows[1].cells[ag].firstChild.disabled = false;
                    bh.rows[2].cells[ag].firstChild.value = "";
                    bh.rows[3].cells[ag].firstChild.value = "";
                    bh.rows[3].cells[ag].firstChild.disabled = false;
                    bh.rows[4].cells[ag].firstChild.selectedIndex = 0;
                    bh.rows[5].cells[ag].firstChild.selectedIndex = 0;
                    bh.rows[6].cells[ag].firstChild.checked = false;
                    bh.rows[7].cells[ag].firstChild.value = "";
                    bh.rows[8].cells[ag].firstChild.value = "";
                    bh.rows[9].cells[ag].firstChild.value = "";
                    bh.rows[10].cells[ag].firstChild.selectedIndex = 0;
                    bh.rows[11].cells[ag].firstChild.checked = 0;
                    bh.rows[12].cells[ag].firstChild.value = "";
                }
                break;
            }
        }
    }
}
}
var s =
{
    o:function () {
        var p = document.createElement("div");
        p.id = i;
        p.className = i;
        p.style.top = "50px";
        p.style.left = (w().width / 2) - 165 + "px";
        var cy = document.createElement("span");
        cy.innerHTML = "Tables";
        cy.className = "dialogCaption";
        var cz = document.createElement("div");
        cz.style.cssText = "background:url(caption1.gif) repeat-x; padding:3px 6px 7px;";
        cz.appendChild(cy);
        var da = document.createElement("select");
        da.style.cssText = "margin-bottom:2px; width:290px;";
        da.onchange = function () {
            s.db();
        };
        var dc = document.createElement("div");

        dc.style.cssText = "overflow:auto; border:1px solid #bbbbbb; background:#fff; width:290px; height:205px;";
        var dd = document.createElement("div");
        dd.id = "queryTables";
        dd.style.cssText = "display:none; border:1px solid #bbbbbb; background:#fff; width:290px; height:205px;";
        var cs = document.createElement("img");
        cs.style.cssText = "position:relative; top:50px; left:50px;";
        cs.de = 'ajax-loader3.gif';
        dd.appendChild(cs);
        var df = document.createElement("div");
        df.style.cssText = "float:left; margin:2px;";
        df.appendChild(da);
        df.appendChild(dc);
        df.appendChild(dd);
        var dg = document.createElement("input");
        dg.id = "btnAdd";
        dg.setAttribute("type", "button");
        dg.setAttribute("value", "Add");
        dg.style.cssText = "width:75px;";
        dg.onclick = function () {
            s.dh();
        }
        ;
        var di = document.createElement("input");
        di.setAttribute("type", "button");
        di.setAttribute("value", "Cancel");
        di.style.cssText = "width:75px;";
        di.onclick = function () {
            s.aj();
        };

        //var dk = document.createElement("input");
        //dk.style.cssText = "float:left; margin:2px; width:75px;";
        //dk.setAttribute("type", "text");
        //dk.setAttribute("id", "filter");


        var dj = document.createElement("div");
        dj.style.cssText = "float:left; margin:2px;";
        dj.appendChild(dg);
        dj.appendChild(document.createElement("br"));
        dj.appendChild(di);
        //dj.appendChild(dk);
        p.appendChild(cz);
        p.appendChild(df);
        p.appendChild(dj);
        m.appendChild(p);
        dk(p);
        am.dl();
    }, aj:function () {
    var dm = document.getElementById(i);
    dm.style.display = "none";
}, ae:function () {
    var dm = document.getElementById(i);
    dm.style.display = "";
}, dn:function () {
    var dm = document.getElementById(i);
    var dp = dm.getElementsByTagName("select")[0];
    return dp.options[dp.selectedIndex].value;
}, dq:function (dr) {
    var ds = dr.parentNode.parentNode;
    if (ds.getAttribute("bgColor") == null || ds.getAttribute("bgColor") == "")ds.setAttribute("bgColor", "#e8f2fe");
    else ds.setAttribute("bgColor", "");
}, dh:function () {
    var dm = document.getElementById(i);
    var bh = dm.getElementsByTagName("table")[0];
    for (ag = 0; ag < bh.rows.length; ag++) {
        if (bh.rows[ag].getAttribute("bgColor") != null && bh.rows[ag].getAttribute("bgColor") != "") {
            r.av.bo(this.dn(), bh.rows[ag].cells[0].firstChild.innerHTML);
            bh.rows[ag].setAttribute("bgColor", "");
        }
    }
}, dt:function (dr) {
    var ds = dr.parentNode.parentNode;
    ds.setAttribute("bgColor", "");
    r.av.bo(this.dn(), dr.innerHTML, 10, 10);
}, db:function () {
    var dm = document.getElementById(i);
    var dc = dm.childNodes[1].childNodes[1];
    dc.style.display = "none";
    var dd = dm.childNodes[1].childNodes[2];
    dd.style.display = "";
    am.du(this.dn());
}, dv:function (responseXML) {
    var da;
    try {
        da = responseXML.getElementsByTagName("schemas")[0];
    } catch (e) {
        top.location = "database.php";
    }

    var dw = new Array();
    for (ag = 0; ag < da.childNodes.length; ag++) {
        var dx = da.childNodes[ag];
        var bw = dx.getElementsByTagName("name")[0];
        dw.push(bw.childNodes[0].nodeValue);
    }
    this.dy(dw);
}, dy:function (dw) {
    var dm = document.getElementById(i);
    var eb = dm.childNodes[1].childNodes[0];
    var ec = document.createElement('option');
    ec.text = "<choose a schema>";
    ec.value = "%";
    eb.options.add(ec);
    for (var ag = 0; ag < dw.length; ag++) {
        ec = document.createElement('option');
        ec.ed = dw[ag];
        ec.value = dw[ag];
        ec.innerText = dw[ag];
        eb.options.add(ec);
    }
    hideLoading();
    eb.disabled = dw.length == 0;
    if (eb.disabled)s.db();
}
}
var ee =
{
    o:function () {
    }
}
var t =
{
    o:function () {
        var ef = document.createElement("div");
        ef.id = k;
        var eg = document.createElement("div");
        eg.id = l;
        eg.eh = this.eh;
        var ei = document.createElement("div");
        ei.id = j;
        ei.appendChild(ef);
        ei.appendChild(eg);
        m.appendChild(ei);
    }, u:function () {
    var z = document.getElementById(b);
    var bh = document.getElementById(c);
    var ei = document.getElementById(j);
    var ef = document.getElementById(k);
    var eg = document.getElementById(l);
    if (ei == null || eg == null || ef == null)return;
    ei.style.width = (z.offsetWidth) + "px";
    ei.style.height = (z.offsetHeight - bh.offsetHeight) + "px";
    ei.style.overflow = "scroll";
    ef.style.width = z.offsetWidth + "px";
    eg.style.width = z.offsetWidth + "px";
    eg.style.height = (ei.offsetHeight - ef.offsetHeight) + "px";
}, ej:function (responseXML) {
    var ek = responseXML.getElementsByTagName("recordset")[0];
    var cz = new Array();
    for (ag = 0; ag < ek.childNodes[0].childNodes.length;
         ag++) {
        var value = ek.childNodes[0].childNodes[ag].childNodes[0].nodeValue;
        cz.push(value);
    }
    var dw = new Array();
    for (ag = 0; ag < ek.childNodes[1].childNodes.length;
         ag++) {
        var el = new Array();
        var em = ek.childNodes[1].childNodes[ag];
        for (en = 0; en < em.childNodes.length; en++) {
            var value = em.childNodes[en].childNodes[0].nodeValue;
            el.push(value);
        }
        dw.push(el);
    }
    this.eo(cz);
    this.ep(dw);
    this.u();
}, eh:function () {
    var ef = document.getElementById(k);
    var eg = document.getElementById(l);
    ef.style.left = (eg.eq * -1) + "px";
}, ap:function () {
    var er = document.getElementById(k);
    if (er.hasChildNodes())er.removeChild(er.firstChild);
    var es = document.getElementById(l);
    if (es.hasChildNodes())es.removeChild(es.firstChild);
}, eo:function (cz) {
    this.ap();
    var er = document.getElementById(k);
    var es = document.getElementById(l);
    var et = 200;
    var eu = et * cz.length;
    var ev = document.createElement("table");
    ev.setAttribute("cellPadding", "1");
    ev.setAttribute("cellSpacing", "0");
    ev.setAttribute("width", eu + "px");
    var ew = document.createElement("table");
    ew.setAttribute("cellPadding", "1");
    ew.setAttribute("cellSpacing", "0");
    ew.setAttribute("width", eu + "px");
    var ex = ev.insertRow(0);
    var ey = document.createElement("colgroup");
    var ez = document.createElement("colgroup");
    for (ag = 0; ag < cz.length; ag++) {
        var fa = document.createElement("col");
        fa.setAttribute("width", et + "px");
        ey.appendChild(fa);
        var fb = ex.insertCell(ag);
        fb.className = "header";
        fb.innerHTML = cz[ag];
        var fc = document.createElement("col");
        fc.setAttribute("width", et + "px");
        ez.appendChild(fc);
    }
    ev.appendChild(ey);
    ew.appendChild(ez);
    er.appendChild(ev);
    es.appendChild(ew);
}, ep:function (dw) {
    var es = document.getElementById(l);
    var bq = es.firstChild;
    for (ag = 0; ag < dw.length; ag++) {
        var br = bq.insertRow(-1);
        for (en = 0; en < dw[ag].length; en++) {
            var aq = br.insertCell(en);
            aq.className = "default";
            aq.innerHTML = dw[ag][en];
        }
    }
}
}
var am =
{
    fd:function () {
        if (window.XMLHttpRequest)return new XMLHttpRequest();
        else if (window.ActiveXObject)return new ActiveXObject("Microsoft.XMLHTTP");
    }, dl:function () {
    var fe = this.fd();
    fe.onreadystatechange = function () {
        if (fe.readyState == 4) {
            if (fe.status == 200)s.dv(fe.responseXML);
            else if (fe.status == 204)alert("Errore!");
        }
    };
    showLoading();
    fe.open("GET", "database.php?action=getSchemas", true);
    fe.send(null);
}, du:function (ff) {
    showLoading();
    YUI().use("io", function (Y) {
        Y.io("database.php?action=getTables&schema=" + encodeURI(ff), {
            method:"GET",
            on:{
                success:function (id, o, args) {
                    var d = o.response;
                    eval(d);
                    YUI().use("datatable", "datatable-scroll", "datatable-sort", function (Y) {
                        Y.one("#queryTables").empty();
                        var table = new Y.DataTable({
                            scrollable:true,
                            sortable:true,
                            columns:[
                                {
                                    key:"table",
                                    allowHTML:true,
                                    formatter:function (o) {

                                        return '<span onclick="s.dq(this);" ondblclick="s.dt(this);">' + o.value + '</span>';
                                    }
                                }
                            ],
                            data:tables,
                            height:'100%'
                        });
                        table.render("#queryTables");
                        hideLoading();
                    })
                }
            }
        });
    });
}, bs:function (ff, fg) {
    var fe = this.fd();
    showLoading();
    fe.onreadystatechange = function () {
        if (fe.readyState == 4) {
            if (fe.status == 200)r.av.bz(fe.responseXML);
            else if (fe.status == 204)alert("Errore!");
        }
    }
    ;
    fe.open("GET", "database.php?action=getColumns&schema=" + encodeURI(ff) + "&table=" + encodeURI(fg), true);
    fe.send(null);
}, an:function (ak) {
    showLoading();
    YUI().use("io", function (Y) {
        Y.io("database.php?action=doRetrieve", {
            data:encodeURI(ak),
            method:'POST',
            on:{success:function (id, o, args) {
                var d = o.response;
                eval(d);
                if (window.result != 'success') {
                    console.log(window.error);
                    alert("Error\n" + window.error.error + "\n\nSQL\n\n" + window.error.sql);
                    hideLoading();
                    return;
                }
                YUI().use("datatable", "datatable-scroll", "datatable-sort", function (Y) {
                    Y.all("#result-container").empty(true);
                    var table = new Y.DataTable({
                        //scrollable:true,
                        sortable:true,
                        columns:columns,
                        height:'100%',
                        data:data,
                        // Optionally configure your table with a caption
                        //caption:"Report Result",
                        // and/or a summary (table attribute)
                        summary:""
                    });
                    table.render("#result-container");
                    Y.one("#result-container").setStyle("display", "block");
                    hideLoading();
                });
            }}
        });
    });

}
}
function bv(array, fj, fk) {
    for (var ag = (fk || 0); ag < array.length; ag++) {
        if (array[ag] == fj)return ag;
    }
    return -1;
}
function cr(fl, bw) {
    var cp = document.getElementsByTagName(fl);
    var fm = new Array();
    for (ag = 0, fn = 0; ag < cp.length; ag++) {
        fo = cp[ag].getAttribute("name");
        if (fo == bw) {
            fm[fn] = cp[ag];
            fn++;
        }
    }
    return fm;
}
function dk(ah) {
    ah.onselectstart = function () {
        return false;
    }
    ;
    ah.unselectable = "on";
    ah.style.MozUserSelect = "none";
    ah.style.cursor = "default";
}
function ac() {
    return document.getElementById(d);
}
function ad() {
    return document.getElementById(j);
}
function fp() {
    return document.getElementById(g);
}
function w() {
    var fq = 0, fr = 0;
    if (typeof(window.innerWidth) == 'number') {
        fq = window.innerWidth;
        fr = window.innerHeight - 1;
    }
    else if (document.fs && (document.fs.clientWidth || document.fs.clientHeight)) {
        fq = document.fs.clientWidth;
        fr = document.fs.clientHeight;
    }
    else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        fq = document.body.clientWidth;
        fr = document.body.clientHeight;
    }
    return{width:fq, height:fr};
}
if (!document.all)document.captureEvents(Event.MOUSEMOVE);
document.onmousedown = ft;
document.onmouseup = fu;
var fv = null;
var bd = null;
var be = null;
var fw = 0;
var fx = 0;
function fy(co) {
    co = co || window.event;
    var fz = co.clientY - fw;
    var ga = co.clientX - fx;
    fv.style.top = fz;
    fv.style.left = ga;
    return false;
}
function ft(co) {
    co = co || window.event;
    var cp = co.srcElement ? co.srcElement : co.target;
    if (cp.className == "dialogCaption") {
        fv = cp.parentNode.parentNode;
        fw = co.clientY - fv.offsetTop;
        fx = co.clientX - fv.offsetLeft;
        document.onmousemove = fy;
        return false;
    }
    else if (cp.className == "entityCaption") {
        fv = cp.parentNode.parentNode.parentNode.parentNode;
        fv.style.zIndex = 100;
        fw = co.clientY - fv.offsetTop;
        fx = co.clientX - fv.offsetLeft;
        document.onmousemove = fy;
        return false;
    }
    else if (cp.className == "entityField") {
        bd = cp;
        var gb = cp.parentNode;
        var ds = gb.parentNode;
        var ba = ds.parentNode.parentNode.parentNode;
        var gc = ba.offsetTop + ds.offsetTop + cp.offsetTop;
        var gd = ba.offsetLeft + gb.offsetLeft + cp.offsetLeft;
        fw = co.clientY - gc;
        fx = co.clientX - gd;
        fv = document.createElement("span");
        fv.appendChild(document.createTextNode(cp.innerHTML));
        fv.style.cssText = "cursor:pointer;position:absolute;top:" + gc + "px;left:" + gd + "px;z-index:100;border:1px solid #ccc;color: #ccc";
        fp().appendChild(fv);
        document.onmousemove = fy;
        return false;
    }
}
function fu(co) {
    co = co || window.event;
    if (fv) {
        document.onmousemove = null;
        if (fv.className == "") {
            fp().removeChild(fv);
            for (var ag = 0; ag < r.av.bm(); ag++) {
                var ge = r.av.az[ag].offsetLeft;
                var gf = r.av.az[ag].offsetTop + ac().offsetTop;
                var gg = ge + r.av.az[ag].offsetWidth;
                var gh = gf + r.av.az[ag].offsetHeight;
                if (ge < co.clientX && gg > co.clientX && gf < co.clientY && gh > co.clientY) {
                    var el = r.av.az[ag].firstChild.firstChild.childNodes[2];
                    while (el) {
                        var gi = ge + el.offsetLeft;
                        var gj = gf + el.offsetTop;
                        var gk = gi + el.offsetWidth;
                        var gl = gj + el.offsetHeight;
                        if (gi < co.clientX && gk > co.clientX && gj < co.clientY && gl > co.clientY) {
                            be = el.firstChild.nextSibling.firstChild;
                            r.av.bx(false);
                            break;
                        }
                        el = el.nextSibling;
                    }
                    break;
                }
            }
        }
        else if (fv.className == "entity") {
            var bt = fp().getElementsByTagName("img");
            for (ag = 0; ag < bt.length; ag++) {
                if (bt[ag].className == "lineH" || bt[ag].className == "lineV")fp().removeChild(bt[ag-- ]);
            }
            for (ag = 0; ag < r.av.bc.length; ag++) {
                bd = r.av.bc[ag][0];
                be = r.av.bc[ag][1];
                r.av.bx(true);
            }
        }
        if (fv.style.zIndex == 100)fv.style.zIndex = 10;
        fv = null;
    }
}
