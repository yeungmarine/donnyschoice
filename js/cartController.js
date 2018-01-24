var app = angular.module("shoppingCart",[]);
	app.controller("cartCtrl", function($scope){
		$scope.live = [
			{id: 1, name:'Baby Mix Lobster (300g - down)', 		unit:'per kg', price:2500, qty:1, image:'img/products/tigerLobster.jpg'},
			{id: 2, name:'Tiger Lobster (1kg - up)', 			unit:'per kg', price:5800, qty:1, image:'img/products/tigerLobster.jpg'},
			{id: 3, name:'Tiger Lobster (700g - 999g)', 		unit:'per kg', price:4500, qty:1, image:'img/products/tigerLobster.jpg'},
			{id: 4, name:'Tiger Lobster (500g-699g)', 			unit:'per kg', price:4200, qty:1, image:'img/products/tigerLobster.jpg'},
			{id: 5, name:'Tiger Lobster (300g-499g)', 			unit:'per kg', price:3900, qty:1, image:'img/products/tigerLobster.jpg'},
			{id: 6, name:'Slipper Lobster Ordinary', 			unit:'per kg', price:1800, qty:1, image:'img/products/slipperLobsterBlack.jpg'},
			{id: 7, name:'Slipper Lobster Brown', 				unit:'per kg', price:1600, qty:1, image:'img/products/slipperLobsterBrown.jpg'},
			{id: 8, name:'Mud Crab 300g (M3)', 					unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 9, name:'Mud Crab 400g (M4)', 					unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 10,name:'Mud Crab 500g (M5)', 					unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 11,name:'Mud Crab 600g (M6)',					unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 12,name:'Mud Crab 700g (M7)',					unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 13,name:'Mud Crab 800g (M8)',					unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 14,name:'Mud Crab Female 500g (OS5)',			unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 15,name:'Mud Crab Female 600g-up (OS 6 - up)',	unit:'per kg', price:1,    qty:1, image:'img/products/mudCrab.jpg'},
			{id: 16,name:'Mud Crab (Soft Shell) Class A',		unit:'per kg', price:2400, qty:1, image:'img/products/mudCrab.jpg'},
			{id: 17,name:'Live Red Crabs 1kg-up',				unit:'per kg', price:4300, qty:1, image:'img/products/redCrab.jpg'},
			{id: 18,name:'Live Red Crabs 800g - 1 kilo',		unit:'per kg', price:4250, qty:1, image:'img/products/redCrab.jpg'},
			{id: 19,name:'Live Red Crabs 600 - 799g',			unit:'per kg', price:3500, qty:1, image:'img/products/redCrab.jpg'},
			{id: 20,name:'Live Red Crabs 400 - 599g',			unit:'per kg', price:2600, qty:1, image:'img/products/redCrab.jpg'},
			{id: 21,name:'Live Red Crabs 300-399g',				unit:'per kg', price:2100, qty:1, image:'img/products/redCrab.jpg'},
			{id: 22,name:'Pink Grouper',						unit:'per kg', price:4000, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 23,name:'Green Grouper',						unit:'per kg', price:850 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 24,name:'Tiger Grouper',						unit:'per kg', price:1600, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 25,name:'Stone Fish',							unit:'per kg', price:1500, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 26,name:'Panther Live  (800g - 1kg)',			unit:'per kg', price:4500, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 27,name:'Pusik Shell',							unit:'per kg', price:250 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 28,name:'Nylon Shell',							unit:'per kg', price:200 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 29,name:'Live Suahe Big',						unit:'per kg', price:630 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 30,name:'Live Suahe Small',					unit:'per kg', price:600 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 31,name:'Sun and Moon Shell',					unit:'per kg', price:800 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 32,name:'White Shell',							unit:'per kg', price:150 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 33,name:'Black Eel',							unit:'per kg', price:1200, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 34,name:'Yellow Eel',							unit:'per kg', price:400 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 35,name:'Abalone Live',						unit:'per kg', price:1100, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 36,name:'Elephant Shell',						unit:'per kg', price:300 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 37,name:'Hairy Crab 180g/Pc',					unit:'per kg', price:350 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 38,name:'Hairy Crab 150g/Pc',					unit:'per kg', price:300 , qty:1, image:'http://lorempixel.com/600/450/food'}					
		];
				
		$scope.frozen = [
			{id: 39,name:'Sea Mantis Frozen (Cooked)',					unit:'per kg', price:600 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 40,name:'Lobster Whole 400g to 500g',					unit:'per kg', price:2500, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 41,name:'Lapu-Lapu Fillet Black (Skin-on)',			unit:'per kg', price:550 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 42,name:'Lapu-Lapu Fillet Black (Skin-off)',			unit:'per kg', price:600 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 43,name:'Lapu-Lapu Whole (Black) 500 to 600g per pc',	unit:'per kg', price:400 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 44,name:'Lapu-Lapu Head (3-5pcs per kilo)',			unit:'per kg', price:50  , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 45,name:'Bangus Boneless',								unit:'per kg', price:240 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 46,name:'Bangus Whole',								unit:'per kg', price:170 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 47,name:'Fish Lips Shredded',							unit:'per kg', price:750 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 48,name:'Fish Lips Whole',								unit:'per kg', price:700 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 49,name:'Crab Claw XL',								unit:'per kg', price:1600, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 50,name:'Crab Claw L',									unit:'per kg', price:1200, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 51,name:'Crab Claw M',									unit:'per kg', price:1000, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 52,name:'Crab Claw S',									unit:'per kg', price:900 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 53,name:'Crab Meat ',									unit:'per kg', price:900 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 54,name:'Sea Cucumber',								unit:'per kg', price:1600, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 55,name:'Crab Roe',									unit:'per kg', price:3000, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 56,name:'Conch Meat (Yellow Meat)',					unit:'per kg', price:900 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 57,name:'Unagi/Yellow Eel Fillet',						unit:'per kg', price:700 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 58,name:'Pampano',										unit:'per kg', price:650 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 59,name:'Shrimp PUD (16-20)',							unit:'per kg', price:750 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 60,name:'Shrimp PUD IQF (21-25)',						unit:'per kg', price:650 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 61,name:'Shrimp PUD IQF (31-40)',						unit:'per kg', price:500 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 62,name:'Shrimp PUD IQF (41-50)',						unit:'per kg', price:450 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 63,name:'Shrimp PUD (51-60)',							unit:'per kg', price:430 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 64,name:'Shrimp PUD (61-70)',							unit:'per kg', price:400 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 65,name:'Shrimp PUD (71-90)',							unit:'per kg', price:390 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 66,name:'Shrimp PUD (91-120)',							unit:'per kg', price:380 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 67,name:'Shrimp PUD Cooked (16-20)',					unit:'per kg', price:900 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 68,name:'Shrimp PUD Cooked (21-25)',					unit:'per kg', price:780 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 69,name:'Shrimp PUD Cooked (31-40)',					unit:'per kg', price:600 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 70,name:'Shrimp PUD Cooked (41-50)',					unit:'per kg', price:550 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 71,name:'Shrimp PUD Cooked (51-60)',					unit:'per kg', price:530 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 72,name:'Shrimp PUD Cooked (61-70)',					unit:'per kg', price:500 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 73,name:'Shrimp PUD Cooked (71-90)',					unit:'per kg', price:490 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 74,name:'Shrimp PUD Cooked (91-120)',					unit:'per kg', price:480 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 75,name:'Shrimp Cooked Whole',							unit:'per kg', price:700 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 76,name:'Nobashi 13g',									unit:'per kg', price:9.50, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 77,name:'Nobashi 11g',									unit:'per kg', price:7.50, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 78,name:'Slipper Lobster Frozen',						unit:'per kg', price:900 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 79,name:'Phoenix Meat Shell',							unit:'per kg', price:700 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 80,name:'White Shrimp (Fresh) 15g per pc',				unit:'per kg', price:450 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 81,name:'Tuna Loin',									unit:'per kg', price:850 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 82,name:'Curacha',										unit:'per kg', price:490 , qty:1, image:'http://lorempixel.com/600/450/food'}
		];	
		
		$scope.imported = [
			{id: 83, name:'Abalone in  Can - 2 Heads',							unit:'per can',price:2200, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 84, name:'Abalone in  Can - 8 Heads',							unit:'per can',price:2000, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 85, name:'Abalone in  Can - 9 Heads',							unit:'per can',price:2000, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 86, name:'Abalone in Can - 10 Heads',							unit:'per can',price:2000, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 87, name:'Abalone in  Can - 12 Heads',							unit:'per can',price:1900, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 88, name:'Fish Maw Tube',										unit:'per kg', price:15000,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 89, name:'Fish Maw Tube - Class A',							unit:'per kg', price:35000,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 90, name:'Fish Maw - Eel',										unit:'per kg', price:4150, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 91, name:'Sea Cucumber Dried',									unit:'per kg', price:55000,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 92, name:'Dried Scallops',										unit:'per kg', price:9500, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 93, name:'Black Mushroom',										unit:'per kg', price:1300, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 94, name:'Golden Dry Oyster',									unit:'per kg', price:13000,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 95, name:'Coral Clam Meat Shell',								unit:'per kg', price:3500, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 96, name:'Flower Clam Meat Shell',								unit:'per kg', price:5000, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 97, name:'FishBall Premium',									unit:'per kg', price:250 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 98, name:'Fish Cake',											unit:'per kg', price:250 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 99, name:'Fish Tofu',											unit:'per kg', price:460 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 100,name:'Fuzhou Fish Ball',									unit:'per kg', price:450 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 101,name:'Japan Scallops',										unit:'per kg', price:1700, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 102,name:'Small Ngo Hiang',									unit:'per kg', price:450 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 103,name:'Squid Tube',											unit:'per kg', price:350 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 104,name:'Squid Ring',											unit:'per kg', price:370 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 105,name:'Birds Nest Class A (Triangle)',						unit:'per kg', price:60000,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 106,name:'Birds Nest Class B (Shredded)',						unit:'per kg', price:45000,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 107,name:'Pigeon Class AAA (360g to 400g/pc)',					unit:'per pc', price:300 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 108,name:'HK Yello Chicken (1.6 to 1.7 kg/pc)',				unit:'per pc', price:800 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 109,name:'Duck (2.9 to 3.1 kg/pc)',							unit:'per pc', price:1450, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 110,name:'Suckling Pig (2.6 to 2.85 kg/pc)',					unit:'per pc', price:1950, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 111,name:'Dry South African Abalone Class A  (25-30 PCS/kg)',	unit:'per kg', price:18000,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 112,name:'Goose (3.3kg to 3.6kg/ pc)',							unit:'per kg', price:700 , qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 113,name:'White Bit',											unit:'per kg', price:1200, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 114,name:'Jelly Fish Head',									unit:'per kg', price:1100, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 115,name:'Jelly Fish',											unit:'per kg', price:350,  qty:1, image:'http://lorempixel.com/600/450/food'}
		];
				
		$scope.fresh =[
			{id: 116,name:'Alimasag',							unit:'per kg',price:450, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 117,name:'Alumahan',							unit:'per kg',price:270, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 118,name:'Asuhos',								unit:'per kg',price:450, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 119,name:'Bangus Boneless',					unit:'per kg',price:220, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 120,name:'Bangus Jumbo',						unit:'per kg',price:160, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 121,name:'Bangus Medium',						unit:'per kg',price:150, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 122,name:'Bisugo',								unit:'per kg',price:245, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 123,name:'Dalagang Bukid Bilog',				unit:'per kg',price:230, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 124,name:'Espada',								unit:'per kg',price:380, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 125,name:'Galunggong',							unit:'per kg',price:190, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 126,name:'Hasa-Hasa',							unit:'per kg',price:270, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 127,name:'Loro',								unit:'per kg',price:180, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 128,name:'Maya-Maya',							unit:'per kg',price:470, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 129,name:'Pusit Bisaya',						unit:'per kg',price:340, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 130,name:'Pusit Lumot',						unit:'per kg',price:455, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 131,name:'Salay Batang',						unit:'per kg',price:195, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 132,name:'Salay Ginto',						unit:'per kg',price:270, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 133,name:'Suahe',								unit:'per kg',price:450, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 134,name:'Talakitok',							unit:'per kg',price:260, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 135,name:'Tanigue',							unit:'per kg',price:550, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 136,name:'Tilapia Large',						unit:'per kg',price:130, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 137,name:'Tilapia Medium',						unit:'per kg',price:120, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 138,name:'Torcillo',							unit:'per kg',price:169, qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 139,name:'Tiger Prawns 8 to 10 pcs per kilo',	unit:'per kg',price:1300,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 140,name:'Tiger Prawns 11 to 12 pcs per kilo',	unit:'per kg',price:1200,qty:1, image:'http://lorempixel.com/600/450/food'},
			{id: 141,name:'Tiger Prawns 13 to 15 pcs per kilo',	unit:'per kg',price:1100,qty:1, image:'http://lorempixel.com/600/450/food'}
		];
		
		$scope.productInfo = [];
		$scope.productPreview = function (b) {
			$scope.productInfo.push(angular.extend({},b));
		}
		$scope.removeItem1 = function (a){
				$scope.productInfo.splice(a,1);
		}
		
		
		$scope.cartItems = [];
		$scope.addToCart = function (x) {
			var found = false;						
			angular.forEach($scope.cartItems,function(value, key){
				if (x.id == value.id){
					found = true;
					value.qty += x.qty;
					alert("Added another " + x.qty + " kgs. of " + x.name )
				}
			});
				if(found == false){
					$scope.cartItems.push(angular.extend({},x));
				}
				x.qty = 1;
		}
		$scope.Total = function (){
			var total = 0;
			angular.forEach($scope.cartItems,function(value, key){
				total += (value.qty  * value.price);
			});
			return total;
		}
		$scope.removeItem = function (a){
				$scope.cartItems.splice(a,1);
		}
	});
		
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();