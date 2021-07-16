function initGear() {
    console.log('GEAR: ');
    $('.gear').each(function () {
        console.log(
            'GEAR: ' +
                $(this).attr('id') +
                ' -' +
                gear[$(this).attr('id')].length
        );
        if ($(this).attr('id') && gear[$(this).attr('id')]) {
            var ur = gear[$(this).attr('id')].ur;
            var urn = gear[$(this).attr('id')].urn;
            console.log(
                'GEAR: ' +
                    $(this).attr('id') +
                    ' -' +
                    gear[$(this).attr('id')].length
            );

            //$(this).find(".caption").text(""+(min)+"/"+(gear[$(this).attr("id")].length-1));
            $(this).find('.captiong').text('Legendary');
            console.log(
                'GEAR IMG: ' + './img/gear/' + ur.replace(/ /g, '_') + '.png'
            );
            $(this)
                .find('.caption2g')
                .css(
                    'background-image',
                    'url(./img/gear/' + ur.replace(/ /g, '_') + '.png)'
                );
            if (!$(this).find('.captiont').text())
                $(this)
                    .find('.captiont')
                    .text($(this).attr('id').replace(/_/g, ' '));
            $(this).val(Number(5));
            $(this).attr('urn', '' + gear[$(this).attr('id')].urn + '');
            $(this).attr('urp', material[ur].price);
            $(this)
                .find('.caption2g')
                .text(urt(gear[$(this).attr('id')].urn, 5));
            $(this).find('.caption2g').attr('title', ur);
            console.log(
                'ur:' +
                    gear[$(this).attr('id')].ur +
                    ' price:' +
                    material[gear[$(this).attr('id')].ur].price +
                    ' result:' +
                    Number(gear[$(this).attr('id')].urn) *
                        Number(material[gear[$(this).attr('id')].ur].price)
            );
            $(this)
                .find('.captionMoney')
                .text(
                    Math.ceil(urt(Number(urn), 5) * Number(material[ur].price))
                );
            var attributes = gear[$(this).attr('id')].attributes;
            for (var i = 0; i < attributes.length; i++) {
                var p = attributes[i].l;
                $(this)
                    .find('ul')
                    .append(
                        '<li class="list-group-item" style="padding: 1px;">' +
                            attributes[i].name +
                            '<span class="badge badge-light badge-pill" style="float: right;">' +
                            p +
                            '%</span></li>'
                    );
            }
            //var time = (gear[$(this).attr("id")][min+1][7]);
            //$(this).find(".caption2").text(convertTimeShort(calcTS(time)));
            //$(this).find(".caption3").text(formatAmount(secondsToGems(calcTS(time))));
        }
    });
}

function urt(n, level) {
    var res = 0;
    for (var i = 1; i <= level; i++) {
        res += Math.pow(4, i - 1) * n;
    }
    return res;
}

function addBootCamp5() {
    var s24h = Number(document.getElementById('s24h').value) + 12;
    var s8h = Number(document.getElementById('s8h').value) + 15;
    var s3h = Number(document.getElementById('s3h').value) + 15;
    var sgems = Number(document.getElementById('sgems').value) + 2000;
    var money = Number(document.getElementById('money').value) + 5;
    document.getElementById('s24h').value = s24h;
    document.getElementById('s8h').value = s8h;
    document.getElementById('s3h').value = s3h;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addBootCamp20() {
    var s24h = Number(document.getElementById('s24h').value) + 50;
    var s8h = Number(document.getElementById('s8h').value) + 60;
    var s3h = Number(document.getElementById('s3h').value) + 60;
    var sgems = Number(document.getElementById('sgems').value) + 8000;
    var money = Number(document.getElementById('money').value) + 20;
    document.getElementById('s24h').value = s24h;
    document.getElementById('s8h').value = s8h;
    document.getElementById('s3h').value = s3h;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addBootCamp50() {
    var s24h = Number(document.getElementById('s24h').value) + 125;
    var s8h = Number(document.getElementById('s8h').value) + 150;
    var s3h = Number(document.getElementById('s3h').value) + 150;
    var sgems = Number(document.getElementById('sgems').value) + 16000;
    var money = Number(document.getElementById('money').value) + 50;
    document.getElementById('s24h').value = s24h;
    document.getElementById('s8h').value = s8h;
    document.getElementById('s3h').value = s3h;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addGems5() {
    var sgems = Number(document.getElementById('sgems').value) + 24000;
    var money = Number(document.getElementById('money').value) + 5;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addGems10() {
    var sgems = Number(document.getElementById('sgems').value) + 43260;
    var money = Number(document.getElementById('money').value) + 10;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addBootCamp5() {
    var s24h = Number(document.getElementById('s24h').value) + 12;
    var s8h = Number(document.getElementById('s8h').value) + 15;
    var s3h = Number(document.getElementById('s3h').value) + 15;
    var sgems = Number(document.getElementById('sgems').value) + 2000;
    var money = Number(document.getElementById('money').value) + 5;
    document.getElementById('s24h').value = s24h;
    document.getElementById('s8h').value = s8h;
    document.getElementById('s3h').value = s3h;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addBootCamp20() {
    var s24h = Number(document.getElementById('s24h').value) + 50;
    var s8h = Number(document.getElementById('s8h').value) + 60;
    var s3h = Number(document.getElementById('s3h').value) + 60;
    var sgems = Number(document.getElementById('sgems').value) + 8000;
    var money = Number(document.getElementById('money').value) + 20;
    document.getElementById('s24h').value = s24h;
    document.getElementById('s8h').value = s8h;
    document.getElementById('s3h').value = s3h;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addGems5() {
    var sgems = Number(document.getElementById('sgems').value) + 24000;
    var money = Number(document.getElementById('money').value) + 5;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}
function addGems10() {
    var sgems = Number(document.getElementById('sgems').value) + 43260;
    var money = Number(document.getElementById('money').value) + 10;
    document.getElementById('sgems').value = sgems;
    document.getElementById('money').value = money;
    getInventory();
}

var model = {
    might: 0,
    gems: 200000,
    food: 1000000,
    rock: 1000000,
    ore: 1000000,
    gold: 1000000,
    timber: 1000000,
    speed: 3603600,
    money: 0,
    pack1: 0,
    pack2: 0,
    pack3: 0,
    pack4: 0,
    pack5: 0,
};

function onLoad() {
    updateLeft();
    //updateMoney();
    //totalCost();
    pendingTime();
}

function updateLeft() {
    document.getElementById('timber').innerText = formatAmount(model.timber);
    document.getElementById('food').innerText = formatAmount(model.food);
    document.getElementById('rock').innerText = formatAmount(model.rock);
    document.getElementById('ore').innerText = formatAmount(model.ore);
    document.getElementById('gold').innerText = formatAmount(model.gold);
    document.getElementById('gems').innerText = formatAmount(model.gems);
    document.getElementById('speed').innerText = convertTimeShort(model.speed);
    /*document.getElementById("money").innerText = "$"+model.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");*/
    if (document.getElementById('pack1')) {
        document.getElementById('pack1').innerText = model.pack1;
        document.getElementById('pack2').innerText = model.pack2;
        document.getElementById('pack3').innerText = model.pack3;
        document.getElementById('pack4').innerText = model.pack4;
        document.getElementById('pack5').innerText = model.pack5;
    }
    document.getElementById('might').innerText = formatAmount(model.might);
}
function updateMoney() {
    document.getElementById('money').innerText =
        '$' + model.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function checkHelps() {
    var helps = Number(document.getElementById('helps').value);

    //console.log(helps+Number.isNaN(helps));
    if (!Number.isNaN(helps)) {
        //console.log("is integer");
        if (Number(helps) > 30) {
            document.getElementById('helps').value = 30;
        }
    } else {
        document.getElementById('helps').value = 30;
    }
}
function addModel(obj) {
    console.log(obj);
    if (obj.gems) {
        model.gems += obj.gems;
        //document.getElementById("gems").innerText = model.gems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        //document.getElementById("gems").innerText = formatAmount(model.gems);
    }
    if (obj.speed) {
        model.speed += obj.speed;
    }
    if (obj.money) {
        model.money += obj.money;
    }
    if (obj.food) {
        model.food += obj.food;
    }
    if (obj.timber) {
        model.timber += obj.timber;
    }
    if (obj.gold) {
        model.gold += obj.gold;
    }
    if (obj.ore) {
        model.ore += obj.ore;
    }
    if (obj.rock) {
        model.timber += obj.rock;
    }
    if (obj.pack1) {
        model.pack1 += 1;
    }
    if (obj.pack2) {
        model.pack2 += 1;
    }
    if (obj.pack3) {
        model.pack3 += 1;
    }
    if (obj.pack4) {
        model.pack4 += 1;
    }
    if (obj.pack5) {
        model.pack5 += 1;
    }
    updateLeft();
}
function formatAmount(value) {
    var res = '';
    var type = '';
    if (Math.abs(value) > 1000 && Math.abs(value) < 1000000) {
        value = Math.round(value / 100) / 10;
        type = 'K';
    } else if (Math.abs(value) >= 1000000 && Math.abs(value) < 1000000000) {
        value = Math.round(value / 100000) / 10;
        type = 'M';
    } else if (Math.abs(value) >= 1000000000) {
        value = Math.round(value / 100000000) / 10;
        type = 'B';
    }
    if (value > 9) return Math.round(value) + type;
    else return Math.round(value * 10) / 10 + type;
}

function resetGems() {
    model.gems = 0;
    model.speed = 0;
    updateLeft();
}
function resetMoney() {
    model.money = 0;
    model.pack1 = 0;
    model.pack2 = 0;
    model.pack3 = 0;
    model.pack4 = 0;
    model.pack5 = 0;
    updateMoney();
    updateLeft();
}
function addMoney(m) {
    //model.money+=m;
    updateMoney();
}
function secondsToGems(sec) {
    var gems = 0;
    var speedUpTimes = [
        2592000, 604800, 259200, 86400, 54000, 28800, 10800, 3600, 900, 60,
    ];
    var speedUpGems = [40000, 10000, 4400, 1500, 1000, 650, 300, 130, 70, 5];
    sec = Math.floor(sec);
    var first = true;
    var previousGems = 40001000000000000000000000;
    var totalWithBigger = 40001;
    while (sec > 0) {
        /*if(sec>2592000){
          let tmp= Math.floor(sec/2592000);
          sec-=tmp*2592000;
          gems+=tmp*40000
      }else if(sec>2592000){
          let tmp= Math.floor(sec/2592000);
          sec-=tmp*2592000;
          gems+=tmp*40000
      }else*/
        var times = speedUpTimes.shift(); // Get next greatest coin
        var timesGems = speedUpGems.shift(); // Get next greatest coin
        var count = Math.floor(sec / times); // See how many times I need that coin
        if (count > 0 && first) {
            first = false;
            totalWithBigger = previousGems;
            //console.log("assigng totalWithBigger:"+totalWithBigger);
        }
        //console.log("gems:"+gems+" times: "+times+" timesGems: "+timesGems+" count:"+count+" secs: "+sec);
        if ((times == 900) & (sec > 1620)) {
            gems += 130;
            sec = 0;
            //console.log("gems:"+gems+" times: "+times+" timesGems: "+timesGems+" count:"+count+" secs: "+sec+" use 1h");
        } else {
            sec -= count * times; // Reduce the amount with that number of coins
            gems += count * timesGems; // Reduce the amount with that number of coins
            //console.log("gems:"+gems+" times: "+times+" timesGems: "+timesGems+" count:"+count+" secs: "+sec);
        }
        //if (count) result.push([coin/100, count]); // Store count & coin
        if (sec > 0 && sec < 60) {
            gems += 5;
            sec = 0;
        }
        previousGems = timesGems;
    }
    //console.log("gems:"+gems+" totalWithBigger:"+totalWithBigger);
    if (gems < totalWithBigger) return gems;
    else return totalWithBigger;
}

//$( ".caption2" ).click(function() {
/*$('.caption2').on("click", function() {
console.log( "Handler for .click() called." );
e=$(this);
console.log(e);
                  var item=e.parent();
                  if(item.val()){
                      if(model.speed>item.val()){
                          for (n=1; n<researches[item.attr("id")].length; n++) {
                              var time = (researches[item.attr("id")][n][6]);
                              if(model.speed>time){
                                  researches[item.attr("id")][n][6]=0;
                                  model.speed-=time;
                              }
                              //updateCost();
                              n++;
                              if(n<researches[item.attr("id")].length){
                              var time = (researches[item.attr("id")][n][6]);
                              console.log("time: "+time);
                              if(time>10){
                                  $(this).find(".caption").text(""+n+"/"+(researches[$(this).attr("id")].length-1));
                                  console.log("time:"+time+ " calcTS: "+calcTS(time)+ " text: "+convertTimeShort(calcTS(time)));
                                  $(this).find(".caption2").text(convertTimeShort(calcTS(time)));
                                  $(this).val(time);

                                  break;
                              }
                              }else{
                                  $(this).find(".caption").text(""+(n-1)+"/"+(researches[$(this).attr("id")].length-1));
                                  //console.log("time:"+time+ " calcTS: "+calcTS(time)+ " text: "+convertTimeShort(calcTS(time)));
                                  $(this).find(".caption2").text("");
                              }
                              return;
                          }
                      }else{
                          alert("Not enough spedups");
                      }
                  }
});*/
function deductTime(e) {
    //thisclass=e.parent().find("output").attr("class");
    console.log(e);
    var item = e.parent();
    if (item.val()) {
        if (model.speed > item.val()) {
            for (n = 1; n < researches[item.attr('id')].length; n++) {
                var time = researches[item.attr('id')][n][6];
                if (model.speed > time) {
                    researches[item.attr('id')][n][6] = 0;
                    model.speed -= time;
                }
                //updateCost();
                n++;
                var time = researches[item.attr('id')][n][6];
                console.log('time: ' + time);
                if (time > 10) {
                    $(this)
                        .find('.caption')
                        .text(
                            '' +
                                n +
                                '/' +
                                (researches[$(this).attr('id')].length - 1)
                        );
                    console.log(
                        'time:' +
                            time +
                            ' calcTS: ' +
                            calcTS(time) +
                            ' text: ' +
                            convertTimeShort(calcTS(time))
                    );
                    $(this)
                        .find('.caption2')
                        .text(convertTimeShort(calcTS(time)));
                    $(this)
                        .find('.caption3')
                        .text(secondsToGems(calcTS(time)));
                    $(this).val(time);

                    break;
                }
                return;
            }
        } else {
            alert('Not enough spedups');
        }
    }
}

function pendingTime() {
    var time = 0;
    var might = 0;
    var food = 0;
    var timber = 0;
    var ore = 0;
    var rock = 0;
    var gold = 0;
    var tomes = 0;

    var etime = 0;
    var emight = 0;
    var efood = 0;
    var etimber = 0;
    var eore = 0;
    var erock = 0;
    var egold = 0;
    var etomes = 0;

    var btime = 0;
    var bmight = 0;
    var bfood = 0;
    var btimber = 0;
    var bore = 0;
    var brock = 0;
    var bgold = 0;
    var btomes = 0;

    var time4 = 0;
    var might4 = 0;
    var food4 = 0;
    var timber4 = 0;
    var ore4 = 0;
    var rock4 = 0;
    var gold4 = 0;
    var tomes4 = 0;

    var time5 = 0;
    var might5 = 0;
    var food5 = 0;
    var timber5 = 0;
    var ore5 = 0;
    var rock5 = 0;
    var gold5 = 0;
    var tomes5 = 0;

    var tl = Number($('#tl').val());

    console.log('------------pendingTime()---------');
    $('.item').each(function () {
        //console.log("item $(this).attr('id'): "+$(this).attr('id')+" time: "+time);
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            for (
                n = Number($(this).val()) + 1;
                n < researches[$(this).attr('id')].length;
                n++
            ) {
                if (!researches[$(this).attr('id')][n]) continue;
                tomes += researches[$(this).attr('id')][n][5];
                //console.log("n: "+n+" researches[$(this).attr(\"id\")][n][6]:"+researches[$(this).attr("id")][n][7]);
                //console.log("n: "+n+" tomes:"+tomes);
                var ctime = researches[$(this).attr('id')][n][7];
                //console.log("tl:"+tl+" ctime:"+ctime+" (ctime%(30*86400)+1):"+(ctime/(30*86400)+1));
                if (
                    tl > 0 &&
                    ctime > 30 * 86400 &&
                    ctime / (30 * 86400) > 1 &&
                    Math.ceil(ctime / (30 * 86400)) < tl
                ) {
                    console.log(
                        'tl:' +
                            tl +
                            ' ctime:' +
                            ctime +
                            ' (ctime%(30*86400)+1):' +
                            (ctime / (30 * 86400) + 1) +
                            ' ' +
                            $(this).attr('id') +
                            ' - ' +
                            n
                    );
                    tl -= Math.ceil(ctime / (30 * 86400));
                    console.log('tl:' + tl + ' ');
                    continue;
                }

                time += ctime;
                food += researches[$(this).attr('id')][n][0];
                rock += researches[$(this).attr('id')][n][1];
                timber += researches[$(this).attr('id')][n][2];
                ore += researches[$(this).attr('id')][n][3];
                gold += researches[$(this).attr('id')][n][4];
                might += researches[$(this).attr('id')][n][6];
            }
        }
    });
    $('.iteme').each(function () {
        //console.log("$(this).attr('id'): "+$(this).attr('id'));
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            for (
                n = Number($(this).val()) + 1;
                n < researches[$(this).attr('id')].length;
                n++
            ) {
                if (!researches[$(this).attr('id')][n]) continue;
                //console.log("e n: "+n+" etime: "+etime+" id:"+$(this).attr("id")+" time:"+researches[$(this).attr("id")][n][7]);
                //console.log("n: "+n+" tomes:"+tomes);
                etime += researches[$(this).attr('id')][n][7];
                efood += researches[$(this).attr('id')][n][0];
                erock += researches[$(this).attr('id')][n][1];
                etimber += researches[$(this).attr('id')][n][2];
                eore += researches[$(this).attr('id')][n][3];
                egold += researches[$(this).attr('id')][n][4];
                etomes += researches[$(this).attr('id')][n][5];
                emight += researches[$(this).attr('id')][n][6];
            }
        }
    });

    $('.itemb').each(function () {
        //console.log("bitem $(this).attr('id'): "+$(this).attr('id')+" btime: "+btime);
        //console.log("$(this).attr('id'): "+$(this).attr('id'));
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            for (
                n = Number($(this).val()) + 1;
                n < researches[$(this).attr('id')].length;
                n++
            ) {
                if (!researches[$(this).attr('id')][n]) continue;
                //console.log("b n: "+n+" btime: "+btime+" id:"+$(this).attr("id")+" ntime:"+researches[$(this).attr("id")][n][7]);
                btime += researches[$(this).attr('id')][n][7];
                bfood += researches[$(this).attr('id')][n][0];
                brock += researches[$(this).attr('id')][n][1];
                btimber += researches[$(this).attr('id')][n][2];
                bore += researches[$(this).attr('id')][n][3];
                bgold += researches[$(this).attr('id')][n][4];
                btomes += researches[$(this).attr('id')][n][5];
                bmight += researches[$(this).attr('id')][n][6];
            }
        }
    });

    $('.item4').each(function () {
        //console.log("bitem $(this).attr('id'): "+$(this).attr('id')+" btime: "+btime);
        //console.log("$(this).attr('id'): "+$(this).attr('id'));
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            for (
                n = Number($(this).val()) + 1;
                n < researches[$(this).attr('id')].length;
                n++
            ) {
                if (!researches[$(this).attr('id')][n]) continue;
                tomes4 += researches[$(this).attr('id')][n][5];
                //console.log("4 n: "+n+" time4: "+time4+" food4: "+food4+" id:"+$(this).attr("id")+" ntime:"+researches[$(this).attr("id")][n][7]);
                var ctime = researches[$(this).attr('id')][n][7];
                //console.log("tl:"+tl+" ctime:"+ctime+" (ctime%(30*86400)+1):"+(ctime/(30*86400)+1));
                if (
                    tl > 0 &&
                    ctime > 30 * 86400 &&
                    ctime / (30 * 86400) > 1 &&
                    Math.ceil(ctime / (30 * 86400)) < tl
                ) {
                    console.log(
                        'tl:' +
                            tl +
                            ' ctime:' +
                            ctime +
                            ' (ctime%(30*86400)+1):' +
                            (ctime / (30 * 86400) + 1) +
                            ' ' +
                            $(this).attr('id') +
                            ' - ' +
                            n
                    );
                    tl -= Math.ceil(ctime / (30 * 86400));
                    console.log('tl:' + tl + ' ');
                    continue;
                }
                time4 += researches[$(this).attr('id')][n][7];
                food4 += researches[$(this).attr('id')][n][0];
                rock4 += researches[$(this).attr('id')][n][1];
                timber4 += researches[$(this).attr('id')][n][2];
                ore4 += researches[$(this).attr('id')][n][3];
                gold4 += researches[$(this).attr('id')][n][4];
                might4 += researches[$(this).attr('id')][n][6];
            }
        }
    });

    $('.item5').each(function () {
        //console.log("bitem $(this).attr('id'): "+$(this).attr('id')+" btime: "+btime);
        //console.log("$(this).attr('id'): "+$(this).attr('id'));
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            for (
                n = Number($(this).val()) + 1;
                n < researches[$(this).attr('id')].length;
                n++
            ) {
                if (!researches[$(this).attr('id')][n]) continue;
                tomes5 += researches[$(this).attr('id')][n][5];

                //console.log("4 n: "+n+" time4: "+time4+" food4: "+food4+" id:"+$(this).attr("id")+" ntime:"+researches[$(this).attr("id")][n][7]);
                var ctime = researches[$(this).attr('id')][n][7];
                //console.log("tl:"+tl+" ctime:"+ctime+" (ctime%(30*86400)+1):"+(ctime/(30*86400)+1));
                if (
                    tl > 0 &&
                    ctime > 30 * 86400 &&
                    ctime / (30 * 86400) > 1 &&
                    Math.ceil(ctime / (30 * 86400)) < tl
                ) {
                    console.log(
                        'tl:' +
                            tl +
                            ' ctime:' +
                            ctime +
                            ' (ctime%(30*86400)+1):' +
                            (ctime / (30 * 86400) + 1) +
                            ' ' +
                            $(this).attr('id') +
                            ' - ' +
                            n
                    );
                    tl -= Math.ceil(ctime / (30 * 86400));
                    console.log('tl:' + tl + ' ');
                    continue;
                }
                time5 += researches[$(this).attr('id')][n][7];
                food5 += researches[$(this).attr('id')][n][0];
                rock5 += researches[$(this).attr('id')][n][1];
                timber5 += researches[$(this).attr('id')][n][2];
                ore5 += researches[$(this).attr('id')][n][3];
                gold5 += researches[$(this).attr('id')][n][4];
                might5 += researches[$(this).attr('id')][n][6];
            }
        }
    });

    var timet = 0;
    var mightt = 0;
    var foodt = 0;
    var timbert = 0;
    var oret = 0;
    var rockt = 0;
    var goldt = 0;
    var tomest = 0;
    var gemst = 0;
    var tBoost = document.getElementById('trainingBoost')
        ? Number(document.getElementById('trainingBoost').value)
        : 0;
    var bCapacity = document.getElementById('bcapacity')
        ? Number(document.getElementById('bcapacity').value)
        : 13000;
    var subsidy = 1; //document.getElementById("subsidy") ? Number(document.getElementById("subsidy").value) : 1;

    $('.itemt').each(function () {
        console.log('------------getTotal()---------');
        if ($(this).attr('id') && troops[$(this).attr('id')]) {
            //var troopsNum = Number(($(this).find("input.tinput").val()+"").replace(".","").replace(",",""));
            var troopsNum = AutoNumeric.getAutoNumericElement(
                document.querySelector('#' + $(this).attr('id') + ' > input')
            ).getNumber();
            console.log(
                "itemt $(this).attr('id'): " +
                    $(this).attr('id') +
                    ' time: ' +
                    timet +
                    ' troopsNum:' +
                    troopsNum +
                    '   food:' +
                    foodt
            );
            var timePerPatch =
                Math.floor(
                    secondsByUnit(troops[$(this).attr('id')].time, tBoost)
                ) * bCapacity;
            gemsPerPatch = secondsToGems(timePerPatch);
            var patchesNeeded = Math.floor(troopsNum / bCapacity);
            var lastPatch = troopsNum % bCapacity;
            var timeLastPatch = Math.floor(
                secondsByUnit(troops[$(this).attr('id')].time, tBoost) *
                    lastPatch
            );
            //console.log("lastPatch:"+lastPatch+" timeLastPatch:"+timeLastPatch);
            gemst += secondsToGems(timeLastPatch);
            timet += timeLastPatch;

            gemst += gemsPerPatch * patchesNeeded;
            timet += timePerPatch * patchesNeeded;
            console.log(
                'foot troops[$(this).attr(id)].food:' +
                    troops[$(this).attr('id')].food +
                    '  troopsNum:' +
                    troopsNum +
                    ' subsidy:' +
                    subsidy
            );
            foodt += troops[$(this).attr('id')].food * troopsNum * subsidy;
            rockt += troops[$(this).attr('id')].rock * troopsNum * subsidy;
            timbert += troops[$(this).attr('id')].timber * troopsNum * subsidy;
            oret += troops[$(this).attr('id')].ore * troopsNum * subsidy;
            goldt += troops[$(this).attr('id')].gold * troopsNum * subsidy;
            mightt += troops[$(this).attr('id')].might * troopsNum;
            //console.log("gems:"+gems+" time:"+time+" food:"+food+" might:"+might);

            //console.log("n: "+n+" researches[$(this).attr(\"id\")][n][6]:"+researches[$(this).attr("id")][n][7]);
            //console.log("n: "+n+" tomes:"+tomes);
        }
    });
    if (document.getElementById('totalTimet')) {
        console.log(
            'gemst:' +
                gemst +
                ' timet:' +
                timet +
                ' food:' +
                foodt +
                ' mightt:' +
                mightt
        );
        document.getElementById('totalTimet').innerText =
            timet > 0 ? convertTimeShort(timet) : 0;
        //document.getElementById("totalGems").value=gems<1 ? "0" : ""+formatAmount(gems)+" ("+Math.ceil(gems/6800)+"$)";
        document.getElementById('totalGemst').innerText =
            gemst < 1 ? '0' : '' + formatAmount(gemst);
        document.getElementById('totalMoneyt').innerText =
            ' ' + Math.ceil(gemst / 6800) + '';
        document.getElementById('mightt').innerText = formatAmount(mightt);
        document.getElementById('foodt').innerText = formatAmount(foodt);
        console.log(
            'food:' +
                foodt +
                ' getelement:' +
                document.getElementById('foodt').innerText
        );
        document.getElementById('rockt').innerText = formatAmount(rockt);
        document.getElementById('timbert').innerText = formatAmount(timbert);
        document.getElementById('oret').innerText = formatAmount(oret);
        document.getElementById('goldt').innerText = formatAmount(goldt);
    }

    console.log(
        'total cost. Time: ' +
            time +
            ' #totalTime: ' +
            convertTimeShort(calcTS(time)) +
            ' #totalGems: ' +
            formatAmount(secondsToGems(calcTS(time))) +
            ' #totalMoney: ' +
            formatAmount(secondsToGems(calcTS(time)) / 4000)
    );
    console.log(
        'total cost. eTime: ' +
            etime +
            ' #totalTime: ' +
            convertTimeShort(calcTS(etime)) +
            ' #totalGems: ' +
            formatAmount(secondsToGems(calcTS(etime))) +
            ' #totalMoney: ' +
            formatAmount(secondsToGems(calcTS(etime)) / 4000)
    );
    console.log(
        'total cost. bTime: ' +
            btime +
            ' #totalTime: ' +
            convertTimeShort(calcTSConstruction(btime)) +
            ' #totalGems: ' +
            formatAmount(secondsToGems(calcTSConstruction(btime))) +
            ' #totalMoney: ' +
            formatAmount(secondsToGems(calcTSConstruction(btime)) / 4000)
    );
    $('#bmight').text(formatAmount(bmight));
    $('#bfood').text(formatAmount(bfood));
    $('#brock').text(formatAmount(brock));
    $('#btimber').text(formatAmount(btimber));
    $('#bore').text(formatAmount(bore));
    $('#bgold').text(formatAmount(bgold * 10));
    $('#btomes').text(formatAmount(btomes));
    $('#btotalTime').text(convertTimeShort(calcTSConstruction(btime)));
    $('#btotalGems').text(
        formatAmount(secondsToGems(calcTSConstruction(btime)))
    ); //+(bgold*10)
    $('#btotalMoney').text(
        formatAmount(secondsToGems(calcTSConstruction(btime)) / 4000)
    );

    $('#emight').text(formatAmount(emight));
    $('#efood').text(formatAmount(efood));
    $('#erock').text(formatAmount(erock));
    $('#etimber').text(formatAmount(etimber));
    $('#eore').text(formatAmount(eore));
    $('#egold').text(formatAmount(egold));
    $('#etomes').text(formatAmount(etomes));
    $('#etotalTime').text(convertTimeShort(calcTS(etime)));
    $('#etotalGems').text(formatAmount(secondsToGems(calcTS(etime))));
    $('#etotalMoney').text(formatAmount(secondsToGems(calcTS(etime)) / 4000));

    $('#might').text(formatAmount(might));
    $('#food').text(formatAmount(food));
    $('#rock').text(formatAmount(rock));
    $('#timber').text(formatAmount(timber));
    $('#ore').text(formatAmount(ore));
    $('#gold').text(formatAmount(gold));
    $('#tomes').text(formatAmount(tomes));
    $('#totalTime').text(convertTimeShort(calcTS(time)));
    $('#totalGems').text(formatAmount(secondsToGems(calcTS(time))));
    $('#totalMoney').text(formatAmount(secondsToGems(calcTS(time)) / 4000));
    $('#totalTomes').text(
        formatAmount(tomes) +
            ' -> ' +
            formatAmount(Math.round(tomes * 0.02)) +
            ''
    );

    $('#might4').text(formatAmount(might4));
    $('#food4').text(formatAmount(food4));
    $('#rock4').text(formatAmount(rock4));
    $('#timber4').text(formatAmount(timber4));
    $('#ore4').text(formatAmount(ore4));
    $('#gold4').text(formatAmount(gold4));
    $('#tomes4').text(formatAmount(tomes4));
    $('#totalTime4').text(convertTimeShort(calcTS(time4)));
    $('#totalGems4').text(formatAmount(secondsToGems(calcTS(time4))));
    $('#totalMoney4').text(formatAmount(secondsToGems(calcTS(time4)) / 4000));
    $('#totalTomes4').text(
        formatAmount(tomes4) +
            ' -> ' +
            formatAmount(Math.round(tomes4 * 0.02)) +
            ''
    );

    $('#might5').text(formatAmount(might5));
    $('#food5').text(formatAmount(food5));
    $('#rock5').text(formatAmount(rock5));
    $('#timber5').text(formatAmount(timber5));
    $('#ore5').text(formatAmount(ore5));
    $('#gold5').text(formatAmount(gold5));
    $('#tomes5').text(formatAmount(tomes5));
    $('#totalTime5').text(convertTimeShort(calcTS(time5)));
    $('#totalGems5').text(formatAmount(secondsToGems(calcTS(time5))));
    $('#totalMoney5').text(formatAmount(secondsToGems(calcTS(time5)) / 4000));
    $('#totalTomes5').text(
        formatAmount(tomes5) +
            ' -> ' +
            formatAmount(Math.round(tomes5 * 0.02)) +
            ''
    );

    //console.log($("#item4on"));
    if ($('#item4on') && !$('#item4on').is(':checked')) {
        //console.log("#item4on is 0");
        time4 = 0;
    }
    if ($('#itemton') && !$('#itemton').is(':checked')) {
        timet = 0;
    }
    $('#ttotalTime').text(
        convertTimeShort(calcTS(time + btime + etime + time4 + timet + time5))
    );
    $('#ttotalGems').text(
        formatAmount(
            secondsToGems(calcTS(time + btime + etime + time4 + timet + time5))
        )
    ); //+(bgold*10)
    $('#ttotalMoney').text(
        formatAmount(
            secondsToGems(calcTS(time + btime + etime + time4 + time5)) / 4000 +
                secondsToGems(calcTS(timet)) / 6800
        )
    );

    //$(this).val(time);
}
function totalCost() {
    var time = 0;
    $('.item').each(function () {
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            for (n = 1; n < researches[$(this).attr('id')].length; n++) {
                /*if(n>=researches[item.attr("id")].length){
                              $(this).find(".caption").text(""+(n-1)+"/"+(researches[$(this).attr("id")].length-1));
                              $(this).find(".caption2").text();
                              $(this).find(".caption3").text();
                              break;
                          }*/
                time += researches[$(this).attr('id')][n][7];

                if (time > 1) {
                }
            }
        }
    });
    console.log('total cost. Time: ' + time);
    $('#totalTime').text(convertTimeShort(calcTS(time)));
    $('#totalGems').text(formatAmount(secondsToGems(calcTS(time))));
    $('#totalMoney').text(formatAmount(secondsToGems(calcTS(time) / 4000)));
    //$(this).val(time);
}
/*<div class="item" id="Training_speed_I">
                  <img src="./img/military/Training_speed_I.png" class="imageresearch"/>
                  <span class="caption" >10/10 </span>
                  <span class="caption2" >200d 22h<img src="./img/speed.png" class="imagepay"></span><span class="caption3" >2000 <img src="./img/gems.png" class="imagepay"></span>
              </div>*/
function initItems() {
    $('.item,.iteme,.itemb,.item4,.item5').each(function () {
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            //console.log(""+$(this).attr('id')+" -"+researches[$(this).attr("id")].length);
            min = 0;
            for (n = 1; n < researches[$(this).attr('id')].length; n++) {
                if (researches[$(this).attr('id')][n]) {
                    min = n - 1;
                    break;
                }
            }
            $(this)
                .find('.caption')
                .text(
                    '' + min + '/' + (researches[$(this).attr('id')].length - 1)
                );
            if (!$(this).find('.captiont').text())
                $(this)
                    .find('.captiont')
                    .text($(this).attr('id').replace(/_/g, ' '));
            $(this).val(Number(min));
            var time = researches[$(this).attr('id')][min + 1][7];
            $(this)
                .find('.caption2')
                .text(convertTimeShort(calcTS(time)));
            $(this)
                .find('.caption3')
                .text(formatAmount(secondsToGems(calcTS(time))));
        }
    });
}
function refreshItems() {
    $('.item,.iteme,.itemb,.item4,.item5').each(function () {
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            //console.log(researches[$(this).attr("id")][Number($(this).val())+1]);
            if (researches[$(this).attr('id')][Number($(this).val() + 1)]) {
                //console.log("id:"+$(this).attr('id')+" val:"+$(this).val());
                var time =
                    researches[$(this).attr('id')][
                        Number($(this).val()) + 1
                    ][7];
                $(this)
                    .find('.caption2')
                    .text(convertTimeShort(calcTS(time)));
                $(this)
                    .find('.caption3')
                    .text(formatAmount(secondsToGems(calcTS(time))));
            }
        }
    });
}

function updateCost() {
    $('.item').each(function () {
        if ($(this).attr('id') && researches[$(this).attr('id')]) {
            console.log($(this).attr('id'));
            for (n = 1; n < researches[$(this).attr('id')].length; n++) {
                /*if(n>=researches[item.attr("id")].length){
                                      $(this).find(".caption").text(""+(n-1)+"/"+(researches[$(this).attr("id")].length-1));
                                      $(this).find(".caption2").text();
                                      $(this).find(".caption3").text();
                                      break;
                                  }*/
                var time = researches[$(this).attr('id')][n][7];
                console.log('time: ' + time);
                if (time > 1) {
                    $(this)
                        .find('.caption')
                        .text(
                            '' +
                                (n - 1) +
                                '/' +
                                (researches[$(this).attr('id')].length - 1)
                        );
                    console.log(
                        'time:' +
                            time +
                            ' calcTS: ' +
                            calcTS(time) +
                            ' text: ' +
                            convertTimeShort(calcTS(time))
                    );
                    $(this)
                        .find('.caption2')
                        .text(convertTimeShort(calcTS(time)));
                    $(this)
                        .find('.caption3')
                        .text(formatAmount(secondsToGems(calcTS(time))));
                    $(this).val(time);

                    break;
                }
            }
        }
    }); /*
                      var MinusTime=0;var MinusMight=0;var MinusFood=0;var MinusStone=0;var MinusWood=0;var MinusOre=0;var MinusGold=0;
                      
                      $( ".item" ).each(function() {
                          
                          if ($(this).val() > 0) {
                              
                              for (n=1;n<=$(this).val();n++) {
                                  
                                  MinusFood += (researches[$(this).attr("id")][n][0]);
                                  MinusStone += (researches[$(this).attr("id")][n][1]);
                                  MinusWood += (researches[$(this).attr("id")][n][2]);
                                  MinusOre += (researches[$(this).attr("id")][n][3]);
                                  MinusGold += (researches[$(this).attr("id")][n][4]);
                                  MinusMight += (researches[$(this).attr("id")][n][6]);
                                  MinusTime += (researches[$(this).attr("id")][n][7]);
                                  
                              }
                              
                          }
                          alert($(this).attr("id")+"="+$(this).val());
                          document.cookie = $(this).attr("id")+"="+$(this).val()+"; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;";
                      });
                      calcNow(totalTime-MinusTime,totalMight-MinusMight,totalFood-MinusFood,totalStone-MinusStone,totalWood-MinusWood,totalOre-MinusOre,totalGold-MinusGold);
                      */
}
function convertTimeShort(seconds) {
    var numdays = Math.floor(seconds / 86400);
    var numhours = Math.floor((seconds % 86400) / 3600);
    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var numsecs = Math.floor(((seconds % 86400) % 3600) % 60);
    //var numseconds = ((seconds % 86400) % 3600) % 60;
    if (numdays && numdays > 100) return numdays ? numdays + 'd' : '';
    if (numdays)
        return (
            (numdays ? numdays + 'd ' : '') + (numhours ? numhours + 'h' : '')
        );
    else if (numhours || numminutes)
        return (
            (numhours ? numhours + 'h ' : '') +
            (numminutes ? numminutes + 'm ' : '')
        );
    else if (numsecs)
        return (
            (numminutes ? numminutes + 'm ' : '') +
            (numsecs ? numsecs + 's ' : '')
        );
    else return '';
}

var troopsrss = 'null';
var troopsTime = 'null';
var objtroopsrss = JSON.parse(troopsrss);
var objtroopsTime = JSON.parse(troopsTime);

function calcSubsidy(rss, troop) {
    subd = $('#' + troop + '_subsidy').val();
    if (subd > 0) {
        ts = rss - (rss * subsidy[troop][subd - 1]) / 100;
        return Math.ceil(ts);
    } else return rss;
}
function calcTS(timez) {
    subd = $('#researchspeed').val() * 1 + 100;
    ts = (timez / subd) * 100;
    ts = ts * Math.pow(0.99, $('#helps').val());
    return ts;
}

function calcTSConstruction(timez) {
    subd = $('#constructionspeed').val() * 1 + 100;
    ts = (timez / subd) * 100;
    ts = ts * Math.pow(0.99, $('#helps').val());
    return ts;
}
function convertTime(seconds) {
    var numdays = Math.floor(seconds / 86400);
    var numhours = Math.floor((seconds % 86400) / 3600);
    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var numsecs = ((seconds % 86400) % 3600) % 60;
    //var numseconds = ((seconds % 86400) % 3600) % 60;
    return (
        (numdays ? numdays + ' days ' : '') +
        (numhours ? numhours + ' hrs ' : '') +
        (numminutes ? numminutes + ' mins ' : '') +
        (numsecs ? numsecs + ' secs ' : '')
    );
}

function convertTimeShort2(seconds) {
    var numdays = Math.floor(seconds / 86400);
    var numhours = Math.floor((seconds % 86400) / 3600);
    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var numsecs = Math.ceil(((seconds % 86400) % 3600) % 60);
    //var numseconds = ((seconds % 86400) % 3600) % 60;
    if (numdays && numdays > 99) return numdays ? numdays + 'd' : '';
    if (numdays)
        return (
            (numdays ? numdays + 'd ' : '') +
            (numhours
                ? ('00' + numhours).substring(('00' + numhours).length - 2) +
                  ':'
                : '') +
            (numminutes
                ? ('00' + numminutes).substring(('00' + numminutes).length - 2)
                : '00')
        );
    else
        return (
            (numhours
                ? ('00' + numhours).substring(('00' + numhours).length - 2) +
                  ':'
                : '') +
            (numminutes
                ? ('00' + numminutes).substring(('00' + numminutes).length - 2)
                : '00')
        );
}

function secondsByUnit(tierTime, trainingSpeed) {
    var e = tierTime / ((100 + parseFloat(trainingSpeed)) / 100);
    return e;
}

var troops = {};
function loadTroops() {
    troops['Grunt'] = {
        food: 50,
        rock: 0,
        timber: 50,
        ore: 50,
        gold: 0,
        might: 2,
        time: 15,
    };
    troops['Archer'] = {
        food: 50,
        rock: 50,
        timber: 50,
        ore: 0,
        gold: 0,
        might: 2,
        time: 15,
    };
    troops['Cataphract'] = {
        food: 50,
        rock: 50,
        timber: 0,
        ore: 50,
        gold: 0,
        might: 2,
        time: 15,
    };
    troops['Ballista'] = {
        food: 50,
        rock: 50,
        timber: 50,
        ore: 50,
        gold: 0,
        might: 2,
        time: 15,
    };
    troops['Gladiator'] = {
        food: 100,
        rock: 0,
        timber: 100,
        ore: 100,
        gold: 4,
        might: 8,
        time: 30,
    };
    troops['Sharpshooter'] = {
        food: 100,
        rock: 100,
        timber: 100,
        ore: 0,
        gold: 4,
        might: 8,
        time: 30,
    };
    troops['Reptilian_rider'] = {
        food: 100,
        rock: 100,
        timber: 0,
        ore: 100,
        gold: 4,
        might: 8,
        time: 30,
    };
    troops['Cataput'] = {
        food: 100,
        rock: 100,
        timber: 100,
        ore: 100,
        gold: 4,
        might: 8,
        time: 30,
    };
    troops['Royal_guard'] = {
        food: 150,
        rock: 0,
        timber: 150,
        ore: 150,
        gold: 15,
        might: 24,
        time: 60,
    };
    troops['Stealth_sniper'] = {
        food: 150,
        rock: 150,
        timber: 150,
        ore: 0,
        gold: 15,
        might: 24,
        time: 60,
    };
    troops['Royal_cavalry'] = {
        food: 150,
        rock: 150,
        timber: 0,
        ore: 150,
        gold: 15,
        might: 24,
        time: 60,
    };
    troops['Fire_Trebuchet'] = {
        food: 150,
        rock: 150,
        timber: 150,
        ore: 150,
        gold: 15,
        might: 24,
        time: 60,
    };
    troops['Heroic_fighter'] = {
        food: 1000,
        rock: 0,
        timber: 1000,
        ore: 1000,
        gold: 500,
        might: 36,
        time: 120,
    };
    troops['Heroic_Cannoneer'] = {
        food: 1000,
        rock: 1000,
        timber: 1000,
        ore: 0,
        gold: 500,
        might: 36,
        time: 120,
    };
    troops['Ancient_Drake'] = {
        food: 1000,
        rock: 1000,
        timber: 0,
        ore: 1000,
        gold: 500,
        might: 36,
        time: 120,
    };
    troops['Destroyer'] = {
        food: 1000,
        rock: 1000,
        timber: 1000,
        ore: 1000,
        gold: 500,
        might: 36,
        time: 120,
    };
}

var researches = {};
function loadFam() {
    researches['Familiar Battle Slot I'] = [];
    researches['Familiar Battle Slot I'][1] = [
        882001,
        8550001,
        2137500,
        2137500,
        2137500,
        0,
        3032,
        41220,
        'Academy',
        21,
    ];

    researches['Pact Merging Speed III'] = [];
    researches['Pact Merging Speed III'][1] = [
        20804,
        148288,
        88973,
        74144,
        59315,
        0,
        12453,
        148980,
        'Academy',
        21,
        'Familiar Battle Slot I',
        1,
    ];
    researches['Pact Merging Speed III'][2] = [
        72814,
        519006,
        311404,
        259503,
        207603,
        0,
        41716,
        521340,
        'Academy',
        21,
    ];
    researches['Pact Merging Speed III'][3] = [
        88417,
        630222,
        378133,
        315111,
        252089,
        0,
        52301,
        633060,
        'Academy',
        21,
        'Familiar Battle Slot I',
        1,
    ];
    researches['Pact Merging Speed III'][4] = [
        104020,
        741437,
        444862,
        370719,
        296575,
        0,
        62885,
        744780,
        'Academy',
        22,
        'Familiar Battle Slot I',
        1,
    ];
    researches['Pact Merging Speed III'][5] = [
        124824,
        889724,
        533835,
        444862,
        355890,
        0,
        76583,
        893700,
        'Academy',
        22,
    ];
    researches['Pact Merging Speed III'][6] = [
        166432,
        1186299,
        711780,
        593150,
        474520,
        0,
        102733,
        1191600,
        'Academy',
        23,
    ];
    researches['Pact Merging Speed III'][7] = [
        218442,
        1557017,
        934211,
        778509,
        622807,
        0,
        135733,
        1564020,
        'Academy',
        24,
    ];
    researches['Pact Merging Speed III'][8] = [
        312059,
        2224310,
        1334586,
        1112155,
        889724,
        0,
        191146,
        2234280,
        'Academy',
        25,
    ];
    researches['Pact Merging Speed III'][9] = [
        436883,
        3114034,
        1868421,
        1557017,
        1245614,
        0,
        262749,
        3127980,
        'Academy',
        25,
    ];
    researches['Pact Merging Speed III'][10] = [
        500000,
        4000000,
        2000000,
        2000000,
        2000000,
        0,
        342444,
        4064878,
        'Academy',
        25,
    ];

    researches['Gym Training III'] = [];
    researches['Gym Training III'][1] = [
        20804,
        148288,
        88973,
        74144,
        59315,
        0,
        12453,
        148980,
        'Academy',
        21,
        'Familiar Battle Slot I',
        1,
    ];
    researches['Gym Training III'][2] = [
        72814,
        519006,
        311404,
        259503,
        207603,
        0,
        41716,
        521340,
        'Academy',
        21,
    ];
    researches['Gym Training III'][3] = [
        88417,
        630222,
        378133,
        315111,
        252089,
        0,
        52301,
        633060,
        'Academy',
        21,
    ];
    researches['Gym Training III'][4] = [
        104020,
        741437,
        444862,
        370719,
        296575,
        0,
        62885,
        744780,
        'Academy',
        22,
    ];
    researches['Gym Training III'][5] = [
        124824,
        889724,
        533835,
        444862,
        355890,
        0,
        76583,
        893700,
        'Academy',
        22,
    ];
    researches['Gym Training III'][6] = [
        166432,
        1186299,
        711780,
        593150,
        474520,
        0,
        102733,
        1191600,
        'Academy',
        23,
    ];
    researches['Gym Training III'][7] = [
        218442,
        1557017,
        934211,
        778509,
        622807,
        0,
        135733,
        1564020,
        'Academy',
        24,
    ];
    researches['Gym Training III'][8] = [
        312059,
        2224310,
        1334586,
        1112155,
        889724,
        0,
        191146,
        2234280,
        'Academy',
        25,
    ];
    researches['Gym Training III'][9] = [
        436883,
        3114034,
        1868424,
        1557017,
        1245614,
        0,
        262749,
        3127980,
        'Academy',
        25,
    ];
    researches['Gym Training III'][10] = [
        572109,
        4077192,
        2446741,
        2038951,
        1631161,
        0,
        342444,
        4064878,
        'Academy',
        25,
    ];

    researches['Familiarity Infantry ATK I'] = [];
    researches['Familiarity Infantry ATK I2'] = [];
    researches['Familiarity Infantry ATK I3'] = [];
    researches['Familiarity Infantry ATK I'][1] = [
        31206,
        0,
        266918,
        66730,
        111216,
        0,
        19925,
        238320,
        'Academy',
        22,
        'Pact Merging Speed III',
        1,
        'Gym Training III',
        1,
    ];
    researches['Familiarity Infantry ATK I'][2] = [
        109221,
        0,
        934211,
        233553,
        389255,
        0,
        66745,
        834120,
        'Academy',
        22,
    ];
    researches['Familiarity Infantry ATK I'][3] = [
        132626,
        0,
        1134399,
        283600,
        472666,
        0,
        83681,
        1012860,
        'Academy',
        22,
    ];
    researches['Familiarity Infantry ATK I'][4] = [
        156030,
        0,
        1334586,
        333647,
        556078,
        0,
        100617,
        1191600,
        'Academy',
        23,
    ];
    researches['Familiarity Infantry ATK I'][5] = [
        187236,
        0,
        1601504,
        400376,
        667293,
        0,
        122532,
        1429920,
        'Academy',
        24,
    ];
    researches['Familiarity Infantry ATK I2'][6] = [
        249648,
        0,
        2135338,
        533835,
        889724,
        0,
        164374,
        1906560,
        'Academy',
        24,
    ];
    researches['Familiarity Infantry ATK I2'][7] = [
        327662,
        0,
        2802631,
        700658,
        1167763,
        0,
        217172,
        2502360,
        'Academy',
        25,
    ];
    researches['Familiarity Infantry ATK I3'][8] = [
        468089,
        40,
        4003758,
        1000940,
        1668233,
        40,
        305834,
        3574800,
        'Academy',
        25,
        'Pact Merging Speed III',
        8,
        'Gym Training III',
        8,
    ];
    researches['Familiarity Infantry ATK I3'][9] = [
        655324,
        50,
        5605261,
        1401316,
        2335526,
        50,
        420398,
        5004720,
        'Academy',
        25,
        'Pact Merging Speed III',
        9,
        'Gym Training III',
        9,
    ];
    researches['Familiarity Infantry ATK I3'][10] = [
        858163,
        63,
        7340223,
        1835056,
        3058427,
        60,
        547911,
        6553800,
        'Academy',
        25,
        'Pact Merging Speed III',
        10,
        'Gym Training III',
        10,
    ];

    researches['Familiarity Ranged ATK I'] = [];
    researches['Familiarity Ranged ATK I2'] = [];
    researches['Familiarity Ranged ATK I3'] = [];
    researches['Familiarity Ranged ATK I'][1] = [
        266918,
        66730,
        11216,
        133459,
        181652,
        0,
        19925,
        238320,
        'Academy',
        22,
        'Pact Merging Speed III',
        1,
        'Gym Training III',
        1,
    ];
    researches['Familiarity Ranged ATK I'][2] = [
        934211,
        233553,
        389255,
        467106,
        635782,
        0,
        66745,
        834120,
        'Academy',
        22,
    ];
    researches['Familiarity Ranged ATK I'][3] = [
        1134399,
        283600,
        472666,
        567200,
        772021,
        0,
        83681,
        1012860,
        'Academy',
        22,
        'Pact Merging Speed III',
        3,
        'Gym Training III',
        3,
    ];
    researches['Familiarity Ranged ATK I'][4] = [
        1334586,
        333647,
        556078,
        667293,
        908260,
        0,
        100617,
        1191600,
        'Academy',
        23,
    ];
    researches['Familiarity Ranged ATK I'][5] = [
        1601504,
        400976,
        667293,
        800752,
        1089912,
        0,
        122532,
        1429920,
        'Academy',
        24,
    ];
    researches['Familiarity Ranged ATK I2'][6] = [
        2135338,
        533835,
        889724,
        1067669,
        1453216,
        0,
        164374,
        1906560,
        'Academy',
        24,
    ];
    researches['Familiarity Ranged ATK I2'][7] = [
        2802631,
        700658,
        1167763,
        1401316,
        1907346,
        0,
        217172,
        2502360,
        'Academy',
        24,
    ];
    researches['Familiarity Ranged ATK I3'][8] = [
        4003758,
        1000940,
        1668233,
        2001879,
        2724780,
        40,
        305834,
        3574800,
        'Academy',
        25,
        'Pact Merging Speed III',
        8,
        'Gym Training III',
        8,
    ];
    researches['Familiarity Ranged ATK I3'][9] = [
        4503758, 1200940, 2068233, 2401879, 3724780, 50, 420398, 5004720,
    ];
    researches['Familiarity Ranged ATK I3'][10] = [
        5003758, 1500940, 2568233, 2801879, 4724780, 63, 547911, 6553800,
    ];

    researches['Familiarity Cavalry ATK I'] = [];
    researches['Familiarity Cavalry ATK I2'] = [];
    researches['Familiarity Cavalry ATK I3'] = [];
    researches['Familiarity Cavalry ATK I'][1] = [
        266918,
        111216,
        66730,
        133459,
        181652,
        0,
        19925,
        238320,
        'Academy',
        22,
        'Pact Merging Speed III',
        1,
        'Gym Training III',
        1,
    ];
    researches['Familiarity Cavalry ATK I'][2] = [
        800752,
        211216,
        166730,
        233459,
        381652,
        0,
        66745,
        834120,
        'Academy',
        22,
    ];
    researches['Familiarity Cavalry ATK I'][3] = [
        1007520,
        311216,
        266730,
        333459,
        681652,
        0,
        83681,
        1012860,
        'Academy',
        22,
    ];
    researches['Familiarity Cavalry ATK I'][4] = [
        1334586,
        556078,
        333647,
        667293,
        908260,
        0,
        100617,
        1191600,
        'Academy',
        23,
    ];
    researches['Familiarity Cavalry ATK I'][5] = [
        1601504,
        667293,
        400376,
        800752,
        1089912,
        0,
        122532,
        1429920,
        'Academy',
        24,
    ];
    researches['Familiarity Cavalry ATK I2'][6] = [
        2135338,
        889724,
        533835,
        1067669,
        1453216,
        0,
        164374,
        1906560,
        'Academy',
        24,
    ];
    researches['Familiarity Cavalry ATK I2'][7] = [
        3135338,
        1189724,
        733835,
        1267669,
        1953216,
        0,
        217172,
        2502360,
        'Academy',
        25,
    ];
    researches['Familiarity Cavalry ATK I3'][8] = [
        4003758,
        1668233,
        1000940,
        2001879,
        2724780,
        40,
        305834,
        3574800,
        'Academy',
        25,
    ];
    researches['Familiarity Cavalry ATK I3'][9] = [
        5003758,
        2068233,
        1200940,
        2201879,
        3524780,
        50,
        420398,
        5004720,
        'Academy',
        25,
    ];
    researches['Familiarity Cavalry ATK I3'][10] = [
        6003758,
        2168233,
        1400940,
        2401879,
        3624780,
        60,
        547911,
        6553800,
        'Academy',
        25,
    ];

    researches['Familiar Battle Slot II'] = [];
    researches['Familiar Battle Slot II'][1] = [
        17100000,
        4275000,
        4275000,
        4275000,
        11025000,
        0,
        363830,
        4946100,
        'Academy',
        22,
        'Familiarity Infantry ATK I',
        3,
        'Familiarity Ranged ATK I',
        3,
        'Familiarity Cavalry ATK I',
        3,
    ];

    researches['Familiarity Infantry HP I'] = [];
    researches['Familiarity Infantry HP I2'] = [];
    researches['Familiarity Infantry HP I3'] = [];
    researches['Familiarity Infantry HP I'][1] = [
        296575,
        148288,
        148288,
        148288,
        242203,
        0,
        29887,
        357480,
        'Academy',
        23,
        'Familiar Battle Slot II',
        1,
    ];
    researches['Familiarity Infantry HP I'][2] = [
        1038012,
        519006,
        519006,
        519006,
        847710,
        0,
        100118,
        1251180,
        'Academy',
        23,
    ];
    researches['Familiarity Infantry HP I'][3] = [
        1260443,
        630222,
        630222,
        630222,
        1029362,
        0,
        125521,
        1519320,
        'Academy',
        23,
    ];
    researches['Familiarity Infantry HP I'][4] = [
        1482874,
        741737,
        741437,
        741437,
        1211014,
        0,
        150925,
        1787400,
        'Academy',
        24,
    ];
    researches['Familiarity Infantry HP I'][5] = [
        1779448,
        889724,
        889724,
        889724,
        1453216,
        0,
        183799,
        2144880,
        'Academy',
        24,
        'Familiar Battle Slot II',
        1,
    ];
    researches['Familiarity Infantry HP I2'][6] = [
        2372598,
        1186299,
        1186299,
        1186299,
        1937622,
        0,
        246561,
        2859840,
        'Academy',
        24,
    ];
    researches['Familiarity Infantry HP I2'][7] = [
        3114034,
        1557017,
        1557017,
        1557017,
        2543128,
        0,
        325758,
        3753540,
        'Academy',
        25,
    ];
    researches['Familiarity Infantry HP I3'][8] = [
        4448620,
        2224310,
        2224310,
        2224310,
        3633040,
        53,
        458751,
        5362200,
        'Academy',
        25,
        'Familiarity Infantry ATK I',
        8,
    ];
    researches['Familiarity Infantry HP I3'][9] = [
        6228068, 3114034, 3114034, 3114034, 5086256, 66, 630596, 7507080,
    ];
    researches['Familiarity Infantry HP I3'][10] = [
        8155803,
        4077902,
        4077902,
        4077902,
        6660573,
        84,
        821867,
        9830700,
        'Academy',
        25,
        'Familiarity Infantry ATK I',
        10,
    ];

    researches['Familiarity Ranged HP I'] = [];
    researches['Familiarity Ranged HP I2'] = [];
    researches['Familiarity Ranged HP I3'] = [];
    researches['Familiarity Ranged HP I'][1] = [
        296575,
        148288,
        148288,
        148288,
        242203,
        0,
        29887,
        357480,
        'Academy',
        23,
        'Familiar Battle Slot II',
        1,
    ];
    researches['Familiarity Ranged HP I'][2] = [
        1038012,
        519006,
        519006,
        519006,
        847710,
        0,
        100118,
        1251180,
        'Academy',
        23,
    ];
    researches['Familiarity Ranged HP I'][3] = [
        1260443,
        630222,
        630222,
        630222,
        1029362,
        0,
        125521,
        1519320,
        'Academy',
        23,
    ];
    researches['Familiarity Ranged HP I'][4] = [
        1482874,
        741737,
        741437,
        741437,
        1211014,
        0,
        150925,
        1787400,
        'Academy',
        24,
    ];
    researches['Familiarity Ranged HP I'][5] = [
        1779448,
        889724,
        889724,
        889724,
        1453216,
        0,
        183799,
        2144880,
        'Academy',
        24,
        'Familiar Battle Slot II',
        1,
    ];
    researches['Familiarity Ranged HP I2'][6] = [
        2372598,
        1186299,
        1186299,
        1186299,
        1937622,
        0,
        246561,
        2859840,
        'Academy',
        24,
    ];
    researches['Familiarity Ranged HP I2'][7] = [
        3114034,
        1557017,
        1557017,
        1557017,
        2543128,
        0,
        325758,
        3753540,
        'Academy',
        25,
    ];
    researches['Familiarity Ranged HP I3'][8] = [
        4448620,
        2224310,
        2224310,
        2224310,
        3633040,
        53,
        458751,
        5362200,
        'Academy',
        25,
        'Familiarity Ranged ATK I3',
        8,
    ];
    researches['Familiarity Ranged HP I3'][9] = [
        6228068, 3114034, 3114034, 3114034, 5086256, 66, 630596, 7507080,
    ];
    researches['Familiarity Ranged HP I3'][10] = [
        8155803,
        4077902,
        4077902,
        4077902,
        6660573,
        84,
        821867,
        9830700,
        'Academy',
        25,
        'Familiarity Ranged ATK I3',
        10,
    ];

    researches['Familiarity Cavalry HP I'] = [];
    researches['Familiarity Cavalry HP I2'] = [];
    researches['Familiarity Cavalry HP I3'] = [];
    researches['Familiarity Cavalry HP I'][1] = [
        296575,
        148288,
        148288,
        148288,
        242203,
        0,
        29887,
        357480,
        'Academy',
        23,
        'Familiar Battle Slot II',
        1,
    ];
    researches['Familiarity Cavalry HP I'][2] = [
        1038012,
        519006,
        519006,
        519006,
        847710,
        0,
        100118,
        1251180,
        'Academy',
        23,
    ];
    researches['Familiarity Cavalry HP I'][3] = [
        1260443,
        630222,
        630222,
        630222,
        1029362,
        0,
        125521,
        1519320,
        'Academy',
        23,
    ];
    researches['Familiarity Cavalry HP I'][4] = [
        1482874,
        741737,
        741437,
        741437,
        1211014,
        0,
        150925,
        1787400,
        'Academy',
        24,
    ];
    researches['Familiarity Cavalry HP I'][5] = [
        1779448,
        889724,
        889724,
        889724,
        1453216,
        0,
        183799,
        2144880,
        'Academy',
        24,
    ];
    researches['Familiarity Cavalry HP I2'][6] = [
        2372598,
        1186299,
        1186299,
        1186299,
        1937622,
        0,
        246561,
        2859840,
        'Academy',
        24,
    ];
    researches['Familiarity Cavalry HP I2'][7] = [
        3114034,
        1557017,
        1557017,
        1557017,
        2543128,
        0,
        325758,
        3753540,
        'Academy',
        25,
    ];
    researches['Familiarity Cavalry HP I3'][8] = [
        4448620,
        2224310,
        2224310,
        2224310,
        3633040,
        53,
        458751,
        5362200,
        'Academy',
        25,
        'Familiarity Cavalry ATK I',
        8,
    ];
    researches['Familiarity Cavalry HP I3'][9] = [
        6228068, 3114034, 3114034, 3114034, 5086256, 66, 630596, 7507080,
    ];
    researches['Familiarity Cavalry HP I3'][10] = [
        8155803,
        4077902,
        4077902,
        4077902,
        6660573,
        84,
        821867,
        9830700,
        'Academy',
        25,
        'Familiarity Cavalry ATK I',
        10,
    ];

    researches['Familiarity Infantry DEF I'] = [];
    researches['Familiarity Infantry DEF I2'] = [];
    researches['Familiarity Infantry DEF I3'] = [];
    researches['Familiarity Infantry DEF I'][1] = [
        533835,
        222431,
        133459,
        266918,
        363304,
        0,
        39849,
        476640,
        'Academy',
        23,
        'Familiarity Infantry HP I',
        1,
    ];
    researches['Familiarity Infantry DEF I'][2] = [
        1868421,
        778509,
        467106,
        934211,
        1271564,
        0,
        133491,
        1668240,
        'Academy',
        23,
        'Familiarity Infantry HP I',
        2,
    ];
    researches['Familiarity Infantry DEF I'][3] = [
        2268797,
        945332,
        567200,
        1134399,
        1544042,
        0,
        167362,
        2025720,
        'Academy',
        23,
        'Familiarity Infantry HP I',
        3,
    ];
    researches['Familiarity Infantry DEF I'][4] = [
        2669172,
        1112155,
        667293,
        1334586,
        1816520,
        0,
        201233,
        2383200,
        'Academy',
        24,
        'Familiarity Infantry HP I',
        4,
    ];
    researches['Familiarity Infantry DEF I'][5] = [
        3203007,
        1334586,
        800752,
        1601504,
        2179824,
        0,
        245065,
        2859840,
        'Academy',
        24,
        'Familiarity Infantry HP I',
        5,
    ];
    researches['Familiarity Infantry DEF I2'][6] = [
        4270675,
        1779448,
        1067669,
        2135338,
        2906432,
        0,
        328747,
        3813120,
        'Academy',
        24,
        'Familiarity Infantry HP I2',
        6,
    ];
    researches['Familiarity Infantry DEF I2'][7] = [
        5605261,
        2335526,
        1401316,
        2802631,
        3814692,
        0,
        434345,
        5004720,
        'Academy',
        25,
        'Familiarity Infantry HP I2',
        7,
    ];
    researches['Familiarity Infantry DEF I3'][8] = [
        8007516,
        3336465,
        2001879,
        4003758,
        5449560,
        80,
        611668,
        7149600,
        'Academy',
        25,
        'Familiarity Infantry HP I3',
        8,
    ];
    researches['Familiarity Infantry DEF I3'][9] = [
        11210522,
        4671051,
        2802631,
        5605261,
        7629383,
        99,
        840795,
        10009440,
        'Academy',
        25,
        'Familiarity Infantry HP I3',
        9,
    ];
    researches['Familiarity Infantry DEF I3'][10] = [
        14680446,
        6116853,
        3670112,
        7340223,
        9990859,
        125,
        1096822,
        13107600,
        'Academy',
        25,
        'Familiarity Infantry HP I3',
        10,
    ];

    researches['Familiarity Ranged DEF I'] = [];
    researches['Familiarity Ranged DEF I2'] = [];
    researches['Familiarity Ranged DEF I3'] = [];
    researches['Familiarity Ranged DEF I'][1] = [
        533835,
        222431,
        133459,
        266918,
        363304,
        0,
        39849,
        476640,
        'Academy',
        23,
        'Familiarity Ranged HP I',
        1,
    ];
    researches['Familiarity Ranged DEF I'][2] = [
        1868421,
        778509,
        467106,
        934211,
        1271564,
        0,
        133491,
        1668240,
        'Academy',
        23,
        'Familiarity Ranged HP I',
        2,
    ];
    researches['Familiarity Ranged DEF I'][3] = [
        2268797,
        945332,
        567200,
        1134399,
        1544042,
        0,
        167362,
        2025720,
        'Academy',
        23,
        'Familiarity Ranged HP I',
        3,
    ];
    researches['Familiarity Ranged DEF I'][4] = [
        2669172,
        1112155,
        667293,
        1334586,
        1816520,
        0,
        201233,
        2383200,
        'Academy',
        24,
        'Familiarity Ranged HP I',
        4,
    ];
    researches['Familiarity Ranged DEF I'][5] = [
        3203007,
        1334586,
        800752,
        1601504,
        2179824,
        0,
        245065,
        2859840,
        'Academy',
        24,
        'Familiarity Ranged HP I',
        5,
    ];
    researches['Familiarity Ranged DEF I2'][6] = [
        4270675,
        1779448,
        1067669,
        2135338,
        2906432,
        0,
        328747,
        3813120,
        'Academy',
        24,
        'Familiarity Ranged HP I2',
        6,
    ];
    researches['Familiarity Ranged DEF I2'][7] = [
        5605261,
        2335526,
        1401316,
        2802631,
        3814692,
        0,
        434345,
        5004720,
        'Academy',
        25,
        'Familiarity Ranged HP I2',
        7,
    ];
    researches['Familiarity Ranged DEF I3'][8] = [
        8007516,
        3336465,
        2001879,
        4003758,
        5449560,
        80,
        611668,
        7149600,
        'Academy',
        25,
        'Familiarity Ranged HP I3',
        8,
    ];
    researches['Familiarity Ranged DEF I3'][9] = [
        11210522,
        4671051,
        2802631,
        5605261,
        7629383,
        99,
        840795,
        10009440,
        'Academy',
        25,
        'Familiarity Ranged HP I3',
        9,
    ];
    researches['Familiarity Ranged DEF I3'][10] = [
        14680446,
        6116853,
        3670112,
        7340223,
        9990859,
        125,
        1096822,
        13107600,
        'Academy',
        25,
        'Familiarity Ranged HP I3',
        10,
    ];

    researches['Familiarity Cavalry DEF I'] = [];
    researches['Familiarity Cavalry DEF I2'] = [];
    researches['Familiarity Cavalry DEF I3'] = [];
    researches['Familiarity Cavalry DEF I'][1] = [
        533835,
        222431,
        133459,
        266918,
        363304,
        0,
        39849,
        476640,
        'Academy',
        23,
        'Familiarity Cavalry HP I',
        1,
    ];
    researches['Familiarity Cavalry DEF I'][2] = [
        1868421,
        778509,
        467106,
        934211,
        1271564,
        0,
        133491,
        1668240,
        'Academy',
        23,
        'Familiarity Cavalry HP I',
        2,
    ];
    researches['Familiarity Cavalry DEF I'][3] = [
        2268797,
        945332,
        567200,
        1134399,
        1544042,
        0,
        167362,
        2025720,
        'Academy',
        23,
        'Familiarity Cavalry HP I',
        3,
    ];
    researches['Familiarity Cavalry DEF I'][4] = [
        2669172,
        1112155,
        667293,
        1334586,
        1816520,
        0,
        201233,
        2383200,
        'Academy',
        24,
        'Familiarity Cavalry HP I',
        4,
    ];
    researches['Familiarity Cavalry DEF I'][5] = [
        3203007,
        1334586,
        800752,
        1601504,
        2179824,
        0,
        245065,
        2859840,
        'Academy',
        24,
        'Familiarity Cavalry HP I',
        5,
    ];
    researches['Familiarity Cavalry DEF I2'][6] = [
        4270675,
        1779448,
        1067669,
        2135338,
        2906432,
        0,
        328747,
        3813120,
        'Academy',
        24,
        'Familiarity Cavalry HP I2',
        6,
    ];
    researches['Familiarity Cavalry DEF I2'][7] = [
        5605261,
        2335526,
        1401316,
        2802631,
        3814692,
        0,
        434345,
        5004720,
        'Academy',
        25,
        'Familiarity Cavalry HP I2',
        7,
    ];
    researches['Familiarity Cavalry DEF I3'][8] = [
        8007516,
        3336465,
        2001879,
        4003758,
        5449560,
        80,
        611668,
        7149600,
        'Academy',
        25,
        'Familiarity Cavalry HP I3',
        8,
    ];
    researches['Familiarity Cavalry DEF I3'][9] = [
        11210522,
        4671051,
        2802631,
        5605261,
        7629383,
        99,
        840795,
        10009440,
        'Academy',
        25,
        'Familiarity Cavalry HP I3',
        9,
    ];
    researches['Familiarity Cavalry DEF I3'][10] = [
        14680446,
        6116853,
        3670112,
        7340223,
        9990859,
        125,
        1096822,
        13107600,
        'Academy',
        25,
        'Familiarity Cavalry HP I3',
        10,
    ];

    researches['Familiarity Infantry DEF II'] = [];
    researches['Familiarity Infantry DEF II3'] = [];
    researches['Familiarity Infantry DEF II'][1] = [
        934211,
        333647,
        200188,
        333647,
        544956,
        5,
        62263,
        744780,
        'Familiar Battle Slot III',
        1,
        'Familiarity Infantry DEF I',
        1,
    ];
    researches['Familiarity Infantry DEF II'][2] = [
        3269736,
        700658,
        1167763,
        1167763,
        1907346,
        11,
        208580,
        2606640,
        'Familiarity Infantry DEF I',
        2,
    ];
    researches['Familiarity Infantry DEF II'][3] = [
        3970394,
        850799,
        1417998,
        1417998,
        2316063,
        18,
        261503,
        3165240,
        'Familiarity Infantry DEF I',
        3,
    ];
    researches['Familiarity Infantry DEF II'][4] = [
        4671051,
        1000940,
        1668233,
        1668233,
        2724780,
        26,
        314427,
        3723780,
        'Familiarity Infantry DEF I',
        4,
    ];
    researches['Familiarity Infantry DEF II'][5] = [
        5605261,
        1201128,
        2001879,
        2001879,
        3269736,
        34,
        382915,
        4468500,
        'Familiarity Infantry DEF I',
        5,
    ];
    researches['Familiarity Infantry DEF II'][6] = [
        7473682,
        1601504,
        2669172,
        2669172,
        4359648,
        46,
        513667,
        5958000,
        'Familiarity Infantry DEF I2',
        6,
    ];
    researches['Familiarity Infantry DEF II'][7] = [
        9809207,
        2101973,
        3503289,
        3503289,
        5722038,
        62,
        678663,
        7819920,
        'Familiarity Infantry DEF I2',
        7,
    ];
    researches['Familiarity Infantry DEF II3'][8] = [
        14013153,
        3002819,
        5004698,
        5004698,
        8174339,
        81,
        955731,
        11171280,
        'Familiarity Infantry DEF I3',
        8,
    ];
    researches['Familiarity Infantry DEF II3'][9] = [
        19618414,
        4203946,
        7006577,
        7006577,
        11444075,
        100,
        1313742,
        15639780,
        'Familiarity Infantry DEF I3',
        9,
    ];
    researches['Familiarity Infantry DEF II3'][10] = [
        25690780,
        5505167,
        9175279,
        9175279,
        14986288,
        127,
        1712223,
        20480640,
        'Familiarity Infantry DEF I3',
        10,
    ];

    researches['Familiarity Ranged DEF II'] = [];
    researches['Familiarity Ranged DEF II3'] = [];
    researches['Familiarity Ranged DEF II'][1] = [
        934211,
        200188,
        333647,
        333647,
        544956,
        5,
        62263,
        744780,
        'Familiar Battle Slot III',
        1,
        'Familiarity Ranged DEF I',
        1,
    ];
    researches['Familiarity Ranged DEF II'][2] = [
        3269736,
        700658,
        1167763,
        1167763,
        1907346,
        11,
        208580,
        2606640,
        'Familiarity Ranged DEF I',
        2,
    ];
    researches['Familiarity Ranged DEF II'][3] = [
        3970394,
        850799,
        1417998,
        1417998,
        2316063,
        18,
        261503,
        3165240,
        'Familiarity Ranged DEF I',
        3,
    ];
    researches['Familiarity Ranged DEF II'][4] = [
        4671051,
        1000940,
        1668233,
        1668233,
        2724780,
        26,
        314427,
        3723780,
        'Familiarity Ranged DEF I',
        4,
    ];
    researches['Familiarity Ranged DEF II'][5] = [
        5605261,
        1201128,
        2001879,
        2001879,
        3269736,
        34,
        382915,
        4468500,
        'Familiarity Ranged DEF I',
        5,
    ];
    researches['Familiarity Ranged DEF II'][6] = [
        7473682,
        1601504,
        2669172,
        2669172,
        4359648,
        46,
        513667,
        5958000,
        'Familiarity Ranged DEF I2',
        6,
    ];
    researches['Familiarity Ranged DEF II'][7] = [
        9809207,
        2101973,
        3503289,
        3503289,
        5722038,
        62,
        678663,
        7819920,
        'Familiarity Ranged DEF I2',
        7,
    ];
    researches['Familiarity Ranged DEF II3'][8] = [
        14013153,
        3002819,
        5004698,
        5004698,
        8174339,
        81,
        955731,
        11171280,
        'Familiarity Ranged DEF I3',
        8,
    ];
    researches['Familiarity Ranged DEF II3'][9] = [
        19618414,
        4203946,
        7006577,
        7006577,
        11444075,
        100,
        1313742,
        15639780,
        'Familiarity Ranged DEF I3',
        9,
    ];
    researches['Familiarity Ranged DEF II3'][10] = [
        25690780,
        5505167,
        9175279,
        9175279,
        14986288,
        127,
        1712223,
        20480640,
        'Familiarity Ranged DEF I3',
        10,
    ];

    researches['Familiarity Cavalry DEF II'] = [];
    researches['Familiarity Cavalry DEF II3'] = [];
    researches['Familiarity Cavalry DEF II'][1] = [
        934211,
        200188,
        333647,
        333647,
        544956,
        5,
        62263,
        744780,
        'Familiar Battle Slot III',
        1,
        'Familiarity Cavalry DEF I',
        1,
    ];
    researches['Familiarity Cavalry DEF II'][2] = [
        3269736,
        700658,
        1167763,
        1167763,
        1907346,
        11,
        208580,
        2606640,
        'Familiarity Cavalry DEF I',
        2,
    ];
    researches['Familiarity Cavalry DEF II'][3] = [
        3970394,
        850799,
        1417998,
        1417998,
        2316063,
        18,
        261503,
        3165240,
        'Familiarity Cavalry DEF I',
        3,
    ];
    researches['Familiarity Cavalry DEF II'][4] = [
        4671051,
        1000940,
        1668233,
        1668233,
        2724780,
        26,
        314427,
        3723780,
        'Familiarity Cavalry DEF I',
        4,
    ];
    researches['Familiarity Cavalry DEF II'][5] = [
        5605261,
        1201128,
        2001879,
        2001879,
        3269736,
        34,
        382915,
        4468500,
        'Familiarity Cavalry DEF I',
        5,
    ];
    researches['Familiarity Cavalry DEF II'][6] = [
        7473682,
        1601504,
        2669172,
        2669172,
        4359648,
        46,
        513667,
        5958000,
        'Familiarity Cavalry DEF I2',
        6,
    ];
    researches['Familiarity Cavalry DEF II'][7] = [
        9809207,
        2101973,
        3503289,
        3503289,
        5722038,
        62,
        678663,
        7819920,
        'Familiarity Cavalry DEF I2',
        7,
    ];
    researches['Familiarity Cavalry DEF II3'][8] = [
        14013153,
        3002819,
        5004698,
        5004698,
        8174339,
        81,
        955731,
        11171280,
        'Familiarity Cavalry DEF I3',
        8,
    ];
    researches['Familiarity Cavalry DEF II3'][9] = [
        19618414,
        4203946,
        7006577,
        7006577,
        11444075,
        100,
        1313742,
        15639780,
        'Familiarity Cavalry DEF I3',
        9,
    ];
    researches['Familiarity Cavalry DEF II3'][10] = [
        25690780,
        5505167,
        9175279,
        9175279,
        14986288,
        127,
        1712223,
        20480640,
        'Familiarity Cavalry DEF I3',
        10,
    ];

    researches['Familiarity Infantry HP II'] = [];
    researches['Familiarity Infantry HP II3'] = [];
    researches['Familiarity Infantry HP II'][1] = [
        889724,
        444862,
        444862,
        444862,
        726608,
        7,
        87168,
        1042680,
        'Familiarity Infantry DEF II',
        1,
    ];
    researches['Familiarity Infantry HP II'][2] = [
        3114034,
        1557017,
        1557017,
        1557017,
        2543128,
        17,
        292012,
        3649320,
        'Familiarity Infantry HP I',
        2,
    ];
    researches['Familiarity Infantry HP II'][3] = [
        3781327,
        1890664,
        1890664,
        1890664,
        3088084,
        27,
        366104,
        4431300,
        'Familiarity Infantry HP I',
        3,
    ];
    researches['Familiarity Infantry HP II'][4] = [
        4448620,
        2224310,
        2224310,
        2224310,
        3633040,
        38,
        440197,
        5213280,
        'Familiarity Infantry HP I',
        4,
    ];
    researches['Familiarity Infantry HP II'][5] = [
        5338344,
        2669172,
        2669172,
        2669172,
        4359648,
        50,
        536082,
        6254640,
        'Familiarity Infantry HP I',
        5,
    ];
    researches['Familiarity Infantry HP II'][6] = [
        7117792,
        3558896,
        3558896,
        3558896,
        5812864,
        70,
        719134,
        8341200,
        'Familiarity Infantry HP I2',
        6,
    ];
    researches['Familiarity Infantry HP II'][7] = [
        9342102,
        4671051,
        4671051,
        4671051,
        7692383,
        93,
        950128,
        10947840,
        'Familiarity Infantry DEF II',
        7,
        'Familiarity Infantry HP I2',
        7,
    ];
    researches['Familiarity Infantry HP II3'][8] = [
        13345860,
        6672930,
        6672930,
        6672930,
        10899119,
        121,
        1338024,
        15639780,
        'Familiarity Infantry DEF II',
        8,
        'Familiarity Infantry HP I3',
        8,
    ];
    researches['Familiarity Infantry HP II3'][9] = [
        18684203,
        9342102,
        9342102,
        9342102,
        15258766,
        150,
        1839239,
        21895620,
        'Familiarity Infantry DEF II',
        9,
        'Familiarity Infantry HP I3',
        9,
    ];
    researches['Familiarity Infantry HP II3'][10] = [
        24467409,
        12233705,
        12233705,
        12233705,
        19981718,
        190,
        2397112,
        28672860,
        'Familiarity Infantry DEF II',
        10,
        'Familiarity Infantry HP I3',
        10,
    ];

    researches['Familiarity Ranged HP II'] = [];
    researches['Familiarity Ranged HP II3'] = [];
    researches['Familiarity Ranged HP II'][1] = [
        889724,
        444862,
        444862,
        444862,
        726608,
        7,
        87168,
        1042680,
        'Familiarity Ranged DEF II',
        1,
    ];
    researches['Familiarity Ranged HP II'][2] = [
        3114034,
        1557017,
        1557017,
        1557017,
        2543128,
        17,
        292012,
        3649320,
        'Familiarity Ranged HP I',
        2,
    ];
    researches['Familiarity Ranged HP II'][3] = [
        3781327,
        1890664,
        1890664,
        1890664,
        3088084,
        27,
        366104,
        4431300,
        'Familiarity Ranged HP I',
        3,
    ];
    researches['Familiarity Ranged HP II'][4] = [
        4448620,
        2224310,
        2224310,
        2224310,
        3633040,
        38,
        440197,
        5213280,
        'Familiarity Ranged HP I',
        4,
    ];
    researches['Familiarity Ranged HP II'][5] = [
        5338344,
        2669172,
        2669172,
        2669172,
        4359648,
        50,
        536082,
        6254640,
        'Familiarity Ranged HP I2',
        5,
    ];
    researches['Familiarity Ranged HP II'][6] = [
        7117792,
        3558896,
        3558896,
        3558896,
        5812864,
        70,
        719134,
        8341200,
        'Familiarity Ranged HP I2',
        6,
    ];
    researches['Familiarity Ranged HP II'][7] = [
        9342102,
        4671051,
        4671051,
        4671051,
        7692383,
        93,
        950128,
        10947840,
        'Familiarity Ranged DEF II',
        7,
        'Familiarity Ranged HP I2',
        7,
    ];
    researches['Familiarity Ranged HP II3'][8] = [
        13345860,
        6672930,
        6672930,
        6672930,
        10899119,
        121,
        1338024,
        15639780,
        'Familiarity Ranged DEF II',
        8,
        'Familiarity Ranged HP I3',
        8,
    ];
    researches['Familiarity Ranged HP II3'][9] = [
        18684203,
        9342102,
        9342102,
        9342102,
        15258766,
        150,
        1839239,
        21895620,
        'Familiarity Ranged DEF II',
        9,
        'Familiarity Ranged HP I3',
        9,
    ];
    researches['Familiarity Ranged HP II3'][10] = [
        24467409,
        12233705,
        12233705,
        12233705,
        19981718,
        190,
        2397112,
        28672860,
        'Familiarity Ranged DEF II',
        10,
        'Familiarity Ranged HP I3',
        10,
    ];

    researches['Familiarity Cavalry HP II'] = [];
    researches['Familiarity Cavalry HP II3'] = [];
    researches['Familiarity Cavalry HP II'][1] = [
        889724,
        444862,
        444862,
        444862,
        726608,
        7,
        87168,
        1042680,
        'Familiarity Cavalry DEF II',
        1,
    ];
    researches['Familiarity Cavalry HP II'][2] = [
        3114034,
        1557017,
        1557017,
        1557017,
        2543128,
        17,
        292012,
        3649320,
        'Familiarity Cavalry HP I',
        2,
    ];
    researches['Familiarity Cavalry HP II'][3] = [
        3781327,
        1890664,
        1890664,
        1890664,
        3088084,
        27,
        366104,
        4431300,
        'Familiarity Cavalry HP I',
        3,
    ];
    researches['Familiarity Cavalry HP II'][4] = [
        4448620,
        2224310,
        2224310,
        2224310,
        3633040,
        38,
        440197,
        5213280,
        'Familiarity Cavalry HP I',
        4,
    ];
    researches['Familiarity Cavalry HP II'][5] = [
        5338344,
        2669172,
        2669172,
        2669172,
        4359648,
        50,
        536082,
        6254640,
        'Familiarity Cavalry HP I',
        5,
    ];
    researches['Familiarity Cavalry HP II'][6] = [
        7117792,
        3558896,
        3558896,
        3558896,
        5812864,
        70,
        719134,
        8341200,
        'Familiarity Cavalry HP I2',
        6,
    ];
    researches['Familiarity Cavalry HP II'][7] = [
        9342102,
        4671051,
        4671051,
        4671051,
        7692383,
        93,
        950128,
        10947840,
        'Familiarity Cavalry DEF II',
        7,
        'Familiarity Cavalry HP I2',
        7,
    ];
    researches['Familiarity Cavalry HP II3'][8] = [
        13345860,
        6672930,
        6672930,
        6672930,
        10899119,
        121,
        1338024,
        15639780,
        'Familiarity Cavalry DEF II3',
        8,
        'Familiarity Cavalry HP I3',
        8,
    ];
    researches['Familiarity Cavalry HP II3'][9] = [
        18684203,
        9342102,
        9342102,
        9342102,
        15258766,
        150,
        1839239,
        21895620,
        'Familiarity Cavalry DEF II3',
        9,
        'Familiarity Cavalry HP I3',
        9,
    ];
    researches['Familiarity Cavalry HP II3'][10] = [
        24467409,
        12233705,
        12233705,
        12233705,
        19981718,
        190,
        2397112,
        28672860,
        'Familiarity Cavalry DEF II3',
        10,
        'Familiarity Cavalry HP I3',
        10,
    ];

    researches['Familiarity Infantry ATK II'] = [];
    researches['Familiarity Infantry ATK II3'] = [];
    researches['Familiarity Infantry ATK II'][1] = [
        1660819,
        355890,
        593150,
        593150,
        968811,
        11,
        124526,
        1489500,
        'Familiarity Infantry HP II',
        1,
    ];
    researches['Familiarity Infantry ATK II'][2] = [
        1245614,
        2076023,
        2076023,
        2076023,
        3390837,
        25,
        417160,
        5213280,
        'Familiarity Infantry ATK I',
        2,
    ];
    researches['Familiarity Infantry ATK II'][3] = [
        7058477,
        1512531,
        2520885,
        2520885,
        4117445,
        39,
        523006,
        6330420,
        'Familiarity Infantry ATK I',
        3,
    ];
    researches['Familiarity Infantry ATK II'][4] = [
        8304091,
        1779448,
        2965747,
        2964747,
        4844053,
        56,
        628853,
        7447500,
        'Familiarity Infantry ATK I',
        4,
    ];
    researches['Familiarity Infantry ATK II'][5] = [
        9964909,
        2135338,
        3558896,
        3558896,
        5812864,
        73,
        765830,
        8937000,
        'Familiarity Infantry ATK I',
        5,
    ];
    researches['Familiarity Infantry ATK II'][6] = [
        13286545,
        2847117,
        4745195,
        4748195,
        7750458,
        100,
        1027334,
        11916000,
        'Familiarity Infantry ATK I2',
        6,
    ];
    researches['Familiarity Infantry ATK II'][7] = [
        17438068,
        3736841,
        6228068,
        6228068,
        10172511,
        137,
        1357326,
        15639780,
        'Familiarity Infantry ATK I2',
        7,
        'Familiarity Infantry HP II',
        7,
    ];
    researches['Familiarity Infantry ATK II3'][8] = [
        24912271,
        5338344,
        8897240,
        8897240,
        14532158,
        177,
        1911463,
        22342500,
        'Familiarity Infantry ATK I3',
        8,
    ];
    researches['Familiarity Infantry ATK II3'][9] = [
        34877179,
        12456136,
        7473682,
        12456136,
        20345021,
        220,
        2627484,
        31279500,
        'Familiarity Infantry ATK I3',
        9,
    ];
    researches['Familiarity Infantry ATK II3'][10] = [
        45672497,
        16311606,
        9786964,
        16311606,
        26642290,
        278,
        3424446,
        40961220,
        'Familiarity Infantry ATK I3',
        10,
    ];

    researches['Familiarity Ranged ATK II'] = [];
    researches['Familiarity Ranged ATK II3'] = [];
    researches['Familiarity Ranged ATK II'][1] = [
        1660819,
        355890,
        593150,
        593150,
        968811,
        11,
        124526,
        1489500,
        'Familiarity Ranged HP II',
        1,
    ];
    researches['Familiarity Ranged ATK II'][2] = [
        1245614,
        2076023,
        2076023,
        2076023,
        3390837,
        25,
        417160,
        5213280,
        'Familiarity Ranged ATK I',
        2,
    ];
    researches['Familiarity Ranged ATK II'][3] = [
        7058477,
        1512531,
        2520885,
        2520885,
        4117445,
        39,
        523006,
        6330420,
        'Familiarity Ranged ATK I',
        3,
    ];
    researches['Familiarity Ranged ATK II'][4] = [
        8304091,
        1779448,
        2965747,
        2964747,
        4844053,
        56,
        628853,
        7447500,
        'Familiarity Ranged ATK I',
        4,
    ];
    researches['Familiarity Ranged ATK II'][5] = [
        9964909,
        2135338,
        3558896,
        3558896,
        5812864,
        73,
        765830,
        8937000,
        'Familiarity Ranged ATK I',
        5,
    ];
    researches['Familiarity Ranged ATK II'][6] = [
        13286545,
        2847117,
        4745195,
        4748195,
        7750458,
        100,
        1027334,
        11916000,
        'Familiarity Ranged ATK I2',
        6,
    ];
    researches['Familiarity Ranged ATK II'][7] = [
        17438068,
        3736841,
        6228068,
        6228068,
        10172511,
        137,
        1357326,
        15639780,
        'Familiarity Ranged ATK I2',
        7,
        'Familiarity Ranged HP II',
        7,
    ];
    researches['Familiarity Ranged ATK II3'][8] = [
        24912271,
        5338344,
        8897240,
        8897240,
        14532158,
        177,
        1911463,
        22342500,
        'Familiarity Ranged ATK I3',
        8,
    ];
    researches['Familiarity Ranged ATK II3'][9] = [
        34877179,
        12456136,
        7473682,
        12456136,
        20345021,
        220,
        2627484,
        31279500,
        'Familiarity Ranged ATK I3',
        9,
    ];
    researches['Familiarity Ranged ATK II3'][10] = [
        45672497,
        16311606,
        9786964,
        16311606,
        26642290,
        278,
        3424446,
        40961220,
        'Familiarity Ranged ATK I3',
        10,
    ];

    researches['Familiarity Cavalry ATK II'] = [];
    researches['Familiarity Cavalry ATK II3'] = [];
    researches['Familiarity Cavalry ATK II'][1] = [
        208040,
        1660819,
        355890,
        593150,
        593150,
        11,
        124526,
        1489500,
        'Familiarity Cavalry HP II',
        1,
    ];
    researches['Familiarity Cavalry ATK II'][2] = [
        728138,
        1245614,
        2076023,
        2076023,
        2076023,
        25,
        417160,
        5213280,
        'Familiarity Cavalry ATK I',
        2,
    ];
    researches['Familiarity Cavalry ATK II'][3] = [
        884168,
        7058477,
        1512531,
        2520885,
        2520885,
        39,
        523006,
        6330420,
        'Familiarity Cavalry ATK I',
        3,
    ];
    researches['Familiarity Cavalry ATK II'][4] = [
        1040197,
        8304091,
        1779448,
        2965747,
        2964747,
        56,
        628853,
        7447500,
        'Familiarity Cavalry ATK I',
        4,
    ];
    researches['Familiarity Cavalry ATK II'][5] = [
        1248236,
        9964909,
        2135338,
        3558896,
        3558896,
        73,
        765830,
        8937000,
        'Familiarity Cavalry ATK I',
        5,
    ];
    researches['Familiarity Cavalry ATK II'][6] = [
        1664315,
        13286545,
        2847117,
        4745195,
        4748195,
        100,
        1027334,
        11916000,
        'Familiarity Cavalry ATK I2',
        6,
    ];
    researches['Familiarity Cavalry ATK II'][7] = [
        2184413,
        17438068,
        3736841,
        6228068,
        6228068,
        137,
        1357326,
        15639780,
        'Familiarity Cavalry ATK I2',
        7,
        'Familiarity Cavalry HP II',
        7,
    ];
    researches['Familiarity Cavalry ATK II3'][8] = [
        3120590,
        24912271,
        5338344,
        8897240,
        8897240,
        177,
        1911463,
        22342500,
        'Familiarity Cavalry ATK I3',
        8,
    ];
    researches['Familiarity Cavalry ATK II3'][9] = [
        4368826,
        34877179,
        12456136,
        7473682,
        12456136,
        220,
        2627484,
        31279500,
        'Familiarity Cavalry ATK I3',
        9,
    ];
    researches['Familiarity Cavalry ATK II3'][10] = [
        5721082,
        45672497,
        16311606,
        9786964,
        16311606,
        278,
        3424446,
        40961220,
        'Familiarity Cavalry ATK I3',
        10,
    ];

    researches['Skillstone Merging Speed II'] = [];
    researches['Skillstone Merging Speed II'][1] = [
        1482874,
        889724,
        741437,
        593150,
        1211014,
        14,
        174336,
        2085300,
        'Familiar Battle Slot IV',
        1,
    ];
    researches['Skillstone Merging Speed II'][2] = [
        5190057,
        3114034,
        2595029,
        2076023,
        4238547,
        28,
        584024,
        0,
        'Familiarity Infantry ATK II',
        8,
        'Familiarity Ranged ATK II',
        8,
        'Familiarity Cavalry ATK II',
        8,
    ];
    researches['Skillstone Merging Speed II'][3] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Skillstone Merging Speed II'][4] = [
        7414367,
        44488620,
        3707184,
        2965747,
        6055066,
        66,
        880394,
        10426500,
        'Familiarity Infantry ATK II',
        10,
        'Familiarity Ranged ATK II',
        10,
        'Familiarity Cavalry ATK II',
        10,
    ];
    researches['Skillstone Merging Speed II'][5] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Skillstone Merging Speed II'][6] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Skillstone Merging Speed II'][7] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Skillstone Merging Speed II'][8] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Skillstone Merging Speed II'][9] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Skillstone Merging Speed II'][10] = [0, 0, 0, 0, 0, 0, 0, 0];

    researches['Gym Membership II'] = [];
    researches['Gym Membership II'][1] = [
        1482874,
        889724,
        741437,
        593150,
        1211014,
        14,
        174336,
        2085300,
        'Familiar Battle Slot IV',
        1,
    ];
    researches['Gym Membership II'][2] = [
        5190057,
        3114034,
        2595029,
        2076023,
        4238547,
        28,
        584024,
        0,
        'Familiarity Infantry ATK II',
        8,
        'Familiarity Ranged ATK II3',
        8,
        'Familiarity Cavalry ATK II',
        8,
    ];
    researches['Gym Membership II'][3] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Gym Membership II'][4] = [
        7414367,
        44488620,
        3707184,
        2965747,
        6055066,
        66,
        880394,
        10426500,
        'Familiarity Infantry ATK II',
        10,
        'Familiarity Ranged ATK II3',
        10,
        'Familiarity Cavalry ATK II',
        10,
    ];
    researches['Gym Membership II'][5] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Gym Membership II'][6] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Gym Membership II'][7] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Gym Membership II'][8] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Gym Membership II'][9] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Gym Membership II'][10] = [0, 0, 0, 0, 0, 0, 0, 0];

    researches['Familiar Defense'] = [];
    researches['Familiar Defense'][1] = [
        2698830,
        771095,
        771095,
        963868,
        1574318,
        15,
        249051,
        0,
        'Familiar Offense',
        1,
    ];
    researches['Familiar Defense'][2] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Defense'][3] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Defense'][4] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Defense'][5] = [
        16192976, 4626565, 4626565, 5783206, 9445903, 105, 1531661, 0,
    ];
    researches['Familiar Defense'][6] = [
        21590635, 6168753, 6168753, 7710941, 12594537, 146, 2054668, 0,
    ];
    researches['Familiar Defense'][7] = [
        28337708, 8096488, 8096488, 10120610, 16530330, 199, 2714651, 0,
    ];
    researches['Familiar Defense'][8] = [
        40482440, 11566412, 11566412, 14458015, 23614757, 257, 3822927, 0,
    ];
    researches['Familiar Defense'][9] = [
        56675416, 16192976, 16192976, 20241220, 33060660, 319, 5254968,
        62558940,
    ];
    researches['Familiar Defense'][10] = [
        74217807, 21205088, 21205088, 26506360, 43293721, 404, 6848892, 0,
    ];

    researches['Familiar Offense'] = [];
    researches['Familiar Offense'][1] = [
        2698830,
        771095,
        578321,
        1156642,
        1574318,
        15,
        249051,
        0,
        'Skillstone Merge Speed III',
        1,
        'Gym Membership II',
        1,
    ];
    researches['Familiar Offense'][2] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Offense'][3] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Offense'][4] = [
        13494147, 3855471, 2891603, 5783206, 7871586, 81, 1257706, 0,
    ];
    researches['Familiar Offense'][5] = [
        16192976, 4626565, 3469924, 6939847, 9445903, 105, 1531661, 0,
    ];
    researches['Familiar Offense'][6] = [
        21590635, 6168753, 4626565, 9253130, 12594537, 146, 2054668, 0,
    ];
    researches['Familiar Offense'][7] = [
        29337708, 8096488, 6072366, 12144732, 16530330, 199, 2714651, 0,
    ];
    researches['Familiar Offense'][8] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Offense'][9] = [
        56675416, 16192976, 12144732, 24289464, 33060660, 319, 5254968,
        62558940,
    ];
    researches['Familiar Offense'][10] = [0, 0, 0, 0, 0, 404, 6848892, 0];

    researches['Familiar Tenacity'] = [];
    researches['Familiar Tenacity'][1] = [
        2698830,
        578321,
        771095,
        1156642,
        1547318,
        15,
        249051,
        0,
        'Familiar Offense',
        1,
    ];
    researches['Familiar Tenacity'][2] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Tenacity'][3] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Tenacity'][4] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Familiar Tenacity'][5] = [
        16192976, 3469924, 4626565, 6939847, 9445903, 105, 1531661, 0,
    ];
    researches['Familiar Tenacity'][6] = [
        21590635, 4626565, 6168753, 9253130, 12594537, 146, 2054668, 0,
    ];
    researches['Familiar Tenacity'][7] = [
        28337708, 6072366, 8096488, 12144732, 16530330, 199, 2714651, 0,
    ];
    researches['Familiar Tenacity'][8] = [
        40482440, 8674809, 11566412, 17349617, 23614757, 257, 3822927, 0,
    ];
    researches['Familiar Tenacity'][9] = [
        56675416, 12144732, 16192976, 24289464, 33060660, 319, 5254968,
        81922380,
    ];
    researches['Familiar Tenacity'][10] = [
        74217807, 15903816, 21205088, 31807632, 43293721, 404, 6848892, 0,
    ];

    researches['Familiar Battle Slot IV'] = [];
    researches['Familiar Battle Slot IV'][1] = [
        34200000,
        8.550001,
        8550001,
        8550001,
        22050000,
        500,
        1819150,
        24730260,
        'Familiarity Ranged ATK II',
        7,
        'Familiarity Infantry ATK II',
        7,
        'Familiarity Cavalry ATK II',
        7,
    ];

    researches['Familiar Battle Slot III'] = [];
    researches['Familiar Battle Slot III'][1] = [
        2646000,
        25650000,
        6412501,
        6412501,
        6412501,
        0,
        909575,
        12365160,
        'Academy',
        24,
        'Familiarity Infantry DEF I',
        5,
        'Familiarity Ranged DEF I',
        5,
        'Familiarity Cavalry DEF I',
        5,
    ];

    researches['Familiar Battle Slot V'] = [];
    researches['Familiar Battle Slot V'][1] = [
        51300001,
        12825000,
        12825000,
        12825000,
        33075000,
        940,
        5154257,
        80000000,
        'Familiar Offense',
        10,
    ];

    researches['Anima Harvesting I'] = [];
    researches['Anima Harvesting I'][1] = [
        11737,
        7336,
        4402,
        11737,
        12108,
        2422,
        1558,
        19260,
        'Academy',
        15,
    ];
    researches['Anima Harvesting I'][2] = [
        41079,
        25674,
        15405,
        41079,
        42376,
        8476,
        5450,
        67380,
        'Academy',
        15,
    ];
    researches['Anima Harvesting I'][3] = [
        49881,
        31176,
        18706,
        49881,
        51456,
        10292,
        6618,
        81840,
        'Academy',
        15,
    ];
    researches['Anima Harvesting I'][4] = [
        58684,
        36677,
        22007,
        58684,
        60537,
        12108,
        7787,
        96240,
        'Academy',
        15,
    ];
    researches['Anima Harvesting I'][5] = [
        70420,
        44013,
        26408,
        70420,
        72644,
        14529,
        9343,
        115500,
        'Academy',
        15,
    ];
    researches['Anima Harvesting I2'] = [];
    researches['Anima Harvesting I2'][6] = [
        93894,
        58684,
        35210,
        93894,
        96859,
        19372,
        12458,
        153960,
        'Academy',
        15,
    ];
    researches['Anima Harvesting I2'][7] = [
        123235,
        77022,
        46213,
        123235,
        127127,
        25426,
        16351,
        202080,
        'Academy',
        15,
    ];
    researches['Anima Harvesting I2'][8] = [
        176050,
        110031,
        66019,
        176050,
        181609,
        36322,
        23359,
        288660,
        'Academy',
        17,
    ];
    researches['Anima Harvesting I2'][9] = [
        246470,
        154044,
        92426,
        246470,
        254253,
        50851,
        32702,
        404160,
        'Academy',
        19,
    ];
    researches['Anima Harvesting I2'][10] = [
        322758,
        201724,
        121035,
        322758,
        332950,
        66590,
        42824,
        529260,
        'Academy',
        22,
    ];

    researches['Merging Cost Pact 1'] = [];
    researches['Merging Cost Pact 12'] = [];
    researches['Merging Cost Pact 1'][1] = [
        20540,
        10270,
        8216,
        12324,
        16951,
        3391,
        2181,
        27000,
        'Academy',
        15,
    ];
    researches['Merging Cost Pact 1'][2] = [
        71887,
        35944,
        28755,
        43133,
        59326,
        11866,
        7630,
        94320,
        'Academy',
        15,
    ];
    researches['Merging Cost Pact 1'][3] = [
        87292,
        43646,
        34917,
        52375,
        72039,
        14408,
        9266,
        114540,
        'Academy',
        15,
    ];
    researches['Merging Cost Pact 1'][4] = [
        102696,
        51348,
        41079,
        61618,
        84751,
        16951,
        10900,
        134760,
        'Academy',
        15,
    ];
    researches['Merging Cost Pact 1'][5] = [
        123235,
        61618,
        49294,
        73941,
        101701,
        20341,
        13081,
        161700,
        'Academy',
        15,
    ];
    researches['Merging Cost Pact 12'][6] = [
        164313,
        82157,
        65726,
        98588,
        135602,
        27121,
        17441,
        215580,
        'Academy',
        15,
    ];
    researches['Merging Cost Pact 12'][7] = [
        215661,
        107831,
        86265,
        129397,
        177977,
        35596,
        22892,
        282900,
        'Academy',
        15,
    ];
    researches['Merging Cost Pact 12'][8] = [
        308087,
        154044,
        123235,
        184852,
        254253,
        50851,
        32702,
        404160,
        'Academy',
        17,
    ];
    researches['Merging Cost Pact 12'][9] = [
        431322,
        215661,
        172529,
        258793,
        355954,
        71191,
        45783,
        565800,
        'Academy',
        19,
    ];
    researches['Merging Cost Pact 12'][10] = [
        564826,
        282413,
        225931,
        338896,
        466130,
        93226,
        59953,
        740940,
        'Academy',
        22,
    ];

    researches['Food Harvesting II'] = [];
    researches['Food Harvesting II2'] = [];
    researches['Food Harvesting II'][1] = [
        29342,
        14671,
        14671,
        14671,
        24215,
        4843,
        3115,
        38520,
        'Academy',
        15,
        'Anima Harvesting I',
        1,
    ];
    researches['Food Harvesting II'][2] = [
        102696,
        51348,
        51348,
        51348,
        84751,
        16951,
        10901,
        134760,
        'Academy',
        15,
    ];
    researches['Food Harvesting II'][3] = [
        124702,
        62351,
        62351,
        62351,
        102912,
        20583,
        13236,
        163620,
        'Academy',
        15,
    ];
    researches['Food Harvesting II'][4] = [
        146708,
        73354,
        73354,
        73354,
        121073,
        24215,
        15573,
        192480,
        'Academy',
        15,
    ];
    researches['Food Harvesting II'][5] = [
        176050,
        88025,
        88025,
        88025,
        145288,
        29058,
        18687,
        230940,
        'Academy',
        15,
        'Anima Harvesting I',
        5,
    ];
    researches['Food Harvesting II2'][6] = [
        234733,
        117367,
        117367,
        117367,
        193717,
        38744,
        24915,
        307920,
        'Academy',
        15,
    ];
    researches['Food Harvesting II2'][7] = [
        308087,
        154044,
        154044,
        154044,
        254253,
        50851,
        32702,
        404160,
        'Academy',
        17,
    ];
    researches['Food Harvesting II2'][8] = [
        440124,
        220062,
        220062,
        220062,
        363218,
        72644,
        46718,
        577320,
        'Academy ',
        20,
        'Anima Harvesting I2',
        8,
    ];
    researches['Food Harvesting II2'][9] = [
        616174,
        308087,
        308087,
        308087,
        508505,
        101701,
        65404,
        808260,
        'Academy',
        24,
        'Anima Harvesting I2',
        9,
    ];
    researches['Food Harvesting II2'][10] = [
        806894,
        403447,
        403447,
        403447,
        665900,
        133180,
        85684,
        1058460,
        'Academy',
        25,
        'Anima Harvesting I2',
        10,
    ];

    researches['Gym Training I'] = [];
    researches['Gym Training I2'] = [];
    researches['Gym Training I'][1] = [
        11737,
        17605,
        17605,
        17605,
        24215,
        4843,
        3115,
        38520,
        'Academy',
        15,
        'Merging Cost Pact 1',
        1,
    ];
    researches['Gym Training I'][2] = [
        41079,
        61618,
        61618,
        61618,
        84751,
        16951,
        10901,
        134760,
        'Academy',
        15,
    ];
    researches['Gym Training I'][3] = [
        49881,
        74822,
        74822,
        74822,
        102912,
        20583,
        13236,
        163620,
        'Academy',
        15,
    ];
    researches['Gym Training I'][4] = [
        58684,
        88025,
        88025,
        88025,
        121073,
        24215,
        15573,
        192480,
        'Academy',
        15,
    ];
    researches['Gym Training I'][5] = [
        70420,
        105630,
        105630,
        105630,
        145288,
        29058,
        18687,
        230940,
        'Academy',
        15,
        'Merging Cost Pact 1',
        5,
    ];
    researches['Gym Training I2'][6] = [
        93894,
        140840,
        140840,
        140840,
        193717,
        38744,
        24915,
        307920,
        'Academy',
        15,
    ];
    researches['Gym Training I2'][7] = [
        123235,
        184852,
        184852,
        184852,
        254253,
        50851,
        32702,
        404160,
        'Academy',
        17,
    ];
    researches['Gym Training I2'][8] = [
        176050,
        264075,
        264075,
        264075,
        363218,
        72644,
        46718,
        577320,
        'Academy',
        20,
        'Merging Cost Pact 12',
        8,
    ];
    researches['Gym Training I2'][9] = [
        246470,
        369704,
        369704,
        369704,
        508505,
        101701,
        65404,
        808260,
        'Academy',
        24,
        'Merging Cost Pact 12',
        9,
    ];
    researches['Gym Training I2'][10] = [
        322758,
        484137,
        484137,
        484137,
        665900,
        133180,
        85684,
        1058460,
        'Academy',
        25,
        'Merging Cost Pact 12',
        10,
    ];

    researches['Pact 2'] = [];
    researches['Pact 2'][1] = [
        1900000,
        950000,
        950000,
        950000,
        1568000,
        313600,
        201677,
        2492280,
        'Academy',
        16,
        'Anima Harvesting I',
        3,
        'Merging Cost Pact 1',
        3,
        'Food Harvesting II',
        3,
        'Gym Training I',
        3,
    ];

    researches['Stone Harvesting II'] = [];
    researches['Stone Harvesting II2'] = [];
    researches['Stone Harvesting II'][1] = [
        41079,
        16432,
        12324,
        32863,
        33901,
        6781,
        4361,
        53940,
        'Academy',
        16,
        'Pact 2',
        1,
    ];
    researches['Stone Harvesting II'][2] = [
        143774,
        57510,
        43133,
        155019,
        118652,
        23731,
        15261,
        188640,
        'Academy',
        16,
    ];
    researches['Stone Harvesting II'][3] = [
        174583,
        69833,
        52375,
        139666,
        144077,
        28816,
        18531,
        229020,
        'Academy',
        16,
    ];
    researches['Stone Harvesting II'][4] = [
        205392,
        82157,
        61618,
        164313,
        169502,
        33901,
        21801,
        269460,
        'Academy',
        16,
    ];
    researches['Stone Harvesting II'][5] = [
        246470,
        98588,
        73941,
        197176,
        203402,
        40681,
        26162,
        323340,
        'Food Harvesting II',
        5,
        'Academy',
        16,
        'Pact 2',
        1,
    ];
    researches['Stone Harvesting II2'][6] = [
        328626,
        131451,
        98588,
        262901,
        271203,
        54241,
        34882,
        431100,
        'Academy',
        16,
    ];
    researches['Stone Harvesting II2'][7] = [
        431322,
        172529,
        129397,
        345057,
        355954,
        71191,
        45783,
        565800,
        'Academy',
        18,
    ];
    researches['Stone Harvesting II2'][8] = [
        616174,
        246470,
        184852,
        492939,
        508505,
        101701,
        65404,
        808260,
        'Academy',
        21,
        'Food Harvesting II2',
        8,
    ];
    researches['Stone Harvesting II2'][9] = [
        862643,
        345057,
        258793,
        690114,
        711907,
        142382,
        91566,
        1131600,
        'Academy',
        24,
        'Food Harvesting II2',
        9,
    ];
    researches['Stone Harvesting II2'][10] = [
        1129651,
        451861,
        338896,
        903721,
        932260,
        186452,
        119907,
        1481820,
        'Academy',
        25,
        'Food Harvesting II2',
        10,
        'Pact 2',
        1,
    ];

    researches['Timber Harvesting II'] = [];
    researches['Timber Harvesting II2'] = [];
    researches['Timber Harvesting II'][1] = [
        32863,
        20540,
        12324,
        32863,
        33901,
        6781,
        4361,
        53940,
        'Academy',
        16,
        'Pact 2',
        1,
    ];
    researches['Timber Harvesting II'][2] = [
        115019,
        71887,
        43133,
        115019,
        118652,
        23731,
        15261,
        188640,
        'Academy',
        16,
    ];
    researches['Timber Harvesting II'][3] = [
        139666,
        87292,
        52375,
        139666,
        144077,
        28816,
        18531,
        229020,
        'Academy',
        16,
    ];
    researches['Timber Harvesting II'][4] = [
        164313,
        102696,
        61618,
        164313,
        169502,
        33901,
        21801,
        269460,
        'Academy',
        16,
    ];
    researches['Timber Harvesting II'][5] = [
        197176,
        123235,
        73941,
        197176,
        203402,
        40681,
        26162,
        323340,
        'Academy',
        16,
        'Food Harvesting II',
        5,
        'Gym Training I',
        5,
    ];
    researches['Timber Harvesting II2'][6] = [
        262901,
        164313,
        98588,
        262901,
        271203,
        54241,
        34882,
        431100,
        'Academy',
        16,
    ];
    researches['Timber Harvesting II2'][7] = [
        345057,
        215661,
        129397,
        345057,
        355954,
        71191,
        45783,
        565800,
        'Academy',
        18,
    ];
    researches['Timber Harvesting II2'][8] = [
        492939,
        308087,
        184852,
        492939,
        508505,
        101701,
        65404,
        808260,
        'Academy',
        21,
        'Food Harvesting II2',
        8,
        'Gym Training I2',
        8,
    ];
    researches['Timber Harvesting II2'][9] = [
        690114,
        431322,
        258793,
        690114,
        711907,
        142382,
        91566,
        1131600,
        'Academy',
        24,
        'Food Harvesting II2',
        9,
        'Gym Training I2',
        9,
    ];
    researches['Timber Harvesting II2'][10] = [
        903721,
        564826,
        338896,
        903721,
        932260,
        186452,
        119907,
        1481820,
        'Academy',
        25,
        'Food Harvesting II2',
        10,
        'Gym Training I2',
        10,
    ];

    researches['Metal Harvesting II'] = [];
    researches['Metal Harvesting II2'] = [];
    researches['Metal Harvesting II'][1] = [
        65726,
        32863,
        8216,
        8216,
        33901,
        6781,
        4361,
        53940,
        'Academy',
        16,
        'Pact 2',
        1,
    ];
    researches['Metal Harvesting II'][2] = [
        230038,
        115019,
        28755,
        28755,
        118652,
        23731,
        15261,
        188640,
        'Academy',
        16,
    ];
    researches['Metal Harvesting II'][3] = [
        279332,
        139666,
        34917,
        34917,
        144077,
        28816,
        18531,
        229020,
        'Academy',
        16,
    ];
    researches['Metal Harvesting II'][4] = [
        328626,
        164313,
        41079,
        41079,
        169502,
        33901,
        21801,
        269460,
        'Academy',
        16,
    ];
    researches['Metal Harvesting II'][5] = [
        394351,
        197176,
        49294,
        49294,
        203402,
        40681,
        26162,
        323340,
        'Academy',
        16,
        'Gym Training I',
        5,
    ];
    researches['Metal Harvesting II2'][6] = [
        525802,
        262901,
        65726,
        65726,
        271203,
        54241,
        34882,
        431100,
        'Academy',
        16,
    ];
    researches['Metal Harvesting II2'][7] = [
        690114,
        345057,
        86265,
        86265,
        355954,
        71191,
        45783,
        565800,
        'Academy',
        18,
    ];
    researches['Metal Harvesting II2'][8] = [
        985877,
        492939,
        123235,
        123235,
        508505,
        101701,
        65404,
        808260,
        'Academy',
        21,
        'Gym Training I2',
        8,
    ];
    researches['Metal Harvesting II2'][9] = [
        1380228,
        690114,
        172529,
        172529,
        711907,
        142382,
        91566,
        1131600,
        'Academy',
        24,
        'Gym Training I2',
        9,
    ];
    researches['Metal Harvesting II2'][10] = [
        1807442,
        903721,
        225931,
        225931,
        932260,
        186452,
        119907,
        1481820,
        'Academy',
        25,
        'Gym Training I2',
        10,
    ];

    researches['Anima Storage I'] = [];
    researches['Anima Storage I2'] = [];
    researches['Anima Storage I'][1] = [
        84504,
        42252,
        10563,
        10563,
        43587,
        8718,
        5607,
        69300,
        'Academy',
        16,
        'Stone Harvesting II',
        1,
    ];
    researches['Anima Storage I'][2] = [
        295764,
        147882,
        36971,
        36971,
        152552,
        30511,
        19621,
        242520,
        'Academy',
        16,
    ];
    researches['Anima Storage I'][3] = [
        359141,
        179571,
        44893,
        44893,
        185242,
        37049,
        23826,
        294480,
        'Academy',
        16,
    ];
    researches['Anima Storage I'][4] = [
        422519,
        211260,
        52815,
        52815,
        217931,
        43587,
        28030,
        346440,
        'Academy',
        16,
    ];
    researches['Anima Storage I'][5] = [
        507023,
        253512,
        63378,
        63378,
        261517,
        52304,
        33636,
        415680,
        'Academy',
        17,
        'Stone Harvesting II',
        5,
    ];
    researches['Anima Storage I2'][6] = [
        676030,
        338015,
        84504,
        84504,
        348690,
        69738,
        44849,
        554280,
        'Academy',
        18,
    ];
    researches['Anima Storage I2'][7] = [
        887290,
        443645,
        110912,
        110912,
        457655,
        91531,
        58864,
        727440,
        'Academy',
        19,
    ];
    researches['Anima Storage I2'][8] = [
        1267557,
        633779,
        158445,
        158445,
        653793,
        130759,
        84091,
        1039200,
        'Academy',
        22,
        'Stone Harvesting II2',
        8,
        'Stone Harvesting II2',
        8,
    ];
    researches['Anima Storage I2'][9] = [
        1774579,
        887290,
        221823,
        221823,
        915309,
        183062,
        117727,
        1454880,
        'Academy',
        24,
        'Stone Harvesting II2',
        9,
        'Stone Harvesting II2',
        9,
    ];
    researches['Anima Storage I2'][10] = [
        2323853,
        1161927,
        290482,
        290482,
        1198619,
        239724,
        154167,
        1905180,
        'Academy',
        25,
        'Stone Harvesting II2',
        10,
        'Stone Harvesting II2',
        10,
    ];

    researches['Pact Merging Speed I'] = [];
    researches['Pact Merging Speed I2'] = [];
    researches['Pact Merging Speed I'][1] = [
        70420,
        28168,
        21126,
        56336,
        58115,
        11623,
        7475,
        92400,
        'Academy',
        16,
        'Timber Harvesting II',
        1,
    ];
    researches['Pact Merging Speed I'][2] = [
        246470,
        98588,
        73941,
        197176,
        203402,
        40681,
        26162,
        323340,
        'Academy',
        16,
    ];
    researches['Pact Merging Speed I'][3] = [
        299285,
        119714,
        89786,
        239428,
        246989,
        49398,
        31768,
        392583,
        'Academy',
        16,
    ];
    researches['Pact Merging Speed I'][4] = [
        352099,
        140840,
        105630,
        281680,
        290575,
        58115,
        37373,
        461880,
        'Academy',
        16,
    ];
    researches['Pact Merging Speed I'][5] = [
        422519,
        169008,
        126756,
        338015,
        348690,
        69738,
        44849,
        554280,
        'Academy',
        17,
        'Timber Harvesting II',
        5,
    ];
    researches['Pact Merging Speed I2'][6] = [
        563359,
        225344,
        169008,
        450687,
        464919,
        92984,
        59798,
        739020,
        'Academy',
        18,
    ];
    researches['Pact Merging Speed I2'][7] = [
        739408,
        295764,
        221823,
        591527,
        610206,
        122042,
        78485,
        969900,
        'Academy',
        19,
    ];
    researches['Pact Merging Speed I2'][8] = [
        1056297,
        422519,
        316890,
        845038,
        871723,
        174345,
        112121,
        1385580,
        'Academy',
        22,
        'Timber Harvesting II2',
        8,
    ];
    researches['Pact Merging Speed I2'][9] = [
        1478816,
        591527,
        443645,
        1183053,
        1220412,
        244083,
        156970,
        1939800,
        'Academy',
        24,
        'Timber Harvesting II2',
        9,
    ];
    researches['Pact Merging Speed I2'][10] = [
        1936545,
        774618,
        580964,
        1549236,
        1598159,
        319632,
        205556,
        2540220,
        'Academy',
        25,
        'Timber Harvesting II2',
        10,
    ];

    researches['Merging Cost Pact 2'] = [];
    researches['Merging Cost Pact 22'] = [];
    researches['Merging Cost Pact 2'][1] = [
        64552,
        25821,
        19366,
        51642,
        53272,
        10655,
        6852,
        84720,
        'Academy',
        17,
        'Metal Harvesting II',
        1,
    ];
    researches['Merging Cost Pact 2'][2] = [
        225931,
        90373,
        67780,
        180745,
        186452,
        37291,
        23982,
        296400,
        'Academy',
        17,
        'Merging Cost Pact 1',
        2,
    ];
    researches['Merging Cost Pact 2'][3] = [
        274344,
        109738,
        82304,
        219475,
        226406,
        45282,
        29120,
        359880,
        'Academy',
        17,
        'Merging Cost Pact 1',
        3,
    ];
    researches['Merging Cost Pact 2'][4] = [
        322758,
        129103,
        96828,
        258206,
        266360,
        53272,
        34260,
        423420,
        'Academy',
        17,
        'Merging Cost Pact 1',
        4,
    ];
    researches['Merging Cost Pact 2'][5] = [
        387309,
        154924,
        116193,
        309848,
        319632,
        63927,
        41111,
        508080,
        'Academy',
        17,
        'Metal Harvesting II',
        5,
    ];
    researches['Merging Cost Pact 22'][6] = [
        516412,
        206565,
        154924,
        413130,
        426176,
        85236,
        54815,
        677400,
        'Academy',
        17,
        'Merging Cost Pact 1',
        6,
    ];
    researches['Merging Cost Pact 22'][7] = [
        677791,
        271117,
        203338,
        542233,
        559356,
        111872,
        71944,
        889080,
        'Academy',
        17,
        'Merging Cost Pact 1',
        7,
    ];
    researches['Merging Cost Pact 22'][8] = [
        968273,
        387309,
        290482,
        774618,
        799080,
        159816,
        102778,
        1270140,
        'Academy',
        19,
        'Metal Harvesting II2',
        8,
    ];
    researches['Merging Cost Pact 22'][9] = [
        1355581,
        542233,
        406675,
        1084465,
        1118711,
        223743,
        143889,
        1778160,
        'Academy',
        21,
        'Metal Harvesting II2',
        9,
    ];
    researches['Merging Cost Pact 22'][10] = [
        1775166,
        710067,
        532550,
        1420133,
        1464979,
        292996,
        188426,
        2328540,
        'Academy',
        23,
        'Metal Harvesting II2',
        10,
    ];

    researches['Pact 3'] = [];
    researches['Pact 3'][1] = [
        4750000,
        2375000,
        2375000,
        2375000,
        3920000,
        784000,
        504192,
        6230700,
        'Academy',
        17,
        'Anima Storage I',
        5,
        'Pact Merging Speed I',
        5,
        'Merging Cost Pact 2',
        5,
    ];

    researches['Anima Harvesting II'] = [];
    researches['Anima Harvesting II'][1] = [
        205392,
        82157,
        61618,
        164313,
        169502,
        33901,
        21802,
        269460,
        'Academy',
        17,
        'Pact 3',
        1,
    ];
    researches['Anima Harvesting II'][2] = [
        718869,
        287548,
        215661,
        575095,
        593256,
        118652,
        76305,
        942960,
        'Academy',
        17,
    ];
    researches['Anima Harvesting II'][3] = [
        872912,
        349165,
        261874,
        698330,
        720383,
        144077,
        92656,
        1145040,
        'Academy',
        18,
    ];
    researches['Anima Harvesting II'][4] = [
        1026956,
        410783,
        308087,
        821565,
        847509,
        169502,
        109006,
        1347120,
        'Academy',
        19,
    ];
    researches['Anima Harvesting II'][5] = [
        1232347,
        492939,
        369704,
        985877,
        1017010,
        203402,
        130809,
        1616520,
        'Academy',
        20,
    ];
    researches['Anima Harvesting II'][6] = [
        1643129,
        657252,
        492939,
        1314503,
        1356014,
        271203,
        174411,
        2155320,
        'Academy',
        21,
        'Anima Harvesting I',
        6,
    ];
    researches['Anima Harvesting II'][7] = [
        2156606,
        862643,
        646982,
        1725285,
        1779768,
        355954,
        228914,
        2828880,
        'Academy',
        22,
        'Anima Harvesting I',
        7,
    ];
    researches['Anima Harvesting II'][8] = [
        3080866,
        1232347,
        924260,
        2464693,
        2542525,
        508505,
        327021,
        4041240,
        'Academy',
        23,
        'Anima Storage I2',
        8,
    ];
    researches['Anima Harvesting II'][9] = [
        4313212,
        1725285,
        1293964,
        3450570,
        3559535,
        711907,
        457828,
        5657760,
        'Academy',
        24,
        'Anima Harvesting I',
        9,
    ];
    researches['Anima Harvesting II'][10] = [
        5648254,
        2259302,
        1694477,
        4518603,
        4661296,
        932260,
        599538,
        7408920,
        'Academy',
        25,
        'Anima Storage I2',
        10,
        'Pact 3',
        1,
    ];

    researches['Gold Harvesting II'] = [];
    researches['Gold Harvesting II'][1] = [
        211260,
        105630,
        105630,
        35210,
        145288,
        29058,
        18687,
        230940,
        'Academy',
        17,
        'Pact 3',
        1,
    ];
    researches['Gold Harvesting II'][2] = [
        739408,
        369704,
        369704,
        123235,
        508505,
        101701,
        65405,
        808260,
        'Academy',
        17,
    ];
    researches['Gold Harvesting II'][3] = [
        897853,
        448927,
        448927,
        149643,
        617471,
        123495,
        79419,
        981480,
        'Academy',
        18,
    ];
    researches['Gold Harvesting II'][4] = [
        1056297,
        528149,
        528149,
        176050,
        726436,
        145288,
        93434,
        1154640,
        'Academy',
        19,
    ];
    researches['Gold Harvesting II'][5] = [
        1267557,
        633779,
        633779,
        211260,
        871723,
        174345,
        112122,
        1385580,
        'Academy',
        20,
    ];
    researches['Gold Harvesting II'][6] = [
        1690075,
        845038,
        845038,
        281680,
        1162298,
        232460,
        149495,
        1847460,
        'Academy',
        21,
    ];
    researches['Gold Harvesting II'][7] = [
        2218224,
        1109112,
        1109112,
        369704,
        1525515,
        305103,
        196212,
        2424780,
        'Academy',
        22,
    ];
    researches['Gold Harvesting II'][8] = [
        3168891,
        1584446,
        1584446,
        528149,
        2179307,
        435862,
        280303,
        3463920,
        'Academy',
        23,
        'Pact Merging Speed I2',
        8,
        'Merging Cost Pact 22',
        8,
    ];
    researches['Gold Harvesting II'][9] = [
        4436447,
        2218224,
        2218224,
        739408,
        3051030,
        610206,
        392425,
        4849500,
        'Academy',
        24,
        'Pact Merging Speed I2',
        9,
        'Merging Cost Pact 22',
        9,
    ];
    researches['Gold Harvesting II'][10] = [
        5809633,
        2904817,
        2904817,
        968273,
        3995397,
        799080,
        513890,
        6350520,
        'Academy',
        25,
        'Pact Merging Speed I2',
        10,
        'Merging Cost Pact 22',
        10,
    ];

    researches['Gym Membership I'] = [];
    researches['Gym Membership I'][1] = [
        387309,
        64552,
        193655,
        193655,
        266360,
        53272,
        34260,
        423420,
        'Academy',
        18,
        'Anima Harvesting II',
        1,
    ];
    researches['Gym Membership I'][2] = [
        1355581,
        225931,
        677791,
        677791,
        932260,
        186452,
        119907,
        1481820,
        'Academy',
        18,
    ];
    researches['Gym Membership I'][3] = [
        1646063,
        274344,
        823032,
        823032,
        1132029,
        226406,
        145602,
        1799340,
        'Academy',
        19,
    ];
    researches['Gym Membership I'][4] = [
        1936545,
        322758,
        968273,
        968273,
        1331799,
        266360,
        171297,
        2116860,
        'Academy',
        20,
    ];
    researches['Gym Membership I'][5] = [
        2323853,
        387309,
        1161927,
        1161927,
        1598159,
        319632,
        205556,
        2540220,
        'Academy',
        21,
    ];
    researches['Gym Membership I'][6] = [
        3098471,
        516412,
        1549236,
        1549236,
        2130878,
        426176,
        274074,
        3386940,
        'Academy',
        22,
    ];
    researches['Gym Membership I'][7] = [
        4066743,
        677791,
        2033372,
        2033372,
        2796778,
        559356,
        359723,
        4445400,
        'Academy',
        23,
    ];
    researches['Gym Membership I'][8] = [
        5809633,
        968273,
        2904817,
        2904817,
        3995397,
        799080,
        513889,
        6350520,
        'Academy',
        24,
        'Anima Harvesting II',
        8,
    ];
    researches['Gym Membership I'][9] = [
        8133485,
        1355581,
        4066743,
        4066743,
        5593555,
        1118711,
        719445,
        8890740,
        'Academy',
        25,
        'Anima Harvesting II',
        9,
    ];
    researches['Gym Membership I'][10] = [
        10650993,
        1775166,
        5325497,
        5325497,
        7324893,
        1464979,
        942131,
        11642580,
        'Academy',
        25,
        'Anima Harvesting II',
        10,
    ];

    researches['Gym Training II'] = [];
    researches['Gym Training II'][1] = [
        387309,
        193655,
        64552,
        193655,
        266360,
        53272,
        34260,
        423420,
        'Academy',
        18,
        'Gold Harvesting II',
        1,
    ];
    researches['Gym Training II'][2] = [
        1355581,
        677791,
        225931,
        677791,
        932260,
        186452,
        119907,
        1481820,
        'Academy',
        18,
    ];
    researches['Gym Training II'][3] = [
        1646063,
        823032,
        274344,
        823032,
        1132029,
        226406,
        145602,
        1799340,
        'Academy',
        19,
    ];
    researches['Gym Training II'][4] = [
        1936545,
        968273,
        322758,
        968273,
        1331799,
        266360,
        171297,
        2116860,
        'Academy',
        20,
    ];
    researches['Gym Training II'][5] = [
        2323853,
        1161927,
        387309,
        1161927,
        1598159,
        319632,
        205556,
        2540220,
        'Academy',
        21,
    ];
    researches['Gym Training II'][6] = [
        3098471,
        1549236,
        516412,
        1549236,
        2130878,
        426176,
        274074,
        3386940,
        'Academy',
        22,
        'Gym Training I2',
        6,
    ];
    researches['Gym Training II'][7] = [
        4066743,
        2033372,
        677791,
        2033372,
        2796778,
        559356,
        359723,
        4445400,
        'Academy',
        23,
        'Gym Training I2',
        7,
    ];
    researches['Gym Training II'][8] = [
        5809633,
        2904817,
        968273,
        2904817,
        3995397,
        799080,
        513889,
        6350520,
        'Academy',
        24,
        'Gold Harvesting II',
        8,
    ];
    researches['Gym Training II'][9] = [
        8133485,
        4066743,
        1355581,
        4066743,
        5593555,
        1118711,
        719445,
        8890740,
        'Academy',
        25,
        'Gold Harvesting II',
        9,
    ];
    researches['Gym Training II'][10] = [
        10650993,
        5325497,
        1775166,
        5353497,
        7324893,
        1464979,
        942131,
        11642580,
        'Academy',
        25,
        'Gold Harvesting II',
        10,
    ];

    researches['Anima Storage II'] = [];
    researches['Anima Storage II'][1] = [
        440124,
        220062,
        176050,
        264075,
        363218,
        72644,
        46718,
        577320,
        'Academy',
        19,
        'Gym Membership I',
        1,
        'Gym Training II',
        1,
    ];
    researches['Anima Storage II'][2] = [
        1540433,
        770217,
        616174,
        924260,
        1271263,
        254253,
        163510,
        2020620,
        'Academy',
        19,
    ];
    researches['Anima Storage II'][3] = [
        1870526,
        935263,
        748211,
        1122316,
        1543676,
        308736,
        198548,
        2453640,
        'Academy',
        19,
    ];
    researches['Anima Storage II'][4] = [
        2200619,
        1100310,
        880248,
        1320371,
        1816090,
        363218,
        233586,
        2886600,
        'Academy',
        20,
    ];
    researches['Anima Storage II'][5] = [
        2640742,
        1320371,
        1056297,
        1584446,
        2179307,
        435862,
        280304,
        3463920,
        'Academy',
        21,
    ];
    researches['Anima Storage II'][6] = [
        3520990,
        1760495,
        1408396,
        2112594,
        2905743,
        581149,
        373738,
        4618560,
        'Academy',
        22,
        'Anima Storage I2',
        6,
    ];
    researches['Anima Storage II'][7] = [
        4621299,
        2310650,
        1848520,
        2772779,
        3813788,
        762758,
        490530,
        6061860,
        'Academy',
        23,
        'Anima Storage I2',
        7,
    ];
    researches['Anima Storage II'][8] = [
        6601855,
        3300928,
        2640742,
        3961113,
        5448268,
        1089654,
        700759,
        8659800,
        'Academy',
        24,
        'Gym Membership I',
        8,
        'Gym Training II',
        8,
    ];
    researches['Anima Storage II'][9] = [
        9242597,
        4621299,
        3697039,
        5545558,
        7627575,
        1525515,
        981061,
        12123660,
        'Academy',
        25,
        'Gym Membership I',
        9,
        'Gym Training II',
        9,
    ];
    researches['Anima Storage II'][10] = [
        12103401,
        6051701,
        4841361,
        7262041,
        9988491,
        1997699,
        1284724,
        15876240,
        'Academy',
        25,
        'Gym Membership I',
        10,
        'Gym Training II',
        10,
    ];

    researches['Pact Merging Speed II'] = [];
    researches['Pact Merging Speed II'][1] = [
        498807,
        299285,
        249404,
        199523,
        411647,
        82330,
        52947,
        654300,
        'Academy',
        19,
        'Gym Membership I',
        1,
        'Gym Training II',
        1,
    ];
    researches['Pact Merging Speed II'][2] = [
        1745824,
        1047495,
        872912,
        698330,
        1440765,
        288153,
        185311,
        2290080,
        'Academy',
        19,
    ];
    researches['Pact Merging Speed II'][3] = [
        2119929,
        1271958,
        1059965,
        847972,
        1749500,
        349900,
        225022,
        2780760,
        'Academy',
        19,
    ];
    researches['Pact Merging Speed II'][4] = [
        2494034,
        1496421,
        1247017,
        997614,
        2058235,
        411647,
        264731,
        3271500,
        'Academy',
        20,
    ];
    researches['Pact Merging Speed II'][5] = [
        2992841,
        1795705,
        1496421,
        1197137,
        2469882,
        493977,
        317677,
        3925800,
        'Academy',
        21,
    ];
    researches['Pact Merging Speed II'][6] = [
        3990455,
        2394273,
        1955228,
        1596182,
        3293175,
        658635,
        423569,
        5234400,
        'Academy',
        22,
        'Pact Merging Speed I2',
        6,
    ];
    researches['Pact Merging Speed II'][7] = [
        5237472,
        3142483,
        2618736,
        2094989,
        4322293,
        864459,
        555935,
        6870120,
        'Academy',
        23,
        'Pact Merging Speed I2',
        7,
    ];
    researches['Pact Merging Speed II'][8] = [
        7482102,
        4489262,
        3741051,
        2992841,
        6174705,
        1234941,
        794193,
        9814440,
        'Academy',
        24,
        'Gym Membership I',
        8,
        'Gym Training II',
        8,
    ];
    researches['Pact Merging Speed II'][9] = [
        10474943,
        6284966,
        5237472,
        4189978,
        8544585,
        1728917,
        1111870,
        13740180,
        'Academy',
        25,
        'Gym Membership I',
        9,
        'Gym Training II',
        9,
    ];
    researches['Pact Merging Speed II'][10] = [
        13717187,
        8230313,
        6858594,
        5486875,
        11320289,
        2264085,
        1456020,
        17993100,
        'Academy',
        25,
        'Gym Membership I',
        10,
        'Gym Training II',
        10,
    ];

    researches['Merging Cost Pact 3'] = [];
    researches['Merging Cost Pact 3'][1] = [
        498807,
        299285,
        249404,
        199523,
        411647,
        82330,
        52947,
        654300,
        'Academy',
        19,
        'Gym Membership I',
        1,
        'Gym Training II',
        1,
    ];
    researches['Merging Cost Pact 3'][2] = [
        1745824,
        1074495,
        872912,
        698330,
        1440765,
        288153,
        185311,
        2290080,
        'Academy',
        19,
    ];
    researches['Merging Cost Pact 3'][3] = [
        2119929,
        1271958,
        1059965,
        847972,
        1749500,
        349900,
        225022,
        2780760,
        'Academy',
        19,
    ];
    researches['Merging Cost Pact 3'][4] = [
        2494034,
        1496421,
        1247017,
        997614,
        2058235,
        411647,
        264731,
        3271500,
        'Academy',
        20,
    ];
    researches['Merging Cost Pact 3'][5] = [
        2992841,
        1795705,
        1496421,
        1197137,
        2469882,
        493977,
        317677,
        3925800,
        'Academy',
        21,
    ];
    researches['Merging Cost Pact 3'][6] = [
        3990455,
        2394273,
        1995228,
        1596182,
        3293175,
        658635,
        423569,
        5234400,
        'Academy',
        22,
        'Merging Cost Pact 22',
        6,
    ];
    researches['Merging Cost Pact 3'][7] = [
        5237472,
        3142483,
        2618736,
        2094989,
        4322293,
        864458,
        555935,
        6870120,
        'Academy',
        23,
        'Merging Cost Pact 22',
        7,
    ];
    researches['Merging Cost Pact 3'][8] = [
        7482102,
        4489262,
        3741051,
        2992841,
        6174704,
        1234941,
        794193,
        9814440,
        'Academy',
        24,
        'Gym Membership I',
        8,
        'Gym Training II',
        8,
        'Merging Cost Pact 22',
        8,
    ];
    researches['Merging Cost Pact 3'][9] = [
        10474943,
        6284966,
        5237472,
        4189978,
        8644585,
        1728917,
        1111870,
        13740180,
        'Academy',
        25,
        'Gym Membership I',
        9,
        'Gym Training II',
        9,
        'Merging Cost Pact 22',
        9,
    ];
    researches['Merging Cost Pact 3'][10] = [
        13717187,
        8230313,
        6858594,
        5486875,
        11320289,
        2264058,
        1456020,
        17993100,
        'Academy',
        25,
        'Gym Membership I',
        10,
        'Gym Training II',
        10,
        'Merging Cost Pact 22',
        10,
    ];

    researches['Pact 4'] = [];
    researches['Pact 4'][1] = [
        17100000,
        8550000,
        8550000,
        8550000,
        14112000,
        2822400,
        1815092,
        22430340,
        'Academy',
        25,
        'Anima Storage II',
        10,
        'Pact Merging Speed II',
        10,
        'Merging Cost Pact 3',
        10,
    ];

    researches['Skillstone Merging Speed I'] = [];
    researches['Skillstone Merging Speed I'][1] = [
        2112594,
        352099,
        1056297,
        1056297,
        1452872,
        290575,
        186869,
        2309280,
        'Academy',
        25,
        'Pact 4',
        1,
    ];
    researches['Skillstone Merging Speed I'][2] = [
        7394078,
        1232347,
        3697039,
        3697039,
        5085050,
        1017010,
        654042,
        8082480,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][3] = [
        8978523,
        1489262,
        1489262,
        4489262,
        6174704,
        1234941,
        794192,
        9814440,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][4] = [
        10562968,
        1760495,
        5281484,
        5281484,
        7264357,
        1452872,
        934345,
        11546400,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][5] = [
        12675561,
        2112594,
        6337781,
        6337781,
        8717228,
        1743446,
        1121213,
        13855620,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][6] = [
        16900748,
        2816792,
        8450374,
        8450374,
        11622971,
        2324595,
        1494952,
        18474180,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][7] = [
        22182232,
        3697039,
        11091116,
        11091116,
        15255149,
        3051030,
        1962123,
        24247320,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][8] = [
        31688903,
        5281484,
        15844452,
        15844452,
        21793070,
        4358614,
        2803034,
        34639080,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][9] = [
        44364464,
        7394078,
        22182232,
        22182232,
        30510298,
        6102060,
        3924246,
        48494640,
        'Academy',
        25,
    ];
    researches['Skillstone Merging Speed I'][10] = [
        58096322,
        9682721,
        29048161,
        29048161,
        39953962,
        7990793,
        5138895,
        63504900,
        'Academy',
        25,
    ];

    researches['Durable Wards'] = [];
    researches['Durable Wards'][1] = [
        2535113,
        1267557,
        1267557,
        422519,
        1743446,
        348690,
        224243,
        2771160,
        'Academy',
        25,
        'Pact 4',
        1,
    ];
    researches['Durable Wards'][2] = [
        8872893,
        4436447,
        4436447,
        1478816,
        6102060,
        1220412,
        784850,
        9698940,
        'Academy',
        25,
    ];
    researches['Durable Wards'][3] = [
        10774227,
        5387114,
        5387114,
        1795705,
        7409644,
        1481929,
        953031,
        11777280,
        'Academy',
        25,
    ];
    researches['Durable Wards'][4] = [
        12675561,
        6337781,
        6337781,
        2112594,
        8717228,
        1743446,
        1121213,
        13855620,
        'Academy',
        25,
    ];
    researches['Durable Wards'][5] = [
        15210674,
        7605337,
        7605337,
        2535113,
        10460674,
        2092135,
        1345456,
        16626780,
        'Academy',
        25,
    ];
    researches['Durable Wards'][6] = [
        20280898,
        10140449,
        10140449,
        3380150,
        13947565,
        2789513,
        1793942,
        22168980,
        'Academy',
        25,
    ];
    researches['Durable Wards'][7] = [
        26618679,
        13309340,
        13309340,
        4436447,
        18306179,
        3661236,
        2354548,
        29096820,
        'Academy',
        25,
    ];
    researches['Durable Wards'][8] = [
        38026683,
        19013342,
        19013342,
        6337781,
        26151684,
        5230337,
        3363640,
        41566860,
        'Academy',
        25,
    ];
    researches['Durable Wards'][9] = [
        53237357,
        26618679,
        26618679,
        8872893,
        36612358,
        7322472,
        4709097,
        58193580,
        'Academy',
        25,
    ];
    researches['Durable Wards'][10] = [
        53237357,
        26618679,
        26618679,
        8872893,
        36612358,
        7322472,
        4709097,
        58193580,
        'Academy',
        25,
    ];

    researches['Merging Cost Pact 4'] = [];
    researches['Merging Cost Pact 4'][1] = [
        821565,
        1232347,
        1232347,
        1232347,
        1695017,
        339004,
        218014,
        2694180,
        'Academy',
        25,
        'Pact 4',
        1,
    ];
    researches['Merging Cost Pact 4'][2] = [
        2875475,
        4313212,
        4313212,
        4313212,
        5932558,
        1186512,
        763048,
        9429540,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][3] = [
        3491648,
        5237472,
        5237472,
        5237472,
        7203821,
        1440765,
        926559,
        11450160,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][4] = [
        4107821,
        6161732,
        6161732,
        6161732,
        8475083,
        1695017,
        1090068,
        13470780,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][5] = [
        4929385,
        7349078,
        7394078,
        7394078,
        10170100,
        2034020,
        1308082,
        16164900,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][6] = [
        6572514,
        9858770,
        9858770,
        9858770,
        13560133,
        2712027,
        1744110,
        21553200,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][7] = [
        8626424,
        12939636,
        12939636,
        12939636,
        17797674,
        3559535,
        2289144,
        28288560,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][8] = [
        12323463,
        18485194,
        18485194,
        18485194,
        25425249,
        5085050,
        3270206,
        40412220,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][9] = [
        17252847,
        25879371,
        25879371,
        25879371,
        35595348,
        7119070,
        4578288,
        56577120,
        'Academy',
        25,
    ];
    researches['Merging Cost Pact 4'][10] = [
        22593014,
        33889521,
        33889521,
        33889521,
        46612955,
        9322591,
        5995377,
        74089080,
        'Academy',
        25,
    ];

    researches['Skill EXP Boost'] = [];
    researches['Skill EXP Boost'][1] = [
        3168891,
        1584446,
        528149,
        1584446,
        2179307,
        435862,
        280304,
        3463920,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        1,
        'Durable Wards',
        1,
        'Merging Cost Pact 4',
        1,
    ];
    researches['Skill EXP Boost'][2] = [
        11091116,
        5545558,
        1848520,
        5545558,
        7627575,
        1525515,
        981062,
        12123660,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        2,
        'Durable Wards',
        2,
        'Merging Cost Pact 4',
        2,
    ];
    researches['Skill EXP Boost'][3] = [
        13467784,
        6733892,
        2244631,
        6733892,
        9262055,
        1852411,
        1191289,
        14721600,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        3,
        'Durable Wards',
        3,
        'Merging Cost Pact 4',
        3,
    ];
    researches['Skill EXP Boost'][4] = [
        15844452,
        7922226,
        2640742,
        7922226,
        10896535,
        2179307,
        1401517,
        17319540,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        4,
        'Durable Wards',
        4,
        'Merging Cost Pact 4',
        4,
    ];
    researches['Skill EXP Boost'][5] = [
        20597787,
        10298893,
        3432964,
        10298893,
        14165495,
        2833099,
        1821972,
        18219720,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        5,
        'Durable Wards',
        5,
        'Merging Cost Pact 4',
        5,
    ];
    researches['Skill EXP Boost'][6] = [
        25351122,
        12675561,
        4225187,
        12675561,
        17434456,
        3486892,
        2242427,
        22424270,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        6,
        'Durable Wards',
        6,
        'Merging Cost Pact 4',
        6,
    ];
    researches['Skill EXP Boost'][7] = [
        33273348,
        16636674,
        5545558,
        16636674,
        22882724,
        4576545,
        2943185,
        29431850,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        7,
        'Durable Wards',
        7,
        'Merging Cost Pact 4',
        7,
    ];
    researches['Skill EXP Boost'][8] = [
        47533354,
        23766677,
        7922226,
        23766677,
        32689605,
        6537921,
        4204550,
        42045500,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        8,
        'Durable Wards',
        8,
        'Merging Cost Pact 4',
        8,
    ];
    researches['Skill EXP Boost'][9] = [
        66546696,
        33273348,
        11091116,
        33273348,
        45765447,
        9153090,
        5886370,
        72741960,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        9,
        'Durable Wards',
        9,
        'Merging Cost Pact 4',
        9,
    ];
    researches['Skill EXP Boost'][10] = [
        87144482,
        43572241,
        14524081,
        43572241,
        59930942,
        11968189,
        7708343,
        95257380,
        'Academy',
        25,
        'Skillstone Merging Speed I',
        10,
        'Durable Wards',
        10,
        'Merging Cost Pact 4',
        10,
    ];
}

function loadT5() {
    researches['Furious Defense I'] = [];
    researches['Furious Defense I'][1] = [
        279026, 139513, 34879, 34879, 127087, 0, 18294, 180720,
    ];
    researches['Furious Defense I'][2] = [
        976588, 488294, 122074, 122074, 444803, 0, 61281, 632340,
    ];
    researches['Furious Defense I'][3] = [
        1185857, 592929, 148233, 148233, 540117, 0, 76831, 767820,
    ];
    researches['Furious Defense I'][4] = [
        1395126, 697563, 174391, 174391, 635432, 0, 92380, 903360,
    ];
    researches['Furious Defense I'][5] = [
        1674151, 837076, 209269, 209269, 762519, 0, 113417, 1084020,
    ];
    researches['Furious Defense I'][6] = [
        2232201, 1116101, 279026, 279026, 1016691, 0, 150917, 1445340,
    ];
    researches['Furious Defense I'][7] = [
        2929764, 1464882, 366221, 366221, 1334407, 0, 199394, 1896960,
    ];
    researches['Furious Defense I'][8] = [
        4185377, 2092689, 523173, 523173, 1906296, 0, 280798, 2709960,
    ];
    researches['Furious Defense I'][9] = [
        5859528, 2929764, 732441, 732441, 2668814, 0, 385983, 3793920,
    ];
    researches['Furious Defense I'][10] = [
        7673191, 3836596, 959149, 959149, 3494875, 0, 503058, 4968240,
    ];

    researches['Furious Durability I'] = [];
    researches['Furious Durability I'][1] = [
        174391,
        87196,
        69757,
        104635,
        127087,
        0,
        18294,
        180720,
        'Destroyer',
        1,
    ];
    researches['Furious Durability I'][2] = [
        574391, 187196, 169757, 204635, 327087, 0, 61281, 632340,
    ];
    researches['Furious Durability I'][3] = [
        741161, 370581, 296465, 444697, 540117, 0, 76831, 767820,
    ];
    researches['Furious Durability I'][4] = [
        871954, 435977, 348782, 523173, 635432, 0, 92380, 903360,
    ];
    researches['Furious Durability I'][5] = [
        1046345, 523173, 418538, 627807, 762519, 0, 113417, 1084020,
    ];
    researches['Furious Durability I'][6] = [
        1395126, 697563, 558051, 837076, 1016691, 0, 150917, 1445340,
    ];
    researches['Furious Durability I'][7] = [
        1831103, 915552, 732441, 1098662, 1334407, 0, 199394, 1896960,
    ];
    researches['Furious Durability I'][8] = [
        2615861, 1307931, 1046345, 1569517, 1906296, 0, 280798, 2709960,
    ];
    researches['Furious Durability I'][9] = [
        3662205, 1831103, 1464882, 2197323, 2668814, 0, 385983, 3793920,
    ];
    researches['Furious Durability I'][10] = [
        4795745, 2397873, 1918298, 2877447, 3494875, 0, 503058, 4968240,
    ];

    researches['Furious Offense I'] = [];
    researches['Furious Offense I'][1] = [
        226708,
        90684,
        68013,
        181367,
        165213,
        0,
        32013,
        316200,
        'Furious Defense I',
        1,
        'Furious Durability I',
        1,
    ];
    researches['Furious Offense I'][2] = [
        793478, 317392, 238044, 634783, 578243, 0, 107243, 1106580,
    ];
    researches['Furious Offense I'][3] = [
        963509, 385404, 289053, 770807, 702152, 0, 134454, 1343700,
    ];
    researches['Furious Offense I'][4] = [
        1133540, 453416, 340062, 906832, 826062, 0, 161665, 1580820,
    ];
    researches['Furious Offense I'][5] = [
        1360248,
        544099,
        408075,
        1088198,
        991274,
        0,
        198479,
        1896960,
        'Furious Defense I',
        5,
        'Furious Durability I',
        5,
    ];
    researches['Furious Offense I'][6] = [
        1813664, 725466, 544099, 1450931, 1321698, 0, 264106, 2529300,
    ];
    researches['Furious Offense I'][7] = [
        2380433, 952174, 714130, 1904347, 1734729, 0, 348939, 3319680,
    ];
    researches['Furious Offense I'][8] = [
        3400619,
        1360248,
        1020186,
        2720495,
        2478184,
        0,
        491397,
        4742400,
        'Furious Defense I',
        8,
        'Furious Durability I',
        8,
    ];
    researches['Furious Offense I'][9] = [
        4760866,
        1904347,
        1428260,
        3808693,
        3469457,
        0,
        675470,
        6639360,
        'Furious Defense I',
        9,
        'Furious Durability I',
        9,
    ];
    researches['Furious Offense I'][10] = [
        6234468,
        2493787,
        1870341,
        4987574,
        4543337,
        0,
        880352,
        8694360,
        'Furious Defense I',
        10,
        'Furious Durability I',
        10,
    ];

    researches['Infantry-Ranged Counter Boost'] = [];
    researches['Infantry-Ranged Counter Boost'][1] = [
        313904,
        125562,
        219733,
        125562,
        228756,
        17,
        54880,
        542040,
        'Furious Offense I',
        5,
    ];
    researches['Infantry-Ranged Counter Boost'][2] = [
        1098662, 439465, 769063, 439465, 800644, 39, 183845, 1896960,
    ];
    researches['Infantry-Ranged Counter Boost'][3] = [
        1334089, 533636, 933863, 533636, 972211, 64, 230492, 2303460,
    ];
    researches['Infantry-Ranged Counter Boost'][4] = [
        1569517, 627807, 1098662, 627807, 1143778, 92, 277139, 2709960,
    ];
    researches['Infantry-Ranged Counter Boost'][5] = [
        1883420, 753368, 1318394, 753368, 1372533, 125, 340251, 3251940,
    ];
    researches['Infantry-Ranged Counter Boost'][6] = [
        2511226, 1004491, 1757859, 1004491, 1830044, 169, 452752, 4335900,
    ];
    researches['Infantry-Ranged Counter Boost'][7] = [
        3295985, 1318394, 2307189, 1318394, 2401932, 230, 598182, 5690880,
    ];
    researches['Infantry-Ranged Counter Boost'][8] = [
        4708549,
        1883420,
        3295985,
        1883420,
        3431332,
        298,
        842394,
        8129820,
        'Furious Offense I',
        8,
    ];
    researches['Infantry-Ranged Counter Boost'][9] = [
        6591969, 2636788, 4614378, 2636788, 4803864, 370, 1157949, 11381760,
    ];
    researches['Infantry-Ranged Counter Boost'][10] = [
        8632340,
        3452936,
        6042638,
        3452936,
        6290774,
        468,
        1509175,
        14904660,
        'Furious Offense I',
        10,
    ];

    researches['Ranged-Cavalry Counter Boost'] = [];
    researches['Ranged-Cavalry Counter Boost'][1] = [
        313904,
        156952,
        219733,
        94171,
        228756,
        17,
        54880,
        542040,
        'Furious Offense I',
        5,
    ];
    researches['Ranged-Cavalry Counter Boost'][2] = [
        1098662, 549331, 769063, 329599, 800644, 39, 183845, 1896960,
    ];
    researches['Ranged-Cavalry Counter Boost'][3] = [
        1334089, 667045, 933863, 400227, 972211, 64, 230492, 2303460,
    ];
    researches['Ranged-Cavalry Counter Boost'][4] = [
        1569517, 784759, 1098662, 470855, 1143778, 92, 277139, 2709960,
    ];
    researches['Ranged-Cavalry Counter Boost'][5] = [
        1890000, 941710, 1318394, 565026, 1372533, 125, 340251, 3251940,
    ];
    researches['Ranged-Cavalry Counter Boost'][6] = [
        2511226, 1255613, 1757859, 753368, 1830044, 169, 452752, 4335900,
    ];
    researches['Ranged-Cavalry Counter Boost'][7] = [
        3295985, 1647993, 2307189, 988796, 2401932, 230, 598182, 5690880,
    ];
    researches['Ranged-Cavalry Counter Boost'][8] = [
        4708549,
        2354275,
        3295985,
        1412565,
        3431332,
        298,
        842394,
        8129820,
        'Furious Offense I',
        8,
    ];
    researches['Ranged-Cavalry Counter Boost'][9] = [
        6591969, 3295985, 4614378, 1977591, 4803864, 370, 1157949, 11381760,
    ];
    researches['Ranged-Cavalry Counter Boost'][10] = [
        8632340,
        4316170,
        6042638,
        2589702,
        6290774,
        468,
        1509175,
        14904660,
        'Furious Offense I',
        10,
    ];

    researches['Cavalry-Infantry Counter Boost'] = [];
    researches['Cavalry-Infantry Counter Boost'][1] = [
        313904,
        94171,
        251123,
        125562,
        228756,
        17,
        54880,
        542040,
        'Furious Offense I',
        5,
    ];
    researches['Cavalry-Infantry Counter Boost'][2] = [
        1098662, 329599, 878930, 439465, 800644, 39, 183845, 1896960,
    ];
    researches['Cavalry-Infantry Counter Boost'][3] = [
        1334089, 400227, 1067272, 533636, 972211, 64, 230492, 2303460,
    ];
    researches['Cavalry-Infantry Counter Boost'][4] = [
        1569517, 470855, 1255613, 627807, 1143778, 92, 277139, 2709960,
    ];
    researches['Cavalry-Infantry Counter Boost'][5] = [
        1969517, 570855, 1655613, 827807, 1843778, 125, 340251, 3251940,
    ];
    researches['Cavalry-Infantry Counter Boost'][6] = [
        2769517, 770855, 2155613, 1027807, 2143778, 169, 452752, 4335900,
    ];
    researches['Cavalry-Infantry Counter Boost'][7] = [
        3295985, 988796, 2636788, 1318394, 2401932, 230, 598182, 5690880,
    ];
    researches['Cavalry-Infantry Counter Boost'][8] = [
        4708549,
        1412565,
        3766839,
        1883420,
        3431332,
        298,
        842394,
        8129820,
        'Furious Offense I',
        8,
    ];
    researches['Cavalry-Infantry Counter Boost'][9] = [
        0, 0, 0, 0, 0, 370, 1157949, 11381760,
    ];
    researches['Cavalry-Infantry Counter Boost'][10] = [
        0,
        0,
        0,
        0,
        0,
        468,
        1509175,
        14904660,
        'Furious Offense I',
        10,
    ];

    researches['Lunar Foundry B'] = [];
    researches['Lunar Foundry B'][1] = [600, 528, 432, 720, 0, 0, 12, 120];
    researches['Lunar Foundry B'][2] = [
        75000, 66000, 54000, 90000, 0, 0, 108, 30000,
    ];
    researches['Lunar Foundry B'][3] = [
        300000, 264000, 216000, 360000, 0, 0, 162, 240000,
    ];
    researches['Lunar Foundry B'][4] = [
        450000, 396000, 324000, 540000, 0, 0, 226, 384000,
    ];
    researches['Lunar Foundry B'][5] = [
        675000, 594000, 486000, 810000, 0, 0, 318, 614400,
    ];
    researches['Lunar Foundry B'][6] = [
        945000, 831600, 680400, 1134000, 0, 0, 444, 737280,
    ];
    researches['Lunar Foundry B'][7] = [
        1134000, 997920, 816480, 1360800, 0, 0, 623, 884736,
    ];
    researches['Lunar Foundry B'][8] = [
        1304100, 1147608, 938952, 1564920, 0, 0, 871, 1017447,
    ];
    researches['Lunar Foundry B'][9] = [
        1434510, 1262368, 1032847, 1721412, 0, 0, 1220, 1119192,
    ];
    researches['Lunar Foundry B'][10] = [
        1506235, 1325487, 1084489, 1807482, 0, 0, 1707, 1175151,
    ];
    researches['Lunar Foundry B'][11] = [
        1581547, 1391761, 1138714, 1897856, 0, 0, 2391, 1233909,
    ];
    researches['Lunar Foundry B'][12] = [
        1660624, 1461349, 1195649, 1992749, 0, 0, 3347, 1295604,
    ];
    researches['Lunar Foundry B'][13] = [
        1743655, 1534417, 1255432, 2092387, 0, 0, 4686, 1360384,
    ];
    researches['Lunar Foundry B'][14] = [
        1830838, 1611138, 1318203, 2197006, 0, 0, 6561, 1428403,
    ];
    researches['Lunar Foundry B'][15] = [
        1922380, 1691694, 1384114, 2306856, 0, 0, 9184, 1499824,
    ];
    researches['Lunar Foundry B'][16] = [
        2018499, 1776279, 1453319, 2422199, 0, 0, 12858, 1574815,
    ];
    researches['Lunar Foundry B'][17] = [
        2119424, 1865093, 1525985, 2543309, 0, 0, 18002, 1653555,
    ];
    researches['Lunar Foundry B'][18] = [
        2225395, 1958348, 1602285, 2670475, 0, 0, 25202, 1736233,
    ];
    researches['Lunar Foundry B'][19] = [
        2336665, 2056265, 1682399, 2803998, 0, 0, 35282, 1823045,
    ];
    researches['Lunar Foundry B'][20] = [
        2453498, 2159079, 1766519, 2944198, 0, 0, 49396, 1914197,
    ];
    researches['Lunar Foundry B'][21] = [
        2698848, 2374986, 1943171, 3238618, 0, 0, 69155, 2105617,
    ];
    researches['Lunar Foundry B'][22] = [
        3238618, 2849984, 2331805, 3886342, 0, 0, 96816, 2526740,
    ];
    researches['Lunar Foundry B'][23] = [
        4857927, 4274976, 3497708, 5829513, 0, 0, 135543, 3790110,
    ];
    researches['Lunar Foundry B'][24] = [
        8258477, 7267460, 5946103, 9910172, 0, 0, 189759, 6822197,
    ];
    researches['Lunar Foundry B'][25] = [
        16516954, 14534920, 11892207, 19820345, 0, 0, 322591, 17055491,
    ];

    researches['Quick Maneuvers III'] = [];
    researches['Quick Maneuvers III'][1] = [
        12531,
        10443,
        10443,
        7658,
        12234,
        1,
        3423,
        32820,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][2] = [
        43858,
        36546,
        36546,
        26802,
        42824,
        1,
        11456,
        114840,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][3] = [
        53256,
        44380,
        44380,
        32526,
        52000,
        2,
        14373,
        139440,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][4] = [
        62654,
        52212,
        52212,
        38289,
        61177,
        2,
        17283,
        164040,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][5] = [
        75185,
        62654,
        62654,
        45946,
        73412,
        3,
        21047,
        196860,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][6] = [
        100246,
        83539,
        83539,
        61262,
        97883,
        4,
        28234,
        262500,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][7] = [
        131573,
        109644,
        109644,
        80406,
        128471,
        5,
        37303,
        344520,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][8] = [
        187961,
        156634,
        156634,
        114865,
        183530,
        6,
        52532,
        492120,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][9] = [
        263145,
        219288,
        219288,
        160811,
        256941,
        8,
        72211,
        688980,
        'Academy',
        25,
    ];
    researches['Quick Maneuvers III'][10] = [
        344595,
        287163,
        287163,
        210586,
        336471,
        10,
        94113,
        902220,
        'Academy',
        25,
    ];

    researches['Ration Run IV'] = [];
    researches['Ration Run IV'][1] = [
        43510,
        21755,
        21755,
        21755,
        30589,
        1,
        7530,
        72180,
        'Academy',
        25,
        'Quick Maneuvers III',
        1,
    ];
    researches['Ration Run IV'][2] = [
        152283,
        76142,
        76142,
        76142,
        107059,
        2,
        25222,
        252660,
        'Academy',
        25,
    ];
    researches['Ration Run IV'][3] = [
        184916,
        92485,
        92485,
        92485,
        130000,
        3,
        31622,
        306780,
        'Academy',
        25,
        'Quick Maneuvers III',
        3,
    ];
    researches['Ration Run IV'][4] = [
        217548,
        108774,
        108774,
        108774,
        152941,
        5,
        38022,
        360900,
        'Academy',
        25,
    ];
    researches['Ration Run IV'][5] = [
        261057,
        130529,
        130529,
        130529,
        183530,
        7,
        46304,
        433080,
        'Academy',
        25,
    ];
    researches['Ration Run IV'][6] = [
        348076,
        174038,
        174038,
        174038,
        244706,
        9,
        62114,
        577440,
        'Academy',
        25,
    ];
    researches['Ration Run IV'][7] = [
        456849,
        228425,
        228425,
        228425,
        321176,
        12,
        82067,
        757860,
        'Academy',
        25,
    ];
    researches['Ration Run IV'][8] = [
        652642,
        326321,
        326321,
        326321,
        458823,
        15,
        115571,
        1082640,
        'Academy',
        25,
        'Quick Maneuvers III',
        8,
    ];
    researches['Ration Run IV'][9] = [
        913698,
        456849,
        456849,
        456849,
        642352,
        19,
        158863,
        1515660,
        'Academy',
        25,
        'Quick Maneuvers III',
        9,
    ];
    researches['Ration Run IV'][10] = [
        1196510,
        598255,
        598255,
        598255,
        598255,
        24,
        207050,
        1984800,
        'Academy',
        25,
        'Quick Maneuvers III',
        10,
    ];

    researches['Central Command II'] = [];
    researches['Central Command II'][1] = [
        637224,
        477918,
        477918,
        318612,
        530713,
        13,
        106143,
        1036560,
        'Academy',
        25,
        'Central Command I',
        3,
        'Quick Maneuvers III',
        1,
    ];
    researches['Central Command II'][2] = [
        1309849,
        982387,
        982387,
        654925,
        1090010,
        35,
        218182,
        2130720,
        'Academy',
        25,
    ];
    researches['Central Command II'][3] = [
        1982474,
        1486856,
        1486856,
        991237,
        1651106,
        63,
        330221,
        3224820,
        'Academy',
        25,
    ];
    researches['Central Command II'][4] = [
        3610934,
        2708201,
        2708201,
        1805467,
        3007372,
        113,
        601474,
        5873820,
        'Academy',
        25,
    ];
    researches['Central Command II'][5] = [
        6867855,
        5150891,
        5150891,
        3433928,
        5719902,
        180,
        1143980,
        11171700,
        'Academy',
        25,
    ];

    researches['Forced March III'] = [];
    researches['Forced March III'][1] = [
        34808,
        21755,
        13053,
        34808,
        30589,
        1,
        7530,
        72180,
        'Quick Maneuvers III',
        1,
    ];
    researches['Forced March III'][2] = [
        121827, 76142, 45685, 121827, 107059, 2, 25222, 252660,
    ];
    researches['Forced March III'][3] = [
        147933, 92458, 55475, 147933, 130000, 3, 31622, 306780,
    ];
    researches['Forced March III'][4] = [
        174038, 108774, 65265, 174038, 152941, 5, 38022, 360900,
    ];
    researches['Forced March III'][5] = [
        208846, 130529, 78317, 208846, 183530, 7, 46304, 433080,
    ];
    researches['Forced March III'][6] = [
        278461, 174038, 104423, 278461, 244706, 9, 62114, 577440,
    ];
    researches['Forced March III'][7] = [
        365480, 228425, 137055, 365480, 321176, 12, 82067, 757860,
    ];
    researches['Forced March III'][8] = [
        522114,
        326321,
        195793,
        522114,
        458823,
        15,
        115571,
        1082640,
        'Quick Maneuvers III',
        8,
    ];
    researches['Forced March III'][9] = [
        730959,
        456849,
        274110,
        730959,
        642352,
        19,
        158863,
        1515660,
        'Quick Maneuvers III',
        9,
    ];
    researches['Forced March III'][10] = [
        957208,
        598255,
        358953,
        957208,
        841176,
        24,
        207050,
        1984800,
        'Quick Maneuvers III',
        10,
    ];

    researches['Field Triage II'] = [];
    researches['Field Triage II'][1] = [
        90500,
        16969,
        28282,
        22625,
        39765,
        2,
        9583,
        91860,
        'Forced March III',
        1,
        'Ration Run IV',
        1,
    ];
    researches['Field Triage II'][2] = [
        316749, 59391, 98984, 79188, 139177, 4, 32101, 321540,
    ];
    researches['Field Triage II'][3] = [
        384624,
        72117,
        120195,
        96156,
        169000,
        6,
        40246,
        390420,
        'Forced March III',
        3,
        'Ration Run IV',
        3,
    ];
    researches['Field Triage II'][4] = [
        452498,
        84844,
        141406,
        113125,
        198824,
        8,
        48392,
        459300,
        'Forced March III',
        4,
        'Ration Run IV',
        4,
    ];
    researches['Field Triage II'][5] = [
        542998, 101813, 169687, 135750, 238588, 10, 58932, 551160,
    ];
    researches['Field Triage II'][6] = [
        723997, 135750, 226249, 181000, 318118, 14, 79055, 734880,
    ];
    researches['Field Triage II'][7] = [
        950246, 178172, 296952, 237562, 417529, 19, 104449, 964500,
    ];
    researches['Field Triage II'][8] = [
        1357494,
        254531,
        424217,
        339374,
        596470,
        25,
        147090,
        1377900,
        'Forced March III',
        8,
        'Ration Run IV',
        8,
    ];
    researches['Field Triage II'][9] = [
        1900492,
        356343,
        593904,
        475123,
        835058,
        31,
        202190,
        1929000,
        'Forced March III',
        9,
        'Ration Run IV',
        9,
    ];
    researches['Field Triage II'][10] = [
        2488739,
        466639,
        777731,
        622185,
        1093528,
        39,
        263517,
        2526060,
        'Forced March III',
        10,
        'Ration Run IV',
        10,
    ];

    researches['Bigger Bags III'] = [];
    researches['Bigger Bags III'][1] = [
        67875,
        22625,
        22625,
        33938,
        39765,
        2,
        9583,
        91860,
        'Forced March III',
        1,
        'Ration Run IV',
        1,
    ];
    researches['Bigger Bags III'][2] = [
        237562, 79188, 79188, 118781, 139177, 4, 32101, 321540,
    ];
    researches['Bigger Bags III'][3] = [
        288468,
        96156,
        96156,
        144234,
        169000,
        6,
        40246,
        390420,
        'Forced March III',
        3,
        'Ration Run IV',
        3,
    ];
    researches['Bigger Bags III'][4] = [
        339374,
        113125,
        113125,
        169687,
        198824,
        8,
        48392,
        459300,
        'Forced March III',
        4,
        'Ration Run IV',
        4,
    ];
    researches['Bigger Bags III'][5] = [
        407249, 135750, 135750, 203625, 238588, 10, 58932, 551160,
    ];
    researches['Bigger Bags III'][6] = [
        542998, 181000, 181000, 271499, 318118, 14, 79055, 734880,
    ];
    researches['Bigger Bags III'][7] = [
        712685, 237562, 237562, 356343, 417529, 19, 104449, 964500,
    ];
    researches['Bigger Bags III'][8] = [
        1018121,
        339374,
        339374,
        509061,
        596470,
        25,
        147090,
        1377900,
        'Forced March III',
        8,
        'Ration Run IV',
        8,
    ];
    researches['Bigger Bags III'][9] = [
        1425369,
        475123,
        475123,
        712685,
        835058,
        31,
        202190,
        1929000,
        'Forced March III',
        9,
        'Ration Run IV',
        9,
    ];
    researches['Bigger Bags III'][10] = [
        1866555,
        622185,
        622185,
        933278,
        1093528,
        39,
        263517,
        2526060,
        'Forced March III',
        10,
        'Ration Run IV',
        10,
    ];

    researches['Bigger Infirmary III'] = [];
    researches['Bigger Infirmary III'][1] = [
        59173,
        36984,
        22290,
        59173,
        52000,
        3,
        12321,
        118140,
        'Academy',
        25,
        'Field Triage II',
        1,
    ];
    researches['Bigger Infirmary III'][2] = [
        207105,
        129441,
        77665,
        207105,
        182000,
        5,
        41273,
        413400,
        'Academy',
        25,
    ];
    researches['Bigger Infirmary III'][3] = [
        251485,
        157178,
        94307,
        251485,
        221000,
        8,
        51745,
        501960,
        'Academy',
        25,
        'Field Triage II',
        3,
    ];
    researches['Bigger Infirmary III'][4] = [
        295865,
        184916,
        110950,
        295865,
        260000,
        11,
        62217,
        590520,
        'Academy',
        25,
        'Heroic Fighter',
        1,
        'Destroyer',
        1,
        'Field Triage II',
        3,
    ];
    researches['Bigger Infirmary III'][5] = [
        355037,
        221899,
        133139,
        355037,
        312000,
        15,
        75770,
        708660,
        'Academy',
        25,
    ];
    researches['Bigger Infirmary III'][6] = [
        473383,
        295865,
        177519,
        473383,
        416000,
        21,
        101643,
        944820,
        'Academy',
        25,
    ];
    researches['Bigger Infirmary III'][7] = [
        621315,
        388322,
        232993,
        621315,
        546000,
        29,
        134291,
        1240080,
        'Academy',
        25,
    ];
    researches['Bigger Infirmary III'][8] = [
        887593,
        554746,
        332848,
        887593,
        779999,
        37,
        189116,
        1771560,
        'Academy',
        25,
        'Field Triage II',
        8,
    ];
    researches['Bigger Infirmary III'][9] = [
        1242629,
        776644,
        465986,
        1242629,
        1091999,
        46,
        259958,
        2480160,
        'Academy',
        25,
        'Field Triage II',
        9,
    ];
    researches['Bigger Infirmary III'][10] = [
        1627253,
        1017033,
        610220,
        1627253,
        1429998,
        58,
        338808,
        3247800,
        'Academy',
        25,
        'Field Triage II',
        10,
    ];

    researches['Barracks Expansion II'] = [];
    researches['Barracks Expansion II'][1] = [
        73967,
        36984,
        29587,
        44380,
        52000,
        3,
        12321,
        118140,
        'Academy',
        25,
        'Bigger Bags III',
        1,
    ];
    researches['Barracks Expansion II'][2] = [
        258882,
        129441,
        103553,
        155329,
        182000,
        5,
        41273,
        413400,
        'Academy',
        25,
    ];
    researches['Barracks Expansion II'][3] = [
        314356,
        157178,
        125743,
        188614,
        221000,
        8,
        51745,
        501960,
        'Academy',
        25,
        'Bigger Bags III',
        3,
    ];
    researches['Barracks Expansion II'][4] = [
        369831,
        184916,
        147933,
        221899,
        260000,
        11,
        62217,
        590520,
        'Academy',
        25,
        'Heroic Cannoneer',
        1,
        'Ancient Drake Rider',
        1,
        'Bigger Bags III',
        3,
    ];
    researches['Barracks Expansion II'][5] = [
        443797,
        221899,
        177519,
        266278,
        312000,
        15,
        75770,
        708660,
        'Academy',
        25,
    ];
    researches['Barracks Expansion II'][6] = [
        591729,
        295865,
        236692,
        355037,
        416000,
        21,
        101643,
        944820,
        'Academy',
        25,
    ];
    researches['Barracks Expansion II'][7] = [
        776644,
        388322,
        310658,
        465986,
        546000,
        29,
        134291,
        1240080,
        'Academy',
        25,
        'Bigger Bags III',
        7,
    ];
    researches['Barracks Expansion II'][8] = [
        1109491,
        554746,
        443797,
        665695,
        779999,
        37,
        189116,
        1771560,
        'Academy',
        25,
        'Bigger Bags III',
        8,
    ];
    researches['Barracks Expansion II'][9] = [
        1553287,
        776644,
        621315,
        931972,
        1091999,
        46,
        259958,
        2480160,
        'Academy',
        25,
        'Bigger Bags III',
        9,
    ];
    researches['Barracks Expansion II'][10] = [
        2034066,
        1017033,
        813627,
        1220440,
        1429998,
        58,
        338808,
        3247800,
        'Academy',
        25,
        'Bigger Bags III',
        10,
    ];

    researches['Lunar Foundry'] = [];
    researches['Lunar Foundry'][1] = [
        488059,
        366044,
        305037,
        305037,
        572165,
        30,
        94383,
        1141200,
        'Bigger Infirmary III',
        4,
        'Barracks Expansion II',
        4,
    ];

    researches['Crafting Speed I'] = [];
    researches['Crafting Speed I'][1] = [
        125308,
        41770,
        62654,
        41770,
        73412,
        5,
        16428,
        157500,
        'Academy',
        25,
        'Lunar Foundry',
        1,
    ];
    researches['Crafting Speed I'][2] = [
        438575,
        146192,
        219288,
        146192,
        256941,
        10,
        55030,
        551160,
        'Academy',
        25,
    ];
    researches['Crafting Speed I'][3] = [
        532556,
        177519,
        266278,
        177519,
        312000,
        16,
        68994,
        669240,
        'Academy',
        25,
    ];
    researches['Crafting Speed I'][4] = [
        626536,
        208846,
        313268,
        208846,
        367059,
        23,
        82956,
        787380,
        'Academy',
        25,
    ];
    researches['Crafting Speed I'][5] = [
        751843,
        250615,
        375922,
        250615,
        440470,
        30,
        101027,
        944820,
        'Academy',
        25,
    ];
    researches['Crafting Speed I'][6] = [
        1002458,
        334153,
        501229,
        334153,
        587294,
        42,
        135523,
        1259760,
        'Academy',
        25,
    ];
    researches['Crafting Speed I'][7] = [
        1315725,
        438575,
        657863,
        438575,
        770823,
        57,
        179055,
        1653420,
        'Academy',
        25,
    ];
    researches['Crafting Speed I'][8] = [
        1879607,
        626536,
        939804,
        626536,
        1101175,
        73,
        252155,
        2362080,
        'Academy',
        25,
        'Bigger Infirmary III',
        8,
        'Barracks Expansion II',
        8,
        'Lunar Foundry',
        1,
    ];
    researches['Crafting Speed I'][9] = [
        2631450,
        877150,
        1315725,
        877150,
        1541645,
        91,
        346611,
        3306840,
        'Academy',
        25,
        'Bigger Infirmary III',
        9,
        'Barracks Expansion II',
        9,
        'Lunar Foundry',
        1,
    ];
    researches['Crafting Speed I'][10] = [
        3445946,
        1148649,
        1722973,
        1148649,
        2018821,
        115,
        451743,
        4330380,
        'Academy',
        25,
        'Bigger Infirmary III',
        10,
        'Barracks Expansion II',
        10,
        'Lunar Foundry',
        1,
    ];

    researches['Lunite Harvesting'] = [];
    researches['Lunite Harvesting'][1] = [
        83539,
        52212,
        31327,
        83539,
        73412,
        5,
        16428,
        157500,
        'Academy',
        25,
        'Lunar Foundry',
        1,
    ];
    researches['Lunite Harvesting'][2] = [
        292384,
        182740,
        109644,
        292384,
        256941,
        10,
        55030,
        551160,
        'Academy',
        25,
    ];
    researches['Lunite Harvesting'][3] = [
        355037,
        221899,
        133139,
        355037,
        312000,
        16,
        68994,
        669240,
        'Academy',
        25,
    ];
    researches['Lunite Harvesting'][4] = [
        417691,
        261057,
        156634,
        417691,
        367059,
        23,
        82956,
        787380,
        'Academy',
        25,
    ];
    researches['Lunite Harvesting'][5] = [
        501229,
        313268,
        187961,
        501229,
        440470,
        30,
        101027,
        944820,
        'Academy',
        25,
    ];
    researches['Lunite Harvesting'][6] = [
        668305,
        417691,
        250615,
        668305,
        587294,
        42,
        135523,
        1259760,
        'Academy',
        25,
    ];
    researches['Lunite Harvesting'][7] = [
        877150,
        548219,
        328932,
        877150,
        770823,
        57,
        179055,
        1653420,
        'Academy',
        25,
    ];
    researches['Lunite Harvesting'][8] = [
        1253072,
        783170,
        469902,
        1253072,
        1101175,
        73,
        252155,
        2362080,
        'Academy',
        25,
        'Bigger Infirmary III',
        8,
        'Barracks Expansion II',
        8,
    ];
    researches['Lunite Harvesting'][9] = [
        1754300,
        1096438,
        657863,
        1754300,
        1541645,
        91,
        346611,
        3306840,
        'Academy',
        25,
        'Bigger Infirmary III',
        9,
        'Barracks Expansion II',
        9,
    ];
    researches['Lunite Harvesting'][10] = [
        2297298,
        1435811,
        861487,
        2297298,
        2018821,
        115,
        451743,
        4330380,
        'Academy',
        25,
        'Bigger Infirmary III',
        10,
        'Barracks Expansion II',
        10,
    ];

    researches['Lunite Storage'] = [];
    researches['Lunite Storage'][1] = [
        167077,
        83539,
        20885,
        20885,
        73412,
        5,
        16428,
        157500,
        'Academy',
        25,
        'Lunar Foundry',
        1,
    ];
    researches['Lunite Storage'][2] = [
        584767,
        292384,
        73096,
        73096,
        256941,
        10,
        55030,
        551160,
        'Academy',
        25,
    ];
    researches['Lunite Storage'][3] = [
        710074,
        355037,
        88760,
        88760,
        312000,
        16,
        68994,
        669240,
        'Academy',
        25,
    ];
    researches['Lunite Storage'][4] = [
        835381,
        417691,
        104423,
        104423,
        367059,
        23,
        82956,
        787380,
        'Academy',
        25,
    ];
    researches['Lunite Storage'][5] = [
        1002458,
        501229,
        125308,
        125308,
        440470,
        30,
        101027,
        944820,
        'Academy',
        25,
    ];
    researches['Lunite Storage'][6] = [
        1336610,
        668305,
        167077,
        167077,
        587294,
        42,
        135523,
        1259760,
        'Academy',
        25,
    ];
    researches['Lunite Storage'][7] = [
        1754300,
        877150,
        219288,
        219288,
        770823,
        57,
        179055,
        1653420,
        'Academy',
        25,
    ];
    researches['Lunite Storage'][8] = [
        2506143,
        1253072,
        313268,
        313268,
        1101175,
        73,
        252155,
        2362080,
        'Academy',
        25,
        'Bigger Infirmary III',
        8,
        'Barracks Expansion II',
        8,
    ];
    researches['Lunite Storage'][9] = [
        3508600,
        1754300,
        438575,
        438575,
        1561645,
        91,
        346611,
        3306840,
        'Academy',
        25,
        'Bigger Infirmary III',
        9,
        'Barracks Expansion II',
        9,
    ];
    researches['Lunite Storage'][10] = [
        4594595,
        2297298,
        574325,
        574325,
        2018821,
        115,
        451743,
        4330380,
        'Academy',
        25,
        'Bigger Infirmary III',
        10,
        'Barracks Expansion II',
        10,
    ];

    researches['Infantry Defense II'] = [];
    researches['Infantry Defense II'][1] = [
        250615,
        46991,
        78317,
        62654,
        110118,
        7,
        23957,
        229680,
        'Academy',
        25,
        'Crafting Speed I',
        1,
        'Lunite Harvesting',
        1,
        'Lunite Storage',
        1,
    ];
    researches['Infantry Defense II'][2] = [
        877150,
        164466,
        274110,
        219288,
        385412,
        14,
        80253,
        803760,
        'Academy',
        25,
    ];
    researches['Infantry Defense II'][3] = [
        1065111,
        199709,
        332848,
        266278,
        468000,
        24,
        100615,
        976020,
        'Academy',
        25,
    ];
    researches['Infantry Defense II'][4] = [
        1253072,
        234951,
        391585,
        313268,
        550588,
        34,
        120979,
        1148220,
        'Academy',
        25,
    ];
    researches['Infantry Defense II'][5] = [
        1503686,
        281942,
        469902,
        375922,
        660705,
        44,
        147330,
        1377900,
        'Academy',
        25,
    ];
    researches['Infantry Defense II'][6] = [
        2004915,
        375922,
        626536,
        501229,
        880940,
        60,
        197638,
        1837140,
        'Academy',
        25,
    ];
    researches['Infantry Defense II'][7] = [
        2631450,
        493397,
        822329,
        657863,
        1156234,
        82,
        261121,
        2411280,
        'Academy',
        25,
    ];
    researches['Infantry Defense II'][8] = [
        3759214,
        704853,
        1174755,
        939804,
        1651763,
        107,
        367727,
        3405060,
        'Academy',
        25,
        'Crafting Speed I',
        8,
        'Lunite Harvesting',
        8,
        'Lunite Storage',
        8,
        'Infantry Offense II',
        7,
    ];
    researches['Infantry Defense II'][9] = [
        5262900,
        986794,
        1644657,
        1315725,
        2312468,
        132,
        505473,
        4822500,
        'Academy',
        25,
        'Crafting Speed I',
        9,
        'Lunite Harvesting',
        9,
        'Lunite Storage',
        9,
        'Infantry Offense II',
        9,
    ];
    researches['Infantry Defense II'][10] = [
        6891892,
        1292230,
        2153717,
        1722973,
        3028231,
        167,
        658794,
        6315180,
        'Academy',
        25,
        'Crafting Speed I',
        10,
        'Lunite Harvesting',
        10,
        'Lunite Storage',
        10,
        'Infantry Offense II',
        10,
    ];

    researches['Siege Toughness II'] = [];
    researches['Siege Toughness II'][1] = [
        156634,
        78317,
        78317,
        78317,
        110118,
        7,
        23957,
        229680,
        'Academy',
        25,
        'Crafting Speed I',
        1,
        'Lunite Harvesting',
        1,
        'Lunite Storage',
        1,
    ];
    researches['Siege Toughness II'][2] = [
        548219,
        274110,
        274110,
        274110,
        385412,
        14,
        80253,
        803760,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][3] = [
        0,
        0,
        0,
        0,
        0,
        27,
        97602,
        976020,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][4] = [
        0,
        0,
        0,
        0,
        0,
        34,
        114822,
        1148220,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][5] = [
        0,
        0,
        0,
        0,
        0,
        44,
        1377900,
        1377900,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][6] = [
        0,
        0,
        0,
        0,
        0,
        60,
        1837140,
        1837140,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][7] = [
        0,
        0,
        0,
        0,
        0,
        82,
        2411280,
        2411280,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][8] = [
        2349509,
        1174755,
        1174755,
        1174755,
        1651763,
        107,
        340506,
        3405060,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][9] = [
        0,
        0,
        0,
        0,
        0,
        132,
        482250,
        4822500,
        'Academy',
        25,
    ];
    researches['Siege Toughness II'][10] = [
        0,
        0,
        0,
        0,
        3028231,
        167,
        631518,
        6315180,
        'Academy',
        25,
    ];

    researches['Ranged Defense II'] = [];
    researches['Ranged Defense II'][1] = [
        250615,
        46991,
        78317,
        62654,
        110118,
        7,
        23957,
        229680,
        'Academy',
        25,
        'Crafting Speed I',
        1,
        'Lunite Harvesting',
        1,
        'Lunite Storage',
        1,
    ];
    researches['Ranged Defense II'][2] = [
        877150,
        164466,
        274110,
        219288,
        385412,
        14,
        80253,
        803760,
        'Academy',
        25,
    ];
    researches['Ranged Defense II'][3] = [
        1065111,
        278025,
        254530,
        266278,
        468000,
        27,
        100615,
        976020,
        'Academy',
        25,
    ];
    researches['Ranged Defense II'][4] = [
        1253072,
        391585,
        234951,
        313268,
        550588,
        34,
        114822,
        1148220,
        'Academy',
        25,
    ];
    researches['Ranged Defense II'][5] = [
        1503686,
        469902,
        281942,
        375922,
        660705,
        44,
        137790,
        1377900,
        'Academy',
        25,
    ];
    researches['Ranged Defense II'][6] = [
        2004915,
        626536,
        375922,
        501229,
        880940,
        60,
        197638,
        1837140,
        'Academy',
        25,
    ];
    researches['Ranged Defense II'][7] = [
        2631450,
        822329,
        493397,
        657863,
        1156234,
        82,
        241128,
        2411280,
        'Academy',
        25,
    ];
    researches['Ranged Defense II'][8] = [
        3759214,
        704853,
        1174755,
        939804,
        1651763,
        107,
        367727,
        3405060,
        'Academy',
        25,
        'Crafting Speed I',
        8,
        'Lunite Harvesting',
        8,
        'Lunite Storage',
        8,
    ];
    researches['Ranged Defense II'][9] = [
        5262900,
        986794,
        1644657,
        1315725,
        2312468,
        132,
        482250,
        4822500,
        'Academy',
        25,
        'Crafting Speed I',
        9,
        'Lunite Harvesting',
        9,
        'Lunite Storage',
        9,
    ];
    researches['Ranged Defense II'][10] = [
        6891892,
        1292230,
        2153713,
        1722973,
        3028231,
        167,
        631518,
        6315180,
        'Academy',
        25,
        'Crafting Speed I',
        10,
        'Lunite Harvesting',
        10,
        'Lunite Storage',
        10,
    ];

    researches['Cavalry Defense II'] = [];
    researches['Cavalry Defense II'][1] = [
        250615,
        78317,
        46991,
        62654,
        110118,
        7,
        23957,
        229680,
        'Academy',
        25,
        'Crafting Speed I',
        1,
        'Lunite Harvesting',
        1,
        'Lunite Storage',
        1,
    ];
    researches['Cavalry Defense II'][2] = [
        877150,
        274110,
        164466,
        219288,
        385412,
        14,
        80253,
        803760,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][3] = [
        1065111,
        332848,
        199709,
        266278,
        468000,
        27,
        100615,
        976020,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][4] = [
        1253072,
        381585,
        234951,
        313268,
        550588,
        34,
        114822,
        1148220,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][5] = [
        0,
        0,
        0,
        0,
        0,
        44,
        137790,
        1377900,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][6] = [
        0,
        0,
        0,
        0,
        0,
        60,
        183714,
        1837140,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][7] = [
        0,
        0,
        0,
        0,
        0,
        82,
        241128,
        2411280,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][8] = [
        3759214,
        1174755,
        704853,
        939804,
        1651763,
        107,
        367727,
        3405060,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][9] = [
        0,
        0,
        0,
        0,
        0,
        132,
        505473,
        4822500,
        'Academy',
        25,
    ];
    researches['Cavalry Defense II'][10] = [
        0,
        0,
        0,
        0,
        0,
        167,
        631518,
        6315180,
        'Academy',
        25,
    ];

    researches['Infantry Health II'] = [];
    researches['Infantry Health II'][1] = [
        348076,
        108774,
        65265,
        87019,
        152941,
        9,
        34224,
        328080,
        'Academy',
        25,
        'Infantry Defense II',
        1,
    ];
    researches['Infantry Health II'][2] = [
        1218264,
        308708,
        228425,
        304566,
        535294,
        20,
        114647,
        1148220,
        'Academy',
        25,
    ];
    researches['Infantry Health II'][3] = [
        1479321,
        462288,
        277373,
        369831,
        650000,
        34,
        143736,
        1394280,
        'Academy',
        25,
    ];
    researches['Infantry Health II'][4] = [
        1740377,
        543868,
        326321,
        435095,
        764705,
        48,
        172827,
        1640340,
        'Academy',
        25,
    ];
    researches['Infantry Health II'][5] = [
        2088453,
        652642,
        391585,
        522144,
        917646,
        62,
        210471,
        1968360,
        'Academy',
        25,
    ];
    researches['Infantry Health II'][6] = [
        2784603,
        870189,
        522114,
        696151,
        1223528,
        86,
        282340,
        2624520,
        'Academy',
        25,
    ];
    researches['Infantry Health II'][7] = [
        3654792,
        1142123,
        685274,
        913698,
        1605880,
        117,
        373031,
        3444660,
        'Academy',
        25,
    ];
    researches['Infantry Health II'][8] = [
        5221131,
        1631604,
        978962,
        1305283,
        2294115,
        152,
        525323,
        4920900,
        'Academy',
        25,
        'Infantry Defense II',
        8,
    ];
    researches['Infantry Health II'][9] = [
        7309583,
        2284245,
        1370547,
        1827396,
        3211760,
        189,
        722106,
        6889260,
        'Academy',
        25,
        'Infantry Defense II',
        9,
    ];
    researches['Infantry Health II'][10] = [
        9572073,
        2991273,
        1794764,
        2393019,
        4205876,
        238,
        941133,
        9021660,
        'Academy',
        25,
        'Infantry Defense II',
        10,
    ];

    researches['Siege Durability II'] = [];
    researches['Siege Durability II'][1] = [
        217548,
        108774,
        108774,
        108774,
        152941,
        9,
        34224,
        342240,
        'Academy',
        25,
        'Siege Toughness II',
        1,
    ];
    researches['Siege Durability II'][2] = [
        761415,
        380708,
        380708,
        380708,
        535294,
        20,
        114647,
        1187822,
        'Academy',
        25,
    ];
    researches['Siege Durability II'][3] = [
        0,
        0,
        0,
        0,
        0,
        34,
        143736,
        1394280,
        'Academy',
        25,
    ];
    researches['Siege Durability II'][4] = [
        0,
        0,
        0,
        0,
        0,
        48,
        164034,
        1640340,
        'Academy',
        25,
    ];
    researches['Siege Durability II'][5] = [
        0,
        0,
        0,
        0,
        0,
        62,
        196836,
        1968360,
        'Academy',
        25,
    ];
    researches['Siege Durability II'][6] = [
        0,
        0,
        0,
        0,
        0,
        86,
        262452,
        2624520,
        'Academy',
        25,
    ];
    researches['Siege Durability II'][7] = [
        0,
        0,
        0,
        0,
        0,
        117,
        344466,
        3444660,
        'Academy',
        25,
    ];
    researches['Siege Durability II'][8] = [
        0,
        0,
        0,
        0,
        0,
        152,
        492090,
        4920900,
        'Academy',
        25,
        'Siege Toughness II',
        8,
    ];
    researches['Siege Durability II'][9] = [
        0,
        0,
        0,
        0,
        0,
        189,
        688926,
        6889260,
        'Academy',
        25,
        'Siege Toughness II',
        9,
    ];
    researches['Siege Durability II'][10] = [
        0,
        0,
        0,
        0,
        0,
        238,
        902166,
        9021660,
        'Academy',
        25,
        'Siege Toughness II',
        10,
    ];

    researches['Ranged Health II'] = [];
    researches['Ranged Health II'][1] = [
        348076,
        108774,
        65265,
        87019,
        152941,
        9,
        34224,
        328080,
        'Academy',
        25,
        'Ranged Defense II',
        1,
    ];
    researches['Ranged Health II'][2] = [
        1218264,
        380708,
        228425,
        304566,
        535294,
        20,
        114647,
        1148220,
        'Academy',
        25,
    ];
    researches['Ranged Health II'][3] = [
        1479321,
        462288,
        277373,
        369831,
        650000,
        34,
        143736,
        1394280,
        'Academy',
        25,
    ];
    researches['Ranged Health II'][4] = [
        1740377,
        543868,
        326321,
        435095,
        764705,
        48,
        164034,
        1640340,
        'Academy',
        25,
    ];
    researches['Ranged Health II'][5] = [
        2088453,
        652642,
        391585,
        522114,
        917114,
        62,
        210471,
        1968360,
        'Academy',
        25,
    ];
    researches['Ranged Health II'][6] = [
        2784603,
        870189,
        522114,
        696151,
        1223528,
        86,
        282340,
        2624520,
        'Academy',
        25,
    ];
    researches['Ranged Health II'][7] = [
        2284245,
        1142123,
        1142123,
        1142123,
        1605880,
        117,
        344466,
        3444660,
        'Academy',
        25,
    ];
    researches['Ranged Health II'][8] = [
        5221131,
        1163604,
        978962,
        1305283,
        2294115,
        152,
        525323,
        4920900,
        'Academy',
        25,
        'Ranged Defense II',
        8,
    ];
    researches['Ranged Health II'][9] = [
        7309583,
        2284245,
        1370547,
        1827396,
        3211760,
        189,
        722106,
        6889260,
        'Academy',
        25,
        'Ranged Defense II',
        9,
    ];
    researches['Ranged Health II'][10] = [
        9572073,
        2991273,
        1794764,
        2393019,
        4205876,
        238,
        902166,
        9021660,
        'Academy',
        25,
        'Ranged Defense II',
        10,
    ];

    researches['Cavalry Health II'] = [];
    researches['Cavalry Health II'][1] = [
        348076,
        65265,
        108774,
        87019,
        152941,
        9,
        34224,
        328080,
        'Academy',
        25,
        'Cavalry Defense II',
        1,
    ];
    researches['Cavalry Health II'][2] = [
        1218264,
        228425,
        380708,
        304566,
        535294,
        20,
        114647,
        1148220,
        'Academy',
        25,
    ];
    researches['Cavalry Health II'][3] = [
        1479321,
        277373,
        462288,
        369831,
        650000,
        34,
        143736,
        1394280,
        'Academy',
        25,
    ];
    researches['Cavalry Health II'][4] = [
        0,
        0,
        0,
        0,
        0,
        48,
        164034,
        1640340,
        'Academy',
        25,
    ];
    researches['Cavalry Health II'][5] = [
        0,
        0,
        0,
        0,
        0,
        62,
        196836,
        1968360,
        'Academy',
        25,
    ];
    researches['Cavalry Health II'][6] = [
        0,
        0,
        0,
        0,
        0,
        86,
        262452,
        2624520,
        'Academy',
        25,
    ];
    researches['Cavalry Health II'][7] = [
        0,
        0,
        0,
        0,
        0,
        117,
        344466,
        3444660,
        'Academy',
        25,
    ];
    researches['Cavalry Health II'][8] = [
        0,
        0,
        0,
        0,
        0,
        152,
        4920900,
        4920900,
        'Academy',
        25,
        'Cavalry Defense II',
        8,
    ];
    researches['Cavalry Health II'][9] = [
        0,
        0,
        0,
        0,
        0,
        189,
        688926,
        6889260,
        'Academy',
        25,
        'Cavalry Defense II',
        9,
    ];
    researches['Cavalry Health II'][10] = [
        0,
        0,
        0,
        0,
        0,
        238,
        902166,
        9021660,
        'Academy',
        25,
        'Cavalry Defense II',
        10,
    ];

    researches['Infantry Offense II'] = [];
    researches['Infantry Offense II'][1] = [
        313268,
        156634,
        156634,
        156634,
        220235,
        13,
        47913,
        459300,
        'Academy',
        25,
        'Infantry Health II',
        1,
    ];
    researches['Infantry Offense II'][2] = [
        1096438,
        548219,
        548219,
        548219,
        770823,
        28,
        160506,
        1607520,
        'Academy',
        25,
    ];
    researches['Infantry Offense II'][3] = [
        1331389,
        665695,
        665695,
        665695,
        935999,
        47,
        201231,
        1951980,
        'Academy',
        25,
    ];
    researches['Infantry Offense II'][4] = [
        1566340,
        783170,
        783170,
        783170,
        1101175,
        67,
        241957,
        2296440,
        'Academy',
        25,
    ];
    researches['Infantry Offense II'][5] = [
        1879607,
        939804,
        939804,
        939804,
        1321410,
        87,
        294660,
        2755740,
        'Academy',
        25,
    ];
    researches['Infantry Offense II'][6] = [
        2506143,
        1253072,
        1253072,
        1253072,
        1761880,
        120,
        395276,
        3674280,
        'Academy',
        25,
    ];
    researches['Infantry Offense II'][7] = [
        3289313,
        1644657,
        1644657,
        1644657,
        2312468,
        164,
        522243,
        4822500,
        'Academy',
        25,
    ];
    researches['Infantry Offense II'][8] = [
        4699018,
        2349509,
        2349509,
        2349509,
        3303525,
        213,
        735453,
        6889260,
        'Academy',
        25,
        'Infantry Health II',
        8,
    ];
    researches['Infantry Offense II'][9] = [
        6578625,
        3283313,
        3283313,
        3283313,
        4624935,
        264,
        1010947,
        9644940,
        'Academy',
        25,
        'Infantry Health II',
        9,
    ];
    researches['Infantry Offense II'][10] = [
        8614865,
        4307433,
        4307433,
        4307433,
        4307433,
        334,
        1317587,
        12630300,
        'Academy',
        25,
        'Infantry Health II',
        10,
    ];

    researches['Siege Attack II'] = [];
    researches['Siege Attack II'][1] = [
        313268,
        156634,
        156634,
        156634,
        220235,
        13,
        47913,
        459300,
        'Academy',
        25,
        'Siege Durability II',
        1,
    ];
    researches['Siege Attack II'][2] = [
        1096438,
        548219,
        548219,
        548219,
        770823,
        28,
        160752,
        1607520,
        'Academy',
        25,
    ];
    researches['Siege Attack II'][3] = [
        1331389,
        665695,
        665695,
        665695,
        935999,
        47,
        201231,
        1951980,
        'Academy',
        25,
    ];
    researches['Siege Attack II'][4] = [
        1556340,
        783170,
        783170,
        783170,
        1101175,
        67,
        241957,
        2296440,
        'Academy',
        25,
    ];
    researches['Siege Attack II'][5] = [
        1879607,
        939804,
        939804,
        939804,
        1321410,
        87,
        294660,
        2755740,
        'Academy',
        25,
    ];
    researches['Siege Attack II'][6] = [
        2584460,
        1292230,
        1292230,
        1292230,
        1816939,
        120,
        3674280,
        3674280,
        'Academy',
        25,
    ];
    researches['Siege Attack II'][7] = [
        3289313,
        1644657,
        1644657,
        1644657,
        2312468,
        164,
        482250,
        4822500,
        'Academy',
        25,
    ];
    researches['Siege Attack II'][8] = [
        4699018,
        2349509,
        2349509,
        2349509,
        3303525,
        213,
        688926,
        6889260,
        'Academy',
        25,
        'Siege Durability II',
        8,
    ];
    researches['Siege Attack II'][9] = [
        6578625,
        3283313,
        3283313,
        3283313,
        4624935,
        264,
        964494,
        9644940,
        'Academy',
        25,
        'Siege Durability II',
        9,
    ];
    researches['Siege Attack II'][10] = [
        8614865,
        4307433,
        4307433,
        4307433,
        6056462,
        334,
        1263030,
        12630300,
        'Academy',
        25,
        'Siege Durability II',
        10,
    ];

    researches['Ranged Offense II'] = [];
    researches['Ranged Offense II'][1] = [
        313268,
        156634,
        156634,
        156634,
        220235,
        13,
        47913,
        459300,
        'Academy',
        25,
        'Ranged Health II',
        1,
    ];
    researches['Ranged Offense II'][2] = [
        0,
        0,
        0,
        0,
        0,
        28,
        160506,
        1607520,
        'Academy',
        25,
    ];
    researches['Ranged Offense II'][3] = [
        1331389,
        665695,
        665695,
        665695,
        935999,
        47,
        201231,
        1951980,
        'Academy',
        25,
    ];
    researches['Ranged Offense II'][4] = [
        0,
        0,
        0,
        0,
        0,
        67,
        241957,
        2296440,
        'Academy',
        25,
    ];
    researches['Ranged Offense II'][5] = [
        1879607,
        939804,
        939804,
        939804,
        1321410,
        87,
        294660,
        2755740,
        'Academy',
        25,
    ];
    researches['Ranged Offense II'][6] = [
        2506143,
        1253072,
        1253072,
        1253072,
        1761880,
        120,
        395276,
        3674280,
        'Academy',
        25,
    ];
    researches['Ranged Offense II'][7] = [
        3289313,
        1644657,
        1644657,
        1644657,
        2312468,
        164,
        522243,
        4822500,
        'Academy',
        25,
    ];
    researches['Ranged Offense II'][8] = [
        4699018,
        2349509,
        2349509,
        2349509,
        3303525,
        213,
        735453,
        6889260,
        'Academy',
        25,
        'Ranged Health II',
        8,
    ];
    researches['Ranged Offense II'][9] = [
        6578625,
        3283313,
        3283313,
        3283313,
        4624935,
        264,
        964494,
        9644940,
        'Academy',
        25,
        'Ranged Health II',
        9,
    ];
    researches['Ranged Offense II'][10] = [
        8614865,
        4307433,
        4307433,
        4307433,
        6056462,
        334,
        1263030,
        12630300,
        'Academy',
        25,
        'Ranged Health II',
        10,
    ];

    researches['Cavalry Offense II'] = [];
    researches['Cavalry Offense II'][1] = [
        313268,
        156634,
        156634,
        156634,
        220235,
        13,
        47913,
        459300,
        'Academy',
        25,
        'Cavalry Health II',
        1,
    ];
    researches['Cavalry Offense II'][2] = [
        1096438,
        548219,
        548219,
        548219,
        770823,
        28,
        160752,
        1607520,
        'Academy',
        25,
    ];
    researches['Cavalry Offense II'][3] = [
        1331389,
        665695,
        665695,
        665695,
        935999,
        47,
        201231,
        1951980,
        'Academy',
        25,
    ];
    researches['Cavalry Offense II'][4] = [
        1566340,
        783170,
        783170,
        783170,
        1101175,
        67,
        229644,
        2296440,
        'Academy',
        25,
    ];
    researches['Cavalry Offense II'][5] = [
        1879607,
        939804,
        939804,
        939804,
        1321410,
        87,
        275574,
        2755740,
        'Academy',
        25,
    ];
    researches['Cavalry Offense II'][6] = [
        0,
        0,
        0,
        0,
        0,
        125,
        367428,
        3674280,
        'Academy',
        25,
    ];
    researches['Cavalry Offense II'][7] = [
        3289313,
        1644657,
        1644657,
        1644657,
        2312468,
        164,
        482250,
        4822500,
        'Academy',
        25,
    ];
    researches['Cavalry Offense II'][8] = [
        4699018,
        2349509,
        2349509,
        2349509,
        3303525,
        213,
        688926,
        6889260,
        'Academy',
        25,
        'Cavalry Health II',
        8,
    ];
    researches['Cavalry Offense II'][9] = [
        6578625,
        3283313,
        3283313,
        3283313,
        4624935,
        264,
        964494,
        9644940,
        'Academy',
        25,
        'Cavalry Health II',
        9,
    ];
    researches['Cavalry Offense II'][10] = [
        8614865,
        4307433,
        4307433,
        4307433,
        6056462,
        334,
        658794,
        12630300,
        'Academy',
        25,
        'Cavalry Health II',
        10,
    ];

    researches['Crafting Speed II'] = [];
    researches['Crafting Speed II'][1] = [
        522114,
        174038,
        261057,
        174038,
        305882,
        14,
        68447,
        656160,
        'Academy',
        25,
        'Infantry Offense II',
        1,
        'Siege Attack II',
        1,
        'Ranged Offense II',
        1,
        'Cavalry Offense II',
        1,
    ];
    researches['Crafting Speed II'][2] = [
        1827396,
        609132,
        913698,
        609132,
        1070587,
        32,
        229294,
        2296440,
        'Academy',
        25,
    ];
    researches['Crafting Speed II'][3] = [
        2218981,
        739661,
        1109491,
        739661,
        1299999,
        54,
        287473,
        2788500,
        'Academy',
        25,
    ];
    researches['Crafting Speed II'][4] = [
        2610566,
        870189,
        1305283,
        870189,
        1529410,
        77,
        345653,
        3280620,
        'Academy',
        25,
    ];
    researches['Crafting Speed II'][5] = [
        3132679,
        1044227,
        1566340,
        1044227,
        1835292,
        100,
        420943,
        3936720,
        'Academy',
        25,
    ];
    researches['Crafting Speed II'][6] = [
        4176905,
        1392302,
        2088453,
        1392302,
        2447056,
        138,
        564679,
        5248980,
        'Academy',
        25,
    ];
    researches['Crafting Speed II'][7] = [
        5482187,
        1827396,
        2741094,
        1827396,
        3211760,
        187,
        746062,
        6889260,
        'Academy',
        25,
    ];
    researches['Crafting Speed II'][8] = [
        5743244,
        3915848,
        3915848,
        2349509,
        4588229,
        243,
        1050647,
        9841800,
        'Academy',
        25,
        'Infantry Offense II',
        8,
        'Siege Attack II',
        8,
        'Ranged Offense II',
        8,
        'Cavalry Offense II',
        8,
    ];
    researches['Crafting Speed II'][9] = [
        8040541,
        5482187,
        5482187,
        3289313,
        6423520,
        301,
        1444211,
        13778460,
        'Academy',
        25,
        'Infantry Offense II',
        9,
        'Siege Attack II',
        9,
        'Ranged Offense II',
        9,
        'Cavalry Offense II',
        9,
    ];
    researches['Crafting Speed II'][10] = [
        10529280,
        7179055,
        7179055,
        4307433,
        8411752,
        381,
        1882266,
        18043260,
        'Academy',
        25,
        'Infantry Offense II',
        10,
        'Siege Attack II',
        10,
        'Ranged Offense II',
        10,
        'Cavalry Offense II',
        10,
    ];

    researches['Crafting Capacity'] = [];
    researches['Crafting Capacity'][1] = [
        382883,
        261057,
        261057,
        156634,
        305882,
        14,
        68447,
        656160,
        'Academy',
        25,
        'Infantry Offense II',
        1,
        'Siege Attack II',
        1,
        'Ranged Offense II',
        1,
        'Cavalry Offense II',
        1,
    ];
    researches['Crafting Capacity'][2] = [
        1340091,
        913698,
        913698,
        548219,
        1070587,
        32,
        229294,
        2296440,
        'Academy',
        25,
    ];
    researches['Crafting Capacity'][3] = [
        1627253,
        1109491,
        1109491,
        665695,
        1299999,
        54,
        287473,
        2788500,
        'Academy',
        25,
    ];
    researches['Crafting Capacity'][4] = [
        1914415,
        1305283,
        1305283,
        783170,
        1529410,
        77,
        345653,
        3280620,
        'Academy',
        25,
    ];
    researches['Crafting Capacity'][5] = [
        2297298,
        1566340,
        1566340,
        939804,
        1835292,
        100,
        420943,
        3936720,
        'Academy',
        25,
    ];
    researches['Crafting Capacity'][6] = [
        3063064,
        2088453,
        2088453,
        1253072,
        2477056,
        138,
        564679,
        5248980,
        'Academy',
        25,
    ];
    researches['Crafting Capacity'][7] = [
        4020271,
        2741094,
        2741094,
        1644657,
        3211760,
        187,
        746062,
        6889260,
        'Academy',
        25,
    ];
    researches['Crafting Capacity'][8] = [
        5743244,
        3915848,
        3915848,
        2349509,
        4588229,
        243,
        1050647,
        9841800,
        'Academy',
        25,
        'Infantry Offense II',
        8,
        'Siege Attack II',
        8,
        'Ranged Offense II',
        8,
        'Cavalry Offense II',
        8,
    ];
    researches['Crafting Capacity'][9] = [
        8040541,
        5482187,
        5482187,
        3289313,
        6423520,
        301,
        1444211,
        13778460,
        'Academy',
        25,
    ];
    researches['Crafting Capacity'][10] = [
        10529280,
        7179055,
        7179055,
        4307433,
        8411752,
        381,
        1882266,
        18043260,
        'Academy',
        25,
    ];

    researches['Luminary Guard'] = [];
    researches['Luminary Guard'][1] = [
        23426805,
        5856702,
        5856702,
        5856702,
        13731959,
        593,
        2076405,
        25105380,
        'Academy',
        25,
        'Crafting Speed II',
        10,
        'Crafting Capacity',
        10,
    ];

    researches['Luminary Avenger'] = [];
    researches['Luminary Avenger'][1] = [
        23426805,
        5856702,
        5856702,
        5856702,
        13731959,
        593,
        2076405,
        25105380,
        'Academy',
        25,
        'Crafting Speed II',
        10,
        'Crafting Capacity',
        10,
    ];

    researches['Luminary Marksman'] = [];
    researches['Luminary Marksman'][1] = [
        23426805,
        5856702,
        5856702,
        5856702,
        13731959,
        593,
        2076405,
        25105380,
        'Academy',
        25,
        'Crafting Speed II',
        10,
        'Crafting Capacity',
        10,
    ];

    researches['Luminary Lion Force'] = [];
    researches['Luminary Lion Force'][1] = [
        23426805,
        5856702,
        5856702,
        5856702,
        13731959,
        593,
        2076405,
        25105380,
        'Academy',
        25,
        'Crafting Speed II',
        10,
        'Crafting Capacity',
        10,
    ];
}

var totalTime = 0;
var totalMight = 0;
var totalFood = 0;
var totalStone = 0;
var totalWood = 0;
var totalOre = 0;
var totalGold = 0;
$(document).ready(function () {
    /*
for (var key in researches) {
  for (var key2 in researches[key]) {
    //console.log(researches[key][key2][6]);
    totalTime += researches[key][key2][6];
    totalMight += researches[key][key2][5];
    totalFood += researches[key][key2][0];
    totalStone += researches[key][key2][1];
    totalWood += researches[key][key2][2];
    totalOre += researches[key][key2][3];
    totalGold += researches[key][key2][4];
  }
}
console.log("Total Time: "+totalTime);
calcNow(totalTime,totalMight,totalFood,totalStone,totalWood,totalOre,totalGold)
cookieSet();
chAll();*/
    // Handler for .ready() called.
});

$('.toptabs').click(function () {
    $('.pl').hide();
    $('.gemmenu').fadeTo(20, 0);
});
$('.rssmall').click(function () {
    $('.rssshop').show();
});
$('.gemmall').click(function () {
    $('.gemshop').show();
    $('.gemmenu').fadeTo(0, 20);
});
$('.toptabs img').click(function () {
    if ($(window).width() <= 480) {
        $('.toptabs').css('width', '');
        $('.topmenutext').hide();
        $(this).parent().find('.topmenutext').toggle();
        //alert( $(this).parent().width());

        var toggleWidth = $(this).parent().width() <= 34 ? '105px' : '34px';
        $(this).parent().css('width', toggleWidth);
    }
});
$('.cat-tab').click(function () {
    $(this).parent().parent().find('.active').removeClass('active');
    $(this).parent().addClass('active');
    id = $(this).attr('id');
    //alert(id);
    $('.speedupcalculator .ta-contents').hide();
    $('#' + id + '-content').show();
});

function loadT4() {
    researches['Quick_Maneuvers_I'] = [];
    researches['Intelligence_Report'] = [];
    researches['Cavalry_Offense'] = [];
    researches['Infantry_Offense'] = [];
    researches['Ranged_Offense'] = [];
    researches['Infantry_Defense'] = [];
    researches['Ranged_Defense'] = [];
    researches['Cavalry_Defense'] = [];
    researches['Cavalry_Health'] = [];
    researches['Ranged_Health'] = [];
    researches['Infantry_Health'] = [];
    researches['Army_Health_I'] = [];
    researches['Army_Offense_I'] = [];
    researches['Army_Defense_I'] = [];
    researches['Training_Speed_I'] = [];
    researches['Royal_Cavalry'] = [];
    researches['Stealth_Sniper'] = [];
    researches['Fire_Trebuchet'] = [];
    researches['Royal_Guard'] = [];
    researches['Siege_Attack'] = [];
    researches['Siege_Durability'] = [];
    researches['Siege_Toughness'] = [];
    researches['Reptilian_Rider'] = [];
    researches['Sharpshooter'] = [];
    researches['Catapult'] = [];
    researches['Gladiator'] = [];
    researches['Heroic_Fighter'] = [];
    researches['Destroyer'] = [];
    researches['Heroic_Cannoneer'] = [];
    researches['Ancient_Drake_Rider'] = [];
    researches['Quick_Maneuvers_I'][1] = [
        369,
        615,
        615,
        451,
        360,
        0,
        82,
        1020,
        'Training_Speed_I',
        1,
    ];
    researches['Quick_Maneuvers_I'][2] = [
        1229, 2048, 2048, 1502, 2400, 0, 136, 3360,
    ];
    researches['Quick_Maneuvers_I'][3] = [
        3685, 6142, 6142, 4504, 7198, 0, 244, 4980,
    ];
    researches['Quick_Maneuvers_I'][4] = [
        12283, 20471, 20471, 15012, 47986, 0, 733, 8940,
    ];
    researches['Quick_Maneuvers_I'][5] = [
        30706, 51176, 51176, 37529, 119964, 0, 2199, 26760,
    ];
    researches['Quick_Maneuvers_I'][6] = [
        61411, 102351, 102351, 75058, 239927, 0, 6596, 80280,
    ];
    researches['Quick_Maneuvers_I'][7] = [
        307052, 511753, 511753, 375286, 599817, 0, 19789, 240780,
    ];
    researches['Quick_Maneuvers_I'][8] = [
        614104,
        1023506,
        1023506,
        750571,
        1199633,
        0,
        59357,
        722280,
        'Training_Speed_I',
        1,
    ];
    researches['Quick_Maneuvers_I'][9] = [
        1228207, 2047012, 2047012, 1501142, 4798530, 0, 178101, 2166780,
    ];
    researches['Quick_Maneuvers_I'][10] = [
        2456414,
        4092023,
        4094023,
        3002284,
        10796691,
        0,
        445253,
        5413380,
        'Training_Speed_I',
        1,
    ];
    researches['Intelligence_Report'][1] = [
        342, 410, 342, 273, 360, 0, 82, 1020,
    ];
    researches['Intelligence_Report'][2] = [
        1138, 1365, 1138, 910, 2400, 0, 136, 3360,
    ];
    researches['Intelligence_Report'][3] = [
        3412, 4095, 3412, 2730, 7198, 0, 244, 4980,
    ];
    researches['Intelligence_Report'][4] = [
        11373, 13647, 11373, 9098, 47986, 0, 733, 8940,
    ];
    researches['Intelligence_Report'][5] = [
        28431, 34117, 28431, 22745, 119964, 0, 2199, 26760,
    ];
    researches['Intelligence_Report'][6] = [
        56862, 68234, 56862, 45490, 239927, 0, 6596, 80280,
    ];
    researches['Intelligence_Report'][7] = [
        284308, 341169, 284308, 227446, 599817, 0, 19789, 240780,
    ];
    researches['Intelligence_Report'][8] = [
        568615, 682338, 568615, 454892, 1199633, 0, 59367, 722280,
    ];
    researches['Intelligence_Report'][9] = [
        1137229, 1364675, 1137229, 909783, 4798530, 0, 178101, 2166780,
    ];
    researches['Intelligence_Report'][10] = [
        2274458, 2729349, 2274458, 1819566, 10796691, 0, 445253, 5416980,
    ];
    researches['Cavalry_Offense'][1] = [
        492,
        819,
        819,
        601,
        720,
        0,
        163,
        2040,
        'Quick_Maneuvers_I',
        1,
        'Academy',
        2,
    ];
    researches['Cavalry_Offense'][2] = [
        1638, 2730, 2730, 2002, 4799, 0, 272, 6660,
    ];
    researches['Cavalry_Offense'][3] = [
        4913, 8189, 8189, 6005, 14396, 0, 488, 9960,
    ];
    researches['Cavalry_Offense'][4] = [
        16377, 27294, 27294, 20016, 95971, 0, 1466, 17880,
    ];
    researches['Cavalry_Offense'][5] = [
        40941, 68234, 68234, 50039, 239927, 0, 4398, 53520,
    ];
    researches['Cavalry_Offense'][6] = [
        81881, 136468, 136468, 100077, 479853, 0, 13193, 160560,
    ];
    researches['Cavalry_Offense'][7] = [
        409403, 682338, 682338, 500381, 1199633, 0, 39578, 481560,
    ];
    researches['Cavalry_Offense'][8] = [
        818805,
        1364675,
        1364675,
        1000762,
        2399265,
        0,
        118734,
        1440960,
        'Academy',
        18,
    ];
    researches['Cavalry_Offense'][9] = [
        1637610,
        2729349,
        2729349,
        2001523,
        9597059,
        0,
        356202,
        4333560,
        'Academy',
        21,
    ];
    researches['Cavalry_Offense'][10] = [
        3275219,
        5458698,
        5458698,
        4003045,
        21593382,
        0,
        890506,
        10833900,
        'Academy',
        24,
        'Quick Maneuvers',
        10,
    ];
    researches['Infantry_Offense'][1] = [
        492,
        819,
        819,
        601,
        720,
        0,
        163,
        2040,
        'Intelligence_Report',
        1,
    ];
    researches['Infantry_Offense'][2] = [
        1638, 2730, 2730, 2002, 4799, 0, 272, 6660,
    ];
    researches['Infantry_Offense'][3] = [
        4913, 8189, 8189, 6005, 14396, 0, 488, 9960,
    ];
    researches['Infantry_Offense'][4] = [
        16377, 27294, 27294, 20016, 95971, 0, 1466, 17880,
    ];
    researches['Infantry_Offense'][5] = [
        40941, 68234, 68234, 50039, 239927, 0, 4398, 53520,
    ];
    researches['Infantry_Offense'][6] = [
        81881, 136468, 136468, 100077, 479853, 0, 13193, 160560,
    ];
    researches['Infantry_Offense'][7] = [
        409403, 682338, 682338, 500381, 1199633, 0, 39578, 481560,
    ];
    researches['Infantry_Offense'][8] = [
        818805,
        1364675,
        1364675,
        1000762,
        2399265,
        0,
        118734,
        1444560,
        'Intelligence_Report',
        8,
    ];
    researches['Infantry_Offense'][9] = [
        1637610,
        2729349,
        2729349,
        2001523,
        9597059,
        0,
        356202,
        4333560,
        'Intelligence_Report',
        9,
    ];
    researches['Infantry_Offense'][10] = [
        3275219,
        5458698,
        5458698,
        4003045,
        21593382,
        0,
        890506,
        10833900,
        'Intelligence_Report',
        10,
    ];
    researches['Ranged_Offense'][1] = [
        492,
        819,
        819,
        601,
        720,
        0,
        163,
        2040,
        'Quick_Maneuvers_I',
        1,
    ];
    researches['Ranged_Offense'][2] = [
        1638, 2730, 2730, 2002, 4799, 0, 272, 6660,
    ];
    researches['Ranged_Offense'][3] = [
        4913, 8189, 8189, 6005, 14396, 0, 488, 9960,
    ];
    researches['Ranged_Offense'][4] = [
        16377, 27294, 27294, 20016, 95971, 0, 1466, 17880,
    ];
    researches['Ranged_Offense'][5] = [
        40941, 68234, 68234, 50039, 239927, 0, 4398, 53520,
    ];
    researches['Ranged_Offense'][6] = [
        81881, 136468, 136468, 100077, 479853, 0, 13193, 160560,
    ];
    researches['Ranged_Offense'][7] = [
        409403, 682338, 682338, 500381, 1199633, 0, 39578, 481560,
    ];
    researches['Ranged_Offense'][8] = [
        818805,
        1364675,
        1364675,
        1000762,
        2399265,
        118734,
        1444560,
        0,
        'Quick_Maneuvers_I',
        8,
    ];
    researches['Ranged_Offense'][9] = [
        1637610,
        2729349,
        2729349,
        2001523,
        9597059,
        0,
        356202,
        4333560,
        'Quick_Maneuvers_I',
        9,
    ];
    researches['Ranged_Offense'][10] = [
        3275219,
        5458698,
        5458698,
        4003045,
        21593382,
        0,
        890506,
        10833900,
        'Quick_Maneuvers_I',
        10,
    ];
    researches['Infantry_Defense'][1] = [
        737,
        1229,
        1229,
        901,
        1080,
        0,
        245,
        3000,
        'Infantry_Offense',
        1,
    ];
    researches['Infantry_Defense'][2] = [
        2457, 4095, 4095, 3003, 7198, 0, 407, 9960,
    ];
    researches['Infantry_Defense'][3] = [
        7370, 12283, 12283, 9007, 21594, 0, 733, 14880,
    ];
    researches['Infantry_Defense'][4] = [
        24565, 40941, 40941, 30023, 143956, 0, 2199, 26760,
    ];
    researches['Infantry_Defense'][5] = [
        61411, 102351, 102351, 75058, 359890, 0, 6596, 80280,
    ];
    researches['Infantry_Defense'][6] = [
        122821, 204702, 204702, 150115, 719780, 0, 19789, 240780,
    ];
    researches['Infantry_Defense'][7] = [
        614104, 1023506, 1023506, 750571, 1799449, 0, 59367, 273600,
    ];
    researches['Infantry_Defense'][8] = [
        1228207,
        2047012,
        2047012,
        1501142,
        3598897,
        0,
        178101,
        2166780,
        'Infantry_Offense',
        8,
    ];
    researches['Infantry_Defense'][9] = [
        2456414,
        4094023,
        4094023,
        3002284,
        14395588,
        0,
        534304,
        6500340,
        'Infantry_Offense',
        9,
    ];
    researches['Infantry_Defense'][10] = [
        4912828,
        8188046,
        8188046,
        6004567,
        32390072,
        0,
        1335759,
        16250820,
        'Infantry_Offense',
        10,
    ];
    researches['Ranged_Defense'][1] = [
        737,
        1229,
        1229,
        901,
        1080,
        0,
        245,
        3000,
        'Ranged_Offense',
        1,
    ];
    researches['Ranged_Defense'][2] = [
        2457, 4095, 4095, 3003, 7198, 0, 407, 9960,
    ];
    researches['Ranged_Defense'][3] = [
        7370, 12283, 12283, 9007, 21594, 0, 733, 14880,
    ];
    researches['Ranged_Defense'][4] = [
        24565, 40941, 40941, 30023, 143956, 0, 2199, 26760,
    ];
    researches['Ranged_Defense'][5] = [
        61411, 102351, 102351, 75058, 359890, 0, 6596, 80280,
    ];
    researches['Ranged_Defense'][6] = [
        122821, 204702, 204702, 150115, 719780, 0, 19789, 240780,
    ];
    researches['Ranged_Defense'][7] = [
        614104, 1023506, 1023506, 750571, 1799449, 0, 59367, 273600,
    ];
    researches['Ranged_Defense'][8] = [
        1228207,
        2047012,
        2047012,
        1501142,
        3598897,
        0,
        178101,
        2166780,
        'Ranged_Offense',
        8,
    ];
    researches['Ranged_Defense'][9] = [
        2456414,
        4094023,
        4094023,
        3002284,
        14395588,
        0,
        534304,
        6500340,
        'Ranged_Offense',
        9,
    ];
    researches['Ranged_Defense'][10] = [
        4912828,
        8188046,
        8188046,
        6004567,
        32390072,
        0,
        1335759,
        16250820,
        'Ranged_Offense',
        10,
    ];
    researches['Cavalry_Defense'][1] = [
        737,
        1229,
        1229,
        901,
        1080,
        0,
        245,
        3000,
        'Cavalry_Offense',
        1,
    ];
    researches['Cavalry_Defense'][2] = [
        2457, 4095, 4095, 3003, 7198, 0, 407, 9960,
    ];
    researches['Cavalry_Defense'][3] = [
        7370, 12283, 12283, 9007, 21594, 0, 733, 14880,
    ];
    researches['Cavalry_Defense'][4] = [
        24565, 40941, 40941, 30023, 143956, 0, 2199, 26760,
    ];
    researches['Cavalry_Defense'][5] = [
        61411, 102351, 102351, 75058, 359890, 0, 6596, 80280,
    ];
    researches['Cavalry_Defense'][6] = [
        122821, 204702, 204702, 150115, 719780, 0, 19789, 240780,
    ];
    researches['Cavalry_Defense'][7] = [
        614104, 1023506, 1023506, 750571, 1799449, 0, 59367, 273600,
    ];
    researches['Cavalry_Defense'][8] = [
        1228207,
        2047012,
        2047012,
        1501142,
        3598897,
        0,
        178101,
        2166780,
        'Cavalry_Offense',
        8,
    ];
    researches['Cavalry_Defense'][9] = [
        2456414,
        4094023,
        4094023,
        3002284,
        14395588,
        0,
        534304,
        6500340,
        'Cavalry_Offense',
        9,
    ];
    researches['Cavalry_Defense'][10] = [
        4912828,
        8188046,
        8188046,
        6004567,
        32390072,
        0,
        1335759,
        16250820,
        'Cavalry_Offense',
        10,
    ];
    researches['Cavalry_Health'][1] = [
        737,
        1229,
        1229,
        901,
        1080,
        0,
        245,
        3000,
        'Reptilian_Rider',
        1,
    ];
    researches['Cavalry_Health'][2] = [
        2457, 4095, 4095, 3003, 7198, 0, 407, 9960,
    ];
    researches['Cavalry_Health'][3] = [
        7370, 12283, 12283, 9007, 21594, 0, 733, 14880,
    ];
    researches['Cavalry_Health'][4] = [
        24565, 40941, 40941, 30023, 143956, 0, 2199, 26760,
    ];
    researches['Cavalry_Health'][5] = [
        61411, 102351, 102351, 75058, 359890, 0, 6596, 80280,
    ];
    researches['Cavalry_Health'][6] = [
        122821, 204702, 204702, 150115, 719780, 0, 19789, 240780,
    ];
    researches['Cavalry_Health'][7] = [
        614104, 1023506, 1023506, 750571, 1799449, 0, 59367, 722280,
    ];
    researches['Cavalry_Health'][8] = [
        1228207,
        2047012,
        2047012,
        1501142,
        3598897,
        0,
        178101,
        2166780,
        'Cavalry_Defense',
        8,
        'Reptilian_Rider',
        1,
    ];
    researches['Cavalry_Health'][9] = [
        2456414,
        4094023,
        4094023,
        3002284,
        14395588,
        0,
        534304,
        6500340,
        'Cavalry_Defense',
        9,
    ];
    researches['Cavalry_Health'][10] = [
        4912828,
        8188046,
        8188046,
        6004567,
        32390072,
        0,
        1335759,
        16250820,
        'Cavalry_Defense',
        10,
        'Reptilian_Rider',
        1,
    ];
    researches['Ranged_Health'][1] = [
        737,
        1229,
        1229,
        901,
        1080,
        0,
        245,
        3000,
        'Sharpshooter',
        1,
    ];
    researches['Ranged_Health'][2] = [
        2457, 4095, 4095, 3003, 7198, 0, 407, 9960,
    ];
    researches['Ranged_Health'][3] = [
        7370, 12283, 12283, 9007, 21594, 0, 733, 14880,
    ];
    researches['Ranged_Health'][4] = [
        24565, 40941, 40941, 30023, 143956, 0, 2199, 26760,
    ];
    researches['Ranged_Health'][5] = [
        61411, 102351, 102351, 75058, 359890, 0, 6596, 80280,
    ];
    researches['Ranged_Health'][6] = [
        122821, 204702, 204702, 150115, 719780, 0, 19789, 240780,
    ];
    researches['Ranged_Health'][7] = [
        614104, 1023506, 1023506, 750571, 1799449, 0, 59367, 722280,
    ];
    researches['Ranged_Health'][8] = [
        1228207,
        2047012,
        2047012,
        1501142,
        3598897,
        0,
        178101,
        2166780,
        'Ranged_Defense',
        8,
    ];
    researches['Ranged_Health'][9] = [
        2456414,
        4094023,
        4094023,
        3002284,
        14395588,
        0,
        534304,
        6500340,
        'Ranged_Defense',
        9,
    ];
    researches['Ranged_Health'][10] = [
        4912828,
        8188046,
        8188046,
        6004567,
        32390072,
        0,
        1335759,
        16250820,
        'Ranged_Defense',
        10,
        'Sharpshooter',
        1,
    ];
    researches['Infantry_Health'][1] = [
        737,
        1229,
        1229,
        901,
        1080,
        0,
        245,
        3000,
        'Gladiator',
        1,
    ];
    researches['Infantry_Health'][2] = [
        2457, 4095, 4095, 3003, 7198, 0, 407, 9960,
    ];
    researches['Infantry_Health'][3] = [
        7370, 12283, 12283, 9007, 21594, 0, 733, 14880,
    ];
    researches['Infantry_Health'][4] = [
        24565, 40941, 40941, 30023, 143956, 0, 2199, 26760,
    ];
    researches['Infantry_Health'][5] = [
        61411, 102351, 102351, 75058, 359890, 0, 6596, 80280,
    ];
    researches['Infantry_Health'][6] = [
        122821, 204702, 204702, 150115, 719780, 0, 19789, 240780,
    ];
    researches['Infantry_Health'][7] = [
        614104, 1023506, 1023506, 750571, 1799449, 0, 59367, 722280,
    ];
    researches['Infantry_Health'][8] = [
        1228207,
        2047012,
        2047012,
        1501142,
        3598897,
        0,
        178101,
        2166780,
        'Infantry_Defense',
        8,
    ];
    researches['Infantry_Health'][9] = [
        2456414,
        4094023,
        4094023,
        3002284,
        14395588,
        0,
        534304,
        6500340,
        'Infantry_Defense',
        9,
    ];
    researches['Infantry_Health'][10] = [
        4912828,
        8188046,
        8188046,
        6004567,
        32390072,
        0,
        1335759,
        16250820,
        'Infantry_Defense',
        10,
        'Gladiator',
        1,
    ];
    researches['Army_Health_I'][1] = [
        1229,
        2048,
        2048,
        1502,
        3599,
        0,
        815,
        9960,
        'Royal_Guard',
        1,
        'Fire_Trebuchet',
        1,
        'Stealth_Sniper',
        1,
        'Royal_Cavalry',
        1,
    ];
    researches['Army_Health_I'][2] = [
        4095, 6824, 6824, 5004, 23993, 0, 1357, 33060,
    ];
    researches['Army_Health_I'][3] = [
        12283, 20471, 20471, 15012, 71978, 0, 2443, 49560,
    ];
    researches['Army_Health_I'][4] = [
        40941, 68234, 68234, 50039, 479853, 0, 7329, 89220,
    ];
    researches['Army_Health_I'][5] = [
        102351, 170585, 170585, 125096, 1199633, 0, 21988, 267540,
    ];
    researches['Army_Health_I'][6] = [
        204702, 341169, 341169, 250191, 2399265, 0, 65964, 802560,
    ];
    researches['Army_Health_I'][7] = [
        1137229,
        1421536,
        2274458,
        852922,
        5998162,
        0,
        197890,
        2407560,
        'Cavalry_Health',
        7,
        'Infantry_Health',
        7,
        'Ranged_Health',
        7,
        'Siege_Durability',
        7,
    ];
    researches['Army_Health_I'][8] = [
        2047012,
        3411686,
        3411686,
        2501903,
        11996323,
        0,
        593671,
        7222620,
        'Cavalry_Health',
        8,
        'Infantry_Health',
        8,
        'Ranged_Health',
        8,
        'Siege_Durability',
        8,
    ];
    researches['Army_Health_I'][9] = [
        4094023,
        6823372,
        6823372,
        5003806,
        47985292,
        0,
        1781012,
        21667740,
        'Cavalry_Health',
        9,
        'Infantry_Health',
        9,
        'Ranged_Health',
        9,
        'Siege_Durability',
        9,
    ];
    researches['Army_Health_I'][10] = [
        8188046,
        13646743,
        13646743,
        10007612,
        107966906,
        0,
        4452531,
        54169320,
        'Cavalry_Health',
        10,
        'Infantry_Health',
        10,
        'Ranged_Health',
        10,
        'Siege_Durability',
        10,
    ];
    researches['Army_Offense_I'][1] = [
        1229,
        2048,
        2048,
        1502,
        3599,
        0,
        815,
        9960,
        'Royal_Guard',
        1,
        'Fire_Trebuchet',
        1,
        'Stealth_Sniper',
        1,
        'Royal_Cavalry',
        1,
    ];
    researches['Army_Offense_I'][2] = [
        4095,
        6824,
        6824,
        5004,
        23993,
        0,
        1357,
        33060,
        'Academy',
        17,
    ];
    researches['Army_Offense_I'][3] = [
        12283,
        20471,
        20471,
        15012,
        71978,
        0,
        2443,
        49560,
        'Academy',
        18,
    ];
    researches['Army_Offense_I'][4] = [
        40941,
        68234,
        68234,
        50039,
        479853,
        0,
        7329,
        89220,
        'Academy',
        19,
    ];
    researches['Army_Offense_I'][5] = [
        102351,
        170585,
        170585,
        125096,
        1199633,
        0,
        21988,
        267540,
        'Academy',
        20,
    ];
    researches['Army_Offense_I'][6] = [
        204702,
        341169,
        341169,
        250191,
        2399265,
        0,
        65964,
        802560,
        'Academy',
        6,
        'Army_Health_I',
        6,
        'Army_Defense_I',
        6,
        'Academy',
        21,
    ];
    researches['Army_Offense_I'][7] = [
        1137229,
        1421536,
        2274458,
        852922,
        5998162,
        0,
        197890,
        2407560,
        'Academy',
        22,
        'Army_Health_I',
        7,
        'Army_Defense_I',
        7,
        'Academy',
        22,
    ];
    researches['Army_Offense_I'][8] = [
        2047012,
        3411686,
        3411686,
        2501903,
        11996323,
        0,
        593671,
        7222620,
        'Army_Health_I',
        8,
        'Army_Defense_I',
        8,
        'Academy',
        23,
    ];
    researches['Army_Offense_I'][9] = [
        4094023,
        6823372,
        6823372,
        5003806,
        47985292,
        0,
        1781012,
        21667740,
        'Army_Health_I',
        9,
        'Army_Defense_I',
        9,
        'Academy',
        24,
    ];
    researches['Army_Offense_I'][10] = [
        8188046,
        13646743,
        13646743,
        10007612,
        107966906,
        0,
        4452531,
        54169320,
        'Army_Health_I',
        10,
        'Army_Defense_I',
        10,
        'Resource Harvesting I',
        10,
        'Weight Training I',
        10,
        'Academy',
        25,
        'Royal_Guard',
        1,
        'Fire_Trebuchet',
        1,
        'Stealth_Sniper',
        1,
        'Royal_Cavalry',
        1,
    ];
    researches['Army_Defense_I'][1] = [
        1229,
        2048,
        2048,
        1502,
        3599,
        0,
        815,
        9960,
        'Royal_Guard',
        1,
        'Fire_Trebuchet',
        1,
        'Stealth_Sniper',
        1,
        'Royal_Cavalry',
        1,
    ];
    researches['Army_Defense_I'][2] = [
        4095, 6824, 6824, 5004, 23993, 0, 1357, 33060,
    ];
    researches['Army_Defense_I'][3] = [
        12283, 20471, 20471, 15012, 71978, 0, 2443, 49560,
    ];
    researches['Army_Defense_I'][4] = [
        40941, 68234, 68234, 50039, 479853, 0, 7329, 89220,
    ];
    researches['Army_Defense_I'][5] = [
        102351, 170585, 170585, 125096, 1199633, 0, 21988, 267540,
    ];
    researches['Army_Defense_I'][6] = [
        204702, 341169, 341169, 250191, 2399265, 0, 65964, 802560,
    ];
    researches['Army_Defense_I'][7] = [
        1137229,
        1421536,
        2274458,
        852922,
        5998162,
        0,
        197890,
        2407560,
        'Army_Health_I',
        6,
    ];
    researches['Army_Defense_I'][8] = [
        2047012,
        3411686,
        3411686,
        2501903,
        11996323,
        0,
        593671,
        7222620,
        'Cavalry_Defense',
        8,
        'Infantry_Defense',
        8,
        'Ranged_Defense',
        8,
        'Siege_Toughness',
        8,
    ];
    researches['Army_Defense_I'][9] = [
        4094023,
        6823372,
        6823372,
        5003806,
        47985292,
        0,
        1781012,
        21667740,
        'Cavalry_Defense',
        9,
        'Infantry_Defense',
        9,
        'Ranged_Defense',
        9,
        'Siege_Toughness',
        9,
    ];
    researches['Army_Defense_I'][10] = [
        8188046,
        13646743,
        13646743,
        10007612,
        107966906,
        0,
        4452531,
        54169320,
        'Cavalry_Defense',
        10,
        'Infantry_Defense',
        10,
        'Ranged_Defense',
        10,
        'Siege_Toughness',
        10,
    ];
    researches['Training_Speed_I'][1] = [514, 700, 700, 420, 756, 0, 24, 400];
    researches['Royal_Cavalry'][1] = [
        485897,
        583076,
        485897,
        388717,
        944264,
        0,
        77979,
        953220,
        'Cavalry_Health',
        1,
    ];
    researches['Stealth_Sniper'][1] = [
        355852,
        559753,
        559753,
        410485,
        906493,
        0,
        74831,
        915060,
        'Ranged_Health',
        1,
    ];
    researches['Fire_Trebuchet'][1] = [
        419815,
        699691,
        699691,
        513107,
        1133116,
        0,
        93539,
        1143840,
        'Siege_Durability',
        1,
    ];
    researches['Royal_Guard'][1] = [
        349846,
        583076,
        583076,
        427589,
        944264,
        0,
        77979,
        953220,
        'Infantry_Health',
        1,
    ];
    researches['Royal_Cavalry'][1] = [
        485897,
        583076,
        485897,
        388717,
        944264,
        0,
        77979,
        953220,
        'Cavalry_Health',
        1,
    ];
    researches['Stealth_Sniper'][1] = [
        355852,
        559753,
        559753,
        410485,
        906493,
        0,
        74831,
        915060,
        'Ranged_Health',
        1,
    ];
    researches['Fire_Trebuchet'][1] = [
        419815,
        699691,
        699691,
        513107,
        1133116,
        0,
        93539,
        1143840,
        'Siege_Durability',
        1,
    ];
    researches['Royal_Guard'][1] = [
        349846,
        583076,
        583076,
        427589,
        944264,
        0,
        77979,
        953220,
        'Infantry_Health',
        1,
    ];
    researches['Siege_Attack'][10] = [
        4548915, 5458698, 4548915, 3639132, 21593382, 0, 890506, 10833900,
    ];
    researches['Siege_Attack'][9] = [
        2274458, 2729349, 2274458, 1819566, 9597059, 0, 356202, 4333560,
    ];
    researches['Siege_Attack'][8] = [
        1137229, 1364675, 1137229, 909783, 2399265, 0, 118734, 1444560,
    ];
    researches['Siege_Attack'][7] = [
        568615, 682338, 568615, 454892, 1199633, 0, 39578, 481560,
    ];
    researches['Siege_Attack'][6] = [
        113723, 136468, 113723, 90979, 479853, 0, 13193, 160560,
    ];
    researches['Siege_Attack'][5] = [
        56862, 68234, 56862, 45490, 239927, 0, 4398, 53520,
    ];
    researches['Siege_Attack'][4] = [
        22745, 27294, 22745, 18196, 95971, 0, 1466, 17880,
    ];
    researches['Siege_Attack'][3] = [
        6824, 8189, 6824, 5459, 14396, 0, 488, 9960,
    ];
    researches['Siege_Attack'][2] = [
        2275, 2730, 2275, 1820, 4799, 0, 272, 6660,
    ];
    researches['Siege_Attack'][1] = [
        683,
        819,
        683,
        546,
        720,
        0,
        163,
        2040,
        'Intelligence_Report',
        1,
    ];
    researches['Siege_Toughness'][10] = [
        5458698,
        6823372,
        10917395,
        4094023,
        32390072,
        0,
        1335759,
        16250820,
        'Siege_Attack',
        10,
    ];
    researches['Siege_Toughness'][9] = [
        2728349,
        3411686,
        5458698,
        2047012,
        14395588,
        0,
        543304,
        6500340,
        'Siege_Attack',
        9,
    ];
    researches['Siege_Toughness'][8] = [
        1364675,
        1705843,
        2728349,
        1023506,
        3598897,
        0,
        178101,
        2166780,
        'Siege_Attack',
        8,
    ];
    researches['Siege_Toughness'][7] = [
        682338, 852922, 1364675, 511753, 1799449, 0, 59367, 722280,
    ];
    researches['Siege_Toughness'][6] = [
        136468, 170585, 272935, 102351, 719780, 0, 19789, 240780,
    ];
    researches['Siege_Toughness'][5] = [
        68234, 85293, 136468, 51176, 359890, 0, 6596, 80280,
    ];
    researches['Siege_Toughness'][4] = [
        27294, 34117, 54587, 20471, 143956, 0, 2199, 26760,
    ];
    researches['Siege_Toughness'][3] = [
        8189, 10236, 1637, 6142, 21594, 0, 733, 14880,
    ];
    researches['Siege_Toughness'][2] = [
        2730, 3412, 5459, 22048, 7198, 0, 407, 9960,
    ];
    researches['Siege_Toughness'][1] = [
        819,
        1024,
        1683,
        615,
        1080,
        0,
        245,
        3000,
        'Siege_Attack',
        1,
    ];
    researches['Reptilian_Rider'][1] = [
        76966,
        128277,
        128277,
        94070,
        207738,
        0,
        17149,
        209700,
        'Cavalry_Defense',
        1,
        'Academy',
        9,
    ];
    researches['Sharpshooter'][1] = [
        97180,
        97180,
        97180,
        97180,
        188853,
        0,
        15590,
        190680,
        'Ranged_Defense',
        1,
    ];
    researches['Catapult'][1] = [
        153932,
        256554,
        256554,
        188139,
        415476,
        0,
        34298,
        419400,
        'Siege_Toughness',
        1,
    ];
    researches['Gladiator'][1] = [
        76966,
        128277,
        128277,
        94070,
        207738,
        0,
        17149,
        209700,
        'Infantry_Defense',
        1,
        'Academy',
        17,
    ];
    researches['Siege_Durability'][10] = [
        4912828,
        8188046,
        8188046,
        6004567,
        32390072,
        0,
        1335759,
        16250820,
        'Siege_Toughness',
        10,
        'Catapult',
        1,
    ];
    researches['Siege_Durability'][9] = [
        2456414,
        4094023,
        4094023,
        3002284,
        14395588,
        0,
        534304,
        6500340,
        'Siege_Toughness',
        9,
    ];
    researches['Siege_Durability'][8] = [
        1228207,
        2047012,
        2047012,
        1501142,
        3598897,
        0,
        178101,
        2166780,
        'Siege_Toughness',
        8,
    ];
    researches['Siege_Durability'][7] = [
        614104, 1023506, 1023506, 750571, 1799449, 0, 59367, 722280,
    ];
    researches['Siege_Durability'][6] = [
        122821, 204702, 204702, 150115, 719780, 0, 19789, 240780,
    ];
    researches['Siege_Durability'][5] = [
        61411, 102351, 102351, 75058, 359890, 0, 6596, 80280,
    ];
    researches['Siege_Durability'][4] = [
        24565, 40941, 40941, 30023, 143956, 0, 2199, 26760,
    ];
    researches['Siege_Durability'][3] = [
        7370, 12283, 12283, 9007, 21594, 0, 733, 14880,
    ];
    researches['Siege_Durability'][2] = [
        2457, 4095, 4095, 3003, 7198, 0, 407, 9960,
    ];
    researches['Siege_Durability'][1] = [
        737,
        1229,
        1229,
        901,
        1080,
        0,
        245,
        3000,
        'Catapult',
        1,
    ];
    researches['Heroic_Fighter'][1] = [
        4198142,
        6996903,
        6996903,
        5131063,
        11331160,
        0,
        1247182,
        15250860,
        'Army_Offense_I',
        10,
    ];
    researches['Destroyer'][1] = [
        5579523,
        9329204,
        9329204,
        6841417,
        15108213,
        0,
        1558978,
        19063560,
        'Army_Offense_I',
        10,
    ];
    researches['Heroic_Cannoneer'][1] = [
        3778328,
        6297213,
        6297213,
        4617956,
        10198044,
        0,
        1091285,
        13344540,
        'Army_Offense_I',
        10,
    ];
    researches['Ancient_Drake_Rider'][1] = [
        4198142,
        6996903,
        6996903,
        5131063,
        11331160,
        0,
        1247182,
        15250860,
        'Army_Offense_I',
        10,
    ];

    researches['Construction Speed'] = [];
    researches['Construction Speed'][1] = [
        571, 714, 1142, 429, 794, 0, 180, 420,
    ];
    researches['Construction Speed'][2] = [
        1903, 2379, 3806, 1428, 5288, 0, 299, 2280,
    ];
    researches['Construction Speed'][3] = [
        5709, 7136, 11418, 4282, 15862, 0, 538, 6780,
    ];
    researches['Construction Speed'][4] = [
        19029, 23786, 38058, 14272, 105743, 0, 1616, 20220,
    ];
    researches['Construction Speed'][5] = [
        47572, 59465, 95143, 35679, 264356, 0, 4845, 60600,
    ];
    researches['Construction Speed'][6] = [
        95143, 118929, 190286, 71358, 528712, 0, 14536, 181740,
    ];
    researches['Construction Speed'][7] = [
        475714, 594643, 951428, 356786, 1321779, 0, 43608, 545220,
    ];
    researches['Construction Speed'][8] = [
        951428, 1189285, 1902856, 713571, 2643558, 0, 130823, 1635600,
    ];
    researches['Construction Speed'][9] = [
        1902856, 2378570, 3805712, 1427142, 10574231, 0, 392471, 4906740,
    ];
    researches['Construction Speed'][10] = [
        3805712, 4757140, 7611423, 2854284, 23792019, 0, 981178, 12266880,
    ];

    researches['Food Harvesting I'] = [];
    researches['Food Harvesting I'][1] = [35, 58, 58, 42, 397, 0, 90, 240];
    researches['Food Harvesting I'][2] = [
        115, 191, 191, 140, 2644, 0, 150, 1140,
    ];
    researches['Food Harvesting I'][3] = [
        343, 571, 571, 419, 7931, 0, 269, 3420,
    ];
    researches['Food Harvesting I'][4] = [
        1142, 1903, 1903, 1396, 52872, 0, 808, 10140,
    ];
    researches['Food Harvesting I'][5] = [
        2855, 4758, 4758, 3489, 132178, 0, 2422, 30300,
    ];
    researches['Food Harvesting I'][6] = [
        5709, 9515, 9515, 6978, 264356, 0, 7268, 90900,
    ];
    researches['Food Harvesting I'][7] = [
        28543, 47572, 47572, 34886, 660890, 0, 21804, 272640,
    ];
    researches['Food Harvesting I'][8] = [
        57086, 95143, 95143, 69772, 1321779, 0, 65412, 817800,
    ];
    researches['Food Harvesting I'][9] = [
        114172, 190286, 190286, 139543, 5287116, 0, 196235, 2453400,
    ];
    researches['Food Harvesting I'][10] = [
        228343, 380572, 380572, 279086, 11896010, 0, 490589, 6133440,
    ];

    researches['Vault Management'] = [];
    researches['Vault Management'][1] = [
        86,
        143,
        143,
        105,
        278,
        0,
        63,
        840,
        'Construction Speed',
        1,
    ];
    researches['Vault Management'][2] = [
        286, 476, 476, 349, 1851, 0, 105, 3180,
    ];
    researches['Vault Management'][3] = [
        857, 1428, 1428, 1047, 5552, 0, 188, 6540,
    ];
    researches['Vault Management'][4] = [
        2855, 4758, 4758, 3489, 37010, 0, 566, 9180,
    ];
    researches['Vault Management'][5] = [
        7136, 11893, 11893, 8722, 92525, 0, 1696, 21180,
    ];
    researches['Vault Management'][6] = [
        14272, 23786, 23786, 17443, 185050, 0, 5087, 63540,
    ];
    researches['Vault Management'][7] = [
        71358, 118929, 118929, 87215, 462623, 0, 15263, 190560,
    ];
    researches['Vault Management'][8] = [
        142715, 237857, 237857, 174429, 925246, 0, 45788, 571680,
    ];
    researches['Vault Management'][9] = [
        285429, 475714, 475714, 348857, 3700981, 0, 137365, 1715040,
    ];
    researches['Vault Management'][10] = [
        570857,
        951428,
        951428,
        697714,
        8327207,
        0,
        343412,
        4287600,
        'Construction Speed',
        10,
    ];

    researches['Stone Harvesting I'] = [];
    researches['Stone Harvesting I'][1] = [
        86,
        143,
        143,
        105,
        397,
        0,
        90,
        1140,
        'Food Harvesting I',
        1,
    ];
    researches['Stone Harvesting I'][2] = [
        286, 476, 476, 349, 2644, 0, 150, 4500,
    ];
    researches['Stone Harvesting I'][3] = [
        857, 1428, 1428, 1047, 7931, 0, 269, 9360,
    ];
    researches['Stone Harvesting I'][4] = [
        2855, 4758, 4758, 3489, 52872, 0, 808, 13080,
    ];
    researches['Stone Harvesting I'][5] = [
        7136, 11893, 11893, 8722, 132178, 0, 2422, 30300,
    ];
    researches['Stone Harvesting I'][6] = [
        14272, 23786, 23786, 17443, 264356, 0, 7268, 90780,
    ];
    researches['Stone Harvesting I'][7] = [
        71358, 118929, 118929, 87215, 660890, 0, 21804, 272280,
    ];
    researches['Stone Harvesting I'][8] = [
        142715, 237857, 237857, 174429, 1321779, 0, 65412, 816720,
    ];
    researches['Stone Harvesting I'][9] = [
        285429, 475714, 475714, 348857, 5287116, 0, 196235, 2450100,
    ];
    researches['Stone Harvesting I'][10] = [
        570857,
        951428,
        951428,
        697714,
        11896010,
        0,
        490589,
        6125160,
        'Food Harvesting I',
        10,
    ];

    researches['Timber Harvesting I'] = [];
    researches['Timber Harvesting I'][1] = [
        86,
        143,
        143,
        105,
        397,
        0,
        90,
        1140,
        'Food Harvesting I',
        1,
    ];
    researches['Timber Harvesting I'][2] = [
        286, 476, 476, 349, 2644, 0, 150, 4500,
    ];
    researches['Timber Harvesting I'][3] = [
        857, 1428, 1428, 1047, 7931, 0, 269, 9360,
    ];
    researches['Timber Harvesting I'][4] = [
        2855, 4758, 4758, 3489, 52872, 0, 808, 13080,
    ];
    researches['Timber Harvesting I'][5] = [
        7136, 11893, 11893, 8722, 132178, 0, 2422, 30300,
    ];
    researches['Timber Harvesting I'][6] = [
        14272, 23786, 23786, 17443, 264356, 0, 7268, 90780,
    ];
    researches['Timber Harvesting I'][7] = [
        71358, 118929, 118929, 87215, 660890, 0, 21804, 272280,
    ];
    researches['Timber Harvesting I'][8] = [
        142715, 237857, 237857, 175429, 1321779, 0, 65412, 816720,
    ];
    researches['Timber Harvesting I'][9] = [
        285429, 475714, 475714, 348857, 5287116, 0, 196235, 2450100,
    ];
    researches['Timber Harvesting I'][10] = [
        570857,
        951428,
        951428,
        697714,
        11896010,
        0,
        490589,
        6125160,
        'Food Harvesting I',
        10,
    ];

    researches['Metal Harvesting I'] = [];
    researches['Metal Harvesting I'][1] = [
        86,
        143,
        143,
        105,
        397,
        0,
        90,
        1140,
        'Food Harvesting I',
        1,
    ];
    researches['Metal Harvesting I'][2] = [
        286, 476, 476, 349, 2644, 0, 150, 4500,
    ];
    researches['Metal Harvesting I'][3] = [
        857, 1428, 1428, 1047, 7931, 0, 269, 9360,
    ];
    researches['Metal Harvesting I'][4] = [
        2855, 4758, 4758, 3489, 52872, 0, 808, 13080,
    ];
    researches['Metal Harvesting I'][5] = [
        7136, 11893, 11893, 8722, 132178, 0, 2422, 30300,
    ];
    researches['Metal Harvesting I'][6] = [
        14272, 23786, 23786, 17443, 264356, 0, 7268, 90780,
    ];
    researches['Metal Harvesting I'][7] = [
        71358, 118929, 118929, 87215, 660890, 0, 21804, 272280,
    ];
    researches['Metal Harvesting I'][8] = [
        142715, 237857, 237857, 175429, 1321779, 0, 65412, 816720,
    ];
    researches['Metal Harvesting I'][9] = [
        285429, 475714, 475714, 348857, 5287116, 0, 196235, 2450100,
    ];
    researches['Metal Harvesting I'][10] = [
        570857,
        951428,
        951428,
        697714,
        11896010,
        0,
        490589,
        6125160,
        'Food Harvesting I',
        10,
    ];

    researches['Weight Training I'] = [];
    researches['Weight Training I'][1] = [
        514,
        857,
        857,
        628,
        476,
        0,
        108,
        1380,
        'Vault Management',
        1,
    ];
    researches['Weight Training I'][2] = [
        1713, 2855, 2855, 2094, 3173, 0, 180, 5400,
    ];
    researches['Weight Training I'][3] = [
        5138, 8563, 8563, 6280, 9517, 0, 323, 11220,
    ];
    researches['Weight Training I'][4] = [
        17126, 28543, 28543, 20932, 63446, 0, 969, 15720,
    ];
    researches['Weight Training I'][5] = [
        42815, 71358, 71358, 53239, 158614, 0, 2907, 36300,
    ];
    researches['Weight Training I'][6] = [
        85629, 142715, 142715, 104658, 317227, 0, 8721, 108900,
    ];
    researches['Weight Training I'][7] = [
        428143, 713571, 713571, 523286, 793068, 0, 26165, 326700,
    ];
    researches['Weight Training I'][8] = [
        856286, 1427142, 1427142, 1046571, 1586135, 0, 78494, 980040,
    ];
    researches['Weight Training I'][9] = [
        1712571, 2854284, 2854284, 2093142, 6344539, 0, 235483, 2940120,
    ];
    researches['Weight Training I'][10] = [
        3425141,
        5708568,
        5708568,
        4186283,
        14275212,
        0,
        588707,
        7350180,
        'Vault Management',
        10,
    ];

    researches['Resource Harvesting I'] = [];
    researches['Resource Harvesting I'][1] = [
        514,
        857,
        857,
        628,
        516,
        0,
        117,
        1500,
        'Stone Harvesting I',
        1,
        'Timber Harvesting I',
        1,
        'Metal Harvesting I',
        1,
    ];
    researches['Resource Harvesting I'][2] = [
        1713, 2855, 2855, 2094, 3437, 0, 195, 5880,
    ];
    researches['Resource Harvesting I'][3] = [
        5138, 8563, 8563, 6280, 10310, 0, 349, 12180,
    ];
    researches['Resource Harvesting I'][4] = [
        17126, 28543, 28543, 20943, 68773, 0, 1050, 17040,
    ];
    researches['Resource Harvesting I'][5] = [
        42815, 71358, 71358, 52329, 171832, 0, 3150, 39360,
    ];
    researches['Resource Harvesting I'][6] = [
        85629, 142715, 194658, 104658, 343663, 0, 9448, 118020,
    ];
    researches['Resource Harvesting I'][7] = [
        428143, 713571, 713571, 523286, 859157, 0, 28345, 353940,
    ];
    researches['Resource Harvesting I'][8] = [
        856026, 1427142, 1427142, 1046571, 1718313, 0, 85036, 1061700,
    ];
    researches['Resource Harvesting I'][9] = [
        1712571, 2854284, 2854284, 2093142, 6873250, 0, 255106, 3185100,
    ];
    researches['Resource Harvesting I'][10] = [
        3425141,
        5708568,
        5708568,
        4186283,
        15464813,
        0,
        637765,
        7962720,
        'Stone Harvesting I',
        10,
        'Timber Harvesting I',
        10,
        'Metal Harvesting I',
        10,
    ];

    researches['Battle Hall'] = [];
    researches['Battle Hall'][1] = [
        140,
        140,
        140,
        140,
        1,
        0,
        30,
        120,
        'Embassy',
        1,
    ];
    researches['Battle Hall'][2] = [
        210,
        210,
        210,
        210,
        2,
        0,
        60,
        240,
        'Embassy',
        2,
    ];
    researches['Battle Hall'][3] = [
        315,
        315,
        315,
        315,
        5,
        0,
        90,
        480,
        'Embassy',
        3,
    ];
    researches['Battle Hall'][4] = [
        472,
        472,
        472,
        472,
        12,
        0,
        126,
        960,
        'Embassy',
        4,
    ];
    researches['Battle Hall'][5] = [
        708,
        708,
        708,
        708,
        20,
        0,
        176,
        1920,
        'Embassy',
        5,
    ];
    researches['Battle Hall'][6] = [
        1063,
        1063,
        1063,
        1063,
        30,
        0,
        247,
        3840,
        'Embassy',
        6,
    ];
    researches['Battle Hall'][7] = [
        1594,
        1594,
        1594,
        1594,
        45,
        0,
        346,
        7680,
        'Embassy',
        7,
    ];
    researches['Battle Hall'][8] = [
        2392,
        2392,
        2392,
        2392,
        60,
        0,
        484,
        15360,
        'Embassy',
        8,
    ];
    researches['Battle Hall'][9] = [
        3588,
        3588,
        3588,
        3588,
        85,
        0,
        677,
        27648,
        'Embassy',
        9,
    ];
    researches['Battle Hall'][10] = [
        5382,
        5382,
        5382,
        5382,
        100,
        0,
        949,
        44237,
        'Embassy',
        10,
    ];
    researches['Battle Hall'][11] = [
        8073,
        8073,
        8073,
        8073,
        120,
        0,
        1328,
        57508,
        'Embassy',
        11,
    ];
    researches['Battle Hall'][12] = [
        12109,
        12109,
        12109,
        12109,
        150,
        0,
        1860,
        66135,
        'Embassy',
        12,
    ];
    researches['Battle Hall'][13] = [
        18164,
        18164,
        18164,
        18164,
        180,
        0,
        2603,
        76055,
        'Embassy',
        13,
    ];
    researches['Battle Hall'][14] = [
        27246,
        27246,
        27246,
        27246,
        250,
        0,
        3645,
        87463,
        'Embassy',
        14,
    ];
    researches['Battle Hall'][15] = [
        40870,
        40870,
        40870,
        40870,
        340,
        0,
        5102,
        100582,
        'Embassy',
        15,
    ];
    researches['Battle Hall'][16] = [
        61305,
        61305,
        61305,
        61305,
        500,
        0,
        7144,
        115669,
        'Embassy',
        16,
    ];
    researches['Battle Hall'][17] = [
        91957,
        91957,
        91957,
        91957,
        700,
        0,
        10000,
        133020,
        'Embassy',
        17,
    ];
    researches['Battle Hall'][18] = [
        137936,
        137936,
        137936,
        137936,
        900,
        0,
        14001,
        152972,
        'Embassy',
        18,
    ];
    researches['Battle Hall'][19] = [
        206904,
        206904,
        206904,
        206904,
        1200,
        0,
        19602,
        175918,
        'Embassy',
        19,
    ];
    researches['Battle Hall'][20] = [
        310357,
        310357,
        310357,
        310357,
        1500,
        0,
        27442,
        202306,
        'Embassy',
        20,
    ];
    researches['Battle Hall'][21] = [
        465535,
        465535,
        465535,
        465535,
        1800,
        0,
        38419,
        262998,
        'Embassy',
        21,
    ];
    researches['Battle Hall'][22] = [
        698303,
        698303,
        698303,
        698303,
        2100,
        0,
        53787,
        420796,
        'Embassy',
        22,
    ];
    researches['Battle Hall'][23] = [
        1047455,
        1047455,
        1047455,
        1047455,
        2400,
        0,
        75302,
        757432,
        'Embassy',
        23,
    ];
    researches['Battle Hall'][24] = [
        1571183,
        1571183,
        1571183,
        1571183,
        3000,
        0,
        105422,
        1363378,
        'Embassy',
        24,
    ];
    researches['Battle Hall'][25] = [
        3142367,
        3142367,
        3142367,
        3142367,
        4500,
        0,
        179217,
        4771820,
        'Embassy',
        25,
    ];

    researches['Prison'] = [];
    researches['Prison'][1] = [375, 375, 375, 375, 1, 0, 25, 150, 'Manor', 10];
    researches['Prison'][2] = [562, 562, 562, 562, 2, 0, 50, 300, 'Manor', 10];
    researches['Prison'][3] = [843, 843, 843, 843, 5, 0, 75, 600, 'Manor', 10];
    researches['Prison'][4] = [
        1265,
        1265,
        1265,
        1265,
        12,
        0,
        105,
        1200,
        'Manor',
        10,
    ];
    researches['Prison'][5] = [
        1898,
        1898,
        1898,
        1898,
        20,
        0,
        147,
        2400,
        'Manor',
        10,
    ];
    researches['Prison'][6] = [
        2847,
        2847,
        2847,
        2847,
        30,
        0,
        205,
        4800,
        'Manor',
        10,
    ];
    researches['Prison'][7] = [
        4271,
        4271,
        4271,
        4271,
        45,
        0,
        288,
        9600,
        'Manor',
        10,
    ];
    researches['Prison'][8] = [
        6407,
        6407,
        6407,
        6407,
        60,
        0,
        404,
        19200,
        'Manor',
        10,
    ];
    researches['Prison'][9] = [
        9610,
        9610,
        9610,
        9610,
        85,
        0,
        565,
        34560,
        'Manor',
        10,
    ];
    researches['Prison'][10] = [
        14416,
        14416,
        14416,
        14416,
        100,
        0,
        790,
        55296,
        'Manor',
        10,
    ];
    researches['Prison'][11] = [
        21624,
        21624,
        21624,
        21624,
        120,
        0,
        1107,
        71885,
        'Manor',
        11,
    ];
    researches['Prison'][12] = [
        32436,
        32436,
        32436,
        32436,
        150,
        0,
        1550,
        82668,
        'Manor',
        12,
    ];
    researches['Prison'][13] = [
        48654,
        48654,
        48654,
        48654,
        180,
        0,
        2169,
        95068,
        'Manor',
        13,
    ];
    researches['Prison'][14] = [
        72982,
        72982,
        72982,
        72982,
        250,
        0,
        3037,
        109328,
        'Manor',
        14,
    ];
    researches['Prison'][15] = [
        109473,
        109473,
        109473,
        109473,
        340,
        0,
        4252,
        125727,
        'Manor',
        15,
    ];
    researches['Prison'][16] = [
        164210,
        164210,
        164210,
        164210,
        500,
        0,
        5953,
        144587,
        'Manor',
        16,
    ];
    researches['Prison'][17] = [
        246315,
        246315,
        246315,
        246315,
        700,
        0,
        8334,
        166274,
        'Manor',
        17,
    ];
    researches['Prison'][18] = [
        369472,
        369472,
        369472,
        369472,
        900,
        0,
        11668,
        191215,
        'Manor',
        18,
    ];
    researches['Prison'][19] = [
        554209,
        554209,
        554209,
        554209,
        1200,
        0,
        16334,
        219898,
        'Manor',
        19,
    ];
    researches['Prison'][20] = [
        831314,
        831314,
        831314,
        831314,
        1500,
        0,
        22869,
        252882,
        'Manor',
        20,
    ];
    researches['Prison'][21] = [
        1246971,
        1246971,
        1246971,
        1246971,
        1800,
        0,
        32016,
        328747,
        'Manor',
        21,
    ];
    researches['Prison'][22] = [
        1870456,
        1870456,
        1870456,
        1870456,
        2100,
        0,
        44822,
        525995,
        'Manor',
        22,
    ];
    researches['Prison'][23] = [
        2805685,
        2805685,
        2805685,
        2805685,
        2400,
        0,
        62751,
        946790,
        'Manor',
        23,
    ];
    researches['Prison'][24] = [
        4208528,
        4208528,
        4208528,
        4208528,
        3000,
        0,
        87852,
        1704222,
        'Manor',
        24,
    ];
    researches['Prison'][25] = [
        8417056,
        8417056,
        8417056,
        8417056,
        4500,
        0,
        149348,
        5964775,
        'Manor',
        25,
    ];

    researches['Altar'] = [];
    researches['Altar'][1] = [594, 810, 810, 486, 1, 0, 29, 120, 'Prison', 17];
    researches['Altar'][2] = [
        891,
        1215,
        1215,
        729,
        2,
        0,
        58,
        240,
        'Prison',
        17,
    ];
    researches['Altar'][3] = [
        1336,
        1822,
        1822,
        1093,
        5,
        0,
        87,
        480,
        'Prison',
        17,
    ];
    researches['Altar'][4] = [
        2004,
        2733,
        2733,
        1640,
        12,
        0,
        121,
        960,
        'Prison',
        17,
    ];
    researches['Altar'][5] = [
        3007,
        4100,
        4100,
        2460,
        20,
        0,
        171,
        1920,
        'Prison',
        17,
    ];
    researches['Altar'][6] = [
        4510,
        6150,
        6150,
        3690,
        30,
        0,
        239,
        3840,
        'Prison',
        17,
    ];
    researches['Altar'][7] = [
        6766,
        9226,
        9226,
        5535,
        45,
        0,
        334,
        7680,
        'Prison',
        17,
    ];
    researches['Altar'][8] = [
        10149,
        13839,
        13839,
        8303,
        60,
        0,
        468,
        15360,
        'Prison',
        17,
    ];
    researches['Altar'][9] = [
        15223,
        20759,
        20759,
        12455,
        85,
        0,
        665,
        27648,
        'Prison',
        17,
    ];
    researches['Altar'][10] = [
        22835,
        31139,
        31139,
        18683,
        100,
        0,
        917,
        44237,
        'Prison',
        17,
    ];
    researches['Altar'][11] = [
        34253,
        46709,
        46709,
        28025,
        120,
        0,
        1284,
        57508,
        'Prison',
        17,
    ];
    researches['Altar'][12] = [
        51379,
        70063,
        70063,
        42037,
        150,
        0,
        1797,
        66135,
        'Prison',
        17,
    ];
    researches['Altar'][13] = [
        77069,
        105094,
        105094,
        63056,
        180,
        0,
        2517,
        76055,
        'Prison',
        17,
    ];
    researches['Altar'][14] = [
        115603,
        157641,
        157641,
        94585,
        250,
        0,
        3523,
        87463,
        'Prison',
        17,
    ];
    researches['Altar'][15] = [
        173405,
        236462,
        236462,
        141877,
        340,
        0,
        4932,
        100582,
        'Prison',
        17,
    ];
    researches['Altar'][16] = [
        260108,
        354694,
        354694,
        212816,
        500,
        0,
        6906,
        115669,
        'Prison',
        17,
    ];
    researches['Altar'][17] = [
        390163,
        532041,
        532041,
        319224,
        700,
        0,
        9667,
        133020,
        'Prison',
        17,
    ];
    researches['Altar'][18] = [
        585245,
        798061,
        798061,
        478836,
        900,
        0,
        13534,
        152972,
        'Prison',
        18,
    ];
    researches['Altar'][19] = [
        877867,
        1197092,
        1197092,
        718255,
        1200,
        0,
        18949,
        175918,
        'Prison',
        19,
    ];
    researches['Altar'][20] = [
        1316801,
        1795638,
        1795638,
        1077383,
        1500,
        0,
        26527,
        202306,
        'Prison',
        20,
    ];
    researches['Altar'][21] = [
        1975202,
        2693457,
        2693457,
        1616074,
        1800,
        0,
        37139,
        262998,
        'Prison',
        21,
    ];
    researches['Altar'][22] = [
        2962803,
        4040186,
        4040186,
        2424112,
        2100,
        0,
        51993,
        420796,
        'Prison',
        22,
    ];
    researches['Altar'][23] = [
        4444205,
        6060280,
        6060280,
        3636168,
        2400,
        0,
        72792,
        757432,
        'Prison',
        23,
    ];
    researches['Altar'][24] = [
        6666308,
        9090420,
        9090420,
        5454252,
        3000,
        0,
        101908,
        1363378,
        'Prison',
        24,
    ];
    researches['Altar'][25] = [
        13332616,
        18180841,
        18180841,
        10908504,
        4500,
        0,
        173243,
        4771820,
        'Prison',
        25,
    ];

    researches['Academy'] = [];
    researches['Academy'][1] = [465, 465, 372, 558, 0, 0, 32, 101, 'Castle', 1];
    researches['Academy'][2] = [697, 697, 558, 837, 0, 0, 64, 201, 'Castle', 2];
    researches['Academy'][3] = [
        1046,
        1046,
        837,
        1255,
        0,
        0,
        96,
        401,
        'Castle',
        3,
    ];
    researches['Academy'][4] = [
        1569,
        1569,
        1255,
        1883,
        0,
        0,
        134,
        802,
        'Castle',
        4,
    ];
    researches['Academy'][5] = [
        2354,
        2354,
        1883,
        2824,
        0,
        0,
        188,
        1604,
        'Castle',
        5,
    ];
    researches['Academy'][6] = [
        3531,
        3531,
        2824,
        4237,
        0,
        0,
        263,
        3207,
        'Castle',
        6,
    ];
    researches['Academy'][7] = [
        5296,
        5296,
        4237,
        6355,
        0,
        0,
        369,
        6413,
        'Castle',
        7,
    ];
    researches['Academy'][8] = [
        7944,
        7944,
        6355,
        9533,
        0,
        0,
        517,
        12826,
        'Castle ',
        8,
    ];
    researches['Academy'][9] = [
        11917,
        11917,
        9533,
        14300,
        0,
        0,
        722,
        23087,
        'Castle',
        9,
    ];
    researches['Academy'][10] = [
        17876,
        17876,
        14300,
        21451,
        0,
        0,
        1012,
        36938,
        'Castle',
        10,
    ];
    researches['Academy'][11] = [
        26814,
        26814,
        21451,
        32177,
        0,
        0,
        1417,
        48020,
        'Castle',
        11,
    ];
    researches['Academy'][12] = [
        40221,
        40221,
        888,
        48265,
        0,
        0,
        1984,
        55222,
        'Castle',
        12,
    ];
    researches['Academy'][13] = [
        60332,
        60332,
        48265,
        72398,
        0,
        0,
        2776,
        63506,
        'Castle',
        13,
    ];
    researches['Academy'][14] = [
        90498,
        90498,
        72398,
        108597,
        0,
        0,
        3888,
        73031,
        'Castle',
        14,
    ];
    researches['Academy'][15] = [
        135747,
        135747,
        108597,
        162896,
        0,
        0,
        5443,
        83986,
        'Castle',
        15,
    ];
    researches['Academy'][16] = [
        203620,
        203620,
        162896,
        244344,
        0,
        0,
        7619,
        96562,
        'Castle',
        16,
    ];
    researches['Academy'][17] = [
        305430,
        305430,
        244344,
        366517,
        0,
        0,
        10668,
        111071,
        'Castle',
        17,
    ];
    researches['Academy'][18] = [
        458146,
        458146,
        366517,
        549775,
        0,
        0,
        14934,
        139998,
        'Castle',
        18,
    ];
    researches['Academy'][19] = [
        744487,
        744487,
        595590,
        893385,
        0,
        0,
        20909,
        139998,
        'Castle',
        19,
    ];
    researches['Academy'][20] = [
        1030829,
        1030829,
        824663,
        1236995,
        0,
        0,
        29271,
        168926,
        'Castle',
        20,
    ];
    researches['Academy'][21] = [
        1546244,
        1546244,
        1236995,
        1855493,
        0,
        0,
        40981,
        219603,
        'Castle',
        21,
    ];
    researches['Academy'][22] = [
        2319366,
        2319366,
        1855493,
        2783239,
        0,
        0,
        57372,
        351365,
        'Castle',
        22,
    ];
    researches['Academy'][23] = [
        3479049,
        3479049,
        2783239,
        4174859,
        0,
        0,
        80322,
        632456,
        'Castle',
        23,
    ];
    researches['Academy'][24] = [
        5218574,
        5218574,
        4174859,
        6262289,
        0,
        0,
        112450,
        1138420,
        'Castle',
        24,
    ];
    researches['Academy'][25] = [
        10437149,
        10437149,
        8349719,
        12524579,
        0,
        0,
        191165,
        3984470,
        'Castle',
        25,
        'Castle Wall',
        25,
        'Watchtower',
        25,
        'Vault',
        25,
        'Battle Hall',
        25,
        'Altar',
        25,
        'Trading Post',
        25,
        'Infirmary',
        25,
        'Gold Hammer',
        1,
    ];

    researches['Castle'] = [];
    researches['Castle'][1] = [0, 0, 0, 0, 0, 0, 0, 100];
    researches['Castle'][2] = [
        1188,
        1620,
        1620,
        972,
        0,
        0,
        135,
        240,
        'Castle Wall',
        1,
    ];
    researches['Castle'][3] = [
        1782,
        2430,
        2430,
        1458,
        0,
        0,
        135,
        720,
        'Castle Wall',
        2,
    ];
    researches['Castle'][4] = [
        2673,
        3645,
        3645,
        2187,
        0,
        0,
        189,
        1440,
        'Castle Wall',
        3,
    ];
    researches['Castle'][5] = [
        4009,
        5467,
        5467,
        3280,
        0,
        0,
        264,
        2880,
        'Castle Wall',
        4,
    ];
    researches['Castle'][6] = [
        6014,
        8201,
        8201,
        4921,
        0,
        0,
        371,
        5760,
        'Castle Wall',
        5,
        'Vault',
        5,
    ];
    researches['Castle'][7] = [
        9021,
        12301,
        12301,
        7381,
        0,
        0,
        518,
        10358,
        'Castle Wall',
        6,
        'Infirmary',
        6,
    ];
    researches['Castle'][8] = [
        13532,
        18452,
        18452,
        11072,
        0,
        0,
        726,
        18663,
        'Castle Wall',
        7,
        'Academy',
        7,
    ];
    researches['Castle'][9] = [
        20298,
        27679,
        27679,
        16608,
        0,
        0,
        1017,
        33593,
        'Castle Wall',
        8,
        'Trading Post',
        8,
        'Manor',
        8,
    ];
    researches['Castle'][10] = [
        30447,
        41518,
        41518,
        24912,
        0,
        0,
        1423,
        60467,
        'Castle Wall',
        9,
        'Barracks',
        9,
    ];
    researches['Castle'][11] = [
        45672,
        62278,
        62278,
        37368,
        0,
        0,
        1992,
        108840,
        'Castle Wall',
        10,
        'Watchtower',
        10,
    ];
    researches['Castle'][12] = [
        68508,
        93417,
        93417,
        56052,
        0,
        0,
        2789,
        141491,
        'Castle Wall',
        11,
        'Vault',
        11,
    ];
    researches['Castle'][13] = [
        102762,
        140126,
        140126,
        84079,
        0,
        0,
        3905,
        183960,
        'Castle Wall',
        12,
        'Infirmary',
        12,
    ];
    researches['Castle'][14] = [
        154143,
        210189,
        210189,
        126118,
        0,
        0,
        5467,
        220726,
        'Castle Wall',
        13,
        'Academy',
        13,
    ];
    researches['Castle'][15] = [
        231214,
        315283,
        315283,
        189177,
        0,
        0,
        7654,
        253835,
        'Castle Wall',
        14,
        'Trading Post',
        14,
    ];
    researches['Castle'][16] = [
        346821,
        472925,
        472925,
        283766,
        0,
        0,
        10715,
        291910,
        'Castle Wall',
        15,
        'Barracks',
        15,
    ];
    researches['Castle'][17] = [
        520195,
        709338,
        709338,
        425620,
        0,
        0,
        15001,
        335697,
        'Castle Wall',
        16,
        'Watchtower',
        16,
        'Manor',
        16,
    ];
    researches['Castle'][18] = [
        780348,
        1064082,
        1064082,
        638475,
        0,
        0,
        21002,
        386100,
        'Castle Wall',
        17,
        'Vault',
        17,
    ];
    researches['Castle'][19] = [
        1170521,
        1596123,
        1596123,
        957712,
        0,
        0,
        29402,
        443959,
        'Castle Wall',
        18,
        'Infirmary',
        18,
    ];
    researches['Castle'][20] = [
        1755782,
        2394184,
        2394184,
        1436568,
        0,
        0,
        41164,
        510553,
        'Castle Wall',
        19,
        'Academy',
        19,
    ];
    researches['Castle'][21] = [
        2633673,
        3591277,
        3591277,
        2154852,
        0,
        0,
        57628,
        663718,
        'Castle Wall',
        20,
        'Trading Post',
        20,
    ];
    researches['Castle'][22] = [
        3928509,
        5356915,
        5356915,
        3214278,
        0,
        0,
        80680,
        1061949,
        'Castle Wall',
        21,
        'Barracks',
        21,
    ];
    researches['Castle'][23] = [
        5925765,
        8080373,
        8080373,
        4848418,
        0,
        0,
        112953,
        1911507,
        'Castle Wall',
        22,
        'Watchtower',
        22,
    ];
    researches['Castle'][24] = [
        8888648,
        12120560,
        12120560,
        7272627,
        0,
        0,
        158113,
        3440713,
        'Castle Wall',
        23,
        'Vault',
        23,
    ];
    researches['Castle'][25] = [
        17777296,
        24241121,
        24241121,
        14545254,
        0,
        0,
        268826,
        12042493,
        'Castle Wall',
        24,
        'Infirmary',
        24,
        'Manor',
        24,
    ];

    researches['Castle Wall'] = [];
    researches['Castle Wall'][1] = [0, 0, 0, 0, 0, 0, 0, 0];
    researches['Castle Wall'][2] = [1125, 1350, 1125, 900, 0, 0, 30, 240];
    researches['Castle Wall'][3] = [1687, 2025, 1687, 1350, 0, 0, 50, 480];
    researches['Castle Wall'][4] = [2531, 3037, 2531, 2025, 0, 0, 70, 960];
    researches['Castle Wall'][5] = [3796, 4556, 3796, 3037, 0, 0, 150, 1920];
    researches['Castle Wall'][6] = [
        5695,
        6834,
        5695,
        4556,
        0,
        0,
        250,
        3840,
        'Workshop',
        6,
    ];
    researches['Castle Wall'][7] = [
        8542,
        10251,
        8542,
        6834,
        0,
        0,
        400,
        7680,
        'Workshop',
        7,
    ];
    researches['Castle Wall'][8] = [
        12814,
        15377,
        12814,
        10251,
        0,
        0,
        600,
        15360,
        'Workshop',
        8,
    ];
    researches['Castle Wall'][9] = [
        19221,
        23066,
        19221,
        15377,
        0,
        0,
        850,
        27648,
        'Workshop',
        9,
    ];
    researches['Castle Wall'][10] = [
        28832,
        34599,
        28832,
        23066,
        0,
        0,
        1150,
        44237,
        'Workshop',
        10,
    ];
    researches['Castle Wall'][11] = [
        43248,
        51898,
        43248,
        34599,
        0,
        0,
        1500,
        57508,
        'Workshop',
        11,
    ];
    researches['Castle Wall'][12] = [
        64873,
        77847,
        64873,
        51898,
        0,
        0,
        1900,
        66135,
        'Workshop',
        12,
    ];
    researches['Castle Wall'][13] = [
        97309,
        116771,
        77847,
        76055,
        0,
        0,
        2300,
        76055,
        'Workshop',
        13,
    ];
    researches['Castle Wall'][14] = [
        145964,
        175157,
        145964,
        116771,
        0,
        0,
        2700,
        87463,
        'Workshop',
        14,
    ];
    researches['Castle Wall'][15] = [
        218946,
        262736,
        218946,
        175157,
        0,
        0,
        3100,
        100582,
        'Workshop',
        15,
    ];
    researches['Castle Wall'][16] = [
        328420,
        394104,
        328420,
        262736,
        0,
        0,
        3500,
        115669,
        'Workshop',
        16,
    ];
    researches['Castle Wall'][17] = [
        492630,
        591156,
        492630,
        394104,
        0,
        0,
        3900,
        133020,
        'Workshop',
        17,
    ];
    researches['Castle Wall'][18] = [
        738945,
        886735,
        738945,
        591156,
        0,
        0,
        4300,
        152972,
        'Workshop',
        18,
    ];
    researches['Castle Wall'][19] = [
        1108418,
        1330102,
        1108418,
        886735,
        0,
        0,
        4900,
        175918,
        'Workshop',
        19,
    ];
    researches['Castle Wall'][20] = [
        1662628,
        1995154,
        1662628,
        1330102,
        0,
        0,
        5600,
        202306,
        'Workshop',
        20,
    ];
    researches['Castle Wall'][21] = [
        2493942,
        2992731,
        2493942,
        1995154,
        0,
        0,
        6400,
        262998,
        'Workshop',
        21,
    ];
    researches['Castle Wall'][22] = [
        3740913,
        4489096,
        3740913,
        2992731,
        0,
        0,
        7300,
        420796,
        'Workshop',
        22,
    ];
    researches['Castle Wall'][23] = [
        5611370,
        6733644,
        5611370,
        4489096,
        0,
        0,
        8400,
        757432,
        'Workshop',
        23,
    ];
    researches['Castle Wall'][24] = [
        8417056,
        10100467,
        8417056,
        6733644,
        0,
        0,
        9500,
        1363378,
        'Workshop',
        24,
    ];
    researches['Castle Wall'][25] = [
        16834112,
        20200934,
        16834112,
        13467289,
        0,
        0,
        12500,
        4771820,
        'Workshop',
        25,
    ];

    researches['Workshop'] = [];
    researches['Workshop'][1] = [425, 425, 425, 425, 0, 0, 15, 75, 'Mines', 1];
    researches['Workshop'][2] = [637, 637, 637, 637, 0, 0, 30, 165, 'Mines', 2];
    researches['Workshop'][3] = [956, 956, 956, 956, 0, 0, 45, 330, 'Mines', 3];
    researches['Workshop'][4] = [
        1434,
        1434,
        1434,
        1434,
        0,
        0,
        63,
        660,
        'Mines',
        4,
    ];
    researches['Workshop'][5] = [
        2151,
        2151,
        2151,
        2151,
        0,
        0,
        88,
        1320,
        'Mines',
        5,
    ];
    researches['Workshop'][6] = [
        3227,
        3227,
        3227,
        3227,
        0,
        0,
        123,
        2640,
        'Mines',
        6,
    ];
    researches['Workshop'][7] = [
        4841,
        4841,
        4841,
        4841,
        0,
        0,
        173,
        5280,
        'Mines',
        7,
    ];
    researches['Workshop'][8] = [
        7261,
        7261,
        7261,
        7261,
        0,
        0,
        242,
        10560,
        'Mines',
        8,
    ];
    researches['Workshop'][9] = [
        10892,
        10892,
        10892,
        10892,
        0,
        0,
        339,
        19008,
        'Mines',
        9,
    ];
    researches['Workshop'][10] = [
        16338,
        16338,
        16338,
        16338,
        0,
        0,
        474,
        30413,
        'Mines',
        10,
    ];
    researches['Workshop'][11] = [
        24507,
        24507,
        24507,
        24507,
        0,
        0,
        664,
        39537,
        'Mines',
        11,
    ];
    researches['Workshop'][12] = [
        36761,
        36761,
        36761,
        36761,
        0,
        0,
        930,
        45468,
        'Mines',
        12,
    ];
    researches['Workshop'][13] = [
        55142,
        55142,
        55142,
        55142,
        0,
        0,
        1302,
        52288,
        'Mines',
        13,
    ];
    researches['Workshop'][14] = [
        82713,
        82713,
        82713,
        82713,
        0,
        0,
        1822,
        60131,
        'Mines',
        14,
    ];
    researches['Workshop'][15] = [
        124069,
        124069,
        124069,
        124069,
        0,
        0,
        2551,
        69150,
        'Mines',
        15,
    ];
    researches['Workshop'][16] = [
        186104,
        186104,
        186104,
        186104,
        0,
        0,
        3572,
        79523,
        'Mines',
        16,
    ];
    researches['Workshop'][17] = [
        279157,
        279157,
        279157,
        279157,
        0,
        0,
        5000,
        91451,
        'Mines',
        17,
    ];
    researches['Workshop'][18] = [
        418736,
        418736,
        418736,
        418736,
        0,
        0,
        7001,
        105169,
        'Mines',
        18,
    ];
    researches['Workshop'][19] = [
        628104,
        628104,
        628104,
        628104,
        0,
        0,
        9801,
        120944,
        'Mines',
        19,
    ];
    researches['Workshop'][20] = [
        942156,
        942156,
        942156,
        942156,
        0,
        0,
        13721,
        139086,
        'Mines',
        20,
    ];
    researches['Workshop'][21] = [
        1413234,
        1413234,
        1413234,
        1413234,
        0,
        0,
        19209,
        180811,
        'Mines',
        21,
    ];
    researches['Workshop'][22] = [
        2119851,
        2119851,
        2119851,
        2119851,
        0,
        0,
        26894,
        289297,
        'Mines',
        22,
    ];
    researches['Workshop'][23] = [
        3179776,
        3179776,
        3179776,
        3179776,
        0,
        0,
        37651,
        21638,
        'Mines',
        23,
    ];
    researches['Workshop'][24] = [
        4769665,
        4769665,
        4769665,
        4769665,
        0,
        0,
        52711,
        37222,
        'Mines',
        24,
    ];
    researches['Workshop'][25] = [
        9539330,
        9539330,
        9539330,
        9539330,
        0,
        0,
        89608,
        3280626,
        'Mines',
        25,
    ];

    researches['Farm'] = [];
    researches['Farm'][1] = [0, 100, 100, 100, 0, 0, 6, 72, 'Castle', 1];
    researches['Farm'][2] = [0, 150, 150, 150, 0, 0, 14, 108, 'Castle', 2];
    researches['Farm'][3] = [0, 225, 225, 225, 0, 0, 21, 216, 'Castle', 3];
    researches['Farm'][4] = [0, 337, 337, 337, 0, 0, 29, 432, 'Castle', 4];
    researches['Farm'][5] = [0, 506, 506, 506, 0, 0, 41, 864, 'Castle', 5];
    researches['Farm'][6] = [0, 759, 759, 759, 0, 0, 57, 1728, 'Castle', 6];
    researches['Farm'][7] = [0, 1139, 1139, 1139, 0, 0, 80, 3456, 'Castle', 7];
    researches['Farm'][8] = [0, 1708, 1708, 1708, 0, 0, 112, 6912, 'Castle', 8];
    researches['Farm'][9] = [
        0,
        2562,
        2562,
        2562,
        0,
        0,
        157,
        12442,
        'Castle',
        9,
    ];
    researches['Farm'][10] = [
        0,
        3844,
        3844,
        3844,
        0,
        0,
        220,
        19907,
        'Castle',
        10,
    ];
    researches['Farm'][11] = [
        0,
        5766,
        5766,
        5766,
        0,
        0,
        307,
        25879,
        'Castle',
        11,
    ];
    researches['Farm'][12] = [
        0,
        8650,
        8650,
        8650,
        0,
        0,
        431,
        30020,
        'Castle',
        12,
    ];
    researches['Farm'][13] = [
        0,
        12975,
        12975,
        12975,
        0,
        0,
        602,
        35423,
        'Castle',
        13,
    ];
    researches['Farm'][14] = [
        0,
        19462,
        19462,
        19462,
        0,
        0,
        844,
        41799,
        'Castle',
        14,
    ];
    researches['Farm'][15] = [
        0,
        29193,
        29193,
        29193,
        0,
        0,
        1181,
        49323,
        'Castle',
        15,
    ];
    researches['Farm'][16] = [
        0,
        43790,
        43790,
        43790,
        0,
        0,
        1654,
        58201,
        'Castle',
        16,
    ];
    researches['Farm'][17] = [
        0,
        76919,
        76919,
        76919,
        0,
        0,
        2315,
        68677,
        'Castle',
        17,
    ];
    researches['Farm'][18] = [
        0,
        118456,
        118456,
        118456,
        0,
        0,
        3241,
        81039,
        'Castle',
        18,
    ];
    researches['Farm'][19] = [
        0,
        182422,
        182422,
        182422,
        0,
        0,
        4537,
        95626,
        'Castle',
        19,
    ];
    researches['Farm'][20] = [
        0,
        280930,
        280930,
        280930,
        0,
        0,
        6353,
        112838,
        'Castle',
        20,
    ];
    researches['Farm'][21] = [
        0,
        432632,
        432632,
        432632,
        0,
        0,
        8893,
        152331,
        'Castle',
        21,
    ];
    researches['Farm'][22] = [
        0,
        666255,
        666255,
        666255,
        0,
        0,
        12450,
        251346,
        'Castle',
        22,
    ];
    researches['Farm'][23] = [
        0,
        1026032,
        1026032,
        1026032,
        0,
        0,
        17431,
        452423,
        'Castle',
        23,
    ];
    researches['Farm'][24] = [
        0,
        1580090,
        1580090,
        1580090,
        0,
        0,
        24404,
        814360,
        'Castle',
        24,
    ];
    researches['Farm'][25] = [
        0,
        3160180,
        3160180,
        3160180,
        0,
        0,
        41485,
        2850260,
        'Castle',
        25,
    ];

    researches['Lumber Mill'] = [];
    researches['Lumber Mill'][1] = [100, 100, 0, 100, 0, 0, 6, 60];
    researches['Lumber Mill'][2] = [
        150,
        150,
        0,
        150,
        0,
        0,
        14,
        120,
        'Castle',
        2,
    ];
    researches['Lumber Mill'][3] = [
        225,
        225,
        0,
        225,
        0,
        0,
        21,
        240,
        'Castle',
        3,
    ];
    researches['Lumber Mill'][4] = [
        338,
        338,
        0,
        338,
        0,
        0,
        29,
        480,
        'Castle',
        4,
    ];
    researches['Lumber Mill'][5] = [
        507,
        507,
        0,
        507,
        0,
        0,
        41,
        960,
        'Castle',
        5,
    ];
    researches['Lumber Mill'][6] = [
        759,
        759,
        0,
        759,
        0,
        0,
        57,
        1920,
        'Castle',
        6,
    ];
    researches['Lumber Mill'][7] = [
        1139,
        1139,
        0,
        1139,
        0,
        0,
        80,
        3840,
        'Castle',
        7,
    ];
    researches['Lumber Mill'][8] = [
        1708,
        1708,
        0,
        1708,
        0,
        0,
        112,
        7680,
        'Castle',
        8,
    ];
    researches['Lumber Mill'][9] = [
        2562,
        2562,
        0,
        2562,
        0,
        0,
        158,
        13824,
        'Castle',
        9,
    ];
    researches['Lumber Mill'][10] = [
        3844,
        3844,
        0,
        3844,
        0,
        0,
        220,
        22119,
        'Castle',
        10,
    ];
    researches['Lumber Mill'][11] = [
        5766,
        5766,
        0,
        5766,
        0,
        0,
        307,
        28754,
        'Castle',
        11,
    ];
    researches['Lumber Mill'][12] = [
        8800,
        8800,
        0,
        8800,
        0,
        0,
        431,
        33930,
        'Castle',
        12,
    ];
    researches['Lumber Mill'][13] = [
        13675,
        13675,
        0,
        13675,
        0,
        0,
        602,
        40037,
        'Castle',
        13,
    ];
    researches['Lumber Mill'][14] = [
        21060,
        21060,
        0,
        21060,
        0,
        0,
        844,
        47244,
        'Castle',
        14,
    ];
    researches['Lumber Mill'][15] = [
        32433,
        32433,
        0,
        32433,
        0,
        0,
        1181,
        55748,
        'Castle',
        15,
    ];
    researches['Lumber Mill'][16] = [
        49947,
        49947,
        0,
        49947,
        0,
        0,
        1654,
        65783,
        'Castle',
        16,
    ];
    researches['Lumber Mill'][17] = [
        76919,
        76919,
        0,
        76919,
        0,
        0,
        2315,
        77623,
        'Castle',
        17,
    ];
    researches['Lumber Mill'][18] = [
        118455,
        118455,
        0,
        118455,
        0,
        0,
        3241,
        91595,
        'Castle',
        18,
    ];
    researches['Lumber Mill'][19] = [
        182422,
        182422,
        0,
        182422,
        0,
        0,
        4537,
        108082,
        'Castle',
        19,
    ];
    researches['Lumber Mill'][20] = [
        280930,
        280930,
        0,
        280930,
        0,
        0,
        6353,
        127537,
        'Castle',
        20,
    ];
    researches['Lumber Mill'][21] = [
        432633,
        432633,
        0,
        432633,
        0,
        0,
        8893,
        172175,
        'Castle',
        21,
    ];
    researches['Lumber Mill'][22] = [
        666255,
        666255,
        0,
        666255,
        0,
        0,
        12450,
        284088,
        'Castle',
        22,
    ];
    researches['Lumber Mill'][23] = [
        1026032,
        1026032,
        0,
        1026032,
        0,
        0,
        17431,
        511359,
        'Castle',
        23,
    ];
    researches['Lumber Mill'][24] = [
        1580090,
        1580090,
        0,
        1580090,
        0,
        0,
        24404,
        971581,
        'Castle',
        24,
    ];
    researches['Lumber Mill'][25] = [
        3160180,
        3160180,
        0,
        3160180,
        0,
        0,
        41485,
        3497692,
        'Castle',
        25,
    ];

    researches['Quarry'] = [];
    researches['Quarry'][1] = [100, 0, 100, 100, 0, 0, 5, 60, 'Castle', 1];
    researches['Quarry'][2] = [150, 0, 150, 150, 0, 0, 10, 140, 'Castle', 2];
    researches['Quarry'][3] = [225, 0, 225, 225, 0, 0, 15, 280, 'Castle', 3];
    researches['Quarry'][4] = [337, 0, 337, 337, 0, 0, 21, 560, 'Castle', 4];
    researches['Quarry'][5] = [506, 0, 506, 506, 0, 0, 30, 1119, 'Castle', 5];
    researches['Quarry'][6] = [759, 0, 759, 759, 0, 0, 57, 2237, 'Castle', 6];
    researches['Quarry'][7] = [
        1139,
        0,
        1139,
        1139,
        0,
        0,
        80,
        4474,
        'Castle',
        7,
    ];
    researches['Quarry'][8] = [
        1709,
        0,
        1709,
        1709,
        0,
        0,
        81,
        8948,
        'Castle',
        8,
    ];
    researches['Quarry'][9] = [
        2562,
        0,
        2562,
        2562,
        0,
        0,
        157,
        16105,
        'Castle',
        9,
    ];
    researches['Quarry'][10] = [
        3844,
        0,
        3844,
        3844,
        0,
        0,
        220,
        25768,
        'Castle',
        10,
    ];
    researches['Quarry'][11] = [
        5766,
        0,
        5766,
        5766,
        0,
        0,
        307,
        33499,
        'Castle',
        11,
    ];
    researches['Quarry'][12] = [
        8880,
        0,
        8880,
        8880,
        0,
        0,
        431,
        39529,
        'Castle',
        12,
    ];
    researches['Quarry'][13] = [
        13675,
        0,
        13675,
        13675,
        0,
        0,
        602,
        46644,
        'Castle',
        13,
    ];
    researches['Quarry'][14] = [
        21060,
        0,
        21060,
        21060,
        0,
        0,
        844,
        55039,
        'Castle',
        14,
    ];
    researches['Quarry'][15] = [
        32433,
        0,
        32433,
        32433,
        0,
        0,
        1181,
        64946,
        'Castle',
        15,
    ];
    researches['Quarry'][16] = [
        49947,
        0,
        49947,
        49947,
        0,
        0,
        1654,
        76637,
        'Castle',
        16,
    ];
    researches['Quarry'][17] = [
        76919,
        0,
        76919,
        76919,
        0,
        0,
        2315,
        90431,
        'Castle',
        17,
    ];
    researches['Quarry'][18] = [
        118456,
        0,
        118456,
        118456,
        0,
        0,
        3241,
        106709,
        'Castle',
        18,
    ];
    researches['Quarry'][19] = [
        182422,
        0,
        182422,
        182422,
        0,
        0,
        4537,
        125916,
        'Castle',
        19,
    ];
    researches['Quarry'][20] = [
        280930,
        0,
        280930,
        280930,
        0,
        0,
        6353,
        148581,
        'Castle',
        20,
    ];
    researches['Quarry'][21] = [
        432633,
        0,
        432633,
        432633,
        0,
        0,
        8893,
        200584,
        'Castle',
        21,
    ];
    researches['Quarry'][22] = [
        666255,
        0,
        666255,
        666255,
        0,
        0,
        12450,
        330963,
        'Castle',
        22,
    ];
    researches['Quarry'][23] = [
        1026032,
        0,
        1026032,
        1026032,
        0,
        0,
        17431,
        595733,
        'Castle',
        23,
    ];
    researches['Quarry'][24] = [
        1580090,
        0,
        1580090,
        1580090,
        0,
        0,
        24404,
        1131892,
        'Castle',
        24,
    ];
    researches['Quarry'][25] = [
        3160180,
        0,
        3160180,
        3160180,
        0,
        0,
        41485,
        4074831,
        'Castle',
        25,
    ];

    researches['Mines'] = [];
    researches['Mines'][1] = [100, 100, 100, 0, 0, 0, 5, 60];
    researches['Mines'][2] = [150, 150, 150, 0, 0, 0, 10, 160];
    researches['Mines'][3] = [225, 225, 225, 0, 0, 0, 15, 320];
    researches['Mines'][4] = [337, 337, 337, 0, 0, 0, 21, 639];
    researches['Mines'][5] = [506, 506, 506, 0, 0, 0, 30, 1277];
    researches['Mines'][6] = [759, 759, 759, 0, 0, 0, 57, 2554, 'Castle', 6];
    researches['Mines'][7] = [1139, 1139, 1139, 0, 0, 0, 80, 5108, 'Castle', 7];
    researches['Mines'][8] = [
        1709,
        1709,
        1709,
        0,
        0,
        0,
        81,
        10215,
        'Castle',
        8,
    ];
    researches['Mines'][9] = [
        2562,
        2562,
        2562,
        0,
        0,
        0,
        157,
        18386,
        'Castle',
        9,
    ];
    researches['Mines'][10] = [
        3844,
        3844,
        3844,
        0,
        0,
        0,
        220,
        29418,
        'Castle',
        10,
    ];
    researches['Mines'][11] = [
        5766,
        5766,
        5766,
        0,
        0,
        0,
        307,
        38243,
        'Castle',
        11,
    ];
    researches['Mines'][12] = [
        8800,
        8800,
        8800,
        0,
        0,
        0,
        431,
        45127,
        'Castle',
        12,
    ];
    researches['Mines'][13] = [
        13675,
        13675,
        13675,
        0,
        0,
        0,
        602,
        53250,
        'Castle',
        13,
    ];
    researches['Mines'][14] = [
        21060,
        21060,
        21060,
        0,
        0,
        0,
        844,
        62835,
        'Castle',
        14,
    ];
    researches['Mines'][15] = [
        32433,
        32433,
        32433,
        0,
        0,
        0,
        1181,
        74145,
        'Castle',
        14,
    ];
    researches['Mines'][16] = [
        49947,
        49947,
        49947,
        0,
        0,
        0,
        1654,
        87491,
        'Castle',
        15,
    ];
    researches['Mines'][17] = [
        76919,
        76919,
        76919,
        0,
        0,
        0,
        2315,
        103239,
        'Castle',
        17,
    ];
    researches['Mines'][18] = [
        118456,
        118456,
        118456,
        0,
        0,
        0,
        3241,
        121822,
        'Castle',
        18,
    ];
    researches['Mines'][19] = [
        182422,
        182422,
        182422,
        0,
        0,
        0,
        4537,
        143749,
        'Castle',
        19,
    ];
    researches['Mines'][20] = [
        280930,
        280930,
        280930,
        0,
        0,
        0,
        6353,
        169624,
        'Castle',
        20,
    ];
    researches['Mines'][21] = [
        432633,
        432633,
        432633,
        0,
        0,
        0,
        8893,
        228993,
        'Castle',
        21,
    ];
    researches['Mines'][22] = [
        666255,
        666255,
        666255,
        0,
        0,
        0,
        12450,
        377837,
        'Castle',
        22,
    ];
    researches['Mines'][23] = [
        1026032,
        1026032,
        1026032,
        0,
        0,
        0,
        17431,
        680107,
        'Castle',
        23,
    ];
    researches['Mines'][24] = [
        1580090,
        1580090,
        1580090,
        0,
        0,
        0,
        24404,
        1292203,
        'Castle',
        24,
    ];
    researches['Mines'][25] = [
        3160180,
        3160180,
        3160180,
        0,
        0,
        0,
        41485,
        4651930,
        'Castle',
        25,
    ];

    researches['Vault'] = [];
    researches['Vault'][1] = [0, 0, 0, 0, 0, 0, 6, 100];
    researches['Vault'][2] = [253, 423, 423, 310, 0, 0, 12, 120];
    researches['Vault'][3] = [380, 634, 634, 465, 0, 0, 18, 240, 'Castle', 3];
    researches['Vault'][4] = [571, 951, 951, 697, 0, 0, 25, 480, 'Castle', 4];
    researches['Vault'][5] = [
        856,
        1427,
        1427,
        1046,
        0,
        0,
        35,
        960,
        'Castle',
        5,
    ];
    researches['Vault'][6] = [
        1284,
        2141,
        2141,
        1570,
        0,
        0,
        49,
        1920,
        'Castle',
        6,
    ];
    researches['Vault'][7] = [
        1927,
        3212,
        3212,
        2355,
        0,
        0,
        70,
        3840,
        'Castle',
        7,
    ];
    researches['Vault'][8] = [
        2890,
        4818,
        4818,
        3533,
        0,
        0,
        96,
        7680,
        'Castle',
        8,
    ];
    researches['Vault'][9] = [
        4336,
        7227,
        7227,
        5300,
        0,
        0,
        136,
        13824,
        'Casle',
        9,
    ];
    researches['Vault'][10] = [
        6504,
        10841,
        10841,
        7950,
        0,
        0,
        190,
        22119,
        'Castle',
        10,
    ];
    researches['Vault'][11] = [
        9756,
        16261,
        16261,
        11925,
        0,
        0,
        265,
        28754,
        'Castle',
        11,
    ];
    researches['Vault'][12] = [
        14635,
        24392,
        24392,
        17887,
        0,
        0,
        372,
        33068,
        'Castle',
        12,
    ];
    researches['Vault'][13] = [
        21953,
        36588,
        36588,
        26831,
        0,
        0,
        521,
        38028,
        'Castle',
        13,
    ];
    researches['Vault'][14] = [
        32929,
        54882,
        54882,
        40247,
        0,
        0,
        729,
        43732,
        'Castle',
        14,
    ];
    researches['Vault'][15] = [
        49394,
        82324,
        82324,
        60370,
        0,
        0,
        1020,
        50291,
        'Castle',
        15,
    ];
    researches['Vault'][16] = [
        74091,
        123486,
        123486,
        90556,
        0,
        0,
        1429,
        57835,
        'Castle',
        16,
    ];
    researches['Vault'][17] = [
        111137,
        185229,
        185229,
        135834,
        0,
        0,
        2000,
        66510,
        'Castle',
        17,
    ];
    researches['Vault'][18] = [
        166706,
        277843,
        277843,
        203752,
        0,
        0,
        2800,
        76486,
        'Castle',
        18,
    ];
    researches['Vault'][19] = [
        250059,
        416765,
        416765,
        305628,
        0,
        0,
        3921,
        87959,
        'Castle',
        19,
    ];
    researches['Vault'][20] = [
        375088,
        625148,
        625148,
        458442,
        0,
        0,
        5488,
        101153,
        'Castle',
        20,
    ];
    researches['Vault'][21] = [
        562633,
        937722,
        937722,
        687663,
        0,
        0,
        7684,
        131499,
        'Castle',
        21,
    ];
    researches['Vault'][22] = [
        843950,
        1406583,
        1406583,
        1031494,
        0,
        0,
        10757,
        210398,
        'Castle',
        22,
    ];
    researches['Vault'][23] = [
        1265925,
        2109875,
        2109875,
        1547241,
        0,
        0,
        15061,
        378716,
        'Castle',
        23,
    ];
    researches['Vault'][24] = [
        1898887,
        3164813,
        3164813,
        2320862,
        0,
        0,
        21084,
        681689,
        'Castle',
        24,
    ];
    researches['Vault'][25] = [
        3797775,
        6329626,
        6329626,
        4641725,
        0,
        0,
        35843,
        2385910,
        'Castle',
        25,
    ];

    researches['Watchtower'] = [];
    researches['Watchtower'][1] = [100, 100, 100, 100, 0, 0, 15, 100];
    researches['Watchtower'][2] = [
        412,
        412,
        330,
        495,
        0,
        0,
        30,
        150,
        'Barracks',
        2,
    ];
    researches['Watchtower'][3] = [
        618,
        618,
        495,
        742,
        0,
        0,
        45,
        300,
        'Barracks',
        3,
    ];
    researches['Watchtower'][4] = [
        928,
        928,
        742,
        1113,
        0,
        0,
        63,
        600,
        'Barracks',
        4,
    ];
    researches['Watchtower'][5] = [
        1392,
        1392,
        1113,
        1670,
        0,
        0,
        88,
        1200,
        'Barracks',
        5,
    ];
    researches['Watchtower'][6] = [
        2088,
        2088,
        1670,
        2505,
        0,
        0,
        123,
        2400,
        'Barracks',
        6,
    ];
    researches['Watchtower'][7] = [
        3132,
        3132,
        2505,
        3758,
        0,
        0,
        173,
        4800,
        'Barracks',
        7,
    ];
    researches['Watchtower'][8] = [
        4698,
        4698,
        3758,
        5638,
        0,
        0,
        242,
        9600,
        'Barracks',
        8,
    ];
    researches['Watchtower'][9] = [
        7047,
        7047,
        5638,
        8457,
        0,
        0,
        339,
        17280,
        'Barracks',
        9,
    ];
    researches['Watchtower'][10] = [
        10571,
        10571,
        8457,
        12686,
        0,
        0,
        474,
        27648,
        'Barracks',
        10,
    ];
    researches['Watchtower'][11] = [
        15857,
        15857,
        12686,
        19029,
        0,
        0,
        664,
        35943,
        'Barracks',
        11,
    ];
    researches['Watchtower'][12] = [
        23786,
        23786,
        19029,
        28544,
        0,
        0,
        930,
        41334,
        'Barracks',
        12,
    ];
    researches['Watchtower'][13] = [
        35680,
        35680,
        28544,
        42816,
        0,
        0,
        1302,
        47534,
        'Barracks',
        13,
    ];
    researches['Watchtower'][14] = [
        53520,
        53520,
        42816,
        64224,
        0,
        0,
        1822,
        54664,
        'Barracks',
        14,
    ];
    researches['Watchtower'][15] = [
        80280,
        80280,
        64224,
        96336,
        0,
        0,
        2551,
        62864,
        'Barracks',
        15,
    ];
    researches['Watchtower'][16] = [
        120420,
        120420,
        96336,
        144504,
        0,
        0,
        3572,
        72294,
        'Barracks',
        16,
    ];
    researches['Watchtower'][17] = [
        180631,
        180631,
        144504,
        216757,
        0,
        0,
        5000,
        83137,
        'Barracks',
        17,
    ];
    researches['Watchtower'][18] = [
        270946,
        270946,
        216757,
        325136,
        0,
        0,
        7001,
        95608,
        'Barracks',
        18,
    ];
    researches['Watchtower'][19] = [
        406420,
        406420,
        325136,
        487704,
        0,
        0,
        9801,
        109949,
        'Barracks',
        19,
    ];
    researches['Watchtower'][20] = [
        609630,
        609630,
        487704,
        731556,
        0,
        0,
        13721,
        126441,
        'Barracks',
        20,
    ];
    researches['Watchtower'][21] = [
        914445,
        914445,
        731556,
        1097334,
        0,
        0,
        19209,
        164374,
        'Barracks',
        21,
    ];
    researches['Watchtower'][22] = [
        1371668,
        1371668,
        1097334,
        1646002,
        0,
        0,
        26894,
        10863,
        'Barracks',
        22,
    ];
    researches['Watchtower'][23] = [
        2057502,
        2057502,
        1646002,
        2469003,
        0,
        0,
        37651,
        473395,
        'Barracks',
        23,
    ];
    researches['Watchtower'][24] = [
        3086253,
        3086253,
        2469003,
        3703504,
        0,
        0,
        52711,
        852111,
        'Barracks',
        24,
    ];
    researches['Watchtower'][25] = [
        6172507,
        6172507,
        4938006,
        7407009,
        0,
        0,
        89608,
        2982388,
        'Barracks',
        25,
    ];

    researches['Barracks'] = [];
    researches['Barracks'][1] = [280, 560, 350, 210, 0, 0, 18, 90];
    researches['Barracks'][2] = [420, 840, 525, 315, 0, 0, 36, 180];
    researches['Barracks'][3] = [630, 1260, 787, 472, 0, 0, 54, 360];
    researches['Barracks'][4] = [945, 1890, 1181, 708, 0, 0, 75, 720];
    researches['Barracks'][5] = [1417, 2835, 1771, 1063, 0, 0, 106, 1440];
    researches['Barracks'][6] = [
        2126,
        4252,
        2657,
        1594,
        0,
        0,
        148,
        2880,
        'Quarry',
        6,
    ];
    researches['Barracks'][7] = [
        3189,
        6378,
        3986,
        2392,
        0,
        0,
        208,
        5760,
        'Quarry',
        7,
    ];
    researches['Barracks'][8] = [
        4784,
        9568,
        5980,
        3588,
        0,
        0,
        290,
        11520,
        'Quarry',
        8,
    ];
    researches['Barracks'][9] = [
        7176,
        14352,
        8970,
        5382,
        0,
        0,
        407,
        20736,
        'Quarry',
        9,
    ];
    researches['Barracks'][10] = [
        10764,
        21528,
        13455,
        8073,
        0,
        0,
        569,
        33178,
        'Quarry',
        10,
    ];
    researches['Barracks'][11] = [
        16146,
        32292,
        20182,
        12109,
        0,
        0,
        797,
        43131,
        'Quarry',
        11,
    ];
    researches['Barracks'][12] = [
        24219,
        48438,
        30274,
        18164,
        0,
        0,
        1115,
        49601,
        'Quarry',
        12,
    ];
    researches['Barracks'][13] = [
        36328,
        72657,
        45411,
        27246,
        0,
        0,
        1562,
        57041,
        'Quarry',
        13,
    ];
    researches['Barracks'][14] = [
        54493,
        108986,
        68116,
        40870,
        0,
        0,
        2187,
        65597,
        'Quarry',
        14,
    ];
    researches['Barracks'][15] = [
        81740,
        163480,
        102175,
        61305,
        0,
        0,
        3062,
        75437,
        'Quarry',
        15,
    ];
    researches['Barracks'][16] = [
        122610,
        245220,
        153262,
        91957,
        0,
        0,
        4286,
        86752,
        'Quarry',
        16,
    ];
    researches['Barracks'][17] = [
        183915,
        367830,
        229894,
        137936,
        0,
        0,
        6000,
        99765,
        'Quarry',
        17,
    ];
    researches['Barracks'][18] = [
        275873,
        551746,
        344841,
        206904,
        0,
        0,
        8401,
        114729,
        'Quarry',
        18,
    ];
    researches['Barracks'][19] = [
        413809,
        827619,
        517262,
        310357,
        0,
        0,
        11761,
        131939,
        'Quarry',
        19,
    ];
    researches['Barracks'][20] = [
        620713,
        1241426,
        775893,
        465535,
        0,
        0,
        16452,
        151730,
        'Quarry',
        20,
    ];
    researches['Barracks'][21] = [
        931071,
        1862143,
        1163839,
        698303,
        0,
        0,
        23052,
        197248,
        'Quarry',
        21,
    ];
    researches['Barracks'][22] = [
        1396607,
        2793215,
        1745759,
        1047455,
        0,
        0,
        32272,
        315597,
        'Quarry',
        22,
    ];
    researches['Barracks'][23] = [
        2094911,
        4189823,
        2618639,
        1571183,
        0,
        0,
        45181,
        568074,
        'Quarry',
        23,
    ];
    researches['Barracks'][24] = [
        3142367,
        6284735,
        3927959,
        2356775,
        0,
        0,
        63253,
        1022533,
        'Quarry',
        24,
    ];
    researches['Barracks'][25] = [
        6284735,
        12569470,
        7855919,
        4713551,
        0,
        0,
        107530,
        3578865,
        'Quarry',
        25,
    ];

    researches['Infirmary'] = [];
    researches['Infirmary'][1] = [80, 100, 160, 60, 0, 0, 12, 90];
    researches['Infirmary'][2] = [
        120,
        150,
        240,
        90,
        0,
        0,
        24,
        180,
        'Barracks',
        2,
    ];
    researches['Infirmary'][3] = [
        180,
        225,
        360,
        135,
        0,
        0,
        36,
        360,
        'Barracks',
        3,
    ];
    researches['Infirmary'][4] = [
        270,
        337,
        540,
        202,
        0,
        0,
        50,
        720,
        'Barracks',
        4,
    ];
    researches['Infirmary'][5] = [
        405,
        506,
        810,
        303,
        0,
        0,
        70,
        1440,
        'Barracks',
        5,
    ];
    researches['Infirmary'][6] = [
        607,
        759,
        1215,
        455,
        0,
        0,
        99,
        2304,
        'Barracks',
        6,
    ];
    researches['Infirmary'][7] = [
        911,
        1139,
        1822,
        683,
        0,
        0,
        139,
        3456,
        'Barracks',
        7,
    ];
    researches['Infirmary'][8] = [
        1822,
        2278,
        3645,
        1366,
        0,
        0,
        193,
        5184,
        'Barracks',
        8,
    ];
    researches['Infirmary'][9] = [
        3645,
        4556,
        7290,
        2733,
        0,
        0,
        271,
        7258,
        'Barracks',
        9,
    ];
    researches['Infirmary'][10] = [
        7290,
        9112,
        14580,
        5467,
        0,
        0,
        380,
        10161,
        'Barracks',
        10,
    ];
    researches['Infirmary'][11] = [
        14580,
        18225,
        29160,
        10935,
        0,
        0,
        531,
        13209,
        'Barracks',
        11,
    ];
    researches['Infirmary'][12] = [
        29160,
        36450,
        58320,
        21870,
        0,
        0,
        744,
        17172,
        'Barracks',
        12,
    ];
    researches['Infirmary'][13] = [
        58320,
        72900,
        116640,
        43740,
        0,
        0,
        1041,
        22323,
        'Barracks',
        13,
    ];
    researches['Infirmary'][14] = [
        116640,
        145800,
        233280,
        87480,
        0,
        0,
        1457,
        29020,
        'Barracks',
        14,
    ];
    researches['Infirmary'][15] = [
        233280,
        291600,
        466560,
        174960,
        0,
        0,
        2041,
        37726,
        'Barracks',
        15,
    ];
    researches['Infirmary'][16] = [
        466560,
        583200,
        933120,
        349920,
        0,
        0,
        2857,
        49044,
        'Barracks',
        16,
    ];
    researches['Infirmary'][17] = [
        699840,
        874800,
        1399680,
        524880,
        0,
        0,
        4001,
        53948,
        'Barracks',
        17,
    ];
    researches['Infirmary'][18] = [
        909792,
        1137240,
        1819584,
        682344,
        0,
        0,
        5600,
        59343,
        'Barracks',
        18,
    ];
    researches['Infirmary'][19] = [
        1182729,
        1478412,
        2365459,
        887047,
        0,
        0,
        7841,
        65277,
        'Barracks',
        19,
    ];
    researches['Infirmary'][20] = [
        1537548,
        1921935,
        3075096,
        1153161,
        0,
        0,
        10977,
        71805,
        'Barracks',
        20,
    ];
    researches['Infirmary'][21] = [
        1998813,
        2498516,
        3997626,
        1499109,
        0,
        0,
        15367,
        86166,
        'Barracks',
        21,
    ];
    researches['Infirmary'][22] = [
        2598456,
        3248071,
        5196913,
        1948842,
        0,
        0,
        21515,
        129249,
        'Barracks',
        22,
    ];
    researches['Infirmary'][23] = [
        3377994,
        4222492,
        6755988,
        2533495,
        0,
        0,
        30121,
        219722,
        'Barracks',
        23,
    ];
    researches['Infirmary'][24] = [
        4391392,
        5489240,
        8782784,
        3293544,
        0,
        0,
        42168,
        417472,
        'Barracks',
        24,
    ];
    researches['Infirmary'][25] = [
        8782784,
        10978480,
        17565568,
        6587088,
        0,
        0,
        71687,
        834954,
        'Barracks',
        25,
    ];

    researches['Manor'] = [];
    researches['Manor'][1] = [
        144,
        240,
        240,
        176,
        0,
        0,
        12,
        60,
        'Farm',
        1,
        'Lumber Mill',
        1,
    ];
    researches['Manor'][2] = [
        216,
        578,
        578,
        264,
        0,
        0,
        24,
        96,
        'Farm',
        1,
        'Lumber Mill',
        1,
    ];
    researches['Manor'][3] = [
        324,
        540,
        540,
        396,
        0,
        0,
        36,
        192,
        'Farm',
        2,
        'Lumber Mill',
        2,
    ];
    researches['Manor'][4] = [
        486,
        810,
        810,
        594,
        0,
        0,
        50,
        384,
        'Farm',
        2,
        'Lumber Mill',
        2,
    ];
    researches['Manor'][5] = [
        729,
        1215,
        1215,
        891,
        0,
        0,
        70,
        768,
        'Farm',
        3,
        'Lumber Mill',
        3,
    ];
    researches['Manor'][6] = [
        1093,
        1822,
        1822,
        1336,
        0,
        0,
        99,
        1536,
        'Farm',
        6,
        'Lumber Mill',
        6,
    ];
    researches['Manor'][7] = [
        1640,
        2733,
        2733,
        2004,
        0,
        0,
        139,
        3072,
        'Farm',
        7,
        'Lumber Mill',
        7,
    ];
    researches['Manor'][8] = [
        2460,
        4100,
        4100,
        3007,
        0,
        0,
        193,
        6144,
        'Farm',
        8,
        'Lumber Mill',
        8,
    ];
    researches['Manor'][9] = [
        3690,
        6150,
        6150,
        4510,
        0,
        0,
        271,
        11060,
        'Farm',
        9,
        'Lumber Mill',
        9,
    ];
    researches['Manor'][10] = [
        5535,
        9226,
        9226,
        6766,
        0,
        0,
        380,
        17695,
        'Farm',
        10,
        'Lumber Mill',
        10,
    ];
    researches['Manor'][11] = [
        8303,
        13839,
        13839,
        10149,
        0,
        0,
        531,
        23004,
        'Farm',
        11,
        'Lumber Mill',
        11,
    ];
    researches['Manor'][12] = [
        12455,
        20759,
        20759,
        15223,
        0,
        0,
        744,
        26455,
        'Farm',
        12,
        'Lumber Mill',
        12,
    ];
    researches['Manor'][13] = [
        18683,
        31139,
        31139,
        22835,
        0,
        0,
        1041,
        30422,
        'Farm',
        13,
        'Lumber Mill',
        13,
    ];
    researches['Manor'][14] = [
        28025,
        46708,
        46708,
        34253,
        0,
        0,
        1458,
        34985,
        'Farm',
        14,
        'Lumber Mill',
        14,
    ];
    researches['Manor'][15] = [
        42037,
        70063,
        70063,
        51379,
        0,
        0,
        2041,
        40233,
        'Farm',
        15,
        'Lumber Mill',
        15,
    ];
    researches['Manor'][16] = [
        63056,
        105094,
        105094,
        77069,
        0,
        0,
        2857,
        46268,
        'Farm',
        16,
        'Lumber Mill',
        16,
    ];
    researches['Manor'][17] = [
        94585,
        157641,
        157641,
        115603,
        0,
        0,
        4001,
        53208,
        'Farm',
        17,
        'Lumber Mill',
        17,
    ];
    researches['Manor'][18] = [
        141877,
        236462,
        236462,
        173405,
        0,
        0,
        5600,
        61189,
        'Farm',
        18,
        'Lumber Mill',
        18,
    ];
    researches['Manor'][19] = [
        212816,
        354694,
        354694,
        260108,
        0,
        0,
        7841,
        70368,
        'Farm',
        19,
        'Lumber Mill',
        19,
    ];
    researches['Manor'][20] = [
        319224,
        532041,
        532041,
        390163,
        0,
        0,
        10977,
        80923,
        'Farm',
        20,
        'Lumber Mill',
        20,
    ];
    researches['Manor'][21] = [
        478836,
        798061,
        798061,
        585245,
        0,
        0,
        15367,
        105199,
        'Farm',
        21,
        'Lumber Mill',
        21,
    ];
    researches['Manor'][22] = [
        718255,
        1197092,
        1197092,
        877867,
        0,
        0,
        21515,
        168319,
        'Farm',
        22,
        'Lumber Mill',
        22,
    ];
    researches['Manor'][23] = [
        1077383,
        1795638,
        1795638,
        1316801,
        0,
        0,
        30121,
        302973,
        'Farm',
        23,
        'Lumber Mill',
        23,
    ];
    researches['Manor'][24] = [
        1616074,
        2693457,
        2693457,
        1975202,
        0,
        0,
        42168,
        545351,
        'Farm',
        24,
        'Lumber Mill',
        24,
    ];
    researches['Manor'][25] = [
        3232149,
        5386915,
        5386915,
        3950404,
        0,
        0,
        71687,
        1908728,
        'Farm',
        25,
        'Lumber Mill',
        25,
    ];

    researches['Embassy'] = [];
    researches['Embassy'][1] = [418, 570, 570, 342, 0, 0, 18, 72, 'Quarry', 6];
    researches['Embassy'][2] = [627, 855, 855, 513, 0, 0, 36, 180, 'Quarry', 6];
    researches['Embassy'][3] = [
        940,
        1282,
        1282,
        1154,
        0,
        0,
        54,
        360,
        'Quarry',
        6,
    ];
    researches['Embassy'][4] = [
        1410,
        1923,
        1923,
        1154,
        0,
        0,
        75,
        720,
        'Quarry',
        7,
    ];
    researches['Embassy'][5] = [
        2116,
        2885,
        2885,
        1731,
        0,
        0,
        106,
        1440,
        'Quarry',
        7,
    ];
    researches['Embassy'][6] = [
        3174,
        3328,
        4328,
        2597,
        0,
        0,
        148,
        2880,
        'Quarry',
        8,
    ];
    researches['Embassy'][7] = [
        4761,
        6492,
        6492,
        3895,
        0,
        0,
        208,
        4761,
        'Quarry',
        8,
    ];
    researches['Embassy'][8] = [
        7141,
        9738,
        9738,
        5843,
        0,
        0,
        290,
        11520,
        'Quarry',
        9,
    ];
    researches['Embassy'][9] = [
        10712,
        14608,
        14608,
        8765,
        0,
        0,
        407,
        20736,
        'Quarry',
        9,
    ];
    researches['Embassy'][10] = [
        16069,
        21912,
        21912,
        13147,
        0,
        0,
        569,
        33178,
        'Quarry',
        10,
    ];
    researches['Embassy'][11] = [
        24103,
        32869,
        32869,
        19721,
        0,
        0,
        797,
        43131,
        'Quarry',
        11,
    ];
    researches['Embassy'][12] = [
        36155,
        49303,
        49303,
        29582,
        0,
        0,
        1115,
        49601,
        'Quarry',
        12,
    ];
    researches['Embassy'][13] = [
        54233,
        73955,
        73955,
        44373,
        0,
        0,
        1562,
        57041,
        'Quarry',
        13,
    ];
    researches['Embassy'][14] = [
        81350,
        110933,
        110933,
        66559,
        0,
        0,
        2187,
        65597,
        'Quarry',
        14,
    ];
    researches['Embassy'][15] = [
        122026,
        166399,
        166399,
        99839,
        0,
        0,
        3062,
        75437,
        'Quarry',
        15,
    ];
    researches['Embassy'][16] = [
        183039,
        249599,
        248599,
        149759,
        0,
        0,
        4286,
        86752,
        'Quarry',
        16,
    ];
    researches['Embassy'][17] = [
        274559,
        374399,
        374399,
        224639,
        0,
        0,
        6000,
        99765,
        'Quarry',
        17,
    ];
    researches['Embassy'][18] = [
        411839,
        561598,
        561598,
        336959,
        0,
        0,
        8401,
        114729,
        'Quarry',
        18,
    ];
    researches['Embassy'][19] = [
        617758,
        842398,
        842398,
        505439,
        0,
        0,
        11761,
        131939,
        'Quarry',
        19,
    ];
    researches['Embassy'][20] = [
        926638,
        1263597,
        1263597,
        758158,
        0,
        0,
        16465,
        151730,
        'Quarry',
        20,
    ];
    researches['Embassy'][21] = [
        1389957,
        1896396,
        1896396,
        1137237,
        0,
        0,
        23052,
        197248,
        'Quarry',
        21,
    ];
    researches['Embassy'][22] = [
        2084935,
        2843094,
        2843094,
        1705856,
        0,
        0,
        32272,
        315597,
        'Quarry',
        22,
    ];
    researches['Embassy'][23] = [
        3127403,
        4264641,
        4264641,
        2558785,
        0,
        0,
        45181,
        568074,
        'Quarry',
        23,
    ];
    researches['Embassy'][24] = [
        4691106,
        6396963,
        6396396,
        3838178,
        0,
        0,
        63253,
        1022533,
        'Quarry',
        24,
    ];
    researches['Embassy'][25] = [
        9382211,
        12793925,
        12793925,
        7676355,
        0,
        0,
        107530,
        3578865,
        'Quarry',
        25,
    ];

    researches['Trading Post'] = [];
    researches['Trading Post'][1] = [
        352,
        480,
        480,
        288,
        0,
        0,
        13,
        75,
        'Castle',
        5,
    ];
    researches['Trading Post'][2] = [
        528,
        720,
        720,
        432,
        0,
        0,
        26,
        150,
        'Castle',
        5,
    ];
    researches['Trading Post'][3] = [
        792,
        1080,
        1080,
        648,
        0,
        0,
        39,
        300,
        'Castle',
        5,
    ];
    researches['Trading Post'][4] = [
        1188,
        1620,
        1620,
        972,
        0,
        0,
        54,
        600,
        'Castle',
        6,
    ];
    researches['Trading Post'][5] = [
        1782,
        2430,
        2430,
        1458,
        0,
        0,
        77,
        1200,
        'Castle',
        6,
    ];
    researches['Trading Post'][6] = [
        2673,
        3645,
        3645,
        2187,
        0,
        0,
        107,
        2400,
        'Castle',
        7,
    ];
    researches['Trading Post'][7] = [
        4009,
        5467,
        5467,
        3280,
        0,
        0,
        149,
        4800,
        'Castle',
        7,
    ];
    researches['Trading Post'][8] = [
        6014,
        8201,
        8201,
        4920,
        0,
        0,
        210,
        9600,
        'Castle',
        8,
    ];
    researches['Trading Post'][9] = [
        9021,
        12301,
        12301,
        7381,
        0,
        0,
        294,
        17280,
        'Castle',
        9,
    ];
    researches['Trading Post'][10] = [
        13532,
        18452,
        18452,
        11071,
        0,
        0,
        411,
        27648,
        'Castle',
        10,
    ];
    researches['Trading Post'][11] = [
        20298,
        27679,
        27679,
        16607,
        0,
        0,
        575,
        35943,
        'Castle',
        11,
    ];
    researches['Trading Post'][12] = [
        30447,
        41518,
        41518,
        24911,
        0,
        0,
        806,
        41334,
        'Castle',
        12,
    ];
    researches['Trading Post'][13] = [
        45670,
        62278,
        62278,
        37366,
        0,
        0,
        1128,
        47534,
        'Castle',
        13,
    ];
    researches['Trading Post'][14] = [
        68506,
        93417,
        93417,
        56050,
        0,
        0,
        1580,
        54664,
        'Castle',
        14,
    ];
    researches['Trading Post'][15] = [
        102759,
        140126,
        140126,
        84075,
        0,
        0,
        2211,
        62864,
        'Castle',
        15,
    ];
    researches['Trading Post'][16] = [
        154138,
        210189,
        210189,
        123113,
        0,
        0,
        3095,
        72294,
        'Castle',
        16,
    ];
    researches['Trading Post'][17] = [
        231207,
        315283,
        315283,
        189170,
        0,
        0,
        4334,
        83137,
        'Castle',
        17,
    ];
    researches['Trading Post'][18] = [
        346811,
        472925,
        472925,
        283755,
        0,
        0,
        6067,
        95608,
        'Castle',
        18,
    ];
    researches['Trading Post'][19] = [
        520217,
        709388,
        709388,
        425632,
        0,
        0,
        8494,
        109949,
        'Castle',
        19,
    ];
    researches['Trading Post'][20] = [
        780326,
        1064082,
        1064082,
        638449,
        0,
        0,
        11892,
        126441,
        'Castle',
        20,
    ];
    researches['Trading Post'][21] = [
        1170490,
        1596123,
        1596123,
        957673,
        0,
        0,
        16648,
        164374,
        'Castle',
        21,
    ];
    researches['Trading Post'][22] = [
        1755735,
        2394184,
        2394184,
        1436510,
        0,
        0,
        23308,
        262998,
        'Castle',
        22,
    ];
    researches['Trading Post'][23] = [
        2633603,
        3591277,
        3591277,
        2154766,
        0,
        0,
        32630,
        473395,
        'Castle',
        23,
    ];
    researches['Trading Post'][24] = [
        3950404,
        5386915,
        5386915,
        3232149,
        0,
        0,
        45683,
        852111,
        'Castle',
        24,
    ];
    researches['Trading Post'][25] = [
        7900809,
        10773831,
        10773831,
        6464299,
        0,
        0,
        77661,
        2982388,
        'Castle',
        25,
    ];

    researches['Gathering Priority'] = [];
    researches['Gathering Priority'][1] = [
        13077,
        10898,
        8718,
        10898,
        32119,
        0,
        239,
        3000,
        'Academy',
        10,
    ];

    researches['Grunt Subsidy'] = [];
    researches['Grunt Subsidy'][1] = [
        832,
        694,
        555,
        694,
        2987,
        0,
        192,
        2400,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Grunt Subsidy'][2] = [
        1248,
        1040,
        832,
        1040,
        4480,
        0,
        287,
        3600,
        'Academy',
        10,
    ];
    researches['Grunt Subsidy'][3] = [
        2246,
        1872,
        1497,
        1872,
        8064,
        0,
        383,
        4740,
        'Academy',
        10,
    ];
    researches['Grunt Subsidy'][4] = [
        3743,
        3119,
        2495,
        3119,
        13440,
        0,
        574,
        7140,
        'Academy',
        10,
    ];
    researches['Grunt Subsidy'][5] = [
        8317,
        6931,
        5545,
        6931,
        29865,
        0,
        957,
        11880,
        'Academy',
        10,
    ];
    researches['Grunt Subsidy'][6] = [
        16633,
        13861,
        11089,
        13861,
        59730,
        0,
        2970,
        35520,
        'Academy',
        10,
    ];
    researches['Grunt Subsidy'][7] = [
        33265,
        27721,
        22177,
        27721,
        119460,
        0,
        4785,
        59160,
        'Academy',
        10,
    ];
    researches['Grunt Subsidy'][8] = [
        49897,
        41581,
        33265,
        41581,
        179189,
        0,
        11482,
        141900,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Grunt Subsidy'][9] = [
        66529,
        55441,
        44353,
        55441,
        238919,
        0,
        15310,
        189240,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Grunt Subsidy'][10] = [
        124741,
        103951,
        83161,
        103951,
        447972,
        0,
        28707,
        354780,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];

    researches['Ballista Subsidy'] = [];
    researches['Ballista Subsidy'][1] = [
        694,
        555,
        832,
        694,
        3734,
        0,
        192,
        2400,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Ballista Subsidy'][2] = [
        1040,
        832,
        1248,
        1040,
        5600,
        0,
        287,
        3600,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][3] = [
        1872,
        1497,
        2246,
        1872,
        10080,
        0,
        383,
        4740,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][4] = [
        3119,
        2495,
        3743,
        3119,
        16799,
        0,
        574,
        7140,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][5] = [
        6931,
        5545,
        8317,
        6931,
        37331,
        0,
        957,
        11880,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][6] = [
        13861,
        11089,
        16633,
        13861,
        74662,
        0,
        2870,
        35520,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][7] = [
        27721,
        22177,
        33265,
        27721,
        149324,
        0,
        4785,
        59160,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][8] = [
        41581,
        33265,
        49897,
        41581,
        223986,
        0,
        11482,
        141900,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][9] = [
        55441,
        44353,
        66529,
        55441,
        298648,
        0,
        15310,
        189240,
        'Academy',
        10,
    ];
    researches['Ballista Subsidy'][10] = [
        103951,
        83161,
        124741,
        103951,
        559965,
        0,
        28707,
        354780,
        'Academy',
        10,
    ];

    researches['Archer Subsidy'] = [];
    researches['Archer Subsidy'][1] = [
        694,
        555,
        832,
        694,
        3734,
        0,
        192,
        2400,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Archer Subsidy'][2] = [
        1040,
        832,
        1248,
        1040,
        5600,
        0,
        287,
        3600,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Archer Subsidy'][3] = [
        1872,
        1497,
        2246,
        1872,
        10080,
        0,
        383,
        4740,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Archer Subsidy'][4] = [
        3119,
        2495,
        3743,
        3119,
        16799,
        0,
        574,
        7140,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Archer Subsidy'][5] = [
        6931,
        5545,
        8317,
        6931,
        37331,
        0,
        957,
        11880,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Archer Subsidy'][6] = [
        14969,
        12752,
        12197,
        15524,
        59730,
        0,
        2870,
        35520,
        'Academy',
        10,
    ];
    researches['Archer Subsidy'][7] = [
        29938,
        25503,
        24394,
        31047,
        119460,
        0,
        4785,
        59160,
        'Academy',
        10,
    ];
    researches['Archer Subsidy'][8] = [
        44907,
        38254,
        36591,
        46570,
        179189,
        0,
        11482,
        141900,
        'Academy',
        10,
    ];
    researches['Archer Subsidy'][9] = [
        55441,
        44353,
        66529,
        55441,
        298648,
        0,
        15310,
        189240,
        'Academy',
        10,
    ];
    researches['Archer Subsidy'][10] = [
        103951,
        83161,
        124741,
        103951,
        559965,
        0,
        28707,
        354780,
        'Academy',
        10,
    ];

    researches['Cataphract Subsidy'] = [];
    researches['Cataphract Subsidy'][1] = [
        777,
        694,
        555,
        749,
        2987,
        0,
        192,
        2400,
        'Academy',
        10,
        'Gathering Priority',
        1,
    ];
    researches['Cataphract Subsidy'][2] = [
        1165,
        1040,
        832,
        1123,
        4480,
        0,
        287,
        3600,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][3] = [
        2096,
        1872,
        1497,
        2021,
        8064,
        0,
        383,
        4740,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][4] = [
        3493,
        3119,
        2495,
        3368,
        13440,
        0,
        574,
        7140,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][5] = [
        7762,
        6931,
        5545,
        7485,
        29865,
        0,
        957,
        11880,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][6] = [
        15524,
        13861,
        11089,
        14969,
        59730,
        0,
        2870,
        35520,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][7] = [
        31047,
        27721,
        22177,
        29938,
        119460,
        0,
        4785,
        59160,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][8] = [
        46570,
        41581,
        33265,
        44907,
        179189,
        0,
        11482,
        141900,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][9] = [
        62093,
        55441,
        44353,
        59876,
        238919,
        0,
        15310,
        189240,
        'Academy',
        10,
    ];
    researches['Cataphract Subsidy'][10] = [
        116425,
        103951,
        83161,
        112267,
        447972,
        0,
        28707,
        354780,
        'Academy',
        10,
    ];

    researches['Gladiator Subsidy'] = [];
    researches['Gladiator Subsidy'][1] = [
        5198,
        4332,
        3466,
        4332,
        14933,
        0,
        766,
        9480,
        'Academy',
        11,
        'Grunt Subsidy',
        1,
    ];
    researches['Gladiator Subsidy'][2] = [
        7797,
        6497,
        5198,
        6497,
        22399,
        0,
        1148,
        14220,
        'Academy',
        11,
        'Grunt Subsidy',
        2,
    ];
    researches['Gladiator Subsidy'][3] = [
        14034,
        11695,
        9365,
        11695,
        40318,
        0,
        1531,
        18960,
        'Academy',
        11,
        'Grunt Subsidy',
        3,
    ];
    researches['Gladiator Subsidy'][4] = [
        23389,
        19491,
        15593,
        19491,
        67196,
        0,
        2297,
        28380,
        'Academy',
        11,
        'Grunt Subsidy',
        4,
    ];
    researches['Gladiator Subsidy'][5] = [
        51976,
        43313,
        34651,
        43313,
        149324,
        0,
        3827,
        47340,
        'Academy',
        11,
        'Grunt Subsidy',
        5,
    ];
    researches['Gladiator Subsidy'][6] = [
        103951,
        86626,
        69301,
        86626,
        298648,
        0,
        11483,
        141900,
        'Academy',
        11,
        'Grunt Subsidy',
        6,
    ];
    researches['Gladiator Subsidy'][7] = [
        207901,
        173251,
        138601,
        173251,
        597296,
        0,
        19137,
        236520,
        'Academy',
        11,
        'Grunt Subsidy',
        7,
    ];
    researches['Gladiator Subsidy'][8] = [
        311851,
        259876,
        207901,
        259876,
        895944,
        0,
        45931,
        567600,
        'Academy',
        11,
        'Grunt Subsidy',
        8,
    ];
    researches['Gladiator Subsidy'][9] = [
        415802,
        346501,
        277201,
        346501,
        1194592,
        0,
        61240,
        756840,
        'Academy',
        12,
        'Grunt Subsidy',
        9,
    ];
    researches['Gladiator Subsidy'][10] = [
        779628,
        649690,
        519752,
        649690,
        2239859,
        0,
        114825,
        1419000,
        'Academy',
        13,
        'Grunt Subsidy',
        10,
    ];

    researches['Catapult Subsidy'] = [];
    researches['Catapult Subsidy'][1] = [
        5198,
        4159,
        6238,
        5198,
        18666,
        0,
        766,
        9480,
        'Academy',
        11,
        'Ballista Subsidy',
        1,
    ];
    researches['Catapult Subsidy'][2] = [
        7797,
        6238,
        9356,
        7797,
        27999,
        0,
        1148,
        14220,
        'Academy',
        11,
        'Ballista Subsidy',
        2,
    ];
    researches['Catapult Subsidy'][3] = [
        14034,
        11227,
        16840,
        14034,
        50397,
        0,
        1531,
        18960,
        'Academy',
        11,
        'Ballista Subsidy',
        3,
    ];
    researches['Catapult Subsidy'][4] = [
        23389,
        18712,
        28067,
        23389,
        83995,
        0,
        2297,
        28380,
        'Academy',
        11,
        'Ballista Subsidy',
        4,
    ];
    researches['Catapult Subsidy'][5] = [
        51976,
        41581,
        62371,
        51976,
        186655,
        0,
        3827,
        47340,
        'Academy',
        11,
        'Ballista Subsidy',
        5,
    ];
    researches['Catapult Subsidy'][6] = [
        103951,
        83161,
        124741,
        103951,
        373310,
        0,
        11483,
        141900,
        'Academy',
        11,
        'Ballista Subsidy',
        6,
    ];
    researches['Catapult Subsidy'][7] = [
        207901,
        166321,
        249481,
        207901,
        746620,
        0,
        19137,
        236520,
        'Academy',
        11,
        'Ballista Subsidy',
        7,
    ];
    researches['Catapult Subsidy'][8] = [
        311851,
        249481,
        374222,
        311851,
        1119930,
        0,
        45931,
        567600,
        'Academy',
        11,
        'Ballista Subsidy',
        8,
    ];
    researches['Catapult Subsidy'][9] = [
        415802,
        332641,
        498962,
        415802,
        1493240,
        0,
        61240,
        756840,
        'Academy',
        12,
        'Ballista Subsidy',
        9,
    ];
    researches['Catapult Subsidy'][10] = [
        779628,
        623702,
        935553,
        779628,
        2799824,
        0,
        114825,
        1419000,
        'Academy',
        13,
        'Ballista Subsidy',
        10,
    ];

    researches['Sharpshooter Subsidy'] = [];
    researches['Sharpshooter Subsidy'][1] = [
        4678,
        3985,
        3812,
        4852,
        14933,
        0,
        766,
        9480,
        'Academy',
        11,
        'Archer Subsidy',
        1,
    ];
    researches['Sharpshooter Subsidy'][2] = [
        7017,
        5978,
        5718,
        7277,
        22399,
        0,
        1148,
        14220,
        'Academy',
        11,
        'Archer Subsidy',
        2,
    ];
    researches['Sharpshooter Subsidy'][3] = [
        12630,
        10759,
        10292,
        13098,
        40318,
        0,
        1531,
        18960,
        'Academy',
        11,
        'Archer Subsidy',
        3,
    ];
    researches['Sharpshooter Subsidy'][4] = [
        21050,
        17932,
        17152,
        21830,
        67196,
        0,
        2297,
        28380,
        'Academy',
        11,
        'Archer Subsidy',
        4,
    ];
    researches['Sharpshooter Subsidy'][5] = [
        46778,
        39848,
        38116,
        48511,
        149324,
        0,
        3827,
        47340,
        'Academy',
        11,
        'Archer Subsidy',
        5,
    ];
    researches['Sharpshooter Subsidy'][6] = [
        93556,
        79696,
        76231,
        97021,
        298648,
        0,
        11483,
        141900,
        'Academy',
        11,
        'Archer Subsidy',
        6,
    ];
    researches['Sharpshooter Subsidy'][7] = [
        187111,
        159391,
        152461,
        194041,
        597296,
        0,
        19137,
        236520,
        'Academy',
        11,
        'Archer Subsidy',
        7,
    ];
    researches['Sharpshooter Subsidy'][8] = [
        280666,
        239086,
        228691,
        291061,
        895944,
        0,
        45931,
        567600,
        'Academy',
        11,
        'Archer Subsidy',
        8,
    ];
    researches['Sharpshooter Subsidy'][9] = [
        374222,
        318781,
        304921,
        388082,
        1194592,
        0,
        61240,
        756840,
        'Academy',
        12,
        'Archer Subsidy',
        9,
    ];
    researches['Sharpshooter Subsidy'][10] = [
        701665,
        597715,
        571727,
        727653,
        2239859,
        0,
        114825,
        1419000,
        'Academy',
        13,
        'Archer Subsidy',
        10,
    ];

    researches['Reptilian Rider Subsidy'] = [];
    researches['Reptilian Rider Subsidy'][1] = [
        4852,
        4332,
        3466,
        4678,
        14933,
        0,
        766,
        9480,
        'Academy',
        11,
        'Cataphract Subsidy',
        1,
    ];
    researches['Reptilian Rider Subsidy'][2] = [
        7277,
        6497,
        5198,
        7017,
        22399,
        0,
        1148,
        14220,
        'Academy',
        11,
        'Cataphract Subsidy',
        2,
    ];
    researches['Reptilian Rider Subsidy'][3] = [
        13098,
        11695,
        9356,
        12630,
        40318,
        0,
        1531,
        18960,
        'Academy',
        11,
        'Cataphract Subsidy',
        3,
    ];
    researches['Reptilian Rider Subsidy'][4] = [
        21830,
        19491,
        15593,
        21050,
        67196,
        0,
        2297,
        28380,
        'Academy',
        11,
        'Cataphract Subsidy',
        4,
    ];
    researches['Reptilian Rider Subsidy'][5] = [
        48511,
        43313,
        34651,
        46778,
        149324,
        0,
        3827,
        47340,
        'Academy',
        11,
        'Cataphract Subsidy',
        5,
    ];
    researches['Reptilian Rider Subsidy'][6] = [
        97021,
        86626,
        69301,
        93556,
        298648,
        0,
        11483,
        141900,
        'Academy',
        11,
        'Cataphract Subsidy',
        6,
    ];
    researches['Reptilian Rider Subsidy'][7] = [
        194041,
        173251,
        138601,
        187111,
        597296,
        0,
        19137,
        236520,
        'Academy',
        11,
        'Cataphract Subsidy',
        7,
    ];
    researches['Reptilian Rider Subsidy'][8] = [
        291061,
        259876,
        207901,
        280666,
        895944,
        0,
        45931,
        567600,
        'Academy',
        11,
        'Cataphract Subsidy',
        8,
    ];
    researches['Reptilian Rider Subsidy'][9] = [
        388082,
        346501,
        277201,
        374222,
        1194592,
        0,
        61240,
        756840,
        'Academy',
        12,
        'Cataphract Subsidy',
        9,
    ];
    researches['Reptilian Rider Subsidy'][10] = [
        727653,
        649690,
        519752,
        701665,
        2239859,
        0,
        114825,
        1419000,
        'Academy',
        13,
        'Cataphract Subsidy',
        10,
    ];

    researches['Field Triage I'] = [];
    researches['Field Triage I'][1] = [
        9703,
        3639,
        6064,
        4852,
        26132,
        0,
        3190,
        39420,
        'Academy',
        12,
        'Gladiator Subsidy',
        3,
        'Sharpshooter Subsidy',
        3,
        'Reptilian Rider Subsidy',
        3,
        'Catapult Subsidy',
        3,
    ];
    researches['Field Triage I'][2] = [
        14554,
        5458,
        9096,
        7277,
        39198,
        0,
        4784,
        59160,
        'Academy',
        14,
    ];
    researches['Field Triage I'][3] = [
        26196,
        9824,
        16373,
        13098,
        70556,
        0,
        6380,
        78840,
        'Academy',
        16,
    ];
    researches['Field Triage I'][4] = [
        43660,
        16373,
        27287,
        21830,
        117593,
        0,
        9568,
        118260,
        'Academy',
        17,
    ];
    researches['Field Triage I'][5] = [
        97021,
        36383,
        60638,
        48511,
        261317,
        0,
        15948,
        197100,
        'Academy',
        20,
    ];
    researches['Field Triage I'][6] = [
        194041,
        72766,
        121276,
        97021,
        522634,
        0,
        47844,
        591300,
        'Academy',
        21,
    ];
    researches['Field Triage I'][7] = [
        388082,
        145531,
        242551,
        194041,
        1045268,
        0,
        79740,
        985440,
        'Academy',
        22,
    ];
    researches['Field Triage I'][8] = [
        582122,
        218296,
        363827,
        291061,
        1567901,
        0,
        191376,
        2365020,
        'Academy',
        23,
        'Barracks Expansion',
        7,
        'Training Speed II',
        7,
    ];
    researches['Field Triage I'][9] = [
        776163,
        291061,
        485102,
        388082,
        2090535,
        0,
        255168,
        3153300,
        'Academy',
        24,
        'Barracks Expansion',
        8,
        'Training Speed II',
        8,
    ];
    researches['Field Triage I'][10] = [
        1455305,
        545740,
        909566,
        727653,
        3919753,
        0,
        478439,
        5912460,
        'Academy',
        25,
        'Barracks Expansion',
        9,
        'Training Speed II',
        9,
    ];

    researches['Rally Priority'] = [];
    researches['Rally Priority'][1] = [
        196155,
        98078,
        98078,
        32693,
        240892,
        0,
        6608,
        79320,
        'Academy',
        12,
        'Gladiator Subsidy',
        1,
        'Sharpshooter Subsidy',
        1,
        'Reptilian Rider Subsidy',
        1,
        'Catapult Subsidy',
        1,
    ];

    researches['Quick Maneuvers II'] = [];
    researches['Quick Maneuvers II'][1] = [
        5198,
        4332,
        3466,
        4332,
        18666,
        0,
        3828,
        47340,
        'Academy',
        12,
        'Gladiator Subsidy',
        3,
        'Sharpshooter Subsidy',
        3,
        'Reptilian Rider Subsidy',
        3,
        'Catapult Subsidy',
        3,
    ];
    researches['Quick Maneuvers II'][2] = [
        7797,
        6497,
        5198,
        6497,
        27999,
        0,
        5741,
        70980,
        'Academy',
        14,
    ];
    researches['Quick Maneuvers II'][3] = [
        14034,
        11695,
        9356,
        11695,
        50397,
        0,
        7655,
        94620,
        'Academy',
        16,
    ];
    researches['Quick Maneuvers II'][4] = [
        23389,
        19491,
        15593,
        19491,
        83995,
        0,
        11483,
        141900,
        'Academy',
        17,
    ];
    researches['Quick Maneuvers II'][5] = [
        51976,
        43313,
        34651,
        43313,
        186655,
        0,
        19137,
        236520,
        'Academy',
        20,
    ];
    researches['Quick Maneuvers II'][6] = [
        103951,
        86626,
        69301,
        86626,
        373310,
        0,
        57413,
        709500,
        'Academy',
        21,
    ];
    researches['Quick Maneuvers II'][7] = [
        207901,
        173251,
        138601,
        173251,
        746620,
        0,
        95688,
        1182540,
        'Academy',
        22,
    ];
    researches['Quick Maneuvers II'][8] = [
        311851,
        259876,
        207901,
        259876,
        1119930,
        0,
        229651,
        2838000,
        'Academy',
        23,
        'Barracks Expansion',
        7,
        'Training Speed II',
        7,
    ];
    researches['Quick Maneuvers II'][9] = [
        415802,
        346501,
        277201,
        346501,
        1493240,
        0,
        306201,
        3783960,
        'Academy',
        24,
        'Barracks Expansion',
        8,
        'Training Speed II',
        8,
    ];
    researches['Quick Maneuvers II'][10] = [
        779628,
        649690,
        519752,
        649690,
        2799824,
        0,
        574128,
        7094940,
        'Academy',
        25,
        'Barracks Expansion',
        9,
        'Training Speed II',
        9,
    ];

    researches['Royal Guard Subsidy'] = [];
    researches['Royal Guard Subsidy'][1] = [
        25988,
        21657,
        17326,
        21657,
        74662,
        0,
        12759,
        157680,
        'Academy',
        17,
        'Quick Maneuvers II',
        3,
        'Field Triage I',
        3,
    ];
    researches['Royal Guard Subsidy'][2] = [
        38982,
        32485,
        25988,
        32485,
        111993,
        0,
        19137,
        236520,
        'Academy',
        17,
        'Gladiator Subsidy',
        2,
    ];
    researches['Royal Guard Subsidy'][3] = [
        74065,
        74065,
        74065,
        74065,
        201588,
        0,
        25517,
        315360,
        'Academy',
        17,
        'Gladiator Subsidy',
        3,
    ];
    researches['Royal Guard Subsidy'][4] = [
        109148,
        97454,
        77963,
        105250,
        335979,
        0,
        38275,
        473040,
        'Academy',
        17,
        'Gladiator Subsidy',
        4,
    ];
    researches['Royal Guard Subsidy'][5] = [
        259876,
        216564,
        173251,
        216564,
        746620,
        0,
        63792,
        788340,
        'Academy',
        18,
        'Gladiator Subsidy',
        5,
    ];
    researches['Royal Guard Subsidy'][6] = [
        519752,
        433127,
        346501,
        433127,
        1493240,
        0,
        191376,
        2365020,
        'Academy',
        19,
        'Gladiator Subsidy',
        6,
    ];
    researches['Royal Guard Subsidy'][7] = [
        1039503,
        866253,
        693002,
        866253,
        2986479,
        0,
        318960,
        3941640,
        'Academy',
        20,
        'Gladiator Subsidy',
        7,
    ];
    researches['Royal Guard Subsidy'][8] = [
        1559255,
        1299379,
        1039503,
        1299379,
        4479718,
        0,
        765503,
        9459900,
        'Academy',
        21,
        'Gladiator Subsidy',
        8,
    ];
    researches['Royal Guard Subsidy'][9] = [
        2079006,
        1732505,
        1386004,
        1732505,
        5972957,
        0,
        1020671,
        12613140,
        'Academy',
        22,
        'Gladiator Subsidy',
        9,
    ];
    researches['Royal Guard Subsidy'][10] = [
        3898136,
        3248758,
        2589758,
        3248447,
        11199293,
        0,
        1913758,
        23649660,
        'Academy',
        23,
        'Gladiator Subsidy',
        10,
    ];

    researches['Fire Trebuchet Subsidy'] = [];
    researches['Fire Trebuchet Subsidy'][1] = [
        21657,
        17326,
        25988,
        21657,
        85862,
        0,
        12759,
        157680,
        'Academy',
        17,
        'Quick Maneuvers II',
        3,
        'Field Triage I',
        3,
    ];
    researches['Fire Trebuchet Subsidy'][2] = [
        32485,
        25988,
        38982,
        32485,
        128792,
        0,
        19137,
        236520,
        'Academy',
        17,
        'Catapult Subsidy',
        2,
    ];
    researches['Fire Trebuchet Subsidy'][3] = [
        58473,
        46778,
        70167,
        58473,
        231826,
        0,
        25517,
        315360,
        'Academy',
        17,
        'Catapult Subsidy',
        3,
    ];
    researches['Fire Trebuchet Subsidy'][4] = [
        97454,
        77963,
        116945,
        97454,
        386376,
        0,
        38275,
        473040,
        'Academy',
        17,
        'Catapult Subsidy',
        4,
    ];
    researches['Fire Trebuchet Subsidy'][5] = [
        216564,
        173251,
        259876,
        216564,
        858613,
        0,
        63792,
        788340,
        'Academy',
        18,
        'Catapult Subsidy',
        5,
    ];
    researches['Fire Trebuchet Subsidy'][6] = [
        433127,
        346501,
        519752,
        433127,
        1717225,
        0,
        191376,
        2365020,
        'Academy',
        19,
        'Catapult Subsidy',
        6,
    ];
    researches['Fire Trebuchet Subsidy'][7] = [
        866253,
        693002,
        1039503,
        866253,
        3434450,
        0,
        318960,
        3941640,
        'Academy',
        20,
        'Catapult Subsidy',
        7,
    ];
    researches['Fire Trebuchet Subsidy'][8] = [
        1299379,
        1039503,
        1559255,
        1299379,
        5151675,
        0,
        765503,
        9446823,
        'Academy',
        21,
        'Catapult Subsidy',
        8,
    ];
    researches['Fire Trebuchet Subsidy'][9] = [
        1732505,
        1386004,
        2079006,
        1732505,
        6868900,
        0,
        1020671,
        12613140,
        'Academy',
        22,
        'Catapult Subsidy',
        9,
    ];
    researches['Fire Trebuchet Subsidy'][10] = [
        3248447,
        2598758,
        3898136,
        3248447,
        12879187,
        0,
        1913758,
        23649660,
        'Catapult Subsidy',
        10,
    ];

    researches['Stealth Sniper Subsidy'] = [];
    researches['Stealth Sniper Subsidy'][1] = [
        23389,
        19924,
        19058,
        24256,
        74662,
        0,
        12759,
        157680,
        'Academy',
        17,
        'Quick Maneuvers II',
        3,
        'Field Triage I',
        3,
    ];
    researches['Stealth Sniper Subsidy'][2] = [
        40000,
        30000,
        30000,
        40000,
        13000,
        0,
        19137,
        236520,
        'Academy',
        17,
        'Sharpshooter Subsidy',
        2,
    ];
    researches['Stealth Sniper Subsidy'][3] = [
        63150,
        53795,
        51456,
        65489,
        201588,
        0,
        25517,
        315360,
        'Academy',
        17,
        'Sharpshooter Subsidy',
        3,
    ];
    researches['Stealth Sniper Subsidy'][4] = [
        105250,
        89658,
        85759,
        109148,
        335979,
        0,
        38275,
        473040,
        'Academy',
        17,
        'Sharpshooter Subsidy',
        4,
    ];
    researches['Stealth Sniper Subsidy'][5] = [
        233889,
        199239,
        190576,
        242551,
        746620,
        0,
        63792,
        788340,
        'Academy',
        18,
        'Sharpshooter Subsidy',
        5,
    ];
    researches['Stealth Sniper Subsidy'][6] = [
        467777,
        398477,
        381152,
        485102,
        1493240,
        0,
        191376,
        2365020,
        'Academy',
        19,
        'Sharpshooter Subsidy',
        6,
    ];
    researches['Stealth Sniper Subsidy'][7] = [
        953533,
        796953,
        762303,
        970203,
        2986479,
        0,
        318960,
        3941640,
        'Academy',
        20,
        'Sharpshooter Subsidy',
        7,
    ];
    researches['Stealth Sniper Subsidy'][8] = [
        1403329,
        1195429,
        1143454,
        1455305,
        4479718,
        0,
        765503,
        9459900,
        'Academy',
        21,
        'Sharpshooter Subsidy',
        8,
    ];
    researches['Stealth Sniper Subsidy'][9] = [
        1871106,
        1593905,
        1524605,
        1940406,
        5972957,
        0,
        1020671,
        12613140,
        'Academy',
        22,
        'Sharpshooter Subsidy',
        9,
    ];
    researches['Stealth Sniper Subsidy'][10] = [
        3508323,
        2988571,
        2858633,
        3638261,
        11199293,
        0,
        1913758,
        23649660,
        'Sharpshooter Subsidy',
        10,
    ];

    researches['Royal Cavalry Subsidy'] = [];
    researches['Royal Cavalry Subsidy'][1] = [
        24256,
        21657,
        17326,
        23389,
        74662,
        0,
        12759,
        157680,
        'Academy',
        17,
        'Quick Maneuvers II',
        3,
        'Field Triage I',
        3,
    ];
    researches['Royal Cavalry Subsidy'][2] = [
        36383,
        32485,
        25988,
        35084,
        111993,
        0,
        19137,
        236520,
        'Academy',
        17,
        'Reptilian Rider Subsidy',
        2,
    ];
    researches['Royal Cavalry Subsidy'][3] = [
        65489,
        58473,
        46778,
        63150,
        201588,
        0,
        25517,
        315360,
        'Academy',
        17,
        'Reptilian Rider Subsidy',
        3,
    ];
    researches['Royal Cavalry Subsidy'][4] = [
        109148,
        97454,
        77963,
        105250,
        335979,
        0,
        38275,
        473040,
        'Academy',
        17,
        'Reptilian Rider Subsidy',
        4,
    ];
    researches['Royal Cavalry Subsidy'][5] = [
        242551,
        216564,
        173251,
        233889,
        746620,
        0,
        63792,
        788340,
        'Academy',
        18,
        'Reptilian Rider Subsidy',
        5,
    ];
    researches['Royal Cavalry Subsidy'][6] = [
        485102,
        433127,
        346501,
        467777,
        1493240,
        0,
        191376,
        2365020,
        'Academy',
        19,
        'Reptilian Rider Subsidy',
        6,
    ];
    researches['Royal Cavalry Subsidy'][7] = [
        970203,
        866253,
        693002,
        935553,
        2986479,
        0,
        318960,
        3941640,
        'Academy',
        20,
        'Reptilian Rider Subsidy',
        7,
    ];
    researches['Royal Cavalry Subsidy'][8] = [
        1455305,
        1299379,
        1039503,
        1403329,
        4479718,
        0,
        765503,
        9459900,
        'Academy',
        21,
        'Reptilian Rider Subsidy',
        8,
    ];
    researches['Royal Cavalry Subsidy'][9] = [
        1940406,
        1732505,
        1386004,
        1871106,
        5972957,
        0,
        1020671,
        12613140,
        'Academy',
        22,
        'Reptilian Rider Subsidy',
        9,
    ];
    researches['Royal Cavalry Subsidy'][10] = [
        3638261,
        3248447,
        2598758,
        3508323,
        11199293,
        0,
        1913758,
        23649660,
        'Reptilian Rider Subsidy',
        10,
    ];

    researches['Barracks Expansion'] = [];
    researches['Barracks Expansion'][1] = [
        25988,
        25988,
        20791,
        31186,
        111993,
        0,
        19138,
        236520,
        'Academy',
        18,
        'Royal Guard Subsidy',
        3,
        'Stealth Sniper Subsidy',
        3,
        'Royal Cavalry Subsidy',
        3,
        'Fire Trebuchet Subsidy',
        3,
    ];
    researches['Barracks Expansion'][2] = [
        38982,
        38982,
        31186,
        46778,
        167990,
        0,
        28706,
        354780,
        'Academy',
        18,
    ];
    researches['Barracks Expansion'][3] = [
        70167,
        70167,
        56134,
        84200,
        302381,
        0,
        38276,
        473040,
        'Academy',
        18,
    ];
    researches['Barracks Expansion'][4] = [
        116945,
        116945,
        93556,
        140333,
        503969,
        0,
        57412,
        709500,
        'Academy',
        19,
    ];
    researches['Barracks Expansion'][5] = [
        259876,
        259876,
        207901,
        311851,
        1119930,
        0,
        95688,
        1182540,
        'Academy',
        20,
    ];
    researches['Barracks Expansion'][6] = [
        519752,
        519752,
        415802,
        623702,
        2239859,
        0,
        287064,
        3547500,
        'Academy',
        21,
    ];
    researches['Barracks Expansion'][7] = [
        1039503,
        1039503,
        831603,
        1247404,
        4479718,
        0,
        478440,
        5912460,
        'Academy',
        22,
    ];
    researches['Barracks Expansion'][8] = [
        1559255,
        1559255,
        1247404,
        1871106,
        6719576,
        0,
        1148254,
        14189820,
        'Academy',
        23,
        'Quick Maneuvers II',
        8,
        'Field Triage I',
        8,
    ];
    researches['Barracks Expansion'][9] = [
        2079006,
        2079006,
        1663205,
        2494807,
        8959435,
        0,
        1531007,
        18919740,
        'Academy',
        24,
        'Quick Maneuvers II',
        9,
        'Field Triage I',
        9,
    ];
    researches['Barracks Expansion'][10] = [
        3898136,
        3898136,
        3118509,
        4677763,
        16798940,
        0,
        2870637,
        35474460,
        'Academy',
        25,
        'Quick Maneuvers II',
        10,
        'Field Triage I',
        10,
    ];

    researches['Innate Talent'] = [];
    researches['Innate Talent'][1] = [
        130770,
        49039,
        81732,
        65395,
        240892,
        0,
        35796,
        442380,
        'Royal Guard Subsidy',
        3,
        'Stealth Sniper Subsidy',
        3,
        'Royal Cavalry Subsidy',
        3,
        'Fire Trebuchet Subsidy',
        3,
    ];
    researches['Innate Talent'][2] = [
        261540,
        98078,
        163463,
        130770,
        481784,
        0,
        71592,
        884760,
        'Academy',
        21,
        'Royal Guard Subsidy',
        4,
        'Stealth Sniper Subsidy',
        4,
        'Royal Cavalry Subsidy',
        4,
        'Fire Trebuchet Subsidy',
        4,
    ];
    researches['Innate Talent'][3] = [
        610260,
        228848,
        381413,
        305130,
        1124163,
        0,
        167048,
        2064360,
        'Academy',
        24,
        'Royal Guard Subsidy',
        5,
        'Stealth Sniper Subsidy',
        5,
        'Royal Cavalry Subsidy',
        5,
        'Fire Trebuchet Subsidy',
        5,
    ];
    researches['Innate Talent'][4] = [
        1307700,
        490388,
        817313,
        653850,
        2408920,
        0,
        357959,
        4423560,
        'Academy',
        25,
        'Heroic Fighter Subsidy',
        3,
        'Heroic Cannoneer Subsidy',
        3,
        'Ancient Drake Rider Subsidy',
        3,
        'Destroyer Subsidy',
        3,
    ];
    researches['Innate Talent'][5] = [
        2615399,
        980775,
        1634625,
        1307700,
        4817840,
        0,
        715918,
        8847120,
        'Academy',
        25,
        'Heroic Fighter Subsidy',
        4,
        'Heroic Cannoneer Subsidy',
        4,
        'Ancient Drake Rider Subsidy',
        4,
        'Destroyer Subsidy',
        4,
    ];
    researches['Innate Talent'][6] = [
        3487199,
        1307700,
        2179499,
        1743600,
        6423787,
        0,
        954558,
        11796180,
        'Academy',
        25,
        'Heroic Fighter Subsidy',
        5,
        'Heroic Cannoneer Subsidy',
        5,
        'Ancient Drake Rider Subsidy',
        5,
        'Destroyer Subsidy',
        5,
    ];
    researches['Innate Talent'][7] = [
        3923099,
        1471162,
        2451937,
        1961550,
        7226760,
        0,
        1073877,
        13270680,
        'Academy',
        25,
        'Heroic Fighter Subsidy',
        6,
        'Heroic Cannoneer Subsidy',
        6,
        'Ancient Drake Rider Subsidy',
        6,
        'Destroyer Subsidy',
        6,
    ];
    researches['Innate Talent'][8] = [
        4358998,
        1634625,
        2724374,
        2179499,
        8029733,
        0,
        1193197,
        14745180,
        'Academy',
        25,
        'Heroic Fighter Subsidy',
        7,
        'Heroic Cannoneer Subsidy',
        7,
        'Ancient Drake Rider Subsidy',
        7,
        'Destroyer Subsidy',
        7,
    ];
    researches['Innate Talent'][9] = [
        4794898,
        1798087,
        2996812,
        2397449,
        8832707,
        0,
        1312516,
        16219680,
        'Academy',
        25,
        'Heroic Fighter Subsidy',
        8,
        'Heroic Cannoneer Subsidy',
        8,
        'Ancient Drake Rider Subsidy',
        8,
        'Destroyer Subsidy',
        8,
    ];
    researches['Innate Talent'][10] = [
        5230798,
        1961550,
        3269249,
        2615399,
        9635680,
        0,
        1431837,
        17694240,
        'Academy',
        25,
        'Heroic Fighter Subsidy',
        9,
        'Heroic Cannoneer Subsidy',
        9,
        'Ancient Drake Rider Subsidy',
        9,
        'Destroyer Subsidy',
        9,
    ];

    researches['Training Speed II'] = [];
    researches['Training Speed II'][1] = [
        25988,
        25988,
        20791,
        31186,
        111993,
        0,
        19138,
        236520,
        'Royal Guard Subsidy',
        3,
        'Stealth Sniper Subsidy',
        3,
        'Royal Cavalry Subsidy',
        3,
        'Fire Trebuchet Subsidy',
        3,
    ];
    researches['Training Speed II'][2] = [
        38982,
        38982,
        31186,
        46778,
        167990,
        0,
        28706,
        354780,
        'Academy',
        18,
    ];
    researches['Training Speed II'][3] = [
        70167,
        70167,
        56134,
        84200,
        302381,
        0,
        38276,
        473040,
        'Academy',
        18,
    ];
    researches['Training Speed II'][4] = [
        116945,
        116945,
        93556,
        140333,
        5039695,
        0,
        57412,
        709500,
        'Academy',
        19,
    ];
    researches['Training Speed II'][5] = [
        259876,
        259876,
        207901,
        311851,
        1119930,
        0,
        95688,
        1182540,
        'Academy',
        20,
    ];
    researches['Training Speed II'][6] = [
        519752,
        519752,
        415802,
        623702,
        2239859,
        0,
        287064,
        3547500,
        'Academy',
        21,
    ];
    researches['Training Speed II'][7] = [
        1039503,
        1039503,
        831603,
        1247404,
        4479718,
        0,
        478440,
        5912460,
        'Academy',
        22,
    ];
    researches['Training Speed II'][8] = [
        1559255,
        1559255,
        1247404,
        1871106,
        6719576,
        0,
        1148254,
        14189820,
        'Academy',
        23,
        'Quick Maneuvers II',
        8,
        'Field Triage I',
        8,
    ];
    researches['Training Speed II'][9] = [
        2079006,
        2079006,
        1663205,
        2494807,
        8959435,
        0,
        1531007,
        18919740,
        'Academy',
        24,
        'Quick Maneuvers II',
        9,
        'Field Triage I',
        9,
    ];
    researches['Training Speed II'][10] = [
        3898136,
        3898136,
        3118509,
        4677763,
        16798940,
        0,
        2870637,
        35474460,
        'Academy',
        25,
        'Quick Maneuvers II',
        10,
        'Field Triage I',
        10,
    ];

    researches['Quick Swap'] = [];
    researches['Quick Swap'][1] = [
        261540,
        98078,
        163463,
        130770,
        481784,
        0,
        71592,
        884760,
        'Academy',
        22,
        'Barracks Expansion',
        3,
        'Training Speed II',
        3,
        'Innate Talent',
        1,
    ];
    researches['Quick Swap'][2] = [
        435900,
        163463,
        272438,
        217950,
        802974,
        0,
        119320,
        1474560,
        'Academy',
        24,
        'Barracks Expansion',
        4,
        'Training Speed II',
        4,
        'Innate Talent',
        2,
    ];
    researches['Quick Swap'][3] = [
        1307700,
        490388,
        817313,
        653850,
        2408920,
        0,
        357959,
        4423560,
        'Academy',
        25,
        'Barracks Expansion',
        9,
        'Training Speed II',
        9,
        'Innate Talent',
        3,
    ];
    researches['Quick Swap'][4] = [
        2179499,
        817313,
        1362187,
        1089750,
        4014867,
        0,
        596599,
        7372620,
        'Academy ',
        25,
        'Barracks Expansion',
        10,
        'Training Speed II',
        10,
        'Innate Talent',
        4,
    ];
    researches['Quick Swap'][5] = [
        3487199,
        1307700,
        2179499,
        1743600,
        6423787,
        0,
        954557,
        11796180,
        'Academy ',
        25,
        'Innate Talent',
        5,
        'Barracks Expansion',
        10,
        'Training Speed II',
        10,
    ];
    researches['Quick Swap'][6] = [
        3923099,
        1471162,
        2451937,
        1961550,
        7226760,
        0,
        1073877,
        13270680,
        'Academy ',
        25,
        'Innate Talent',
        6,
        'Barracks Expansion',
        10,
        'Training Speed II',
        10,
    ];
    researches['Quick Swap'][7] = [
        4358998,
        1634625,
        2724374,
        2179499,
        8029733,
        0,
        1193197,
        14745180,
        'Academy ',
        25,
        'Innate Talent',
        7,
    ];
    researches['Quick Swap'][8] = [
        4794898,
        1798087,
        2996812,
        2397449,
        8832707,
        0,
        1312517,
        16219680,
        'Academy ',
        25,
        'Innate Talent',
        8,
    ];
    researches['Quick Swap'][9] = [
        5230798,
        1961550,
        3269249,
        2615399,
        9635680,
        0,
        1431836,
        17694240,
        'Academy ',
        25,
        'Innate Talent',
        9,
    ];
    researches['Quick Swap'][10] = [
        5666698,
        21250125,
        3541686,
        2833349,
        10438653,
        0,
        1551156,
        19168740,
        'Academy ',
        25,
        'Innate Talent',
        10,
    ];

    researches['Central Command I'] = [];
    researches['Central Command I'][1] = [
        98040,
        78432,
        58824,
        156863,
        285715,
        0,
        32728,
        409140,
        'Academy',
        22,
        'Training Speed II',
        3,
        'Barracks Expansion',
        3,
        'Innate Talent',
        1,
    ];
    researches['Central Command I'][2] = [
        294118,
        235295,
        176471,
        470589,
        857143,
        0,
        98182,
        1227300,
        'Academy',
        23,
    ];
    researches['Central Command I'][3] = [
        686275,
        549020,
        411765,
        1098040,
        2000000,
        0,
        229090,
        2863680,
        'Academy',
        24,
    ];
    researches['Central Command I'][4] = [
        1470589,
        1176471,
        882353,
        2352942,
        4285715,
        0,
        490910,
        6136380,
        'Academy',
        25,
        'Royal Guard Subsidy',
        9,
        'Stealth Sniper Subsidy',
        9,
        'Royal Cavalry Subsidy',
        9,
        'Fire Trebuchet Subsidy',
        9,
    ];
    researches['Central Command I'][5] = [
        2450981,
        1960785,
        1470589,
        3921569,
        8571429,
        0,
        1309090,
        16363680,
        'Academy',
        25,
        'Royal Guard Subsidy',
        10,
        'Stealth Sniper Subsidy',
        10,
        'Royal Cavalry Subsidy',
        10,
        'Fire Trebuchet Subsidy',
        10,
    ];

    researches['Bigger Army I'] = [];
    researches['Bigger Army I'][1] = [
        7846197,
        6538497,
        5230798,
        6538497,
        19271360,
        0,
        2863673,
        35388421,
        'Academy',
        23,
        'Barracks Expansion',
        8,
        'Training Speed II',
        8,
        'Innate Talent',
        1,
    ];

    researches['Heroic Fighter Subsidy'] = [];
    researches['Heroic Fighter Subsidy'][1] = [
        93556,
        77963,
        62371,
        77963,
        186655,
        0,
        31896,
        394200,
        'Academy',
        25,
        'Quick Swap',
        3,
        'Bigger Army I',
        1,
    ];
    researches['Heroic Fighter Subsidy'][2] = [
        140333,
        116945,
        93556,
        116945,
        279983,
        0,
        47844,
        591300,
        'Academy',
        25,
    ];
    researches['Heroic Fighter Subsidy'][3] = [
        252600,
        210500,
        168400,
        210500,
        503969,
        0,
        63792,
        788340,
        'Academy',
        25,
    ];
    researches['Heroic Fighter Subsidy'][4] = [
        420999,
        350833,
        280666,
        350833,
        839947,
        0,
        95688,
        1182540,
        'Academy',
        25,
    ];
    researches['Heroic Fighter Subsidy'][5] = [
        935553,
        779628,
        623702,
        779628,
        1866549,
        0,
        159480,
        1970820,
        'Academy',
        25,
    ];
    researches['Heroic Fighter Subsidy'][6] = [
        1871106,
        1559255,
        1247404,
        1559255,
        3733098,
        0,
        478440,
        5912460,
        'Academy',
        25,
        'Royal Guard Subsidy',
        6,
        'Innate Talent',
        6,
        'Quick Swap',
        6,
    ];
    researches['Heroic Fighter Subsidy'][7] = [
        3742211,
        3118509,
        2494807,
        3118509,
        7466196,
        0,
        797399,
        9854040,
        'Academy',
        25,
        'Royal Guard Subsidy',
        7,
        'Innate Talent',
        7,
        'Quick Swap',
        7,
    ];
    researches['Heroic Fighter Subsidy'][8] = [
        5613316,
        4677763,
        3742211,
        4677763,
        11199293,
        0,
        1913758,
        23649660,
        'Academy',
        25,
        'Royal Guard Subsidy',
        8,
        'Innate Talent',
        8,
        'Quick Swap',
        8,
    ];
    researches['Heroic Fighter Subsidy'][9] = [
        7484421,
        6237018,
        4989614,
        6237018,
        14932391,
        0,
        2551678,
        31532880,
        'Academy',
        25,
        'Royal Guard Subsidy',
        9,
        'Innate Talent',
        9,
        'Quick Swap',
        9,
    ];
    researches['Heroic Fighter Subsidy'][10] = [
        14033289,
        11694408,
        9355526,
        11694408,
        27998233,
        0,
        4784395,
        59124120,
        'Academy',
        25,
        'Royal Guard Subsidy',
        10,
        'Innate Talent',
        10,
        'Quick Swap',
        10,
    ];

    researches['Destroyer Subsidy'] = [];
    researches['Destroyer Subsidy'][1] = [
        77963,
        62371,
        93556,
        77963,
        205321,
        0,
        31896,
        394200,
        'Academy',
        25,
        'Quick Swap',
        3,
        'Bigger Army I',
        1,
    ];
    researches['Destroyer Subsidy'][2] = [
        116945,
        93556,
        140333,
        116945,
        307981,
        0,
        47844,
        591300,
        'Academy',
        25,
    ];
    researches['Destroyer Subsidy'][3] = [
        210500,
        168400,
        252600,
        210500,
        554365,
        0,
        63792,
        788340,
        'Academy',
        25,
    ];
    researches['Destroyer Subsidy'][4] = [
        350833,
        280666,
        420999,
        350833,
        923942,
        0,
        95688,
        1182540,
        'Academy',
        25,
    ];
    researches['Destroyer Subsidy'][5] = [
        779628,
        623702,
        935553,
        779628,
        2053204,
        0,
        159480,
        1970820,
        'Academy',
        25,
    ];
    researches['Destroyer Subsidy'][6] = [
        1559255,
        1247404,
        1871106,
        1559255,
        4106408,
        0,
        478440,
        5912460,
        'Academy',
        25,
        'Fire Trebuchet Subsidy',
        6,
        'Innate Talent',
        6,
        'Quick Swap',
        6,
    ];
    researches['Destroyer Subsidy'][7] = [
        3118509,
        2494807,
        3742211,
        3118509,
        8212815,
        0,
        797399,
        9854040,
        'Academy',
        25,
        'Fire Trebuchet Subsidy',
        7,
        'Innate Talent',
        7,
        'Quick Swap',
        7,
    ];
    researches['Destroyer Subsidy'][8] = [
        4677763,
        3742211,
        5613316,
        4677763,
        12319223,
        0,
        1913758,
        23649660,
        'Academy',
        25,
        'Fire Trebuchet Subsidy',
        8,
        'Innate Talent',
        8,
        'Quick Swap',
        8,
    ];
    researches['Destroyer Subsidy'][9] = [
        6237018,
        4989614,
        7484421,
        6237018,
        16425630,
        0,
        2551678,
        31532880,
        'Academy',
        25,
        'Fire Trebuchet Subsidy',
        9,
        'Innate Talent',
        9,
        'Quick Swap',
        9,
    ];
    researches['Destroyer Subsidy'][10] = [
        11694408,
        9355526,
        14033289,
        11694408,
        27998233,
        0,
        4784395,
        59124120,
        'Academy',
        25,
        'Fire Trebuchet Subsidy',
        10,
        'Innate Talent',
        10,
        'Quick Swap',
        10,
    ];

    researches['Heroic Cannoneer Subsidy'] = [];
    researches['Heroic Cannoneer Subsidy'][1] = [
        84200,
        71726,
        68608,
        87319,
        186655,
        0,
        31896,
        394200,
        'Academy',
        25,
        'Quick Swap',
        3,
        'Bigger Army I',
        1,
    ];
    researches['Heroic Cannoneer Subsidy'][2] = [
        126300,
        107911,
        102911,
        130978,
        279983,
        0,
        47844,
        591300,
        'Academy',
        25,
    ];
    researches['Heroic Cannoneer Subsidy'][3] = [
        227340,
        193660,
        185240,
        235760,
        503969,
        0,
        63792,
        788340,
        'Academy',
        25,
    ];
    researches['Heroic Cannoneer Subsidy'][4] = [
        280666,
        420999,
        350833,
        280666,
        839947,
        0,
        95688,
        1182540,
        'Academy',
        25,
    ];
    researches['Heroic Cannoneer Subsidy'][5] = [
        841998,
        717257,
        686072,
        873183,
        1866549,
        0,
        159480,
        1970820,
        'Academy',
        25,
    ];
    researches['Heroic Cannoneer Subsidy'][6] = [
        1683995,
        1434514,
        1372144,
        1746365,
        3733098,
        0,
        478440,
        5912460,
        'Academy',
        25,
        'Stealth Sniper Subsidy',
        6,
        'Innate Talent',
        6,
        'Quick Swap',
        6,
    ];
    researches['Heroic Cannoneer Subsidy'][7] = [
        3367990,
        2869028,
        2744288,
        3492730,
        7466196,
        0,
        797399,
        9854040,
        'Academy',
        25,
        'Stealth Sniper Subsidy',
        7,
        'Innate Talent',
        7,
        'Quick Swap',
        7,
    ];
    researches['Heroic Cannoneer Subsidy'][8] = [
        5051984,
        4303542,
        4116432,
        5239095,
        11199293,
        0,
        1913758,
        23649660,
        'Academy',
        25,
        'Stealth Sniper Subsidy',
        8,
        'Innate Talent',
        8,
        'Quick Swap',
        8,
    ];
    researches['Heroic Cannoneer Subsidy'][9] = [
        6732979,
        5738056,
        5488576,
        6985460,
        14932391,
        0,
        2551678,
        31532880,
        'Academy',
        25,
        'Stealth Sniper Subsidy',
        9,
        'Innate Talent',
        9,
        'Quick Swap',
        9,
    ];
    researches['Heroic Cannoneer Subsidy'][10] = [
        12629960,
        10758855,
        10291079,
        13097737,
        27998233,
        0,
        4784395,
        59124120,
        'Academy',
        25,
        'Stealth Sniper Subsidy',
        10,
        'Innate Talent',
        10,
        'Quick Swap',
        10,
    ];

    researches['Ancient Drake Rider Subsidy'] = [];
    researches['Ancient Drake Rider Subsidy'][1] = [
        87319,
        77963,
        62371,
        84200,
        186655,
        0,
        31896,
        394200,
        'Academy',
        25,
        'Quick Swap',
        3,
        'Bigger Army I',
        1,
    ];
    researches['Ancient Drake Rider Subsidy'][2] = [
        130978,
        116945,
        93556,
        126300,
        279983,
        0,
        47844,
        591300,
        'Academy',
        25,
    ];
    researches['Ancient Drake Rider Subsidy'][3] = [
        235760,
        210500,
        168400,
        227340,
        503969,
        0,
        63792,
        788340,
        'Academy',
        25,
    ];
    researches['Ancient Drake Rider Subsidy'][4] = [
        420999,
        350833,
        280666,
        280666,
        839947,
        0,
        95688,
        1182540,
        'Academy',
        25,
    ];
    researches['Ancient Drake Rider Subsidy'][5] = [
        873183,
        779628,
        623702,
        841998,
        1866549,
        0,
        159480,
        1970820,
        'Academy',
        25,
    ];
    researches['Ancient Drake Rider Subsidy'][6] = [
        1746365,
        1559255,
        1247404,
        1683995,
        3733098,
        0,
        478440,
        5912460,
        'Academy',
        25,
        'Royal Cavalry Subsidy',
        6,
        'Innate Talent',
        6,
        'Quick Swap',
        6,
    ];
    researches['Ancient Drake Rider Subsidy'][7] = [
        3492730,
        3118509,
        2494807,
        3367990,
        7466196,
        0,
        797399,
        9854040,
        'Academy',
        25,
        'Royal Cavalry Subsidy',
        7,
        'Innate Talent',
        7,
        'Quick Swap',
        7,
    ];
    researches['Ancient Drake Rider Subsidy'][8] = [
        5239095,
        4677763,
        3742211,
        5051984,
        11199293,
        0,
        1913758,
        23649660,
        'Academy',
        25,
        'Royal Cavalry Subsidy',
        8,
        'Innate Talent',
        8,
        'Quick Swap',
        8,
    ];
    researches['Ancient Drake Rider Subsidy'][9] = [
        6985460,
        6237018,
        4989614,
        6735979,
        14932391,
        0,
        2551678,
        31532880,
        'Academy',
        25,
        'Royal Cavalry Subsidy',
        9,
        'Innate Talent',
        9,
        'Quick Swap',
        9,
    ];
    researches['Ancient Drake Rider Subsidy'][10] = [
        13097737,
        11694408,
        9355526,
        12626960,
        27998233,
        0,
        4784395,
        59124120,
        'Academy',
        25,
        'Royal Cavalry Subsidy',
        10,
        'Innate Talent',
        10,
        'Quick Swap',
        10,
    ];
}

function loadWonder() {
    researches['Wonder March'] = [];
    researches['Wonder March'][1] = [
        79658,
        39829,
        39829,
        79658,
        57331,
        2,
        7903,
        75960,
        'Academy',
        24,
    ];
    researches['Wonder March'][2] = [
        278802,
        139401,
        139401,
        278802,
        200656,
        4,
        26475,
        265800,
        'Academy',
        24,
    ];
    researches['Wonder March'][3] = [
        338546,
        169273,
        169273,
        338545,
        243653,
        7,
        33192,
        322740,
        'Academy',
        24,
    ];
    researches['Wonder March'][4] = [
        398288,
        199144,
        199144,
        398288,
        286651,
        10,
        39909,
        379740,
        'Academy',
        24,
    ];
    researches['Wonder March'][5] = [
        477946,
        238973,
        238973,
        477946,
        343981,
        14,
        48603,
        455640,
        'Academy',
        24,
    ];
    researches['Wonder March'][6] = [
        637261,
        318631,
        318631,
        637261,
        458641,
        18,
        65199,
        607500,
        'Academy',
        24,
    ];
    researches['Wonder March'][7] = [
        836405,
        418203,
        418203,
        836405,
        601966,
        24,
        86141,
        797340,
        'Academy',
        24,
    ];
    researches['Wonder March'][8] = [
        1194864,
        597432,
        597432,
        1194864,
        859951,
        31,
        121309,
        1139100,
        'Academy',
        24,
    ];
    researches['Wonder March'][9] = [
        1672810,
        836405,
        836405,
        1672810,
        1203932,
        38,
        166750,
        1594680,
        'Academy',
        24,
    ];
    researches['Wonder March'][10] = [
        2190584,
        1095292,
        1095292,
        2190584,
        1576577,
        48,
        217329,
        2088300,
        'Academy',
        25,
    ];

    researches['Gem Harvesting II'] = [];
    researches['Gem Harvesting II'][1] = [
        103555,
        51778,
        51778,
        103555,
        74530,
        3,
        10274,
        98760,
        'Academy',
        24,
        'Wonder March',
        1,
    ];
    researches['Gem Harvesting II'][2] = [
        362442,
        181221,
        181221,
        362442,
        260852,
        6,
        34417,
        345540,
        'Academy',
        24,
    ];
    researches['Gem Harvesting II'][3] = [
        440109,
        220055,
        220055,
        440109,
        316749,
        9,
        43150,
        419580,
        'Academy',
        24,
    ];
    researches['Gem Harvesting II'][4] = [
        517775,
        258888,
        258888,
        517775,
        372646,
        12,
        51882,
        493620,
        'Academy',
        24,
    ];
    researches['Gem Harvesting II'][5] = [
        621330,
        310665,
        310665,
        621330,
        447175,
        15,
        63184,
        592320,
        'Academy',
        24,
    ];
    researches['Gem Harvesting II'][6] = [
        828439,
        414220,
        414220,
        828439,
        596233,
        21,
        84758,
        789780,
        'Academy',
        24,
    ];
    researches['Gem Harvesting II'][7] = [
        1087326,
        543663,
        543663,
        1087326,
        782556,
        29,
        111983,
        1036560,
        'Academy',
        24,
    ];
    researches['Gem Harvesting II'][8] = [
        1553323,
        776662,
        776662,
        1553323,
        1117937,
        37,
        157702,
        1480800,
        'Academy',
        24,
        'Wonder March',
        8,
    ];
    researches['Gem Harvesting II'][9] = [
        2174652,
        1087326,
        1087326,
        2174652,
        1565111,
        46,
        216776,
        2073060,
        'Academy',
        24,
        'Wonder March',
        9,
    ];
    researches['Gem Harvesting II'][10] = [
        2847759,
        1423880,
        1423880,
        2847759,
        2049550,
        58,
        282527,
        2714760,
        'Academy',
        25,
        'Wonder March',
        10,
    ];

    researches['Ration Run III'] = [];
    researches['Ration Run III'][1] = [
        129444,
        64722,
        64722,
        64722,
        74530,
        3,
        10274,
        98760,
        'Academy',
        24,
        'Wonder March',
        1,
    ];
    researches['Ration Run III'][2] = [
        453053,
        226527,
        226527,
        226527,
        260852,
        6,
        34417,
        345540,
        'Academy',
        24,
    ];
    researches['Ration Run III'][3] = [
        550136,
        275068,
        275068,
        275068,
        316749,
        9,
        43150,
        419580,
        'Academy',
        24,
    ];
    researches['Ration Run III'][4] = [
        647218,
        323609,
        323609,
        232609,
        372646,
        12,
        51882,
        493620,
        'Academy',
        24,
    ];
    researches['Ration Run III'][5] = [
        776662,
        388331,
        388331,
        388331,
        447175,
        15,
        63184,
        592320,
        'Academy',
        24,
    ];
    researches['Ration Run III'][6] = [
        1035549,
        517775,
        517775,
        517775,
        596233,
        21,
        84758,
        789780,
        'Academy',
        24,
    ];
    researches['Ration Run III'][7] = [
        1359158,
        679579,
        679579,
        679579,
        782556,
        29,
        111983,
        1036560,
        'Academy',
        24,
    ];
    researches['Ration Run III'][8] = [
        1941654,
        970827,
        970827,
        970827,
        1117937,
        37,
        157702,
        1480800,
        'Academy',
        24,
        'Wonder March',
        8,
    ];
    researches['Ration Run III'][9] = [
        2718315,
        1359158,
        1359158,
        1359158,
        1565111,
        46,
        216776,
        2073060,
        'Academy',
        24,
        'Wonder March',
        9,
    ];
    researches['Ration Run III'][10] = [
        3559699,
        1779850,
        1779850,
        1779850,
        2049550,
        58,
        282527,
        2714760,
        'Academy',
        25,
        'Wonder March',
        10,
    ];

    researches['Bigger Bags II'] = [];
    researches['Bigger Bags II'][1] = [
        191179,
        63727,
        63727,
        95590,
        91729,
        3,
        12645,
        121500,
        'Academy',
        24,
        'Gem Harvesting II',
        1,
    ];
    researches['Bigger Bags II'][2] = [
        669124,
        223042,
        223042,
        334562,
        321049,
        6,
        42359,
        425280,
        'Academy',
        24,
    ];
    researches['Bigger Bags II'][3] = [
        812508,
        270836,
        270836,
        406254,
        389845,
        10,
        53108,
        516420,
        'Academy',
        24,
    ];
    researches['Bigger Bags II'][4] = [
        955891,
        318631,
        318631,
        477946,
        458641,
        14,
        63855,
        607500,
        'Academy',
        24,
    ];
    researches['Bigger Bags II'][5] = [
        1147070,
        382357,
        382357,
        573535,
        550369,
        19,
        77764,
        729000,
        'Academy',
        24,
    ];
    researches['Bigger Bags II'][6] = [
        1529426,
        509809,
        509809,
        764713,
        733825,
        25,
        104318,
        972000,
        'Academy',
        24,
    ];
    researches['Bigger Bags II'][7] = [
        2007372,
        669124,
        669124,
        1003686,
        963145,
        33,
        137826,
        1275780,
        'Academy',
        24,
    ];
    researches['Bigger Bags II'][8] = [
        2867673,
        955891,
        955891,
        1433837,
        1375922,
        43,
        194094,
        1822500,
        'Academy',
        24,
        'Gem Harvesting II',
        8,
    ];
    researches['Bigger Bags II'][9] = [
        4014743,
        1338248,
        1338248,
        2007372,
        1926290,
        53,
        266801,
        2551500,
        'Academy',
        24,
        'Gem Harvesting II',
        9,
    ];
    researches['Bigger Bags II'][10] = [
        5257401,
        1752467,
        1752467,
        2628701,
        2522523,
        67,
        347726,
        3341220,
        'Academy',
        25,
        'Gem Harvesting II',
        10,
    ];

    researches['Forced March II'] = [];
    researches['Forced March II'][1] = [
        127453,
        79658,
        79658,
        95590,
        91729,
        3,
        12645,
        121500,
        'Academy',
        24,
        'Ratio Run III',
        1,
    ];
    researches['Forced March II'][2] = [
        446083,
        278802,
        278802,
        334562,
        321049,
        6,
        42359,
        425280,
        'Academy',
        24,
    ];
    researches['Forced March II'][3] = [
        541672,
        338545,
        338545,
        406254,
        389845,
        10,
        53108,
        516420,
        'Academy',
        24,
    ];
    researches['Forced March II'][4] = [
        637261,
        398288,
        398288,
        477946,
        458641,
        14,
        63855,
        607500,
        'Academy',
        24,
    ];
    researches['Forced March II'][5] = [
        764713,
        477946,
        477946,
        573535,
        550369,
        19,
        77764,
        729000,
        'Academy',
        24,
    ];
    researches['Forced March II'][6] = [
        1019618,
        637261,
        637261,
        764713,
        733825,
        25,
        104318,
        972000,
        'Academy',
        24,
    ];
    researches['Forced March II'][7] = [
        1338248,
        836405,
        836405,
        1003686,
        963145,
        33,
        137826,
        1275780,
        'Academy',
        24,
    ];
    researches['Forced March II'][8] = [
        1911782,
        1194864,
        1194864,
        1433837,
        1375922,
        43,
        194094,
        1822500,
        'Academy',
        24,
        'Ratio Run III',
        8,
    ];
    researches['Forced March II'][9] = [
        2676495,
        1672810,
        1672810,
        2007732,
        1926290,
        53,
        266801,
        2551500,
        'Academy',
        24,
        'Ratio Run III',
        9,
    ];
    researches['Forced March II'][10] = [
        3504934,
        2190584,
        2190584,
        2628701,
        2522523,
        67,
        347726,
        3341220,
        'Academy',
        25,
        'Ratio Run III',
        10,
    ];

    researches['Infantry Offense (Wonder) I'] = [];
    researches['Infantry Offense (Wonder) I'][1] = [
        219059,
        109530,
        109530,
        109530,
        126127,
        4,
        17387,
        167100,
        'Academy',
        24,
        'Bigger Bags II',
        1,
        'Forced March II',
        1,
    ];
    researches['Infantry Offense (Wonder) I'][2] = [
        766705,
        383353,
        383353,
        383353,
        441442,
        9,
        58244,
        584760,
        'Academy',
        24,
    ];
    researches['Infantry Offense (Wonder) I'][3] = [
        930998,
        465499,
        465499,
        465499,
        536037,
        14,
        73022,
        710040,
        'Academy',
        24,
    ];
    researches['Infantry Offense (Wonder) I'][4] = [
        1095292,
        547646,
        547646,
        547646,
        630631,
        19,
        87801,
        835320,
        'Academy',
        24,
    ];
    researches['Infantry Offense (Wonder) I'][5] = [
        1314351,
        657176,
        657176,
        657176,
        756757,
        26,
        106926,
        1002360,
        'Academy',
        24,
    ];
    researches['Infantry Offense (Wonder) I'][6] = [
        1752467,
        876234,
        876234,
        876234,
        1009010,
        35,
        143437,
        1336500,
        'Academy',
        24,
    ];
    researches['Infantry Offense (Wonder) I'][7] = [
        2300113,
        1150057,
        1150057,
        1150057,
        1324325,
        47,
        189511,
        1754160,
        'Academy',
        24,
    ];
    researches['Infantry Offense (Wonder) I'][8] = [
        3285876,
        1642938,
        1642938,
        1642938,
        1891892,
        61,
        266879,
        0,
        'Academy',
        25,
        'Bigger Bags II',
        8,
        'Forced March II',
        8,
    ];
    researches['Infantry Offense (Wonder) I'][9] = [
        0,
        0,
        0,
        0,
        0,
        76,
        0,
        0,
        'Academy',
        25,
    ];
    researches['Infantry Offense (Wonder) I'][10] = [
        0,
        0,
        0,
        0,
        0,
        96,
        0,
        0,
        'Academy',
        25,
    ];

    researches['Ranged Offense (Wonder) I'] = [];
    researches['Ranged Offense (Wonder) I'][1] = [
        219059,
        109530,
        109530,
        109530,
        126127,
        4,
        17387,
        167100,
        'Academy',
        24,
        'Bigger Bags II',
        1,
        'Forced March II',
        1,
    ];
    researches['Ranged Offense (Wonder) I'][2] = [
        766705,
        383353,
        383353,
        383353,
        441442,
        9,
        58244,
        584760,
        'Academy',
        24,
    ];
    researches['Ranged Offense (Wonder) I'][3] = [
        930998,
        465499,
        465499,
        465499,
        536037,
        14,
        73022,
        710040,
        'Academy',
        24,
    ];
    researches['Ranged Offense (Wonder) I'][4] = [
        1095292,
        547646,
        547646,
        547646,
        630631,
        19,
        87801,
        835320,
        'Academy',
        24,
    ];
    researches['Ranged Offense (Wonder) I'][5] = [
        1314351,
        657176,
        657176,
        657176,
        756757,
        26,
        106926,
        1002360,
        'Academy',
        24,
    ];
    researches['Ranged Offense (Wonder) I'][6] = [
        1752467,
        876234,
        876234,
        876234,
        1009010,
        35,
        143437,
        1336500,
        'Academy',
        24,
    ];
    researches['Ranged Offense (Wonder) I'][7] = [
        2300113,
        1150057,
        1150057,
        1150057,
        1324325,
        47,
        189511,
        1754160,
        'Academy',
        24,
    ];
    researches['Ranged Offense (Wonder) I'][8] = [
        3285876,
        1642938,
        1642938,
        1642938,
        1891892,
        61,
        266879,
        0,
        'Academy',
        25,
        'Bigger Bags II',
        8,
        'Forced March II',
        8,
    ];
    researches['Ranged Offense (Wonder) I'][9] = [
        0,
        0,
        0,
        0,
        0,
        76,
        0,
        0,
        'Academy',
        25,
    ];
    researches['Ranged Offense (Wonder) I'][10] = [
        0,
        0,
        0,
        0,
        0,
        96,
        0,
        0,
        'Academy',
        25,
    ];

    researches['Cavalry Offense (Wonder) I'] = [];
    researches['Cavalry Offense (Wonder) I'][1] = [
        219059,
        109530,
        109530,
        109530,
        126127,
        4,
        17387,
        167100,
        'Academy',
        24,
        'Bigger Bags II',
        1,
        'Forced March II',
        1,
    ];
    researches['Cavalry Offense (Wonder) I'][2] = [
        766705,
        383353,
        383353,
        383353,
        441442,
        9,
        58244,
        584760,
        'Academy',
        24,
    ];
    researches['Cavalry Offense (Wonder) I'][3] = [
        930998,
        465499,
        465499,
        465499,
        536037,
        14,
        73022,
        710040,
        'Academy',
        24,
    ];
    researches['Cavalry Offense (Wonder) I'][4] = [
        1095292,
        547646,
        547646,
        547646,
        630631,
        19,
        87801,
        835320,
        'Academy',
        24,
    ];
    researches['Cavalry Offense (Wonder) I'][5] = [
        1314351,
        657176,
        657176,
        657176,
        756757,
        26,
        106926,
        1002360,
        'Academy',
        24,
    ];
    researches['Cavalry Offense (Wonder) I'][6] = [
        1752467,
        876234,
        876234,
        876234,
        1009010,
        35,
        143437,
        1336500,
        'Academy',
        24,
    ];
    researches['Cavalry Offense (Wonder) I'][7] = [
        2300113,
        1150057,
        1150057,
        1150057,
        1324325,
        47,
        189511,
        1754160,
        'Academy',
        24,
    ];
    researches['Cavalry Offense (Wonder) I'][8] = [
        3285876,
        1642938,
        1642938,
        1642938,
        1891892,
        61,
        266879,
        0,
        'Academy',
        25,
        'Bigger Bags II',
        8,
        'Forced March II',
        8,
    ];
    researches['Cavalry Offense (Wonder) I'][9] = [
        0,
        0,
        0,
        0,
        0,
        76,
        0,
        0,
        'Academy',
        25,
    ];
    researches['Cavalry Offense (Wonder) I'][10] = [
        0,
        0,
        0,
        0,
        0,
        96,
        0,
        0,
        'Academy',
        25,
    ];

    researches['Infantry Durability (Wonder) I'] = [];
    researches['Infantry Durability (Wonder) I'][1] = [
        477946,
        149358,
        89615,
        119487,
        171991,
        6,
        23709,
        227820,
        'Academy',
        24,
        'Infantry Offense (Wonder)',
        1,
    ];
    researches['Infantry Durability (Wonder) I'][2] = [
        1672810,
        522753,
        313652,
        418203,
        601966,
        13,
        79424,
        797340,
        'Academy',
        24,
    ];
    researches['Infantry Durability (Wonder) I'][3] = [
        2031269,
        380863,
        634772,
        507818,
        730959,
        21,
        99576,
        968220,
        'Academy',
        24,
    ];
    researches['Infantry Durability (Wonder) I'][4] = [
        2389728,
        448074,
        746790,
        597432,
        859951,
        29,
        119728,
        1139100,
        'Academy',
        24,
    ];
    researches['Infantry Durability (Wonder) I'][5] = [
        0,
        0,
        0,
        0,
        0,
        38,
        0,
        0,
        'Academy',
        25,
    ];
    researches['Infantry Durability (Wonder) I'][6] = [0, 0, 0, 0, 0, 52, 0, 0];
    researches['Infantry Durability (Wonder) I'][7] = [0, 0, 0, 0, 0, 71, 0, 0];
    researches['Infantry Durability (Wonder) I'][8] = [0, 0, 0, 0, 0, 92, 0, 0];
    researches['Infantry Durability (Wonder) I'][9] = [
        0, 0, 0, 0, 0, 114, 0, 0,
    ];
    researches['Infantry Durability (Wonder) I'][10] = [
        0, 0, 0, 0, 0, 144, 0, 0,
    ];
}
