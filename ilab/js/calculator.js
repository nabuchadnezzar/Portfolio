var cond1 = [
"Тип устройства",
["iPad","cond55"],
["iPhone","cond2"]
];

var ker, next, versionDevice;

var cond2 = [
"Тип устройства",
["4 / 4S","cond3"],
["5 / 5C / 5S / SE","cond63"],
["6","cond64"],
["6 Plus","cond65"],
["6S","cond66"],
["6S Plus","cond67"]
];

var cond67 = [
"Тип неисправности",
["Разбито стекло", "cond4"],
["Проблемы с дисплеем", "cond9"],
["Не включается/не заряжается смартфон", "cond14"],
["Пролемы со звуком", "cond24"],
["Проблемы с сетью", "cond34"],
["Проблемы с паролем", "cond38"],
["Проблемы с камерой", "cond41"],
["Не работают кнопки", "cond45"],
["Телефон не вибрирует", "cond48"],
["Завис на шнурке - требует подключения к iTunes", "cond50"],
["Деформирован корпус", "cond51"],
["Другое", "cond54"]
];

var cond66 = [
"Тип неисправности",
["Разбито стекло", "cond4"],
["Проблемы с дисплеем", "cond9"],
["Не включается/не заряжается смартфон", "cond14"],
["Пролемы со звуком", "cond24"],
["Проблемы с сетью", "cond34"],
["Проблемы с паролем", "cond38"],
["Проблемы с камерой", "cond41"],
["Не работают кнопки", "cond45"],
["Телефон не вибрирует", "cond48"],
["Завис на шнурке - требует подключения к iTunes", "cond50"],
["Деформирован корпус", "cond51"],
["Другое", "cond54"]
];

var cond65 = [
"Тип неисправности",
["Разбито стекло", "cond4"],
["Проблемы с дисплеем", "cond9"],
["Не включается/не заряжается смартфон", "cond14"],
["Пролемы со звуком", "cond24"],
["Проблемы с сетью", "cond34"],
["Проблемы с паролем", "cond38"],
["Проблемы с камерой", "cond41"],
["Не работают кнопки", "cond45"],
["Телефон не вибрирует", "cond48"],
["Завис на шнурке - требует подключения к iTunes", "cond50"],
["Деформирован корпус", "cond51"],
["Другое", "cond54"]
];

var cond64 = [
"Тип неисправности",
["Разбито стекло", "cond4"],
["Проблемы с дисплеем", "cond9"],
["Не включается/не заряжается смартфон", "cond14"],
["Пролемы со звуком", "cond24"],
["Проблемы с сетью", "cond34"],
["Проблемы с паролем", "cond38"],
["Проблемы с камерой", "cond41"],
["Не работают кнопки", "cond45"],
["Телефон не вибрирует", "cond48"],
["Завис на шнурке - требует подключения к iTunes", "cond50"],
["Деформирован корпус", "cond51"],
["Другое", "cond54"]
];

var cond63 = [
"Тип неисправности",
["Разбито стекло", "cond4"],
["Проблемы с дисплеем", "cond9"],
["Не включается/не заряжается смартфон", "cond14"],
["Пролемы со звуком", "cond24"],
["Проблемы с сетью", "cond34"],
["Проблемы с паролем", "cond38"],
["Проблемы с камерой", "cond41"],
["Не работают кнопки", "cond45"],
["Телефон не вибрирует", "cond48"],
["Завис на шнурке - требует подключения к iTunes", "cond50"],
["Деформирован корпус", "cond51"],
["Другое", "cond54"]
];

var cond3 = [
"Тип неисправности",
["Разбито стекло", "cond4"],
["Проблемы с дисплеем", "cond9"],
["Не включается/не заряжается смартфон", "cond14"],
["Пролемы со звуком", "cond24"],
["Проблемы с сетью", "cond34"],
["Проблемы с паролем", "cond38"],
["Проблемы с камерой", "cond41"],
["Не работают кнопки", "cond45"],
["Телефон не вибрирует", "cond48"],
["Завис на шнурке - требует подключения к iTunes", "cond50"],
["Деформирован корпус", "cond51"],
["Другое", "cond54"]
];

var cond4 = [
"",
["Если у вас оригинальный дисплей, то можно переклеить стекло и оставить оригинальную матрицу", "cond5"],
["Независимо от того, оригинальный у вас дисплей или нет, можно поменять целиком дисплейный модуль на хорошую копию или оригинал", "cond6"]
];

var cond6 = [
"Вам необходимо заменить дисплейный модуль на хорошую копию или оригинал",
["Поменять целиком дисплейный модуль на хорошую копию", "cond7"],
["Поменять целиком дисплейный модуль на оригинал", "cond8"]
];

