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
                    text: '	ТАБЕЛЬ\nучета рабочего времени\nи  расчета оплаты труда\nУСЛОВНЫЕ ОБОЗНАЧЕНИЯ',
                    alignment:'center',
                    fontSize:12,
                    margin: [0, -40],
                },
                //20 x 6
                {
                    fontSize:7,
                    margin:[0, 40],
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
                        widths: ['*',50, 50,'*',50, 50],
                        body: [
                            [
                                '',{ text: 'Код', alignment:'center', colSpan: 2 },'','',{ text: 'Код', alignment:'center', colSpan: 2 },''

                            ],
                            [
                                '',{ text: 'буквенный', alignment:'center'},{ text: 'цифровой', alignment:'center'},'',{ text: 'буквенный', alignment:'center'},{ text: 'цифровой', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '01', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '19', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в ночное время',{ text: 'Я', alignment:'center'},{ text: '02', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '20', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Н', alignment:'center'},{ text: '03', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '21', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '04', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '22', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '05', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '23', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '06', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '24', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '07', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '25', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '08', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '26', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '09', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '27', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '10', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '28', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '11', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '29', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '121', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '30', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '13', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '31', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '14', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '32', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '15', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '33', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '16', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '34', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '17', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '35', alignment:'center'}

                            ],
                            [
                                'Продолжительность работы в дневное время',{ text: 'Я', alignment:'center'},{ text: '18', alignment:'center'},
                                'Временная нетрудоспособность (кроме случаев, предусмотренных кодом «Т») с назначением пособия согласно законодательству',{ text: 'Б', alignment:'center'},{ text: '36', alignment:'center'}

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
