var first = ["Caros colegas,", "Por outro lado,", "Não podemos esquecer que", "Do mesmo modo,", "A prática mostra que", "Nunca é demais insistir que", "A experiência mostra que", "É fundamental ressaltar que", "O incentivo ao avanço tecnológico, assim como", "Assim mesmo,"];

var second = ["a execução deste projecto", "a complexidade dos estudos efectuados", "a actual estrutura de organização", "o novo modelo estrutural aqui preconizado", "o desenvolvimento de formas distintas de atuação", "a constante divulgação das informações", "a consolidação das estruturas", "a análise dos diversos resultados", "o ínicio do programa de formação de atitudes", "a expansão da nossa atividade"];

var third = ["obriga à análise", "cumpre um papel essencial na formulação", "auxilia a preparação e a estruturação", "contribui para a correcta determinação", "assume importantes posições na definição", "facilita a definição", "prejudica a percepção da importância", "oferece uma boa oportunidade de verificação", "acarreta um processo de reformulação", "exige precisão e definição"];

var fourth = ["das nossas opções de desenvolvimento futuro.", "das nossas metas financeiras e administrativas.", "das atitudes e das atribuições dos responsáveis.", "das novas proposições.", "das opções básicas para o sucesso do programa.", "da nossa política de gestão pessoal.", "das condições apropriadas para os projectos.", "dos índices pretendidos.", "das novas formas de acção.", "das modalidades de participação geral"];

//var filtros = "grayscale(100%);", "blur(5px);", "invert(100%)", "hue-rotate(180deg)", "sepia(80%)"

$(document).ready(function() {
	/*
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
    */
    $(document).ready(function() {
    	$('#pagepiling').pagepiling(
    	{
    		anchors: ['imagem', 'info']
    	}

    	);
	});
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	$('#nomeLista').text("Lista " + possible[Math.floor(Math.random() * possible.length)]);
	$('#primeiro').css('background-image', 'url(' + (Math.floor(Math.random() * 8)+1) + '.jpg)');
	$('#primeiro').css('background-repeat', 'no-repeat');
	$('#primeiro').css('background-size', 'cover');
	$('#primeiro').css('box-shadow', 'inset 0 0 0 1000px rgba(' + (Math.floor(Math.random() * 255)+1) + ',' + (Math.floor(Math.random() * 255)+1) +',' + (Math.floor(Math.random() * 255)+1) +',.5)');
    var frase = first[Math.floor(Math.random() * first.length)] + " " + second[Math.floor(Math.random() * second.length)] + " " + third[Math.floor(Math.random() * third.length)] + " " + fourth[Math.floor(Math.random() * fourth.length)];
    $('#tretaLonga').text(frase);
});