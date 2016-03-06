document.addEventListener("DOMContentLoaded", function(event){
	var model = {
		catList : ['jon.jpg','bon.jpg','mon.jpg','lon.jpg',
		'hon.jpg', 'koko.jpg', 'toto.jpg', 'jojo.jpg'],
		clickCount : 0
	};
	var controller = {
		incrementer: function(){
			return model.clickCount;	
		},

		showList: function(){
			return model.catList;
		},

		init: function() {
			view.init();
		}
	};
	var view = {
		init: function(){
			controller.showList().forEach(function(note){
				var name = note.slice(0,-4);
				var button = document.createElement('button');
				//var count = controller.incrementer();
				view.view1(name, button);
				view.view2(note, name, button);
			});
		},
		view1: function(name, button){
				var li = document.createElement('li');
				button.innerHTML = name;
				var ul = document.getElementById('lista');
				ul.appendChild(li);
				li.appendChild(button);
		},
		view2: function(note, name, button){
				var nom = document.getElementById('name');
				var cont = document.getElementById('cont');
				var imaga = document.createElement('img');
				imaga.src = note;
				button.onclick = (function(namoCopy, imagaCopy) {
    				return function() {
        				while (cont.firstChild){
    					cont.removeChild(cont.firstChild)};
        		cont.appendChild(imagaCopy);
        		
        		nom.innerHTML = '<h2>' + namoCopy + '</h2>';
       			};
				})(name, imaga);
				imaga.addEventListener('click', (function(numCopy) {
				return function() {
        				var number = document.getElementById('clicklar');
        				numCopy = numCopy + 1;
        				number.textContent = numCopy;
    				};
					})(controller.incrementer()));
		},
	};
	controller.init();
});



