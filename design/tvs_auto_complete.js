$(function(){
    //country list in an array
    var max_list = 10; //display maximum 10 search result
    var source = [{'value':'7','label':'Russian Federation / Kazakhstan (+7)','flag':'ru'},{'value':'20','label':'Egypt (+20)','flag':'eg'},{'value':'27','label':'South Africa (+27)','flag':'za'},{'value':'30','label':'Greece (+30)','flag':'gr'},{'value':'31','label':'The Netherlands (+31)','flag':'nl'},{'value':'32','label':'Belgium (+32)','flag':'be'},{'value':'33','label':'France (+33)','flag':'fr'},{'value':'34','label':'Spain (+34)','flag':'es'},{'value':'36','label':'Hungary (+36)','flag':'hu'},{'value':'39','label':'Italy (+39)','flag':'it'},{'value':'40','label':'Romania (+40)','flag':'ro'},{'value':'41','label':'Switzerland (+41)','flag':'ch'},{'value':'43','label':'Austria (+43)','flag':'at'},{'value':'44','label':'United Kingdom (+44)','flag':'uk'},{'value':'45','label':'Denmark (+45)','flag':'dk'},{'value':'46','label':'Sweden (+46)','flag':'se'},{'value':'47','label':'Norway (+47)','flag':'no'},{'value':'48','label':'Poland (+48)','flag':'pl'},{'value':'49','label':'Germany (+49)','flag':'de'},{'value':'51','label':'Peru (+51)','flag':'pe'},{'value':'52','label':'Mexico (+52)','flag':'mx'},{'value':'53','label':'Cuba (+53)','flag':'cu'},{'value':'54','label':'Argentina (+54)','flag':'ar'},{'value':'55','label':'Brazil (+55)','flag':'br'},{'value':'56','label':'Chile (+56)','flag':'cl'},{'value':'57','label':'Colombia (+57)','flag':'co'},{'value':'58','label':'Venezuela (+58)','flag':'ve'},{'value':'60','label':'Malaysia (+60)','flag':'my'},{'value':'61','label':'Australia (+61)','flag':'au'},{'value':'62','label':'Indonesia (+62)','flag':'id'},{'value':'63','label':'Philippines (+63)','flag':'ph'},{'value':'64','label':'New Zealand (+64)','flag':'nz'},{'value':'65','label':'Singapore (+65)','flag':'sg'},{'value':'66','label':'Thailand (+66)','flag':'th'},{'value':'67','label':'Antarctica (+67)','flag':'aq'},{'value':'81','label':'Japan (+81)','flag':'jp'},{'value':'82','label':'Korea (Republic of) [South] (+82)','flag':'kr'},{'value':'84','label':'Vietnam (+84)','flag':'vn'},{'value':'86','label':'China (+86)','flag':'cn'},{'value':'90','label':'Turkey (+90)','flag':'tr'},{'value':'91','label':'India (+91)','flag':'in'},{'value':'92','label':'Pakistan (+92)','flag':'pk'},{'value':'93','label':'Afghanistan (+93)','flag':'af'},{'value':'94','label':'Sri Lanka (+94)','flag':'lk'},{'value':'95','label':'Myanmar (Burma) (+95)','flag':'mm'},{'value':'98','label':'Iran (Islamic Republic of) (+98)','flag':'ir'},{'value':'212','label':'Morocco (+212)','flag':'ma'},{'value':'213','label':'Algeria (+213)','flag':'dz'},{'value':'216','label':'Tunisia (+216)','flag':'tn'},{'value':'218','label':'Libya (Libyan Arab Jamahiriya) (+218)','flag':'ly'},{'value':'220','label':'Gambia (+220)','flag':'gm'},{'value':'221','label':'Senegal (+221)','flag':'sn'},{'value':'222','label':'Mauritania (+222)','flag':'mr'},{'value':'223','label':'Mali (+223)','flag':'ml'},{'value':'224','label':'Guinea (+224)','flag':'gn'},{'value':'225','label':'Ivory Coast (+225)','flag':'ci'},{'value':'226','label':'Burkina Faso (+226)','flag':'bf'},{'value':'227','label':'Niger (+227)','flag':'ne'},{'value':'228','label':'Togo (+228)','flag':'tg'},{'value':'229','label':'Benin (+229)','flag':'bj'},{'value':'230','label':'Mauritius (+230)','flag':'mu'},{'value':'231','label':'Liberia (+231)','flag':'lr'},{'value':'232','label':'Sierra Leone (+232)','flag':'sl'},{'value':'233','label':'Ghana (+233)','flag':'gh'},{'value':'234','label':'Nigeria (+234)','flag':'ng'},{'value':'235','label':'Chad (+235)','flag':'td'},{'value':'236','label':'Central African Republic (+236)','flag':'cf'},{'value':'237','label':'Cameroon (+237)','flag':'cm'},{'value':'238','label':'Cape Verde (+238)','flag':'cv'},{'value':'240','label':'Equatorial Guinea (+240)','flag':'gq'},{'value':'241','label':'Gabon (+241)','flag':'ga'},{'value':'243','label':'Zaire (+243)','flag':'zr'},{'value':'244','label':'Angola (+244)','flag':'ao'},{'value':'245','label':'Guinea-bissau (+245)','flag':'gw'},{'value':'246','label':'Diego Garcia (+246)','flag':''},{'value':'247','label':'Ascension Island (+247)','flag':'ac'},{'value':'248','label':'Seychelles (+248)','flag':'sc'},{'value':'249','label':'Sudan (+249)','flag':'sd'},{'value':'250','label':'Rwanda (+250)','flag':'rw'},{'value':'251','label':'Ethiopia (+251)','flag':'et'},{'value':'252','label':'Somalia (+252)','flag':'so'},{'value':'253','label':'Djibouti (+253)','flag':'dj'},{'value':'254','label':'Kenya (+254)','flag':'ke'},{'value':'255','label':'Tanzania (United Republic of) (+255)','flag':'tz'},{'value':'256','label':'Uganda (+256)','flag':'ug'},{'value':'257','label':'Burundi (+257)','flag':'bi'},{'value':'258','label':'Mozambique (+258)','flag':'mz'},{'value':'259','label':'Zanzibar (+259)','flag':''},{'value':'260','label':'Zambia (+260)','flag':'zm'},{'value':'261','label':'Madagascar (+261)','flag':'mg'},{'value':'262','label':'Reunion Island (+262)','flag':'re'},{'value':'263','label':'Zimbabwe (+263)','flag':'zw'},{'value':'264','label':'Namibia (+264)','flag':'na'},{'value':'265','label':'Malawi (+265)','flag':'mw'},{'value':'266','label':'Lesotho (+266)','flag':'ls'},{'value':'267','label':'Botswana (+267)','flag':'bw'},{'value':'268','label':'Swaziland (+268)','flag':'sz'},{'value':'269','label':'Comoros (+269)','flag':'km'},{'value':'290','label':'St. Helena (+290)','flag':'sh'},{'value':'291','label':'Eritrea (+291)','flag':'er'},{'value':'297','label':'Aruba (+297)','flag':'aw'},{'value':'298','label':'Faroe Islands (+298)','flag':'fo'},{'value':'299','label':'Greenland (+299)','flag':'gl'},{'value':'350','label':'Gibraltar (+350)','flag':'gi'},{'value':'351','label':'Portugal (+351)','flag':'pt'},{'value':'352','label':'Luxembourg (+352)','flag':'lu'},{'value':'353','label':'Ireland (+353)','flag':'ie'},{'value':'354','label':'Iceland (+354)','flag':'is'},{'value':'355','label':'Albania (+355)','flag':'al'},{'value':'356','label':'Malta (+356)','flag':'mt'},{'value':'357','label':'Cyprus (+357)','flag':'cy'},{'value':'358','label':'Finland (+358)','flag':'fi'},{'value':'359','label':'Bulgaria (+359)','flag':'bg'},{'value':'370','label':'Lithuania (+370)','flag':'lt'},{'value':'371','label':'Latvia (+371)','flag':'lv'},{'value':'372','label':'Estonia (+372)','flag':'ee'},{'value':'373','label':'Moldova (Republic of) (+373)','flag':'md'},{'value':'374','label':'Armenia (+374)','flag':'am'},{'value':'375','label':'Belarus (+375)','flag':'by'},{'value':'376','label':'Andorra (+376)','flag':'ad'},{'value':'377','label':'Monaco (+377)','flag':'mc'},{'value':'378','label':'San Marino (+378)','flag':'sm'},{'value':'379','label':'Holy See (City Vatican State) (+379)','flag':'va'},{'value':'380','label':'Ukraine (+380)','flag':'ua'},{'value':'381','label':'Yugoslavia (+381)','flag':'yu'},{'value':'385','label':'Croatia/Hrvatska (+385)','flag':'hr'},{'value':'386','label':'Slovenia (+386)','flag':'si'},{'value':'387','label':'Bosnia and Herzegovina (+387)','flag':'ba'},{'value':'389','label':'Macedonia, Former Yugoslav Republic (+389)','flag':'mk'},{'value':'417','label':'Liechtenstein (+417)','flag':'li'},{'value':'420','label':'Czech Republic (+420)','flag':'cz'},{'value':'421','label':'Slovakia (Slovak Republic) (+421)','flag':'sk'},{'value':'500','label':'Falkland Islands (Malvinas) (+500)','flag':'fk'},{'value':'501','label':'Belize (+501)','flag':'bz'},{'value':'502','label':'Guatemala (+502)','flag':'gt'},{'value':'503','label':'El Salvador (+503)','flag':'sv'},{'value':'504','label':'Honduras (+504)','flag':'hn'},{'value':'505','label':'Nicaragua (+505)','flag':'ni'},{'value':'506','label':'Costa Rica (+506)','flag':'cr'},{'value':'507','label':'Panama (+507)','flag':'pa'},{'value':'508','label':'St. Pierre and Miquelon (+508)','flag':'pm'},{'value':'509','label':'Haiti (+509)','flag':'ht'},{'value':'590','label':'Guadeloupe (+590)','flag':'gp'},{'value':'591','label':'Bolivia (+591)','flag':'bo'},{'value':'592','label':'Guyana (+592)','flag':'gy'},{'value':'593','label':'Ecuador (+593)','flag':'ec'},{'value':'594','label':'French Guiana (+594)','flag':'gf'},{'value':'595','label':'Paraguay (+595)','flag':'py'},{'value':'596','label':'French Antilles (+596)','flag':''},{'value':'597','label':'Suriname (+597)','flag':'sr'},{'value':'598','label':'Uruguay (+598)','flag':'uy'},{'value':'599','label':'Netherlands Antilles (+599)','flag':'an'},{'value':'670','label':'Northern Mariana Islands (+670)','flag':'mp'},{'value':'671','label':'Guam (+671)','flag':'gu'},{'value':'672','label':'Norfolk Island (+672)','flag':'nf'},{'value':'673','label':'Brunei Darussalam (+673)','flag':'bn'},{'value':'674','label':'Nauru (+674)','flag':'nr'},{'value':'675','label':'Papua New Guinea (+675)','flag':'pg'},{'value':'676','label':'Tonga (+676)','flag':'to'},{'value':'677','label':'Solomon Islands (+677)','flag':'sb'},{'value':'678','label':'Vanuatu (+678)','flag':'vu'},{'value':'679','label':'Fiji (+679)','flag':'fj'},{'value':'680','label':'Palau (+680)','flag':'pw'},{'value':'681','label':'Wallis and Futuna Islands (+681)','flag':'wf'},{'value':'682','label':'Cook Islands (+682)','flag':'ck'},{'value':'683','label':'Niue (+683)','flag':'nu'},{'value':'684','label':'American Samoa (+684)','flag':'as'},{'value':'685','label':'Western Samoa (+685)','flag':'ws'},{'value':'686','label':'Kiribati (+686)','flag':'ki'},{'value':'687','label':'New Caledonia (+687)','flag':'nc'},{'value':'688','label':'Tuvalu (+688)','flag':'tv'},{'value':'689','label':'French Polynesia (+689)','flag':'pf'},{'value':'690','label':'Tokelau (+690)','flag':'tk'},{'value':'691','label':'Micronesia (Federal State of) (+691)','flag':'fm'},{'value':'692','label':'Marshall Islands (+692)','flag':'mh'},{'value':'1829','label':'Dominican Republic, Nevis (+1829)','flag':'dr'},{'value':'852','label':'Hong Kong (+852)','flag':'hk'},{'value':'853','label':'Macau (+853)','flag':'mo'},{'value':'855','label':'Cambodia (+855)','flag':'kh'},{'value':'871','label':'INMARSAT - Oriental Atlantic Ocean (+871)','flag':''},{'value':'872','label':'INMARSAT - Pacific Ocean (+872)','flag':''},{'value':'873','label':'INMARSAT - Indian Ocean (+873)','flag':''},{'value':'874','label':'INMARSAT - Western Atlantic Ocean (+874)','flag':''},{'value':'880','label':'Bangladesh (+880)','flag':'bd'},{'value':'886','label':'Taiwan (Province of China) (+886)','flag':'tw'},{'value':'960','label':'Maldives (+960)','flag':'mv'},{'value':'961','label':'Lebanon (+961)','flag':'lb'},{'value':'962','label':'Jordan (+962)','flag':'jo'},{'value':'963','label':'Syria (Syrian Arab Republic) (+963)','flag':'sy'},{'value':'964','label':'Iraq (+964)','flag':'iq'},{'value':'965','label':'Kuwait (+965)','flag':'kw'},{'value':'966','label':'Saudi Arabia (+966)','flag':'sa'},{'value':'967','label':'Yemen (+967)','flag':'ye'},{'value':'968','label':'Oman (+968)','flag':'om'},{'value':'971','label':'United Arab Emirates (+971)','flag':'ae'},{'value':'972','label':'Israel (+972)','flag':'il'},{'value':'973','label':'Bahrain (+973)','flag':'bh'},{'value':'974','label':'Qatar (+974)','flag':'qa'},{'value':'975','label':'Bhutan (+975)','flag':'bt'},{'value':'976','label':'Mongolia (+976)','flag':'mn'},{'value':'977','label':'Nepal (+977)','flag':'np'},{'value':'992','label':'Tajikistan (+992)','flag':'tj'},{'value':'993','label':'Turkmenistan (+993)','flag':'tm'},{'value':'994','label':'Azerbaijan (+994)','flag':'az'},{'value':'995','label':'Georgia (+995)','flag':'ge'},{'value':'996','label':'Kyrgyzstan (or Kirgizia) (+996)','flag':'kg'},{'value':'998','label':'Uzbekistan (+998)','flag':'uz'},{'value':'1242','label':'Bahamas (+1242)','flag':'bs'},{'value':'1246','label':'Barbados (+1246)','flag':'bb'},{'value':'1264','label':'Anguilla (+1264)','flag':'ai'},{'value':'1268','label':'Antigua and Barbuda (+1268)','flag':'ag'},{'value':'1284','label':'Virgin Islands (British) (+1284)','flag':'vg'},{'value':'1340','label':'Virgin Islands (USA) (+1340)','flag':'vi'},{'value':'1345','label':'Cayman Islands (+1345)','flag':'ky'},{'value':'1441','label':'Bermuda (+1441)','flag':'bm'},{'value':'1473','label':'Grenada (+1473)','flag':'gd'},{'value':'1649','label':'Turks and Caicos Islands (+1649)','flag':'tc'},{'value':'1664','label':'Montserrat (+1664)','flag':'ms'},{'value':'1767','label':'Dominica (+1767)','flag':'dm'},{'value':'1784','label':'Saint Vincent and the Grenadines (+1784)','flag':'vc'},{'value':'1758','label':'Saint Lucia (+1758)','flag':'lc'},{'value':'1787','label':'Puerto Rico (+1787)','flag':'pr'},{'value':'1868','label':'Trinidad and Tobago (+1868)','flag':'tt'},{'value':'1869','label':'Saint Kitts and Nevis (+1869)','flag':'kn'},{'value':'1876','label':'Jamaica (+1876)','flag':'jm'},{'value':'42','label':'Czechoslovakia (+42)','flag':'cs'},{'value':'1809','label':'Dominican republic (+1809)','flag':'dr'},{'value':'1','label':'USA / Canada (+1)','flag':'us'},{'value':'1939','label':'Puerto Rico (+1939)','flag':'--'},{'value':'1684','label':'American Samoa (+1684)','flag':'--'},{'value':'1671','label':'Guam (+1671)','flag':'--'},{'value':'1670','label':'Mariana Islands (+1670)','flag':'--'},{'value':'856','label':'Laos (+856)','flag':null},{'value':'9991','label':'Skype (+9991)','flag':'skp'},{'value':'1849','label':'Dominican republic (+1849)','flag':'dr'},{'value':'211','label':'South Sudan (+211)','flag':null}];
    $("#number").autocomplete({
        source: function (request, response) {
            //country searching and sorting
            var term = $.ui.autocomplete.escapeRegex(request.term)
                , startsWithMatcher = new RegExp("^" + term, "i")
                , startsWith = $.grep(source, function(value) {
                    return startsWithMatcher.test(value.label || value.value || value);
                })
                , containsMatcher = new RegExp(term, "i")
                , contains = $.grep(source, function (value) {
                    return $.inArray(value, startsWith) < 0 &&
                        containsMatcher.test(value.label || value.value || value);
                });
                var obj_num = new Object();var obj_num1 = new Object();
                var sel_code = contains_sorted = new Array();sel_code1 =new Array();
                if( startsWith.length == 0 && /^(\\\+\d+|\d+|\\\(\\\+\d+)/.test( term )){
                    $.each(contains, function(index, val){
                      var m = /(\d+)/g.exec(val.label);
                        if( startsWithMatcher.test(m[1]) ){
                            obj_num[m[1]] = val;
                            sel_code.push(m[1]);
                        }
                        else{
                          obj_num1[m[1]] = val;
                          sel_code1.push(m[1]);
                        }
                    });
                    sel_code.sort(function(a,b){return a-b});
                    sel_code1.sort(function(a,b){return a-b});
                    contains = new Array();
                    $.each(sel_code, function(index, val){
                        contains.push(obj_num[val])
                    });
                    $.each(sel_code1, function(index, val){
                        contains.push(obj_num1[val])
                    });
                }
                response(startsWith.concat(contains).slice(0, max_list));
        },
        select: function( event, ui ) {
            $( "#number" ).val( ui.item.label );
            //ajax call to get country specific data
            $.ajax({
                url:'rate.cgi',
                type:'post',
                dataType:'html',
                data:{
                    number: ui.item.value
                },
                success:function(data){
                    $('#search_result_div').html(data);
                }
            })
            return false;
        }
    })
    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
        //add flag images to search result
        return $( "<li>" )
            .append( "<a><div class='flag flag-"+ item.flag +"' style='float:left;'></div><div>&nbsp;" + item.label + "</div></a>" )
            .appendTo( ul );
    };
});