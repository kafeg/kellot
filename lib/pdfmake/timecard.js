if (Meteor.isClient) {

    pdfmakeT12 = function() {
        console.log('make t12');

        //pdfMake.fonts = {
        //    Tahoma: {
        //        normal: 'tahoma.ttf',
        //        bold: 'tahoma.ttf',
        //        italics: 'tahoma.ttf',
        //        bolditalics: 'tahoma.ttf'
        //    }
        //};

// playground requires you to assign document definition to a variable called dd

        var organizationName = ' Forsk.ru ';
        var structuralSubdivision = ' Отдел программного обеспечения ';
        var documentNumber = '00001';
        var documentGenerationDate = '27.01.2015';
        var documentPeriodStart = '01.01.2015';
        var documentPeriodEnd = '27.01.2015';

        var dd = {
            pageOrientation: 'landscape',
            content: [
                { text: 'Унифицированная форма № Т-12\nУтверждена постановлением Госкомстата РФ от 5 января 2004 г. № 1', style: 'topRightHeader' },
                {
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
                    }
                },
                {
                    margin: [0, -5],
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
                    }
                },
                {
                    text: 'ТАБЕЛЬ\nучета рабочего времени\nи  расчета оплаты труда\nУСЛОВНЫЕ ОБОЗНАЧЕНИЯ',
                    alignment:'center',
                    fontSize:10,
                    margin: [0, -40],
                },
                //20 x 6
                {
                    fontSize:7,
                    margin:[0, 47],
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
                fontSize: 9
                //font: 'Tahoma'
                // alignment: 'justify'
            }
        };

        //
        pdfMake.createPdf(dd).print();
        //pdfMake.createPdf(dd).download('optionalName.pdf');
    }
}
