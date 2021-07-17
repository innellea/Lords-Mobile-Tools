// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
//$('.caption2').tooltip(options);
$(document).ready(() => {
    //updateCost();
    initItems();
});
/*
    //$( ".caption2" ).click(function() {
$('.caption2').on("click", function() {
  console.log( "Handler for .click() called." );
  e=$(this);
  //console.log(e);
                    var item=e.parent();
                    if(item.val()){
                        if(model.speed>calcTS(item.val())){
                            for (n=1; n<researches[item.attr("id")].length; n++) {
                                var time = (researches[item.attr("id")][n][6]);
                                if(time>10){

                                if(model.speed>calcTS(time)){
                                    researches[item.attr("id")][n][6]=0;
                                    model.speed-=calcTS(time);
                                //}
                                //updateCost();
                                model.food-=researches[item.attr("id")][n][0];
                                model.rock-=researches[item.attr("id")][n][1];
                                model.timber-=researches[item.attr("id")][n][2];
                                model.ore-=researches[item.attr("id")][n][3];
                                model.gold-=researches[item.attr("id")][n][4];
                                model.might+=researches[item.attr("id")][n][5];
                                updateLeft();
                                n++;
                                console.log(n);
                                console.log(researches[item.attr("id")].length);
                                if(n<researches[item.attr("id")].length){
                                var time = (researches[item.attr("id")][n][6]);
                                console.log("time: "+time);
                                if(time>10){
                                    item.find(".caption").text(""+(n-1)+"/"+(researches[item.attr("id")].length-1));
                                    console.log("time:"+time+ " calcTS: "+calcTS(time)+ " text: "+convertTimeShort(calcTS(time)));
                                    item.find(".caption2").text(convertTimeShort(calcTS(time)));
                                    item.find(".caption3").text(formatAmount(secondsToGems(calcTS(time))));
                                    item.val(time);

                                    break;
                                }
                                }else{
                                    item.find(".caption").text(""+(n-1)+"/"+(researches[item.attr("id")].length-1));
                                    //console.log("time:"+time+ " calcTS: "+calcTS(time)+ " text: "+convertTimeShort(calcTS(time)));
                                    item.find(".caption2").text("");
                                    item.find(".caption3").text("");
                                }
                                }
                                return;
                                }
                            }
                        }else{
                            alert("Not enough spedups. has:"+convertTimeShort(model.speed)+", requires: "+convertTimeShort(calcTS(item.val())));
                        }
                    }
});
*/
/*
$('.caption3').on("click", function() {
  console.log( "Handler for .click() called." );
  e=$(this);
  //console.log(e);
                    var item=e.parent();
                    if(item.val()){
                        if(model.gems>secondsToGems(calcTS(item.val()))){
                            for (n=1; n<researches[item.attr("id")].length; n++) {
                                var time = (researches[item.attr("id")][n][6]);
                                if(time>10){

                                if(model.gems>secondsToGems( calcTS(time))){
                                    researches[item.attr("id")][n][6]=0;
                                    model.gems-=secondsToGems( calcTS(time));
                                //}
                                //updateCost();
                                //console.log("time1: "+time+" might gained:"+researches[item.attr("id")][n][5]);
                                model.food-=researches[item.attr("id")][n][0];
                                model.rock-=researches[item.attr("id")][n][1];
                                model.timber-=researches[item.attr("id")][n][2];
                                model.ore-=researches[item.attr("id")][n][3];
                                model.gold-=researches[item.attr("id")][n][4];
                                model.might+=researches[item.attr("id")][n][5];
                                updateLeft();
                                n++;
                                console.log(n);
                                console.log(researches[item.attr("id")].length);
                                if(n<researches[item.attr("id")].length){
                                var time = (researches[item.attr("id")][n][6]);
                                //console.log("time: "+time+" might gained:"+researches[item.attr("id")][n][5]);
                                if(time>10){
                                    item.find(".caption").text(""+(n-1)+"/"+(researches[item.attr("id")].length-1));
                                    console.log("time:"+time+ " calcTS: "+calcTS(time)+ " text: "+convertTimeShort(calcTS(time)));
                                    item.find(".caption2").text(convertTimeShort(calcTS(time)));
                                    item.find(".caption3").text(formatAmount(secondsToGems(calcTS(time))));
                                    item.val(time);
                                    break;
                                }
                                }else{
                                    item.find(".caption").text(""+(n-1)+"/"+(researches[item.attr("id")].length-1));
                                    //console.log("time:"+time+ " calcTS: "+calcTS(time)+ " text: "+convertTimeShort(calcTS(time)));
                                    item.find(".caption2").text("");
                                    item.find(".caption3").text("");
                                }
                                }
                                return;
                                }
                            }
                        }else{
                            alert("Not enough spedups. has:"+convertTimeShort(model.speed)+", requires: "+convertTimeShort(calcTS(item.val())));
                        }
                    }
});
*/

