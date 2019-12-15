(function ( $ ) {
    $.fn.jqbc = function( options ) {
        var settings = $.extend({
        }, options );
        var f = {}; 
        var $scope = $(this).length===0 ? this : $(document);
        var $elems = $scope.find('[data-jqbc]');
        var count = $elems.length;
        $elems.each(function(idx, el){
            var $e = $(el);
            var c = $e.attr('data-jqbc');
            $e[c]();
        });                  
    }
}( jQuery ));