import {Injectable} from '@angular/core';
@Injectable()
export class ReportDataService {
    private data = [
        {plus:true,content:"一、营业收入(填写A101010\\101020\\103000)",comment:"填报纳税人主要经营业务和其他经营业务取得的收入总额。本行根据“主营业务收入”和“其他业务收入”的数额填报。一般企业纳税人通过《一般企业收入明细表》（A101010）填报；金融企业纳税人通过《金融企业收入明细表》(A101020)填报；事业单位、社会团体、民办非企业单位、非营利组织等纳税人通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。"},
        {plus:true,content:"    减：营业成本(填写A102010\\102020\\103000)",comment:"填报纳税人主要经营业务和其他经营业务发生的成本总额。本行根据“主营业务成本”和“其他业务成本”的数额填报。一般企业纳税人通过《一般企业成本支出明细表》(A102010)填报；金融企业纳税人通过《金融企业支出明细表》(A102020)填报；事业单位、社会团体、民办非企业单位、非营利组织等纳税人，通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。"},
        {content:"        营业税金及附加",comment:"填报纳税人经营活动发生的营业税、消费税、城市维护建设税、资源税、土地增值税和教育费附加等相关税费。本行根据纳税人相关会计科目填报。纳税人在其他会计科目核算的本行不得重复填报。"},
        {plus:true,content:"        销售费用(填写A104000)",comment:"填报纳税人在销售商品和材料、提供劳务的过程中发生的各种费用。本行通过《期间费用明细表》（A104000）中对应的“销售费用”填报。"},
        {plus:true,content:"        管理费用(填写A104000)",comment:"填报纳税人为组织和管理企业生产经营发生的管理费用。本行通过《期间费用明细表》（A104000）中对应的“管理费用”填报。"},
        {plus:true,content:"        财务费用(填写A104000)",comment:"填报纳税人为筹集生产经营所需资金等发生的筹资费用。本行通过《期间费用明细表》（A104000）中对应的“财务费用”填报。"},
        {content:"        资产减值损失",comment:"填报纳税人计提各项资产准备发生的减值损失。本行根据企业“资产减值损失”科目上的数额填报。实行其他会计准则等的比照填报。"},
        {content:"    加：公允价值变动收益",comment:"填报纳税人在初始确认时划分为以公允价值计量且其变动计入当期损益的金融资产或金融负债（包括交易性金融资产或负债，直接指定为以公允价值计量且其变动计入当期损益的金融资产或金融负债），以及采用公允价值模式计量的投资性房地产、衍生工具和套期业务中公允价值变动形成的应计入当期损益的利得或损失。本行根据企业“公允价值变动损益”科目的数额填报。（损失以“-”号填列）"},
        {content:"        投资收益",comment:"填报纳税人以各种方式对外投资确认所取得的收益或发生的损失。根据企业“投资收益”科目的数额计算填报；实行事业单位会计准则的纳税人根据“其他收入”科目中的投资收益金额分析填报（损失以“-”号填列）。实行其他会计准则等的比照填报。"},
        {content:"二、营业利润(1-2-3-4-5-6-7+8+9)",comment:"填报纳税人当期的营业利润。根据上述项目计算填列。"},
        {plus:true,content:"    加：营业外收入(填写A101010\\101020\\103000)",comment:"填报纳税人取得的与其经营活动无直接关系的各项收入的金额。一般企业纳税人通过《一般企业收入明细表》（A101010）填报；金融企业纳税人通过《金融企业收入明细表》(A101020)填报；实行事业单位会计准则或民间非营利组织会计制度的纳税人通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。"},
        {plus:true,content:"    减：营业外支出(填写A102010\\102020\\103000)",comment:"填报纳税人发生的与其经营活动无直接关系的各项支出的金额。一般企业纳税人通过《一般企业成本支出明细表》(A102010)填报；金融企业纳税人通过《金融企业支出明细表》(A102020)填报；实行事业单位会计准则或民间非营利组织会计制度的纳税人通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。"},
        {content:"三、利润总额（10+11-12）",comment:"填报纳税人当期的利润总额。根据上述项目计算填列。"},
        {plus:true,content:"    减：境外所得（填写A108010）",comment:"填报纳税人发生的分国（地区）别取得的境外税后所得计入利润总额的金额。填报《境外所得纳税调整后所得明细表》(A108010)第14列减去第11列的差额。"},
        {plus:true,content:"    加：纳税调整增加额（填写A105000）",comment:"填报纳税人会计处理与税收规定不一致，进行纳税调整增加的金额。本行通过《纳税调整项目明细表》（A105000）“调增金额”列填报。"},
        {plus:true,content:"    减：纳税调整减少额（填写A105000）",comment:"填报纳税人会计处理与税收规定不一致，进行纳税调整减少的金额。本行通过《纳税调整项目明细表》（A105000）“调减金额”列填报。"},
        {plus:true,content:"    减：免税、减计收入及加计扣除（填写A107010）",comment:"填报属于税法规定免税收入、减计收入、加计扣除金额。本行通过《免税、减计收入及加计扣除优惠明细表》（A107010）填报。"},
        {plus:true,content:"    加：境外应税所得抵减境内亏损（填写A108000）",comment:"填报纳税人根据税法规定，选择用境外所得抵减境内亏损的数额。本行通过《境外所得税收抵免明细表》（A108000）填报。"},
        {content:"四、纳税调整后所得（13-14+15-16-17+18）",comment:"填报纳税人经过纳税调整、税收优惠、境外所得计算后的所得额。"},
        {plus:true,content:"    减：所得减免（填写A107020）",comment:"填报属于税法规定所得减免金额。本行通过《所得减免优惠明细表》(A107020)填报，本行＜0时，填写负数。"},
        {plus:true,content:"    减：抵扣应纳税所得额（填写A107030）",comment:"填报根据税法规定应抵扣的应纳税所得额。本行通过《抵扣应纳税所得额明细表》（A107030）填报。"},
        {plus:true,content:"    减：弥补以前年度亏损（填写A106000）",comment:"填报纳税人按照税法规定可在税前弥补的以前年度亏损的数额，本行根据《企业所得税弥补亏损明细表》（A106000）填报。"},
        {content:"五、应纳税所得额（19-20-21-22）",comment:"金额等于本表第19-20-21-22行计算结果。本行不得为负数。本表第19行或者按照上述行次顺序计算结果本行为负数，本行金额填零。"},
        {content:"    税率（25%）",comment:"填报税法规定的税率25%。"},
        {content:"六、应纳所得税额（23×24）",comment:"金额等于本表第23×24行"},
        {plus:true,content:"    减：减免所得税额（填写A107040）",comment:"填报纳税人按税法规定实际减免的企业所得税额。本行通过《减免所得税优惠明细表》（A107040）填报。"},
        {plus:true,content:"    减：抵免所得税额（填写A107050）",comment:"填报企业当年的应纳所得税额中抵免的金额。本行通过《税额抵免优惠明细表》（A107050）填报。"},
        {content:"七、应纳税额（25-26-27）",comment:"金额等于本表第25-26-27行。"},
        {plus:true,content:"    加：境外所得应纳所得税额（填写A108000）",comment:"填报纳税人来源于中国境外的所得，按照我国税法规定计算的应纳所得税额。本行通过《境外所得税收抵免明细表》（A108000）填报。"},
        {plus:true,content:"    减：境外所得抵免所得税额（填写A108000）",comment:"填报纳税人来源于中国境外所得依照中国境外税收法律以及相关规定应缴纳并实际缴纳（包括视同已实际缴纳）的企业所得税性质的税款（准予抵免税款）。本行通过《境外所得税收抵免明细表》（A108000）填报。"},
        {content:"八、实际应纳所得税额（28+29-30）",comment:"填报纳税人当期的实际应纳所得税额。金额等于本表第28+29-30行。"},
        {content:"    减：本年累计实际已预缴的所得税额",comment:"填报纳税人按照税法规定本纳税年度已在月（季）度累计预缴的所得税额，包括按照税法规定的特定业务已预缴（征）的所得税额，建筑企业总机构直接管理的跨地区设立的项目部按规定向项目所在地主管税务机关预缴的所得税额。"},
        {content:"九、本年应补（退）所得税额（31-32）",comment:"填报纳税人当期应补（退）的所得税额。金额等于本表第31-32行。"},
        {plus:true,content:"    其中：总机构分摊本年应补（退）所得税额(填写A109000)",comment:"填报汇总纳税的总机构按照税收规定在总机构所在地分摊本年应补（退）所得税款。本行根据《跨地区经营汇总纳税企业年度分摊企业所得税明细表》（A109000）填报。"},
        {plus:true,content:"          财政集中分配本年应补（退）所得税额（填写A109000）",comment:"填报汇总纳税的总机构按照税收规定财政集中分配本年应补（退）所得税款。本行根据《跨地区经营汇总纳税企业年度分摊企业所得税明细表》（A109000）填报。"},
        {plus:true,content:"          总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)",comment:"填报汇总纳税的总机构所属的具有主体生产经营职能的部门按照税收规定应分摊的本年应补（退）所得税额。本行根据《跨地区经营汇总纳税企业年度分摊企业所得税明细表》（A109000）填报。"},
        {content:"以前年度多缴的所得税额在本年抵减额",comment:"填报纳税人以前纳税年度汇算清缴多缴的税款尚未办理退税、并在本纳税年度抵缴的所得税额。"},
        {content:"以前年度应缴未缴在本年入库所得税额",comment:"填报纳税人以前纳税年度应缴未缴在本纳税年度入库所得税额。"}
    ]
    private cata = [
        {name:"利润总额计算",span:13},
        {name:"应纳税所得额计算",span:10},
        {name:"应纳税额计算",span:13},
        {name:"附列资料",span:2}
    ]
    private response = {"header":{"statusCode":"200"},"body":{"K_KMQC":"应交税费","balanceList_json":[{"K_KJND":2016,"children_json":[{"K_KJND":2016,"K_KMQC":"应交税费_应交增值税（一般纳税人）_进项税额","K_KMMC":"进项税额","BNLJFSE_DF":0,"K_ZTDM":"1459916658781","K_KMBM":"22210701","BNLJFSE_JF":136923.2,"K_KMNM":"222100010001"},{"K_KJND":2016,"K_KMQC":"应交税费_应交增值税（一般纳税人）_销项税额","K_KMMC":"销项税额","BNLJFSE_DF":154176.9,"K_ZTDM":"1459916658781","K_KMBM":"22210704","BNLJFSE_JF":0,"K_KMNM":"222100010002"},{"K_KJND":2016,"K_KMQC":"应交税费_应交增值税（一般纳税人）_转出未交增值税","K_KMMC":"转出未交增值税","BNLJFSE_DF":0,"K_ZTDM":"1459916658781","K_KMBM":"22210705","BNLJFSE_JF":17253.7,"K_KMNM":"222100010007"},{"K_KJND":2016,"K_KMQC":"应交税费_应交增值税（一般纳税人）_减免税款","K_KMMC":"减免税款","BNLJFSE_DF":0,"K_ZTDM":"1459916658781","K_KMBM":"22210702","BNLJFSE_JF":0,"K_KMNM":"222100019001"}],"K_KMQC":"应交税费_应交增值税（一般纳税人）","K_KMMC":"应交增值税（一般纳税人）","BNLJFSE_DF":154176.9,"K_ZTDM":"1459916658781","K_KMBM":"222107","BNLJFSE_JF":154176.9,"K_KMNM":"22210001"},{"K_KJND":2016,"K_KMQC":"应交税费_应交城市维护建设税","K_KMMC":"应交城市维护建设税","BNLJFSE_DF":862.69,"K_ZTDM":"1459916658781","K_KMBM":"222109","BNLJFSE_JF":1514.54,"K_KMNM":"22210006"},{"K_KJND":2016,"K_KMQC":"应交税费_应交教育费附加","K_KMMC":"应交教育费附加","BNLJFSE_DF":517.61,"K_ZTDM":"1459916658781","K_KMBM":"222111","BNLJFSE_JF":908.72,"K_KMNM":"22210007"},{"K_KJND":2016,"K_KMQC":"应交税费_应交地方教育费附加","K_KMMC":"应交地方教育费附加","BNLJFSE_DF":345.07,"K_ZTDM":"1459916658781","K_KMBM":"222112","BNLJFSE_JF":605.82,"K_KMNM":"22210008"},{"K_KJND":2016,"K_KMQC":"应交税费_未交增值税","K_KMMC":"未交增值税","BNLJFSE_DF":17253.7,"K_ZTDM":"1459916658781","K_KMBM":"222108","BNLJFSE_JF":30290.8,"K_KMNM":"22210015"},{"K_KJND":2016,"K_KMQC":"应交税费_应交河道费","K_KMMC":"应交河道费","BNLJFSE_DF":172.54,"K_ZTDM":"1459916658781","K_KMBM":"222110","BNLJFSE_JF":302.91,"K_KMNM":"22210022"}],"K_KMMC":"应交税费"}};
    private data2 = 
        {
          "version": "10.2.0",
          "tabStripRatio": 0.6,
          "sheetCount": 3,
          "sheets": {
            "Sheet1": {
              "name": "Sheet1",
              "defaults": {
                "colHeaderRowHeight": 20,
                "rowHeaderColWidth": 40,
                "rowHeight": 18,
                "colWidth": 72
              },
              "rowCount": 47,
              "columnCount": 7,
              "activeRow": 2,
              "activeCol": 4,
              "spans": [
                {
                  "row": 40,
                  "rowCount": 2,
                  "col": 1,
                  "colCount": 1
                },
                {
                  "row": 0,
                  "rowCount": 1,
                  "col": 0,
                  "colCount": 4
                },
                {
                  "row": 1,
                  "rowCount": 1,
                  "col": 0,
                  "colCount": 4
                },
                {
                  "row": 3,
                  "rowCount": 13,
                  "col": 1,
                  "colCount": 1
                },
                {
                  "row": 16,
                  "rowCount": 10,
                  "col": 1,
                  "colCount": 1
                },
                {
                  "row": 26,
                  "rowCount": 14,
                  "col": 1,
                  "colCount": 1
                },
                {
                  "row": 38,
                  "rowCount": 2,
                  "col": 0,
                  "colCount": 1
                },
                {
                  "row": 38,
                  "rowCount": 2,
                  "col": 2,
                  "colCount": 1
                },
                {
                  "row": 38,
                  "rowCount": 2,
                  "col": 3,
                  "colCount": 1
                }
              ],
              "data": {
                "dataTable": {
                  "0": {
                    "0": {
                      "value": "A100000",
                      "style": "__builtInStyle6"
                    },
                    "1": {
                      "style": "__builtInStyle6"
                    },
                    "2": {
                      "style": "__builtInStyle6"
                    },
                    "3": {
                      "style": "__builtInStyle7"
                    },
                    "4": {
                      "value": "返回",
                      "style": "__builtInStyle8"
                    }
                  },
                  "1": {
                    "0": {
                      "value": "中华人民共和国企业所得税年度纳税申报表（A类）",
                      "style": "__builtInStyle9"
                    },
                    "1": {
                      "style": "__builtInStyle9"
                    },
                    "2": {
                      "style": "__builtInStyle9"
                    },
                    "3": {
                      "style": "__builtInStyle10"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "2": {
                    "0": {
                      "value": "行次",
                      "style": "__builtInStyle12"
                    },
                    "1": {
                      "value": "类别",
                      "style": "__builtInStyle13"
                    },
                    "2": {
                      "value": "项        目",
                      "style": "__builtInStyle12"
                    },
                    "3": {
                      "value": "金    额",
                      "style": "__builtInStyle12"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "3": {
                    "0": {
                      "value": 1,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "value": "利润总额计算",
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "一、营业收入(填写A101010\\101020\\103000)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "MAX('[1]A101010一般企业收入明细表'!C4,'[1]A101020金融企业收入明细表 '!C4,SUM('[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C5:C9),SUM('[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C14:C18))"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "4": {
                    "0": {
                      "value": 2,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "    减：营业成本(填写A102010\\102020\\103000)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "MAX('[1]A102010一般企业成本支出明细表'!C4,'[1]A102020金融企业支出明细表'!C4,SUM('[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C22:C25),SUM('[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C28:C30))"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "5": {
                    "0": {
                      "value": 3,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "        营业税金及附加",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "style": "__builtInStyle25"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "6": {
                    "0": {
                      "value": 4,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "        销售费用(填写A104000)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A104000期间费用明细表'!C30"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "7": {
                    "0": {
                      "value": 5,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "        管理费用(填写A104000)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle26",
                      "formula": "'[1]A104000期间费用明细表'!E30"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "8": {
                    "0": {
                      "value": 6,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "        财务费用(填写A104000)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A104000期间费用明细表'!G30"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "9": {
                    "0": {
                      "value": 7,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "        资产减值损失",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "style": "__builtInStyle17"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "10": {
                    "0": {
                      "value": 8,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "    加：公允价值变动收益",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "style": "__builtInStyle27"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "11": {
                    "0": {
                      "value": 9,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "        投资收益",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "style": "__builtInStyle27"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "12": {
                    "0": {
                      "value": 10,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "二、营业利润(1-2-3-4-5-6-7+8+9)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D4-D5-D6-D7-D8-D9-D10+D11+D12"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "13": {
                    "0": {
                      "value": 11,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "    加：营业外收入(填写A101010\\101020\\103000)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "MAX('[1]A101010一般企业收入明细表'!C19,'[1]A101020金融企业收入明细表 '!C38,'[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C12,'[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C20)"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "14": {
                    "0": {
                      "value": 12,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "    减：营业外支出(填写A102010\\102020\\103000)",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "MAX('[1]A102010一般企业成本支出明细表'!C19,'[1]A102020金融企业支出明细表'!C36,'[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C26,'[1]A103000事业单位、民间非营利组织收入、支出明细表 '!C31)"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "15": {
                    "0": {
                      "value": 13,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle15"
                    },
                    "2": {
                      "value": "三、利润总额（10+11-12）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D13+D14-D15"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "16": {
                    "0": {
                      "value": 14,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "value": "应纳税所得额计算",
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：境外所得（填写A108010）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A108010境外所得纳税调整后所得明细表'!O23-'[1]A108010境外所得纳税调整后所得明细表'!L23"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "17": {
                    "0": {
                      "value": 15,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    加：纳税调整增加额（填写A105000）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A105000纳税调整项目明细表'!E49"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "18": {
                    "0": {
                      "value": 16,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：纳税调整减少额（填写A105000）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A105000纳税调整项目明细表'!F49"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "19": {
                    "0": {
                      "value": 17,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：免税、减计收入及加计扣除（填写A107010）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A107010免税、减计收入及加计扣除优惠明细表'!C32"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "20": {
                    "0": {
                      "value": 18,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    加：境外应税所得抵减境内亏损（填写A108000）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "IF(D16-D17+D18-D19-D20>=0,0,'[1]A108000境外所得税收抵免明细表'!G22)"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "21": {
                    "0": {
                      "value": 19,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "四、纳税调整后所得（13-14+15-16-17+18）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D16-D17+D18-D19-D20+D21"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "22": {
                    "0": {
                      "value": 20,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：所得减免（填写A107020）",
                      "style": "__builtInStyle19"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A107020所得减免优惠明细表'!I48"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "23": {
                    "0": {
                      "value": 21,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：抵扣应纳税所得额（填写A107030）",
                      "style": "__builtInStyle19"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A107030抵扣应纳税所得额明细表'!C10"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "24": {
                    "0": {
                      "value": 22,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：弥补以前年度亏损（填写A106000）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle20",
                      "formula": "'[1]A106000企业所得税弥补亏损明细表'!L13"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "25": {
                    "0": {
                      "value": 23,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "五、应纳税所得额（19-20-21-22）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D22-D23-D24-D25"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "26": {
                    "0": {
                      "value": 24,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "value": "应纳税额计算",
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    税率（25%）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": 0.25,
                      "style": "__builtInStyle28"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "27": {
                    "0": {
                      "value": 25,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "六、应纳所得税额（23×24）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D26*D27"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "28": {
                    "0": {
                      "value": 26,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：减免所得税额（填写A107040）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A107040减免所得税优惠明细表'!C34"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "29": {
                    "0": {
                      "value": 27,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：抵免所得税额（填写A107050）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A107050税额抵免优惠明细表'!M15"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "30": {
                    "0": {
                      "value": 28,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "七、应纳税额（25-26-27）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D28-D29-D30"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "31": {
                    "0": {
                      "value": 29,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    加：境外所得应纳所得税额（填写A108000）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A108000境外所得税收抵免明细表'!J22"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "32": {
                    "0": {
                      "value": 30,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：境外所得抵免所得税额（填写A108000）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A108000境外所得税收抵免明细表'!T22"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "33": {
                    "0": {
                      "value": 31,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "八、实际应纳所得税额（28+29-30）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D31+D32-D33"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "34": {
                    "0": {
                      "value": 32,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    减：本年累计实际已预缴的所得税额",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "style": "__builtInStyle27"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "35": {
                    "0": {
                      "value": 33,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "九、本年应补（退）所得税额（31-32）",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#VALUE!",
                        "_code": 15
                      },
                      "style": "__builtInStyle24",
                      "formula": "D34-D35"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "36": {
                    "0": {
                      "value": 34,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "    其中：总机构分摊本年应补（退）所得税额(填写A109000)",
                      "style": "__builtInStyle21"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A109000跨地区经营汇总纳税企业年度分摊企业所得税明细表'!C15+'[1]A109000跨地区经营汇总纳税企业年度分摊企业所得税明细表'!C19"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "37": {
                    "0": {
                      "value": 35,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "          财政集中分配本年应补（退）所得税额（填写A109000）",
                      "style": "__builtInStyle21"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle24",
                      "formula": "'[1]A109000跨地区经营汇总纳税企业年度分摊企业所得税明细表'!C16"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "38": {
                    "0": {
                      "value": 36,
                      "style": "__builtInStyle22"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "          总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)",
                      "style": "__builtInStyle23"
                    },
                    "3": {
                      "value": {
                        "_calcError": "#REF!",
                        "_code": 23
                      },
                      "style": "__builtInStyle29",
                      "formula": "'[1]A109000跨地区经营汇总纳税企业年度分摊企业所得税明细表'!C18"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "39": {
                    "0": {
                      "style": "__builtInStyle22"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "style": "__builtInStyle23"
                    },
                    "3": {
                      "style": "__builtInStyle29"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "40": {
                    "0": {
                      "value": 37,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "value": "附列资料",
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "以前年度多缴的所得税额在本年抵减额",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": 0,
                      "style": "__builtInStyle27"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  },
                  "41": {
                    "0": {
                      "value": 38,
                      "style": "__builtInStyle14"
                    },
                    "1": {
                      "style": "__builtInStyle18"
                    },
                    "2": {
                      "value": "以前年度应缴未缴在本年入库所得税额",
                      "style": "__builtInStyle16"
                    },
                    "3": {
                      "value": 0,
                      "style": "__builtInStyle27"
                    },
                    "4": {
                      "style": "__builtInStyle11"
                    }
                  }
                },
                "columnDataArray": [
                  null,
                  null,
                  {
                    "style": "__builtInStyle5"
                  }
                ],
                "defaultDataNode": {
                  "style": {
                    "backColor": null,
                    "foreColor": "Text 1 0",
                    "vAlign": 1,
                    "font": "14.7px Calibri",
                    "themeFont": "Body",
                    "borderLeft": {},
                    "borderTop": {},
                    "borderRight": {},
                    "borderBottom": {},
                    "locked": true,
                    "textIndent": 0,
                    "wordWrap": false
                  }
                }
              },
              "rowHeaderData": {
                "defaultDataNode": {
                  "style": {
                    "themeFont": "Body"
                  }
                }
              },
              "colHeaderData": {
                "defaultDataNode": {
                  "style": {
                    "themeFont": "Body"
                  }
                }
              },
              "selections": {
                "0": {
                  "row": 2,
                  "rowCount": 1,
                  "col": 4,
                  "colCount": 1
                },
                "length": 1
              },
              "theme": {
                "name": "Office",
                "themeColor": {
                  "name": "Office",
                  "background1": {
                    "a": 255,
                    "r": 255,
                    "g": 255,
                    "b": 255
                  },
                  "background2": {
                    "a": 255,
                    "r": 238,
                    "g": 236,
                    "b": 225
                  },
                  "text1": {
                    "a": 255,
                    "r": 0,
                    "g": 0,
                    "b": 0
                  },
                  "text2": {
                    "a": 255,
                    "r": 31,
                    "g": 73,
                    "b": 125
                  },
                  "accent1": {
                    "a": 255,
                    "r": 79,
                    "g": 129,
                    "b": 189
                  },
                  "accent2": {
                    "a": 255,
                    "r": 192,
                    "g": 80,
                    "b": 77
                  },
                  "accent3": {
                    "a": 255,
                    "r": 155,
                    "g": 187,
                    "b": 89
                  },
                  "accent4": {
                    "a": 255,
                    "r": 128,
                    "g": 100,
                    "b": 162
                  },
                  "accent5": {
                    "a": 255,
                    "r": 75,
                    "g": 172,
                    "b": 198
                  },
                  "accent6": {
                    "a": 255,
                    "r": 247,
                    "g": 150,
                    "b": 70
                  },
                  "hyperlink": {
                    "a": 255,
                    "r": 0,
                    "g": 0,
                    "b": 255
                  },
                  "followedHyperlink": {
                    "a": 255,
                    "r": 128,
                    "g": 0,
                    "b": 128
                  }
                },
                "headingFont": "Cambria",
                "bodyFont": "Calibri"
              },
              "rows": [
                {
                  "size": 19
                },
                {
                  "size": 25
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 96
                },
                {
                  "size": 96
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                },
                {
                  "size": 18
                }
              ],
              "columns": [
                null,
                null,
                {
                  "size": 313
                }
              ],
              "comments": [
                {
                  "rowIndex": 3,
                  "colIndex": 2,
                  "text": "填报纳税人主要经营业务和其他经营业务取得的收入总额。本行根据“主营业务收入”和“其他业务收入”的数额填报。一般企业纳税人通过《一般企业收入明细表》（A101010）填报；金融企业纳税人通过《金融企业收入明细表》(A101020)填报；事业单位、社会团体、民办非企业单位、非营利组织等纳税人通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 1
                },
                {
                  "rowIndex": 4,
                  "colIndex": 2,
                  "text": "填报纳税人主要经营业务和其他经营业务发生的成本总额。本行根据“主营业务成本”和“其他业务成本”的数额填报。一般企业纳税人通过《一般企业成本支出明细表》(A102010)填报；金融企业纳税人通过《金融企业支出明细表》(A102020)填报；事业单位、社会团体、民办非企业单位、非营利组织等纳税人，通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 2
                },
                {
                  "rowIndex": 5,
                  "colIndex": 2,
                  "text": "填报纳税人经营活动发生的营业税、消费税、城市维护建设税、资源税、土地增值税和教育费附加等相关税费。本行根据纳税人相关会计科目填报。纳税人在其他会计科目核算的本行不得重复填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 3
                },
                {
                  "rowIndex": 6,
                  "colIndex": 2,
                  "text": "填报纳税人在销售商品和材料、提供劳务的过程中发生的各种费用。本行通过《期间费用明细表》（A104000）中对应的“销售费用”填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 4
                },
                {
                  "rowIndex": 7,
                  "colIndex": 2,
                  "text": "填报纳税人为组织和管理企业生产经营发生的管理费用。本行通过《期间费用明细表》（A104000）中对应的“管理费用”填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 5
                },
                {
                  "rowIndex": 8,
                  "colIndex": 2,
                  "text": "填报纳税人为筹集生产经营所需资金等发生的筹资费用。本行通过《期间费用明细表》（A104000）中对应的“财务费用”填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 6
                },
                {
                  "rowIndex": 9,
                  "colIndex": 2,
                  "text": "填报纳税人计提各项资产准备发生的减值损失。本行根据企业“资产减值损失”科目上的数额填报。实行其他会计准则等的比照填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 7
                },
                {
                  "rowIndex": 10,
                  "colIndex": 2,
                  "text": "\r\n填报纳税人在初始确认时划分为以公允价值计量且其变动计入当期损益的金融资产或金融负债（包括交易性金融资产或负债，直接指定为以公允价值计量且其变动计入当期损益的金融资产或金融负债），以及采用公允价值模式计量的投资性房地产、衍生工具和套期业务中公允价值变动形成的应计入当期损益的利得或损失。本行根据企业“公允价值变动损益”科目的数额填报。（损失以“-”号填列）",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 8
                },
                {
                  "rowIndex": 11,
                  "colIndex": 2,
                  "text": "填报纳税人以各种方式对外投资确认所取得的收益或发生的损失。根据企业“投资收益”科目的数额计算填报；实行事业单位会计准则的纳税人根据“其他收入”科目中的投资收益金额分析填报（损失以“-”号填列）。实行其他会计准则等的比照填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 9
                },
                {
                  "rowIndex": 12,
                  "colIndex": 2,
                  "text": "填报纳税人当期的营业利润。根据上述项目计算填列。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 10
                },
                {
                  "rowIndex": 13,
                  "colIndex": 2,
                  "text": "填报纳税人取得的与其经营活动无直接关系的各项收入的金额。一般企业纳税人通过《一般企业收入明细表》（A101010）填报；金融企业纳税人通过《金融企业收入明细表》(A101020)填报；实行事业单位会计准则或民间非营利组织会计制度的纳税人通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 11
                },
                {
                  "rowIndex": 14,
                  "colIndex": 2,
                  "text": "填报纳税人发生的与其经营活动无直接关系的各项支出的金额。一般企业纳税人通过《一般企业成本支出明细表》(A102010)填报；金融企业纳税人通过《金融企业支出明细表》(A102020)填报；实行事业单位会计准则或民间非营利组织会计制度的纳税人通过《事业单位、民间非营利组织收入、支出明细表》(A103000)填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 12
                },
                {
                  "rowIndex": 15,
                  "colIndex": 2,
                  "text": "填报纳税人当期的利润总额。根据上述项目计算填列。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 13
                },
                {
                  "rowIndex": 16,
                  "colIndex": 2,
                  "text": "填报纳税人发生的分国（地区）别取得的境外税后所得计入利润总额的金额。填报《境外所得纳税调整后所得明细表》(A108010)第14列减去第11列的差额。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 14
                },
                {
                  "rowIndex": 17,
                  "colIndex": 2,
                  "text": "填报纳税人会计处理与税收规定不一致，进行纳税调整增加的金额。本行通过《纳税调整项目明细表》（A105000）“调增金额”列填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 15
                },
                {
                  "rowIndex": 18,
                  "colIndex": 2,
                  "text": "填报纳税人会计处理与税收规定不一致，进行纳税调整减少的金额。本行通过《纳税调整项目明细表》（A105000）“调减金额”列填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 16
                },
                {
                  "rowIndex": 19,
                  "colIndex": 2,
                  "text": "填报属于税法规定免税收入、减计收入、加计扣除金额。本行通过《免税、减计收入及加计扣除优惠明细表》（A107010）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 17
                },
                {
                  "rowIndex": 20,
                  "colIndex": 2,
                  "text": "填报纳税人根据税法规定，选择用境外所得抵减境内亏损的数额。本行通过《境外所得税收抵免明细表》（A108000）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 92,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 18
                },
                {
                  "rowIndex": 21,
                  "colIndex": 2,
                  "text": "填报纳税人经过纳税调整、税收优惠、境外所得计算后的所得额。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 91,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 19
                },
                {
                  "rowIndex": 22,
                  "colIndex": 2,
                  "text": "填报属于税法规定所得减免金额。本行通过《所得减免优惠明细表》(A107020)填报，本行＜0时，填写负数。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 90,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 20
                },
                {
                  "rowIndex": 23,
                  "colIndex": 2,
                  "text": "填报根据税法规定应抵扣的应纳税所得额。本行通过《抵扣应纳税所得额明细表》（A107030）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 89,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 21
                },
                {
                  "rowIndex": 24,
                  "colIndex": 2,
                  "text": "填报纳税人按照税法规定可在税前弥补的以前年度亏损的数额，本行根据《企业所得税弥补亏损明细表》（A106000）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 90,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 22
                },
                {
                  "rowIndex": 25,
                  "colIndex": 2,
                  "text": "金额等于本表第19-20-21-22行计算结果。本行不得为负数。本表第19行或者按照上述行次顺序计算结果本行为负数，本行金额填零。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 91,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 23
                },
                {
                  "rowIndex": 26,
                  "colIndex": 2,
                  "text": "\r\n填报税法规定的税率25%。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 92,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 24
                },
                {
                  "rowIndex": 27,
                  "colIndex": 2,
                  "text": "\r\n金额等于本表第23×24行",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 25
                },
                {
                  "rowIndex": 28,
                  "colIndex": 2,
                  "text": "\r\n填报纳税人按税法规定实际减免的企业所得税额。本行通过《减免所得税优惠明细表》（A107040）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 26
                },
                {
                  "rowIndex": 29,
                  "colIndex": 2,
                  "text": "填报企业当年的应纳所得税额中抵免的金额。本行通过《税额抵免优惠明细表》（A107050）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 27
                },
                {
                  "rowIndex": 30,
                  "colIndex": 2,
                  "text": "金额等于本表第25-26-27行。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 28
                },
                {
                  "rowIndex": 31,
                  "colIndex": 2,
                  "text": "填报纳税人来源于中国境外的所得，按照我国税法规定计算的应纳所得税额。本行通过《境外所得税收抵免明细表》（A108000）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 29
                },
                {
                  "rowIndex": 32,
                  "colIndex": 2,
                  "text": "填报纳税人来源于中国境外所得依照中国境外税收法律以及相关规定应缴纳并实际缴纳（包括视同已实际缴纳）的企业所得税性质的税款（准予抵免税款）。本行通过《境外所得税收抵免明细表》（A108000）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 30
                },
                {
                  "rowIndex": 33,
                  "colIndex": 2,
                  "text": "填报纳税人当期的实际应纳所得税额。金额等于本表第28+29-30行。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 31
                },
                {
                  "rowIndex": 34,
                  "colIndex": 2,
                  "text": "填报纳税人按照税法规定本纳税年度已在月（季）度累计预缴的所得税额，包括按照税法规定的特定业务已预缴（征）的所得税额，建筑企业总机构直接管理的跨地区设立的项目部按规定向项目所在地主管税务机关预缴的所得税额。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 32
                },
                {
                  "rowIndex": 35,
                  "colIndex": 2,
                  "text": "填报纳税人当期应补（退）的所得税额。金额等于本表第31-32行。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 33
                },
                {
                  "rowIndex": 36,
                  "colIndex": 2,
                  "text": "填报汇总纳税的总机构按照税收规定在总机构所在地分摊本年应补（退）所得税款。本行根据《跨地区经营汇总纳税企业年度分摊企业所得税明细表》（A109000）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 34
                },
                {
                  "rowIndex": 37,
                  "colIndex": 2,
                  "text": "填报汇总纳税的总机构按照税收规定财政集中分配本年应补（退）所得税款。本行根据《跨地区经营汇总纳税企业年度分摊企业所得税明细表》（A109000）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 35
                },
                {
                  "rowIndex": 38,
                  "colIndex": 2,
                  "text": "填报汇总纳税的总机构所属的具有主体生产经营职能的部门按照税收规定应分摊的本年应补（退）所得税额。本行根据《跨地区经营汇总纳税企业年度分摊企业所得税明细表》（A109000）填报。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 93,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 36
                },
                {
                  "rowIndex": 40,
                  "colIndex": 2,
                  "text": "填报纳税人以前纳税年度汇算清缴多缴的税款尚未办理退税、并在本纳税年度抵缴的所得税额。\r\n",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 104,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 37
                },
                {
                  "rowIndex": 41,
                  "colIndex": 2,
                  "text": "填报纳税人以前纳税年度应缴未缴在本纳税年度入库所得税额。",
                  "location": {
                    "x": 8,
                    "y": -17
                  },
                  "width": 231,
                  "height": 115,
                  "fontFamily": "宋体",
                  "backColor": "#ffffe1",
                  "zIndex": 38
                }
              ],
              "printInfo": {
                "orientation": 2,
                "pageOrder": 1,
                "blackAndWhite": true,
                "paperSize": {
                  "width": 850,
                  "height": 1100,
                  "kind": 1
                }
              },
              "allowCellOverflow": true,
              "index": 0
            },
            "Sheet2": {
              "name": "Sheet2",
              "defaults": {
                "colHeaderRowHeight": 20,
                "rowHeaderColWidth": 40,
                "rowHeight": 18,
                "colWidth": 72
              },
              "rowCount": 1,
              "columnCount": 1,
              "data": {
                "defaultDataNode": {
                  "style": {
                    "backColor": null,
                    "foreColor": "Text 1 0",
                    "vAlign": 1,
                    "font": "14.7px Calibri",
                    "themeFont": "Body",
                    "borderLeft": {},
                    "borderTop": {},
                    "borderRight": {},
                    "borderBottom": {},
                    "locked": true,
                    "textIndent": 0,
                    "wordWrap": false
                  }
                },
                "dataTable": {}
              },
              "selections": {
                "0": {
                  "row": 0,
                  "rowCount": 1,
                  "col": 0,
                  "colCount": 1
                },
                "length": 1
              },
              "theme": {
                "name": "Office",
                "themeColor": {
                  "name": "Office",
                  "background1": {
                    "a": 255,
                    "r": 255,
                    "g": 255,
                    "b": 255
                  },
                  "background2": {
                    "a": 255,
                    "r": 238,
                    "g": 236,
                    "b": 225
                  },
                  "text1": {
                    "a": 255,
                    "r": 0,
                    "g": 0,
                    "b": 0
                  },
                  "text2": {
                    "a": 255,
                    "r": 31,
                    "g": 73,
                    "b": 125
                  },
                  "accent1": {
                    "a": 255,
                    "r": 79,
                    "g": 129,
                    "b": 189
                  },
                  "accent2": {
                    "a": 255,
                    "r": 192,
                    "g": 80,
                    "b": 77
                  },
                  "accent3": {
                    "a": 255,
                    "r": 155,
                    "g": 187,
                    "b": 89
                  },
                  "accent4": {
                    "a": 255,
                    "r": 128,
                    "g": 100,
                    "b": 162
                  },
                  "accent5": {
                    "a": 255,
                    "r": 75,
                    "g": 172,
                    "b": 198
                  },
                  "accent6": {
                    "a": 255,
                    "r": 247,
                    "g": 150,
                    "b": 70
                  },
                  "hyperlink": {
                    "a": 255,
                    "r": 0,
                    "g": 0,
                    "b": 255
                  },
                  "followedHyperlink": {
                    "a": 255,
                    "r": 128,
                    "g": 0,
                    "b": 128
                  }
                },
                "headingFont": "Cambria",
                "bodyFont": "Calibri"
              },
              "printInfo": {
                "orientation": 2,
                "pageOrder": 1,
                "blackAndWhite": true,
                "paperSize": {
                  "width": 850,
                  "height": 1100,
                  "kind": 1
                }
              },
              "allowCellOverflow": true,
              "index": 1
            },
            "Sheet3": {
              "name": "Sheet3",
              "defaults": {
                "colHeaderRowHeight": 20,
                "rowHeaderColWidth": 40,
                "rowHeight": 18,
                "colWidth": 72
              },
              "rowCount": 1,
              "columnCount": 1,
              "data": {
                "defaultDataNode": {
                  "style": {
                    "backColor": null,
                    "foreColor": "Text 1 0",
                    "vAlign": 1,
                    "font": "14.7px Calibri",
                    "themeFont": "Body",
                    "borderLeft": {},
                    "borderTop": {},
                    "borderRight": {},
                    "borderBottom": {},
                    "locked": true,
                    "textIndent": 0,
                    "wordWrap": false
                  }
                },
                "dataTable": {}
              },
              "selections": {
                "0": {
                  "row": 0,
                  "rowCount": 1,
                  "col": 0,
                  "colCount": 1
                },
                "length": 1
              },
              "theme": {
                "name": "Office",
                "themeColor": {
                  "name": "Office",
                  "background1": {
                    "a": 255,
                    "r": 255,
                    "g": 255,
                    "b": 255
                  },
                  "background2": {
                    "a": 255,
                    "r": 238,
                    "g": 236,
                    "b": 225
                  },
                  "text1": {
                    "a": 255,
                    "r": 0,
                    "g": 0,
                    "b": 0
                  },
                  "text2": {
                    "a": 255,
                    "r": 31,
                    "g": 73,
                    "b": 125
                  },
                  "accent1": {
                    "a": 255,
                    "r": 79,
                    "g": 129,
                    "b": 189
                  },
                  "accent2": {
                    "a": 255,
                    "r": 192,
                    "g": 80,
                    "b": 77
                  },
                  "accent3": {
                    "a": 255,
                    "r": 155,
                    "g": 187,
                    "b": 89
                  },
                  "accent4": {
                    "a": 255,
                    "r": 128,
                    "g": 100,
                    "b": 162
                  },
                  "accent5": {
                    "a": 255,
                    "r": 75,
                    "g": 172,
                    "b": 198
                  },
                  "accent6": {
                    "a": 255,
                    "r": 247,
                    "g": 150,
                    "b": 70
                  },
                  "hyperlink": {
                    "a": 255,
                    "r": 0,
                    "g": 0,
                    "b": 255
                  },
                  "followedHyperlink": {
                    "a": 255,
                    "r": 128,
                    "g": 0,
                    "b": 128
                  }
                },
                "headingFont": "Cambria",
                "bodyFont": "Calibri"
              },
              "printInfo": {
                "orientation": 2,
                "pageOrder": 1,
                "blackAndWhite": true,
                "paperSize": {
                  "width": 850,
                  "height": 1100,
                  "kind": 1
                }
              },
              "allowCellOverflow": true,
              "index": 2
            }
          },
          "namedStyles": [
            {
              "backColor": "Accent 1 79",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "20% - Accent1"
            },
            {
              "backColor": "Accent 2 79",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "20% - Accent2"
            },
            {
              "backColor": "Accent 3 79",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "20% - Accent3"
            },
            {
              "backColor": "Accent 4 79",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "20% - Accent4"
            },
            {
              "backColor": "Accent 5 79",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "20% - Accent5"
            },
            {
              "backColor": "Accent 6 79",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "20% - Accent6"
            },
            {
              "backColor": "Accent 1 59",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "40% - Accent1"
            },
            {
              "backColor": "Accent 2 59",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "40% - Accent2"
            },
            {
              "backColor": "Accent 3 59",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "40% - Accent3"
            },
            {
              "backColor": "Accent 4 59",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "40% - Accent4"
            },
            {
              "backColor": "Accent 5 59",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "40% - Accent5"
            },
            {
              "backColor": "Accent 6 59",
              "foreColor": "Text 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "40% - Accent6"
            },
            {
              "backColor": "Accent 1 39",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "60% - Accent1"
            },
            {
              "backColor": "Accent 2 39",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "60% - Accent2"
            },
            {
              "backColor": "Accent 3 39",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "60% - Accent3"
            },
            {
              "backColor": "Accent 4 39",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "60% - Accent4"
            },
            {
              "backColor": "Accent 5 39",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "60% - Accent5"
            },
            {
              "backColor": "Accent 6 39",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "60% - Accent6"
            },
            {
              "backColor": "Accent 1 0",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Accent1"
            },
            {
              "backColor": "Accent 2 0",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Accent2"
            },
            {
              "backColor": "Accent 3 0",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Accent3"
            },
            {
              "backColor": "Accent 4 0",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Accent4"
            },
            {
              "backColor": "Accent 5 0",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Accent5"
            },
            {
              "backColor": "Accent 6 0",
              "foreColor": "Background 1 0",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Accent6"
            },
            {
              "backColor": "#ffc7ce",
              "foreColor": "#9c0006",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Bad"
            },
            {
              "backColor": "#f2f2f2",
              "foreColor": "#fa7d00",
              "font": "bold 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {
                "color": "#7f7f7f",
                "style": 1
              },
              "borderTop": {
                "color": "#7f7f7f",
                "style": 1
              },
              "borderRight": {
                "color": "#7f7f7f",
                "style": 1
              },
              "borderBottom": {
                "color": "#7f7f7f",
                "style": 1
              },
              "name": "Calculation"
            },
            {
              "backColor": "#a5a5a5",
              "foreColor": "Background 1 0",
              "font": "bold 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {
                "color": "#3f3f3f",
                "style": 6
              },
              "borderTop": {
                "color": "#3f3f3f",
                "style": 6
              },
              "borderRight": {
                "color": "#3f3f3f",
                "style": 6
              },
              "borderBottom": {
                "color": "#3f3f3f",
                "style": 6
              },
              "name": "Check Cell"
            },
            {
              "backColor": null,
              "name": "Comma"
            },
            {
              "backColor": null,
              "name": "Comma [0]"
            },
            {
              "backColor": null,
              "name": "Currency"
            },
            {
              "backColor": null,
              "name": "Currency [0]"
            },
            {
              "backColor": null,
              "foreColor": "#7f7f7f",
              "font": "italic 14.7px Calibri",
              "themeFont": "Body",
              "name": "Explanatory Text"
            },
            {
              "backColor": "#c6efce",
              "foreColor": "#006100",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Good"
            },
            {
              "backColor": null,
              "foreColor": "Text 2 0",
              "font": "bold 20px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {
                "color": "Accent 1 0",
                "style": 5
              },
              "name": "Heading 1"
            },
            {
              "backColor": null,
              "foreColor": "Text 2 0",
              "font": "bold 17.3px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {
                "color": "Accent 1 49",
                "style": 5
              },
              "name": "Heading 2"
            },
            {
              "backColor": null,
              "foreColor": "Text 2 0",
              "font": "bold 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {
                "color": "Accent 1 39",
                "style": 2
              },
              "name": "Heading 3"
            },
            {
              "backColor": null,
              "foreColor": "Text 2 0",
              "font": "bold 14.7px Calibri",
              "themeFont": "Body",
              "name": "Heading 4"
            },
            {
              "backColor": "#ffcc99",
              "foreColor": "#3f3f76",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {
                "color": "#7f7f7f",
                "style": 1
              },
              "borderTop": {
                "color": "#7f7f7f",
                "style": 1
              },
              "borderRight": {
                "color": "#7f7f7f",
                "style": 1
              },
              "borderBottom": {
                "color": "#7f7f7f",
                "style": 1
              },
              "name": "Input"
            },
            {
              "backColor": null,
              "foreColor": "#fa7d00",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {
                "color": "#ff8001",
                "style": 6
              },
              "name": "Linked Cell"
            },
            {
              "backColor": "#ffeb9c",
              "foreColor": "#9c6500",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Neutral"
            },
            {
              "backColor": "#ffffcc",
              "borderLeft": {
                "color": "#b2b2b2",
                "style": 1
              },
              "borderTop": {
                "color": "#b2b2b2",
                "style": 1
              },
              "borderRight": {
                "color": "#b2b2b2",
                "style": 1
              },
              "borderBottom": {
                "color": "#b2b2b2",
                "style": 1
              },
              "name": "Note"
            },
            {
              "backColor": "#f2f2f2",
              "foreColor": "#3f3f3f",
              "font": "bold 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {
                "color": "#3f3f3f",
                "style": 1
              },
              "borderTop": {
                "color": "#3f3f3f",
                "style": 1
              },
              "borderRight": {
                "color": "#3f3f3f",
                "style": 1
              },
              "borderBottom": {
                "color": "#3f3f3f",
                "style": 1
              },
              "name": "Output"
            },
            {
              "backColor": null,
              "name": "Percent"
            },
            {
              "backColor": null,
              "foreColor": "Text 2 0",
              "font": "bold 24px \"Calibri Light\"",
              "themeFont": "Headings",
              "name": "Title"
            },
            {
              "backColor": null,
              "foreColor": "Text 1 0",
              "font": "bold 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {
                "color": "Accent 1 0",
                "style": 1
              },
              "borderRight": {},
              "borderBottom": {
                "color": "Accent 1 0",
                "style": 6
              },
              "name": "Total"
            },
            {
              "backColor": null,
              "foreColor": "#ff0000",
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "name": "Warning Text"
            },
            {
              "backColor": null,
              "foreColor": "Text 1 0",
              "hAlign": 3,
              "vAlign": 1,
              "font": "14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "Normal"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 3,
              "vAlign": 1,
              "font": "normal normal 16px 宋体",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 3,
              "vAlign": 1,
              "font": "normal normal 16px 宋体",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "常规_Sheet1"
            },
            {
              "backColor": null,
              "foreColor": "#0000ff",
              "font": "normal normal 16px 宋体",
              "textDecoration": 1,
              "name": "超链接"
            },
            {
              "backColor": null,
              "name": "千位分隔 3"
            },
            {
              "backColor": null,
              "foreColor": "Text 1 0",
              "hAlign": 3,
              "vAlign": 1,
              "font": "normal normal 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle5"
            },
            {
              "backColor": null,
              "foreColor": "Text 1 0",
              "hAlign": 0,
              "vAlign": 1,
              "font": "normal normal 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle6",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": "Text 1 0",
              "hAlign": 2,
              "vAlign": 1,
              "font": "normal normal 14.7px Calibri",
              "themeFont": "Body",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle7",
              "parentName": "常规 6"
            },
            {
              "backColor": "#969696",
              "foreColor": "#0000ff",
              "hAlign": 1,
              "vAlign": 1,
              "font": "normal normal 16px 宋体",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "textDecoration": 1,
              "name": "__builtInStyle8",
              "parentName": "超链接"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 1,
              "vAlign": 0,
              "font": "normal bold 18.7px 宋体",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle9",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 0,
              "font": "normal bold 18.7px 宋体",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle10",
              "parentName": "常规 6"
            },
            {
              "backColor": "#969696",
              "foreColor": null,
              "hAlign": 3,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {},
              "borderTop": {},
              "borderRight": {},
              "borderBottom": {},
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle11",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 1,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle12",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 1,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle13",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 1,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle14",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 1,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle15",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 0,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle16",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 1,
              "font": "normal normal 12px Times New Roman",
              "formatter": "#,##0.00_ ",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "shrinkToFit": true,
              "name": "__builtInStyle17",
              "parentName": "千位分隔 3"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 1,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle18",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 0,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle19",
              "parentName": "超链接"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 2,
              "font": "normal normal 13.3px Times New Roman",
              "formatter": "#,##0.00_ ",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle20"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 0,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle21",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 1,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle22",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 0,
              "vAlign": 1,
              "font": "normal normal 13.3px 宋体",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": true,
              "name": "__builtInStyle23",
              "parentName": "常规 6"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 1,
              "font": "normal normal 13.3px Times New Roman",
              "formatter": "#,##0.00_ ",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle24",
              "parentName": "千位分隔 3"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 2,
              "font": "normal normal 13.3px Times New Roman",
              "formatter": "#,##0.00_ ",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle25",
              "parentName": "千位分隔 3"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 1,
              "font": "normal normal 13.3px Times New Roman",
              "formatter": "#,##0.00_ ",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "shrinkToFit": true,
              "name": "__builtInStyle26",
              "parentName": "千位分隔 3"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 1,
              "font": "normal normal 13.3px Times New Roman",
              "formatter": "#,##0.00_ ",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle27",
              "parentName": "千位分隔 3"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 1,
              "font": "normal normal 13.3px Times New Roman",
              "formatter": "0%",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": false,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle28",
              "parentName": "千位分隔 3"
            },
            {
              "backColor": null,
              "foreColor": null,
              "hAlign": 2,
              "vAlign": 1,
              "font": "normal normal 13.3px Times New Roman",
              "formatter": "#,##0.00_ ",
              "borderLeft": {
                "color": "#000000",
                "style": 1
              },
              "borderTop": {
                "color": "#000000",
                "style": 1
              },
              "borderRight": {
                "color": "#000000",
                "style": 1
              },
              "borderBottom": {
                "color": "#000000",
                "style": 1
              },
              "locked": true,
              "textIndent": 0,
              "wordWrap": false,
              "name": "__builtInStyle29",
              "parentName": "千位分隔 3"
            }
          ]
        }
    private a100400 = {"version":"10.2.0","sheets":{"Sheet1":{"name":"Sheet1","data":{"dataTable":{"0":{"0":{"tag":"{\"formula\":\"UDEF_KM('JF',$ZTDM$,$KJND_B$,1,$KJND_E$,12,'56019999')\",\"elementType\":\"ellipsis\"}"}}},"defaultDataNode":{"style":{"themeFont":"Body"}}},"rowHeaderData":{"defaultDataNode":{"style":{"themeFont":"Body"}}},"colHeaderData":{"defaultDataNode":{"style":{"themeFont":"Body"}}},"selections":{"0":{"row":0,"rowCount":1,"col":0,"colCount":1},"length":1},"theme":"Office","index":0}}};
    report(): any {
        return this.data;
    }
    reportCata():any{
        return this.cata;
    }
    reportResponse():any{
        return this.response;
    }
    reportA100400(){
      return this.a100400;
    }
}