var cond9 = [
"",
["Проблема с изображением (пятна, полоски, нарушение целостности картинки)", "cond11"],
["Плохо работает сенсор (не реагирует вообще, иногда не ''слушается'')", "cond112"]
];

var cond112 = [
"Обращаем внимание,что оба варианта будут сделаны качественно и не будут отличаться работой.",
["В Вашем устройстве необходимо заменить дисплей. Стоимость замены дисплейного модуля (включая запчасти) на хорошую копию - 2500 руб.", "cond12"],
["В Вашем устройстве необходимо заменить дисплей. Стоимость замены дисплейного модуля (включая запчасти) на оригинал - 3900 руб.", "cond13"]
];

var cond10 = [
"Ваша проблема заключается в неисправности дисплейного модуля, который отвечает за изображение и работу сенсора. Решается это только заменой этого модуля. Мы можем предложить вам поменять его на хорошую копию или же оригинальный дисплей. Обращаем внимание,что оба варианта будут сделаны качественно и не будут отличаться работой.",
["В Вашем устройстве необходимо заменить дисплей. Стоимость замены дисплейного модуля (включая запчасти) на хорошую копию - 2500 руб.", ""],
["В Вашем устройстве необходимо заменить дисплей. Стоимость замены дисплейного модуля (включая запчасти) на оригинал - 3900 руб.", ""]
];

var cond11 = [
"Обращаем внимание,что оба варианта будут сделаны качественно и не будут отличаться работой.",
["В Вашем устройстве необходимо заменить дисплей. Стоимость замены дисплейного модуля (включая запчасти) на хорошую копию - 2500 руб.", "cond12"],
["В Вашем устройстве необходимо заменить дисплей. Стоимость замены дисплейного модуля (включая запчасти) на оригинал - 3900 руб.", "cond13"]
];

var cond14 = [
"",
["Не включается после удара, падения, сильного давления, воды, пара, просто все произошло внезапно или проблема развивалась постепенно, все хуже и хуже.", "cond15"],
["Смартфон стоит на зарядке, показывает что идет заряд, но не набирает проценты заряда", "cond16"],
["Быстро разряжается, внезапно выключается ", "cond20"],
["Разрядился, стоит на зарядке, но не включается", "cond23"],
["Внезапно выключился и ни на что не реагирует", "cond100"],
["Не видит, что подключено зарядное устройство", "cond201"]
];

var cond201 = [
"",
["Возможно, неисправно гнездо зарядки", "cond18"],
["Возможно, неисправен контроллер питания  - такая поломка встречается довольно редко", "cond19"]
];

var cond101 = [
"",
["Возможно, несправен аккумулятор", "cond17"],
["Возможно, неисправно гнездо зарядки", "cond18"],
["Возможно, неисправен контроллер питания", "cond19"]
];

var cond16 = [
"",
["Возможно, несправен аккумулятор", "cond17"],
["Возможно, неисправно гнездо зарядки", "cond18"],
["Возможно, неисправен контроллер питания", "cond19"]
];

var cond20 = [
"",
["Возможно, неисправен аккумулятор", "cond21"],
["Возможно, нужно заменить контроллер питания, но такая поломка встречается довольно редко", "cond22"]
];

var cond23 = [
"",
["Возможно, неисправен аккумулятор  - нужно заменить", "cond21"],
["Возможно, нужен ремонт контроллера питания - такая поломка встречается довольно редко", "cond19"]
];

var cond24 = [
"",
["Вы не слышите собеседника", "cond25"],
["Вас не слышит собеседник", "cond28"],
["Не работают наушники или 1 наушник", "cond30"],
["Не работает звук звонка", "cond31"]
];

var cond25 = [
"",
["Возможно, сломался динамик", "cond26"],
["Возможно, сломался шлейф, который соединяет динамик и материнскую плату", "cond27"]
];

var cond28 = [
"",
["Возможно, сломался микрофон", "cond29"],
["Возможно, сломался аудиокодек - бывает ну ооочень редко :)", "cond129"]
];

var cond31 = [
"",
["Возможно, сломался полифонический динамик", "cond32"],
["Проблемы с нижним шлейфом, который проводит сигнал к динамику", "cond33"]
];

var cond34 = [
"",
["Не находит сеть", "cond135"],
["Не видит сим-карту", "cond136"],
["Не ищет сеть", "cond35"]
];

var cond136 = [
"",
["Возможно, сломалась антенная GSM", "cond36"],
["Возможно, сломался модем", "cond37"]
];

var cond135 = [
"",
["Возможно, сломалась антенная GSM", "cond36"],
["Возможно, сломался модем", "cond37"]
];

var cond35 = [
"",
["Возможно, сломалась антенная GSM", "cond36"],
["Возможно, сломался модем", "cond37"]
];

