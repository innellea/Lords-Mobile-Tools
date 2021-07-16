var patchTime = 0;
function patchTime() {
    patchTime = secondsByUnit(
        document.getElementById('tierType'),
        document.getElementById('trainingBoost')
    );
    document.getElementById('patchTime').innerText =
        convertTimeShort(patchTime);
}
function convertTimeShort(seconds) {
    var numdays = Math.floor(seconds / 86400);
    var numhours = Math.floor((seconds % 86400) / 3600);
    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var numsecs = ((seconds % 86400) % 3600) % 60;
    //var numseconds = ((seconds % 86400) % 3600) % 60;
    if (numdays)
        return (
            (numdays ? numdays + 'd ' : '') + (numhours ? numhours + 'h' : '')
        );
    else
        return (
            (numhours ? numhours + 'h ' : '') +
            (numminutes ? numminutes + 'm ' : '')
        );
}
function secondsByUnit(tierTime, trainingSpeed) {
    var e = tierTime / ((100 + parseFloat(trainingSpeed)) / 100);
    return e;
}

var dirNumFormat = function (r) {
        return {
            require: '?ngModel',
            link: function (t, e, o, a) {
                a &&
                    (a.$formatters.unshift(function (t) {
                        return r(o.format)(a.$modelValue);
                    }),
                    a.$parsers.unshift(function (t) {
                        var a = t.replace(/[^\d|\-+|\.+]/g, '');
                        return e.val(r(o.format)(a)), a;
                    }));
            },
        };
    },
    filterBreakdownSeconds = function () {
        return function (r) {
            if (r) {
                var t = Math.floor(r / 86400);
                r -= 3600 * t * 24;
                var e = Math.floor(r / 3600);
                r -= 3600 * e;
                var o = Math.floor(r / 60);
                r -= Math.round(60 * o).toFixed(0);
                var a = [];
                return (
                    t > 0 && a.push(t + 'd'),
                    a.push(e + 'h'),
                    a.push(o + 'm'),
                    a.push(r + 's'),
                    a.join(' ')
                );
            }
        };
    },
    filterShortNumber = function () {
        return function (r) {
            if (r) {
                var t = Math.abs(r);
                return (
                    t >= Math.pow(10, 12)
                        ? (r = (r / Math.pow(10, 12)).toFixed(2) + 'T')
                        : t < Math.pow(10, 12) && t >= Math.pow(10, 9)
                        ? (r = (r / Math.pow(10, 9)).toFixed(2) + 'B')
                        : t < Math.pow(10, 9) && t >= Math.pow(10, 6)
                        ? (r = (r / Math.pow(10, 6)).toFixed(2) + 'M')
                        : t < Math.pow(10, 6) &&
                          t >= Math.pow(10, 3) &&
                          (r = (r / Math.pow(10, 3)).toFixed(2) + 'K'),
                    r
                );
            }
        };
    },
    troopsTrainingCalculator = function (r) {
        (r.totalMight = 0),
            (r.tier1_x = 0),
            (r.tier2_x = 0),
            (r.tier3_x = 0),
            (r.tier4_x = 0),
            (r.init = function () {
                l();
            }),
            (r.calculateTroopsCost = function (o, trainPerPatch) {
                var s = parseInt(r[o + '_x']);
                console.log('amount train ' + s);
                var l = trainPerPatch.split(';');
                console.log('RSS Needed ' + l);
                var c = parseFloat(r[o + '_subsidy']);
                console.log('Subsidy: ' + c);
                var troopTier = parseFloat(o.substring(5, 6));
                console.log('Troops Tier: ' + troopTier);
                for (var u = 0; u <= l.length; u++) {
                    var f = e(parseFloat(l[u]), troopTier, c);
                    a(o, u, f * s);
                }
                i(), t();
            });
        var t = function () {
                console.log('Working on Troops'), (r.totalTime = 0);
                var t = [];
                (t.tier1 = 0), (t.tier2 = 0), (t.tier3 = 0), (t.tier4 = 0);
                for (var e = 0; e < troops_x.length; e++) {
                    var a = r[troops_x[e]];
                    console.log(a);
                    var i = parseFloat(troops_time[e].substring(5, 6));
                    t['tier' + i] += parseInt(a);
                    for (var l = 15 * a, c = 1; c < i; c++) l += l;
                    r.trainingSpeed > 0 && (l = secondsByUnit(l)),
                        (l = Math.ceil(l)),
                        (r[troops_time[e]] = l),
                        (r.totalTime += l);
                }
                console.log(t),
                    (r.tier1 = 2 * t.tier1),
                    (r.tier1_x = t.tier1),
                    (r.tier1_speed = s(28800, secondsByUnit(15), t.tier1)),
                    (r.tier1_patch = trainPerPatch(28800, secondsByUnit(15))),
                    (r.tier2 = 8 * t.tier2),
                    (r.tier2_x = t.tier2),
                    (r.tier2_speed = s(54e3, secondsByUnit(30), t.tier2)),
                    (r.tier2_patch = trainPerPatch(54e3, secondsByUnit(30))),
                    (r.tier3 = 24 * t.tier3),
                    (r.tier3_x = t.tier3),
                    (r.tier3_speed = s(86400, secondsByUnit(45), t.tier3)),
                    (r.tier3_patch = trainPerPatch(86400, secondsByUnit(60))),
                    (r.tier4 = 36 * t.tier4),
                    (r.tier4_x = t.tier4),
                    (r.tier4_speed = s(259200, secondsByUnit(120), t.tier4)),
                    (r.tier4_patch = trainPerPatch(259200, secondsByUnit(120))),
                    (r.totalMight = r.tier1 + r.tier2 + r.tier3 + r.tier4);
            },
            e = function (r, ttier, e) {
                var o = 0;
                switch (e) {
                    case 0:
                        o = 0;
                        break;
                    case 1:
                        o = 0.5;
                        break;
                    case 2:
                        o = 1;
                        break;
                    case 3:
                        o = 1.5;
                        break;
                    case 4:
                        o = ttier > 2 ? 2 : 2.5;
                        break;
                    case 5:
                        o = ttier > 2 ? 3 : 3.5;
                        break;
                    case 6:
                        o = ttier > 2 ? 4 : 4.5;
                        break;
                    case 7:
                        o = ttier > 2 ? 5 : 7;
                        break;
                    case 8:
                        o = ttier > 2 ? 7 : 10;
                        break;
                    case 9:
                        o = ttier > 2 ? 11 : 16;
                        break;
                    case 10:
                        o = ttier > 2 ? 30 : 40;
                        break;
                    default:
                        o = 0;
                }
                return (
                    console.log('Discount: ' + o + '%'),
                    (r = Math.ceil((r * (100 - o)) / 100))
                );
            },
            a = function (t, e, o) {
                var a = t + '_' + e;
                r[a] = o;
            },
            i = function () {
                l();
                for (var t = 0; t < troops_rss.length; t++) {
                    var e = troops_rss[t].substring(troops_rss[t].length - 1),
                        o = 'rssType' + e;
                    r[o] += r[troops_rss[t]];
                }
            },
            trainPerPatch = function (r, tierNum) {
                var e = r / tierNum;
                return console.log('Train Per Patch: ' + e), Math.ceil(e);
            },
            s = function (r, t, e) {
                var o = r / t;
                return Math.ceil(e / o);
            },
            l = function () {
                (r.totalTime = 0),
                    (r.tier1 = 0),
                    (r.tier2 = 0),
                    (r.tier3 = 0),
                    (r.tier4 = 0),
                    (r.rssType0 = 0),
                    (r.rssType1 = 0),
                    (r.rssType2 = 0),
                    (r.rssType3 = 0),
                    (r.rssType4 = 0);
            };
        (r.saveSettings = function () {
            $('#troops-training-calculator--settings--modal').modal('toggle');
        }),
            $('#troops-training-calculator--settings--modal').modal({
                show: !0,
            });
    };
