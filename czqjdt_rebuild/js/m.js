! function(a) {
    function b(a) {
        var b = j[a];
        // $(".container .funcpart .renshu .u .level")[0].className = "level l" + (b.renshu >= 3e4 ? b.renshu >= 56e3 ? 1 : 2 : 3);
        // var c = parseInt(b.kms) / 100,
        //     d = $(".container .funcpart .cx .lc").width(),
        //     e = parseInt(c * d);
        // $(".container .funcpart .cx .lc .km").css("width", e + "px").css("border-radius", "10px 0 0 10px"), $(".container .funcpart .cx .lc .yb").css("left", e - 10 + "px").css("top", b.haibatop || "-3px"), $(".container .funcpart .cx .lc .yb .hb").text(b.haiba), $(".container .funcpart .cx .lc .tl").text(b.kms), $(".container .funcpart .cx .sj .t").empty().html("<p class='text'>" + b.status + "</p>");
        // var f = "";
        // b.food.forEach(function(a, b) { f += '<div class="f' + b + '"><img src="img/food_' + a + '.jpg" /></div>' }), $(".container .funcpart .smlmap .btnctrl .cc .cur").text(b.cn), $(".container .funcpart .cx .sj .f").empty().html(f)
    }

    function c(a, b) {
        function c(c) {
            for (var d = "", e = 0; 3 > e; e++) {
                var f = 3 * c + e;
                if (f >= b.length) break;
                d += '<div class="item">       <div class="left"><img src="img/newsimg/' + a + "/" + (f + 1) + '.jpg"></div>       <div class="right">           <div class="tl"><span style="font-weight:bold;font-size:18px;color:#a33;">' + b[f].title + '</span></div>           <div class="p">' + b[f].descp + "           </div>       </div>   </div>"
            }
            return d
        }
        for (var d = parseInt(b.length / 3) + (b.length % 3 ? 1 : 0), e = "", f = "", g = 0; d > g; g++) e += '<div class="page" data-p=' + g + ">" + c(g) + "</div>", f += '<span class="p" data-p=' + g + "></span>";
        $(".container .corrept .p2 .news .newslist").html('<div style="width:' + 533 * d + 'px;" class="page-wrap">' + e + "</div>"), d > 1 && $(".container .corrept .p2 .news .pager").html(f).find("span").eq(0).addClass("on"), $(".container .corrept .p2 .news .pager").on("click", "span", function(a) { $(a.target).hasClass("on") || ($(".container .corrept .p2 .news .pager span.on").removeClass("on"), $(a.target).addClass("on"), $(".container .corrept .p2 .news .newslist .page-wrap").css("margin-left", "-" + 533 * $(a.target).data("p") + "px")) })
    }

    function d(a, b) {
        for (var c = '<div class="a"><div class="nth">' + h[0] + '</div> <div style="width:' + 328 * b.length + 'px" class="list">', d = 0, e = [1, 1, 1], f = 0; f < b.length; f++) {
            var g = b[f];
            c += '<div class="item">  <div class="qs">      <h3 >' + g.question + '</h3></div>  <div class="opts">      <div class="optionA">A、 ' + g.optionA + '</div>      <div class="optionB">B、 ' + g.optionB + '</div>      <div class="optionC">C、 ' + g.optionC + "</div>  </div></div>"
        }
        c += '</div></div> <div class="pager"> <div class="prev">< </div>  <div class="cur"><span class="cl">1</span>/' + b.length + '</div>  <div class="next"> > </div></div> ', $(".container .corrept .p2 .tips .twrap").html(c).on("click", ".pager .prev", function() { d > 0 && d < b.length && (d--, $(".container .corrept .p2 .tips .twrap .nth").text(h[d]), $(".container .corrept .p2 .tips .twrap .list").css("margin-left", -328 * d + "px"), $(".container .corrept .p2 .tips .twrap .pager .cur span").text(d + 1)) }).on("click", ".pager .next", function() {
            if (d == b.length - 1) {
                for (var a = 0, c = "", f = 0, g = 0; g < e.length; g++) 2 == e[g] ? a++ : 1 == e[g] && f++;
                if (f == e.length) return;
                return $(".container .corrept .p2 .tips .twrap").hide(), c += a == e.length ? '<img src="img/tips_result_all.png">' : '<img src="img/tips_result_r1.png">', c += '<div class="rstext"><p>您一共答对了 <span class="n">' + a + "</span> 道题 </p>", c += a == e.length ? "<p>好厉害，看来您对长征的历程很了解</p>" : "<p>革命老前辈的事迹还是要多了解下</p>", c += '<div class="reset"> </div>', c += "</div>", $(".container .corrept .p2 .tips .rsltwrap").empty().html(c), void $(".container .corrept .p2 .tips .rsltwrap").show()
            }
            d >= 0 && d < b.length - 1 && (d++, $(".container .corrept .p2 .tips .twrap .nth").text(h[d]), $(".container .corrept .p2 .tips .twrap .list").css("margin-left", -328 * d + "px"), $(".container .corrept .p2 .tips .twrap .pager .cur span").text(d + 1))
        }).on("click", ".item .opts>div", function(a) {
            var c = $(a.target),
                f = "option" + b[d].answer,
                g = c.parent().find("." + f);
            c.parent().find(".worr").remove(), c.hasClass(f) ? e[d] = 2 : (c.append($('<div class="worr"></div>')), e[d] = 0), g.append($('<div class="worr r"></div>')), setTimeout(function() {
                return function() { $(".container .corrept .p2 .tips .twrap .pager .next").trigger("click") }
            }(), 500)
        }), $(".container .corrept .p2 .tips .rsltwrap").on("click", ".reset", function() { $(".container .corrept .p2 .tips .twrap .item ").find(".worr").remove(), $(".container .corrept .p2 .tips .twrap ").show(), $(".container .corrept .p2 .tips .rsltwrap").hide(), d = 0, e = [1, 1, 1], $(".container .corrept .p2 .tips .twrap .nth").text(h[d]), $(".container .corrept .p2 .tips .twrap .list").css("margin-left", -328 * d + "px"), $(".container .corrept .p2 .tips .twrap .pager .cur span").text(d + 1) })
    }

    function e(a) {
        var b = j[a],
            e = '     <div class="t"><img src="img/pn_' + a + '.png" ></div>     <div class="evn"><img src="img/p1_sj_' + a + '.png" ><span class="jt">' + b.time + '</span></div>     <div class="img"><img src="img/p1_' + a + '.jpg" ></div>     <div class="text">' + b.p1scib + "</div>";
        if ($(".container .corrept .p1 .esp").empty().html(e), b.p1vr.isvr) $(".container .corrept .p1 .vr ").html('<a class="play_vr" href="' + b.p1vr.vrlink + '" target="_black"></a> <img class="vr_cv" src="img/' + b.p1vr.vr_cv + '" />');
        else if (b.p1vr.imggroup && b.p1vr.imggroup.length > 0) {
            var f = "";
            if (b.p1vr.imggroup.forEach(function(b, c) { f += '<div style="background-image: url(img/p_vimgs/' + a + "/" + b + '.jpg);" ></div>' }), $(".container .corrept .p1 .vr").html('<div style="position:relative;width:100%;height:100%;" >' + f + "</div>"), "" != f) {
                var g = $("<img src='img/p1vr_type_tuji.png' style='position:absolute;left:50%;top:50%;width: 80px;margin-top: -42px;margin-left: -40px;height: auto;' />").appendTo($(".container .corrept .p1 .vr"));
                $(".container .corrept .p1 .vr>div").skippr({ beforeChange: function() { g.fadeOut() } })
            }
        } else b.p1vr.ohtml && "" != b.p1vr.ohtml && ($(".container .corrept .p1 .vr").html(b.p1vr.ohtml), $("<img src='img/p1vr_type_vd.png' style='position:absolute;left: 0;top: 20px;width: 80px;height: auto;z-index: 4;' />").appendTo($(".container .corrept .p1 .vr")), $(".container .corrept .p1 .vr .v img").on("click", function() { $(this).next()[0].play(), $(this).remove() }));
        $(".container .corrept .p2 .news .newslist").empty(), $(".container .corrept .p2 .news .pager").off().empty(), $(".container .corrept .p2 .tips .twrap").off().empty(), $(".container .corrept .p3").hide(), $(".container .corrept .p3 .zb .cv video").remove(), $(".ctrlpart .plmask").addClass("hide"), $(".vrmask .v").empty(), c(a, b.newslist), b.zb ? ($(".container .corrept .p3 .zb .cv img").attr("src", b.zbcv).show(), $(".container .corrept .p3 .zb .play").data("link", b.vodmp4).show(), $(".container .corrept .p3 .young .text .p").empty().html("<p>" + b.zbtext || "</p>"), $(".container .corrept .p2").css("margin-bottom", "20px"), $(".container .corrept .p3").show()) : $(".container .corrept .p2").css("margin-bottom", "56px"), d(a, b.tipslist)
    }

    function f(a) {
        $("#banner").hide(), $("#thr").hide(), $(".container .ctrlpart").hide(), $(".container .funcpart").hide(), $(".container .corrept .p2 .tips .twrap").show(), $(".container .corrept .p2 .tips .rsltwrap").hide();
        parseInt($(".container .funcpart .smlmap .wrap .mapcontent .points .cent").attr("index"));
        a && (i.src = a)
    }

    function g(a) {
        a = $.extend({ obj: null, str: "+1", startSize: "12px", endSize: "30px", interval: 600, color: "red", callback: function() {} }, a), $("body").append("<span class='num'>" + a.str + "</span>");
        var b = $(".num"),
            c = a.obj.offset().left + a.obj.width(),
            d = a.obj.offset().top + a.obj.height() / 2;
        b.css({ position: "absolute", left: c + "px", top: d + "px", "z-index": 9999, "font-size": a.startSize, "line-height": a.endSize, color: a.color }), b.animate({ "font-size": a.endSize, opacity: "0", top: d - parseInt(a.endSize) + "px" }, a.interval, function() { b.remove(), a.callback() })
    }
    var h = ["第一题", "第二题", "第三题", "第四题", "第五题", "第六题", "第七题", "第八题", "第九题", "第十题", "第十一题"],
        i = document.createElement("video"),
        j = {
            yudu: {
                cn: "于都",
                startvd: "http://vodfile11.news.cn/data/cdn_transfer/68/A1/68673f38094205ee46164d002cccdfe0f9f385a1.mp4",
                time: "1934年10月",
                renshu: 86e3,
                status: "红军主力集结于此，开始长征，于都河是红军长征渡过的第一条大河",
                haiba: "114m",
                food: ["f1", "f2", "f3"],
                kms: "3%",
                p1scib: "于都位于江西赣州东部，于都河穿城而过。1934年10月，中央机关、中革军委和中央红军主力8.6万人集结此，开始二万五千里长征，于都从此作为“地球上的红飘带”的起点载入史册。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4] },
                newslist: [{ title: "江西于都探索移民扶贫新模式", link: "http://news.xinhuanet.com/local/2016-08/28/c_1119467334.htm", descp: "于都县安置模式供群众自愿选择，目前25000余名贫困户和深山群众通过移民搬迁，“进城进园”。" }, { title: "聚焦于都搬迁安置新探索", link: "http://news.xinhuanet.com/2016-08/25/c_129254766.htm", descp: "坐落在于都县城南部的思源社区是一个移民安置小区，是于都县打好攻坚扶贫战的新样板。" }, { title: "于都扶贫样板 革命老区新风貌", link: "http://news.xinhuanet.com/politics/2016-08/25/c_129254391.htm", descp: "一张张笑脸是赣州扶贫攻坚取得成效的最好见证。革命老区已开启“新长征”，迈向全面小康社会。" }, { title: "一次于都行 一生长征情", link: "http://news.xinhuanet.com/politics/2016-08/24/c_129252075.htm", descp: "这块层峦叠嶂、山水相间的古“雩”之都，是中央红军长征集结的出发地，也是长征精神的发源地。" }, { title: "于都：革命老区开启“新长征”", link: "http://www.xinhuanet.com/foto/2016-08/24/c_129252165.htm", descp: "于都县在扶贫攻坚、民生改善、创新创业、工业发展、新型城镇化建设上快速推进，迈向全面小康社会。" }, { title: "踏着红军足迹重走长征路", link: "http://www.xinhuanet.com/foto/2016-08/23/c_129250439.htm", descp: "长征永远在路上，我们要继承和弘扬好伟大的长征精神，缅怀先烈、不忘初心，走好新的长征路。" }, { title: "江西于都开启“互联网+”之路", link: "http://www.xinhuanet.com/foto/2016-08/23/c_129250442.htm", descp: "于都县大力发展电子商务，红色革命传统与现代商业完美结合，为村民致富发展铺就了一条创业之路。" }, { title: "从于都出发，长征源头探初心", link: "http://news.xinhuanet.com/mil/2016-08/03/c_1119330425.htm", descp: "长征源头探初心。我们追寻红军长征的足迹，踏访中央红军长征出发地于都，探寻长征胜利的力量之源。" }],
                tipslist: [{ question: "红军长征出发第一渡的河流名叫？", answer: "B", optionA: "雩江 ", optionB: "于都河", optionC: "赣江" }, { question: "红军长征出发时间是？", answer: "A", optionA: "1934年10月", optionB: "1935年1月", optionC: "1936年10月" }, { question: "中央红军主力是由于第几次反围剿失败而踏上长征之路？", answer: "C", optionA: "第三次 ", optionB: "第四次", optionC: "第五次" }],
                zb: "http://vod.xinhuanet.com/v/vod.html?vid=389476",
                "vodmp4": "http://vodfile2.news.cn/data/cdn_transfer/7B/B0/7bf6838538dd231c1ce9081d291bfe7b428d32b0.mp4",
                zbcv: "img/zbcv/1.jpg",
                zbtext: "《红色追寻》系列网络直播，以三个年轻人亲历的视角，亲身的体验，结合长征期间重大历史事件，综合运用各种网络传播元素，再现红军80多年前的艰苦历程。",
                jpos: { jtext: { top: "-27px", left: " -12px" }, top: "79%", left: "91%" },
                smlmpappos: { left: "-409px", top: "-417px" }
            },
            xingan: {
                cn: "兴安",
                startvd: "http://vodfile12.news.cn/data/cdn_transfer/1C/95/1c9c34da3a1aecdac9224d661795a61521a91795.mp4",
                time: "1934年11月",
                renshu: 56e3,
                status: "湘江战役是中央红军突围以来最壮烈、最关键的一仗",
                haiba: "217m",
                food: ["f5", "f4"],
                kms: "11%",
                p1scib: "1934年11月，中央红军在广西境内的兴安县、全州县、灌阳县，与国民党军苦战五昼夜，最终强渡湘江。虽然突破四道封锁线，但付出巨大代价，中央红军由出发时的8.6万人锐减到3万人。",
                p1vr: { isvr: !0, vr_cv: "p1_vr_cv_xingan.jpg", vrlink: "http://fms.news.cn/vr/player/index.html#name=20160903tpxj" },
                newslist: [{ title: "历史铭记的湘江战役", link: "http://news.xinhuanet.com/politics/2016-09/21/c_129290875.htm", descp: "湘江战役是中央红军突围以来最壮烈、最关键的一仗。跟随镜头，一起来回顾党史的历史瞬间。" }, { title: "那江水，流淌着血红色的记忆", link: "http://www.xinhuanet.com/foto/2016-09/19/c_129287059.htm", descp: "湘江战役中每一条曾鲜活的生命最终化为一个数字或一个名字，进入历史课本或被刻上烈士墙。" }, { title: "重走长征路：红军烈士纪念碑园", link: "http://news.xinhuanet.com/expo/2016-09/18/c_129285429.htm", descp: "“重走长征路”车队参观“红军长征突破湘江烈士纪念碑园”，缅怀革命先烈，传承红色精神。" }, { title: "当年红军过境 今日产业转移", link: "http://news.xinhuanet.com/2016-09/06/c_1119518586.htm", descp: "当年红军过境之地如今已成为产业转移的“热土”。2011年，湘南承接产业转移示范区正式设立。" }, { title: "红军书写长征悲壮一役", link: "http://news.xinhuanet.com/politics/2016-09/04/c_1119508302.htm", descp: "刘发育，90岁，广西兴安县界首镇人，时隔82年他仍然清晰地记得当年壮烈牺牲的红军战士。" }, { title: "界首：重温初心，追寻红军足迹", link: "http://www.gx.xinhuanet.com/travel/20160822/3390672_c.html", descp: "古镇界首位于广西桂林市兴安县与全州县的交界处，中央红军抢渡湘江时，界首是其中一个渡河点。" }],
                tipslist: [{ question: "中央红军湘江之战通过的是第几道封锁线？", answer: "B", optionA: "第三道", optionB: "第四道", optionC: "第五道" }, { question: "湘江之战中，国民党军的前线总司令是谁？", answer: "C", optionA: "王家烈", optionB: "薛岳", optionC: "白崇禧" }, { question: "红三十四师的官兵大多来自哪里？", answer: "A", optionA: "闽西", optionB: "粤东", optionC: "赣南" }],
                "zb": "http://vod.xinhuanet.com/v/vod.html?vid=389566",
                "vodmp4": "http://vodfile2.news.cn:80//data/cdn_transfer/D9/AB/d9e3ec1a340e065b929bea10164d3776410226ab.mp4?key=&key1=",
                zbcv: "img/zbcv/3.jpg",
                zbtext: "惨烈的湘江之战，发生在广西境内全州、灌阳、兴安三个县。曾经让86000名英勇善战的红军将士折损过半的湘江是一条怎样的河流？为何红军会在这里经受这样的损失？他们当年在血战之后有怎样的迷茫？",
                jpos: { jtext: { top: "14px", left: "-22px" }, left: "61%", top: "81.4%" },
                smlmpappos: { left: "-256px", top: "-398px" }
            },
            tongdao: {
                cn: "通道",
                startvd: "http://vodfile8.news.cn/data/cdn_transfer/FB/EC/fbe97bb79203cc6865ab6bf6ed1012639b1136ec.mp4",
                time: "1934年12月12日",
                renshu: 56e3,
                status: "红军占领湖南通道县城并召开紧急会议研究军事问题",
                haiba: "406m",
                food: ["f6", "f7"],
                kms: "16%",
                p1scib: "湘江突围后，红军占领湖南通道县城并召开紧急会议，虽没有就战略方针的转变问题取得一致意见，但促进了这个问题的解决，为之后黎平会议决策红军战略计划转变，作了必要的准备。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4] },
                newslist: [{ title: "“重走长征路”主题采访走进通道", link: "http://news.xinhuanet.com/local/2016-09/15/c_129282391.htm", descp: "9月13日至14日，由中宣部组织开展的中央媒体“重走长征路”主题采访活动走进通道侗族自治县。" }, { title: "“长征路上奔小康”开启新征程", link: "http://news.xinhuanet.com/2016-09/02/c_129267512.htm", descp: "红军完成两万五千里长征的伟大壮举，离不开在湖南召开的一次事关中国命运的会议——通道会议。" }, { title: "“通道会议”精神指引脱贫致富", link: "http://news.xinhuanet.com/politics/2016-08/31/c_129264085.htm", descp: "通道会议凝结的“坚定信念、实事求是、独立自主、敢于担当”16个字，是推动全县脱贫的精神力量。" }, { title: "长征 让千年通道庚续红色传奇", link: "http://www.xinhuanet.com/foto/2016-08/31/c_129264202.htm", descp: "“‘飞行会议’是什么意思？”8月30日上午，湖南省怀化市通道县的恭城书院迎来一批年轻的客人。" }, { title: "旅游产业助脱贫 红色小城新活力", link: "http://news.xinhuanet.com/2016-08/31/c_129264043.htm", descp: "近年来，通道县将丰富的红色旅游景观、秀美的自然风光和独具特色的民俗文化结合，发展红色旅游项目。" }, { title: "加强爱国主义教育 接受红色洗礼", link: "http://news.xinhuanet.com/2016-08/31/c_129264036.htm", descp: "当年的“通道会议”于恭城书院召开，如今走进恭城书院，依然可以在厚重与庄严中找到红色的记忆。" }, { title: "用转兵精神打好脱贫攻坚新战役", link: "http://news.xinhuanet.com/politics/2016-08/31/c_129263565.htm", descp: "“通道转兵”的故事代代传递，人们循着长征留下的伟大精神，在脱贫攻坚的伟大战役中，继续奋力前行。" }, { title: "湖南通道县再寻访", link: "http://news.xinhuanet.com/2016-08/11/c_1119373467.htm", descp: "没有82年前神奇的通道转兵，红军就不会掉头向西进军敌人防守薄弱的贵州，也就不会有遵义会议。" }],
                tipslist: [{ question: "湘江之战的主战场在现在的哪个地方？", answer: "A", optionA: "广西", optionB: "湖南 ", optionC: "湖北" }, { question: "中央红军和红二、六军团在湖南怀化行军途中召开的通道会议也被称为", answer: "B", optionA: "“秘密会议”", optionB: "“飞行会议” ", optionC: "“绝密会议”" }, { question: "（）会议之后，中革军委下达了“万万火急”的《我军明十三号继续西进的部署》，仍按李德、博古的意见行事", answer: "B", optionA: "黎平会议", optionB: "通道会议", optionC: "遵义会议" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "-29px", left: "-11px" }, left: " 55%", top: "78%" },
                smlmpappos: { left: "-212px", top: "-381px" }
            },
            liping: {
                cn: "黎平",
                startvd: "http://vodfile10.news.cn/data/cdn_transfer/2E/40/2efedb573ea4131feb71ce0ed5a388f4e3e7cb40.mp4",
                time: "1934年12月18日",
                renshu: 56e3,
                status: "黎平会议是长征以来具有决定意义战略转变的关键",
                haiba: "569m",
                food: ["f6", "f7"],
                kms: "17%",
                p1scib: "1934年底，中央红军占领黎平并召开会议。会议确定向贵州转兵的战略决策，毛泽东的正确意见终于被党中央采纳，红军避免了陷入重围的危险。黎平会议促成了具有决定意义的战略转变。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4, 5, 6, 8] },
                newslist: [{ title: "贵州：把“红色气质”刻在骨子里", link: "http://news.xinhuanet.com/politics/2016-09/12/c_129277192.htm", descp: "黎平会议、遵义会议、四渡赤水、娄山关战役……这些改变中国革命的事件深深地打上了“贵州烙印”。" }, { title: "贵州红军足迹犹在 天堑已变通途", link: "http://news.xinhuanet.com/politics/2016-09/10/c_129276387.htm", descp: "红军途经贵州的黎平、遵义等68个县市区，黎平、瓮安、习水的三位老党员，向记者讲述长征路的交通变迁。" }, { title: "黎平会议：伟大转折从这里开始", link: "http://www.gz.xinhuanet.com/2016-09/07/c_1119524655.htm", descp: "黎平会议是中央红军长征途中召开的第一次重要的政治局会议，为遵义会议的召开奠定了坚实的基础。" }, { title: "黎平，民俗文化旅游“因寨制宜”", link: "http://news.xinhuanet.com/politics/2016-09/07/c_129272349.htm", descp: "中国有2555个村落被纳入中国传统村落名录，其中黎平就有90个，是拥有传统村落数量最多的县。" }, { title: "长征路上的侗乡情", link: "http://news.xinhuanet.com/2016-09/06/c_129271559.htm", descp: "从2012年起，黎平县，以5A级标准、全产业链要求，打造以肇兴侗寨为核心、以侗族文化为魂魄的肇兴景区。" }],
                tipslist: [{ question: "1934年（），中共中央在黎平召开政治局会议，讨论中央红军今后的行动方向问题。", answer: "A", optionA: "12月18日", optionB: "12月17日", optionC: "12月16日 " }, { question: "（）会议决定着中共中央和红军的命运和未来，否定了博古、李德顽固坚持的使红军遭受巨大损失错误战略方针，让中国革命重新走上正确道路。", answer: "A", optionA: "黎平会议 ", optionB: "通道会议 ", optionC: "遵义会议 " }, { question: "中共中央红军入黔的第一次会议是（）", answer: "A", optionA: "黎平会议 ", optionB: "白沙会议 ", optionC: "泸定会议 " }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "-8px", left: " -41px" }, left: "51%", top: "78%" },
                smlmpappos: { left: "-200px", top: "-360px" }
            },
            wujiang: {
                cn: "瓮安",
                startvd: "http://vodfile8.news.cn/data/cdn_transfer/C1/03/c171800f1c46439eded6ec7b45846645c7bc7e03.mp4",
                time: "1935年1月",
                renshu: 56e3,
                status: "中央红军经过3天3夜的顽强战斗，强渡乌江，向遵义挺进",
                haiba: "926m",
                food: ["f8", "f9"],
                kms: "23%",
                p1scib: "距离瓮安县城45公里的乌江江界河渡口是通往遵义的主要渡口，江面宽120多米，两岸悬崖绝壁。1935年1月1日，中央红军经过3天3夜的顽强战斗，强渡乌江，击败黔军，向遵义挺进。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4, 5, 6, 7] },
                newslist: [{ title: "红军四过瓮安，为当地留下什么？", link: "http://news.xinhuanet.com/2016-09/08/c_129274543.htm", descp: "第五次反“围剿”失利后，中央红军开始战略转移。猴场会议之后，红军面临的任务是突破乌江，占领遵义。" }, { title: "旅游业促经济发展实现“大梦想”", link: "http://news.xinhuanet.com/2016-09/08/c_129274539.htm", descp: "瓮安县激励和动员全县人民把长征精神转化为推动瓮安经济发展的新动力，在后发赶超中实现了跨越发展。" }, { title: "返乡就业政策助农民工安居乐业", link: "http://news.xinhuanet.com/2016-09/08/c_129274538.htm", descp: "近年来，瓮安县以“租金优惠、贷款贴息、奖补扶持、员工培训”等优惠政策吸引了大批返乡创业人士。" }, { title: "瓮安创业：钱袋子满了，心也暖了", link: "http://news.xinhuanet.com/2016-09/08/c_129274536.htm", descp: "瓮安大约有10万在外务工人员。返乡农民工创业园是瓮安经济开发区六大园区之一，于2011年建成。" }, { title: "瓮安返乡农民工的创业“小目标”", link: "http://news.xinhuanet.com/2016-09/08/c_129274535.htm", descp: "在五金厂打过工，做过水果批发生意，如今有了自己的鞋厂，44岁的瓮安人黄贤松实现了自己的“小目标”。" }, { title: "今日红军连，依旧那样红", link: "http://news.xinhuanet.com/mil/2016-07/12/c_129139584.htm", descp: "叶挺独立团“强渡乌江模范连”是一个功勋卓著的英雄连队，曾为中央红军横渡乌江天险立下汗马功劳。" }],
                tipslist: [{ question: "1935年（）月，中央红军主力强渡乌江天险，占领了遵义", answer: "C", optionA: "7月 ", optionB: "3月 ", optionC: "1月 " }, { question: "“猴场会议”以后，中央红军立即作出（）的决定", answer: "C", optionA: "飞夺泸定桥 ", optionB: "四渡赤水 ", optionC: "强渡乌江" }, { question: "红军曾经几次攻占娄山关？", answer: "B", optionA: "1次", optionB: "2次", optionC: "3次" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "-27px", left: "10px" }, left: "42%", top: "69%" },
                smlmpappos: { left: "-122px", top: "-339px" }
            },
            zunyi: {
                cn: "遵义",
                startvd: "http://vodfile11.news.cn/data/cdn_transfer/36/31/36120dcbbe5e9bd0e065d1780bc010ac71049731.mp4",
                time: "1935年1月15日至17日",
                renshu: 38e3,
                status: "遵义会议确立了以毛泽东为代表的新的中央正确领导",
                haiba: "827m",
                food: ["f8", "f9"],
                kms: "26%",
                p1scib: "1935年1月，中共中央在遵义召开政治局扩大会议，结束了王明“左”倾机会主义路线在党中央的统治，确立以毛泽东为代表的新的中央正确领导，把党的路线转到马克思列宁主义的轨道上。",
                p1vr: { isvr: !0, vrlink: "http://fms.news.cn/vr/player/index.html#name=20160623zyhyhz", vr_cv: "p1_vr_cv_zunyi.jpg" },
                newslist: [{ title: "遵义：娄山关村打工者变创业者", link: "http://news.xinhuanet.com/politics/2016-09/10/c_129276403.htm", descp: "在贵州遵义板桥镇娄山关村，有个“农民工返乡创业一条街”，50岁出头的马毅是当地藤编产业带头人。" }, { title: "娄山关村攻下脱贫“娄山关”", link: "http://news.xinhuanet.com/politics/2016-09/09/c_129274915.htm", descp: "10年前，娄山关村还戴着“国家扶贫开发一类重点村”的帽子，而到2014年，该村人均年收入已达1.4万元。" }, { title: "遵义：历史转折地的历史新转折", link: "http://news.xinhuanet.com/2016-08/11/c_1119377449.htm", descp: "新的历史时期，在贵州“大数据”战略引领下，遵义主抓产业转型，“大数据”产业加速突破。" }, { title: "为什么说遵义会议是伟大的转折", link: "http://news.xinhuanet.com/2016-08/11/c_1119374459.htm", descp: "遵义会议是中国共产党和红军历史上的一次伟大转折。“在紧急关头挽救了党、挽救了红军。”" }, { title: "遵义：革命老区的“新长征”", link: "http://news.xinhuanet.com/politics/2016-08/08/c_1119351283.htm", descp: "遵义的地域经济发展不平衡，近年来遵义将红色旅游与乡村游、生态游结合起来，实施“红＋绿”旅游扶贫。" }, { title: "贵州遵义“红军街”", link: "http://news.xinhuanet.com/politics/2016-06/24/c_129088420.htm", descp: "“红军街”是遵义会议会址景区的重要组成部分，毗邻遵义会议会址，是遵义重点打造的红色旅游精品工程。" }],
                tipslist: [{ question: "遵义会议共有多少人参加？", answer: "A", optionA: "20人 ", optionB: "18人 ", optionC: "22人" }, { question: "促使遵义会议召开的直接原因是？", answer: "C", optionA: "第五次反围剿失败", optionB: "王明左倾错误 ", optionC: "纠正错误的军事路线" }, { question: "谁以《红星报》主编身份列席会议，并在会议期间被选为党中央秘书长？", answer: "C", optionA: "朱德", optionB: "凯丰", optionC: "邓小平" }],
                zb: "http://vod.xinhuanet.com/v/vod.html?vid=389833",
                "vodmp4": "http://vodfile2.news.cn:80//data/cdn_transfer/A2/9A/a2db428b02db396597e24b4374f197da1b6d009a.mp4?key=&key1=",
                zbcv: "img/zbcv/5.jpg",
                zbtext: "遵义，一个伟大的历史转折就发生在这个黔北小城。遵义会议，大家从课本和影像上都很熟悉了，《红色追寻》的三位主人公在遵义还能和你们一起看到什么？",
                jpos: { jtext: { top: "-28px", left: "-11px" }, top: "67.5%", left: " 37.5%" },
                smlmpappos: { left: "-122px", top: "-339px" }
            },
            chishui: {
                cn: "习水",
                startvd: "http://vodfile12.news.cn/data/cdn_transfer/47/92/477e4c3c893047f643912ccae95462ed14f1f792.mp4",
                time: "1935年1月至4月",
                renshu: 3e4,
                status: "红军实行高度灵活机动的运动战方针，有效地歼灭敌人",
                haiba: "518m",
                food: ["f10"],
                kms: "53%",
                p1scib: "四渡赤水战役历时三个多月，红军实行高度灵活机动的运动战方针，迂回穿插于敌人数十万重兵之间，有效地歼灭敌人。从而摆脱了敌人的围追堵截，使中央红军从被动走向主动。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4, 5, 6, 7] },
                newslist: [{ title: "贵州，把“红色气质”刻在骨子里", link: "http://news.xinhuanet.com/politics/2016-09/12/c_129277192.htm", descp: "“十三五”时期，贵州将进一步弘扬红色传统，打响红色品牌，为决胜全面小康提供精神力量。" }, { title: "贵州红军足迹犹在 天堑已变通途", link: "http://news.xinhuanet.com/politics/2016-09/10/c_129276387.htm", descp: "历经80年沧桑，当初的泥泞小路已是四通八达的交通网络，长征路沿线的百姓生活也发生了翻天覆地的变化。" }, { title: "贵州各地“尊师重教”蔚然成风", link: "http://news.xinhuanet.com/politics/2016-09/10/c_129276405.htm", descp: "在纪念红军长征胜利80周年之际，“中国工农红军‘耿飚将军’红军小学”授旗授牌感恩捐赠仪式在赤水举行。" }, { title: "探访红军“四渡赤水”一渡渡口", link: "http://news.xinhuanet.com/politics/2016-08/15/c_129230525.htm", descp: "1935年1月，红军在土城战斗中因敌军不断增援，奉命撤出战斗，从猿猴场（今元厚）、土城地区一渡赤水河。" }, { title: "探访赤水红一军团陈列馆", link: "http://news.xinhuanet.com/photo/2016-08/13/c_129227278.htm", descp: "1935年1月，红一军团部及红二师到达丙安古镇，揭开了中国工农红军“四渡赤水”战役的序幕。" }, { title: "毛泽东为什么称四渡赤水是他的“得意之笔”？", link: "http://news.xinhuanet.com/2016-08/12/c_1119380984.htm", descp: "四渡赤水是遵义会议毛泽东进入决策核心后，指挥的第一个战役行动，被他评价为自己的“得意之笔”。" }],
                tipslist: [{ question: "红军四渡赤水的第一个渡口是哪里？", answer: "A", optionA: "土城", optionB: "太平渡", optionC: "茅台" }, { question: "四渡赤水被哪位领导人称为他军事斗争的“得意之作”？", answer: "B", optionA: "周恩来 ", optionB: "毛泽东  ", optionC: "朱德" }, { question: "诗句“苍山如海、残阳如血”描写的是哪里的景色？", answer: "B", optionA: "夹金山", optionB: "娄山关  ", optionC: "腊子口" }],
                zb: "http://vod.xinhuanet.com/v/vod.html?vid=389967",
                "vodmp4": "http://vodfile9.news.cn:80//data/cdn_transfer/FC/15/fc3a520dc42139cad176d127862bbc7988664715.mp4?key=&key1=",
                zbcv: "img/zbcv/6.jpg",
                zbtext: "四渡赤水是毛泽东“运动战”的经典案例，想听90后讲解员如何介绍毛主席军事指挥上的“得意之作”？请关注《红色追寻》。",
                jpos: { jtext: { top: "17px", left: "-13px" }, top: "66.5%", left: "25.5%" },
                smlmpappos: { left: "-46px", top: "-323px" }
            },
            jinshajiang: {
                cn: "禄劝",
                startvd: "http://vodfile5.news.cn/data/cdn_transfer/26/69/260a7b9adb662a799711b9f747529def16316969.mp4",
                time: "1935年5月3日至9日",
                renshu: 3e4,
                status: "在7天7夜的时间里，红军主力只靠7只小船从容地渡过金沙江",
                haiba: "2272m",
                food: ["f11"],
                kms: "63%",
                p1scib: "当红军大队人马向金沙江挺进时，蒋介石下达命令，控制渡口、毁船封江。1935年5月，红军夺下位于云南省禄劝县的皎平渡，在7天7夜的时间里，红军主力只靠7只小船从容地过了江。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4, 5, 6, 7] },
                newslist: [{ title: "三大主力红军会师加油总驿站", link: "http://www.xinhuanet.com/foto/2016-09/10/c_129276416.htm", descp: "长征中史诗般的重大事件如四渡赤水巧渡金沙江、强渡大渡河、飞夺泸定桥等，都发生在四川境内。" }, { title: "红军巧渡金沙江到底“巧”在哪", link: "http://news.xinhuanet.com/politics/2016-08/21/c_1119426923.htm", descp: "金沙江是红军北上的一大险关。而英勇智慧的红军，用一连串“巧招”实现了渡江的战略意图。" }, { title: "37名船工送3万多红军渡金沙江", link: "http://news.xinhuanet.com/politics/2016-08/07/c_129210286.htm", descp: "从1935年5月，在刘伯承指挥下，37名船工用7条小船，经过7天7夜苦战，3万多红军全部从皎平渡渡过金沙江。" }],
                tipslist: [{ question: "长征途中,红军（）跳出了蒋介石几十万大军的围追堵截，变被动为主动。", answer: "B", optionA: "强渡乌江 ", optionB: "巧渡金沙江 ", optionC: "四渡赤水 " }, { question: "1935年5月2日至9日，中央红军渡过位于（）的金沙江，取得战略转移的决定性胜利", answer: "C", optionA: "四川  ", optionB: "广西 ", optionC: "云南" }, { question: "红军长征跳出敌人包围圈的军事行动是（）", answer: "B", optionA: "四渡赤水 ", optionB: "巧渡金沙江 ", optionC: "飞夺泸定桥" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "17px", left: "-21px" }, left: " 9%", top: "77%" },
                smlmpappos: { left: "-17px", top: "-337px" }
            },
            daduhe: {
                cn: "石棉",
                startvd: "http://vodfile9.news.cn/data/cdn_transfer/C6/1B/c6ff25b56c5f15bccf391aeb41fc1f11e5c8641b.mp4",
                time: "1935年5月24至25日",
                renshu: 3e4,
                status: "红一团第1营挑选17名勇士组成突击队，控制渡口",
                haiba: "701m",
                food: ["f11"],
                kms: "68%",
                p1scib: "1935年5月24日，红军先头部队占领四川石棉县安顺场，准备渡过大渡河。25日，红一团第1营挑选17名勇士组成突击队，借助我军火力掩护，控制渡口。随后，红一团由此渡过了大渡河。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [3, 4, 5] },
                newslist: [{ title: "大渡河畔的二度“长征”", link: "http://news.xinhuanet.com/fortune/2016-09/11/c_129276794.htm", descp: "如果说红军选择长征是为了中国革命的胜利，那么当下脱贫攻坚就是一场新时代的长征，为的是民富国强，任重道远。" }, { title: "大渡河畔换新颜 安顺场村感恩深", link: "http://news.xinhuanet.com/politics/2016-09/11/c_129276921.htm", descp: "雅安市石棉县安顺场，这座被青山碧水环绕、房屋整齐有致的小镇，因历史上两个著名的战役而闻名天下。" }, { title: "安顺场：当年胜利场 如今奔小康", link: "http://www.xinhuanet.com/foto/2016-09/10/c_129276414.htm", descp: "史学家说：“没有强渡大渡河的胜利，就没有中国工农红军长征的胜利，就没有今天的新中国”。" }, { title: "红军为何没成为“石达开第二”", link: "http://news.xinhuanet.com/photo/2016-08/23/c_129250357.htm", descp: "抢渡大渡河是中央红军的又一次惊心动魄的军事行动，关系到中央红军是否会成为“石达开第二”。" }, { title: "访大渡河 感受世界军史奇迹", link: "http://news.xinhuanet.com/politics/2016-08/08/c_1119355648.htm", descp: "从安顺场到泸定桥，虽然只是二万五千里长征的一小段，却生动诠释了红军的英勇善战、坚韧不拔。" }],
                tipslist: [{ question: "当时红军共分几路强渡大渡河？", answer: "B", optionA: "没有分兵", optionB: "两路 ", optionC: "三路" }, { question: "当年强渡大渡河的勇士来自红一军团红一师红一团下的哪个部队？", answer: "B", optionA: "一营一连", optionB: "一营二连  ", optionC: "一营三连" }, { question: "强渡大渡河的红一军团红一师红一团团长是？", answer: "B", optionA: "孙继先", optionB: "杨得志  ", optionC: "黎林" }],
                zb: "http://vod.xinhuanet.com/v/vod.html?vid=390117",
                 "vodmp4": "http://vodfile2.news.cn:80//data/cdn_transfer/B8/FF/b8d3f2d0f3376f8f3025a20f9940799193b348ff.mp4?key=&key1=",
                zbcv: "img/zbcv/7.jpg",
                zbtext: "四渡赤水后，红军继续北上，《红色追寻》的三位主人公也长途转战，从贵州习水赤水河畔来到另一条攸关红军命运的湍急大河边。他们又将面临哪些挑战？",
                jpos: { jtext: { top: "-2px", left: "19px" }, top: "56%", left: "8%" },
                smlmpappos: { top: "-243px", left: "-1px" }
            },
            luding: {
                cn: "泸定",
                startvd: "http://vodfile6.news.cn/data/cdn_transfer/37/81/3706c51566016671d5f37e630ccf5506d2fada81.mp4",
                time: "1935年5月29日",
                renshu: 3e4,
                status: "红四团22名突击队员夺下泸定桥，与左岸部队合围占领了泸定城",
                haiba: "1349m",
                food: ["f11"],
                kms: "69%",
                p1scib: "1935年5月底，中央红军先头部队沿大渡河左岸北上，主力沿右岸北上，红四团第2连的22名突击队员冒着枪林弹雨，沿着火墙密布的铁索夺下泸定桥，并与左岸部队合围占领了泸定城。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 6, 7] },
                newslist: [{ title: "三大主力红军会师加油总驿站", link: "http://www.xinhuanet.com/foto/2016-09/10/c_129276416.htm", descp: "长征中史诗般的重大事件如四渡赤水巧渡金沙江、强渡大渡河、飞夺泸定桥等，都发生在四川境内。" }, { title: "这些作品，为长征谱写视觉史诗", link: "http://news.xinhuanet.com/politics/2016-08/25/c_129253670.htm", descp: "油画《飞夺泸定桥》（刘国枢作品，1959年）再现的就是镶嵌在中国革命史册之中的这一幕场景。" }, { title: "重返泸定桥：回忆奇绝惊险的胜利", link: "http://www.sc.xinhuanet.com/content/2016-08/14/c_1119388495.htm", descp: "“飞夺泸定桥”是红军长征历程中极为重要的一场战斗，被聂荣臻元帅评价为“奇绝惊险”的胜利。" }],
                tipslist: [{ question: "当时为火速赶往泸定桥，红四团官兵连夜奔袭了多少公里的路程？", answer: "B", optionA: "120公里", optionB: "100公里", optionC: "80公里" }, { question: "飞夺泸定桥一战的带领勇士们冲上泸定桥的指挥员是？", answer: "A", optionA: "廖大珠", optionB: "刘梓华", optionC: "王海云" }, { question: "飞夺泸定桥一战，敌方是什么部队？", answer: "B", optionA: "湘军", optionB: "川军", optionC: "黔军" }],
                zb: "http://vod.xinhuanet.com/v/vod.html?vid=390313",
                "vodmp4": "http://vodfile4.news.cn:80//data/cdn_transfer/91/E1/9172db0038919d2bb8af14e0131ac1cddc162ce1.mp4?key=&key1=",
                zbcv: "img/zbcv/8.jpg",
                zbtext: "红军长征面临又一个生死存亡的考验——夺下泸定桥。《红色追寻》的三位主人公，也将沿着当年的道路行进，一同跨过清康熙年间十三根铁索打造的铁索桥。在那里，他们会遇到怎样的神秘嘉宾？",
                jpos: { jtext: { top: "-2px", left: "19px" }, top: "52%", left: "8%" },
                smlmpappos: { top: "-188px", left: "-1px" },
                haibatop: "-35px"
            },
            xueshan: {
                cn: "翻雪山（四川省宝兴县）",
                startvd: "http://vodfile4.news.cn/data/cdn_transfer/9A/9B/9a2fa2edfb57e2d3b14ab02a4e19899d9b8d489b.mp4",
                time: "1935年6月",
                renshu: 0,
                status: "中央红军翻越夹金山（红军翻越的第一座大雪山），与红四方面军汇合。",
                haiba: "4019m",
                food: [],
                kms: "82%",
                p1scib: "夹金山位于四川省雅安市宝兴县境内，海拔超过四千米、山顶终年积雪。1935年6月12日，中央红军翻越夹金山（长征路上红军翻越的第一座大雪山），与红四方面军汇合。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4, 5, 6] },
                newslist: [{ title: "网络媒体走转改：山河不忘长征魂", link: "http://news.xinhuanet.com/politics/2016-09/18/c_129286001.htm", descp: "夹金山是长征路上红军翻越的第一座大雪山。山脚雪水融成的溪流清澈明亮，手伸进去几秒已经刺骨寒。" }, { title: "三大主力红军会师加油总驿站", link: "http://www.xinhuanet.com/foto/2016-09/10/c_129276416.htm", descp: "长征中史诗般的重大事件如四渡赤水巧渡金沙江、强渡大渡河、飞夺泸定桥等，都发生在四川境内。" }, { title: "红军用什么爬雪山、过草地？", link: "http://news.xinhuanet.com/photo/2016-08/31/c_129264210.htm", descp: "“苦不苦，想想长征二万五”一语道出了长征留给后人最醒目的印记，那便是一个“苦”字。" }, { title: "翻越雪山为什么难", link: "http://news.xinhuanet.com/photo/2016-08/24/c_129252538.htm", descp: "翻越雪山为什么难？一是雪山地区恶劣的自然环境，二是红军饥饿、身体羸弱和御寒衣物缺乏等原因。" }, { title: "中国海拔最高的红军烈士墓", link: "http://news.xinhuanet.com/local/2016-06/18/c_1119066885.htm", descp: "在海拔为4800米的克口山的垭口下，有一座中国海拔最高的红军烈士墓——亚口夏山红军烈士墓。" }, { title: "70岁老人勇攀梦笔山", link: "http://www.hb.xinhuanet.com/2016-06/17/c_1119064550.htm", descp: "70岁高龄的龚邵玉老先生历时近2个小时，登上了红军万里长征时翻越的第二座雪山——梦笔山。" }],
                tipslist: [{ question: "1、红军过雪山时，御寒用品有什么？", answer: "C", optionA: "棉衣", optionB: "棉鞋 ", optionC: "辣椒水" }, { question: "2、中央红军一共翻越了几座雪山？", answer: "C", optionA: "3 座", optionB: "4座 ", optionC: "5座" }, { question: "3、红军的哪部分人员在过雪山的过程中损失惨重？", answer: "A", optionA: "炊事员", optionB: "卫生员", optionC: "司号员" }],
                zb: "http://vod.xinhuanet.com/v/vod.html?vid=390501",
                "vodmp4": "http://vodfile10.news.cn:80//data/cdn_transfer/9B/BF/9beb4473b3a972e29a3d30690caa14e45d3cb4bf.mp4?key=&key1=",
                zbcv: "img/zbcv/9.jpg",
                zbtext: "夹金山，大雪山。当地百姓称之为“神山”。红军乐观地说，那我们就是翻越雪山的“神仙”。《红色追寻》的三位主人公将开始真正意义上的“走”，沿着当年红军长征中最艰苦的路，爬雪山、过草地。",
                jpos: { jtext: { top: "-5px", left: "34px" }, top: "45%", left: "8%" },
                smlmpappos: { top: "-185px", left: "-18px" },
                haibatop: "-45px"
            },
            caodi: {
                cn: "过草地（毛儿盖）",
                startvd: "http://vodfile11.news.cn/data/cdn_transfer/CF/58/cf9a50984c314475cd8fbdb936c7cb2e64728258.mp4",
                time: "1935年8月",
                renshu: 0,
                status: "红军征服雪山以后，在毛儿盖一带集结休整待命",
                haiba: "3235m",
                food: ["f15", "f16", "f17"],
                kms: "85%",
                p1scib: "1935年8月，红军征服雪山以后，在毛儿盖一带集结休整待命。面对纵横数百里、人烟稀少的水草地。党中央决定红军第一、第四方面军混合编为左、右两路军，分别向班佑及阿坝地区开进。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3] },
                newslist: [{ title: "昔日长征艰险地 开出藏地“幸福花”", link: "http://news.xinhuanet.com/politics/2016-09/16/c_129284050.htm", descp: "为让更多后辈来到此地，缅怀先烈、传承长征精神，这片埋葬无数烈士遗骨的大草地也越来越受到保护。" }, { title: "长征路上红军真的吃皮带吗？", link: "http://news.xinhuanet.com/ttgg/2016-09/14/c_1119566334.htm", descp: "在找不到任何食物替代品的情况下，任弼时和警卫员将皮带切成若干段，放到锅里煮，每人分得3小块。" }, { title: "重走长征路 走进红军长征纪念碑碑园", link: "http://news.xinhuanet.com/politics/2016-09/14/c_129282202.htm", descp: "红军长征纪念碑碑园坐落于四川松潘县川主寺镇，是纪念红军长征胜利的总碑，具有象征意义。" }, { title: "跨越草地为什么那么苦", link: "http://news.xinhuanet.com/politics/2016-09/02/c_1119499792.htm", descp: "长征中，红军穿越人迹罕至的茫茫水草地，这对一路征战、饥寒交迫的红军而言，几乎是个“死亡陷阱”。" }, { title: "风雨彩虹长征路 铿锵玫瑰助扶贫", link: "http://news.xinhuanet.com/2016-09/14/c_129282205.htm", descp: "近年来，小金县不断延伸玫瑰种植产业链，大力发展“互联网+”新业态，建成乡镇电商服务点。" }, { title: "干部教育培训的“大熔炉”", link: "http://news.xinhuanet.com/politics/2016-09/13/c_129279872.htm", descp: "长征干部学院是一所以弘扬“红军长征精神”为主题的干部学院，是干部教育培训的“大熔炉”。" }, { title: "用心体会长征永远在路上", link: "http://news.xinhuanet.com/politics/2016-09/13/c_129279751.htm", descp: "阿坝州是红军长征从悲壮走向胜利的转折点。红军在阿坝州转战停留1年零4个月，历经长征最艰苦的行程。" }],
                tipslist: [{ question: "1935至1936年，哪几个红军方面军先后经过红原草地？", answer: "A", optionA: " 一、二、四", optionB: "一、二、三 ", optionC: " 一、三、四" }, { question: "红军过草地时，因为找不到食物将（）放到锅里煮，并风趣地称为“煮牛肉”。", answer: "C", optionA: "鞋子", optionB: "野菜 ", optionC: "皮带" }, { question: "红军过草地时最大的困难是？（）", answer: "A", optionA: "缺粮", optionB: "风沙 ", optionC: "泥潭" }],
                zb: "http://vod.xinhuanet.com/v/vod.html?vid=390521",
                "vodmp4": "http://vodfile7.news.cn:80//data/cdn_transfer/DA/56/da7c90b899ab6a82204dec2127085e502096e656.mp4?key=&key1=",
                zbcv: "img/zbcv/10.jpg",
                zbtext: "红军进入草原后，最大的威胁是缺粮造成的饥饿。红军断粮后，口粮几乎全部由草根、树皮、野菜所代替，皮带、马皮也都煮煮来吃。在日干乔大草原，《红色追寻》的三位主人公将会遇到什么困难？",
                jpos: { jtext: { top: "-5px", left: "34px" }, top: "39%", left: "10%" },
                smlmpappos: { top: "-185px", left: "-18px" },
                haibatop: "-45px"
            },
            baozuo: {
                cn: "包座",
                startvd: "http://vodfile11.news.cn/data/cdn_transfer/01/F3/0194cd394cb1e16e74c5801a54db85797072eef3.mp4",
                time: "1935年8月29日至31日",
                renshu: 11e4,
                status: "红四方面军部队发动包座战役，共毙、伤、俘敌5000余人",
                haiba: "3140m",
                food: ["f15", "f16", "f17"],
                kms: "90%",
                p1scib: "1935年8月，红四方面军部队在四川若尔盖县包座地区歼灭守敌及援敌49师的大部，共毙、伤、俘敌5000余人，扫清了红军北上的障碍，使敌企图把红军困在草地的阴谋彻底破产。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 4, 5] },
                newslist: [{ title: "三大主力红军会师加油总驿站", link: "http://www.xinhuanet.com/foto/2016-09/10/c_129276416.htm", descp: "长征中史诗般的重大事件如四渡赤水巧渡金沙江、强渡大渡河、飞夺泸定桥等，都发生在四川境内。" }, { title: "包座战役：打破把红军困死的阴谋", link: "http://news.xinhuanet.com/mil/2016-09/03/c_129268309.htm", descp: "红军赢得包座战役，打开了向甘南进军的门户，使得国民党军企图把红军困在草地的阴谋彻底破产。" }, { title: "新华网探访红军过草地第一村", link: "http://www.hb.xinhuanet.com/2016-06/18/c_1119068825.htm ", descp: "新华网“重走长征路”团队追寻红军长征足迹，来到四川省若尔盖县班佑村，并向班佑村小学捐赠文具和现金。" }],
                tipslist: [{ question: "粉碎了国民党欲将红军困死于川西北草地的企图的战役是？", answer: "B", optionA: "飞夺泸定桥", optionB: "包座战役", optionC: "激战腊子口" }, { question: "徐向前在包座战役中采取的战术是？", answer: "A", optionA: "围点打援", optionB: "穿插包围", optionC: "声东击西" }, { question: "在指挥包座战斗中英勇牺牲，年仅24岁的红军师长是（）", answer: "C", optionA: "甘济时", optionB: "蔡申熙", optionC: "王友钧" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "6px", left: "9px" }, top: "26%", left: "14.6%" },
                smlmpappos: { top: "-67px", left: "-0px" },
                haibatop: "-33px"
            },
            lazikou: {
                cn: "腊子口",
                startvd: "http://vodfile3.news.cn/data/cdn_transfer/DF/58/df517f25ecfe8687ea3e310bf7e9467175e74358.mp4",
                time: "1935年9月",
                renshu: 12e3,
                status: "红一方面军兵分两路迂回至敌人后方，发动奇袭攻占腊子口",
                haiba: "2050m",
                food: ["f18", "f19"],
                kms: "95%",
                p1scib: "腊子口地区位于甘肃迭部县，是岷山山脉的重要隘口，地势险要。1935年9月，红一方面军2师4团兵分两路迂回至敌人后方，发动奇袭攻占腊子口，打通了通往甘南的门户。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4, 5, 6, 7, 8] },
                newslist: [{ title: "寻找红军在甘肃的足迹", link: "http://news.xinhuanet.com/2016-09/20/c_1119591956.htm", descp: "甘肃作为红军长征经过的重要省份之一，是各路红军到达最全、活动时间最长、行经地域最广的省份。" }, { title: "天险腊子口是怎样攻克的", link: "http://news.xinhuanet.com/politics/2016-09/07/c_1119524084.htm", descp: "腊子口一战，标志着红一方面军赢得了长征路上的险关之战，打破了国民党“困死”红军的阴谋。" }, { title: "腊子口乡老党员为年轻党员讲党课", link: "http://www.gs.xinhuanet.com/diebuxian/2016-09/06/c_1119521120.htm", descp: "腊子口乡就党员如何发挥先锋模范作用、践行“两学一做”学习教育，邀请老党员为广大年轻党员讲课。" }, { title: "102岁老红军：踏着哑弹翻腊子口", link: "http://news.xinhuanet.com/mil/2016-08/25/c_129253791.htm", descp: "老红军回忆道：“翻过腊子口，我一脚踩下去，踏到的不是山石，而是手榴弹堆成的‘小槛’……”" }, { title: "腊子口：昔日长征天险今朝变通途", link: "http://www.gs.xinhuanet.com/2016-06/27/c_1119115449.htm", descp: "80年前，红军长征途中在腊子口遇阻，经过浴血奋战，突破天险腊子口，从此打开北上抗日的大门。" }],
                tipslist: [{ question: "腊子口的口宽约为多少？", answer: "A", optionA: "30米", optionB: "40米", optionC: "50米" }, { question: "腊子口两侧绝壁峭立，通过的唯一通路是？", answer: "B", optionA: "绳索", optionB: "木桥", optionC: "石桥" }, { question: "担任突破腊子口任务的“开路先锋”是？", answer: "B", optionA: "红一团", optionB: "红四团", optionC: "红六团" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "-16px", left: "-61px" }, top: "21%", left: "18%" },
                smlmpappos: { top: "-8px", left: "-23px" }
            },
            zhiluozhen: {

                cn: "直罗镇",
                startvd: "http://vodfile12.news.cn/data/cdn_transfer/10/CE/109056961f1dcd8f5646e29a1c48838d33415ace.mp4",
                time: "1935年11月",
                renshu: 4e3,
                status: "红一方面军在直罗镇粉碎了敌人对陕甘根据地的第三次“围剿”",
                haiba: "981m",
                food: ["f20", "f21"],
                kms: "99%",
                p1scib: "1935年11月，红一方面军在陕西富县直罗镇地区对国民党军发起进攻，粉碎了敌人对陕甘根据地的第三次“围剿”。给党中央把全国革命大本营放在西北的任务，举行了一个奠基礼。",
                p1vr: {
                    isvr: !1,
                    vrlink: "",
                    ohtml: '<div class="v"><img src="img/zhiluozhen_ohtml_cv.jpg"/><video  controls src="http://tpic.home.news.cn/newsVideo//video/videoStore/videoLink/2016/08/db8a5b888aab49b9a2c1bcba78a7d7f1.mp4" width="100%">   your browser does not support the video tag    </video></div>'
                },
                newslist: [{ title: "粉碎敌人第三次“围剿”", link: "http://www.sn.xinhuanet.com/16zhuanti/cz80/20160822/3393544_c.html", descp: "1935年11月初，中央红军与红十五军团会师后，毛泽东、彭德怀决定在直罗镇发起歼灭战。" }, { title: "新华网重走长征路：直罗镇战役", link: "http://www.sn.xinhuanet.com/newsp/20160818/3383810_v.html", descp: "1935年11月，中央红军与红十五军团会师后，毛泽东、彭德怀决定在直罗镇（今陕西富县境内）发起歼灭战。" }, { title: "铁军长征路上的十大经典瞬间", link: "http://news.xinhuanet.com/mil/2016-07/12/c_129139596_10.htm", descp: "直罗镇战役粉碎了国民党军的“围剿”，“给党中央把全国革命大本营放在大西北的任务，举行了一个奠基礼”。" }],
                tipslist: [{ question: "“给党中央把全国革命大本营放在大西北的任务，举行了一个奠基礼”的战役是（）", answer: "C", optionA: "飞夺泸定桥", optionB: "山城堡战役", optionC: "直罗镇战役" }, { question: "直罗镇战役的主要指挥官是？", answer: "B", optionA: "贺龙", optionB: "彭德怀", optionC: "聂荣臻" }, { question: "直罗镇战役的胜利彻底粉碎了国民党军对陕甘苏区的第几次“围剿”？", answer: "C", optionA: "第一次", optionB: "第二次", optionC: "第三次" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "20px", left: "-27px" }, top: "7%", left: "50%" },
                smlmpappos: { left: "-144px", top: "-0px" }
            },
            ninghui: {
                cn: "会宁",
                startvd: "http://vodfile2.news.cn/data/cdn_transfer/9E/7B/9ec244a52783a7ceeb6833c4cfd82086a796797b.mp4",
                time: "1936年10月9日",
                renshu: 0,
                status: "红一、四方面军在甘肃会宁胜利会合",
                haiba: "1730m",
                food: [],
                kms: "99%",
                p1scib: "会宁县位于甘肃省中部。由于张国焘错误路线的干扰，红一、四方面军1935年9月在茫茫草地中痛苦分离后，经过一年的艰苦斗争，又在黄土高原的会宁城胜利会合。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
                newslist: [{ title: "会宁纪念塔有题字没署名的秘密", link: "http://news.xinhuanet.com/politics/2016-09/22/c_129294185.htm", descp: "80年后的今天，当我们再次齐聚会宁，仿佛看到了当年红军在会宁城欢庆胜利会师的动人场面。" }, { title: "甘肃会宁：老区人民致富有新招", link: "http://news.xinhuanet.com/politics/2016-09/21/c_129291929.htm", descp: "八十年前，红军在此胜利会师，两万五千里的长征划上句号。但是，对于会宁县来说，长征并没有结束。" }, { title: "甘肃会宁：红军会师 中国安宁", link: "http://news.xinhuanet.com/politics/2016-07/25/c_129174163.htm", descp: "红军三大主力会宁会师是革命力量大团结的典范，是长征胜利的重要标志，是中国革命走向胜利的里程碑。" }, { title: "会宁，为长征奇迹画上圆满句号", link: "http://www.gs.xinhuanet.com/2016-06/29/c_1119131525.htm", descp: "甘肃会宁因红军三大主力会师而被载入史册。80年来，“自强图存，团结胜利”的会师精神，激励着会宁人。" }, { title: "在长征胜利会师地的回望", link: "http://news.xinhuanet.com/politics/2016-06/28/c_1119123885.htm", descp: "会宁县从小学到高中，学生们的“开学第一课”都要来到红军会宁会师旧址前，重温长征故事，学习长征精神。" }],
                tipslist: [{ question: "素有“陇秦锁钥”之称的兵家必争之地是？", answer: "B", optionA: "平凉", optionB: "会宁", optionC: "兰州" }, { question: "会宁会师前，推行分裂路线，另立“中央”的是？", answer: "A", optionA: "张国焘", optionB: "陈昌浩", optionC: "博古" }, { question: "在会宁会师的是红军的哪几个主力部队？", answer: "C", optionA: "红一方面军和红二方面军", optionB: "红一军团和红三军团", optionC: "红一方面军和红四方面军" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "-8px", left: "-41px" }, top: "9%", left: "25.5%" },
                smlmpappos: { left: "-110px", top: "-0px" }
            },
            jiangtai: {
                cn: "将台堡",
                startvd: "http://vodfile6.news.cn/data/cdn_transfer/FB/24/fb3f0744febd57475e2a1e080dde2357ca134024.mp4",
                time: "1936年10月22日",
                renshu: 0,
                status: "红军三个方面军完全会合，中国工农红军完成了战略大转移",
                haiba: "1828m",
                food: [],
                kms: "99%",
                p1scib: "将台堡位于宁夏西吉县，1936年10月，红二方面军总指挥部同红一方面军主力在将台堡胜利会师，至此，红军三个方面军完全会合，中国工农红军胜利地完成了战略大转移。",
                p1vr: { isvr: !1, vrlink: "", imggroup: [1, 2, 3, 4, 5, 6] },
                newslist: [{ title: "西吉县宽带工程推进信息精准扶贫", link: "http://news.xinhuanet.com/local/2016-09/18/c_129285796.htm", descp: "西吉县推进“互联网+新农村”建设，用信息化手段提高建档立卡贫困户“回头看”工作质量，为扶贫攻坚加速度。" }, { title: "红色将台堡", link: "http://news.xinhuanet.com/politics/2016-08/04/c_129203250.htm", descp: "将台堡红军长征会师纪念园位于宁夏西吉县城南26公里的将台乡，是古丝绸之路上的一处重要军事要地。" }, { title: "红军一、二、四方面军大会师", link: "http://www.gs.xinhuanet.com/zhuanti/2016-06/22/c_1119093366.htm", descp: "1936年10月，红一、四方面军在会宁县城胜利会师；红一、二方面军在静宁以北的将台堡胜利会师。" }],
                tipslist: [{ question: "中央红军长征中一共有几次会师？", answer: "B", optionA: "六次", optionB: "八次", optionC: "十次" }, { question: "标志着红军长征胜利结束的最后一次会师是？", answer: "A", optionA: "将台堡会师     ", optionB: "会宁会师   ", optionC: "甘泉会师  " }, { question: "红一方面军的长征行程是？", answer: "C", optionA: "两万八千里", optionB: "一万六千里", optionC: "两万五千里" }],
                zb: "",
                zbcv: "",
                jpos: { jtext: { top: "-27px", left: "-5px" }, top: "7.5%", left: "29.5%" },
                smlmpappos: { left: "-110px", top: "-0px" }
            }
        },
        k = {},
        l = ["yudu", "xingan", "tongdao", "liping", "wujiang", "zunyi", "chishui", "jinshajiang", "daduhe", "luding", "xueshan", "caodi", "baozuo", "lazikou", "zhiluozhen", "ninghui", "jiangtai"];

    l.forEach(function(a) {
        k[a] = function() {
            e(a), $(".vdmask .v").html("<video " + width_ltr_height(16, 9) + '=100% autoplay control src="' + j[a].startvd + '" />');
            $(".vdmask .v video")[0];
            $(".vdmask .v video")[0].onended = function() { $(".vdmask .skip").trigger("click") }, $(".vdmask").show().on("click", ".skip", function() { $(".vdmask").hide(), $(".vdmask .v").empty(), $(".container .funcpart").show(), $(".container .ctrlpart").show(), b(a), $("#banner").show(), setTimeout(function() { $("#thr").show() }, 10) }), j[a].startvd || $(".vdmask .skip").trigger("click")
        }
    }), window.DFUNC = k, $(".container .corrept .wrap1").mCustomScrollbar({}), $(".ctrlpart").on("click", ".s1", function(a) {
        var b = $(a.target).parent().next().find(".eg");
        g({
            obj: $(a.target),
            str: "<b style='font-family:Microsoft YaHei;'>+1</b>",
            callback: function() {
                var a = parseInt(b.text().trim()) + 1;
                b.text(a)
            }
        })
    }).on("click", ".pl", function() { if(!$(".ctrlpart .plmask .b iframe").length ){return}  $(".ctrlpart .plmask").toggleClass("hide") }), $(".vrmask .close").on("click", function() { $(".vrmask .v").empty(), $(".vrmask").hide(), $("#banner").show() }), $(".container .corrept .p1 .vr ").on("click", ".play_vr", function(a) {
        return a.preventDefault(), $(a.target).attr("href") ? ($(".vrmask .v").append($('<iframe src="' + ($(a.target).attr("href") || "page/nvd.html") + '"></iframe>')), $(".vrmask").show(), void $("#banner").hide()) : alert("href is need")
    }), $(".container .corrept .p3 .zb .play").on("click", function() { $(".container .corrept .p3 .zb .cv img").hide(), $(this).hide(), $(".container .corrept .p3 .zb .cv").append($('<video autoplay width="100%" height="100%" src="'+$(this).data("link")+'" >')) }), $(".container .ctrlpart .next").on("click", function() {
        var a = parseInt($(".container .funcpart .smlmap .wrap .mapcontent .points .cent").attr("index"));
        if (!(a >= l.length - 1 || 0 > a)) {
            $(".container .funcpart .smlmap .wrap .mapcontent .points .cent").removeClass("cent"), $(".container .funcpart .smlmap .wrap .mapcontent .points>div").eq(a + 1).addClass("cent"), f(j[l[a + 1]].startvd);
            var b = j[l[a + 1]].smlmpappos;
            $(".container .funcpart .smlmap .wrap .mapcontent").css("top", b.top).css("left", b.left)
        }
    });

    for (var m = 0; m < l.length; m++) {
        var n = j[l[m]].jpos || { top: 0, left: 0, jtext: { top: 0, left: 0 } },
            o = $("<div class='jumpStation moveCtr pt' style='top:" + n.top + ";left:" + n.left + ";' index=" + m + "> <span class='jtext' style='margin-top:" + n.jtext.top + ";margin-left:" + n.jtext.left + ";'>" + tourData[m].name + "</span></div>");
        0 == m && o.addClass("cent"), $(".funcpart .smlmap .points").append(o)
    }
    $(".container .funcpart .smlmap ").on("click", ".wrap", function(a) {}).on("click", ".points .pt", function(a) {
        var b = $(a.target);
        b.is("span") && (b = b.parent()), b.hasClass("cent") || ($(".container .funcpart .smlmap .wrap .mapcontent .points .cent").removeClass("cent"), b.addClass("cent"), f(j[l[parseInt(b.attr("index"))]].startvd))
    }), $(".container .funcpart .smlmap .wrap .mapcontent").dragging({ move: "both", randomPosition: !1 }), $(".vdmask .hov").on("mouseenter", function() { $(".vdmask .btns").show() }).on("mouseleave", function() { $(".vdmask .btns").hide() }), $(document).mousemove(function(a) { a.pageY < 100 ? $("#banner").removeClass("fadeOutUp").addClass("fadeInDown") : $("#banner").removeClass("fadeInDown").addClass("fadeOutUp") }), window.points = j
}(window);