var cond38 = [
"",
["Забыли пароль разблокировки", "cond39"],
["Забыли пароль icloud", "cond40"]
];

var cond41 = [
"",
["Задняя камера", "cond42"],
["Передняя камера", "cond43"]
];

var cond42 = [
"",
["Появились пятна", "cond44"],
["Не работает вспышка", "cond144"],
["Нет фокусировки", "cond145"]
];

var cond45 = [
"",
["Не работает кнопка ''Домой''", "cond47"],
["Не работает кнопка громкости", "cond146"],
["Не работает кнопка включения", "cond46"]
];

var cond47 = ["",
["Сломан шлейф кнопок", "cond148"],
["Сломана сама кнопка", "cond147"]
]

var cond48 = [
"",
["Возможно, сломан вибромотор", "cond49"],
["Возможно, сломан шлейф, который проводит сигнал к вибромотору", "cond46"]
];

var cond51 = [
"",
["Вмятины в углах", "cond52"],
["Деформирован корпус в какой-либо плоскости", "cond53"]
];

var cond55 = [
"",
["iPad 2/3/4", "cond56"],
["iPad air", "cond156"],
["iPad mini 1/2", "cond157"]
];

var cond157 = [
"",
["Разбито стекло", "cond57"],
["Проблемы с изображением", "cond59"],
["Нарисован шнурок и значок iTunes", "cond60"],
["Проблемы с разъемом зарядки (Вы подсоединяете шнур зардки, а iPad её не распознаёт)", "cond61"],
["Проблемы с аккумулятором (iPad слабо держит заряд, разряжается)", "cond62"],
["Другое", "cond54"]
];

var cond156 = [
"",
["Разбито стекло", "cond57"],
["Проблемы с изображением", "cond59"],
["Нарисован шнурок и значок iTunes", "cond60"],
["Проблемы с разъемом зарядки (Вы подсоединяете шнур зардки, а iPad её не распознаёт)", "cond61"],
["Проблемы с аккумулятором (iPad слабо держит заряд, разряжается)", "cond62"],
["Другое", "cond54"]
];

var cond56 = [
"",
["Разбито стекло", "cond57"],
["Проблемы с изображением", "cond59"],
["Нарисован шнурок и значок iTunes", "cond60"],
["Проблемы с разъемом зарядки (Вы подсоединяете шнур зардки, а iPad её не распознаёт)", "cond61"],
["Проблемы с аккумулятором (iPad слабо держит заряд, разряжается)", "cond62"],
["Другое", "cond54"]
];

var cond57 = [
"",
["Трещина в стекле", "cond58"],
["Плохо работает сенсор", "cond178"]
];


window.onload = function () {
	setContext(cond1);
}

function show(rtl) {
	rtl = rtl.replace("cond","result");
	$('#' + rtl).attr("class", "");
}

function hide(rtl) {
	$('#' + rtl).attr("class", "hide");
}

