(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"plugins/hermetic/ltitools/assets/images/bgtexture1.jpg", id:"bgtexture1"},
		{src:"plugins/hermetic/ltitools/assets/images/brushed_texture.jpg", id:"brushed_texture"}
	]
};


// symbols:
(lib.bgtexture1 = function() {
	this.initialize(img.bgtexture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,540);


(lib.brushed_texture = function() {
	this.initialize(img.brushed_texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,500);


(lib.wrongHighlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EAjmAD6MhHLAAAIAAnzMBHLAAAg");
	this.shape.setTransform(227.8,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.008)").s().p("EgjlAD6IAAnzMBHLAAAIAAHzg");
	this.shape_1.setTransform(227.8,25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,457.6,52);


(lib.wrongBox_x = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("X", "30px 'Arial'", "#FF0000");//red
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 22;
	this.text.setTransform(10.8,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,35.1);


(lib.wrongBlinking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAJgIAJAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape.setTransform(68.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C0101").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAJgIAJAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_1.setTransform(68.8,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.5,5.6);


(lib.rightHighlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("EAjmAEaMhHLAAAIAAozMBHLAAAg");
	this.shape.setTransform(227.8,25,1,0.886);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.008)").s().p("EgjlAEaIAAozMBHKAAAIAAIzg");
	this.shape_1.setTransform(227.8,25,1,0.886);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,457.6,52);


(lib.rightBlinking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336600").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAJgIAJAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape.setTransform(68.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FF00").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAJgIAJAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAJgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_1.setTransform(68.8,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.5,5.6);


(lib.person4Highlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuORjIAQhzIAWhIIAPg7QBAkMAdiNQBCkPAeiHQAVhmAQgdQANgeBYgoQBngtDNhKIA4g4IAAAIIADgFQgQgrgDgYQglgagQgTQgbgdALifIAAg+QAthYglgfQgFghACgPQADgLAdglQBTiIAigSQgggbgFgIQB9gtAWAAQA4ADBVAdQBtAiBIBoQA6BSgFBAQgGAlgqB4QgYBSggBDQgDAKgYAGQgFAqgaA2QAiAHAdAxQAjA3AbAQQAdAQBKAdQEqCFAQAOQAoAfAFAGQAYAgAKBYQALBgAAAyQADAYgGAzQAGAiAYBFQAFBVADC6QAFBIANCaIgVBwQgIAigVBEg");
	this.shape.setTransform(91.2,112.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182.4,224.7);


(lib.person3Highlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnlS5QAQhJABgvQhDAIhRg5QgFAMgXAMQgWANgKgKQAMgjgTgPQgBgUAFgRIiciQQgbgZhNhXQhGhShKhlQgthLADgZQACgMA+hVQCrjuAmgjQCaikBShQQA0hBAbgUQCBgbAogdQghgmgJgbQAWhtgKgoIAAgDQgDgjAAgTIgHAAQAFgKAAgDQgFANgCgKQgGAWAMAdQgDgFgDgCQgKgqAKgdQhLhQAZiuQAAAIADgFIACgIQAWhUAPgXQAmgbACgPQAMAAADADQAohIAbgUQA+gSAbgRQBDgvAKACQgHAFAFAAQAZgHBKgFQgFAAADgCIACAAQAFAEAkAFQAEAFAjANQAeARBoBXQANAKAgAgQACAAADgHIAoA2QAgAtAHAFQgMACAZAkQACATgUAhQAAAWAeAoQAIAggXAvQgKBLAXA+QABAJAQAJQgHgCgFABQAdBLBXgrQgCAUgbASQAsgXglAZQAAARgMAIQACAFAFAAIAPgFQACAKgOAHQAHAAACgFQADARgogCQAFAbArANQgjAZAKAUIghgIQAKAggZAyQAeAWBGAeIA7AUIAtAZQAUAPAoA8QAWAWAvAqIA3BOQAlA0BfBXQATAWBhCEIA5BPIA1BVQARAxhLBXQhIBVh3CXQhFBDidCHQhSBChDgHQAIATALA4gAIAEGIghBIIAABDQgKB8hKD2QgFBQAFAPQAHARAyAWQBFAoAVgHQATgFBNhNQBIhQANgRQAlhDAggqQBGhVgFggQAAgFhVhLIhNhPQhjhkgvhWgAoXNzQANAMA+gJQAegIA7glQgxiBgUhGQgjhegPgyQgbhZAPhQQAKgUAAgMQgIgWgCgNQAAgygFgYQAAgKgUg5QhDB+jTC2IgtAlQgDAUA6BXQBlCjBuBmQAMgCASgKQAiAFgPA0g");
	this.shape.setTransform(112.7,121);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,225.3,242);


(lib.person2Highlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqgSaIgFgZIgUgpQAAgugFgcQgih4AAgzQgCguANhZQAKhogKjUQAFhkAAguQAAhoANhKQAKhHAHgbQANgjA4g9IBPhXQAIgKAKgXQASgVA9gSQAphMAAgkQADgNgSgzQg2hogIhNQgUAAgmhKQgVgZgCgNQAAgFAPgxQANgKAXANQgNiUAFgUQANhFAwgnQBahRAFgIQAcgFAmgaQAXAIAKgFQAKAPAZABQgiAAAeAKQBAASBbBJQBKBsgtCoIAogFQAlBXhiBRIAABUQAmApBIBUQANADAQgFQAwAhCCAmQCAAmArAiQAAgGgFgHQCFBMAzCzQAUBGAwCbQAXBpASCTQAaCxAFBeQACAwg/EMQgIAfgIA6QgHARgWAig");
	this.shape.setTransform(73.8,117.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147.5,235.6);


(lib.person1Higlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoMRzIABgHIgFgiQAAgLANhPIh5gHIhSAAQgvgIgThfIgVhSQgDgSAGhvQAAggAakPQglgNgDgQIAQgqQAthnAFgdQAOhSAiiCQANg3AFgLIAggXQA9gtAqgTQgYgXAaAIQgNgGAAgIQANgCAAgDQA1AgAwgwQAcgfAGhSQACgVgHh3QAAhEAHhFQAdk/B0huQBlhdBmAIQATADAfANQARADAlACQAaALA1BCQAyBKADACQAdA3AqGBQANCuAaAoQAqA6BPgdQATgFAagYQAAANgQAQIAOAAQAAANgbAFIA4ANQASAGAqAIQAIAFALAVIAaAaQAIAIAoBKIAnBaQBHCZAQATQAYASAAALQAAAVglAlQgDAIALAsIAdCkQAlDTAAAIIgNCDQgGA1gIASQgPAgg9AIQhMAQgGAAQhHANgIAGQANAnALBPQADAYAOAmgAojJoQgaBpALAbQAiAKBHANIgQglIgKgsQgVg4ACgKQAVgbAAgNQg6gYALglQgLAbgIBCgAH6K8QAXgDAlgPQAIiCg6hMQgKA6AACmg");
	this.shape.setTransform(81.7,113.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163.5,228);


(lib.grayer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape.setTransform(480,270);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.starlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFCC","rgba(255,237,17,0)"],[0,1],5.9,-9.2,0,5.9,-9.2,44.3).s().p("AgbgPQAfhdhQhPIjHiyIDaCTQB0BJBchfIEWlEIj+FjQhOBeBGBDIDwDZIkPi3QhHgrg2A9Im3Ixg");
	this.shape.setTransform(43,56.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,113.1);


(lib.screencatagories = function() {
	this.initialize();

	// text
	this.catNameBox = new cjs.Text("123456789", "16px 'Arial'", "#FFFFFF");
	this.catNameBox.name = "catNameBox";
	this.catNameBox.textAlign = "center";
	this.catNameBox.lineHeight = 18;
	this.catNameBox.lineWidth = 135;
	this.catNameBox.setTransform(73,7);

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.125)","rgba(255,255,255,0)"],[0,1],4.6,-15.3,4.6,15.8).s().p("AAgCeQAtgkAHgzQAGgvgbgwQgagwgwgkQg0glg/gMIDXAGQBMCfhMCWg");
	this.shape.setTransform(130.7,24.1);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#3366FF","#01226D"],[0,1],-0.1,0.2,0,-0.1,0.2,59.3).s().p("AqtDAQgrjEAri6QLLgZKOAZQAuDRgtCtQlXALlWAAQlWAAlXgLg");
	this.shape_1.setTransform(75.2,25);

	// Screen
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Aq1DKQgvjPAvjDQLUgZKVAZQAyDcgyC2QlaALlaAAQlaAAlbgLg");
	this.shape_2.setTransform(75.2,25);

	// Frame
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ArwD3IAAntIXhAAIAAHtg");
	this.shape_3.setTransform(75.4,24.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.catNameBox);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150.7,49.5);


(lib.screenbg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222222").s().p("EgkjAkuQgKAAAAgKMAAAhJHQAAgKAKAAMBJHAAAQAKAAAAAKMAAABJHQAAAKgKAAg");
	this.shape.setTransform(235.1,235.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470.1,470.1);


(lib.screen = function() {
	this.initialize();

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.125)","rgba(255,255,255,0)"],[0,1],8.1,-55.5,8.1,57.6).s().p("ACVEDQAKisgvixQguiwhWiCQhdiHhvgsIF+AVQCHJGiHIkIhlAAQBPiDANi6g");
	this.shape.setTransform(120.9,64.1);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#3366FF","#01226D"],[0,1],0.6,0.6,0,0.6,0.6,67.3).s().p("AqVJMQhvpLBvpIQK6hJJ+BJQBUJIhUJLQlOAhlPAAQlMAAlPghg");
	this.shape_1.setTransform(75.2,65.1);

	// Screen
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AqWJWQgDgBgCgCQgDgCAAgEQhwpMBwpKQAAgDADgCQACgCADgBQK7hJJ/BJQAEAAACACQADADAAADQBUJKhUJMQAAAEgDACQgCACgEABQlPAhlPAAQlNAAlPghg");
	this.shape_2.setTransform(75.2,65.1);

	// Frame
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ArwKTIAA0lIXhAAIAAUlg");
	this.shape_3.setTransform(75.4,66);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150.7,132);


(lib.logobar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#251205","#71350F","#68320F","#5A2B0C"],[0,0.439,0.718,1],0.2,63.8,-0.1,-38.3).s().p("Eg4PAPHIAA+NUA8vAISAzwgISIAAeNUg3igR4g49AR4g");
	this.shape.setTransform(360,37.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-59.5,720,193.5);


(lib.logo = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AG1DHQghgTgBgaIAXgDQADAQAYAKQARAJAUAAQATAAAAgMQAAgOgOgCIgYAAQg2AAAAgtIABgIIgKACQgnAAAAgmQAAgTARgjQASghgBgDQABgKgJAAQgUABgUAYQgQARgKAYIgZA3IgqAAQgNAAAFgLIBFiVIA3AAIgLAWQASgZAdAAQAkAAAAAlQAAATgNAeQgOAfAAAKQAAALANAAIAIgCQAGgCAAADIAAACIAHgDQgEgIAAgLQAAgsAkgkQAkglAsAAQAUAAANAHQAKgHAQAAQANAAAJAHIgRATIgDgBQgGAAgDADQAFAKAAAKQAAArgqApQgfAggrAAQgdAAgPgOQgNAHAAANQAAASAggBIAHAAIAIAAQAYAAAQANQARANAAAZQAAAdgTALQgOALgeAAQgbAAgegRgAILgIQgVAggBASQABAPAQAAQAUAAAWghQAVgdAAgVQAAgRgRAAQgSAAgXAjgArmCaQgdgYAAgrQAAg2AzhIQAvhHBDgyQBHg3A2AAQAvAAAUAnQANAbgDAjIhCAVQAFgUAAgVQAAgpgbAAQgaAAgiAmQgiAkgrBGQgyBPAAAhQAAAeAgAAQAfAAAhgaQAegXAQgfIBnAAQgjBQhaApQgyAYg+AAIAAAAQgsAAgbgWgAkKBrQgnAAAAgpQAAgTASgiQATggAAgEQAAgKgJAAQgPgBgVAWQgSASgJATIgdBBIgqABQgHAAgCgEQgBgDACgFIBzj8IA2AAIg4B9QARgaAfABQAlABAAAlQAAATgOAdQgPAgAAAJQgBAMANAAIAJgCIADgBIAAgHQAAgcAVgSQAUgQAdAAQAfAAAOANQAQgcAAgKQAAgMgQAAQgdAAgRAVIgWgXQAegcArAAQA4AAAAAcQAAALgKAZQgIARgJATQgDAHAAAEQAAAMAPAAIABAAQADgQAOghIBOirIA5gDIhaDFQgIAMAAAGQAAAKAKAAIAIgCQAGgCAAADQACAHgFALQgDAJgKAHQgLAJgNAAQgZAAgJgRQgMARgWAAQgYAAgJgQQgUAQggAAQglAAgIgXIgDALQgEAJgKAHQgMAJgNAAIAAAAgAipAdQgHAHAAALQAAAOAPAAQAXAAALgaQgFgNgUAAIAAAAQgJAAgIAHgAATA4QAAgPASgoIBQirIA4gDIhcDFQgHAMAAAGQAAAKAMAAIAIgCQAGgCAAADQABAHgEALQgEAJgLAHQgMAJgMAAQgmAAgBgmgAKABOQgSgOABgaQAAgmAggjQAhgmAlAAQAvAAAAA1QAAAZgLARIhUAAQgFAIAAALQAAASAXAAQAdAAAegRIAAAdQgdAUgrAAIAAAAQgaAAgQgNgAK8gcQgIAOgFANIAnAAQAGgPAAgNQAAgQgLAAIAAAAQgJAAgMARgAB1BOQgRgOAAgaQAAgmAggjQAigmAlAAQAuAAAAA1QAAAZgKARIhVAAQgEAIAAALQAAASAWAAQAeAAAdgRIAAAdQgcAUgsAAIAAAAQgaAAgQgNgACygcQgJAOgFANIAoAAQAFgPAAgNQAAgQgKAAIAAAAQgJAAgMARg");
	this.shape.setTransform(463.8,125.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AG7DkQgagLgRgRQgYgYABgpIAVgDIgBgEQgUgDgNgNQgRgQAAgbQAAgRAEgQIghBLIhOAAQgUAAAAgIIAAgBQgdAOgfAAQgiAAgYgSQgTASgaAAQgcAAgQgPQgQAPgXAAQgVAAgPgIQgOAIgRAAQgVAAgPgKQgVAKgcAAQgXAAgRgJQgTAVgdABQgcAAgQgSQgRgRABgbQAAgSAJgXQgFAHgiBQIhSgBQgQAAAAgIIABgDIgQARQglAmg1AWQg0AXg1AAQg4AAgkgdQgmgfAAg3QAAg8A0hMQAzhMBIg2QBMg5A8AAQBkAAAAB1IgBAXIh4AlQAPg7AAgVQAAgNgHAAQgdAAhDBnQhCBiAAAiQAAAJAKAAQANAAAXgOQAVgNAKgNQAPgQANgbICOAAIBdjLIBoAAIguBkIACAAQAwAAAIApQArgpA2AAQAyAAASATIA1h3IC6AAIgyByQAYgOAbAAQAiAAASAVQASAUAAAjIAAAFIAkhPIBKAAQAQgCARAAQAwAAAIAqQAqgqA2AAQASAAAOAFQANgFALAAQASAAAaARQAbgRAeAAQAiAAATAVQARAUAAAjQAAAfgUAgIAAAnQgtAhgwAAQgjAAgXgTQgNgLgGgOQgYAZgdAKQAbAUAAAmQAABJhWAAIAAAAQgYAAgagKgAjIgjQAAAIgCAKIAOgGIgMgNIAAABg");
	this.shape_1.setTransform(464,125.3);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,37.4,0,-37.4).s().p("AjlI4QhdAAAAhNIAAvNQAAhUBdAAIIoAAIAAIMIlkAAQgsAAAAAgIAADZQAAAjAlAAIFrAAIAABhIlrAAQglAAAAAtIAAAvQAAAnAsAAIFkAAIAABig");
	this.shape_2.setTransform(270.3,59.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,53.4,0,-53.4).s().p("AjzI4QhSAAAAhNIAAvPQAAhSBVAAIHiAAQBUAAAABOIAAJ2Ij1AAIAAiOQABgrgpAAIhRAAQgogBAAAsIAAGoQAAAuA1AAIBsAAIAAhSQAAgzgmAAIgpAAIAAhfIEYAAQAsAAAAAuIAAEYg");
	this.shape_3.setTransform(36.1,59.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,56.3,0,-56.3).s().p("ABRI3IgajnIhvAAIgYDnIjwAAIBiwoQAHhDA3gBIFLAAQA2AEABA+IBfQqgAgtDjQgCAOAUAAIA3AAQAVAAgFgRIgckuIgiAAg");
	this.shape_4.setTransform(106.3,59.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,47.4,0,-47.4).s().p("ADSI4IAAlIQgiAAgEAhIhCDlQgLAzgsAMIAAADIhXAAQg6AAgLhCIhBjlQgFghgiAAIAAFIIj1AAIAAxuIDSAAQBJgBATA+ICYMWICYsWQAUg+BIABIDTAAIAARug");
	this.shape_5.setTransform(189.5,59.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,30.4,0,-30.4).s().p("AlFI4IAAhiIFqAAQAtABAAgrIAAg4QgBghgtAAIkaAAQhPAAAAhIIAArtQAAhUBdAAIHVAAQBZAAAABUIAAJvIj0AAIAAiRQAAgmgkAAIhSAAQgsAAAAAmIAADMQAAAqAsAAIEbAAQBPAAAABOIAACwQAABIhVAAg");
	this.shape_6.setTransform(340.9,59.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,38.4,0,-38.4).s().p("ABRI4IAAjlIihAAIAADlIj1AAIAAxuID1AAIAAMoIChAAIAAsoID1AAIAARug");
	this.shape_7.setTransform(411.2,59.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,50.4,0,-50.4).s().p("AjoI4QhdAAAAhWIAAvEQAAhUBdAAIHVAAQBZAAAABUIAAPJQAABQhVABgAhQgDIAAGuQAAArAsAAIBSAAQAkAAAAgnIAAmyQAAgngkAAIhSAAQgsAAAAAng");
	this.shape_8.setTransform(481.4,59.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],0,55.4,0,-55.4).s().p("ABlI4QhGglgfhDQgVBChNAmIjwAAQh0itAAkIIAAq5IDiAAIAAKDQACE6BTBPQBPhNAAk8IAAqDIB7AAIAAKCQAAFCBXBIQBThIAAlBIAAqDIDiAAIAAK5QAAEIhzCtg");
	this.shape_9.setTransform(565.1,59.7);

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("EAp6AI3QhGgkghhDQgVBChOAlIjvAAQh0isAAkHIAAq7IDiAAIAAKFQACE5BSBOQBPhMAAk7IAAqFIB+AAIAAKDQAAFCBXBHQBThHAAlAIAAqFIDhAAIAAK7QABEHh0CsgAXlI3QhcAAgBhUIAAvEQABhWBcAAIHYAAQBZAAAABWIAAPIQAABQhWAAgAZ9gDIAAGuQAAArAsABIBUAAQAkAAAAgoIAAmyQAAgngkAAIhUAAQgsAAAAAngARiI3IAAjkIijAAIAADkIj1AAIAAxuID1AAIAAMpICjAAIAAspID1AAIAARugAALI3IAAhgIFsAAQAtAAAAgqIAAg4QAAgiguAAIkbAAQhQAAAAhIIAArsQAAhWBdAAIHYAAQBZAAAABWIAAJuIj1AAIAAiRQAAgmgkAAIhUAAQgsAAAAAmIAADNQABApArAAIEeAAQBPAAAABPIAACvQgBBHhVAAgApUI3QhdAAAAhMIAAvMQAAhWBdAAIIqAAIAAINIlmAAQgsAAAAAgIAADZQAAAjAlAAIFtAAIAABhIltAAQglAAAAAtIAAAvQAAAoAsAAIFmAAIAABggAvEI3IAAlHQgiAAgEAiIhBDkQgMAzgrALIAAADIhaAAQg5AAgMhBIhBjkQgFgighAAIAAFHIj2AAIAAxuIDTAAQBJABASA9ICZMWICZsWQAUg9BIgBIDTAAIAARugEguJAI3QhSAAAAhMIAAvQQAAhSBWAAIHkAAQBTAAABBQIAAJ1Ij1AAIAAiOQAAgsgpAAIhSAAQgoABAAAqIAAGoQAAAwA1AAIBuAAIAAhTQAAgygnAAIgoAAIAAhhIEXAAQAsAAABAvIAAEXgA+EI1IgajmIhyAAIgXDmIjwAAIBiwnQAHhDA3gCIFNAAQA1AFACA/IBeQogEggFADhQgBAPATAAIA6AAQAVAAgFgRIgdkuIgkAAg");
	this.shape_10.setTransform(310.1,62.7);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.5,2.9,610.2,146.3);


(lib.blackbox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgoBAS3QhtAAgBhuMAAAgiRQABhuBtAAMBQDAAAQBuAAAABuMAAAAiRQAABuhuAAg");
	this.shape.setTransform(267.2,120.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,534.4,241.6);


(lib.bgPattern = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bgtexture1, null, new cjs.Matrix2D(1.333,0,0,1,-15.3,-270)).s().p("EhKxAqMQgNgBgBgJMAAAhUDQAAgKAOAAMCVjAAAIAGABQAHACABAHMAAABUDQAAAKgOAAg");
	this.shape.setTransform(480,270);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.gobtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Play The Game", "22px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.setTransform(83,7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C489").s("#333333").ss(1,1,1).rr(-84.7,-19.9,169.4,39.8,12);
	this.shape.setTransform(84.7,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7BF").s("#333333").ss(1,1,1).rr(-84.7,-19.9,169.4,39.8,12);
	this.shape_1.setTransform(84.7,19.9);
this.shape_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C9C6B").s("#333333").ss(1,1,1).rr(-84.7,-19.9,169.4,39.8,12);
	this.shape_2.setTransform(84.7,19.9);
this.shape_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,171.4,41.8);


(lib.char4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuORjIAQhzIAWhIIAPg7QBAkMAdiNQBCkPAeiHQAVhmAQgdQANgeBYgoQBngtDNhKIA4g4IAAAIIADgFQgQgrgDgYQglgagQgTQgbgdALifIAAg+QAthYglgfQgFghACgPQADgLAdglQBTiIAigSQgggbgFgIQB9gtAWAAQA4ADBVAdQBtAiBIBoQA6BSgFBAQgGAlgqB4QgYBSggBDQgDAKgYAGQgFAqgaA2QAiAHAdAxQAjA3AbAQQAdAQBKAdQEqCFAQAOQAoAfAFAGQAYAgAKBYQALBgAAAyQADAYgGAzQAGAiAYBFQAFBVADC6QAFBIANCaIgVBwQgIAigVBEg");
	this.shape.setTransform(91.2,112.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182.4,224.7);


(lib.char3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnlS5QAQhJABgvQhDAIhRg5QgFAMgXAMQgWANgKgKQAMgjgTgPQgBgUAFgRIiciQQgbgZhNhXQhGhShKhlQgthLADgZQACgMA+hVQCrjuAmgjQCaikBShQQA0hBAbgUQCBgbAogdQghgmgJgbQAWhtgKgoIAAgDQgDgjAAgTIgHAAQAFgKAAgDQgFANgCgKQgGAWAMAdQgDgFgDgCQgKgqAKgdQhLhQAZiuQAAAIADgFIACgIQAWhUAPgXQAmgbACgPQAMAAADADQAohIAbgUQA+gSAbgRQBDgvAKACQgHAFAFAAQAZgHBKgFQgFAAADgCIACAAQAFAEAkAFQAEAFAjANQAeARBoBXQANAKAgAgQACAAADgHIAoA2QAgAtAHAFQgMACAZAkQACATgUAhQAAAWAeAoQAIAggXAvQgKBLAXA+QABAJAQAJQgHgCgFABQAdBLBXgrQgCAUgbASQAsgXglAZQAAARgMAIQACAFAFAAIAPgFQACAKgOAHQAHAAACgFQADARgogCQAFAbArANQgjAZAKAUIghgIQAKAggZAyQAeAWBGAeIA7AUIAtAZQAUAPAoA8QAWAWAvAqIA3BOQAlA0BfBXQATAWBhCEIA5BPIA1BVQARAxhLBXQhIBVh3CXQhFBDidCHQhSBChDgHQAIATALA4gAIAEGIghBIIAABDQgKB8hKD2QgFBQAFAPQAHARAyAWQBFAoAVgHQATgFBNhNQBIhQANgRQAlhDAggqQBGhVgFggQAAgFhVhLIhNhPQhjhkgvhWgAoXNzQANAMA+gJQAegIA7glQgxiBgUhGQgjhegPgyQgbhZAPhQQAKgUAAgMQgIgWgCgNQAAgygFgYQAAgKgUg5QhDB+jTC2IgtAlQgDAUA6BXQBlCjBuBmQAMgCASgKQAiAFgPA0g");
	this.shape.setTransform(112.7,121);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,225.3,242);


(lib.char2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqgSaIgFgZIgUgpQAAgugFgcQgih4AAgzQgCguANhZQAKhogKjUQAFhkAAguQAAhoANhKQAKhHAHgbQANgjA4g9IBPhXQAIgKAKgXQASgVA9gSQAphMAAgkQADgNgSgzQg2hogIhNQgUAAgmhKQgVgZgCgNQAAgFAPgxQANgKAXANQgNiUAFgUQANhFAwgnQBahRAFgIQAcgFAmgaQAXAIAKgFQAKAPAZABQgiAAAeAKQBAASBbBJQBKBsgtCoIAogFQAlBXhiBRIAABUQAmApBIBUQANADAQgFQAwAhCCAmQCAAmArAiQAAgGgFgHQCFBMAzCzQAUBGAwCbQAXBpASCTQAaCxAFBeQACAwg/EMQgIAfgIA6QgHARgWAig");
	this.shape.setTransform(73.8,117.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147.5,235.6);


(lib.char1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoMRzIABgHIgFgiQAAgLANhPIh5gHIhSAAQgvgIgThfIgVhSQgDgSAGhvQAAggAakPQglgNgDgQIAQgqQAthnAFgdQAOhSAiiCQANg3AFgLIAggXQA9gtAqgTQgYgXAaAIQgNgGAAgIQANgCAAgDQA1AgAwgwQAcgfAGhSQACgVgHh3QAAhEAHhFQAdk/B0huQBlhdBmAIQATADAfANQARADAlACQAaALA1BCQAyBKADACQAdA3AqGBQANCuAaAoQAqA6BPgdQATgFAagYQAAANgQAQIAOAAQAAANgbAFIA4ANQASAGAqAIQAIAFALAVIAaAaQAIAIAoBKIAnBaQBHCZAQATQAYASAAALQAAAVglAlQgDAIALAsIAdCkQAlDTAAAIIgNCDQgGA1gIASQgPAgg9AIQhMAQgGAAQhHANgIAGQANAnALBPQADAYAOAmgAojJoQgaBpALAbQAiAKBHANIgQglIgKgsQgVg4ACgKQAVgbAAgNQg6gYALglQgLAbgIBCgAH6K8QAXgDAlgPQAIiCg6hMQgKA6AACmg");
	this.shape.setTransform(81.7,113.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163.5,228);


(lib.bgHolder = function() {
	this.initialize();

	// IMAGE HOLDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhLCAqHMAAAhUNMCWFAAAMAAABUNg");
	this.shape.setTransform(480,270);// center point of 960,540

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.bgColorizer = function() {
	this.initialize();

	// solid shape to tint background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhLCAqHMAAAhUNMCWFAAAMAAABUNg");
	//this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhLCAqHMAAAhUNMCWFAAAMAAABUNg");
	this.shape.setTransform(480,270);// alpha

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.continueShapeBlack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1.5,2,0,3).p("AKUCWI0nAAIAAkrIUnAAg");
	this.shape.setTransform(66,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#484848","#656565","#3F3F3F","#212121","#000000","#2A2A2A"],[0,0.051,0.231,0.431,0.698,1],0,-17.6,0,17.5).s().p("AqTCVIAAkqIUnAAIAAEqg");
	this.shape_1.setTransform(66,15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,134,32);


(lib.wrongBox = function() {
	this.initialize();

	// Layer 1
	this.xMark = new lib.wrongBox_x();
	this.xMark.setTransform(12.4,-8,1,1,0,0,0,12.8,-2.5);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Ahfh7IgDAAQgZAAgBATIAADSQABASAaABIDBAAQAdAAAAgUIAAjRQAAgUgdABIiwAA");
	this.shape.setTransform(12.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#1B31F5","#000000"],[0.012,1],0.2,-0.6,0,0.2,-0.6,21.5).s().p("AhfB9QgbgBgBgSIAAjTQABgSAagBIDWAAQAGABAAATIAADRQgBAUgFAAg");
	this.shape_1.setTransform(12.4,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#1B31F5","#000000"],[0.012,1],11.2,-0.6,0,11.2,-0.6,21.5).s().p("AgGB9QgGAAAAgTQAAASAZABgAgGh7IASAAQgYAAAAATQAAgUAGABg");
	this.shape_2.setTransform(12.5,12.5,1,1,0,0,0,11.1,0);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.xMark);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-5.5,28,35.1);


(lib.introScreen = function() {
	this.initialize();

	// Layer 2
	this.introbtn = new lib.gobtn();
	this.introbtn.setTransform(-5.9,162.3,1,1,0,0,0,84.7,19.9);
	new cjs.ButtonHelper(this.introbtn, 0, 1, 2, false, new lib.gobtn(), 3);

	this.introtxt = new cjs.Text("Introduction text", "22px 'Arial'", "#333333");
	this.introtxt.name = "introtxt";
	this.introtxt.textAlign = "center";
	this.introtxt.lineHeight = 24;
	this.introtxt.lineWidth = 536;
	this.introtxt.setTransform(5,-170);

	// introPanel
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA8D30","#DB9F08","#BA8D30","#FCF8DF"],[0,0.169,0.349,1],-203.3,0,203.4,0).s("#333333").ss(1,1,1).rr(-203.4,-323,406.8,646,22);
	this.shape.setTransform(5,-9.9,1,1,-90);
	this.shape.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);
	
	this.addChild(this.shape,this.shape,this.introtxt,this.introbtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-328,-204.9,656.2,409.4);


(lib.stand = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.logo();
	this.instance.setTransform(31,92.7,0.232,0.232,-0.3);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,5);

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgHAAIAPAAIAAAAg");
	this.shape.setTransform(102.5,62.4);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AJZicQAAgegdABIx3AAQgegBABAeIAAE5QgBAeAeAAIR3AAQAdAAAAgeg");
	this.shape_1.setTransform(102.5,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#1B31F5","#000000"],[0.012,1],0.6,-0.9,0,0.6,-0.9,32.2).s().p("Ao7C7QgeAAABgeIAAk5QgBgeAeABIR3AAQAdgBAAAeIAAE5QAAAegdAAg");
	this.shape_2.setTransform(102.5,34.9);

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.694)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.694)"],[0.02,0.439,0.561,1],-90.6,0,90.6,0).s().p("AoLMcImR43Ic5AAImRY3g");
	this.shape_3.setTransform(103.6,82.6);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AIMMcIGR43I85AAIGRY3");
	this.shape_4.setTransform(102.5,82.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.brushed_texture, null, new cjs.Matrix2D(0.411,0,0,0.411,-61.1,-45.8)).s().p("AoLMcImR43Ic5AAImRY3g");
	this.shape_5.setTransform(102.5,82.6);

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AspLSIiz2jIe5AAIizWjg");
	this.shape_6.setTransform(102.5,90);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.6,2,197.9,161.3);


(lib.screenBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var questionText="";
        var answers=[];// 
		var rightAnswer="";
		var wrongAnswer1="";
		var wrongAnswer2="";
		var wrongAnswer3="";
		var myValue=0;
		var answered = false;
		var questionNumber = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.scoreBox = new cjs.Text("100", "26px 'Arial'", "#FFFFFF");
	this.scoreBox.name = "scoreBox";
	this.scoreBox.textAlign = "center";
	this.scoreBox.lineHeight = 28;
	this.scoreBox.lineWidth = 61;
	this.scoreBox.setTransform(69.3,46.8,1.66,1.262);
	//this.timeline.addTween(cjs.Tween.get(this.scoreBox).wait(1));

	// Layer 1
	this.scrn = new lib.screen("synched",0);
	this.scrn.setTransform(54.2,52.7,1,1,0,0,0,54.2,52.7);
	//this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.addChild(this.scrn,this.scoreBox);
	
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.7,132);


(lib.person4 = function() {
	this.initialize();

	// Layer 2
	this.highlight = new lib.person4Highlight();
	this.highlight.setTransform(91.2,112.3,1,1,0,0,0,91.2,112.3);
	this.highlight.shadow = new cjs.Shadow("rgba(0,255,0,1)",0,0,5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuORjIAQhzIAWhIIAPg7QBAkMAdiNQBCkPAeiHQAVhmAQgdQANgeBYgoQBngtDNhKIA4g4IAAAIIADgFQgQgrgDgYQglgagQgTQgbgdALifIAAg+QAthYglgfQgFghACgPQADgLAdglQBTiIAigSQgggbgFgIQB9gtAWAAQA4ADBVAdQBtAiBIBoQA6BSgFBAQgGAlgqB4QgYBSggBDQgDAKgYAGQgFAqgaA2QAiAHAdAxQAjA3AbAQQAdAQBKAdQEqCFAQAOQAoAfAFAGQAYAgAKBYQALBgAAAyQADAYgGAzQAGAiAYBFQAFBVADC6QAFBIANCaIgVBwQgIAigVBEg");
	this.shape.setTransform(91.2,112.3);

	this.addChild(this.highlight,this.shape);//swapped: highlight on bottom!
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-3,192,234);


(lib.person3 = function() {
	this.initialize();

	// Layer 2
	this.highlight = new lib.person3Highlight();
	this.highlight.setTransform(82.7,121,1,1,0,0,0,112.7,121);
	this.highlight.shadow = new cjs.Shadow("rgba(0,255,0,1)",0,0,5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnlS5QAQhJACgvQhDAIhSg5QgFAMgWAMQgXANgKgKQANgjgUgPQAAgTAFgSIidiQQgbgZhNhXQhFhShLhlQgthLADgZQACgMA+hVQCsjuAlgjQCaikBShQQA0hBAbgUQCCgbAngdQgggmgKgbQAWhtgKgoIAAgDQgCgjAAgTIgIAAQAGgKAAgDQgFANgDgKQgGAWAMAdIgGgHQgKgqAKgdQhKhQAYiuQAAAIADgFIACgIQAXhUAPgXQAlgbACgPQANAAACADQAohIAbgUQA+gRAcgSQBDgvAKACQgIAFAFAAQAZgHBLgFQgFAAACgCIADAAQAFAEAjAFQAFAFAjANQAdARBpBXQAMAKAgAgQADAAACgHIAoA2QAgAtAIAFQgNADAZAjQADATgUAhQAAAWAdAoQAIAggWAvQgKBLAWA+QACAJAPAJQgHgCgFABQAeBLBXgrQgDAUgbASQAtgXgmAZQABARgNAIQADAFAEAAIAPgFQADAKgPAHQAHAAADgFQACASgngDQAFAbAqANQgjAZAKAUIgggIQAKAhgZAxQAeAWBFAeIA8AUIAsAZQAUAPAoA8QAWAWAwAqIA2BOQAlA0BfBXQAUAWBgCEIA6BPIA0BVQARAxhKBXQhIBVh3CXQhGBDicCHQhSBDhEgIQAJAUAKA3gAIAEGQgKAZgXAvIAABDQgJB9hLD1QgFBQAFAPQAIARAxAWQBGAoAUgHQAUgFBMhNQBIhQANgRQAlhDAhgqQBFhVgFggQAAgFhVhLIhMhPQhkhjgvhXgAoWNzQAMANA+gKQAegIA8glQgyiBgUhGQgjhegPgyQgbhZAPhQQAKgUAAgMQgHgWgDgNQAAgygFgYQAAgKgUg5QhDB+jTC2IgtAlQgCAUA5BXQBmCkBtBlQANgCARgKQAjAFgPA0g");
	this.shape.setTransform(82.6,121);

	this.addChild(this.highlight,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-3,235,251);


(lib.person2 = function() {
	this.initialize();

	// Layer 2
	this.highlight = new lib.person2Highlight();
	this.highlight.setTransform(73.8,117.8,1,1,0,0,0,73.8,117.8);
	this.highlight.shadow = new cjs.Shadow("rgba(0,255,0,1)",0,0,5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqgSaIgFgZIgUgpQAAgugFgcQgih4AAgzQgCguANhZQAKhogKjUQAFhkAAguQAAhoANhKQAKhHAHgbQANgjA4g9IBPhXQAIgKAKgXQASgVA9gSQAphMAAgkQADgNgSgzQg2hogIhNQgUAAgmhKQgVgZgCgNQAAgFAPgxQANgKAXANQgNiUAFgUQANhFAwgnQBahRAFgIQAcgFAmgaQAXAIAKgFQAKAPAZABQgiAAAeAKQBAASBbBJQBKBsgtCoIAogFQAlBXhiBRIAABUQAmApBIBUQANADAQgFQAwAhCCAmQCAAmArAiQAAgGgFgHQCFBMAzCzQAUBGAwCbQAXBpASCTQAaCxAFBeQACAwg/EMQgIAfgIA6QgHARgWAig");
	this.shape.setTransform(73.8,117.8);

	this.addChild(this.highlight,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-3,157,245);


(lib.person1 = function() {
	this.initialize();

	// Layer 2
	this.highlight = new lib.person1Higlight();
	this.highlight.setTransform(81.7,114,1,1,0,0,0,81.7,114);
	this.highlight.shadow = new cjs.Shadow("rgba(0,255,0,1)",0,0,5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoMRzIABgHIgFgiQAAgLANhPIh5gHIhSAAQgvgIgThfIgVhSQgDgSAGhvQAAggAakPQglgNgDgQIAQgqQAthnAFgdQAOhSAiiCQANg3AFgLIAggXQA9gtAqgTQgYgXAaAIQgNgGAAgIQANgCAAgDQA1AgAwgwQAcgfAGhSQACgVgHh3QAAhEAHhFQAdk/B0huQBlhdBmAIQATADAfANQARADAlACQAaALA1BCQAyBKADACQAdA3AqGBQANCuAaAoQAqA6BPgdQATgFAagYQAAANgQAQIAOAAQAAANgbAFIA4ANQASAGAqAIQAIAFALAVIAaAaQAIAIAoBKIAnBaQBHCZAQATQAYASAAALQAAAVglAlQgDAIALAsIAdCkQAlDTAAAIIgNCDQgGA1gIASQgPAgg9AIQhMAQgGAAQhHANgIAGQANAnALBPQADAYAOAmgAojJoQgaBpALAbQAiAKBHANIgQglIgKgsQgVg4ACgKQAVgbAAgNQg6gYALglQgLAbgIBCgAH6K8QAXgDAlgPQAIiCg6hMQgKA6AACmg");
	this.shape.setTransform(81.7,113.9);
	
	this.addChild(this.highlight,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-3,173,237);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// characters
	this.char4 = new lib.char4();
	this.char4.setTransform(89,113.9,1,1,0,0,0,91.2,112.3);
	this.char4.name="char4";
	this.timeline.addTween(cjs.Tween.get(this.char4).wait(1));

	// char3
	this.char3 = new lib.char3();
	this.char3.setTransform(87.9,121,1,1,0,0,0,112.7,121);
	this.char3.name="char3";
	this.timeline.addTween(cjs.Tween.get(this.char3).wait(1));

	// char2
	this.char2 = new lib.char2();
	this.char2.setTransform(73.8,117.8,1,1,0,0,0,73.8,117.8);
	this.char2.name="char2";
	this.timeline.addTween(cjs.Tween.get(this.char2).wait(1));

	// char1
	this.char1 = new lib.char1();
	this.char1.setTransform(81.7,114,1,1,0,0,0,81.7,114);
	this.char1.name="char1";
	this.timeline.addTween(cjs.Tween.get(this.char1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,0,225.3,242);


(lib.lightmeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();//gotoAndStop(0);
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(14).call(this.frame_28).wait(1));

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape.setTransform(139.5,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AggAgQgNgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgOgOgAgSgSIAAAAQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAHgIIABAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_1.setTransform(139.5,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape_2.setTransform(7.5,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AgfAgQgOgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgNgOgAgSgSIgBAAQgHAIAAAKQAAALAIAIQAIAIAKAAQALAAAHgIIABAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_3.setTransform(7.5,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIg");
	this.shape_4.setTransform(18.5,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AgfAgQgOgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgNgOgAgSgSIgBAAQgHAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIIAAAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_5.setTransform(18.5,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIg");
	this.shape_6.setTransform(29.5,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AggAgQgNgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgOgOgAgSgSIAAAAQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIIAAAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_7.setTransform(29.5,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape_8.setTransform(40.5,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AggAgQgNgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgOgOgAgSgSIAAAAQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAHgIIABAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_9.setTransform(40.5,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape_10.setTransform(51.5,7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AgfAgQgOgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgNgOgAgSgSIAAAAQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAHgIIABAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_11.setTransform(51.5,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIg");
	this.shape_12.setTransform(62.5,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AgfAgQgOgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgNgOgAgSgSIgBAAQgHAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIIAAAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_13.setTransform(62.5,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIg");
	this.shape_14.setTransform(73.5,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AgfAgQgOgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgNgOgAgSgSIgBAAQgHAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIIAAAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_15.setTransform(73.5,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIg");
	this.shape_16.setTransform(84.5,7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AggAgQgNgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgOgOgAgSgSIAAAAQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIIAAAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_17.setTransform(84.5,7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape_18.setTransform(95.5,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AggAgQgNgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgOgOgAgSgSIAAAAQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAHgIIABAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_19.setTransform(95.5,7.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape_20.setTransform(106.5,7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AgfAgQgOgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgNgOgAgSgSIgBAAQgHAIAAAKQAAALAIAIQAIAIAKAAQALAAAHgIIABAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_21.setTransform(106.5,7.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIg");
	this.shape_22.setTransform(117.5,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AgfAgQgOgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgNgOgAgSgSIgBAAQgHAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIIAAAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_23.setTransform(117.5,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.333],0.2,-2.2,0,0.2,-2.2,5.8).s().p("AgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIg");
	this.shape_24.setTransform(128.5,7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#333333","#CCCCCC"],[0,1],0,-4.6,0,4.6).s().p("AggAgQgNgNAAgTQAAgSANgNIABgBQANgNASAAQATAAANANQAOAOAAASQAAATgOANIAAAAQgNAOgTAAQgSAAgOgOgAgSgSIAAAAQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIIAAAAQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_25.setTransform(128.5,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(29));

	// color dots
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0000").s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape_26.setTransform(7.5,7.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#432F01").s().p("AJJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgApvATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_27.setTransform(79,7.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("AAjATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_28.setTransform(13,7.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#432F01").s().p("AISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_29.setTransform(84.5,7.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0000").s().p("ABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_30.setTransform(18.5,7.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#432F01").s().p("AHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_31.setTransform(90,7.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0000").s().p("ABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_32.setTransform(29.5,7.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#432F01").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_33.setTransform(73.5,7.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC0000").s().p("ADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_34.setTransform(29.5,7.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#432F01").s().p("AISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_35.setTransform(84.5,7.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0000").s().p("AD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_36.setTransform(35,7.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#432F01").s().p("AHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_37.setTransform(90,7.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0000").s().p("AE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_38.setTransform(40.5,7.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#432F01").s().p("AISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_39.setTransform(84.5,7.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0000").s().p("AFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_40.setTransform(46,7.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#432F01").s().p("AHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_41.setTransform(90,7.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0000").s().p("AFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_42.setTransform(57,7.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#432F01").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_43.setTransform(73.5,7.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0000").s().p("AGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAiAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_44.setTransform(51.5,7.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#432F01").s().p("AISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_45.setTransform(84.5,7.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0000").s().p("AGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_46.setTransform(62.5,7.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#432F01").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_47.setTransform(73.5,7.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0000").s().p("AISATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_48.setTransform(62.5,7.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#432F01").s().p("AHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_49.setTransform(90,7.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AJJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAHbATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgApvATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_50.setTransform(68,7.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#432F01").s().p("AJJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgApvATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_51.setTransform(79,7.8);

	this.instance = new lib.wrongBlinking();
	this.instance.setTransform(73.4,7.8,1,1,0,0,0,68.6,2.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5C0101").s().p("AAAAAQAAgGABgFIAAAYQgBgGAAgHg");
	this.shape_52.setTransform(4.9,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26}]},15).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_52},{t:this.instance}]},1).wait(1));

	// color dots
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#432F01").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_53.setTransform(73.5,7.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#432F01").s().p("AJJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgApvATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_54.setTransform(79,7.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#99FF00").s().p("AgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIg");
	this.shape_55.setTransform(7.5,7.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#432F01").s().p("AISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_56.setTransform(84.5,7.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#99FF00").s().p("AAjATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_57.setTransform(13,7.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#432F01").s().p("AHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_58.setTransform(90,7.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#99FF00").s().p("ABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_59.setTransform(18.5,7.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#432F01").s().p("AJJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgApvATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_60.setTransform(79,7.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#99FF00").s().p("ADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_61.setTransform(29.5,7.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#99FF00").s().p("ADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_62.setTransform(40.5,7.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#432F01").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_63.setTransform(73.5,7.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#99FF00").s().p("AE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_64.setTransform(40.5,7.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#432F01").s().p("AD/ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_65.setTransform(112,7.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#99FF00").s().p("AE2ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAiAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_66.setTransform(51.5,7.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#432F01").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_67.setTransform(73.5,7.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#99FF00").s().p("AGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_68.setTransform(51.5,7.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#432F01").s().p("AJJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgApvATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_69.setTransform(79,7.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#99FF00").s().p("AHbATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAmTATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_70.setTransform(57,7.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#432F01").s().p("AISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_71.setTransform(84.5,7.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#99FF00").s().p("AISATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAGkATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgADIATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAiAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_72.setTransform(62.5,7.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#432F01").s().p("AHbATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_73.setTransform(90,7.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#99FF00").s().p("AJJATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAHbATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAFtATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgACRATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAAjATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAi3ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAklATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgApvATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_74.setTransform(68,7.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#432F01").s().p("AISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAjuATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAo4ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_75.setTransform(84.5,7.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#99FF00").s().p("AKAATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAISATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAE2ATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgABaATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAgSATQgIgIAAgLQAAgKAHgIIABAAQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgKAAgIgIgAjuATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAlcATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAnKATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAqmATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIg");
	this.shape_76.setTransform(73.5,7.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#432F01").s().p("AHbATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAD/ATQgIgIAAgLQAAgKAIgIIAAAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIgBAAQgHAIgLAAQgMAAgIgIgAhJATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIgAoBATQgIgIAAgLQAAgKAHgIIABAAQAIgIAMAAQALAAAIAIQAIAIAAAKQAAALgIAIIAAAAQgIAIgLAAQgMAAgIgIg");
	this.shape_77.setTransform(68,7.8);

	this.instance_1 = new lib.rightBlinking();
	this.instance_1.setTransform(73.6,7.8,1,1,0,0,0,68.8,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(14));

	// bg
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("ALeBEIAAiHQAAgKgKAAI2nAAQgKAAAAAKIAACHQAAAKAKAAIWnAAQAKAAAAgKg");
	this.shape_78.setTransform(73.5,7.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("ArTBOQgKAAAAgKIAAiHQAAgKAKAAIWnAAQAKAAAAAKIAACHQAAAKgKAAg");
	this.shape_79.setTransform(73.5,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78}]}).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,149,17.8);


(lib.answerBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var weight=0;
        //var rightAnswer=false;
		//var tryCount = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// wrongHighlight
	this.wrongHighlight = new lib.wrongHighlight();
	this.wrongHighlight.setTransform(228.8,45.7,1,1,0,0,0,227.8,45.7);
	this.wrongHighlight.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,10);
	this.timeline.addTween(cjs.Tween.get(this.wrongHighlight).wait(1));

	// rightHighlight
	this.rightHighlight = new lib.rightHighlight();
	this.rightHighlight.setTransform(228.8,45.7,1,1,0,0,0,227.8,45.7);
	this.rightHighlight.shadow = new cjs.Shadow("rgba(0,255,0,1)",0,0,10);
	this.timeline.addTween(cjs.Tween.get(this.rightHighlight).wait(1));

	// hitArea
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgjlAE0IAApnMBHKAAAIAAJng");
	this.shape.setTransform(228.8,25,1,0.81);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.answerBox = new cjs.Text("mmmmmmmmm1mmmmmmmmm2", "20px 'Arial'", "#FFFFFF");
	this.answerBox.name = "answerBox";
	this.answerBox.textAlign = "center";
	this.answerBox.lineHeight = 22;
	this.answerBox.lineWidth = 408;
	this.answerBox.setTransform(244.8,0);

	this.labelBox = new cjs.Text("A", "38px 'Arial'", "#FFFFFF");
	this.labelBox.name = "labelBox";
	this.labelBox.textAlign = "center";
	this.labelBox.lineHeight = 40;
	this.labelBox.lineWidth = 44;
	this.labelBox.setTransform(23,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.labelBox},{t:this.answerBox}]}).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,51,204,0.145)").s().p("EgjkAD6IAAnzMBHKAAAIAAHzg");
	this.shape_1.setTransform(228.8,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-6.5,472.1,66);


(lib.playGameBtn_blackGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("PLAY AGAIN", "18px 'Arial'", "#B1BC69");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 122;
	this.text.setTransform(65.8,3.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 1
	this.instance = new lib.continueShapeBlack();
	this.instance.setTransform(102.3,17.5,1.028,1,0,0,0,99.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,137.8,47.8);


(lib.wrongInterface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.playAgainBtn = new lib.playGameBtn_blackGreen();
	this.playAgainBtn.setTransform(162.9,360.5,1.383,1.383);
	new cjs.ButtonHelper(this.playAgainBtn, 0, 1, 2, false, new lib.playGameBtn_blackGreen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainBtn).wait(1));

	// Layer 2
	this.loseText = new cjs.Text("outro text outro text outro text", "26px 'Arial'", "#FFFFFF");
	this.loseText.name = "loseText";
	this.loseText.textAlign = "center";
	this.loseText.lineHeight = 28;
	this.loseText.lineWidth = 400;
	this.loseText.setTransform(254.5,162.4);

	this.text = new cjs.Text("Sorry, You Lose", "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 400;
	this.text.setTransform(254.7,71.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.loseText}]}).wait(1));

	// Layer 1
	this.instance = new lib.screen("synched",0);
	this.instance.setTransform(256.9,224.9,3.407,3.407,0,0,0,75.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,513.4,449.7);


(lib.resultsInterface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.playAgainBtn = new lib.playGameBtn_blackGreen();
	this.playAgainBtn.setTransform(162.9,360.5,1.383,1.383);
	new cjs.ButtonHelper(this.playAgainBtn, 0, 1, 2, false, new lib.playGameBtn_blackGreen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainBtn).wait(1));

	// Layer 2
	this.outroText = new cjs.Text("outro text outro text outro text", "26px 'Arial'", "#FFFFFF");
	this.outroText.name = "outroText";
	this.outroText.textAlign = "center";
	this.outroText.lineHeight = 28;
	this.outroText.lineWidth = 451;
	this.outroText.setTransform(254.5,162.4);

	this.scoreBox = new cjs.Text("3600", "50px 'Arial'", "#FFCC00");
	this.scoreBox.name = "scoreBox";
	this.scoreBox.textAlign = "center";
	this.scoreBox.lineHeight = 52;
	this.scoreBox.lineWidth = 115;
	this.scoreBox.setTransform(254.7,86.4);

	this.text = new cjs.Text("Your Score:", "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 350;
	this.text.setTransform(254.2,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.scoreBox},{t:this.outroText}]}).wait(1));

	// Layer 1
	this.instance = new lib.screen("synched",0);
	this.instance.setTransform(256.9,224.9,3.407,3.407,0,0,0,75.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,513.4,449.7);


(lib.questionInterface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var rightAnswer="here";
	
		var ansLabel=["A","B","C","D"];
		var ansBoxes=[this.answer1Box,this.answer2Box,this.answer3Box,this.answer4Box];
		// setup once
		for(var i=0; i<ansBoxes.length; i+=1)
		{
			ansBoxes[i].on("mouseover", overBox);
			ansBoxes[i].on("mouseout", outBox);
			ansBoxes[i].cursor="pointer";
			ansBoxes[i].labelBox.text=ansLabel[i];
		}
		
		function overBox(e) {
			e.currentTarget.filters = [new cjs.ColorFilter(0,0,0,1, 128,128,128,1)];
		}
		function outBox(e) {
			e.currentTarget.filters=[];
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.answer4Box = new lib.answerBox();
	this.answer4Box.setTransform(257.7,410.5,1,1,0,0,0,228.3,43.5);
this.answer4Box.name="answer4";
	
	this.answer3Box = new lib.answerBox();
	this.answer3Box.setTransform(257.7,360.7,1,1,0,0,0,228.3,43.5);
this.answer3Box.name="answer3";

	this.answer2Box = new lib.answerBox();
	this.answer2Box.setTransform(257.7,310.6,1,1,0,0,0,228.3,43.5);
this.answer2Box.name="answer2";

	this.answer1Box = new lib.answerBox();
	this.answer1Box.setTransform(257.7,260.8,1,1,0,0,0,228.3,43.5);
this.answer1Box.name="answer1";

	this.questionBox = new cjs.Text("mmmmmmmmm1mmmmmmmmm2", "24px 'Arial'", "#FFFFFF");
	this.questionBox.name = "questionBox";
	this.questionBox.textAlign = "center";
	this.questionBox.lineHeight = 26;
	this.questionBox.lineWidth = 453;
	this.questionBox.setTransform(255.7,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.questionBox},{t:this.answer1Box},{t:this.answer2Box},{t:this.answer3Box},{t:this.answer4Box}]}).wait(1));

	// Layer 1 bkgrnd
	this.hilight = new lib.screen("synched",0);
	this.hilight.setTransform(256.9,224.9, 3.407,3.407, 0, 0,0, 75.4,66);
//setTransform ([x=0] [y=0] [scaleX=1] [scaleY=1] [rotation=0] [skewX=0] [skewY=0] [regX=0] [regY=0] ) 
	this.timeline.addTween(cjs.Tween.get(this.hilight).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,513.4,449.7);


// stage content:
(lib.gameshow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
        console.log(gameQuest.length);
		console.log(gameQuest);
        // warn if less than 12 questions
            
		//var introscreen = this.introscreen;
		var personArray = [this.person1, this.person2, this.person3, this.person4];
		var characters = [this.person.char1, this.person.char2, this.person.char3, this.person.char4];
		// setupbackground();
		this.grayer.visible = false;
		this.gameTitle.text = config.quiz_name;
		// if introduction text empty then==undefined
		var txt = config.description;
		console.log('txt: ',txt, 'title:',config.quiz_name);
        var introscreen = this.introscreen;
		if (txt != undefined) {
			introscreen.introtxt.text=txt;
			introscreen.introbtn.on("click",function(){ introscreen.visible=false; });
			
		} else { introscreen.visible=false; }
		
        //http://createjs.com/docs/easeljs/classes/ColorFilter.html
		//<bgColor>0x1CA6AA</bgColor>
		var bgColor = '1CA6AA';//xmlplaylist.getElementsByTagName("bgColor")[0].childNodes[0].nodeValue;
		var rgb=convertHex(bgColor);
		///console.log("bgColor:"+bgColor+" & rgb:"+rgb);	//rgb:28,166,170
		///this.bgColor.filters = [new cjs.ColorFilter(0,0,0,1, 28, 166, 170, 0)];
		///this.bgPattern.visible=false;
		this.bgColor.filters = [new cjs.ColorFilter(0,0,0,1, rgb[0],rgb[1],rgb[2],0)];
		this.bgColor.cache(-2,-2,964,544);
		
		var bgImage;// = xmlplaylist.getElementsByTagName("bgImagePath")[0].childNodes[0];
		///console.log("bgImage:"+bgImage);
		if(bgImage != undefined)
		{
			// load the image into bgHolder ... http://createjs.com/docs/easeljs/classes/Bitmap.html
			var imgPath = '';//xmlplaylist.getElementsByTagName("bgImagePath")[0].childNodes[0].nodeValue;
			var bitmap = new createjs.Bitmap(imgPath);
			this.bgHolder.addChild(bitmap);
			///console.log("logo.y:"+this.logo.y+" & bbox.y:"+this.blackBox.y);//logo.y:181 & bbox.y:466.2
			this.logo.y=45;
			this.blackBox.y=490;
			this.logobar.visible=false;
			
		} else { this.bgHolder.visible = false; }
		
					
		//setupPersons();			
		for(var i = 0; i<personArray.length; i+=1)
		{
			characters[i].visible=false;
			///personArray[i].highlight.visible=false;
			personArray[i].on("mouseover", overPerson);
			personArray[i].on("mouseout", offPerson);
			personArray[i].on("click", clickPerson);
		}
		
		function overPerson(e)
		{
			var indx = personArray.indexOf(e.target.parent);
			//console.log('indx:'+indx+' : '+e.target.parent.name);
			///personArray[indx].highlight.visible=true;// cant see it with filter
			personArray[indx].filters = [new cjs.ColorFilter(0,0,0,1, rgb[0],rgb[1],rgb[2],0)];// HILITE
			personArray[indx].cache(-30, 0, 230, 250);
		}
		
		function offPerson(e)
		{
			var indx = personArray.indexOf(e.target.parent);
			///personArray[indx].highlight.visible=false;
			personArray[indx].filters = [new cjs.ColorFilter(0,0,0,1, 255,255,255,0)];// un-HILITE white
			personArray[indx].cache(-30, 0, 230, 250);
		}
		
		function clickPerson(e)
		{
			var indx = personArray.indexOf(e.target.parent);
			///console.log(indx+":"+e.target.parent.name+" = "+characters[indx].name);
			for(var i = 0; i<characters.length; i+=1) { characters[i].visible=false; }
			characters[indx].visible=true;// the whole clip with 1 char showing
			stage.children[0].gotoAndStop(1);//nextFrame();
		}
		
		function convertHex(hex) {
			//hex = hex.replace('#','');
			hex = hex.replace('0x','');
			var clr=[3];
			clr[0] = parseInt(hex.substring(0,2), 16);
			clr[1] = parseInt(hex.substring(2,4), 16);
			clr[2] = parseInt(hex.substring(4,6), 16);
			//result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
			return clr;
		}
	}
	// where the game begins
	this.frame_1 = function() {
		this.stop();
		
		var cat1QArray = [this.box1, this.box2, this.box3];
		var cat2QArray = [this.box4, this.box5, this.box6];
		var cat3QArray = [this.box7, this.box8, this.box9];
		var cat4QArray = [this.box10, this.box11, this.box12];
		var allQuestions = [cat1QArray, cat2QArray, cat3QArray, cat4QArray];
		var catTitles = [this.cat1,this.cat2,this.cat3,this.cat4];
		
		var wrongMarks = [this.wrong1, this.wrong2, this.wrong3];
		var grayer=this.grayer;
		var lightBar=this.lightBar;
		
		var currentQuestionScore = 0;
		var wrongCounter = 0;
		
		var scoreBox=this.score;
		var playerScore = 0;
		var answeredCount = 0;
		var myTarget=null;
		
		var loseInterface=this.loseInterface;
			loseInterface.loseText.text = "Sorry, you've answered wrong too many times. Please try again.";
			loseInterface.y=-230;
			loseInterface.playAgainBtn.on("click",playAgain);
		var resultsInterface=this.resultsInterface;
			resultsInterface.outroText.text = 'Thank you for playing the game!';
			resultsInterface.y=-230;
			resultsInterface.playAgainBtn.on("click",playAgain);
		var questionInterface=this.questionInterface;
			questionInterface.y=-230;
		
		var ansBoxes = [questionInterface.answer1Box,questionInterface.answer2Box,questionInterface.answer3Box,questionInterface.answer4Box];
		for(var b=0; b<ansBoxes.length; b+=1) {
			ansBoxes[b].on("click",answerClicked);
		}
		//var rightSound = "media/1010/mod1/dynamic/audio/glass.mp3";
		//var wrongSound = "media/1010/mod1/dynamic/audio/hockeyBuzzer.mp3";
		//var correctSound = new Glass();
		//var errorSound = new hockeyBuzzer();
		var questions = [];
		var questArray = [];
		var larr=[];
		
		scoreBox.text = playerScore;//reset score on player Stand
		
		analizeXML();//setupCategories();//setupScreens();// COMBINED
	
		function analizeXML()
		{
			removeWrongMarks();
			//var tempNum = xmlplaylist.getElementsByTagName("category")[0].childNodes[0].length;
			///console.log("there are", tempNum, "categories");// 4 categories with 3 questions each
			//shuffle the 3 questions then shuffle the 4 categories
            //console.log('gameQuest:',gameQuest);
			questions = [];
			for (var i=0; i<4; i+=1)
			{
				//var tmplist = xmlplaylist.getElementsByTagName("category")[i];
				var catname = 'Category '+(i+1);//tmplist.getElementsByTagName("categoryName")[0].childNodes[0].nodeValue;
				//var tmpquest = tmplist.getElementsByTagName("question");
				///console.log(catname+" has ", tmpquest.length, "questions");
				///console.log("num:"+tmplist.getAttribute("num"));//<category num="1"> <categoryName>JAA</categoryName>
				///console.log(tmplist);
				///console.log("Qnum:"+tmpquest[0].getAttribute("num"));
				///console.log(tmpquest[0]);// before shuffle
				questArray = [];// reset
				questArray.push(catname);
				var qlist=[];//reset and add 3 random questions
				for(var q=0; q<3; q+=1)
				{
					var index = Math.floor((Math.random() * gameQuest.length) + 1) -1;
                    var nuq = gameQuest.splice(index,1);// some shuffling
                    console.log('nuq:', index, nuq);
                    qlist.push(nuq[0]);
				}
				//qlist=shuffleArray(qlist);// more
				///console.log(qlist[0]);// after shuffle
				questArray.push(qlist);// add them to questArray
				questions.push(questArray);// 4 groups
			}
			//questions=shuffleArray(questions);
			console.log('questions:',questions);
			// use array of arrays to place data in box instances
			for(i=0; i<questions.length; i+=1)
			{
				var bxy = 8;// place category names
				if(questions[i][0].length<13) { bxy=16; }
				catTitles[i].catNameBox.y=bxy;
				catTitles[i].catNameBox.text=questions[i][0];
				
				//lib.screenBtn instances
				var values=["100","300","500"];
				for(var j=0; j<3; j+=1)
				{
					//var value = values[j];
					//console.log(allQuestions[i][j].id);// ok
					allQuestions[i][j].scoreBox.text=values[j];// can set variables but cant call setup function
					allQuestions[i][j].questionText = questions[i][1][j].text;
                    allQuestions[i][j].answers = questions[i][1][j].answers;
                    for (var a=0; a<questions[i][1][j].answers.length; a+=1) {
                        if (questions[i][1][j].answers[a].weight > 0) {
                            allQuestions[i][j].rightAnswer = questions[i][1][j].answers[a].text;
                        }
                    }
                    //allQuestions[i][j].rightAnswer = questions[i][1][j].answers[a].text;
					//allQuestions[i][j].wrongAnswer1 = questions[i][1][j].answers[1].text;
					//allQuestions[i][j].wrongAnswer2 = questions[i][1][j].answers[2].text;
					//allQuestions[i][j].wrongAnswer3 = questions[i][1][j].answers[3].text;
					//allQuestions[i][j].wrongAnswer3.answered=false;
					//allQuestions[i][j].wrongAnswer3.questionNumber=0;// ??? useage ???
					//console.log(allQuestions[i][j]);
					//allQuestions[i][j].setup(value, questxt, right, wrong1, wrong2, wrong3);
				}
			}
			addBoxListeners();// click triggers questionInterface animation 
		}/* end analize */
		
		function addBoxListeners()
		{
			for(var i=0; i<questions.length; i+=1)
			{
				for(var j=0; j<3; j+=1)
				{
					allQuestions[i][j].cursor="pointer";
					var listener = allQuestions[i][j].on("click", function(e){
						///console.log(this);//lib.screenBtn // different ids
						///console.log(e.currentTarget);
						clickQuestion(e);//this
					});
					larr.push(listener);
				}
			}
			///console.log("add:"+larr.length);
			grayer.visible = false;//console.log(larr.length);
		}
		function removeBoxListeners()
		{
			var count=0;
			for(var i=0; i<questions.length; i+=1)
			{
				for(var j=0; j<3; j+=1)
				{
					allQuestions[i][j].cursor="";
					allQuestions[i][j].off("click",larr[count]);//ok
					count+=1;
				}
			}
			larr=[];// reset
			///console.log("remove:"+larr.length);
		}
		function clickQuestion(e)
		{
			//trace(e.currentTarget.name, "clicked");
			if(e.currentTarget.answered) { return; }
			questionInterface.questionBox.text = e.currentTarget.questionText;
			questionInterface.rightAnswer = e.currentTarget.rightAnswer;
	///		console.log("rightAnswer:"+e.currentTarget.rightAnswer);
			///console.log(questionInterface.id);
			// get Q/answers and put into question interface
			// shuffle copy of ansBoxes & answers
			var answers = JSON.parse(e.currentTarget.answers);//[e.currentTarget.rightAnswer, e.currentTarget.wrongAnswer1, e.currentTarget.wrongAnswer2, e.currentTarget.wrongAnswer3];
			var ansboxs=[];
			for(var i=0; i<ansBoxes.length; i+=1)
			{
				ansboxs.push(ansBoxes[i]);
			}
			//ansboxs = shuffleArray(ansboxs);
			//answers = shuffleArray(answers);
			///answers = shuffleArray(answers);//mix it up again ?
			console.log('answers:',answers);
            console.log('ansboxs:',ansboxs.length, ansboxs);
            console.log('ansBoxes:',ansBoxes.length,ansBoxes);
			// place into questionInterface
			for(i=0; i<ansBoxes.length; i+=1)
			{
				ansboxs[i].answerBox.y=0;// reset
				if(answers[i].length < 40)
				{
					ansboxs[i].answerBox.y = 12;// center vertical
				}
				ansBoxes[i].answerBox.text = answers[i].text;
                ansBoxes[i].weight = answers[i].weight;
				// clear all highlights from answerBoxes
				ansBoxes[i].rightHighlight.visible=false;
				ansBoxes[i].wrongHighlight.visible=false;
			}
			
			removeBoxListeners();
			grayer.visible = true;// wont stop clicks
			myTarget = e.currentTarget;// to remove click, scoreBox.text if correct?
			//console.log(myTarget);
			
			currentQuestionScore = parseInt(e.currentTarget.scoreBox.text);
			///console.log("question Score:"+currentQuestionScore)
			//http://www.createjs.com/docs/tweenjs/classes/Tween.html
			cjs.Tween.get(questionInterface, { loop: false }).to({ y: 260 }, 1000, cjs.Ease.quartOut);
		}
		
		//questionInterface answers
		function answerClicked(e) {
			///console.log("answerClicked:"+e.currentTarget.name);
			///console.log("parent:"+e.currentTarget.parent); // questionInterface
            console.log("selected:",e.currentTarget.answerBox.text);
            console.log('weight:',e.currentTarget.answerBox.weight);
			///console.log("checking:"+e.currentTarget.parent.rightAnswer+" & "+e.currentTarget.answerBox.text);// OK
			//console.log(this.id+" : "+e.currentTarget.parent.id);//127 : 93<= this one !!!
			
            
			//check text with rightAnswer if wrong show wrongHighlight of ansBox
			if(questionInterface.rightAnswer == e.currentTarget.answerBox.text)
			{
				e.currentTarget.rightHighlight.visible=true;// correct
				// add to score : clear hilights : remove interface
				playerScore += currentQuestionScore;
				scoreBox.text = playerScore;
				
				answeredCount += 1; //12=done
				lightBar.gotoAndPlay(1);// green lights
			//correctSound.play();
				// remove the text and clickability for this box
				///console.log("correctBox"+myTarget);
				myTarget.scoreBox.visible=false;
				myTarget.answered=true;
				backToScreens();
				
			} else {
				if(playerScore > 100){ playerScore -= currentQuestionScore; }
				scoreBox.text = playerScore;
				lightBar.gotoAndPlay(15);// red lights
			//errorSound.play();
				e.currentTarget.wrongHighlight.visible=true;
				wrongMarks[wrongCounter].xMark.visible=true;
				wrongCounter+=1;
				if(wrongCounter >2) {
					//show lose restart game
					cjs.Tween.get(loseInterface, { loop: false }).wait(500).to({ y: 260 }, 1000, cjs.Ease.backOut);
				}
				backToScreens();
			}
		}
		
		function removeWrongMarks() {
			for(var m=0; m<wrongMarks.length; m+=1) { wrongMarks[m].xMark.visible = false; }
			wrongCounter=0;//reset
		}
		
		function shuffleArray(arr)
		{
			var tempArr=[];
			var n=arr.length;// first
			for (var i = 0; i<n-1; i+=1)
			{
				tempArr.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
			}
			tempArr.push(arr[0]);// Push the remaining item onto tempArr 
			return tempArr;
		}
		
		//http://www.createjs.com/docs/tweenjs/classes/Ease.html
		function backToScreens()
		{
			///console.log("backToScreens:"+answeredCount);
			if(answeredCount<12)
			{
				grayer.visible = false;
				//stop lightBar animation after 2 seconds
				cjs.Tween.get(lightBar,{loop:false}).wait(2200).call(stopLightBar);
				cjs.Tween.get(questionInterface, { loop: false }).to({ y: -230 }, 800, cjs.Ease.backIn);
				addBoxListeners();
			}
			if(answeredCount==12)
			{
				//dispatchEvent(new Event("nextSegment", true, false));
				window.parent.postMessage({"score":1},"*");// for viewStudent to mark grade
				resultsInterface.scoreBox.text=playerScore;
				cjs.Tween.get(questionInterface, { loop: false }).to({ y: -230 }, 800, cjs.Ease.backIn);
				cjs.Tween.get(resultsInterface, { loop: false }).to({ y: 260 }, 1000, cjs.Ease.backOut);
			}
		}
		function stopLightBar() { lightBar.gotoAndStop(0); }
		function playAgain(e)
		{
			cjs.Tween.get(loseInterface, { loop: false }).to({ y: -230 }, 800, cjs.Ease.backIn);
			cjs.Tween.get(resultsInterface, { loop: false }).to({ y: -230 }, 800, cjs.Ease.backIn);
			currentQuestionScore = 0;
			playerScore = 0;
			answeredCount = 0;
			scoreBox.text = playerScore;
			removeWrongMarks();
			
			lightBar.gotoAndStop(0);
			grayer.visible = false;
			// loop through allQuestions and turn on scoreBox and mark not answered
			for(var i=0; i<questions.length; i+=1)
			{
				for(var j=0; j<3; j+=1)
				{
					allQuestions[i][j].answered=false;
					allQuestions[i][j].scoreBox.visible=true;
				}
			}
			addBoxListeners();
			//analizeXML();// keep original configuration
			//setupCategories();setupScreens();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

/*	// mask (mask) the canvas crops anything outside of it
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhK/AsEMAAAhYHMCV/AAAMAAABYHg");
	mask.setTransform(480,282);
*/
	// loseBox
	this.loseInterface = new lib.wrongInterface();
	this.loseInterface.setTransform(346.5,-234.9,1,1,0,0,0,256.7,224.8);
	this.loseInterface.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);
	this.loseInterface._off = true;
	//this.loseInterface.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.loseInterface).wait(1).to({_off:false},0).wait(1));

	// resultsBox
	this.resultsInterface = new lib.resultsInterface();
	this.resultsInterface.setTransform(346.5,-234.9,1,1,0,0,0,256.7,224.8);
	this.resultsInterface.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);
	//this.introscreen.mask = this.resultsInterface.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.resultsInterface).wait(1).to({_off:false},0).wait(1));
	///this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.introscreen}]}).to({state:[{t:this.resultsInterface}]},1).wait(1));

	// questionBox
	this.questionInterface = new lib.questionInterface();// frame_1
	//this.questionInterface.setTransform(346.5,-234.9,1,1,0,0,0,256.7,224.8);
	this.questionInterface.setTransform(346,100,1,1,0,0,0,256.7,224.8);
	this.questionInterface.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);
	this.questionInterface._off = true;
    this.questionInterface.name="questionInterface";
	//this.questionInterface.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.questionInterface).wait(1).to({_off:false},0).wait(1));

//frame_0
	this.introscreen = new lib.introScreen();
	this.introscreen.setTransform(464.2,294.6);
	this.timeline.addTween(cjs.Tween.get(this.introscreen).wait(1));
	
	// contents frame_0 text
	this.gameTitle = new cjs.Text("Game Title", "20px 'Arial'", "#FFFFFF");
	this.gameTitle.name = "gameTitle";
	this.gameTitle.textAlign = "center";
	this.gameTitle.lineHeight = 22;
	this.gameTitle.lineWidth = 448;
	this.gameTitle.setTransform(478,316);

	this.text = new cjs.Text("Welcome to the \n\nGameshow Challenge!", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 448;
	this.text.setTransform(475,293);

	this.text_1 = new cjs.Text("Choose your game character to begin.", "14px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 448;
	this.text_1.setTransform(475,379);

	this.person4 = new lib.person4();
	this.person4.setTransform(588.6,417,0.546,0.546);
	this.person4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.person4.name="person4";

	this.person3 = new lib.person3();
	this.person3.setTransform(479.7,407.6,0.546,0.546);
	this.person3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.person3.name="person3";

	this.person2 = new lib.person2();
	this.person2.setTransform(377.1,411,0.546,0.546);
	this.person2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.person2.name="person2";

	this.person1 = new lib.person1();
	this.person1.setTransform(275.9,415.3,0.546,0.546);
	this.person1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.person1.name="person1";

	this.logo = new lib.logo();// Game Show Challenge
	this.logo.setTransform(356,181,1,1,0,0,0,184.7,37.3);

	this.blackBox = new lib.blackbox();
	this.blackBox.setTransform(480,466.2,1,1,0,0,0,267.2,210);
	this.blackBox.alpha = 0.6;
	
	// grayer
	this.grayer = new lib.grayer();
	this.grayer.setTransform(480,282,1,1,0,0,0,480,282);
	//this.grayer.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.grayer).wait(2));

/// not sure what this is
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFCC","rgba(255,237,17,0)"],[0,1],10.7,-93.4,0,10.7,-93.4,55.6).s().p("AABhUIALAAIgXCpg");
	this.shape.setTransform(112.9,218.5);
	
	this.score = new cjs.Text("3400", "20px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 22;
	this.score.lineWidth = 5;
	this.score.setTransform(800,402);
// wrongMarks on stand
	this.wrong3 = new lib.wrongBox();
	this.wrong3.setTransform(837,451.7,1,1,0,0,0,12.5,12.5);

	this.wrong2 = new lib.wrongBox();
	this.wrong2.setTransform(799.5,451.7,1,1,0,0,0,12.5,12.5);

	this.wrong1 = new lib.wrongBox();
	this.wrong1.setTransform(762,451.7,1,1,0,0,0,12.5,12.5);

// lights on stand
	this.lightBar = new lib.lightmeter();
	this.lightBar.setTransform(799.7,378.1,1,1,0,0,0,73.5,7.9);

// player Stand
	this.playerStand = new lib.stand("synched",0);
	this.playerStand.setTransform(934.5,533.8,1,1,0,0,0,237.5,156);
//this.playerStand.visible=false;

//
	this.box12 = new lib.screenBtn();
	this.box12.setTransform(651.5,493.3,1,1,0,0,0,150.7,132);

	this.box11 = new lib.screenBtn();
	this.box11.setTransform(651.5,293.2,1,1,0,0,0,150.7,66);

	this.box10 = new lib.screenBtn();
	this.box10.setTransform(651.5,93.1,1,1,0,0,0,150.7,0);

	this.box9 = new lib.screenBtn();
	this.box9.setTransform(498.5,493.3,1,1,0,0,0,150.7,132);

	this.box6 = new lib.screenBtn();
	this.box6.setTransform(270.2,493.3,1,1,0,0,0,75.4,132);

	this.box3 = new lib.screenBtn();
	this.box3.setTransform(41.8,493.3,1,1,0,0,0,0,132);

	this.box8 = new lib.screenBtn();
	this.box8.setTransform(498.5,293.2,1,1,0,0,0,150.7,66);

	this.box5 = new lib.screenBtn();
	this.box5.setTransform(270.2,293.2,1,1,0,0,0,75.4,66);

	this.box2 = new lib.screenBtn();
	this.box2.setTransform(41.8,293.2,1,1,0,0,0,0,66);

	this.box7 = new lib.screenBtn();
	this.box7.setTransform(498.5,93.1,1,1,0,0,0,150.7,0);

	this.box4 = new lib.screenBtn();
	this.box4.setTransform(270.2,93.1,1,1,0,0,0,75.4,0);

	this.box1 = new lib.screenBtn();
	this.box1.setTransform(41.8,93.1);

//category Names
	this.cat4 = new lib.screencatagories();
	this.cat4.setTransform(563.6,92,1,1,0,0,0,62.8,55);

	this.cat3 = new lib.screencatagories();
	this.cat3.setTransform(410.5,92,1,1,0,0,0,62.8,55);

	this.cat2 = new lib.screencatagories();
	this.cat2.setTransform(257.5,92,1,1,0,0,0,62.8,55);

	this.cat1 = new lib.screencatagories();
	this.cat1.setTransform(104.5,92,1,1,0,0,0,62.8,55);
// game screen for boxes
	this.instance_1 = new lib.screenbg("synched",0);
	this.instance_1.setTransform(346.5,265.2,1.325,1,0,0,0,235.1,235.1);

	//this.gameTitle.mask = this.text.mask = this.text_1.mask = this.person4.mask = this.person3.mask = this.person2.mask = this.person1.mask = this.logo.mask = this.blackBox.mask = this.shape.mask = this.wrong3.mask = this.wrong2.mask = this.wrong1.mask = this.box12.mask = this.box11.mask = this.box10.mask = this.box9.mask = this.box6.mask = this.box3.mask = this.box8.mask = this.box5.mask = this.box2.mask = this.box7.mask = this.box4.mask = this.box1.mask = this.cat4.mask = this.lightBar.mask = this.instance.mask = this.cat3.mask = this.cat2.mask = this.cat1.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.blackBox},{t:this.logo},{t:this.person1},{t:this.person2},{t:this.person3},{t:this.person4},{t:this.text_1},{t:this.text},{t:this.gameTitle}]}).to({state:[{t:this.instance_1},{t:this.cat1},{t:this.cat2},{t:this.cat3},{t:this.cat4},{t:this.box1},{t:this.box4},{t:this.box7},{t:this.box2},{t:this.box5},{t:this.box8},{t:this.box3},{t:this.box6},{t:this.box9},{t:this.box10},{t:this.box11},{t:this.box12},{t:this.playerStand},{t:this.lightBar},{t:this.score},{t:this.wrong1},{t:this.wrong2},{t:this.wrong3}]},1).wait(1));
	
	// playerAvatar
	this.person = new lib.player();// .char 
	this.person.setTransform(795,270,1,1,0,0,0,81.7,114);
	///this.person.mask = mask;// outside of <canvas>
	this.timeline.addTween(cjs.Tween.get(this.person).wait(2));

	// Image holder in front of stars
	this.bgHolder = new lib.bgHolder();// unused if no image in xml 
	this.bgHolder.setTransform(480.3,269.5,1,1,0,0,0,480.3,269.5);
	//this.bgHolder.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.bgHolder).wait(2));// 1 ???

	// Stars above logo get covered if Image
	this.instance_2 = new lib.starlight("synched",0);
	this.instance_2.setTransform(259.5,111.2,0.581,0.581,-150,0,0,43.1,56.1);

	this.instance_3 = new lib.starlight("synched",0);
	this.instance_3.setTransform(239.2,73.3,0.884,0.884,-60,0,0,43,56.2);

	this.instance_4 = new lib.starlight("synched",0);
	this.instance_4.setTransform(381.2,95.2,0.615,0.615,-120,0,0,43.3,56.5);

	this.instance_5 = new lib.starlight("synched",0);
	this.instance_5.setTransform(358.5,73.4,1,1,-45,0,0,43,56.5);

	this.instance_6 = new lib.starlight("synched",0);
	this.instance_6.setTransform(731.2,103.6,0.698,0.757,-60,0,0,43.9,56.7);

	this.instance_7 = new lib.starlight("synched",0);
	this.instance_7.setTransform(738.4,73.4,0.579,0.579,-15,0,0,43,56.5);

	this.instance_8 = new lib.starlight("synched",0);
	this.instance_8.setTransform(611.7,104,0.381,0.381,-60,0,0,43.1,56.5);

	this.instance_9 = new lib.starlight("synched",0);
	this.instance_9.setTransform(619.4,73.4,1,1,0,0,0,43,56.5);

	this.logobar = new lib.logobar("synched",0);
	this.logobar.setTransform(480,251.7,1.333,1,0,0,0,360,50);
	this.logobar.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.logobar.cache(-2,-61,724,198);
	//this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.logobar.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logobar},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},1).wait(1));

// bgColor
	this.bgColor = new lib.bgColorizer();
	this.bgColor.setTransform(480.3,269.5,1,1,0,0,0,480.3,269.5);
	this.bgColor.alpha=0.2;// overlays bgPattern
	//this.bgColor.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.bgColor).wait(2));

// bg pattern
	this.bgPattern = new lib.bgPattern("synched",0);
	this.bgPattern.setTransform(480,282.5,1,1,0,0,0,480,282.5);
	//this.bgPattern.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.bgPattern).wait(2));
	
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,960,556.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;