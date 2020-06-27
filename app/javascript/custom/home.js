const checkReady = () => {
    var svg = document.getElementById("grid-svg");
    if (svg === null) {
        setTimeout("checkReady()", 300);
    } else {
        return true;
    }
}

document.addEventListener("turbolinks:load", function(e) {
    
    let box1 = $("#project1");
    let box2 = $("#project2");
    let box3 = $("#project3");

    box1.click(function() {
        if ($('#block1').length) {
            $('#block1').hide('fast', function(){ 
                $('#block1').remove(); 
                box1.css("margin-right", "8px");
            });
            
        } else {
            box1.css("margin-right", "0px");
            box1.addClass("hover-box");
            $("<div id='block1' class='block'></div>").insertAfter(box1).hide().show('fast').addClass("hover-project")
            $("#block1").append("<div id=block-text1 class=block-text></div>");
            $("#block-text1").append("<div class=title><mark>mean eats:<mark></div>");
            $("#block-text1").append("<div class=description>Fullstack pixel-perfect tribute to the Serious Eats website</div>");
            $("#block-text1").append("<div id=code-links1 class=code-links></div>");
            $("#code-links1").append("<a class=live-link href=http://srseats.herokuapp.com/ target=_blank rel=nofollow>live</a>")
            $("#code-links1").append("<a class=github-link href=https://github.com/n-shtetl/meanEats target=_blank rel=nofollow>code</a>")

        }
    })
    box2.click(function() {
        if ($('#block2').length) {
            $('#block2').hide('fast', function(){ 
                $('#block2').remove(); 
                box2.css("margin-right", "8px");
            });
            
        } else {
            box2.css("margin-right", "0px");
            box2.addClass("hover-box");
            $("<div id='block2' class='block'></div>").insertAfter(box2).hide().show('fast').addClass("hover-project");
            $("#block2").append("<div id=block-text2 class=block-text></div>");
            $("#block-text2").append("<div class=title><mark>square groove:<mark></div>");
            $("#block-text2").append("<div class=description>Interactive beatmaker built with MERN Stack</div>");
            $("#block-text2").append("<div id=code-links2 class=code-links></div>");
            $("#code-links2").append("<a class=live-link href=https://squaregroove.herokuapp.com/#/ target=_blank rel=nofollow>live</a>")
            $("#code-links2").append("<a class=github-link href=https://github.com/n-shtetl/SquareGroove target=_blank rel=nofollow>code</a>")
        }
    })
    box3.click(function() {
        if ($('#block3').length) {
            $('#block3').hide('fast', function(){ 
                $('#block3').remove(); 
                box3.css("margin-right", "8px");
            });
            
        } else {
            box3.css("margin-right", "0px");
            box3.addClass("hover-box");
            $("<div id='block3' class='block'></div>").insertAfter(box3).hide().show('fast').addClass("hover-project");
            $("#block3").append("<div id=block-text3 class=block-text></div>");
            $("#block-text3").append("<div class=title><mark>josephus sim<mark></div>");
            $("#block-text3").append("<div class=description>Algorithm visualizer built with D3.js</div>");
            $("#block-text3").append("<div id=code-links3 class=code-links></div>");
            $("#code-links3").append("<a class=live-link href=https://josephus-sim.herokuapp.com/ target=_blank rel=nofollow>live</a>")
            $("#code-links3").append("<a class=github-link href=https://github.com/n-shtetl/JosephusSimulator target=_blank rel=nofollow>code</a>")
        }
    })
}) 