$('.captionm,.caption2,.caption3').on('click', function () {
    console.log('Handler for .click() called.');
    e = $(this);
    //console.log(e);
    const item = e.parent();
    if (item.val()) {
        console.log('current: ' + item.val());
        if (item.val() < researches[item.attr('id')].length - 1) {
            item.val(Number(item.val()) + 1);
            item.find('.caption').text(
                '' + item.val() + '/' + (researches[item.attr('id')].length - 1)
            );
            console.log(
                'captionm id:' + item.attr('id') + ' val:' + item.val()
            );
            if (item.val() < researches[item.attr('id')].length - 1) {
                const time =
                    researches[item.attr('id')][Number(item.val()) + 1][7];
                //console.log("inside if time: "+convertTimeShort(calcTS(time)));
                item.find('.caption2').text(convertTimeShort(calcTS(time)));
                item.find('.caption3').text(
                    formatAmount(secondsToGems(calcTS(time)))
                );
            } else {
                item.find('.caption2').text('');
                item.find('.caption3').text('');
            }
            console.log('before updateDepen: ' + item.val());
            updateDepen(item);
            /*var dependency = researches[item.attr("id")][item.val()][7];
                if(dependency){
                    var dependencyVal = researches[item.attr("id")][item.val()][8];
                    console.log("dependency:"+dependency);
                    var itemDep = $("#"+dependency);
                    console.log(itemDep);
                    if(itemDep.val()<dependencyVal){
                        console.log("set dependencyVal"+dependencyVal);
                        itemDep.val(dependencyVal);
                        itemDep.find(".caption").text(""+(itemDep.val())+"/"+(researches[itemDep.attr("id")].length-1));
                    }
                }*/
        }
    }
    pendingTime();
});

$('.captionl').on('click', function () {
    console.log('Handler for .click() called.');
    e = $(this);
    //console.log(e);
    const item = e.parent();
    if (item.val()) {
        console.log('current: ' + item.val());
        if (item.val() > 0) {
            item.val(Number(item.val()) - 1);
            item.find('.caption').text(
                '' + item.val() + '/' + (researches[item.attr('id')].length - 1)
            );
        }
    }
    pendingTime();
});

function updateDepen($item) {
    for (
        let counter = 8;
        researches[$item.attr('id')][$item.val()][counter];
        counter += 2
    ) {
        const dependency = researches[$item.attr('id')][$item.val()][counter];
        if (dependency) {
            const dependencyVal =
                researches[$item.attr('id')][$item.val()][counter + 1];
            //var itemDep = $("#"+dependency);
            //var itemDep = $("#"+dependency.replaceAll(" ","\\ "));
            const itemDep = $('#' + dependency.replace(/ /g, '\\ '));
            //console.log("dependency:"+dependency.replaceAll(" ","\\ ")+" itemDep.val():"+itemDep.val()+" itemDep.attr(id):"+itemDep.attr("id"));
            console.log(itemDep);
            if (itemDep.val() < dependencyVal) {
                console.log('set dependencyVal' + dependencyVal);
                itemDep.val(dependencyVal);
                itemDep
                    .find('.caption')
                    .text(
                        '' +
                            itemDep.val() +
                            '/' +
                            (researches[itemDep.attr('id')].length - 1)
                    );
                if (itemDep.val() < researches[itemDep.attr('id')].length - 1) {
                    const time =
                        researches[itemDep.attr('id')][
                            Number(itemDep.val()) + 1
                        ][7];
                    itemDep
                        .find('.caption2')
                        .text(convertTimeShort(calcTS(time)));
                    itemDep
                        .find('.caption3')
                        .text(formatAmount(secondsToGems(calcTS(time))));
                } else {
                    itemDep.find('.caption2').text('');
                    itemDep.find('.caption3').text('');
                }
                updateDepen(itemDep);
            }
        } else {
            break;
        }
    }
}
