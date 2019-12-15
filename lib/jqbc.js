jQuery.fn.extend({
    jqbc: function(callback) {
        var self = this;
        var f = {}; 
        var $scope = $(this).length===0 ? this : $(document);
        var $elems = $scope.find('[data-jqc]');
        var count = $elems.length;
        $elems.each(function(idx, el){
            var c = $(el).attr('data-jqc');
            $.getScript('lib/' + c + '/index.js',function(){            
                f[c] = $.fn[c]($(el),function(data){
                    if(!--count) callback(f);
                });
            });
        });                  
    }
});