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
            $("<div id='block2' class='block'></div>").insertAfter(box2).hide().show('fast').addClass("hover-project")
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
            $("<div id='block3' class='block'></div>").insertAfter(box3).hide().show('fast').addClass("hover-project")
        }
    })
}) 

