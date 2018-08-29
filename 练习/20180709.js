(function($){
	function LazyLoad(el,opts){
		this.init(el,opts);
	}
	LazyLoad.DEFAULTS={
		dataAttr:'src'
	};
	LazyLoad.prototype.init=function(el,opts){
		this.$el=$(el);
		this.opts=$.extend({},LazyLoad.DEFAULTS,opts);
		this.$win=$(window);

		this.bindEvent();
		this.load();
	};
	LazyLoad.prototype.bindEvent=function(){
		var self=this;
		    timer=null;

		 this.fn=function(){
		 	if(timer)return;
		 	timer=setTimeout(function(){
		 		self.load();
		 		timer=null;
		 	},250);
		 };
		 this.$win.on('scroll resize',this.fn);   
	};
	LazyLoad.prototype.load=function(){
		var self=this;
		    $el=this.$el;

		 $el.each(function(){
		 	if(!this.loaded){
		 		if(inVisibleArea(this)){
		 			appear(this);
		 		}
		 	}
		 });
		 if(isAllLoaded()){
		 	self.destructor();
		 }   

		 function isAllLoaded(){
		 	return $el.length===0;
		 }

		 function inVisibleArea(elem){
		 	var $win=self.$win;
		 	return $win.scrollTop()+$win.heigth()>=$(elem).offset().top;
		 }

		 function appear(elem){
		 	elem.src=$(elem).data(self.opts.dataAttr);
		 	elem.loaded=true;
		 	var tmp=$.grep($el,function(elem){
		 		return !elem.loaded;
		 	});
		 	$el=$(tmp);
		 }


	};
	LazyLoad.prototype.destructor=function(){
		this.$win.off('scroll resize',this.fn);
	};
	$.fn.extend({
		lazyload:function(opts){
			new LazyLoad(this,opts);
			return this;
		}
	});
})(jQuery);





































})()