export const ang_word = [
    // не правильный глагол
    ["bring", ["принести"], "brought"],
    ["abide", ["обитать", "пребывать"], "abided"],
    ["support", ["поддержка", "сопровождение"], "supported"],
    ["tear", ["рвать", "разрывать"], "tore"],
    ["see", ["смотреть"], "saw"],
    ["come", ["приехать"], "came"],
    ["teach", ["обучать"], "taught"],
    // простые глаголы что делать?
    ["want", ["хотеть"]],
    ["trigger", ["вызвать"], "ed"],
    ["compere", ["сравнивать"], "d"],
    ["include", ["включать"], "d"],
    // местоимение из чего-то, кого-то?
    ["some", ["некоторый"]],
    ["every", ["каждый", "любой", "всякий"]],
    // наречие  «где?», «когда?», «куда?», «откуда?», «почему?», «зачем?», «как?»
    ["later", ["позже"]],
    ["happen", ["случаться"]],
    ["above", ["выше"]],
    // прилагательное «какой?», «какая?», «какое?», «какие?», «чей?»
    ["recent", ["недавний"]],
    ["weekend", ["выходной"]]
    // вопросительная форма 
    ["what", ["что?", "какой?"]]
    ["who", ["кто?", "который?"]]
    ["where", ["где?", "куда?"]]
    ["when", ["когда?"]]
    ["why", ["почему?", "зачем?"]]
    ["how", ["как?"]]
    // дни недели 
    ["monday", ["понедельник"]],
    ["tuesday", ["вторник"]],
    ["wednesday", ["среда"]],
    ["thursday", ["четверг"]],
    ["friday", ["пятница"]],
    ["saturday", ["суббота"]],
    ["sunday", ["воскресенье"]],
    ["week", ["неделя"]]
    // существительные что?
    ["question", ["вопрос"]],
    ["subset", ["подмножество"]],
    ["definition", ["определение"]],
    ["tell", ["рассказ"]],
    ["borderline", ["граница"]],
    ["edge", ["грань", "край"]],
    ["rise", ["рост"]],
    ["rate", ["ставка"]],
    // предлоги отношение по отношению к субъекту)
    ["than", ["чем"]],
    ["over", ["над"]]
    ["ahead", ["впереди"]],
    ["behind", ["позади"]],
    // ["butter", ["масло"]],
    // ["bread", ["хлеб"]],
    // ["", [""], ""],
]

const pars = ` 
arise	arose	arisen	подниматься
awake	awoke	awoken	пробуждать
be	    was	    been	быть
bear	bore	born	рожать, переносить
beat	beat	beaten	бить
become	became	become	становиться
begin	began	begun	начинать
bend	bent	bent	наклонять
bet	    bet	    bet	    заключать пари
bind	bound	bound	связывать
bite	bit	    bitten	кусать
bleed	bled	bled	кровоточить
blow	blew	blown	дуть
break	broke	broken	ломать
breed	bred	bred	разводить животных
bring	brought	brought	приносить
build	built	built	строить
buy	    bought	bought	покупать
catch	caught	caught	ловить
choose	chose	chosen	выбирать
cling	clung	clung	цепляться
come	came	come	приходить
cost	cost	cost	стоить
cut	    cut	    cut	    резать
deal	dealt	dealt	вести дела
dig	    dug	    dug	    копать
do      did	    done	делать
draw	drew	drawn	рисовать, тянуть
drink	drank	drunk	пить
drive	drove	driven	водить автомобиль
eat	    ate	    eaten	кушать
fall	fell	fallen	падать
feed	fed	    fed	    кормить
feel	felt	felt	чувствовать
fight	fought	fought	бороться
find	found	found	находить
flee	fled	fled	сбегать
fly	    flew	flown	летать
forbid	forbade	forbidden	запрещать
forget	forgot	forgotten	забывать
forgive	forgave	forgiven	прощать
freeze	froze	frozen	замораживать
get	    got	    gotten	получать
give	gave	given	давать
go	    went	gone	идти
grow	grew	grown	расти
hang	hung	hung	висеть
have	had	    had	    иметь
hear	heard	heard	слышать
hide	hid	    hidden	прятать
hit	    hit	    hit	    ударять, попадать
hold	held	held	держать
hurt	hurt	hurt	причинять боль
keep	kept	kept	сохранять, соблюдать
know	knew	known	знать
lay	    laid	laid	класть
lead	led	    led	    вести, лидировать
learn	learned	learnt	учиться, узнавать
leave	left	left	покидать, оставлять
lend	lent	lent	давать взаймы
let     let	    let	    позволять
lie	    lay	    lain	лежать
light	lit	    lit	    зажигать, освещать
lose	lost	lost	терять
make	made	made	делать, мастерить
mean	meant	meant	значить
meet	met	    met	    встречать, знакомиться
pay	    paid	paid	платить
put	    put	    put	    класть, ставить
read	read	read	читать
ride	rode	ridden	ездить верхом
ring	rang	rung	звонить
rise	rose	risen	возрастать, подниматься
run	    ran	    run	    бежать
say	    said	said	сказать
see	    saw	    seen	видеть
seek	sought	sought	искать
sell	sold	sold	продавать
send	sent	sent	посылать
set	    set	    set	    устанавливать
shake	shook	shaken	трясти
shine	shone	shone	светить, сиять
shoot	shot	shot	стрелять
show	showed	shown	показывать
shrink	shrank	shrunk	сжиматься
shut	shut	shut	закрывать, затворять
sing	sang	sung	петь
sit	    sat	    sat	    сидеть
sleep	slept	slept	спать
slide	slid	slid	скользить
smell	smelt	smelt	пахнуть, нюхать
speak	spoke	spoken	говорить
spell	spelled	spelt	произносить или писать по буквам
spend	spent	spent	тратить, проводить время
spill	spilled	spilt	разлить
spin	spun	spun	крутить
split	split	split	разделять, раскалывать
spoil	spoiled	spoilt	портить
spread	spread	spread	разворачивать, распространять
stand	stood	stood	стоять
steal	stole	stolen	воровать
sting	stung	stung	жалить
stink	stank	stunk	вонять
strike	struck	struck	бастовать, ударять
swear	swore	sworn	клясться, ругаться
sweep	swept	swept	подметать
swell	swelled	swollen	опухать
swim	swam	swum	плавать
take	took	taken	брать
teach	taught	taught	обучать
tear	tore	torn	рвать
tell	told	told	рассказывать
think	thought	thought	думать
throw   threw	thrown	бросать
understand	understood	understood	понимать
wake	woke	woken	будить
wear	wore	worn	носить
win	    won	    won	    побеждать
wind	wound	wound	обматывать, изгибаться
write	wrote	written	писать
`