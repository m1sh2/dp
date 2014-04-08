var exec = require("child_process").exec;

var querystring = require("querystring");
var fs = require("fs");
// var formidable = require("formidable");

var content = new Array();
content['home'] = '<h2>Добро пожаловать!!!</h2><img src="/images/cross.png" width="100%" />';
content['about'] = "<p>Команда ls для каждого имени каталога распечатывает список входящих в этот каталог файлов; для файлов - повторяется имя файла и выводится дополнительная информация в соответствии с указанными флагами. По умолчанию имена файлов выводятся в алфавитном порядке. Если имена не заданы, выдается содержимое текущего каталога. Если заданы несколько аргументов, то они сортируются по алфавиту, однако сначала всегда идут файлы, а потом каталоги с их содержимым.</p><p>Существует три основных формата выдачи. По умолчанию выдается по одному файлу в строке; флаги -C и -x позволяют выдавать информацию в несколько колонок, а флаг -m задает свободный формат. Для определения формата вывода при указании флагов -C, -x и -m используется переменная окружения COLUMNS, значение которой равно количеству символов в выходной строке. Если эта переменная не установлена, используется база данных terminfo и значение переменной окружения TERM. Если эта информация недоступна, длина выходной строки берется равной 80.</p>";
content['services'] = "<p>Node разработал Райан Дал в 2009 году после двух лет экспериментирования над созданием серверных веб-компонентов. В ходе своих исследований он пришел к выводу, что, вместо традиционной модели параллелизма на основе потоков, следует обратиться к событийно-ориентированным системам. Эта модель была выбрана из-за простоты, низких накладных расходов (по сравнению с идеологией «один поток на каждое соединение») и быстродействия. Целью Node является предложить «простой способ построения масштабируемых сетевых серверов».</p><p>Разработка Node.js спонсируется компанией Joyent.</p>";
content['contacts'] = "<ol><li>CloudIDE c9.io (облачный сервис)</li>"+
	"<li>JetBrains WebStorm или IntelliJ IDEA (коммерческие продукты)</li>"+
	"<li>Microsoft WebMatrix (бесплатный) или Visual Studio (коммерческий продукт)</li>"+
	"<li>Netbeans с Node.js плагином</li>"+
	"<li>Nodeclipse (Nodeclipse-1 Eclipse plugin, Eclipse Node.js IDE известный также как Enide)</li>"+
	"<li>TestCafé</li></ol>";
var menu = new Array();
menu[0] = new Array();
menu[0][0] = 'home';
menu[0][1] = 'Главная';

menu[1] = new Array();
menu[1][0] = 'about';
menu[1][1] = 'О нас';

menu[2] = new Array();
menu[2][0] = 'services';
menu[2][1] = 'Услуги';

menu[3] = new Array();
menu[3][0] = 'contacts';
menu[3][1] = 'Контакты';

var menu_li = '';
var headers = new Array();
menu_li += '<ul class="menu">';
for(var i=0;i<menu.length;i++){
	menu_li += '<li><a href="/page?'+menu[i][0]+'">'+menu[i][1]+'</a></li>';
	headers[menu[i][0]] = menu[i][1];
}
menu_li += '</ul>';

var body1 = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
	'<style>'+
	'html{background:#fff;}'+
	'body{font-family:Verdana;width:400px;margin:50px auto 30px;padding:20px;font-size:14px;background:#eee;border:2px solid #ccc;}'+
	'a{color:#99f;text-decoration:none;border-bottom:1px solid #99f;}'+
	'a:hover{color:#f99;text-decoration:none;border-bottom:0px solid #99f;}'+
	'ul.menu{list-style:none;margin:0;padding:0;}'+
	'ul.menu li{display:inline;margin:0 10px 0 0;}'+
	'</style>'+
	'</head>'+
	'<body>'+
	menu_li;

var body2 = '</body>'+
	'</html>';

function page(response,page) {
	
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	
	// sleep(3000);
	
	if(!page){page = 'home';}
	console.log("===================page");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body1+'<h1>'+headers[page]+'</h1>'+content[page]+''+body2);
	response.end();
}

function images(response){
	console.log("Request handler 'images' was called.");
	fs.readFile("/images/cross.png","binary",function(error,file) {
		if(error){
			response.writeHead(500,{"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		}
		else{
			response.writeHead(200,{"Content-Type": "image/png"});
			response.write(file, "image/png");
			response.end();
		}
	});
}


exports.page = page;
exports.images = images;