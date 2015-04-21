if (Meteor.isClient) {
console.log('cheparka');
    pdfmakeT12 = function() {
        //console.log('make t12');

        //pdfMake.fonts = {
        //    Tahoma: {
        //        normal: 'tahoma.ttf',
        //        bold: 'tahoma.ttf',
        //        italics: 'tahoma.ttf',
        //        bolditalics: 'tahoma.ttf'
        //    }
        //};

        var dateFrmt = Session.get('selectedYear') + " " + Session.get('selectedMonth') + " "+1;
        var endOfMonth = moment(dateFrmt, "YYYY MM DD").endOf('month').format("DD");

        var organizationName = ' - ';
        var structuralSubdivision = ' - ';
        var documentNumber = '00001';
        var documentGenerationDate = moment().format("DD.MM.YYYY");

        var monthTextName = Session.get('selectedMonth')+1;
        if (parseInt(monthTextName).length == 1) {
            monthTextName = '0'+monthTextName;
        }

        var documentPeriodStart = '01.'+monthTextName+'.'+Session.get('selectedYear');
        var documentPeriodEnd = endOfMonth+'.'+monthTextName+'.'+Session.get('selectedYear');
        var tableWidth = 40;

        if (UI._globalHelpers.userCompany() !== undefined) {
            var company = UI._globalHelpers.userCompany();
            organizationName = company.title;
            var departments = Department.find({companyId:UI._globalHelpers.userCompany()._id});
            structuralSubdivision = joinObj(Department.find({ companyId: company._id }).fetch(), 'title');
            if (structuralSubdivision <= " ") {
                structuralSubdivision = "Подразделения не заданы";
            }
        };

        var timecardTableBody = [
            [
                { text: 'Но-мер по пор-ядку', alignment:'center', rowSpan: 4 },
                { text: 'Фами-лия, ини-циалы, долж-ность (специ-аль-ность, профес-сия)', alignment:'center', rowSpan: 4 },
                { text: 'Та-бе-ль-ный но-мер', alignment:'center', rowSpan: 4 },

                { text: 'Отметки о явках и неявках на работу по числам месяца', alignment:'center', colSpan: 33 },
                '','','','','','','','','','','','','','','','',
                '','','','','','','','','','','','','','','','',
                { text: 'Итого отработано за месяц', alignment:'center', colSpan: 5 },'','','','',
                { text: 'Коли-чество неявок, дней (часов)', alignment:'center', rowSpan: 4 },
                { text: 'Из них по причинам', alignment:'center', colSpan: 2 },
                '',
                { text: 'Коли-чество выхо-дных и праз-дни-чных дней', alignment:'center', rowSpan: 4 }
            ],
            [
                '','','',
                { text: '1', rowSpan: 3 },{ text: '2', rowSpan: 3 },{ text: '3', rowSpan: 3 },{ text: '4', rowSpan: 3 },
                { text: '5', rowSpan: 3 },{ text: '6', rowSpan: 3 },{ text: '7', rowSpan: 3 },{ text: '8', rowSpan: 3 },
                { text: '9', rowSpan: 3 },{ text: '10', rowSpan: 3 },{ text: '11', rowSpan: 3 },{ text: '12', rowSpan: 3 },
                { text: '13', rowSpan: 3 },{ text: '14', rowSpan: 3 },{ text: '15', rowSpan: 3 },
                { text: 'Итого отраб-отано за I поло-вину мес-яца', rowSpan: 3 },{ text: '16', rowSpan: 3 },
                { text: '17', rowSpan: 3 },{ text: '18', rowSpan: 3 },{ text: '19', rowSpan: 3 },{ text: '20', rowSpan: 3 },
                { text: '21', rowSpan: 3 },{ text: '22', rowSpan: 3 },{ text: '23', rowSpan: 3 },{ text: '24', rowSpan: 3 },
                { text: '25', rowSpan: 3 },{ text: '26', rowSpan: 3 },{ text: '27', rowSpan: 3 },{ text: '28', rowSpan: 3 },
                { text: '29', rowSpan: 3 },{ text: '30', rowSpan: 3 },{ text: '31', rowSpan: 3 },
                { text: 'Итого отраб-отано за II поло-вину мес-яца', rowSpan: 3 },{ text: 'дней', rowSpan: 3 },
                { text: 'часов', colSpan: 4 },'','','',
                '',
                { text: 'код', rowSpan: 3 }, { text: 'коли-чество дней (часов)', rowSpan: 3 },
                ''
            ],
            [
                ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',{ text: 'всего', rowSpan: 2 }, { text: 'из них', colSpan: 3 },'','','','','',''
            ],
            [
                ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',' ','сверх-уроч-ных','ночных','выхо-дных, праз-днич-ных','','','',''
            ],
            [
                '1','2','3',{ text: '4', colSpan: 15 },' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
                '5',{ text: '6', colSpan: 16 },' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
                ' ',' ',' ','7 ','8','9','10','11','12','13','14','15','16'
            ]
        ];

        var timecardCount = Timecard.find().count();

        var timecardCollection = Timecard.find();
        if (!timecardCollection.count()) return;
        timecardCollection.forEach(function (row, index) {
            function fSS(value) {
                if (value == '0') {
                    return '-';
                } else {
                    return UI._globalHelpers.findSpecSymbol(value).code;
                }
            }
            function getUdefined(value, defaultVal) {
                return value == undefined ? defaultVal : value;
            }

            //console.log(row);

            var row1 = [
                { text: (index+1).toString(), rowSpan: 2 },{ text: row.staff().fullName(), rowSpan: 2, alignment: 'left' },{ text: row.staff().personnelNumber.toString(), rowSpan: 2 },
                fSS(row.dt1),fSS(row.dt2),fSS(row.dt3),fSS(row.dt4),fSS(row.dt5),fSS(row.dt6),fSS(row.dt7),fSS(row.dt8),
                fSS(row.dt9),fSS(row.dt10),fSS(row.dt11),fSS(row.dt12),fSS(row.dt13),fSS(row.dt14),fSS(row.dt15),getUdefined(row.monthHalf1count, '0'),
                fSS(row.dt16),fSS(row.dt17),fSS(row.dt18),fSS(row.dt19),fSS(row.dt20),fSS(row.dt21),fSS(row.dt22),
                fSS(row.dt23),fSS(row.dt24),fSS(row.dt25),fSS(row.dt26),fSS(row.dt27),fSS(row.dt28),fSS(row.dt29),
                fSS(row.dt30),fSS(row.dt31), getUdefined(row.monthHalf2count, '0'),{ text: getUdefined(row.workDaysCount, '0'), rowSpan: 2 },{ text: getUdefined(row.monthHours, '00:00'), rowSpan: 2 },
                { text: getUdefined(row.monthOvertimeHours, '00:00'), rowSpan: 2 },{ text: getUdefined(row.monthNightHours, '00:00'), rowSpan: 2 },{ text: getUdefined(row.monthHolidaysHours, '00:00'), rowSpan: 2 },
                getUdefined(row.absenceDaysCount, '0'),'-','-',{ text: getUdefined(row.relaxDaysCount, '0'), rowSpan: 2 }
            ];

            var row2 = [
                '','','',row.d1,row.d2,row.d3,row.d4,row.d5,row.d6,row.d7,row.d8,
                row.d9,row.d10,row.d11,row.d12,row.d13,row.d14,row.d15,getUdefined(row.monthHalf1, '00:00'),
                row.d16,row.d17,row.d18,row.d19,row.d20,row.d21,row.d22,
                row.d23,row.d24,row.d25,row.d26,row.d27,row.d28,row.d29,
                row.d30,row.d31,getUdefined(row.monthHalf2, '00:00'),' ','','','','',getUdefined(row.absenceHours, '00:00'),'-','-',''
            ];

            timecardTableBody.push(row1);
            timecardTableBody.push(row2);
        });

        var stdLayout =  {
            hLineWidth: function(i, node) {
                return 0.2;
            },
            vLineWidth: function(i, node) {
                return 0.2;
            }
        };

        var dd = {
            pageOrientation: 'landscape',
            content: [
                { margin: [-25, 0], text: 'Унифицированная форма № Т-12\nУтверждена постановлением Госкомстата РФ от 5 января 2004 г. № 1', style: 'topRightHeader' },
                {
                    margin: [-25, 5],
                    table: {
                        widths: ['*', 100, 100],
                        borderLines: [
                            [0, 0, 1],
                            [0, 0, 1],
                            [0, 0, 1],
                            [1, 0, 1],
                            [0, 0, 0],
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        borderCols: [
                            [0, 0, 1, 1],
                            [0, 0, 1, 1],
                            [0, 0, 1, 1],
                            [0, 0, 1, 1],
                            [0, 0, 1, 1],
                            [0, 0, 0, 0]
                        ],
                        headerRows: 0,
                        body: [
                            [' ', '',  { text: 'Код', alignment:'center' }],
                            [' ', { text: 'Форма по ОКУД', alignment:'right' },  { text: '0301007', alignment:'center' }],
                            [{ text: organizationName, alignment:'center' }, { text: 'по ОКПО', alignment:'right' },  ' '],
                            [{ text: 'наименование организации', fontSize: 8, alignment:'center'}, ' ',  ' '],
                            [{ text: structuralSubdivision, alignment:'center' }, '',  ''],
                            [{ text: 'структурное подразделение', fontSize: 8, alignment:'center'}, '',  ''],
                        ]
                    },
                    layout: stdLayout
                },
                {
                    margin: [-25, -10],
                    table: {
                        //widths: ['*', 100, 100],
                        borderLines: [
                            [0,1,1,0,1,1,0],
                            [0,0,0,0,1,1,0],
                            [0,1,1,0,1,1,0],
                            [0,1,1,0,1,1,0]
                        ],
                        borderCols: [
                            [0,1,1,1,1,1,1,0],
                            [0,1,1,1,1,1,1,0],
                            [0,1,1,1,1,1,1,0],
                            [0,1,1,1,1,1,1,0],
                            [0,1,1,1,1,1,1,0],
                            [0,1,1,1,1,1,1,0],
                            [0,1,1,1,1,1,1,0],
                        ],
                        headerRows: 0,
                        widths: ['*',60, 60, 10,60,60],
                        alignment:'right',
                        body: [
                            [
                                ' ',
                                { text: 'Номер документа', alignment:'center', rowSpan: 2 },
                                { text: 'Дата составления', alignment:'center', rowSpan: 2 },  '',
                                { text: 'Отчетный период', alignment:'center', colSpan: 2 }, ' '
                            ],
                            [
                                ' ','','','',{ text: 'с', alignment:'center' }, { text: 'по', alignment:'center' }
                            ],
                            [
                                ' ',
                                { text: documentNumber, alignment:'center' },
                                { text: documentGenerationDate, alignment:'center' },  '',
                                { text: documentPeriodStart, alignment:'center' },
                                { text: documentPeriodEnd, alignment:'center' }
                            ]
                        ]
                    },
                    layout: stdLayout
                },
                {
                    text: 'ТАБЕЛЬ\nучета рабочего времени\nи  расчета оплаты труда\nУСЛОВНЫЕ ОБОЗНАЧЕНИЯ',
                    alignment:'center',
                    fontSize:10,
                    margin: [-25, -37],
                },
                //20 x 6
                {
                    fontSize:7,
                    margin:[-25, 47],
                    table: {
                        //widths: ['*', 100, 100],
                        borderLines: [
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1],
                            [0,1,1,0,1,1]
                        ],
                        borderCols: [
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1],
                            [0,1,1,1,1,1,1]
                        ],
                        headerRows: 0,
                        widths: [280,12, 12,'*',12, 12],
                        body: [
                            [
                                '',{ text: 'Код', alignment:'center', colSpan: 2 },'','',{ text: 'Код', alignment:'center', colSpan: 2 },''

                            ],
                            [
                                '',{ text: 'букв', alignment:'center'},{ text: 'цифр', alignment:'center'},'',{ text: 'букв', alignment:'center'},{ text: 'цифр', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '01', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '19', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в ночное время',{ text: 'Н', alignment:'center'},{ text: '02', alignment:'center'},
                                'Временная нетрудоспособность без назначения пособия в случаях, предусмотренных законодательством',{ text: 'Т', alignment:'center'},{ text: '20', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в выходные и нерабочие, праздничные дни',{ text: 'РВ', alignment:'center'},{ text: '03', alignment:'center'},
                                'Сокращенная продолжительность рабочего времени против нормальной продолжительности рабочего дня в случаях, предусмотренных законодательством',{ text: 'ЛЧ', alignment:'center'},{ text: '21', alignment:'center'}

                            ],
                            [
                                'Продолжительность сверхурочной работы',{ text: 'С', alignment:'center'},{ text: '04', alignment:'center'},
                                'Время вынужденного прогула в случае признания увольнения, перевода на другую работу или отстранения от работы незаконными с восстановлением на прежней работе',{ text: 'ПВ', alignment:'center'},{ text: '22', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы вахтовым методом',{ text: 'ВМ', alignment:'center'},{ text: '05', alignment:'center'},
                                'Невыходы на время исполнения государственных или общественных обязанностей согласно законодательству',{ text: 'Г', alignment:'center'},{ text: '23', alignment:'center'}

                            ],
                            [
                                'Служебная командировка',{ text: 'К', alignment:'center'},{ text: '06', alignment:'center'},
                                'Прогулы (отсутствие на рабочем месте без уважительной причины в течение времени, установленного законодательством)',{ text: 'ПР', alignment:'center'},{ text: '24', alignment:'center'}

                            ],
                            [
                                'Повышение квалификации с отрывом от работы',{ text: 'ПК', alignment:'center'},{ text: '07', alignment:'center'},
                                'Продолжительность работы в режиме неполного рабочего времени по инициативе работодателя в случаях, предусмотренных законодательством',{ text: 'НС', alignment:'center'},{ text: '25', alignment:'center'}

                            ],
                            [
                                'Повышение квалификации с отрывом от работы в другой местности',{ text: 'ПМ', alignment:'center'},{ text: '08', alignment:'center'},
                                'Выходные дни (еженедельный отпуск) и нерабочие праздничные дни',{ text: 'В', alignment:'center'},{ text: '26', alignment:'center'}

                            ],
                            [
                                'Ежегодный основной оплачиваемый отпуск',{ text: 'ОТ', alignment:'center'},{ text: '09', alignment:'center'},
                                'Дополнительные выходные дни (оплачиваемые)',{ text: 'ОВ', alignment:'center'},{ text: '27', alignment:'center'}

                            ],
                            [
                                'Ежегодный дополнительный оплачиваемый отпуск',{ text: 'ОД', alignment:'center'},{ text: '10', alignment:'center'},
                                'Дополнительные выходные дни (без сохранения заработной платы)',{ text: 'НВ', alignment:'center'},{ text: '28', alignment:'center'}

                            ],
                            [
                                'Дополнительный отпуск в связи с обучением с сохранением среднего заработка работникам, совмещающим работу с обучениемя',{ text: 'У', alignment:'center'},{ text: '11', alignment:'center'},
                                'Забастовка (при условиях и в порядке, предусмотренных законом)',{ text: 'ЗБ', alignment:'center'},{ text: '29', alignment:'center'}

                            ],
                            [
                                'Сокращенная продолжительность рабочего времени для обучающихся без отрыва от производства с частичным сохранением заработной платы',{ text: 'УВ', alignment:'center'},{ text: '12', alignment:'center'},
                                'Неявки по невыясненным причинам (до выяснения обстоятельств)',{ text: 'НН', alignment:'center'},{ text: '30', alignment:'center'}

                            ],
                            [
                                'Дополнительный отпуск, в связи с обучением без сохранения заработной платы',{ text: 'УД', alignment:'center'},{ text: '13', alignment:'center'},
                                'Время простоя по вине работодателя',{ text: 'РП', alignment:'center'},{ text: '31', alignment:'center'}

                            ],
                            [
                                'Отпуск по беременности и родам (отпуск в связи с усыновлением новорожденного ребенка)',{ text: 'Р', alignment:'center'},{ text: '14', alignment:'center'},
                                'Время простоя по причинам, не зависящим от работодателя и работника',{ text: 'НП', alignment:'center'},{ text: '32', alignment:'center'}

                            ],
                            [
                                'Отпуск по уходу за ребенком до достижения им возраста трех лет',{ text: 'ОЖ', alignment:'center'},{ text: '15', alignment:'center'},
                                'Время простоя по вине работника',{ text: 'БП', alignment:'center'},{ text: '33', alignment:'center'}

                            ],
                            [
                                'Отпуск без сохранения заработной платы, предоставленный работнику по разрешению работодателя',{ text: 'ДО', alignment:'center'},{ text: '16', alignment:'center'},
                                'Отстранение от работы (недопущение к работе) с оплатой (пособием) в соответствии с законодательством',{ text: 'НО', alignment:'center'},{ text: '34', alignment:'center'}

                            ],
                            [
                                'Отпуск без сохранения заработной платы в случаях, предусмотренных законодательством',{ text: 'ОЗ', alignment:'center'},{ text: '17', alignment:'center'},
                                'Отстранение от работы (недопущение к работе) по причинам, предусмотренным законодательством, без начисления заработной платы',{ text: 'НБ', alignment:'center'},{ text: '35', alignment:'center'}

                            ],
                            [
                                'Ежегодный дополнительный отпуск без сохранения заработной платы',{ text: 'ДБ', alignment:'center'},{ text: '18', alignment:'center'},
                                'Время приостановки работы в случае задержки выплаты заработной платы',{ text: 'НЗ', alignment:'center'},{ text: '36', alignment:'center'}
                            ],

                        ]
                    },
                    layout: stdLayout
                },
                {
                    //margin: [-25, -25],
                    text: '1. Учёт рабочего времени',
                    fontSize:10,
                    margin: [-25, 0]
                },
                {
                    text: '2-я страница формы № Т-12', style: 'topRightHeader', margin: [-25, -10]
                },
                //46 - 4
                {
                    margin: [-25, 12],
                    fontSize: 5,
                    alignment: 'center',
                    bold: false,
                    table: {
                        headerRows: 5,
                        widths: [15,70,15,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,18,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,18,13,20,20,20,20,20,20,20,20,20],
                        body: timecardTableBody
                    },
                    layout: {
                        hLineWidth: function(i, node) {
                            //console.log('get width');
                            return 0.2;//(i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function(i, node) {
                            return 0.2;//(i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        paddingLeft: function(i, node) { return 1; },
                        paddingRight: function(i, node) { return 1; },
                        paddingTop: function(i, node) { return 1; },
                        paddingBottom: function(i, node) { return 1; }
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                topRightHeader: {
                    fontSize: 9,
                    alignment: 'right'
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            },
            defaultStyle: {
                fontSize: 9,
                //font: 'Tahoma'
                // alignment: 'justify'
            }
        };

        //
        pdfMake.createPdf(dd).print();
        //pdfMake.createPdf(dd).download('optionalName.pdf');
    }
}
