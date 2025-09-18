(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.flagpole = function() {
	this.initialize(img.flagpole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.trying = function() {
	this.initialize(img.trying);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.youR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.flagpole();
	this.instance.setTransform(-188,-383,0.6379,0.6379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.youR, new cjs.Rectangle(-188,-383,326.6,326.6), null);


(lib.tryAgain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trying();
	this.instance.setTransform(-171,-428,0.5988,0.5988);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tryAgain, new cjs.Rectangle(-171,-428,306.6,306.6), null);


(lib.ballDrop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC00").ss(12,1,1).p("AS7AAQAAH2ljFiQliFjn2AAQn1AAliljQljliAAn2QAAn1FjliQFiljH1AAQH2AAFiFjQFjFiAAH1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtXNYQliligBn2QABn1FiliQFiliH1gBQH2ABFiFiQFiFiAAH1QAAH2liFiQliFin2AAQn1AAlilig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ballDrop, new cjs.Rectangle(-127,-127,254.1,254.1), null);


(lib.ballDrag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtXNYQliligBn2QABn1FiliQFiliH1gBQH2ABFiFiQFiFiAAH1QAAH2liFiQliFin2AAQn1AAlilig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ballDrag, new cjs.Rectangle(-121,-121,242.1,242.1), null);


// stage content:
(lib.Task6_Drag_Drop_Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		this.youRight.visible = false;
		this.TryAgain.visible = false;
		
		this.dragBall.on("pressmove", dragBall);
		function dragBall(e){
			var p = stage.globalToLocal(e.stageX, e.stageY);
			e.currentTarget.x = p.x;
			e.currentTarget.y = p.y;	
			}
		
		this.dragBall.on("pressup", dropBall);
		function dropBall (){
			if(root.dragBall.x > 851.8 && root.dragBall.x < 1112.35 &&
				root.dragBall.y > 230.45 && root.dragBall.y < 490.95) {
					root.dragBall.x = root.dropBall.x;
					root.dragBall.y = root.dropBall.y;
					root.youRight.visible = true;
					root.TryAgain.visible = false;
				}
				else{
					root.dragBall.x = 255.75;
					root.dragBall.y = 360;
					root.TryAgain.visible = true;
					root.youRight.visible = false;
					root.youRight.visible = false;
					}		
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.dragBall = new lib.ballDrag();
	this.dragBall.name = "dragBall";
	this.dragBall.setTransform(255.75,360);

	this.TryAgain = new lib.tryAgain();
	this.TryAgain.name = "TryAgain";
	this.TryAgain.setTransform(643,817.25);

	this.youRight = new lib.youR();
	this.youRight.name = "youRight";
	this.youRight.setTransform(650,762.25);

	this.dropBall = new lib.ballDrop();
	this.dropBall.name = "dropBall";
	this.dropBall.setTransform(983.55,360);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmBuQgtglAAhHQAAhEArgpQAqgoBJAAQBEAAAjAjQAiAiAABBIAAAeIjMAAQABAhAYASQAWARAsAAQAdAAAagKQAbgLAPgLIAKAAIAABIQgeAMgbAGQgaAFgiAAQhTAAgsgmgAgmhOQgRAOgBAdIBzAAQgBgbgOgOQgNgPgbAAQgZAAgRANg");
	this.shape.setTransform(890.8,73.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACLCQIAAiMIgBgiQgBgOgFgJQgEgJgJgEQgJgEgRAAQgLAAgLAEQgLAEgPAJIAADFIhZAAIAAiMIgBgiQgBgOgEgJQgFgJgJgEQgJgEgRAAQgNAAgMAFQgMAGgLAGIAADFIhaAAIAAkXIBaAAIAAAfQAYgSAVgKQAVgLAZAAQAcAAAUANQAVAMAMAYQAbgXAZgNQAagNAZAAQAsAAAYAcQAYAbAAAzIAAC1g");
	this.shape_1.setTransform(846.9,73.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhwB7QgbgZABgmQgBgfAOgTQAOgSAZgMQAZgLAlgFQAjgEAogDIAAgBQAAgYgTgIQgTgJgjAAQgXAAgZAIQgZAIgLAEIgIAAIAAhDQAOgEAggFQAggFAggBQBMABAhAXQAjAXgBAyIAAC+IhZAAIAAgeIgSANQgKAJgJAEQgNAGgOADQgOACgRAAQgoABgbgZgAAMAMQgVADgLAEQgNAEgHAIQgHAIgBAOQABAIABAFQACAGAFAFQAHAFAHACQAIACARAAQAMABAOgGQAOgFAKgJIAAg6IgmADg");
	this.shape_2.setTransform(801.9,73.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah5COQg1g0AAhaQAAhWA2g1QA2g1BgAAQAkAAAiAHQAgAGApAUIAABXIgKAAIgVgPIgZgQQgPgIgUgGQgTgGgVAAQgaAAgUAIQgUAHgRAQQgQAPgIAXQgJAXAAAeQgBA8AhAhQAhAhA/AAIALgBIANAAIAAhJIhLAAIAAhFICsAAIAAC2QgZAKgpAKQgqAJgoAAQheAAg2gzg");
	this.shape_3.setTransform(764.5,69.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiRDDIAAl9IBaAAIAAAdQAVgQAVgLQAVgKAcAAQA0AAAdAmQAdAnAABDQAAAjgLAbQgKAcgRATQgSATgXAKQgWAKgaAAQgXAAgRgFQgRgFgRgKIAAB1gAgdh6QgOAEgMAHIAACMQAJADAKABIAUABQAjAAARgUQASgVAAgpQAAgpgOgTQgOgSgdAAQgNAAgNAEg");
	this.shape_4.setTransform(710.175,78.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhwBtQgogoAAhEQAAhFAogoQApgoBHAAQBKABAnAoQAoAoAABEQAABEgoAoQgoAnhJAAQhHAAgpgngAgWhRQgKADgKAKQgIAKgEARQgFARAAAZQAAAXAEAQQAEARAJAKQAHAKALAFQAMAEANAAQAMAAALgEQALgEAIgKQAJgKAEgQQAFgPgBgaQABgYgFgRQgFgQgHgKQgIgLgMgDQgLgFgNAAQgMAAgKAEg");
	this.shape_5.setTransform(673.85,73.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhkCMIAAkWIBZAAIAAApQAdgaAWgIQAWgIASAAIALAAIAKABIAABVIgIAAQgFgCgNgBIgVgBQgTAAgPADQgPACgQAGIAAC6g");
	this.shape_6.setTransform(645.375,73.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiuC6IAAlyICHAAQAsAAAgAHQAhAIAXAOQAmAXAWAoQAWAnAAA1QAAA1gYApQgXAogkAWQgcAQgfAHQghAGgsABgAhPB0IAYAAQAiAAARgDQAPgDAPgJQAagPAMgYQANgZAAglQAAgkgOgaQgOgagcgOQgPgIgOgCQgQgDgfAAIgYAAg");
	this.shape_7.setTransform(610.9,69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AipChQgngfAAgzQAAgWAGgPQAGgQALgMQAJgMANgIQANgJALgGIgUgQQgJgJgHgKQgHgJgEgMQgDgLAAgPQAAgSAHgPQAIgPAOgMQAQgNAagIQAagIAkAAQAeAAAYAGQAWAGAQALQAQALAIAOQAIAPAAARQAAALgDAOQgEAOgJAMQgKANgQALQgPAMgbAIIBLBDIAAhQIBdAAIAAAcQAAAcgKAbQgKAbgRASIBeBSIAAAGIh2AAIgjggQgZAUgdAKQgeAJghAAQhFAAgngggAhpAjQgGAOAAAPQAAARAGALQAHANAJAIQAKAHANAEQAMAEALAAQARAAAOgDQAMgDAMgKIhphfQgFAFgHANgAhGiKQgGABgGAEQgFAEgEAGQgEAIAAAKQAAAQAMANQAMANATAPQAOgLAHgNQAHgOAAgPQAAgNgEgHQgEgIgGgEQgGgEgGgBIgLgBIgJABg");
	this.shape_8.setTransform(551.125,69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiRDDIAAl9IBaAAIAAAdQAVgQAVgLQAVgKAcAAQA0AAAdAmQAdAnAABDQAAAjgLAbQgKAcgRATQgSATgXAKQgWAKgaAAQgXAAgRgFQgRgFgRgKIAAB1gAgdh6QgOAEgMAHIAACMQAJADAKABIAUABQAjAAARgUQASgVAAgpQAAgpgOgTQgOgSgdAAQgNAAgNAEg");
	this.shape_9.setTransform(492.925,78.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhwB7QgbgZAAgmQAAgfAOgTQAOgSAZgMQAZgLAlgFQAkgEAngDIAAgBQAAgYgTgIQgSgJglAAQgVAAgaAIQgZAIgLAEIgIAAIAAhDQAOgEAggFQAggFAggBQBLABAjAXQAhAXAAAyIAAC+IhZAAIAAgeIgSANQgKAJgKAEQgMAGgOADQgOACgRAAQgoABgbgZgAALAMQgUADgLAEQgNAEgHAIQgIAIAAAOQAAAIACAFQABAGAGAFQAHAFAHACQAIACARAAQANABAOgGQANgFAKgJIAAg6IgnADg");
	this.shape_10.setTransform(456.15,73.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhkCMIAAkWIBZAAIAAApQAdgaAWgIQAWgIASAAIALAAIAKABIAABVIgIAAQgFgCgNgBIgVgBQgTAAgPADQgPACgQAGIAAC6g");
	this.shape_11.setTransform(429.075,73.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiuC6IAAlyICGAAQAtAAAgAHQAiAIAWAOQAmAXAWAoQAWAnAAA1QAAA1gXApQgYAogkAWQgbAQggAHQghAGgsABgAhPB0IAZAAQAhAAAQgDQAQgDAPgJQAagPAMgYQAMgZAAglQAAgkgNgaQgOgagcgOQgPgIgOgCQgQgDgeAAIgZAAg");
	this.shape_12.setTransform(394.6,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.dropBall},{t:this.youRight},{t:this.TryAgain},{t:this.dragBall}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(774.7,394.3,335.89999999999986,311.59999999999997);
// library properties:
lib.properties = {
	id: '66A179DBE21570469AE995DB547360B5',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./images/flagpole.png", id:"flagpole"},
		{src:"./images/trying.png", id:"trying"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['66A179DBE21570469AE995DB547360B5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
