//Build a search function
//Implement the search box at the top of the page that filters photos based on the captions.
//The photos should filter in real-time as you type.
//This could be a jQuery plugin that you find on the web, or code that you write yourself.

    (function ($) {
    jQuery.expr[':'].Contains = function(a,i,m) {
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
};



function listFilter(header, list) {
    //create the filter form and append it to the header
    var form =$("<form>").attr({"class":"filterform", "action":"#"}),
        input =$("<input>").attr({"class":"filterinput","type":"search","placeholder":"Filter by caption"});
    
    $(form).append(input).appendTo(header);
    
    
    $(input).change(function() {
        var filter = $(this).val();
        //get the value of the input field so we can filter the results
        
        
        
        if (filter) {
        
        
        $(list).find("figcaption:not(:Contains(" + filter + "))").parent().fadeOut("slow");
        
        $(list).find("figcaption:Contains(" + filter + ")").parent().fadeIn("slow");
            } else {
                $(list).find("figure").fadeIn("slow");
            }
        return false;
        
    }).keyup(function() {
        //call above change event after every letter typed
        $(this).change();
        
    });
    
}

$(function () {
    listFilter($("header"),$("#main-wrapper"));
});
}(jQuery));

