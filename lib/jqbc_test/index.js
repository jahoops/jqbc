$.widget( "jqbc.jqbc_test", {
    options: {
        colorWheel: ['text-success', 'text-warning', 'text-primary']
    }
    ,html: '<style>'+
        'span {'+
        'font-size: 2em;'+
        '}'+
        '</style>'+
        '<span class="border-warning">Yay, a REAL test!</span>'
    ,colorIdx: 0
    ,_create: function() {
        var color = this.options.colorWheel[0];
        this.element.addClass(color).html( this.html );
    }
    ,nextColor: function() {
        this.element.removeClass(this.options.colorWheel[this.colorIdx]);
        this.colorIdx++;
        this.colorIdx = this.colorIdx < this.options.colorWheel.length ? this.colorIdx : 0;
        this.element.addClass(this.options.colorWheel[this.colorIdx]);
    }
});

