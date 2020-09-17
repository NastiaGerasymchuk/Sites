(function(){
    function NewsCity(id,date,title,path,description,status){
        this.id=id;
        this.date=date;
        this.title=title;
        this.path=path;
        this.description=description;
        this.status=status;
        this.dateInfo=function(){
            return this.date;
        }
        this.dateInfoToString=function(){
            let resDate="";
            if(this.date.getDate()<10){
                resDate=`0${this.date.getDate()}.`;
            }
            else{
                resDate=`${this.date.getDate()}.`;
            }
            if(this.date.getMonth()<10){
                resDate+=`0${this.date.getMonth()}.`;
            }
            else{
                resDate+=`${this.date.getMonth()}.`;
            }
            resDate+=`${this.date.getFullYear()}р.`;
            // `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}р.`;
            return resDate;
        }
        this.titleInfo=function(){
            return this.title;
        }
        this.pathInfo=function(){
            return this.path;
        }
        this.descriptionInfo=function(){
            return this.description;
        }
        this.idInfo=function(){
            return this.id;
        }
        this.statusInfo=function(){
            return this.status;
        }
        
    }
    let first=new NewsCity(1,
    new Date(1975,10,4),
    "Чернівецький національний університет імені Юрія Федьковича",
    "images/first.jpg",
    "<p>Чернівецький національний університет імені Юрія Федьковича — державний вищий заклад освіти 4-го рівня акредитації у місті Чернівці.</p>"
    +"<h2>Історія</h2>"
    +"<p>Заснований 4 жовтня 1875 року указом імператора Австро-Угорщини Франца Йосифа на основі теологічного інституту, що існував із 1827 року з німецькою викладовою мовою та з окремими кафедрами української та румунської мов і літератур.</p>"
    +"<p>Мав різні назви: імені Франца Йосифа (Чернівецький університет імені Франца Йосифа) у 1875—1918 pp., Universitatea Regele Carol I din Cernăuţi (1919—1940) і Чернівецький державний університет після 1940 року.</p>"
    +"<p>1989 року Чернівецькому університетові присвоєно ім'я Юрія Федьковича.</p>"
    +"<p>11 вересня 2000 року Указом Президента України Чернівецькому державному університету імені Юрія Федьковича надано статус національного.</p>"
    +"<p>Першим ректором став відомий учений і громадський діяч Костянтин Томащук. Тут викладали і вели дослідницьку роботу вчені європейського та світового рівня: економіст Йозеф Шумпетер, філософ Ґеорґ Еліс Мюллер, юрист Ганс Гросс, історик Раймунд Кайндль, славіст Омелян Калужняцький, україніст Степан Смаль-Стоцький, композитор і письменник Сидір Воробкевич та інші.</p>"
    +"<p>За австрійської влади ЧНУ мав три факультети: православної теології, правничий і філософський. На філософському факультеті кафедрою української мови завідували: К. Ганкевич (1875—1876), І. Онишкевич (1876—1882), С. Смаль-Стоцький (1885—1918), слов'янських мов О. Калужняцький (1875—1898) і Є. Козак (1899—1919); кафедру практичного богословія очолював Д. Єремійчук (1899—1919).</p>"
    +"<p>У цей час в Чернівецькому університеті навчалися, крім буковинців, також багато галичан, зокрема: І. Франко, Лесь Мартович, Д.  Лукіянович; габілітувалися В. Милькович з історії Східної Європи (згодом професор ЧУ, 1895—1919), О. Колесса з української мови.</p>"
    +"<p>Серед ректорів університету були українці: К. Томащук (1875—1876), О. Калужняцький (1889—1890) і Є. Козак (1907—1808).</p>"
    +"<p>1875 року на загальне число 208 студентів українців було 41, у 1914 на 1 198 — 303 (приблизно стільки ж румунів, найбільше було євреїв і німців).</p>"
    +"<p>Після розпаду Австро-Угорської імперії 1918 року і прилучення Буковини до Румунського королівства університет до 1940 р. вважався румунським вищим навчальним закладом. У 1918—1940 pp. університет було румунізовано, скасовано українські кафедри, а українських професорів звільнено. Філософський факультет поділено на два: філософсько-літературний і природознавчий. Довголітнім ректором ЧНУ за румунського часу був І. Ністор. На природознавчому факультеті довгі роки працювали відомі вчені Костянтин Гормузакі та Карл Пенеке.</p>"
    +"<p>1920 року на 1 671 студентів було 239 українців, у 1933 на З 247 студентів було 2117 румунів, 679 євреїв, 199 німців, 155 українців, 57 поляків, 40 інших.</p>"
    +"<p>1940 року після приєднання Буковини до УРСР, університет реорганізовано у державний вищий навчальний заклад з українською мовою навчання та поділено на сім факультетів, а з 1955 на одинадцять: історичний, філософський, іноземних мов, географічний, біологічний, хімічний, фізико-математичний, економічний, технічний і заочний, була 51 кафедра. Теологічний факультет було ліквідовано. Запроваджене заочне й вечірнє навчання та аспірантуру.</p>"
    +"<p>У 1976—1977 pp. було близько 10 000 студентів (у тому числі 38 % заочників) та близько 500 викладачів, у тому числі 26 професорів і докторів наук, близько 290 доцентів і кандидатів наук.</p>",
    0
    ),
    second=new NewsCity(2,
    new Date(1940,9,5),
    "Чернівецький академічний обласний український музично-драматичний театр імені Ольги Кобилянської",
    "images/second.jpg",
    "<p>Чернівецький академічний обласний український музично-драматичний театр імені Ольги Кобилянської — державний заклад культури, діяльність якого спрямована на створення, публічне виконання та показ творів театрального мистецтва. Розміщується у будинку міського театру Чернівців.</p>"
    +"<p>Заснований у 1940 році на базі Харківського державного театру революції як «Чернівецький державний український драматичний театр». З 1954 року — «Чернівецький обласний український музично-драматичний театр імені Ольги Кобилянської». 22 липня 2008 року театр отримав статус «Академічного».</p>"
    +"<h2>Історія</h2>"
    +"<p>Велике театральне мистецтво почало з'являтись у Чернівцях наприкінці XVIII ст., коли частину Буковини було включено до Габсбурзької монархії. Першу театральну постановку чернівчани побачили 1784-го р., коли у місті гастролював італійський театр тіней. Спеціалізованого театрального приміщення у столиці Герцогства Буковина не існувало, тому вистави проводились у пристосованих місцях. 1876-го р. у місті був збудований перший стаціонарний, щоправда дерев'яний, театр, який прослужив за призначенням до 1904 року.</p>"
    +"<p>Урочисте відкриття нового міського театру відбулося 3 жовтня 1905 року постановкою п'єси Франца Шьонтана «Марія Терезія».</p>"
    +"<p>На сцені місцевого театру демонструвалися опери, оперети, драматичні та комедійні вистави, зінгшпілі західноєвропейських класиків Джузеппе Верді, Ріхарда Вагнера, Йоганна-Фрідріха Шиллера тощо, виступали великі майстри оперної та драматичної сцени Європи: Енріко Карузо, Федір Шаляпін, Соломія Крушельницька, Александр Моіссі та багато інших.</p>",
    0),
    third=new NewsCity(3,
    new Date(1847,2,3),
    "Чернівецька ратуша",
    "images/third.jpg",
    "<p>Чернівецька ратуша — адміністративна будівля в історичному центрі Чернівців (Центральна площа), призначена для розміщення органів місцевого самоврядування міста. Пам'ятка архітектури національного значення.</p>"+
    "<p> Чернівецька ратуша — триповерхова будівля з високою баштою та внутрішнім двориком, збудована у стилі пізнього класицизму, що був характерний практично для всіх тогочасних ратуш на території Королівства Галичини та Володимирії. Фасад споруди акцентований центральним ризалітом, увінчаним фризом і прямокутним фронтоном. Його довершує доричний портик з шістьома пілястрами. На фронтоні встановлено рельєфний щит для міського герба. Завершує образ Чернівецької ратуші 50-метрова двоярусна башта, яку увінчує шпиль з мідною кулею та невеликим флагштоком.</p>"+
    "<p>Невід'ємними елементами екстер'єру споруди є два годинники — один показує час на ратушній вежі, а інший (подарунок багаторічного бургомістра Антона Кохановського) встановлено на її фронтоні.</p>"+
    "<p>Будівлю споруджено на фундаменті, вимурованому з каменю, який під вежею сягає понад 6 м глибини.</p>",
    2),
    fouth=new NewsCity(4,
    new Date(1877,9,4),
    "Темпль (Чернівці)",
    "images/fouth.jpg",
    "<p>Темпль — єврейський храм, збудований в Чернівцях в останній чверті 19-го ст. і значно пошкоджений в період Другої світової війни. <p>Історія головного молитовного будинку єврейської чернівецької громади почалася в 1860-ті роки. Для побудови споруди було створено «Чернівецьке єврейське товариство Темплю», статут якого схвалила Буковинська крайова управа 19 грудня 1872 року. Товариство знаходилося в Чернівцях і складалося з засновників, членів і почесних членів. Шляхом підписки, тобто купівлі місця для моління, засновники і члени товариства після повної сплати визначеної суми здобували право власності на місце і право передавати цю власність у спадщину, дарувати і продавати її. Були встановлені ціни від 200 до 1000 флоринів за місце. Кожне місце для моління включало в себе місце для чоловіка в центральному або бічних нефах і, відповідно, жіноче місце на галереї. Сплачені засновниками товариства внески склали фонд для будівництва і облаштування темплю. До цього додавались і пожертви. До складу дирекції будівництва ввійшли відомі єврейські особи."+"<p>Земельну ділянку під забудову в центрі міста подарувала багата землевласниця Амалія Цукер. 8 травня 1873 року відбулося свято закладин наріжного каменя під майбутню споруду. Перший камінь було покладено головним рабином д-р Лазаром Еліасом Ігелем. </p>"+
    "<h2>Історія</h2>"
    +"<p>План споруди розробив найвідоміший львівський архітектор останньої третини 19-го століття професор архітектури, ректор Львівської політехніки, цісарський радник Юліан Октавіан Захаревич (1837—1898). Архітектор намагався створити таку споруду, яка не була б подібна до християнських святинь і тому вибрав мавританський стиль, який, за його словами, був «виразом почуттів і духу Мойсеєвої релігії».</p>"
    +"<p>Будівельними роботами керували чернівецькі архітектори Антон Фіала та Йоганн Грегор, каменярські роботи виконувалися під керівництвом Лауренса Кукурудзи, металеві конструкції виготовили в майстернях ерцгерцога Альбрехта в Устроні в Галичині. Зводили Темпль упродовж 4 років.</p>"
    +"<p>Урочисте відкриття і освячення Темплю відбулося 4 вересня 1877 року (28 елула 5637 року). Це свято стало визначною подією не тільки єврейського населення, а й усього міста. У ньому взяло участь найвищі урядовці та представники всіх релігійних громад краю. Свято закінчилось[1] молитвою за крайового президента Буковини Ієроніма барона фон Алезані та співанням народного гімну. Наступного дня відбулося перше богослужіння. Під час святкових днів і дещо пізніше темпль відвідували містяни, і були в захопленні від його краси та величі.</p>"
    +"<p>Темпль був збудований в мавританському стилі, мав 4 бокові вежі, які здіймалися у вигляді мінаретів, дах увінчувало покрите міддю шатро. Мармурова пам'ятна дошка у вестибюлі нагадувала про цісаря Франца Йосифа. Темпль мав розкішний вигляд і зсередини. Передня стіна апсиди була виконана синім, червоним і золотим кольорами, а капітелі колон були прикрашені мавританськими арками.</p>"
    +"<p>У 1937 році приміщення Темплю відремонтували.</p>"
    +"<p>У роки Другої світової війни Темпль було підпалено, стіни будівлі встояли, проте внутрішнє оздоблення та покрівлю купола було знищено. Відповідальгість за це лежить на німецьких та румунських військах, що зайняли місто 5 липня 1941 року.</p>"
    +"<p>У 50-х роках залишки синагоги намагалися висадити в повітря. Зовнішні стіни будівлі встояли, проте купол було знесено. До будівлі, відбудованої в уцілілих стінах, додали четвертий поверх і двосхилий дах з фронтоном, і в 1959 році в ньому було відкрито кінотеатр «Жовтень», перейменований в 1992 році в «Чернівці». Сучасна будівля мало схожа на колишню, хоч і зберегла деякі його зовнішні обриси.</p>",
    1),
    five=new NewsCity(5,
    new Date(1740,4,4),
    "Вулиця Ольги Кобилянської",
    "images/five.jpg",
    "<p>Вулиця Ольги Кобилянської — одна з центральних вулиць Чернівців. Розташована у Першотравневому районі міста. Починається з Центральної площі і закінчується на перехресті з вулицею Тараса Шевченка. Виникла в 40-50-х рр. 18 ст. Сучасна назва — з 27 листопада 1940 року, на честь видатної української письменниці Ольги Кобилянської. </p>"
    +"<h2>Історія</h2>"
    +"<p>Наприкінці XIX ст., її називали «вулицею, що веде до лісу». Пізніше про неї стали говорити як про «дорогу на Молодію». Забудова ж вулиці починалася ще в 40-50-х рр. 18 ст. Перші будинки були дерев'яними, одноповерховими, кожен з яких був власністю окремого господаря.</p>"
    +"<p>Відомо, що місто розбудовувалось знизу догори, і головною на той час була вулиця Жидівська (тепер Сагайдачного), згодом — сучасна Шолом Алейхема.</p>"
    +"<p>За окремими згадками, сучасну вул. Українську колись називали «Нижньою Панською», а сучасну О. Кобилянської — «Верхньою Панською». У часи, коли її починали забудовувати, на цьому місці були великі горби, букові та грабові дерева, а місцями — болота, навіть справжні мочарі. В районі Святодухівської церкви мисливці полювали на диких качок, а з ближніх лісів сюди забиралися вовки і вили ночами. Окремі ділянки на цих горбах місцеве населення використовувало під городи.</p>"
    +"<p>Наприкінці 18 ст. для виготовлення шовку до Чернівців завезли шовкопряда, який тут прижився, а для його розведення потрібні були шовковичні дерева. Тоді в місті почали масове насадження цих дерев. Виробництво шовку швидко розвивалось. 1844 року, коли починали будувати Святодухівський храм, довелося викорчовувати цілі сади уже немолодих дерев шовковиці. Перший мурований будинок, за свідченням історичних документів, закладено 1786 року. Його побудували на розі вулиць Головної та Ольги Кобилянської, а власником був п. Стефан Ханвас. Тут довелося викорчувати велику ділянку могутнього лісу.</p>"
    +"<p>Впорядкуванням вулиці та її тротуарів зайнялася фірма «Яков Ульріх і К°», пізніше до цієї справи долучилася фірма «Кортесі і К°», яка 1888 року завершила тут і каналізаційні роботи.</p>"
    +"<p>Невдовзі представники австрійської фабрики з м. Аусбург «Згесер і Келлер» розробили і здійснили проект газового освітлення вулиці, а 1896 року фірмою «Шкерт і К°» тут було проведено електроосвітлення.</p>"
    +"<p>Згодом стали зводити багатоповерхові будинки, в яких розмістились житлові та державні установи, на цю вулицю було переведено і міське управління. Були тут також банк сільськогосподарського кредиту, міщанська каса, кафе та магазини.</p>"
    +"<p>Завершення забудови та загальне впорядкування вулиці відбулося ще в австрійський час. Тоді вона офіційно дістала назву «Геренгассе», що в перекладі означає «Панська вулиця». У період румунського панування декілька будинків на Панській вулиці було перебудовано. У той час оселитися тут було престижно, і домогтися цього вдавалося переважно особам панського роду: інтеліґенції, домовласникам, лихварям, торговцям, що було справжнім підтвердженням назви вулиці — Панська.</p>"
    +"<p>1910 року магістрат розглянув питання будівництва трамвайної колії по вулиці Панській, але виконати цей проект так і не вдалося. Ця вулиця була найкращою в місті, і вигляду, близького сучасному, набула ще на початку 20 ст. Першими було переобладнано будинки під № 6, 26, 35, 37-39, 43, 45, 51, 53 і 55. До них підвели каналізацію і освітлення, окремі з них (№ 36) зазнали реконструкції. Вулиця Панська стала центром ділового, торговельного та культурного життя міста. У 20-30-х роках 20 ст. вулиця отримала нову назву — на честь Янку Флондора.</p>"
    +"<p>У той період тут з'явилось чимало (понад 50) різних установ та організацій. Тут були магазини, ресторани, кав'ярні, банки, фотоательє та фірмові склади. Двірники щоранку мили бруківку і тротуари теплою водою з милом. Коли мешканці довколишніх сіл приносили сюди сільськогосподарські продукти, то кожен, перш ніж сюди зайти, повинен був ретельно витерти взуття чи босі ноги. В той час у мешканців з передмістя Роша, Садагура, Рогізна встановився звичай носити на голові кошики з продуктами та фруктами. А ось на вул. Панській (Флондора) так переносити товар заборонялося, окрім кошиків з квітами.</p>"
    +"<p>У 1936 році вул. Я. Флондора зазнала реконструкції за проектом архітектора Ісидора Чачкеса. Роботи виконувала фірма «Гранітул» і 27 листопада 1940 року вони були остаточно завершені. Тоді вулицю перейменували, і назвали на честь видатної буковинської письменниці — Ольги Кобилянської. Того ж дня у драмтеатрі відбулися урочисті збори, присвячені 55-річчю її літературної діяльності. На цих зборах було оголошено постанову облвиконкому про перейменування вул. імені Я. Флондора на вул. ім. Ольги Кобилянської.</p>",
    1)
    ;
    var newsBuild=[first,second,third,fouth,five],
    copyNewsBuild=newsBuild.slice();

    function getDataTitle(){
        let textAdd,
        status0="font-lighter color-black",
        status1="font-bold color-black",
        status2=`font-bold color-red`;
        common.setArr(copyNewsBuild);
        common.sortArrByDate();
        let copyNewsBuildTmp=common.getArr();  

        copyNewsBuildTmp.forEach(function(item){
            // if(item.statusInfo()==0){
            //     textAdd=`<div class="grey-color padding8"><span class="background-white padding3 date ${status0}">${item.dateInfoToString()}</span><a href="#" data-id="${item.idInfo()}" class="${status0}">${item.titleInfo()}</a></div>`; 
            // }  
            // else if(item.statusInfo()==1){
            //     textAdd=`<div class="grey-color padding8"><span class="background-white padding3 date ${status1}">${item.dateInfoToString()}</span><a href="#" data-id="${item.idInfo()}" class="${status1}">${item.titleInfo()}</a></div>`; 
            // } 
            // else if(item.statusInfo()==2){
            //     textAdd=`<div class="grey-color padding8"><span class="background-white padding3 date ${status2}">${item.dateInfoToString()}</span><a href="#" data-id="${item.idInfo()}" class="${status2}">${item.titleInfo()}</a></div>`; 
            // }
            textAdd=`<div class="grey-color padding8"><span class="background-white padding3 date ${status2}">${item.dateInfoToString()}</span><a href="#" data-id="${item.idInfo()}" class="${status0}">${item.titleInfo()}</a></div>`; 

        document.querySelector("#data-title").innerHTML+=textAdd;
    } );
}

function getShortText(text){
    let letterCount=80;
    if(text.length>letterCount){
        text=text.slice(0,letterCount)+"...";
    }
    return text;
}

function learnMore(event){
    let eventTarget=event.target.getAttribute("data-id");   
        let elem=(copyNewsBuild.filter(item=>item.id==Number(eventTarget)))[0];
        document.querySelector("#short-main").innerHTML=`
        <div class="card short-card padding8 margin5 ">
        <h3 class="card-title">${elem.titleInfo()}</h3>
        <span class="card-title font-lighter">${elem.dateInfoToString()}</span>
        <img class="card-img-top" src="${elem.pathInfo()}" alt="Card image cap">
        <div class="card-body">            
            <p class="card-text font-lighter">${elem.descriptionInfo()}</p>                        
        </div>
        </div>`;      
}

    function getAllInfo(){
        common.setArr(copyNewsBuild);
        common.sortArrByDate();
        let copyNewsBuildTmp=common.getArr();  
        let arrRes=[];
        copyNewsBuildTmp.forEach(item=>arrRes.push(`
        <div class="card short-card padding8 margin5 ">
        <h3 class="card-title">${item.titleInfo()}</h3>
        <span class="card-title font-lighter">${item.dateInfoToString()}</span>
        <img class="card-img-top" src="${item.pathInfo()}" alt="Card image cap">
        <div class="card-body">            
            <p class="card-text font-lighter">${getShortText(item.descriptionInfo())}</p>
            <a href="#" class="btn btn-primary" data-id=${item.idInfo()}>Дізнатися більше</a>
        </div>
        </div>
        `));
        document.querySelector("#short-main").innerHTML=arrRes.join("");

    }

    function getImageTitle(){
        let arrStatus1=[],
        arrStatus2=[];
        copyNewsBuild.forEach(function(item){
            if(item.statusInfo()==1){
                arrStatus1.push(item);
            }
            else if(item.statusInfo()==2){
                arrStatus2.push(item);
            }
        });
        common.setArr(arrStatus1);
        common.sortArrByDate();
        arrStatus1=common.getArr();
        common.setArr(arrStatus2);
        common.sortArrByDate();
        arrStatus2=common.getArr();
        // arrStatus1=sortArrByDate(arrStatus1);
        // arrStatus2=sortArrByDate(arrStatus2);       
        arrStatus2.forEach((item)=>
        document.querySelector("#image-title").innerHTML+='<div class="card margin5" style="width: 28rem;">'+
        '<img class="card-img-top transition" src="'+item.pathInfo()+'"alt="'+item.titleInfo()+'">'+
        '<div class="card-body">'+
          '<p class="card-text"><a href="#" data-id="'+item.idInfo()+'">'+item.titleInfo()+'</a></p>'+
        '</div>'+
      '</div>');
      arrStatus1.forEach((item)=>
        document.querySelector("#image-title").innerHTML+='<div class="card margin5" style="width: 28rem;">'+
        '<img class="card-img-top transition" src="'+item.pathInfo()+'"alt="'+item.titleInfo()+'">'+
        '<div class="card-body">'+
          '<p class="card-text"><a href="#" data-id="'+item.idInfo()+'">'+item.titleInfo()+'</a></p>'+
        '</div>'+
      '</div>')
    }
    function getAllDetails(item){
        document.querySelector("#image-title").innerHTML='<div class="card margin5">'
        +'<h1 class="card-title margin5"><a href="#">'+item.titleInfo()+'</a></h1>'+
        '<img class="card-img-top transition" src="'+item.pathInfo()+'" alt="'+item.titleInfo()+'">'+
        '<div class="card-body">'+
          '<p class="card-text text-align-just">'+item.descriptionInfo()+'</p>'+
        '</div>'+
      '</div>';       
    }

    function initGetDetails(event){
        let eventTarget=event.target.getAttribute("data-id");
        if(eventTarget){           
            if(!event.target.classList.contains("color-red")){
                event.target.classList.remove("color-black");
                event.target.classList.add("color-blueviolet");
            }
            else{
                event.target.classList.add("backgroundcolor-blueviolet");
            }            
            let elem=(copyNewsBuild.filter(item=>item.id==Number(eventTarget)))[0];            
            getAllDetails(elem);            
        }
    }
    // function sortArrByDate(arr){
    //     arr.sort((a,b)=>a.dateInfo().getTime()-b.dateInfo().getTime());
    //     return arr;
    // }

    function getCarousel(imagePath){
        document.querySelector("#get-carousel").innerHTML=
        `<div class="carousel-item active">
            <img class="d-block w-100" src="${imagePath}" alt="${imagePath}">
        </div>`;
        console.log(imagePath);
    }

    function changeCarousel(){
        let imgName=[],i=0;
        copyNewsBuild.forEach(element => {
           imgName[i]=element.pathInfo();
           i++;  
            
        });
        min = 0;
        max = imgName.length;       
        let number=Math.floor(Math.random() * (max - min)) + min;
        console.log(imgName[number]);
        getCarousel(imgName[number]);
    }   
    // document.onload=setInterval(changeCarousel,1500);
    // document.onload=getDataTitle(); 
    // document.onload=getImageTitle();    
    // document.querySelector("#data-title").addEventListener("click",initGetDetails);
    // document.querySelector("#image-title").addEventListener("click",initGetDetails);
    function  doCarouselBootstrap(arr,selectorName){
        let resArr=[];
        resArr[0]=`<div class="carousel-item active">
        <img class="d-block w-100" src="${arr[0].pathInfo()}" alt="${arr[0].pathInfo()}">
         </div>`;
            arr=arr.slice(1);
            arr.forEach(item => {
                resArr.push(`<div class="carousel-item">
                <img class="d-block w-100" src="${item.pathInfo()}" alt="${item.pathInfo()}">
            </div>`)    
            }); 
        //console.log(resArr.join(""));   
         document.querySelector(selectorName).innerHTML=resArr.join("");
      }
      function  doCarouselBootstrapTablet(arr,selectorName){
        let resArr=[];
        resArr[0]=`<div class="carousel-item active">
        <img class="d-block w-100" src="${arr[0].pathInfo()}" alt="${arr[0].pathInfo()}">
      </div>`;        
            arr=arr.slice(1);
            arr.forEach(item => {
                resArr.push(`<div class="carousel-item">
                <img class="d-block w-100" src="${item.pathInfo()}" alt="${item.pathInfo()}">
              </div>`)    
            }); 
        //console.log(resArr.join(""));   
         document.querySelector(selectorName).innerHTML=resArr.join("");
      }

    function addShortMenuItems(arrItems){
        let menuArr=[],
        copyArrItems=arrItems.slice();
        menuArr.push(`<li class="nav-item active">
        <a class="nav-link" href="#">${copyArrItems[0]}<span class="sr-only">(current)</span></a>
        </li>`);
        copyArrItems=copyArrItems.slice(1);
        copyArrItems.forEach((item)=>
        menuArr.push(`<li class="nav-item">
        <a class="nav-link" href="#">${item}</a>
      </li>`));
      document.querySelector("#short-gamb-menu").innerHTML=menuArr.join("");
    }

    function addShortMenu(arr,place){
        let menuData=[];
        let arrCopy=arr.slice();
        arrCopy.forEach(item=>menuData.push(`<a class="a-intr ${item.color}" href="#">${item.title}</a>`));
        document.querySelector(place).innerHTML=menuData.join("");
    }

    function addNavBackground(arr){
        let arrCopy=arr.slice();
        let resArr=[];
        resArr.push(`<a class="a-background" href="#"><span>${arrCopy[0].title}</span></a>`);
        arrCopy=arrCopy.slice(1);
        arrCopy.forEach(item=>resArr.push(`<a class="a-background margin-left" href="#"><span>${item.title}</span></a>`));
        resArr.push(`<a class="a-background margin-left" href="#" id="radio"></a>`);
        document.querySelector("#nav-background").innerHTML=resArr.join("");
    }
    function addNavNotBackground(arr){
        let arrCopy=arr.slice();
        let resArr=[];       
        arrCopy.forEach(item=>resArr.push(` <a class="a-text margin5" href="#">${item.title}</a>`));        
        document.querySelector("#nav-not-background").innerHTML=resArr.join("");
    }
    function addNavFooter(arr){
        let arrCopy=arr.slice();
        let resArr=[];       
        arrCopy.forEach(item=>resArr.push(`<a class="f-text margin5" href="#">${item.title}</a>`));        
        document.querySelector("#nav-footer").innerHTML=resArr.join("");
    }
    
     
    doCarouselBootstrap(copyNewsBuild,"#bootstrap");
    doCarouselBootstrapTablet(copyNewsBuild,"#bootstrap-tablet");
    

    setInterval(changeCarousel,1500);
    getDataTitle(); 
    getAllInfo();
    // getImageTitle(); 
    addShortMenuItems(["Головна", "Новини Чернівців", "Новини України", "Новини світу",
         "Блоги", "прес-релізи", "Історія успіху", "пропозиція тижня", "Публікації \"Мб\"",
          "Афіша", "Тури з Чернівців", "Куди піти вчитись"]);   
    document.querySelector("#data-title").addEventListener("click",initGetDetails);
    document.querySelector("#image-title").addEventListener("click",initGetDetails);
    document.querySelector("#short-main").addEventListener("click",learnMore);
    addShortMenu(arrShortMenu,"#short-menu-info");
    addShortMenu(arrShortMenu,"#full-menu-info");
    addNavBackground(navBackground);
    addNavNotBackground(navNotBackground);
    addNavFooter(navFooter);

   
    
}());