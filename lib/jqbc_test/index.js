jQuery.fn.extend({
    jqbc_test: function($el,callback) {
        var html = ' ... waiting ... ';
        var $root;
        $.get('lib/jqbc_test/index.html', function(data) {
            html = data;
            init();
            ready();
            callback('jqbc_test');
        });
        init = function() {  
            $root = $(html);
            $el.html($root);             
        } 
        ready = function(message) {
            var test = 'test good';
            var date = Date();
            console.log('--',$root)
            $root.append(test).append(date);
            if(message) $root.append(message);
        } 
        return {init:init,ready:ready}
    }
});