function whatNext() {
	ker = $("input:radio:checked");
	next = ker[0]['id'];
	$('.test-button').attr("onclick", "setContext(" + next + ")");

	if(next == 'cond3' | next == 'cond157' | next == 'cond156' | next == 'cond56' | next == 'cond63' | next == 'cond64' | next == 'cond65' | next == 'cond66' | next == 'cond67')
	{
		versionDevice = ker[0]['value'];
	}
	if(next == 'cond5')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('1 700 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('2 500 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('3 300 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('4 900 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('5 500 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('6 500 руб.');
		}
	}
	if(next == 'cond7')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('2 500 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('3 900 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('4 900 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('5 500 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('8 500 руб.');
		}
	}
	if(next == 'cond8')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('2 500 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('3 900 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('5 500 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('8 500 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('9 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('10 500 руб.');
		}
	}
	if(next == 'cond12')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 1 900 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 2 500 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 3 900 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 4 900 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('8 500 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('8 500 руб.');
		}
	}
	if(next == 'cond13')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 2 500 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 3 900 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 5 500 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 8 500 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('10 500 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('10 500 руб.');
		}
	}
	if(next == 'cond15' | next == 'cond100')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
	}

	if(next == 'cond17')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 1 200 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('2 000 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}
	if(next == 'cond18')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}
	if(next == 'cond19')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 2 000 - 3 000 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 4 000 - 5 000 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 4 000 - 5 000 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 4 000 - 5 000 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('5 000 - 6 000 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('5 000 - 7 000 руб.');
		}
	}

	if(next == 'cond21')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}
	if(next == 'cond22')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 2 000 - 3 000 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 4 000 - 5 000 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 4 000 - 5 000 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 4 000 - 5 000 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('5 000 - 6 000 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('5 000 - 7 000 руб.');
		}
	}

	if(next == 'cond26')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 990 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 990 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 990 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('6S - 990 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('6S Plus - 2 200 руб.');
		}
	}
	if(next == 'cond27')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}

	if(next == 'cond29' | next == 'cond129')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}

	if(next == 'cond30')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 1 290 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 290 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}

	if(next == 'cond32')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 990 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 990 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 990 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}
	if(next == 'cond33')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}

	if(next == 'cond36')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}
	if(next == 'cond37')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('от 3 000 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('от 5 000 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('от 5 000 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('от 5 000 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('от 5 000 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('от 5 000 руб.');
		}
	}

	if(next == 'cond39')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
	}
	if(next == 'cond40')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
	}

	if(next == 'cond43' | next == 'cond44' | next == 'cond144' | next == 'cond145')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}

	if(next == 'cond46' | next == 'cond146')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 1 290 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}

	if(next == 'cond49')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE -990 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 990 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 990 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}

	if(next == 'cond50')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
	}

	if(next == 'cond52')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
	}
	if(next == 'cond53')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 490 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 900 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 2 990 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 3 500 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('4 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('4 900 руб.');
		}
	}
	if(next == 'cond54')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
	}

	/* ----- iPad ----- */

	if(next == 'cond58')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == 'iPad 2/3/4')
		{
			$('.price').text('iPad 2/3/4 - 3 500 руб.');
		}
		if(versionDevice == 'iPad air')
		{
			$('.price').text('iPad air - 3 900 руб.');
		}
		if(versionDevice == 'iPad mini 1/2')
		{
			$('.price').text('iPad mini 1/2 - 3 900 руб.');
		}
	}

	if(next == 'cond178')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == 'iPad 2/3/4')
		{
			$('.price').text('iPad 2/3/4 - 3 500 руб.');
		}
		if(versionDevice == 'iPad air')
		{
			$('.price').text('iPad air - 3 900 руб.');
		}
		if(versionDevice == 'iPad mini 1/2')
		{
			$('.price').text('iPad mini 1/2 - 3 900 руб.');
		}
	}

	if(next == 'cond59')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == 'iPad 2/3/4')
		{
			$('.price').text('iPad 2/3/4 - 3 500 руб.');
		}
		if(versionDevice == 'iPad air')
		{
			$('.price').text('iPad air - 5 900 руб.');
		}
		if(versionDevice == 'iPad mini 1/2')
		{
			$('.price').text('iPad mini 1/2 - 4 000-6 000 руб.');
		}
	}

	if(next == 'cond60')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
	}

	if(next == 'cond61')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == 'iPad 2/3/4')
		{
			$('.price').text('iPad 2/3/4 - 2 500 руб.');
		}
		if(versionDevice == 'iPad air')
		{
			$('.price').text('iPad air - 3 000 руб.');
		}
		if(versionDevice == 'iPad mini 1/2')
		{
			$('.price').text('iPad mini 1/2 - 3 500 руб.');
		}
	}

	if(next == 'cond62')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == 'iPad 2/3/4')
		{
			$('.price').text('iPad 2/3/4 - 2 500 руб.');
		}
		if(versionDevice == 'iPad air')
		{
			$('.price').text('iPad air - 3 000 руб.');
		}
		if(versionDevice == 'iPad mini 1/2')
		{
			$('.price').text('iPad mini 1/2 - 3 500 руб.');
		}
	}
	if(next == 'cond147')
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 990 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 990 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 990 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}
	if(next == 'cond148') //шлейф кнопок
	{
		$('.test-button').attr("onclick", "show('" + ker[0]['id'] + "'); hide('cond1');");
		if(versionDevice == '4 / 4S')
		{
			$('.price').text('4 / 4S - 990 руб.');
		}
		if(versionDevice == '5 / 5C / 5S / SE')
		{
			$('.price').text('5 / 5C / 5S / SE - 1 300 руб.');
		}
		if(versionDevice == '6')
		{
			$('.price').text('6 - 1 690 руб.');
		}
		if(versionDevice == '6 Plus')
		{
			$('.price').text('6 Plus - 1 690 руб.');
		}
		if(versionDevice == '6S')
		{
			$('.price').text('1 900 руб.');
		}
		if(versionDevice == '6S Plus')
		{
			$('.price').text('2 200 руб.');
		}
	}
}

function setContext(arr) {
	$('.test-head').text(arr[0]);
	$('.maek').text('');
	for (var i = 1; i <= arr.length-1; i++) {
		$('.maek').append('<p class="condi"><input onchange="whatNext()" type="radio" name="s1" value="' + arr[i][0] + '" id="' + arr[i][1] + '"/><label for="' + arr[i][1] + '" class="blue"></label> ' + arr[i][0] + '</p>');
	}
}
