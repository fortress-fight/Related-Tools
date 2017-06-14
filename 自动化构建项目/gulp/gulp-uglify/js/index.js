(function (win, $) {

    var globalData = {
        message: {
            webTitle: {
                title: '网站标题优化的几点注意事项',
                conMes: [{
                    mes: '网站标题往往是我们的网站留给访客的第一印象，也是在网站优化过程中，考虑的第一个要点。设置一个好的网站标题就会为网站增色不少，也会提升网站目标关键词的排名。网站标题优化的几点注意事项：'
                }, {
                    conTitle: '1、网站标题的字数',
                    mes: '网站标题并不是越长越好，也不是含有关键词越多越好。百度搜索结果标题保留显示65个字节，也就是差不多30个中文字，但是为了提高用户体验和突出目标关键词，建议长度最好在20-25个左右，如果超出这些字符，那么在搜索结果中显示出来的网站标题会跟着省略号，不美观，也不完整，并且显得不够专业。另外，网站标题中如果包含多个关键词，会容易被百度认为作弊；不仅如此，网站标题中含有过多的关键词，会分散权重，这样对网站关键词排名没有任何帮助。',
                }, {
                    conTitle: '2、网站标题所涉及的符号',
                    mes: '如果你的企业品牌或网站品牌已经形成，再或者想要突出自己的品牌，那么可以直接在首页将品牌名放在标题最前面，这样可以直接凸显你的品牌。而在内页中也同样将品牌名摆在标题最后，这样对于品牌是很大的曝光，即使网站目前的知名度还不够，那更不应该放过每个品牌曝光的机会。',
                }, {
                    conTitle: '3、合理使用网页标题分隔符',
                    mes: '因为很多网页标题是有多个关键词或多个短语构成，这些关键字之间会用到标题分隔符号，常用的有空格、下划线(_)、半破折号(—)、连接符(-)、竖线(|)、逗号(,)、破折号(——)等。很多人很在意这个，其实这里问题不大，这几类分隔符除了半破折号(—)、破折号(——)用得少一点外，其余的都是很常见的，很多大型网站都在用，而用得少的也是相对少一些而已。比如：360安全中心 - 360安全卫士 - 杀毒软件|免费杀毒软件|企业杀毒软件|安全浏览器。连接符(-)和竖线(|)。百度一下,你就知道。逗号(,)值得注意的是连接符仅适用于百度搜索引擎，做谷歌的就不要用了。',
                }, {
                    conTitle: '4、网站标题词语组合',
                    mes: '网站标题的优化技巧，重点、难点的放在前面，使用拆分，组合的方式选择关键词，一般标题不会使用长尾关键词。',
                }, {
                    conTitle: '5、重要内容放在标题的最前面',
                    mes: '在众多检索结果中，用户的目光往往聚焦在标题前半段，所以重要信息内容放在标题前部非常重要。'
                }, {
                    conTitle: '6、网站中包含关键词',
                    mes: '为什么网站要写标题，其中一个原因就是增加关键词的密度，让蜘蛛更快得抓住主题，所以说网站的标题一定要含有核心、重点、难点的关键词;当然，如果你不确定关键词该怎么选择，可以到百度查看一下它的指数，或者参考竞争对手的情况。'
                }, {
                    conTitle: '7、在真实的前提下体现时效性',
                    mes: '在标题放时效性关键词最重要的前提是：网页里真的有时效性内容，否则非常容易被搜索引擎惩罚。'
                }]
            },
            webKeyWord: {
                title: '如何做好网站关键词优化呢？',
                conMes: [{
                    mes: '一个能吸引搜索引擎的好网站，设置好关键词很重要。一个网站关键字的质量高低和好坏，可以直接影响到自己网站在搜索引擎的排名，如何做好网站关键词优化呢？'
                }, {
                    conTitle: '1、与网页内容最相关的关键词',
                    mes: '关键词要与您的企业网站相关，突出您的企业网站的定位和主要产品等。标题应该和网页内容相对应，即标题上的内容，可以在网页主体部分得到展示。一般来说如果网页主要部分是一篇文章网页标题的主要内容往往是文章标题。如果网页是一个综合信息的集合页，我们也要找到这些信息的共同点，通过一两个关键词将其表现在网页标题上。',
                }, {
                    conTitle: '2、选择用户更常用的关键词',
                    mes: '同一个物品有不同的名称、同一件事情也有不同的描述，选择哪个放在title上呢?虽然百度有强大的关键词分析算法，但我们还是推荐大家使用搜索引擎用户最常用的那个。关键词的热度可以通过百度指数进行查询，目前网络上还有一些其它工具，大家也可以参考一下。',
                }, {
                    conTitle: '3、关键词的分隔',
                    mes: '如果有多个关键词，可以使用英文的逗号“,”进行分隔。',
                }, {
                    conTitle: '4、关键词的长度',
                    mes: '为了有利于搜索引擎索引和分析,您的网站关键词总长度建议不超过100个字，以免引起搜索引擎的反感。',
                }]
            },
            webDes: {
                title: '如果填写网站描述',
                conMes: [{
                    mes: '用户在搜索关键词的时候，首先呈现给用户的是title和描述部分，网站想要在成千上万的搜索结果中脱颖而出，就得需要有一个吸引用户点击的描述。能进一步吸引用户点击，得到用户的青睐，醒目的描述将会是吸引用户点击你的网站原因，因为标题的长度有限，并不能显示完全，而描述是概括一个网页内容的简洁话语，那么网站的描述怎么写？'
                }, {
                    conTitle: '1.网站描述可读性',
                    mes: '网站描述相当于总结网站整体服务。网站描述要自然，只需让用户搜索自己网站关键词时，就能显示给用户看的，用户通过网站描述大致可以知道网站是做什么，这样就可以让用户知道这个站点是否就是自己需要的。',
                }, {
                    conTitle: '2.页面描述需要做到简洁明了',
                    mes: '网站描述的主要作用是吸引用户眼球，使用户和搜索引擎知晓网站是提供哪种服务或销售何种产品的，因此，在写网站描述时，应当尽量减少使用与网站服务或产品无关的汉字。',
                }, {
                    conTitle: '3.网站描述长度不宜过长',
                    mes: '描述长度三大搜索引擎的长短顺序为、百度>雅虎>谷歌，百度在200字节左右，谷歌在150字节左右，所以网站的描述最好不要超过200个字节的长度。一个优秀的网站描述，除了可读性强，阅读通顺，还应当能在网站描述中清晰准确地传达给用户，使用户一眼就知道网站是做什么的、提供什么产品或服务。',
                }]
            }
        }
    };

    $(function () {
        initDo();
    });

    $.fn.extend({

        tabActive: function (json) {

            var evTarget, targetPar,
                config = {
                    target: '',
                    parent: 'document',
                    class: 'active',
                    initFn: function () {},
                    inFn: function () {},
                    outFn: function () {},
                    type: 1
                };

            $.extend(config, json);

            evTarget = $(this).closest(config.target);
            targetPar = evTarget.closest(config.parent);

            config.initFn();

            if (config.type == 1) {

                if (evTarget.hasClass(config.class)) {

                    evTarget.removeClass(config.class)
                        .each(function (i, e) {
                            config.outFn.call(e)
                        });
                } else {

                    targetPar.find(config.target + '.' + config.class)
                        .removeClass(config.class)
                        .each(function (i, e) {
                            config.outFn.call(e);
                        });

                    evTarget.addClass(config.class)
                        .each(function (i, e) {
                            config.inFn.call(e);
                        });
                }
            } else if (config.type == 2) {

                targetPar.find(config.target + '.' + config.class)
                    .removeClass(config.class)
                    .each(function (i, e) {
                        config.outFn.call(e);
                    });

                evTarget.addClass(config.class)
                    .each(function (i, e) {
                        config.inFn.call(e);
                    });
            } else if (config.type == 3) {

                if (evTarget.hasClass(config.class)) {

                    evTarget.removeClass(config.class)
                        .each(function (i, e) {
                            config.outFn.call(e)
                        });
                } else {

                    evTarget.addClass(config.class)
                        .each(function (i, e) {
                            config.inFn.call(e);
                        });
                }
            }
        },

        // 布局转换为 绝对定位；
        turnToPos: function (els) {
            var posInfor = [];

            if (!$(this).css('position')) {
                $(this).css('position', 'relative')
            }

            $(els).each(function (index, item) {
                var el = $(item).position();
                posInfor.push(el);
            });

            $(els).each(function (index, item) {
                $(item).css({
                    left: posInfor[index].left,
                    top: posInfor[index].top,
                    position: 'absolute'
                });
            });
            return posInfor;
        },

        // 还原成 -- relative auto auto的状态
        PosToSta: function (els) {

            $(els).each(function (index, item) {

                var el = $(item).position();
                $(item).css({
                    left: 'auto',
                    top: 'auto',
                    position: 'relative'
                })
            });
        },

        // 元素的显示隐藏切换
        showHide: function (onOff, fn) {

            if (onOff) {

                $(this).fadeIn(function () {
                    fn && fn();
                });
            } else {

                $(this).fadeOut(function () {
                    fn && fn();
                })
            }
        },
        shake: function (limit, speed) {
            var timer,
                _this = this;

            limit = limit ? limit : 10;

            $(_this).css({
                'position': 'relative'
            })

            timer = setInterval(function () {
                limit = limit * -16 / 20;
                if (Math.abs(limit) > 1) {

                    $(_this).css({

                        'left': limit
                    });
                } else {

                    $(_this).css({

                        'left': 0
                    });
                    clearInterval(timer);
                }
            }, 50);

        }

    });

    $.extend({
        getStringArgs: function (str) {
            // 声明一个空的对象，等待存储数据；
            var args = {},
                items = str.length ? str.split('&') : [],
                item = null,
                name = null,
                value = null,
                i = 0,
                len = items.length;

            // 将数据加载到args对象中;
            for (var i = 0; i < len; i++) {

                item = items[i].split('=');
                name = decodeURIComponent(item[0]);
                value = decodeURIComponent(item[1].replace(/\+/g, ' '));

                if (name.length) {

                    args[name] = value;
                }
            }
            return args;
        },
        getSearchArgs: function (initStr) {

            var urlSearch = location.search,
                searchStr = urlSearch.split('?')[1] ? urlSearch.split('?')[1] : initStr;

            if (!searchStr) {
                throw new Error('当前页面没有search，可以选择传入初始数据如“page=1”')
            }

            return $.getStringArgs(searchStr);
        }
    })

    // publicTools -- 提供公用方法，以供整个页面调用
    var publicTools = (function () {

        var tools = {};

        // 提示消息的展开缩放功能
        tools.tip = function (onOff, str, status) {

            if (onOff === true) {

                $('#tip-box').slideUp();
            } else if (onOff == 'long') {

                $('.tip', '#tip-box').html(str);
                $('#tip-box').show();
            } else {

                $('.tip', '#tip-box').html(str);
                $('#tip-box').stop(true, true).slideDown().delay(1000).slideUp();
            }

            if (status === 'error') {

                $('#tip-box').addClass('error')
            } else if (status === 'load') {

                $('#tip-box').addClass('load')
            } else {

                $('#tip-box').removeClass('error load')
            }
        }

        // 页面加载前显示提示加载的信息,
        tools.tipLoad = function () {

            var _this = this,
                timer;


            timer = setTimeout(function () {
                _this.tip('long', '资源正在加载......', 'load')
            }, 500);

            $(window).on('load', function () {

                clearTimeout(timer);
                _this.tip('long', '资源加载成功')
                setTimeout(function () {
                    _this.tip(true);
                }, 500);
            });
        };

        // mask 开关
        tools.maskOnOff = function (onOff, fn, color) {

            if (onOff) {

                $('#mask').css({
                    'background-color': function () {
                        return color ? color : 'rgba(0,0,0,.5)';
                    }
                });
                $('#mask').fadeIn(300);
                $('#mask').on('click', function () {
                    fn && fn();
                    return false;
                })
            } else {

                $('#mask').fadeOut(300);
                $('#mask').off();
                fn && fn();
                return false;
            };
        }

        // 切换工作区控制面板
        tools.tabSettingItem = function (sucFn) {

            var _this = this,
                succ = false,
                $elBox = $('#setting-area'),
                $showEl = $('.setting-item:visible');

            if ($showEl[0] && ('hasChange' in $._data($showEl[0], 'events'))) {

                // hasChange -- 是每一个控制面板区域绑定的函数，包含检测内容是否发生变化的逻辑
                $showEl.trigger('hasChange', [{
                    changeFn: doSaveAlert,
                    noChangeFn: function () {
                        sucFn && sucFn();
                    }
                }]);

                function doSaveAlert(json) {

                    var config = {

                        tip: '',
                        saveFn: function () {
                            // _this.alertBox.closeBox();
                            sucFn && sucFn()
                        },
                        cancelFn: function () {
                            // $(window).off('beforeunload');
                            sucFn && sucFn()
                        }
                    }

                    $.extend(true, config, json)
                    $showEl.trigger('save-fn', [false, config]);
                }
            } else {

                sucFn && sucFn()
            }
        }

        // homePageConfig 的展开 关闭功能的实现
        tools.homePageConfig = function (onOff) {

            if (onOff) {

                $('#menu-config-area').addClass('hide');
                $('#home-page-config').removeClass('hide');

                // 这里是当切换到 home-page-config 的时候的初始行为
                // $('#home-page-config').trigger('init-open-set');
            } else {

                $('#menu-config-area').removeClass('hide');
                $('#home-page-config').addClass('hide');
            }
        };

        // 找到定位父级
        tools.findPosPar = function (el) {

            var par, pos;

            par = $(el).parent();
            pos = par.css('position');

            while (pos != 'relative' && pos != 'absolute') {
                par = par.parent();
                pos = par.css('position');
            };
            return par;
        }

        // previewFrame 的开关
        tools.previewFrame = function (onOff, src) {

            var _this = this,
                frameWin = $('#preview-page iframe')[0].contentWindow;

            $('#preview-page .to-address')
                .attr('href', src)
                .find('span')
                .text(src);

            $('#preview-page iframe').on('load', function () {
                $('.frame-mask').fadeOut();
            });

            if (onOff) {
                $(window).one('keydown.esc', function (ev) {
                    if (ev.keyCode == 27) {
                        closeFrame();
                    }
                });

                if (src.indexOf('http') !== -1) {
                    frameWin.location.href = src;
                };

                $('#preview-page').show().animate({
                    opacity: 1,
                    top: '50%'
                }, function () {

                });

                _this.maskOnOff(true, function () {
                    closeFrame();
                });
            } else {

                closeFrame();
            }

            function closeFrame() {
                $(window).off('keydown.esc');
                $('#preview-page').animate({
                    opacity: 0,
                    top: '45%'
                }, function () {

                    $('#preview-page').hide();
                    $('.frame-mask').show();
                });

                _this.maskOnOff(false);
            }
        };

        // config-bar 的开关
        tools.configBar = function (onOff, json) {

            var listEl, barEl, timer,
                config = {
                    status: '',
                    pos: 0,
                    hideItem: [],
                    endFn: function () {},
                    jump: false,
                    par: ''
                };

            listEl = $('.config-list');
            barEl = $('#config-bar');

            $.extend(true, config, json);

            config.pos = (config.pos + listEl.height()) > barEl.height() ? barEl.height() - listEl.height() : config.pos;

            barEl.prop('par', config.par);

            switch ($(config.par).data('type-item')) {
                case 'slider':
                    config.hideItem = ['copy', 'group']
                    break;

                case 'contact':
                    config.hideItem = ['copy', 'group']
                    break;

                default:
                    break;
            }

            if (onOff) {

                if (config.hideItem.length) {
                    for (var i = 0; i < config.hideItem.length; i++) {

                        barEl.find('a[data-type="' + config.hideItem[i] + '"]').hide();
                    }
                } else {

                    barEl.find('a').show();
                }
                $('.config-list a').removeClass('active');

                if (config.status) {

                    listEl.find('a[data-type=' + config.status + ']').addClass('active');
                } else {

                    $('.config-list a[data-type=list]').addClass('active');
                }

                barEl.addClass('open')
                    .find('.config-list').css({
                        'top': config.pos,
                        'display': 'block'
                    }).show();

            } else {
                if (barEl.hasClass("open")) {
                    barEl.removeClass('open');
                    timer = setTimeout(function () {

                        clearTimeout(timer);
                        config.endFn();
                    }, 500);
                } else {
                    config.endFn();
                }
            }
        };

        // 提示框相关
        tools.alertBox = function (box, onOff, json) {

            var _this = this,
                pos = {},
                config = {
                    btn: '',
                    text: '',
                    id: '',
                    header: '',
                    mask: true,
                    type: 'normal',
                    scrollCon: false,
                    messageData: false,
                    maskSet: {
                        color: 'transparent',
                        start: function () {},
                        end: function () {}
                    },
                    closeFn: function () {},
                    saveFn: function () {},
                    cancelFn: function () {}
                };

            $.extend(true, config, json);

            if (config.messageData != false) {

                initMesBox(config.messageData);
            };

            function initMesBox(type) {
                var MesBoxInfor = globalData.message,
                    initInfor,
                    $html = '';

                switch (type) {
                    case 'webTitle':
                        initInfor = MesBoxInfor['webTitle'];
                        break;

                    case 'webKeyWord':
                        initInfor = MesBoxInfor['webKeyWord'];
                        break;

                    case 'webDetail':
                        initInfor = MesBoxInfor['webDes'];
                        break;
                    default:
                        break;
                };

                // for (var type in initInfor) {
                //     if (initInfor.hasOwnProperty(type)) {
                //         var item = initInfor[type];

                //     }
                // }
                $('.message-box header').text(initInfor.title);
                $html = `
                    <section class="message">
                `;

                $.each(initInfor.conMes, function (i, n) {

                    if (n.conTitle) {

                        $html += `<p class="con-mes">
                            <span>${n.conTitle}</span>
                            <br/>
                            <span>
                                ${n.mes}
                            </span>
                        </p>`
                    } else {

                        $html += `<p class="con-mes">
                            <span>${n.mes}</span>
                        </p>`
                    }
                });

                $html += `</section>`;
                $('.message-box .message').html($html);
            }

            _this.alertBox.closeBox = function () {

                _this.alertBox(box, false);
                _this.maskOnOff(false, config.maskSet.end);
                $(box).find('.save-btn').off();
                $(box).find('.cancel-btn').off();
            };


            if ($(box).hasClass('delete-box')) {
                if (config.type == 'warn') {

                    $(box).addClass('warn');
                    $(box).find('.save-btn').text('删除');
                } else if (config.type == 'add') {

                    $(box).removeClass('warn')
                    $(box).find('.save-btn').text('添加');
                } else {

                    $(box).removeClass('warn')
                    $(box).find('.save-btn').text('移除');
                };
            }

            if (onOff) {

                $('#alert-box-group').show();

                if (config.btn) {

                    var btnPos = $(config.btn).offset();

                    pos.top = Math.max($(box).height() / 2 + 50, btnPos.top);

                    if (pos.top + $(box).height() > $(window).height()) {
                        pos.top = $(window).height() - $(box).height();
                    };

                    if (btnPos.left + $(box).width() <= $(window).width()) {

                        $(box).show().css({
                            position: 'absolute',
                            opacity: 1,
                            top: pos.top,
                            left: btnPos.left + $(config.btn).width(),
                            transform: 'translateY(-50%) scale(1)',
                            'z-index': 1000
                        });
                    } else {

                        $(box).show().css({
                            position: 'absolute',
                            opacity: 1,
                            top: pos.top,
                            left: btnPos.left - $(box).width(),
                            transform: 'translateY(-50%) scale(1)',
                            'z-index': 1000
                        });
                    }

                } else {

                    $(box).css({}).show().css({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: '15%',
                        right: 0,
                        'z-index': 1000,
                        transform: 'scale(1)',
                        margin: 'auto',
                        opacity: 1
                    });
                    // setTimeout(function () {
                    //     $(box).css({
                    //         position: 'absolute',
                    //         top: 0,
                    //         left: 0,
                    //         bottom: '15%',
                    //         right: 0,
                    //         'z-index': 1000,
                    //         transform: 'scale(1)',
                    //         margin: 'auto',
                    //         opacity: 1
                    //     })
                    // })
                }


                if (config.scrollCon) {

                    $(box).find('.item-group').css('height', function () {
                        var height = $(this).css('height'),
                            maxHeight = $(this).css('max-height');
                        return height >= maxHeight ? maxHeight : height;
                    })
                    _this.createScrollBar($(box).find('.item-group'))
                }
            } else {

                $('#alert-box-group').hide();
                $(box).hide().css({
                    opacity: 0,
                    left: '50%',
                    transform: 'translateY(-50%) scale(0.8)',
                });
            };

            if (config.text != '') {

                $('.text-input input', box).val(config.text);
            } else {

                $('.text-input input', box).val('');
            };

            if (config.title != '') {

                $(box).find('.title').text(config.title);
            }

            if (config.id != '') {

                $(box).find('input[name="listid"]').val(config.id);
            }

            if (config.tip != '') {

                $(box).find('.tip').html(config.tip);
            }

            $(box).find('.change').text(config.header);

            if (config.mask) {

                _this.maskOnOff(true, _this.alertBox.closeBox, config.maskSet.color);
            };

            $(box).find('.save-btn').on('click', function () {

                var val = $.getStringArgs($(box).find('form').serialize()),
                    formData = $(box).find('form').serialize(),
                    formDataObject = $(box).find('form').serializeArray();
                config.saveFn(val, formData, formDataObject);
                if (!$(box).prop('notClose')) {

                    _this.alertBox.closeBox();
                }
            });

            $(box).find('.cancel-btn').one('click', function () {

                config.cancelFn();
                _this.alertBox.closeBox();
            });

            $(box).find('.close-btn').off().one('click', function () {

                $('#mask').trigger('click');
            });

            $('.text-input input', box).on('keydown', function (ev) {
                if (ev.keyCode == 13) {
                    $(box).find('.save-btn').trigger('click');
                }
            });


        };

        // toggle 遮罩层；onOff - true 开 - false 关
        tools.saveAlert = function (onOff, json) {

            var _this = this,
                config = {
                    pos: {
                        style: 'center'
                    },
                    text: '',
                    maskSet: {
                        color: 'rgba(0,0,0,.5)'
                    }
                };

            $.extend(true, config, json);
            _this.alertBox('.save-box', true, config)
        };

        /**
         * 在 elArr 获取距离 el 最近的一个元素；
         * 返回一个 
         * infor {
         *  init -- 距离
         *  el -- 最近的元素
         *  dir -- true 为上 false 为下
         *  index -- 碰撞到的元素位置 
         * } 
         */
        tools.getClosest = (function (el, elArr) {

            var infor = {
                init: 0,
                el: '',
                dir: true,
                index: 0
            };

            return function (el, elArr) {
                var num = 0,
                    init = Infinity,
                    y = parseInt($(el).offset().top);

                for (var i = 0; i < $(elArr).length; i++) {
                    var dis = $(elArr).eq(i).offset().top - y;
                    if (init > Math.abs(dis)) {
                        num = i;
                        init = Math.abs(dis);
                        infor.dir = dis;
                    }
                }

                infor.el = $(elArr).eq(num);
                infor.index = num;
                infor.init = init;
                return infor;
            }
        })();

        tools.createUEEditor = function (el, barConfig) {

            if (!$('#' + el).length) {

                return {
                    isChange: false,
                    sync: function () {}
                }
            };

            var UEEditor;
            if (barConfig == 'detail') {

                UEEditor = UE.getEditor(el, window.UEDITOR_CONFIG_DETAIL);
            } else if (barConfig == 'simple') {

                UEEditor = UE.getEditor(el, window.UEDITOR_CONFIG_SIMPLE);
            } else if (barConfig == 'normal') {

                UEEditor = UE.getEditor(el, window.UEDITOR_CONFIG_NORMAL);
            } else {

                UEEditor = UE.getEditor(el, window.UEDITOR_CONFIG_SIMPLE);
            }

            UEEditor.ready(function () {

                this.addListener('contentChange', function (editor) {

                    this.hasChangeFF = true;
                });
            });
            return UEEditor;
        }
        // 创建自定义滚动条
        tools.createScrollBar = function (el, json) {

            var config = {
                theme: "dark",
                autoHideScrollbar: true,
                scrollInertia: 300,
                axis: "y",
                autoScrollOnFocus: false,
                mouseWheelPixels: 300
            };

            $.extend(true, config, json)
            $(el).mCustomScrollbar(config);
        };

        // 创建管理标签的 表单
        tools.createTagInput = function (inputBox) {

            var _this = this;
            $(inputBox).each(function (i, n) {
                (function (n) {
                    var $target = $(n).find('input[type=text]'),
                        $dataInput = $(n).find('.tag-data'),
                        initTags = $(n).find('span.tag').text().replace(/\s/g, ''),
                        endTags = '',
                        isChange = false,
                        tagList;

                    $(n).on('upData', function () {
                        var tagData = $(this).find('span.tag')
                            .text().trim().replace(/\s+/g, ',');

                        $dataInput.prop('value', tagData);
                    });

                    $(n).on('click', function (ev) {

                        $target.focus();
                    });

                    $(n).on('click', '.remove', function (ev) {

                        $(this).closest('.tag').remove();
                        $(ev.delegateTarget).trigger('upData');
                    });

                    $(n).on('addTag', function (ev, val) {

                        var str;

                        if (val.length == 0) return;

                        str = `<span class="tag">
                            <span>${val}</span>
                            <i class="fa fa-close remove"></i>
                        </span>`;

                        $target.before($(str));
                        $(this).trigger('upData');
                    });

                    $(n).on('initTags', function (ev, arr) {

                        var _this = this;
                        $.each(arr, function (i, f) {
                            $(_this).trigger('addTag', [f]);
                        })

                    });

                    $target.on('keydown', function (ev) {

                        var _this = this;

                        if (ev.keyCode === 188 || ev.keyCode === 13) {

                            $(n).trigger('addTag', [_this.value]);
                            $(this).prop('value', '');
                            return false;
                        };

                        if (ev.keyCode === 8 && $(this).prop('value') === '') {

                            $(n).find('.tag:last')
                                .remove();
                            $(n).trigger('upDate');
                        };

                    });

                    $target.on('blur', function (ev) {

                        var _this = this;
                        $(n).trigger('addTag', [_this.value]);
                        $(this).val('');
                        return false;
                    });

                    tagList = $(n).data('tags') + '';

                    if (tagList) {

                        tags = tagList.split(',');
                        $(n).trigger('initTags', [tags]);
                    }

                })(n);
            });

            return _this.createTagInput;
        };

        // 检测表单是否修改
        tools.formIsDirty = function (form) {

            for (var i = 0; i < form.elements.length; i++) {

                var element = form.elements[i];
                var type = element.type;

                if (type == "checkbox" || type == "radio") {

                    if (element.checked != element.defaultChecked) {
                        return true;
                    }
                } else if (type == "hidden" || type == "password" || type == "text" || type == "number") {

                    if (element.value != element.defaultValue) {
                        return true;
                    }
                } else if (type == "textarea") {

                    return $(element).prop('editorChange')

                } else if (type == "select-one" || type == "select-multiple") {

                    for (var j = 0; j < element.options.length; j++) {


                        if (element.options[j].selected != element.options[j].defaultSelected) {
                            return true;
                        }
                    }
                } else if (type == "file") {

                    if (element.value.length !== 0) {

                        Filechange = false;
                    }
                }
            }
            return false;
        };

        tools.inputCheckMethod = {

            noVal: function (input) {
                var val = $(input).val(),
                    $textInput = $(input).closest('.text-input'),
                    $tipBox = $textInput.find('.input-tip'),
                    isOk = true;

                if (val.trim().length == 0) {

                    $textInput.addClass('error');
                    $tipBox.text('不能为空');
                    isOk = false;
                } else {
                    if ($textInput.hasClass('error')) {

                        $textInput.removeClass('error');
                        $tipBox.text('');
                    }
                    isOk = true;
                };

                return isOk;
            }

        };

        // 表单校验
        tools.inputCheck = function ($form) {

            var $requiredInputs = $form.find('input[required="required"]'),
                isOk = true,
                _this = this,
                errorInputs = [];


            $requiredInputs.each(function (i, n) {
                var result = true;
                result = publicTools.inputCheckMethod.noVal(n);
                if (!result) {

                    errorInputs.push(n);
                }
            });
            if (errorInputs.length > 0) {
                isOk = false,
                    _this.tip('false', '请检测所填表单', 'error');
                $(errorInputs[0]).focus().closest('.text-input').shake();
            }
            return isOk;
        }

        // 保存信息将表单重置
        tools.formReset = function (form) {
            for (var i = 0; i < form.elements.length; i++) {

                var element = form.elements[i];
                var type = element.type;

                if (type == "checkbox") {

                    // $(element).attr('value', function () {
                    //     return $(this).prop('value')
                    // })

                    if ($(element).is(':checked')) {

                        $(element).attr('checked', true)
                    } else {

                        $(element).removeAttr('checked')
                    };

                } else if (type == "radio") {

                    if ($(element).is(':checked')) {

                        $(element).attr('checked', true)
                    } else {

                        $(element).removeAttr('checked')
                    };
                } else if (type == "hidden" || type == "password" || type == "text" || type == "number") {

                    $(element).attr('value', function () {
                        return $(this).prop('value')
                    })
                } else if (type == "textarea") {

                    return $(element).prop('editorChange', false)

                } else if (type == "select-one" || type == "select-multiple") {

                    for (var j = 0; j < element.options.length; j++) {
                        $(element.options).eq(j).attr('selected', function () {
                            return $(this).prop('selected')
                        })
                    }
                } else if (type == "file") {

                    $(element).attr('value', function () {
                        return $(this).prop('value')
                    })
                }
            }
        }

        // 上传图片；
        tools.singleImgUpLoader = function (el, json) {

            if (!$(el + ' ' + '.fileImgPicker')[0]) {
                return;
            };

            var imgX = $(el).data('size-x') || 1920,
                imgY = $(el).data('size-y') || 380,
                bgCon,
                upImgCom,
                src,
                controlBgStyle,
                config = {
                    el: el,
                    bg: true,
                    title: false,
                    src: '',
                    size: imgX + '*' + imgY,
                    type: {
                        'image': true,
                        'video': false
                    },
                    controlBgStyleEl: '.bg-style',
                    upFn: function () {},
                    WebUploaderConfig: {
                        // dnd: el + ' ' + '.fileImgPicker',
                        pick: {
                            id: el + ' ' + '.fileImgPicker',
                            multiple: false
                        },
                        thumbnailWidth: 1,
                        thumbnailHeight: 1,
                        disableGlobalDnd: true
                    }
                };

            $.extend(true, config, json);
            controlBgStyle = $(el).closest('.control-group').find(config.controlBgStyleEl);

            if (config.size) {
                var $html = $("<div class='creat-for-height'></div>");
                var sizeInfor = config.size.split('*');
                $html.appendTo(el).css({
                    'margin-top': function () {
                        return sizeInfor[1] / sizeInfor[0] * 100 + "%";
                    }
                });
            };

            src = $(el).find('input.file-data').val() || $(el).find('input[name="ibg"]').val() || $(el).find('input[name="image"]').val();;
            config.src = src;
            // loadBgImg = new Image;
            // src.on('error', function (){
            //     alert(1);
            // });

            if (typeof (src) == 'string' && src.indexOf('.mp4') != -1) {
                var $videoEl = $('<video src="' + src + '" preload="none" style="max-height:100%; max-width:100%">您的浏览器不支持 video 标签。</video><div class="playbtn fa fa-play-circle-o"></div>');
                $videoEl.appendTo($(el).find('.fileImgPickerBg'));
                $(el).find('.fileImgPickerBg').addClass('fileVideoBg').css({
                    backgroundImage: ''
                });

                // hack 需要修改
                setTimeout(function () {
                    $(el).find('.playbtn', '.fileImgPickerBg').off().on('click', function () {
                        $(this).parent().find('video')[0].play();
                        // $(this).parent().find('video')[0].onerror = function (){
                        //     alert(1);
                        // }
                    });
                });
            }

            if (config.controlBgStyleEl && controlBgStyle[0]) {

                var defaultBgStyle = $('input[name="ibgmeta[mode2]"]').val();

                function getBgStyle(type) {
                    var bgStyle = {};

                    switch (type) {
                        case 'cover':
                            bgStyle = {
                                'background-position': 'initial',
                                'background-size': 'cover',
                                'background-repeat': 'no-repeat'
                            };
                            break;

                        case 'contain':
                            bgStyle = {
                                'background-position': 'initial',
                                'background-size': 'contain',
                                'background-repeat': 'no-repeat'
                            };
                            break;

                        case 'initial':
                            bgStyle = {
                                'background-size': 'initial'
                            };
                            break;

                        case 'repeat':
                            bgStyle = {
                                'background-position': 'initial',
                                'background-size': 'initial',
                                'background-repeat': 'repeat'
                            };
                            break;

                        case 'no-repeat':
                            bgStyle = {
                                'background-repeat': 'no-repeat'
                            };
                            break;

                        case 'repeat-x':
                            bgStyle = {
                                'background-position': 'initial',
                                'background-size': 'initial',
                                'background-repeat': 'repeat-x'
                            };
                            break;

                        case 'repeat-y':
                            bgStyle = {
                                'background-position': 'initial',
                                'background-size': 'initial',
                                'background-repeat': 'repeat-y'
                            };
                            break;

                        case 'center':
                            bgStyle = {
                                'background-position': 'center center',
                                'background-size': 'initial',
                                'background-repeat': 'no-repeat'
                            };
                            break;

                        default:

                            break;
                    }
                    return bgStyle;
                }

                bgCon = $(el).find('.fileImgPickerBg');
                bgCon.css(getBgStyle(defaultBgStyle));
                config.upFn = function (onOff) {
                    if (onOff) {

                        controlBgStyle.slideDown();
                    } else {

                        controlBgStyle.slideUp();
                    }
                };

                controlBgStyle.on('click', '.radio-input,.check-input', function () {

                    var option = $(this).find('div.checked').data('input-option'),
                        changeBgEl = $(this).closest('.control-group')
                        .find('.fileImgPickerBg');

                    changeBgEl.css(getBgStyle(option));
                });
            };

            upImgCom = new upImage(el, config);

            // $(loadBgImg).attr('src', src);

            // (function(upImgCom, loadBgImg){

            //     loadBgImg.onerror = function (){

            //         upImgCom.showErrorTip('资源已经删除，请重新添加');
            //     }
            // })(upImgCom, loadBgImg);

            return upImgCom;
        }
        return tools;
    })();

    // selectInput -- 下拉表单
    var selectInput = (function () {

        var fn = {};

        fn.init = function ($el, hasBar) {

            $el.prop('onOff', false);

            $el.on('click', '.text-input', function (ev) {

                var _this = this,
                    par = $(ev.delegateTarget),
                    input = par.find('.text-input input'),
                    option = par.find('.select-option'),
                    onOff = par.prop('onOff');

                if (onOff) {

                    par.prop('onOff', false);
                    $(this).removeClass('open');
                    option.slideUp();
                } else {

                    par.prop('onOff', true);
                    $('body').one('click', function () {
                        par.prop('onOff', false);
                        $(_this).removeClass('open');
                        option.slideUp();
                    });

                    $(this).addClass('open');

                    option.slideDown(function () {

                        option.trigger('init-option');
                    });
                }
                return false;
            });

            $el.on('click.open', '.select-option span', function (ev) {

                var par = $(ev.delegateTarget),
                    input = par.find('.text-input input'),
                    option = par.find('.select-option');

                input.prop('value', $(this).text());
            });

            $el.find('.select-option').one('init-option', function () {

                $(this).css({
                    height: function () {
                        return $(this).outerHeight(true);
                    }
                });

                publicTools.createScrollBar(this);
            });

            var initSelect = $el.find('.select-option span.selected');

            if (initSelect[0]) {

                $el.find('input').attr('value', function () {
                    return initSelect.text();
                });
            }
        };
        return fn;
    })();

    var selectInput2 = (function () {

        var fn = {},
            $options, $selectOption, selectText, $selectCon, $optionBox, selectOptionIndex, $optionSpan;

        fn.init = function ($el) {
            var $selectInputEl = $el.find('select');
            var selectIndex = $selectInputEl.data('select');

            $options = $el.find('select option');


            if (selectIndex) {

                $el.find('select option[value="' + selectIndex + '"]').attr('selected', true);
            } else {

                $options.eq(0).attr('selected', true);
            }

            $selectOption = $el.find('select option:selected');
            selectOptionIndex = $selectOption.index();
            selectText = $selectOption.text();
            $selectCon = $el.find('.text-input-con');
            $optionBox = $el.find('.select-option');

            this.initText(selectText);
            this.initOptionBox();

            $el.prop('onOff', false);

            $el.on('click', function (ev) {

                var _this = this,
                    par = $(ev.delegateTarget),
                    onOff = par.prop('onOff');

                if (onOff) {

                    par.prop('onOff', false);
                    $(this).removeClass('open');
                    $optionBox.slideUp();
                } else {

                    par.prop('onOff', true);
                    $('body').one('click', function () {
                        par.prop('onOff', false);
                        $(_this).removeClass('open');
                        $optionBox.slideUp();
                    });

                    $(this).addClass('open');

                    $optionBox.slideDown(function () {

                        $optionBox.trigger('init-option');
                    });
                }
                return false;
            });

            $el.on('click.open', '.select-option span', function (ev) {

                var text = $(this).text(),
                    index = $(this).index();

                $(this).addClass('hover').siblings().removeClass('hover');

                $selectCon.text(text);
                $options.eq(index).prop('selected', 'selected');
            });

            $el.find('.select-option').one('init-option', function () {

                $(this).css({
                    height: function () {
                        return $(this).outerHeight(true);
                    }
                });
                publicTools.createScrollBar(this);
            });
        }

        fn.initText = function (text) {
            $selectCon.text(text);
        }

        fn.initOptionBox = function () {
            var html = '';
            $options.each(function (i, n) {
                html += '<span>' + $(n).text() + '</span>';
            });

            $optionBox.html(html);

            $optionSpan = $optionBox.find('span').eq(selectOptionIndex);
            $optionSpan.addClass('hover');
        }
        return fn;
    })();

    var radioInput = (function () {

        var fn = {},
            $input, $options, $initOption, checkIndex;

        fn.init = function ($el) {

            $el.each(function (i, n) {
                $n = $(n);

                $input = $n.find('input');
                $options = $n.find('div');
                initValue = $n.data('checked');
                $initOption = $n.find('div[data-input-option=' + initValue + ']');

                if (typeof initValue != 'undefined') {

                    $initOption.addClass('checked');
                    $input.attr('value', function () {
                        return $initOption.data('input-option');
                    });
                }

                (function (n, $input) {
                    $options.on('click', function () {
                        var val = $(this).data('input-option');
                        $(this).tabActive({
                            target: 'div',
                            class: 'checked',
                            parent: n,
                            type: 2
                        });

                        if (typeof val !== undefined) {
                            $input.prop('value', val);
                        }
                    })
                })(n, $input)
            })
        };

        return fn;
    })();

    // 页面加载后的初始行为
    var initDo = function () {
        var showItem = $('#setting-area').find('.setting-item.active');
        $('#pageHeader').trigger('init-dom');
        showItem.show().trigger('init-dom');
        createInputTip();

        // if ('hasChange' in $._data(showItem[0], 'events')) {

        //     $(window).on('beforeunload', function (e) {
        //         e = e || window.event;
        //         if (publicTools.formIsDirty(showItem[0])) {
        //             // IE 和 Firefox
        //             if (e) {
        //                 e.returnValue = "对不起，页面数据已做修改，尚未保存，确定要刷新或离开本页面？";
        //             }
        //             // Safari浏览器
        //             return "对不起，页面数据已做修改，尚未保存，确定要刷新或离开本页面？";
        //         };

        //     });
        // }

        function createInputTip() {

            var $tip = $(`<div><i class="fa fa-asterisk"></i><span class="input-tip"></span></div>`),
                $requiredInput = $('input[required="required"]');

            $tip.css({
                'position': 'absolute',
                top: 0,
                left: '100%',
                'text-indent': '5px',
                'white-space': 'nowrap'
            });

            $tip.find('.fa').css({
                color: 'red',
                'transform': 'scale(0.6)'
            });

            $requiredInput.after($tip);

            $requiredInput.on('input', function () {

                publicTools.inputCheckMethod.noVal(this);
            });
        };

        $('.text-input').find('.desc').on('click', '.desc-detail', function () {

            var dataInfor = $(this).data('infor');
            publicTools.alertBox('.message-box', true, {
                scrollCon: true,
                pos: {
                    style: 'center'
                },
                messageData: dataInfor,
                maskSet: {
                    color: 'rgba(0,0,0,.5)'
                }
            })
        });

        $('.setting-item.active').find('input[name="postremarks"]').on('input', function () {

            var _this = this,
                val = $(_this).val(),
                marksText;

            if (val.length > 0) {
                marksText = ' [' + val + ']';
            } else {
                marksText = '';
            }
            $('#menu-area').trigger("changeSelectMarks", [marksText])
        });

        $('img').on('error', function () {

            var imgSrc = this.src;
            if (imgSrc.indexOf('.mp4') != -1) {
                this.src = "./templates/templates/images/shipin.png"
            }
        })
    };

    // upImage -- 上传图片的构造函数
    function upImage(con, json) {

        var ratio = window.devicePixelRatio || 1,
            _extensions = '',
            _mimeTypes = '',
            webuploader;

        this.con = $(con);
        this.bgBox;
        this.uploader = null;
        this.isChange = false;

        if (typeof json == 'undefined') {
            json = {
                type: {
                    image: true
                }
            }
        }

        for (var item in json.type) {

            if (json.type.hasOwnProperty(item)) {
                if (json.type[item] == true) {

                    if (item == 'video') {

                        _extensions += ',mp4';
                        _mimeTypes += ',video/mp4';
                    } else if (item == 'image') {

                        _extensions += 'gif,jpg,png';
                        _mimeTypes += 'image/jpg,image/ico,image/gif,image/png,image/jpeg';
                    }
                }
            }
        }

        this.config = {
            preview: true,
            title: true,
            src: '',
            upFn: function () {},
            getSource: function () {},
            WebUploaderConfig: {
                // 自动上传。
                auto: true,

                // swf文件路径
                swf: '../upLoader/Uploader.swf',

                // 文件接收服务端。
                server: 'service/upload.php',

                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: '',
                // 只允许选择文件，可选。
                compress: null,
                accept: {
                    title: '文件上传',
                    extensions: _extensions,
                    mimeTypes: _mimeTypes
                },
                threads: 1,
                fileVal: 'Filedata',
                formData: {},
                fileSizeLimit: 10 * 1024 * 1024
            }
        };

        $.extend(true, this.config, json);

        this.config.WebUploaderConfig.thumbnailWidth *= ratio;
        this.config.WebUploaderConfig.thumbnailHeight *= ratio;
        this.inite();
    };

    upImage.prototype = {
        constructor: upImage,
        inite: function () {
            var config = this.config,
                _this = this,
                loadBgImg;

            this.uploader = WebUploader.create(config.WebUploaderConfig);
            this.upImg();
            this.upProgress();
            this.upSucc();
            this.upErro();
            this.upComplete();
            this.uploader.addButton({
                id: config.el + ' ' + '.mes',
            });

            if (typeof (config.src) == 'string' && config.src.length > 0) {
                if (config.src.indexOf('.mp4') != -1) {

                    $(this.con).find('video')[0].onerror = function () {
                        _this.showErrorTip('资源已经删除，请重新添加');
                    };
                    config.upFn(false);
                } else {

                    loadBgImg = new Image;
                    $(loadBgImg).attr('src', config.src)
                    $(loadBgImg).on('error', function () {
                        _this.showErrorTip('资源已经删除，请重新添加');
                    });
                }
            }

            $(this.con).on('click', '.remove-img', function () {

                $(this).parents('.webuploader-pick')
                    .find('.fileImgPickerBg')
                    .empty()
                    .css({
                        'background-image': 'none'
                    });

                $(this).closest('.hide-infor').removeClass('hide-infor');
                $(this).closest('.upload-imgbg').removeClass('upload-imgbg');
                $(this).closest('.file-img-list').find('.file-data').val('');
                config.upFn(false);
                _this.uploader.reset();
            });
        },

        upImg: function () {

            var _this = this;

            this.uploader.on('beforeFileQueued', function (file) {

                if (file.type == 'video/mp4' && file.size > 10 * 1024 * 1024) {

                    this.option('fileSizeLimit', 10 * 1024 * 1024);
                    this.trigger('error', 'Q_EXCEED_SIZE_LIMIT', file);
                    return false;
                }
            });
        },

        upProgress: function () {
            var _this = this;

            // 文件上传过程中创建进度条实时显示。
            this.uploader.on('uploadProgress', function (file, percentage) {
                var $con = $(_this.con).parent('.up-img'),
                    $percent = $con.find('.progress-bar');

                if (!$percent.length) {

                    progressBar = `<span class="progress-bar"><i></i></span>`;
                    $(progressBar).appendTo($con);
                } else {

                    $percent.find('i').css('width', percentage * 100 + '%');
                }

            });
        },

        upSucc: function () {
            var _this = this;

            // 文件上传成功，给item添加成功class, 用样式标记上传成功。
            this.uploader.on('uploadSuccess', function (file, response) {

                var con = $(_this.con),
                    webuploader = this,
                    config = _this.config;

                _this.con.find('.file-data').prop('value', response._raw);

                if (config.preview && file.type != 'video/mp4') {

                    _this.con.find('.fileImgPickerBg').empty().removeClass('fileVideoBg').css({
                        backgroundImage: 'url(' + response._raw + ')'
                    });

                    _this.con.addClass('upload-imgbg');
                    _this.con.find('.mes').addClass('.mes hide-infor')

                    config.upFn(true);
                    _this.showErrorTip('_clear')

                } else if (config.preview && file.type == 'video/mp4') {

                    if (!response._raw) {
                        publicTools.tip(false, '超出上传数量限制', 'error');

                        _this.showErrorTip('上传视频的个数超出限制，可以通过资源管理删除不需要的视频后再上传');
                        return;
                    }

                    // hack 需要修改

                    _this.con.find('.fileImgPickerBg').addClass('fileVideoBg').css({
                        backgroundImage: ''
                    }).html('<video src="' + response._raw + '" preload="none" style="max-height:100%; max-width:100%">您的浏览器不支持 video 标签。</video><div class="playbtn fa fa-play-circle-o"></div>');

                    setTimeout(function () {
                        _this.con.find('.playbtn', '.fileImgPickerBg').off().on('click', function () {
                            $(this).parent().find('video')[0].play();
                        });
                    });

                    _this.con.addClass('upload-imgbg');
                    _this.con.find('.mes').addClass('.mes hide-infor');

                    config.upFn(false);
                    _this.showErrorTip('_clear');
                } else {

                    _this.showErrorTip('_clear');
                    config.getSource(response._raw);
                };

                _this.isChange = true;
            });

        },

        upErro: function () {
            // 文件上传失败，现实上传出错。
            var _this = this;

            // 文件上传失败，现实上传出错。
            this.uploader.on('uploadError', function (type) {

                $error.text('上传失败');
                publicTools.tip(false, '上传失败', 'error')
            });

            this.uploader.on("error", function (type, file) {
                var webuploader = this;
                console.log(1, file, type);

                publicTools.tip(false, '上传内容不符合要求', 'error');
                if (type == "Q_TYPE_DENIED") {

                    _this.showErrorTip("请上传正确的格式文件");
                } else if (type == "Q_EXCEED_SIZE_LIMIT") {

                    if (file.type == 'video/mp4') {

                        _this.showErrorTip('视频大小不要超出' + webuploader.options.fileSizeLimit / (1024 * 1024) + 'M')
                    } else {

                        _this.showErrorTip("文件大小不能超过" + webuploader.options.fileSizeLimit / (1024 * 1024) + 'M');
                    }
                } else {

                    _this.showErrorTip("上传出错！错误代码" + type);
                }
            });
        },

        upComplete: function () {
            var _this = this;
            this.uploader.on('uploadComplete', function (file) {

                _this.uploader.reset();
                $(_this.con).parent('.up-img').find('.progress-bar').fadeOut(function () {
                    $(this).remove();
                })
            });
        },

        showErrorTip: function (text) {
            var _this = this,
                $li = $(_this.con).parent('.up-img'),
                errorEl = this.config.errorEl,
                $error;
            
            if (errorEl.length) {
                $error = errorEl.find('span.error');

                if (!$error.length) {
                    $error = $('<span class="error redFont"></span>').appendTo(errorEl);
                    $error.css({
                        paddingLeft: 10
                    });
                };

            } else {
                $error = $li.find('span.error');

                if (!$li.find('.tip').length) {

                    var $html = $('<span class="tip"></span>');
                    $html.appendTo($li);
                };

                if (!$error.length) {
                    $error = $('<span class="error redFont"></span>').appendTo($li.find('.tip').css('position', 'relative'));
                    $error.css({
                        paddingLeft: 10
                    });
                };
            }

            if (text == '_clear') {

                $error.empty();
            } else {

                $error.text(text);
            }
        }
    };

    // 拖拽方法
    function dragList(container, listMoveEl, json) {

        this.box = container;
        this.moveEl = listMoveEl;
        this.ItemArr = [];
        this.drager = null;
        this.hasChange = false;
        this.config = {
            listMoveBtn: this.listMoveEl,
            listMoveBox: 'body',
            beforeStart: function () {},
            startEv: function () {},
            moveEv: function () {},
            endEv: function () {},
            changeEv: function () {}
        };

        $.extend(this.config, json);

        this.init();
    };

    dragList.prototype = {
        constructor: dragList,

        //  实现拖拽 对象是拖拽元素所在容器 
        init: function () {
            var _this = this;
            $(_this.box).on('mousedown.drag', _this.config.listMoveBtn, function (ev) {
                if (ev.which != 1) return false;

                var moveOut = false,
                    target,
                    limit = {},
                    initX = ev.clientX,
                    initY = ev.clientY,
                    disX = initX - $(_this.box).offset().left - $(this).width() / 2,
                    disY = initY - $(_this.box).offset().top - $(this).height() / 2;

                limit.left = $(_this.config.listMoveBox).offset().left;
                limit.top = $(_this.config.listMoveBox).offset().top;
                limit.right = limit.left + $(_this.config.listMoveBox).width();
                limit.bottom = limit.top + $(_this.config.listMoveBox).height();

                _this.dragerPar = $(ev.target).closest('li');
                _this.drager = _this.dragerPar.clone();

                target = _this.dragerPar.find(_this.moveEl);

                target.css({
                    'opacity': '0'
                });

                _this.drager.prependTo(_this.box).css({
                    'position': 'absolute',
                    'left': disX,
                    'top': disY,
                    'z-index': 50
                }).addClass('move');

                _this.start();

                $(document).on('mousemove.drag', function (ev) {

                    _this.drager.css({
                        left: ev.clientX - initX + disX,
                        top: ev.clientY - initY + disY,
                        zIndex: 20
                    });

                    _this.move();

                    if (ev.clientX > limit.right + 50 ||
                        ev.clientX < limit.left - 50 ||
                        ev.clientY < limit.top - 50 ||
                        ev.clientY > limit.bottom + 50) {

                        moveOut = true;
                        $(document).trigger('mouseup.drag')
                    };

                    return false;
                });

                $(document).on('mouseup.drag', function () {

                    _this.drager.remove();
                    target.css({
                        'opacity': '1'
                    });
                    $(document).off('mousemove.drag mouseup.drag');
                    _this.end();
                });
                return false;
            })
            return false;
        },

        // 以拖拽为基准实现拖拽碰撞，必须使用 ul - li - 拖拽元素 的结构才能使用

        // 点击开始的时候发生的行为
        start: function (drager) {
            var _this = this;

            if (!_this.drager.find('.web-nav-sec')[0]) {

                _this.ItemArr = $(_this.box + '>' + 'li')
                    .not(_this.drager)
                    .not(_this.dragerPar)
                    .not('li.fix')
                    .find(_this.moveEl);

            } else {

                _this.ItemArr = $(_this.box + '>' + 'li')
                    .not(_this.drager)
                    .not(_this.dragerPar)
                    .not('li.fix')
                    .children(_this.moveEl);
            }

            _this.drager.addClass('move');

            $(_this.box).find('li').css({
                'height': function () {
                    return ($(this).height());
                }
            });

            _this.posInfor = $(_this.box).turnToPos(_this.ItemArr);
            this.config.startEv();
            return false;
        },

        move: function () {
            var _this = this,
                dir;

            _this.closestInfor = publicTools.getClosest(_this.drager, _this.ItemArr);

            dir = _this.closestInfor.dir;

            if (_this.dragerPar[0] != _this.closestInfor.el.closest('li')[0]) {

                if (dir >= 0 && dir <= 35) {
                    if (!_this.closestInfor.el.closest('li').hasClass('fix')) {

                        _this.dragerPar.insertBefore(_this.closestInfor.el.closest('li'));
                        _this.hasChange = true;
                        _this.config.changeEv();
                    }
                } else if (dir < 0 && dir >= -35) {

                    _this.dragerPar.insertAfter(_this.closestInfor.el.closest('li'));
                    _this.hasChange = true;
                    _this.config.changeEv();
                };
            };

            $('.web-nav-sec').closest('li').css({

                'height': function () {
                    return $(this).find(_this.moveEl).eq(0).height();
                }
            });

            $.each(_this.ItemArr, function (i, e) {

                e.style.top = $(e).closest('li').position().top + 'px';
                e.style.left = 'auto';
            });

            if (_this.dragerPar.parent().hasClass('web-nav-sec')) {

                _this.dragerPar.parent().find('.init').hide();
            }
            _this.config.moveEv();
        },
        end: function () {
            $(this.box).find('li').css({
                height: 'auto'
            });

            if (typeof this.endElPos !== 'undefined') {

                el.css({
                    top: this.endElPos.top,
                    left: this.endElPos.left
                })
            };

            $().PosToSta(this.ItemArr);

            $('ul.web-nav-sec').each(function (i, n) {

                if ($(n).find('li:not(".init,.invisible-item")').length) {

                } else {

                    $(n).find('.init').slideDown();
                }
            });

            this.config.endEv(this.dragerPar);
        }
    };

    // menu-area 管理
    (function () {

        var titleEl = $('#menu-area').find('li.check .title span').eq(0),
            titleInfor = titleEl.text();

        // 禁止掉 menu-area 的区域出现右键菜单
        $('#menu-area').on("contextmenu", function () {
            return false;
        });

        $('#menu-area').on("changeSelectTitle", function (ev, name) {

            titleEl.text(name);
        });

        $('#menu-area').on("changeSelectMarks", function (ev, mark) {

            var $remarksEl = titleEl.find('.item-remarks');
            if ($remarksEl.length) {

                $remarksEl.text(mark);
            } else {

                titleEl.append('<em class="item-remarks">' + mark + '</em>');
            }
        });

        $("#menu-config-area").mCustomScrollbar({
            theme: "dark",
            autoHideScrollbar: true,
            scrollbarPosition: "outside",
            scrollInertia: 300,
            setLeft: -20,
            autoScrollOnFocus: false
        });

        $("#home-list-area").mCustomScrollbar({
            theme: "dark",
            autoHideScrollbar: true,
            scrollbarPosition: "outside",
            scrollInertia: 300,
            setLeft: -20,
            autoScrollOnFocus: false
        });

        // web-nav-list 中第一级菜单的展开关闭行为
        $('.web-config-item', '#menu-config-area').on('click', '.first-nav', function () {

            var _this = this,
                suc;

            switch ($(_this).data('type')) {

                case 'resources-control':

                    break;

                default:
                    tab()
                    break;

            }

            function tab(fn) {

                var $activeItemSec = $('#menu-config-area .sec-nav:visible');

                $(_this).tabActive({
                    target: '.first-nav',
                    parent: '#menu-config-area',
                    class: 'active',
                    initFn: function () {

                        if (!$activeItemSec[0]) {
                            fn && fn()
                        }
                    },
                    inFn: function () {

                        $(this).next('.sec-nav').slideDown();
                    },
                    outFn: function () {

                        $(this).next('.sec-nav').slideUp(fn);
                    }
                });
            }

            publicTools.configBar(false);
        });

        // 基本设置 => 二级菜单的点击
        $('.sec-nav', '.submenu').on('click', 'a', function () {

            var _this = this,
                target = $(this).data('type'),
                title = $(this).text();


            switch (target) {
                case 'base-set':
                    publicTools.tabSettingItem(suc);
                    break;

                case 'password':
                    publicTools.tabSettingItem(suc);
                    break;

                default:
                    // return false;
                    break;
            };

            function suc() {

                window.location = $(_this).data('href');
            }
        });

        // 管理  menu-area => web-nav-list
        (function () {

            //  web-nav-list 的拖拽
            var menuDragList = new dragList('#web-nav-list', '.web-nav-i', {
                listMoveBtn: '.title .move-btn',
                listMoveBox: '#web-nav-list',
                startEv: function () {
                    this.status = false;
                },
                endEv: function ($changeEl) {
                    $changeEl.find('input[name="postPID[]"]').eq(0).val(function () {
                        return $changeEl.closest('ul').data('pid');
                    });
                },
                changeEv: function () {
                    if (!this.status) {

                        this.status = true;
                        $('.web-nav footer', '#menu-config-area')
                            .data('type', 'save-status')
                            .addClass('save-status');

                        $('#web-nav-list').off('save-orderchang')
                            .one('save-orderchang', function (ev, fn) {

                                $('.web-nav footer', '#menu-config-area').trigger('click', fn);
                            })

                    }
                }
            });

            //  管理 web-nav-list 下 按钮的提示信息
            $('#web-nav-list').on('mouseover', '.config .fa', function () {
                var _this = this;

                $(this).nextAll('.detail')
                    .text($(_this).data('tip'))
                    .css('left', function () {
                        return $(_this).position().left;
                    });
            });

            // 注册web-nav-list列表的打开设置项的事件
            $('#web-nav-list').on('open-set', '.web-nav-iconfig', function (ev) {
                var target = $(this).data('type-item'),
                    title = $(this).find('.title').text().trim(),
                    _this = this;

                function suc() {

                    publicTools.configBar(false, {
                        endFn: function () {
                            if (target == 'index') {
                                window.location = '/slider.php'
                            } else if (target == 'list' || target == 'link' || target == 'page' || target == 'dir') {
                                window.location = '/page-editor.php?id=' + $(_this).data('id');
                            } else {
                                window.location = '/list.php?id=' + $(_this).data('id');
                            }
                        }
                    });
                };

                publicTools.tabSettingItem(suc);
            })

            // 注册web-nav-list列表的打开编辑项的事件
            $('#web-nav-list').on('open-edite', '.web-nav-iconfig', function (ev) {
                var target = $(this).data('type-item'),
                    title = $(this).find('.title').text().trim(),
                    _this = this;

                function suc() {

                    publicTools.configBar(false, {
                        endFn: function () {
                            window.location = '/list.php?id=' + $(_this).data('mvars');
                        }
                    });
                };

                publicTools.tabSettingItem(suc);
            })

            // 注册web-nav-list列表的打开分类项的事件        
            $('#web-nav-list').on('open-divide', '.web-nav-iconfig', function (ev, suc) {

                var _this = this,
                    suc,
                    title = $(this).find('.title').text().trim();

                switch ($(this).data('type-item')) {
                    case 'list':
                        suc = function () {
                            publicTools.configBar(false, {
                                endFn: function () {
                                    window.location = '/list-cat.php?pid=' + $(_this).data('mvars');
                                }
                            });
                        };
                        publicTools.tabSettingItem(suc);
                        break;

                    default:

                        break;
                }
            });

            // 注册web-nav-list列表的预览事件
            $('#web-nav-list').on('preview-item', '.web-nav-iconfig', function () {

                var src = $(this).data('prev-href');
                publicTools.previewFrame(true, src);
            });

            // 注册 web-nav-list 列表项的删除事件
            $('#web-nav-list').on('remove-item', '.web-nav-iconfig', function () {

                var _this = this,
                    type = $(this).data('type-item'),
                    id = $(this).data('id');

                $.ajax({
                    type: "POST",
                    url: 'service/page-post.php?action=delete&type=' + type + '&id=' + id,
                    success: function (msg) {

                        var target = $(_this).closest('li'),
                            html = $(target.find('.web-nav-sec li:not(.init, .invisible-item)'));
                        $(target).find('input[name="postPID[]"]').val(0);
                        $(html).insertBefore(target);
                        target.slideUp(function () {
                            var closestSecNav = $(_this).closest('ul.web-nav-sec');
                            $(this).remove();

                            if (closestSecNav.find('li:not(".init,.invisible-item")').length) {

                            } else {
                                closestSecNav.find('.init').slideDown();
                            }
                        });

                        publicTools.tip(false, '删除成功');
                    }
                })
            });

            // 还原状态
            $('#web-nav-list').on('reset-state', function () {

                $(this).find('li.check').removeClass('check');
            });

            // 保存排序的行为
            $('#web-nav-list').on('save-order', function (ev, fn) {

                var orderInfor = $(this).closest('form').serialize();

                $.ajax({
                    type: 'POST',
                    url: 'service/nav-post?action=set',
                    data: orderInfor,
                    success: function (msg) {
                        fn && fn();
                        publicTools.tip(false, '保存导航列表排序');
                    }
                })
            });

            // web-nav-list 下按钮的点击行为
            $('#web-nav-list').on('click', '.config i', function () {

                var _this = this,
                    $targetEl = $(this).closest('.web-nav-iconfig'),
                    title = $targetEl.find('.title span').text(),
                    target = $(this).data('type'),
                    type = $targetEl.data('type-item'),
                    message,
                    boxType,
                    isShow = 1,
                    id = $targetEl.data('id');

                switch (type) {

                    case 'dir':
                        message = '仅删除下拉菜单目录，目录内版块不受影响';
                        break;

                    case 'page':
                    case 'link':
                        message = '删除后数据不可恢复，建议隐藏';
                        break;

                    case 'list':
                        message = '删除后数据仍保留，可在“添加导航版块”中重新找回';
                        break;

                    default:
                        break;
                };

                switch (target) {
                    case 'preview':

                        $(this).trigger('preview-item');
                        break;

                    case 'dp':

                        isShow = $(this).hasClass('close-eye') ? 1 : 0;

                        $.post('service/page-post.php?action=dp&id=' + id, {
                            postndp: isShow
                        }, function (msg) {

                            $('.setting-item').find('input[data-id-dp="' + id + '"]').attr('value', isShow);
                            $(_this).toggleClass('close-eye');
                        });
                        break;

                    case 'open-close':

                        $(this).tabActive({
                            target: '.web-nav-i',
                            parent: '#web-nav-list',
                            class: 'open',
                            type: 3,
                            inFn: function () {
                                $(this).closest('.web-nav-i').find('.web-nav-sec').slideDown(200);
                            },
                            outFn: function () {
                                $(this).closest('.web-nav-i').find('.web-nav-sec').slideUp(200);
                            }
                        });
                        break;

                    case 'delete':

                        $(_this).closest('li').addClass('delete');

                        if (type != 'list') {

                            boxType = 'warn';
                        }

                        publicTools.alertBox('.delete-box', true, {
                            btn: _this,
                            title: title,
                            tip: message,
                            type: boxType,
                            maskSet: {
                                end: function () {
                                    $(_this).closest('li').removeClass('delete');
                                }
                            },
                            saveFn: function () {
                                $(_this).trigger('remove-item');
                            },
                            cancelFn: function () {}
                        })
                        break;

                    default:
                        // return false;
                        break;
                }
                return false;
            });

            // 点击 web-nav-list 列表项事件
            $('#web-nav-list').on('click', '.web-nav-iconfig', function (ev) {
                if (ev.which != 1 || !$(this).data('type-item')) return false;

                var _this = this,
                    target = $(this).data('type-item'),
                    pos = $(this).offset().top - $('#mian-area').offset().top;


                if ('save-orderchang' in $._data($('#web-nav-list')[0], 'events')) {

                    $('#web-nav-list').trigger('save-orderchang', [run]);
                } else {

                    run()
                }

                function run() {
                    if (target === 'list') {

                        $(_this).trigger('open-edite');
                    } else if (target === 'index') {
                        $(_this).tabActive({
                            target: 'li',
                            parent: '#web-nav-list',
                            class: 'check',
                            type: 2
                        });
                        $(_this).trigger('open-set');
                    } else {

                        $(_this).trigger('open-set');
                    }
                }

            });


            // 底部添加导航的点击事件
            $('.web-nav footer', '#menu-config-area').on('click', function (ev, fn) {
                var suc,
                    target = $(this).data('type');

                $('#web-nav-list').off('save-orderchang');
                switch (target) {
                    case 'add-nav':
                        suc = function () {
                            publicTools.configBar(false, {
                                endFn: function () {
                                    window.location = '/page-editor.php?type=dir';
                                }
                            });
                        };
                        publicTools.tabSettingItem(suc);
                        break;

                    case 'save-status':
                        $(this).removeClass('save-status')
                            .data('type', 'add-nav');
                        $('#web-nav-list').trigger('save-order', fn)
                        break;

                    default:
                        break;
                };

                return false;
            });

        })();

        // 管理  menu-area => homePageConfig 区域的相关行为
        (function () {

            // home-page-list 的拖拽事件
            var homeDragList = new dragList('#home-page-list', '.web-nav-i', {
                listMoveBtn: '.title .move-btn',
                listMoveBox: '#home-page-list',
                startEv: function () {
                    this.status = false;
                },
                changeEv: function () {
                    if (!this.status) {
                        this.status = true;
                        $('#home-page-config footer')
                            .addClass('save-status')
                            .data('type', 'save-status');

                        $('#home-page-config').off('save-orderchang')
                            .one('save-orderchang', function (ev, fn) {

                                $('footer', '#home-page-config').trigger('click', fn);
                            });
                    };
                }
            });

            // #home-page-config 提示信息的显示行为
            $('#home-page-config').on('mouseover', '.config .fa', function () {

                var _this = this;

                $(this).nextAll('.detail')
                    .text($(_this).data('tip'))
                    .css('left', function () {
                        return $(_this).position().left;
                    });
            });

            // 注册#home-page-config列表的打开设置项的事件
            $('#home-page-config').on('open-set', '.web-nav-iconfig', function (ev) {

                var _this = this,
                    title = $(this).find('.title span').html(),
                    suc;

                switch ($(this).data('type-item')) {

                    case 'page':
                        publicTools.tabSettingItem('.edit-page', suc);
                        break;

                    case 'slider':

                        suc = function () {
                            publicTools.configBar(false, {
                                endFn: function () {

                                    window.location.href = '/slider-set';
                                }
                            });
                        }

                        publicTools.tabSettingItem(suc);
                        break;

                    case 'list':
                    case 'counter':
                    case 'contact':
                    case 'customize':
                        suc = function () {
                            publicTools.configBar(false, {
                                endFn: function () {

                                    window.location.href = '/home-editor.php?id=' + $(_this).data('id');
                                }
                            });
                        };
                        publicTools.tabSettingItem(suc);
                        break;
                    default:

                        break;
                }
            });

            // 注册#home-page-config列表的打开设置项的事件
            $('#home-page-config').on('open-edite', '.web-nav-iconfig', function (ev) {
                var _this = this;
                switch ($(this).data('type-item')) {
                    case 'slider':

                        publicTools.tabSettingItem(suc);

                        function suc() {
                            publicTools.configBar(false, {
                                endFn: function () {

                                    window.location.href = '/slider';
                                }
                            });
                        };
                        break;

                    case 'contact':
                        suc = function () {
                            publicTools.configBar(false, {
                                endFn: function () {

                                    window.location.href = '/contact';
                                }
                            });
                        };
                        publicTools.tabSettingItem(suc);
                        break;

                    default:

                        break;
                }
            })

            // 注册#home-page-config列表项的删除事件
            $('#home-page-config').on('remove-item', '.web-nav-iconfig', function () {
                var type = $(this).data('type-item'),
                    id = $(this).data('id');

                $(this).closest('li').slideUp()
                $.ajax({
                    type: "POST",
                    // service/home-post.php?action=delete&type=list&id=44028
                    url: 'service/home-post.php?action=delete&type=' + type + '&id=' + id,
                    success: function (msg) {

                        var target = $(_this).closest('li'),
                            html = $(target.find('.web-nav-sec li:not(.init)'));

                        $(html).insertBefore(target);
                        target.slideUp();
                        publicTools.tip(false, '删除成功');
                    }
                })
            })

            $('#home-page-config').on('save-order', function (ev, fn) {

                var orderInfor = $(this).closest('form').serialize();

                $.ajax({
                    type: 'POST',
                    url: 'service/home-post?action=set',
                    data: orderInfor,
                    success: function (msg) {

                        publicTools.tip(false, '保存首页列表排序');
                        fn && fn();
                    }
                })
            });

            // home-page-config 下列表的 web-nav-iconfig 的点击事件
            $('#home-page-config').on('click.open', '.web-nav-iconfig', function (ev) {
                if (ev.which != 1) return false;

                var _this = this,
                    target = $(this).data('type-item'),
                    pos = $(this).offset().top - $('#mian-area').offset().top;

                if ('save-orderchang' in $._data($('#home-page-config')[0], 'events')) {

                    $('#home-page-config').trigger('save-orderchang', [run]);
                } else {

                    run()
                }

                function run() {
                    if (target == 'slider') {

                        $(_this).trigger('open-edite', [function () {

                            suc();
                            publicTools.configBar(true, {
                                pos: pos,
                                hideItem: ['group', 'copy']
                            });
                        }]);
                        return false;
                    }

                    $(_this).trigger('open-set');
                }

            });

            // home-page-config 下按钮的点击事件 
            $('#home-page-config').on('click', 'i', function () {

                var _this = this,
                    $targetEl = $(this).closest('.web-nav-iconfig'),
                    src,
                    message,
                    boxType,
                    isShow = 1,
                    title = $targetEl.find('.title span').text(),
                    type = $targetEl.data('type-item'),
                    target = $(this).data('type'),
                    id = $targetEl.data('id');

                switch (type) {

                    case 'customize':
                    case 'counter':
                        message = '删除后数据不可恢复，建议隐藏';
                        break;

                    case 'list':
                        message = '删除后数据仍保留，可在“添加首页版块”中重新找回';
                        break;

                    default:
                        break;
                };

                switch (target) {
                    case 'home-back':
                        publicTools.homePageConfig(false);
                        break;

                    case 'preview':
                        src = $(this).data('href');
                        publicTools.previewFrame(true, src);
                        break;

                    case 'dp':

                        isShow = $(this).hasClass('close-eye') ? 1 : 0;

                        $.post('service/home-post.php?action=dp&id=' + id, {
                            postidp: isShow
                        }, function (msg) {
                            $(_this).toggleClass('close-eye');
                            $('.setting-item').find('input[data-id-dp="' + id + '"]').attr('value', isShow);
                        });
                        break;

                    case 'delete':

                        if (type != 'list') {

                            boxType = 'warn';
                        }
                        publicTools.alertBox('.delete-box', true, {
                            btn: _this,
                            title: title,
                            tip: message,
                            type: boxType,
                            maskSet: {
                                end: function () {
                                    $(_this).closest('li').removeClass('delete');
                                }
                            },
                            saveFn: function () {
                                $(_this).trigger('remove-item');
                            },
                            cancelFn: function () {}
                        })
                        break;
                    default:
                        // return false;
                        break;
                }
                return false;
            });

            $('#home-page-list').on('reset-state', function () {

                $(this).find('li.check').removeClass('check');
            });

            // home-page-list 底部保存按钮的点击
            $('#home-page-config').on('click', 'footer', function (ev, fn) {

                var suc,
                    target = $(this).data('type');

                $('#home-page-config').off('save-orderchang');
                switch (target) {
                    case 'add-index-moulde':
                        suc = function () {
                            publicTools.configBar(false, {
                                endFn: function () {
                                    window.location = '/home-editor.php?type=customize';
                                }
                            });
                        };
                        publicTools.tabSettingItem(suc);
                        break;
                    case 'save-status':
                        $(this).removeClass('save-status')
                            .data('type', 'add-index-moulde');

                        $('#home-page-config').trigger('save-order', [fn]);
                        break;

                    default:
                        // return false;
                        break;
                };
            });

            // 首页切换单屏长页
            $('#singleScreen').on('click', function () {
                var singleScreen = $(this).prop('checked') ? 0 : 1,
                    itemId = $(this).closest('form').data('id');

                $.post('service/page-post.php?action=singlescreen&id=' + itemId, {
                    singlescreen: singleScreen
                }, function (msg) {
                    publicTools.tip(false, '设置成功')
                })
            });
        })();
    })();

    // 管理 config-bar
    (function () {
        $('.config-list', '#config-bar').on('click', 'a', function () {

            var _this = this,
                target = $(this).data('type'),
                par = $('#menu-config-area').find('li.check').find('.web-nav-iconfig');

            if ($('#config-bar').prop('par')) {
                par = $('#config-bar').prop('par');
            }

            title = par.find('.title').text().trim();

            switch (target) {
                case 'set':
                    par.trigger('open-set');
                    break;

                case 'list':
                    par.trigger('open-edite');
                    break;

                case 'group':
                    par.trigger('open-divide');
                    break;

                case 'copy':
                    var copyTargetId = $(par).data('mvars');
                    publicTools.alertBox('.add-item-box', true, {
                        header: '克隆' + title + '版块',
                        btn: _this,
                        id: copyTargetId,
                        saveFn: function (val, formData) {
                            var isReady = publicTools.inputCheck($('.add-item-box form'));
                            if (isReady) {

                                $('.add-item-box').prop('notClose', false)
                                $.ajax({
                                    type: 'POST',
                                    data: formData,
                                    url: 'service/list-cat-post.php?action=copy&id=' + copyTargetId,
                                    success: function (msg) {

                                        location.reload();
                                    }
                                });
                            } else {
                                $('.add-item-box').prop('notClose', true)
                            }
                        }
                    });
                    break;
                default:
                    break;
            };
        })
    })();

    // setting-area 区域的相关行为
    (function () {
        // header 
        $('#pageHeader').one('init-dom', function () {

            var src;

            publicTools.createScrollBar($(this).find('.infor-box'));

            $('.header-infor span').on('click', function (ev) {

                switch ($(this).data('type')) {
                    case 'news':
                        // var pos = $(this).offset(),
                        //     x = pos.left + $(this).width() / 2,
                        //     y = pos.top + $(this).height() + 2,
                        //     timer;

                        // showNewsInfor(x, y)

                        // $(this).one('mouseleave', function () {
                        //     showNewsInfor(false);
                        // });

                        suc = function () {
                            window.location = '/message_public';
                        }

                        publicTools.tabSettingItem(suc);
                        break;

                    case 'resources-control':
                        suc = function () {
                            window.location = '/resources.php?page=1';
                        }

                        publicTools.tabSettingItem(suc);

                        break;

                    default:
                        break;
                }
            });

            var showNewsInfor = (function (x, y) {
                var $el = $('.news-infor-box'),
                    timer;

                $el.on('mouseenter', function () {

                    showNewsInfor(true);
                });

                $el.on('mouseleave', function () {

                    showNewsInfor(false);
                });
                showFn = function (x, y) {
                    if (x === false) {

                        clearTimeout(timer);
                        timer = setTimeout(function () {

                            $el.stop().fadeOut();
                        }, 300)
                    } else if (x === true) {

                        clearTimeout(timer);
                    } else {

                        timer = setTimeout(function () {

                            x -= $el.width() / 2;
                            $el.css({
                                top: y,
                                left: x
                            }).stop().slideDown()
                        }, 300)
                    }
                }
                return showFn;
            })();

            $('.news-infor-box header').on('click', 'span', function () {

                $(this).tabActive({
                    target: 'span',
                    parent: 'header',
                    type: 2,
                    inFn: function () {

                        var index = $(this).index();

                        $('.infor-wrap').css({
                            'transform': 'translateX(' + -50 * index + '%)'
                        })
                    }
                });
            });
        });

        // news-page 系统消息
        $('.news-page').one('init-dom', function () {

            var _this = this;
            initSroll();

            $('.news-page .news-infor').on('click', '.new-header', function (ev) {
                $(this).tabActive({
                    target: '.new-header',
                    parent: '.news-infor',
                    class: 'open',
                    inFn: function () {
                        $(this).closest('li').find('article').slideDown();
                    },
                    outFn: function () {
                        $(this).closest('li').find('article').slideUp();
                    }
                });
            });

            function initSroll() {

                var h = $(_this).find('.news-infor ul').height();

                $(_this).find('.news-infor ul').css({
                    'height': h
                })
                publicTools.createScrollBar($(_this).find('.news-infor ul'));
            }
        });

        $('.user-news-page').one('init-dom', function () {
            var _this = this;
            var pageIndex = +$.getSearchArgs("page=1").page;

            publicTools.createScrollBar($(_this).find('.setting-config'));
            $(_this).find('.list-table-footer .page-index a').eq(pageIndex - 1).addClass('active');
        });
        // main-page-set -- 基本设置 => 基本信息
        $('.main-page-set').one('init-dom', function () {

            var _this = this,
                upImgCom, upImgMo, upImgIcon;

            // 网站样式的选择
            $('.web-style', '.main-page-set').on('click', '.theme', function () {

                $(this).tabActive({
                    target: '.theme',
                    parent: '.web-style',
                    type: 2
                });
            });

            upImgCom = publicTools.singleImgUpLoader('#up-logo-c', {
                WebUploaderConfig: {}
            });

            upImgMo = publicTools.singleImgUpLoader('#up-logo-m', {
                WebUploaderConfig: {}
            });

            upImgIcon = publicTools.singleImgUpLoader('#up-icon', {
                WebUploaderConfig: {
                    accept: {
                        extensions: 'ico'
                    },
                }
            });

            publicTools.createScrollBar($(_this).find('.setting-config'));
            selectInput.init($(_this).find('.select-input'));

            $(this).on('hasChange', function (ev, json) {
                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);

                isChange = formIsChange || upImgCom.isChange || upImgMo.isChange || upImgIcon.isChange;

                if (isChange) {

                    config.changeFn();
                } else {

                    config.noChangeFn();
                }
                return false;
            });

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                var formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: "service/setting-post?action=edit",
                    data: formData,
                    success: function (msg) {
                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            });

        });

        $('.password-set').one('init-dom', function () {

            $(this).on('saveDate', function (ev, json) {

                var formData = $(this).serialize(),
                    _this = this,
                    config = {
                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: "service/password-post?action=edit",
                    data: formData,
                    success: function (msg) {
                        msg = JSON.parse(msg);
                        config.sucFn();
                        if (msg.action == '修改失败' || !msg.action) {

                            publicTools.tip(false, '密码修改失败', 'error');
                            var $passwordInput = $(_this).find('input[name="password"]'),
                                $passwordInput2 = $(_this).find('input[name="password2"]');

                            if ($passwordInput.val() != $passwordInput2.val()) {

                                $passwordInput2.closest('.text-input').find('.input-tip').text('和新密码输入不同，请重新输入');
                            } else {

                                $(_this).find('input[name="password0"]').closest('.text-input').find('.input-tip').text('密码输入错误');
                            };
                        } else {

                            publicTools.tip(false, '密码修改成功');
                        }
                    }
                });
            });
        });

        // list-edite 网站导航=>列表=>列表管理
        $('.list-edite').one('init-dom', function () {

            var _this = this,
                blockId = $(_this).data('id'),
                suc,
                urlSearch,
                pageIndex;

            urlSearch = $.getSearchArgs();
            pageIndex = urlSearch.page ? urlSearch.page : 1;
            $(this).find('.page-index a[data-id=' + pageIndex + ']').addClass('active');

            // 注册编辑
            $(this).find('.list-body').on('open-set', 'li', function () {
                var itemId = $(this).data('id');
                suc = function () {
                    publicTools.configBar(false, {
                        endFn: function () {
                            window.location = 'list-editor.php?pid=' + blockId + '&id=' + itemId;
                        }
                    });
                };
                publicTools.tabSettingItem(suc);
            });
            // addNewItem
            $(this).on('addNewItem', function () {

                var _this = this;
                suc = function () {
                    publicTools.configBar(false, {
                        endFn: function () {
                            window.location = '/list-editor.php?pid=' + $(_this).data('id');
                        }
                    });
                }

                publicTools.tabSettingItem(suc);
            });

            $(this).find('.list-body').on('removeItem', 'li', function (el, btn) {

                var _this = this;
                $(_this).addClass('delete');

                publicTools.alertBox('.delete-box', true, {
                    btn: btn,
                    title: '删除',
                    type: 'warn',
                    tip: '删除分类后，分类下数据也将删除，请谨慎操作',
                    maskSet: {
                        end: function () {
                            $(_this).removeClass('delete');
                        }
                    },
                    saveFn: function () {

                        $.ajax({
                            type: "POST",
                            url: "service/list-post.php?action=delete&id=" + $(_this).data('id'),
                            success: function (msg) {

                                msg = JSON.parse(msg);

                                if (msg.action == '删除成功') {

                                    $(_this).slideUp(function () {
                                        $(_this).remove()
                                    });
                                    publicTools.tip(false, '删除成功', 'error');
                                } else {

                                    publicTools.tip(false, '删除失败');
                                }
                            }
                        });
                    },
                    cancelFn: function () {}
                });
            });

            //  绑定事件用于触发相应行为
            $(this).find('.list-body').on('click', 'a', function () {

                var _this = this,
                    target = $(this).data('type');

                switch (target) {
                    case 'edit':
                        $(_this).closest('li').trigger('open-set');
                        break;

                    case 'delete':

                        $(_this).closest('li').trigger('removeItem', [_this])
                        break;

                    default:
                        break;
                }
            });

            $(this).find('.add-new-item').on('click', function () {
                $('.list-edite').trigger('addNewItem')
            });

            selectInput2.init($(this).find('.select-input'));
            publicTools.createScrollBar($(_this).find('.setting-config'));

            var $activeItem = $('#menu-config-area').find('li.check');

            if ($activeItem && $activeItem.length) {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;

                publicTools.configBar(true, {
                    pos: pos
                });
            };
        });

        // list-page-set 网站导航=>列表=>列表设置
        $('.list-page-set').one('init-dom', function () {

            if ($(this).data('mname') !== 'link') {
                var $activeItem = $('#menu-config-area').find('li.check');

                if ($activeItem && $activeItem.length) {
                    var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                    publicTools.configBar(true, {
                        status: 'set',
                        pos: pos
                    });
                }
            }

            var _this = this,
                controlBgStyle;

            controlBgStyle = $('#project-ban')
                .parents('.control-group')
                .find('.bg-style');

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();
                } else {

                    config.noChangeFn();
                }
                return false;
            });

            publicTools.singleImgUpLoader('#project-ban', {
                WebUploaderConfig: {

                    formData: {
                        type: 'service'
                    }
                }
            });

            publicTools.createScrollBar($(_this).find('.setting-config'));

            $(this).on('saveDate', function (ev, json) {


                publicTools.formReset(this);

                var itemId = $(this).data('id');
                var formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: "service/page-post?action=edit&id=" + itemId,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            });
        });

        // list-divide 网站导航=>列表=>列表分类
        $('.list-divide').one('init-dom', function () {

            var $activeItem = $('#menu-config-area').find('li.check'),
                settingArea = this;

            if ($activeItem && $activeItem.length) {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                publicTools.configBar(true, {
                    status: 'group',
                    pos: pos
                });
            }

            var _this = this,
                listItemDrag;

            listItemDrag = new dragList('.list-divide-item .list-body', '.list-infor', {
                listMoveBtn: '.move-btn',
                listMoveBox: '.list-divide-item .list-body',
                endEv: function () {
                    var sortIdArr = [],
                        $items = $('.list-divide-item .list-body li');

                    $items.each(function (i, n) {
                        var id = $(n).data('id');
                        sortIdArr.push(id);
                    });

                    $.post('service/list-cat-post?action=set', {
                        postID: sortIdArr
                    }, function (msg) {})
                }
            });

            $(this).on('addNewItem', '.addNewList', function (ev, title) {
                var _this = this,
                    itemId = $(this).data('id');

                publicTools.alertBox('.edite-box', true, {
                    btn: _this,
                    text: '',
                    saveFn: function (val) {

                        var data = {};
                        data.posttitle = val.title;
                        data.postpid = itemId;

                        if (val.title) {

                            $.ajax({
                                type: "POST",
                                url: 'service/list-cat-post?action=add&' + itemId,
                                data: data,
                                success: function (msg) {

                                    msg = JSON.parse(msg);

                                    if (msg.action == '添加成功') {

                                        publicTools.tip(false, '添加成功');

                                        if (typeof (val) != 'undefined') {
                                            var html = `<li>
                                                <div class="list-infor">
                                                    <span class="move-btn fa fa-arrows"></span>
                                                    <span class="group-title">
                                                        <i class="btn" data-type="edite">${val.title}</i>
                                                    </span>
                                                    <span class="btn fa fa-pencil" data-type="edite"></span>
                                                    <span class="btn fa fa-close" data-type="delete"></span>
                                                </div>
                                            </li>`;
                                            $(settingArea).find('.list-body').prepend($(html));
                                        }
                                    } else {

                                        publicTools.tip(false, '更新失败');
                                    }
                                }
                            })
                        }
                    }
                });

            });

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                isChange = listItemDrag.hasChange;

                if (isChange) {

                    config.changeFn();
                    listItemDrag.hasChange = false;
                } else {

                    config.noChangeFn();
                    listItemDrag.hasChange = false;
                }
                return false;
            });

            $('.list-divide-item .list-body').on('removeItem', 'li', function (ev, btn, text) {

                var _this = this,
                    itemId = $(_this).data('id');
                $(_this).addClass('delete');
                publicTools.alertBox('.delete-box', true, {
                    btn: btn,
                    title: '删除' + text,
                    type: 'warn',
                    tip: '删除后分类下所有数据会被<span class="redFont">永久删除，无法恢复</span>！！！',
                    maskSet: {
                        end: function () {
                            $(_this).removeClass('delete');
                        }
                    },
                    saveFn: function () {

                        $.ajax({
                            type: "POST",
                            url: "service/list-cat-post.php?action=delete&id=" + itemId,
                            success: function (msg) {

                                msg = JSON.parse(msg);
                                if (msg.action == '删除成功') {

                                    publicTools.tip(false, '删除成功');

                                    $(_this).slideUp(function () {
                                        $(_this).remove()
                                    });
                                } else {

                                    publicTools.tip(false, '删除失败', 'error');
                                }
                            }
                        });
                    },
                    cancelFn: function () {}
                });
            });

            $('.list-divide-item .list-body').on('editeItem', 'li', function (ev, btn, text) {

                var _this = this,
                    itemId = $(_this).data('id');
                publicTools.alertBox('.edite-box', true, {
                    btn: btn,
                    text: text,
                    saveFn: function (val) {

                        var data = {};
                        data.posttitle = val.title;
                        data.postpid = itemId;

                        if (val.title) {
                            // $('.list-divide').trigger('addNewItem', [val.title]);
                            $.ajax({
                                type: "POST",
                                url: "service/list-cat-post?action=edit&id=" + itemId,
                                data: data,
                                success: function (msg) {

                                    msg = JSON.parse(msg);

                                    if (msg.action == '更新成功') {

                                        publicTools.tip(false, '更新成功');
                                        if (typeof (val) != 'undefined') {
                                            $(_this).closest('li').find('.group-title').text(val.title)
                                        }
                                    } else {

                                        publicTools.tip(false, '更新失败', 'error');
                                    }
                                }
                            })
                        }
                    }
                    // saveFn: function (val) {

                    // }
                });
            });
            $('.list-divide-item .list-body').on('click', '.btn', function (ev) {

                var target = $(this).data('type'),
                    _this = this,
                    text = '',
                    itemId = $(_this).closest('li').data('id');

                text = $(_this).closest('.list-infor')
                    .find('.group-title').text().trim();

                switch (target) {
                    case 'edite':

                        $(_this).closest('li').trigger('editeItem', [_this, text]);
                        break;

                    case 'delete':

                        $(_this).closest('li').trigger('removeItem', [_this, text]);
                        break;

                    default:
                        break;
                }
            });

            $(this).find('.addNewList').on('click', function () {

                $(this).trigger('addNewItem');
            });
            publicTools.createScrollBar($(_this).find('.setting-config'));
        });

        // list-item-edite 网站导航=>列表=>列表管理=>列表项编辑
        $('.list-item-edite').one('init-dom', function () {

            var _this = this,
                tagInput = null,
                dragEv,
                imgUp1,
                imgUp2,
                UE1,
                UE2;


            var $activeItem = $('#menu-config-area').find('li.check');

            if ($activeItem && $activeItem.length) {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                publicTools.configBar(true, {
                    pos: pos
                });
            };

            // 初始化拖拽
            dragEv = new dragList('.list-item-edite .list-body', '.list-infor', {
                listMoveBtn: '.move-btn',
                listMoveBox: '.list-item-edite .list-body',
                endEv: function () {
                    $('.list-body', '.list-item-edite').trigger('upImgListData');
                }
            });

            // 初始化编辑器
            UE1 = publicTools.createUEEditor('myEditor3', 'detail')
            UE2 = publicTools.createUEEditor('myEditor5', 'simple')

            // 初始化 时间选择器
            datepicker.init('.list-item-edite .datepicker');

            // 初始化滚动条
            publicTools.createScrollBar($(_this).find('.setting-config'));

            // 初始化 tag-input
            tagInput = publicTools.createTagInput('.list-item-edite .tag-input');


            // 初始化缩略图上次功能
            imgUp1 = publicTools.singleImgUpLoader('#up-list-image', {
                WebUploaderConfig: {

                    thumbnailWidth: $('#up-list-image').css('width'),
                    thumbnailHeight: $('#up-list-image').css('height')
                }
            });

            imgUp2 = new upImage('#edite-item-image', {
                preview: false,
                errorEl: $('.drag-list').parent().find('.tip'),
                getSource: function (src) {

                    $('.list-body', '.list-item-edite').trigger('addNewItem', [src])
                },
                WebUploaderConfig: {
                    accept: {
                        title: '文件上传',
                        extensions: 'gif,jpg,png',
                        mimeTypes: 'image/jpg,image/ico,image/gif,image/png,image/jpeg'
                    },
                    duplicate: true,
                    pick: '#edite-item-image' + ' ' + '.fileImgPicker',
                    thumbnailWidth: 1000,
                    thumbnailHeight: 1000
                }
            });

            // 初始化下拉表单
            selectInput2.init($(this).find('.select-input'));

            // 注册添加图片列表事件
            $('.list-body', '.list-item-edite').on('addNewItem', function (ev, src, init) {

                var imgs = src.split(',');
                var html = '';
                if (imgs[0] != '') {

                    $.each(imgs, function (i, n) {
                        var imgSrc = n.replace(/\.jpg/, '_80x80.jpg');

                        html += `<li>
                                    <div class="list-infor">
                                        <span class="move-btn fa fa-arrows"></span>
                                        <span class="group-title">
                                            <a href="${n}">
                                                <img src="${imgSrc}" data-src= "${n}" alt="" target="_blank" class="mCS_img_loaded">
                                            </a>
                                        </span>
                                        <span class="btn fa fa-close" data-type="delete"></span>
                                    </div>
                                </li>`
                    });
                }

                if (init) {

                    $(html).appendTo(this);
                } else {

                    $(html).appendTo(this).hide().slideDown();
                    $('.list-body', '.list-item-edite').trigger('upImgListData');
                }
            });

            $('.list-body', '.list-item-edite').on('upImgListData', function (ev, src) {
                var sortImgsInfor = [];
                $('.list-body li img', '.list-item-edite').each(function (i, n) {

                    sortImgsInfor.push($(n).data('src'));
                });

                $('.list-item-edite input[name="postimage"]').val(sortImgsInfor.join(','))
            })

            // 注册删除图片列表事件
            $('.list-body', '.list-item-edite').on('removeImte', 'li', function (ev, btn) {

                var _this = this;

                $(_this).addClass('delete');
                publicTools.alertBox('.delete-box', true, {
                    btn: btn,
                    title: '删除项',
                    type: 'warn',
                    maskSet: {
                        end: function () {
                            $(_this).removeClass('delete');
                        }
                    },
                    saveFn: function () {

                        $(_this).slideUp(function () {
                            $(_this).remove()
                            $('.list-body', '.list-item-edite').trigger('upImgListData');
                        });
                    },
                    cancelFn: function () {}
                });
            });

            // 注册数据发生变化时执行的功能
            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    },
                    tagsInputIsChange = false;

                if (tagInput.hasChange) {

                    tagsInputIsChange = tagInput.hasChange();
                }


                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);

                // if (typeof UE1 == 'undefined') {
                //     UE1 = {
                //         hasChangeFF: false
                //     }
                // }

                // if (typeof UE2 == 'undefined') {
                //     UE2 = {
                //         hasChangeFF: false
                //     }
                // }

                isChange = dragEv.hasChange || formIsChange || imgUp1.isChange || imgUp2.isChange || tagsInputIsChange || UE1.hasChangeFF || UE2.hasChangeFF;

                if (isChange) {

                    config.changeFn();

                } else {
                    config.noChangeFn();

                }
                return false;
            });

            // 注册初始化列表事件
            $(this).find('.drag-list').one('initList', '.list-body', function () {
                var _this = this;
                $('.list-body', '.list-item-edite').trigger('addNewItem', [$(_this).data('item-img'), true]);
            });

            // 列表项按钮点击事件
            $('.list-body', '.list-item-edite').on('click', '.fa', function () {

                var _this = this,
                    target = $(this).data('type');

                switch (target) {
                    case 'delete':
                        $(_this).closest('li').trigger('removeImte', [this]);
                        break;

                    default:
                        break;
                }

            });

            // 标签点击事件
            $(this).find('.tag-group').on('click', 'span', function () {
                tagInput.addTag($(this).text(), '.list-item-edite .tag-input input');
            });

            $(this).find('.drag-list .list-body').trigger('initList');

            // 注册保存行为
            $(this).on('saveDate', function (ev, json) {

                UE1.sync();
                UE2.sync();

                publicTools.formReset(this);
                UE1.hasChangeFF = UE2.hasChangeFF = false;

                var formData = $(this).serialize(),
                    itemId = $(this).data('id'),
                    itemPid = $('input[name="postpid"]').val(),
                    ajaxURL,
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                ajaxURL = itemId ? "service/list-post?action=edit&id=" + itemId : 'service/list-post?action=add';

                console.log("/list.php?id=" + itemPid);
                $.ajax({
                    type: "POST",
                    url: ajaxURL,
                    data: formData,
                    success: function (msg) {
                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                            location.href = "/list.php?id=" + itemPid;
                        }
                    }
                });
            });
        });

        // link-edite 网站导航=>外链设置编辑
        $('.link-edite').one('init-dom', function () {

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();

                } else {
                    config.noChangeFn();

                }
                return false;
            });

            radioInput.init($(this).find('.radio-input-m'));

            $(this).find('input[name="posttitle"]').on('input', function () {
                var _this = this;
                $('#menu-area').trigger("changeSelectTitle", [$(_this).val()])
            });

            // 注册保存行为
            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                var formData = $(this).serialize(),
                    itemId = $(this).data('id'),
                    config = {

                        sucFn: function () {}
                    },
                    changeTitle;

                $.extend(true, config, json);
                changeTitle = $(this).find('input[name="posttitle"]').val();


                $.ajax({
                    type: "POST",
                    url: "service/page-post?action=edit&id=" + itemId,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功');
                            $('#menu-area').trigger("changeSelectTitle", [changeTitle])
                        }
                    }
                });
            });

        });

        // edit-page 网站导航||首页 => 页面管理设置
        $('.edit-page').one('init-dom', function () {

            var _this = this,
                controlBgStyle = $('#page-set-ban')
                .parents('.control-group')
                .find('.bg-style'),
                UE;

            UE = publicTools.createUEEditor('myEditor2', 'detail')

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange || UE.hasChangeFF;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();

                }
                return false;
            });

            publicTools.singleImgUpLoader('.edit-page .file-img-list');

            publicTools.createScrollBar($(_this).find('.setting-config'));

            $(this).find('input[name="posttitle"]').on('input', function () {
                var _this = this;
                $('#menu-area').trigger("changeSelectTitle", [$(_this).val()])
            });
            // 注册保存行为
            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);
                UE.hasChangeFF = false;
                UE.sync();

                var formData = $(this).serialize(),
                    itemId = $(this).data('id'),
                    config = {

                        sucFn: function () {}
                    },
                    changeTitle;

                $.extend(true, config, json);
                changeTitle = $(this).find('input[name="posttitle"]').val();

                $.ajax({
                    type: "POST",
                    url: "service/page-post?action=edit&id=" + itemId,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                            $('#menu-area').trigger("changeSelectTitle", [changeTitle])
                        }
                    }
                });
            });
        });

        $('.file-edite').one('init-dom', function () {

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();
                }
                return false;
            });

            $(this).find('input[name="posttitle"]').on('input', function () {

                var _this = this;
                $('#menu-area').trigger("changeSelectTitle", [$(_this).val()])
            });

            //有空的时候要进行修改，将页面的所有form 改成 section，然后通过 serizearray 的方式获取数据；或者找到页面提交的原因
            // $(this).find('input[name="posttitle"]').on('keydown', function (ev) {
            //     if (ev.keyCode == 13) {

            //         return false;
            //     }
            // });
            $(this).submit(function () {
                return false;
            });

            // 注册保存行为
            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                var formData = $(this).find('input').serializeArray(),
                    itemId = $(this).data('id'),
                    config = {

                        sucFn: function () {}
                    },
                    changeTitle;

                $.extend(true, config, json);
                changeTitle = $(this).find('input[name="posttitle"]').val();

                $.ajax({
                    type: "POST",
                    url: "service/page-post?action=edit&id=" + itemId,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            $('#menu-area').trigger("changeSelectTitle", [changeTitle])
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            });
        });

        // web-navset 网站导航 => 添加导航
        $('.web-navset').one('init-dom', function () {

            var _this = this,
                controlBgStyle = $('#add-page-bg')
                .parents('.control-group')
                .find('.bg-style'),
                UE;

            UE = publicTools.createUEEditor('myEditor2', 'detail');

            if ($('.web-navset .file-img-list')[0]) {

                publicTools.singleImgUpLoader('.web-navset .file-img-list');
            }

            publicTools.createScrollBar($(_this).find('.web-navset-area'));
            radioInput.init($(this).find('.radio-input-m'));

            $(this).submit(function () {
                return false;
            });

            $('header .add-moudle-nav', '.web-navset').on('click', 'a', function (ev) {

                var showEl,
                    target = $(this).data('nav');

                window.location = '/page-editor.php?type=' + $(this).data('nav');
            });


            // 列表类型的拷贝
            // if ($('.web-navset-config').hasClass('addlist')) {

            //     var hasItem = $('.config-item-con', '.web-navset-config').data('list-mvars').split(',');
            //     var $itemCon = $('.config-item-con .module-item', '.web-navset-config');
            //     $itemCon.each(function (i, n) {

            //         var mvars = $(n).data('id') + '';
            //         if (hasItem.indexOf(mvars) != -1) {
            //             $(n).addClass('disable');
            //         }
            //     });
            // }

            $('.addlist .unexist-module', '.web-navset').on('click', '.module-item', function () {

                var target = $(this).data('type'),
                    title,
                    _this = this,
                    addItemMvars;

                title = $(this).closest('.module-item').find('.module-title').text().trim();
                addItemMvars = $(this).data('id');
                publicTools.alertBox('.add-list-box', true, {
                    title: '添加到导航',
                    tip: '将"' + title + '"列表版块添加到导航',
                    type: 'add',
                    btn: _this,
                    id: addItemMvars,
                    saveFn: function (val, formData, formDataObject) {

                        $('.add-list-box form').find('input[name="posttitle"]').val(title);
                        var isReady = publicTools.inputCheck($('.add-list-box form')),
                            titleObj = {
                                'name': 'posttitle',
                                'value': title
                            };

                        formDataObject.push(titleObj);
                        if (isReady) {

                            $('.add-list-box').prop('notClose', false)
                            $.ajax({
                                type: 'POST',
                                data: formDataObject,
                                url: 'service/page-post?action=add&id=' + addItemMvars,
                                success: function (msg) {
                                    location.reload();
                                }
                            });
                        } else {
                            $('.add-list-box').prop('notClose', true)
                        }
                    }
                });
                // }
            });

            // 添加导航

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);


                UE.sync();

                var itemId = $(this).data('id'),
                    formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: 'service/page-post?action=add',
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            location.reload();
                        }
                    }
                });
            });
        });

        // slidebar-edite 首页=>幻灯=>列表管理
        $('.slidebar-edite').one('init-dom', function () {
            var $activeItem = $('#home-page-list').find('.web-nav-iconfig[data-type-item="slider"]');
            $activeItem.closest('li').addClass('check');

            if ($activeItem && $activeItem.length) {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                publicTools.configBar(true, {
                    pos: pos,
                    par: $activeItem
                });
            };

            var _this = this,
                hasRemoveItem = false;

            var dragEv = new dragList('.slide-img-item .list-body', '.list-infor', {
                listMoveBtn: '.move-btn',
                listMoveBox: '.slide-img-item .list-body',
                endEv: function () {
                    var sortIdArr = [],
                        $items = $('.slide-img-item .list-body li');

                    $items.each(function (i, n) {
                        var id = $(n).data('id');
                        sortIdArr.push(id);
                    });

                    $.post('service/slider-post?action=sort', {
                        postID: sortIdArr
                    }, function (msg) {})
                }
            });

            (function initImg(el) {
                var imgs = $(el).find('img');
                imgs.attr('src', function () {

                    return $(this).data('src').replace('.', '_80x80.');
                });
            })(this);

            $('.slide-img-item .list-body').on('removeItem', 'li', function (ev, btn) {
                var _this = this;
                $(_this).addClass('delete');

                publicTools.alertBox('.delete-box', true, {
                    btn: btn,
                    maskSet: {
                        end: function () {
                            $(_this).removeClass('delete');
                        }
                    },
                    saveFn: function () {

                        $.ajax({
                            type: "POST",
                            url: 'service/slider-post.php?action=delete&id=' + $(_this).data('id'),
                            success: function (msg) {

                                $(_this).slideUp(function () {
                                    $(_this).remove();
                                    hasRemoveItem = true;
                                })
                            }
                        });
                    },
                    cancelFn: function () {}
                });
            });

            $('.slide-img-item .list-body').on('editeItem', 'li', function (ev) {

                var _this = this;

                function suc() {

                    publicTools.configBar(false, {
                        endFn: function () {
                            window.location.href = '/slider-editor.php?id=' + $(_this).data('id');
                        }
                    });
                };
                publicTools.tabSettingItem(suc);
            })

            $('.slide-img-item .list-body').on('click', '.fa', function () {
                var _this = this,
                    target = $(this).data('type');

                switch (target) {
                    case 'delete':
                        $(_this).closest('li').trigger('removeItem', _this);
                        break;

                    case 'edite':
                        $(_this).closest('li').trigger('editeItem');

                        break;

                    default:
                        break;
                }

            });

            // 注册添加幻灯功能
            $(this).on('add-slider-item', function () {

                publicTools.tabSettingItem(suc);

                function suc() {
                    window.location = '/slider-editor';
                }
            });

            // $(this).on('hasChange', function (ev, json) {

            //     var isChange = false,
            //         config = {
            //             changeFn: function () {},
            //             noChangeFn: function () {}
            //         };

            //     $.extend(config, json);

            //     isChange = hasRemoveItem || dragEv.hasChange;

            //     if (isChange) {

            //         config.changeFn();

            //     } else {

            //         config.noChangeFn();
            //     }
            //     return false;
            // });

            $(this).on('click', '.addNewList', function () {

                $(this).trigger('add-slider-item');
            });

            publicTools.createScrollBar($(_this).find('.setting-config'));
        });

        // slidebar-set 首页=>幻灯=>列表设置
        $('.slidebar-set').one('init-dom', function () {

            var $activeItem = $('#home-page-list').find('.web-nav-iconfig[data-type-item="slider"]');
            $activeItem.closest('li').addClass('check');

            if ($activeItem && $activeItem.length) {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                publicTools.configBar(true, {
                    status: 'set',
                    pos: pos,
                    par: $activeItem
                });
            };

            selectInput2.init($(this).find('.select-input'));

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();
                }
                return false;
            });

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                var itemId = $(this).data('id'),
                    formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: 'service/slider-post?action=set',
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            })

        });

        // count-set 首页=>计数器
        $('.count-set').one('init-dom', function () {

            var _this = this,
                controlBgStyle = $(this.find)
                .parents('.control-group')
                .find('.bg-style');

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();
                }
                return false;
            });

            publicTools.singleImgUpLoader('.count-set .file-img-list');
            publicTools.createScrollBar($(_this).find('.setting-config'));
            radioInput.init($(this).find('.check-input-m'));
            radioInput.init($(this).find('.radio-input-m'));

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                var itemId = $(this).data('id'),
                    formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: 'service/home-post?action=edit&id=' + itemId,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            })
        });

        // index-list-edite 首页=>首页列表设置
        $('.index-list-edite').one('init-dom', function () {
            var _this = this,
                controlBgStyle = $('#index-list-bg')
                .closest('.control-group')
                .find('.bg-style');

            var $activeItem = $('#home-page-list').find('li.check .web-nav-iconfig');

            if ($activeItem && $activeItem.length && $activeItem.data('type-item') == 'contact') {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                publicTools.configBar(true, {
                    status: 'set',
                    pos: pos,
                    par: $activeItem
                });
            };

            publicTools.singleImgUpLoader('.index-list-edite .file-img-list', {
                type: {
                    video: true
                }
            });

            publicTools.createScrollBar($(_this).find('.setting-config'));
            radioInput.init($(this).find('.check-input-m'));
            radioInput.init($(this).find('.radio-input-m'));


            if ($('#runslide').prop('checked') == true) {

                $('#slideloop').closest('.config-item-son')
                    .animate({
                        width: 146
                    });
            }

            $('#runslide').on('change', function () {

                if ($(this).prop('checked') == true) {

                    $('#slideloop').attr('checked', false)
                        .closest('.config-item-son')
                        .animate({
                            width: 146
                        });
                } else {

                    $('#slideloop').attr('checked', false)
                        .closest('.config-item-son')
                        .animate({
                            width: '0'
                        });
                }
            })

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();
                }
                return false;
            });

            $(this).find('input[name="posttitle"]').on('input', function () {

                var _this = this;
                $('#menu-area').trigger("changeSelectTitle", [$(_this).val()])
            });

            // $(this).find('input[name="postremarks"]').on('input', function () {

            //     var _this = this,
            //         val = $(_this).val(),
            //         marksText;

            //     if (val.length > 0) {
            //         marksText = ' [' + val + ']';
            //     } else {
            //         marksText = '';
            //     }
            //     $('#menu-area').trigger("changeSelectMarks", [marksText])
            // });

            $(this).on('saveDate', function (ev, json) {
                publicTools.formReset(this);

                var itemId = $(this).data('id'),
                    formData = $(this).serializeArray(),
                    formData1 = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    },
                    changeTitle;

                $.extend(true, config, json);
                changeTitle = $(this).find('input[name="posttitle"]').val();

                $.ajax({
                    type: 'POST',
                    url: 'service/home-post?action=edit&id=' + itemId,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            $('#menu-area').trigger("changeSelectTitle", [changeTitle])
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            });
        });

        // contact-edite 首页=> 联系设置
        $('.contact-edite').one('init-dom', function () {
            var _this = this;

            var $activeItem = $('#home-page-list').find('.web-nav-iconfig[data-type-item="contact"]');
            $activeItem.closest('li').addClass('check');

            if ($activeItem && $activeItem.length) {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                publicTools.configBar(true, {
                    pos: pos,
                    par: $activeItem
                });
            };


            publicTools.createTagInput('.contact-edite .tag-input');
            publicTools.singleImgUpLoader('#weixin');

            publicTools.createScrollBar($(_this).find('.setting-config'));

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();
                }
                return false;
            });

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                var itemId = $(this).data('id'),
                    formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: 'service/contact-post?action=edit',
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            });
        });

        // index-module-set 首页=>添加首页版块
        $('.index-module-set').one('init-dom', function () {
            var _this = this,
                $activeItem,
                UE;

            $activeItem = $('header a.active', '.index-module-set');
            publicTools.createScrollBar($(_this).find('.module-set-area'));
            UE = publicTools.createUEEditor('myEditor4', 'normal')

            $(this).submit(function () {
                return false;
            });
            $('.module-set-config[data-type="customize"]').one('init-dom', function () {

                var controlBgStyle = $('#add-block-bg')
                    .parents('.control-group')
                    .find('.bg-style'),
                    $colorInput = $(this).find('input[type=color]');


                publicTools.singleImgUpLoader('.index-module-set .file-img-list.con');
                publicTools.singleImgUpLoader('.index-module-set .file-img-list.bg');

                radioInput.init($(this).find('.radio-input-m'));
                radioInput.init($(this).find('.check-input-m'));

                $colorInput.on('change', function () {
                    var color = this.value;
                    $('#myEditor4').find('iframe').css({
                        'background': color
                    })
                });
            });

            $('.module-set-config[data-type="counter"]').one('init-dom', function () {
                var controlBgStyle = $('#add-count-bg')
                    .parents('.control-group')
                    .find('.bg-style');

                publicTools.singleImgUpLoader('.index-module-set .file-img-list');
            });

            $('.module-set-config[data-type="list"]').one('init-dom', function () {

                // var hasItem = $(this).find('.config-item-con').data('list-mvars').split(',');
                var $itemCon = $(this).find('.config-item-con .module-item');


                // $itemCon.each(function (i, n) {

                //     var mvars = $(n).data('id') + '';
                //     if (hasItem.indexOf(mvars) != -1) {
                //         $(n).addClass('disable');
                //     }
                // });

                var controlBgStyle = $('#add-block-bg')
                    .parents('.control-group')
                    .find('.bg-style'),
                    $colorInput = $(this).find('input[type=color]');

                publicTools.singleImgUpLoader('.index-module-set .file-img-list');
            });

            $('header .add-moudle-nav', '.index-module-set').on('click', 'a', function () {
                var showEl,
                    target = $(this).data('nav');

                window.location = '/home-editor.php?type=' + $(this).data('nav');
            });

            // 列表类型的拷贝
            $('.unexist-module', '.index-module-set').on('click', '.module-item', function () {

                var target = $(this).data('type'),
                    title,
                    _this = this,
                    addItemMvars;

                title = $(this).closest('.module-item').find('.module-title').text().trim();
                addItemMvars = $(this).data('id');

                publicTools.alertBox('.add-list-box', true, {
                    title: '添加到首页',
                    tip: '将"' + title + '"列表版块添加到首页',
                    type: 'add',
                    btn: _this,
                    id: addItemMvars,
                    saveFn: function (val, formData) {
                        // $.ajax({
                        //     type: 'POST',
                        //     data: formData,
                        //     url: 'service/home-post.php?action=add&id=' + addItemMvars,
                        //     success: function (msg) {

                        //         location.reload();
                        //     }
                        // });
                        var isReady = publicTools.inputCheck($('.add-list-box form'));
                        if (isReady) {

                            $('.add-list-box').prop('notClose', false)
                            $.ajax({
                                type: 'POST',
                                data: formData,
                                url: 'service/home-post.php?action=add&id=' + addItemMvars,
                                success: function (msg) {

                                    location.reload();
                                }
                            });
                        } else {
                            $('.add-list-box').prop('notClose', true)
                        }
                    }
                });
            });

            $('.module-set-config[data-type="' + $activeItem.data('nav') + '"]').show().trigger('init-dom');

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange || UE.hasChangeFF;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();

                }
                return false;
            });

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                console.log(UE)
                UE.sync();

                var itemId = $(this).data('id'),
                    formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    };

                $.extend(true, config, json);

                $.post('service/home-post?action=add', formData, function (msg) {
                    config.sucFn();
                    // if (msg) {
                    location.reload();
                    // }
                });
            });
        });

        // 内容块编辑
        $('.customize-edite').one('init-dom', function () {

            var _this = this,
                controlBgStyle = $('#add-block-bg')
                .parents('.control-group')
                .find('.bg-style'),
                $colorInput = $(this).find('input[type=color]'),
                UE;

            UE = publicTools.createUEEditor('myEditor4', 'normal');

            UE.ready(function () {

                $('#myEditor4').find('iframe').css({
                    'background': function () {
                        return $colorInput.prop('value');
                    }
                })
            });

            publicTools.singleImgUpLoader('.customize-edite .file-img-list.bg');
            publicTools.singleImgUpLoader('.customize-edite .file-img-list.con');
            radioInput.init($(this).find('.radio-input-m'));
            radioInput.init($(this).find('.check-input-m'));

            $colorInput.on('change', function () {
                var color = this.value;
                $('#myEditor4').find('iframe').css({
                    'background': color
                })
            });

            publicTools.createScrollBar($(_this).find('.setting-config'));

            $(this).find('input[name="posttitle"]').on('input', function () {
                var _this = this;
                $('#menu-area').trigger("changeSelectTitle", [$(_this).val()])
            });

            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange || UE.hasChangeFF;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();
                }
                return false;
            });

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);
                UE.hasChangeFF = false;
                UE.sync();

                var itemId = $(this).data('id'),
                    formData = $(this).serialize(),
                    config = {

                        sucFn: function () {}
                    },
                    changeTitle;

                $.extend(true, config, json);
                changeTitle = $(this).find('input[name="posttitle"]').val();

                $.ajax({
                    type: 'POST',
                    url: 'service/home-post?action=edit&id=' + itemId,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            $('#menu-area').trigger("changeSelectTitle", [changeTitle])
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            });
        });

        // slider-item-edite 首页=>幻灯=>编辑 
        $('.slider-item-edite').one('init-dom', function () {
            var _this = this;

            var $activeItem = $('#home-page-list').find('.web-nav-iconfig[data-type-item="slider"]');
            $activeItem.closest('li').addClass('check');

            if ($activeItem && $activeItem.length) {
                var pos = $activeItem.offset().top - $('#mian-area').offset().top;
                publicTools.configBar(true, {
                    pos: pos,
                    par: $activeItem
                });
            };

            publicTools.singleImgUpLoader('#slider-pc', {
                type: {
                    video: true
                }
            });

            publicTools.singleImgUpLoader('#slider-mo', {
                type: {
                    video: true
                }
            });

            datepicker.init('.slider-item-edite .datepicker');
            radioInput.init($(this).find('.radio-input-m'));
            publicTools.createScrollBar($(_this).find('.setting-config'));
            $(this).on('hasChange', function (ev, json) {

                var isChange = false,
                    formIsChange = false,
                    config = {
                        changeFn: function () {},
                        noChangeFn: function () {}
                    };

                $.extend(config, json);

                formIsChange = publicTools.formIsDirty(this);
                isChange = formIsChange;

                if (isChange) {

                    config.changeFn();

                } else {

                    config.noChangeFn();
                }
                return false;
            });

            $(this).on('saveDate', function (ev, json) {

                publicTools.formReset(this);

                var itemId = $(this).data('id'),
                    formData = $(this).serialize(),
                    ajaxURL,
                    config = {

                        sucFn: function () {}
                    };

                ajaxURL = itemId ? "service/slider-post?action=edit&id=" + itemId : 'service/slider-post?action=add';
                $.extend(true, config, json);

                $.ajax({
                    type: "POST",
                    url: ajaxURL,
                    data: formData,
                    success: function (msg) {

                        config.sucFn();
                        if (msg) {
                            publicTools.tip(false, '保存成功')
                        }
                    }
                });
            });
        });

        $('.resources').one('init-dom', function () {
            var _this = this,
                urlSearch;

            urlSearch = $.getSearchArgs();
            $(this).find('.page-index a[data-id=' + urlSearch.page + ']').addClass('active');

            publicTools.createScrollBar($(_this).find('.setting-config'));

            $(this).find('.list-body').on('removeItem', 'li', function (el, btn) {

                var _this = this,
                    itemId = $(this).closest('li').data('id');
                $(_this).addClass('delete');
                publicTools.alertBox('.delete-box', true, {
                    btn: btn,
                    title: '删除',
                    type: 'warn',
                    maskSet: {
                        end: function () {
                            $(_this).removeClass('delete');
                        }
                    },
                    saveFn: function () {
                        var url = 'service/resources-post.php?action=delete&id=' + itemId;
                        $.post('service/resources-post.php?action=delete&id=' + itemId, function () {
                            $(_this).slideUp(function () {
                                $(this).remove()
                            });
                        })
                    },
                    cancelFn: function () {}
                });
            });

            $(this).find('.list-body').on('click', 'span a', function () {
                var _this = this,
                    target = $(this).data('type');
                switch (target) {
                    case 'delete':

                        $(_this).closest('li').trigger('removeItem', [_this])
                        break;

                    default:
                        break;
                }
            })
        })
    })();

    // 管理公共行为
    (function () {

        // $('.fa-eye').on('click', function () {
        //     $(this).toggleClass('close-eye');
        // });

        // 禁止按钮的点击冒泡行为，使其不会影响拖拽行为
        // $('.config i', '#menu-area').on('mousedown mouseup', function () {
        //     return false;
        // });

        // 模拟表单：
        // $('.check-input').on('click', 'span', function (ev) {
        //     var par = $(ev.delegateTarget),
        //         val = $(this).data('input-value');
        //     $(this).tabActive({
        //         target: 'span',
        //         parent: '.check-input',
        //         type: 2
        //     });

        //     if (typeof val !== undefined) {
        //         par.find('input').prop('value', val);
        //     }
        // });

        // $('.radio-input').on('click', 'div', function (ev) {
        //     var par = $(ev.delegateTarget),
        //         val = $(this).data('input-option');
        //     $(this).tabActive({
        //         target: 'div',
        //         parent: '.radio-input',
        //         type: 2
        //     });

        //     if (typeof val !== undefined) {

        //         par.find('input[type=text]').prop('value', val);
        //     }
        // });

        $('.choice-input').on('click', '.input-option span', function (ev) {

            var par = ev.delegateTarget,
                input = $(par).find('input'),
                val = $(this).data('value');

            input.prop('value', val);
        });

    })();

    // 保存相关的行为 
    (function () {

        $('.setting-item').on('save-fn', function (ev, onOff, json) {
            var _this = this,
                header = $(_this).find('header>.title').text(),
                config = {
                    header: header,
                    tip: '',
                    saveFn: function () {},
                    cancelFn: function () {},
                    sucFn: function () {}
                };

            $.extend(config, json);

            if (onOff) {
                $(this).trigger('saveDate', {
                    sucFn: config.sucFn
                });
            } else {

                publicTools.saveAlert(true, {
                    header: config.header,
                    tip: config.tip,
                    title: config.title,
                    saveFn: function () {
                        $(_this).trigger('saveDate', {
                            sucFn: config.saveFn
                        });
                    },
                    cancelFn: function () {
                        config.cancelFn();
                    }
                });

            }
        });

        $('.setting-item').on('click', '.save-btn', function () {

            var _this = this,
                isReady = publicTools.inputCheck($(_this.closest('form')));

            if ($(_this).prop('disable')) {

                return false;
            } else if (isReady) {

                $(_this).prop('disable', true);
                $(_this).trigger('save-fn', [true, {
                    sucFn: function () {
                        $(_this).prop('disable', false);
                    }
                }]);
            }
        });
    })();

    // preview 框架内部的行为
    (function () {
        $('#preview-page .tab-btn').on('click', function () {
            publicTools.previewFrame(false);
        })
    })();
})(window, jQuery);

// datePicker 数据计算
(function (win) {

    var datepicker = {};

    datepicker.getMonthDate = function (year, month) {

        var ret = [],
            today = new Date(),

            year,
            month,

            firstDay,
            firstDate,
            firstDayWeekDay,

            lastDay,
            lastDate,
            lastDayOfLastMonth,
            lastDateOfLastMonth,

            showDate,
            date,
            preMonthDayCount,
            thisMonth;


        if (!year || !month) {

            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        firstDay = new Date(year, month - 1, 1);
        firstDate = firstDay.getDate();
        firstDayWeekDay = firstDay.getDay();
        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;


        if (firstDayWeekDay === 0) {
            firstDayWeekDay = 7;
        };

        lastDayOfLastMonth = new Date(year, month - 1, 0);
        lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        preMonthDayCount = firstDayWeekDay - 1;
        lastDay = new Date(year, month, 0)
        lastDate = lastDay.getDate();

        for (var i = 1; i <= 7 * 6; i++) {

            date = i - preMonthDayCount;
            showDate = date;
            thisMonth = month;

            if (date <= 0) {

                // 上个月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;

            } else if (date > lastDate) {

                // 下一个月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if (thisMonth === 0) {

                thisMonth = 12;
            } else if (thisMonth === 13) {

                thisMonth = 1;
            }

            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            })

        }
        return {
            year: year,
            month: month,
            lastDate: lastDate,
            firstDate: firstDate,
            day: ret
        };

    }
    win.datepicker = datepicker;
})(window);

// datePicker 
(function (win) {
    var datepicker = win.datepicker,
        monthDate,
        $wrapper,
        simMonthDate = {};

    datepicker.buildUi = function (year, month) {

        monthDate = datepicker.getMonthDate(year, month);

        var html = '<div class="ui-datepicker-header">' +
            '<a href="#" class="ui-datepicker-prev-btn">&lt;</a>' +
            '<a href="#" class="ui-datepicker-next-btn">&gt;</a>' +
            '<span class="ui-datepicker-curr-month">' +
            '</span>' +
            '</div>' +
            '<div class="ui-datepicker-body"></div>';

        $wrapper = $('<div class ="ui-datepicker-wrapper" data-type="date"></div>').appendTo('body');
        $wrapper.html(html);
        datepicker.buildDay(year, month);

        return html;
    };

    datepicker.buildDay = function (year, month) {

        monthDate = datepicker.getMonthDate(year, month);

        var html = '<table>' +
            '<thead>' +
            '<tr>' +
            '<th>一</th>' +
            '<th>二</th>' +
            '<th>三</th>' +
            '<th>四</th>' +
            '<th>五</th>' +
            '<th>六</th>' +
            '<th>日</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>';

        for (var i = 0; i < monthDate.day.length; i++) {
            var date = monthDate.day[i];
            if (i % 7 === 0) {
                html += '<tr>';
            }

            if (date.date < monthDate.firstDate || date.date > monthDate.lastDate) {

                html += '<td data-date=" ' + date.date + ' " class = "other">' + date.showDate + '</td>';
            } else {
                html += '<td data-date=" ' + date.date + ' ">' + date.showDate + '</td>';
            }

            if (i % 7 === 6) {
                html += '</tr>';
            }
        };
        html += '</tbody>' +
            '</table>';

        $('.ui-datepicker-body').html(html);
        $('.ui-datepicker-curr-month').html(
            monthDate.year +
            '-' +
            monthDate.month);
    };

    datepicker.buildMonth = function (year) {
        year = year || monthDate.year;
        var html = '<table>' +
            '<thead>' +
            '</thead>' +
            '<tbody>';

        for (var i = 1; i <= 12; i++) {

            if (i % 4 === 1) {
                html += '<tr>';
            }

            html += '<td>' + i + '月</td>';

            if (i % 4 === 0) {
                html += '</tr>';
            }
        }
        html += '</tbody>' +
            '</table>';

        $('.ui-datepicker-body').html(html);
        $('.ui-datepicker-curr-month').html(year);
    };

    datepicker.buildYear = function (year) {
        year = year || monthDate.year;

        var html = '<table>' +
            '<thead>' +
            '</thead>' +
            '<tbody>';

        var showYear = parseInt(year / 10) * 10 - 1;

        for (var i = 0; i < 12; i++) {

            if (i % 4 === 0) {
                html += '<tr>';
            }
            if (i === 0) {

                html += '<td class="other">' + (showYear) + '年</td>';
            } else if (i === 11) {

                html += '<td class="other">' + (showYear + 11) + '年</td>';
            } else {

                html += '<td>' + (showYear + i) + '年</td>';
            }

            if (i % 4 === 3) {
                html += '</tr>';
            }
        }

        html += '</tbody>' +
            '</table>';

        $('.ui-datepicker-body').html(html);
        $('.ui-datepicker-curr-month').html(showYear + "-" + (showYear + 9));
    }

    datepicker.render = function (dir) {
        var year, month;
        var type = $wrapper.data('type');

        year = monthDate.year;
        month = monthDate.month;

        switch (type) {
            case 'date':
                if (dir === 'prev') {
                    month--;
                } else if (dir === 'next') {
                    month++;
                }
                datepicker.buildDay(year, month);
                break;

            case 'month':

                if (dir === 'prev') {
                    simMonthDate.year--;
                } else if (dir === 'next') {
                    simMonthDate.year++;
                }
                datepicker.buildMonth(simMonthDate.year);
                break;

            case 'year':
                if (dir === 'prev') {
                    simMonthDate.year -= 10;
                } else if (dir === 'next') {
                    simMonthDate.year += 10;
                }
                datepicker.buildYear(simMonthDate.year);
                break;

            default:
                break;
        };
    }

    datepicker.init = function (input) {
        datepicker.buildUi();
        datepicker.render();

        var $input = $(input);
        var onOff = false;
        var type = $('.ui-datepicker-wrapper').data('type');
        var nowDate = new Date();

        $input.data('value', formate(nowDate));
        $input.on('click', function () {
            if (onOff) {

                onOff = false;
                $('body').trigger('click.hideDatepicker');
            } else {

                onOff = true;
                $wrapper.addClass('ui-datepicker-wrapper-show')
                var left = $input.offset().left;
                var top = $input.offset().top;
                var height = $input.height();
                var bodyHeight = $wrapper.height();
                if (bodyHeight + top <= $(window).height()) {

                    $wrapper.css({
                        top: top + height + 2 + 'px',
                        left: left + 'px'
                    });
                } else {

                    $wrapper.css({
                        top: top - bodyHeight - 6 + 'px',
                        left: left + 'px'
                    });
                }


                $('body').one('click.hideDatepicker', function () {
                    onOff = false;
                    $wrapper.removeClass('ui-datepicker-wrapper-show')
                });
                return false;
            }
        });


        $wrapper.on('click', function (ev) {

            var $target = $(ev.target);

            if ($target.hasClass('ui-datepicker-prev-btn')) {

                datepicker.render('prev')
            } else if ($target.hasClass('ui-datepicker-next-btn')) {

                datepicker.render('next')
            } else if ($target.hasClass('ui-datepicker-curr-month')) {
                $.extend(true, simMonthDate, monthDate)

                $(this).trigger('tabType');
            } else {
                return;
            }

            return false;
        });

        $wrapper.on('click', 'td', function (ev) {
            var $target = ev.target;
            var type = $wrapper.data('type');

            switch (type) {
                case 'date':
                    var date = new Date(monthDate.year, monthDate.month - 1, $target.dataset.date);
                    $input.prop('value', formate(date));
                    $wrapper.removeClass('ui-datepicker-wrapper-show');
                    isOpen = false;
                    break;

                case 'month':
                    monthDate.month = parseInt($(this).text());
                    $wrapper.trigger('tabType', ['year']);

                    break;

                case 'year':
                    monthDate.year = parseInt($(this).text());
                    $wrapper.trigger('tabType', ['date']);

                    break;
                default:
                    break;
            };
        })

        $wrapper.on('tabType', function (ev, type) {
            type = type || $(this).data('type');

            switch (type) {
                case 'date':
                    $(this).data('type', 'month');
                    datepicker.buildMonth();
                    break;

                case 'month':
                    $(this).data('type', 'year');
                    datepicker.buildYear(monthDate.year);
                    break;

                case 'year':
                    $(this).data('type', 'date');
                    datepicker.buildDay(monthDate.year, monthDate.month);
                    break;

                default:
                    break;
            }
        })

    }

    function formate(date) {
        ret = '';

        var padding = function (num) {
            if (num <= 9) {
                return '0' + num;
            }
            return num;
        }
        ret += date.getFullYear() + '-';
        ret += padding(date.getMonth() + 1) + '-';
        ret += padding(date.getDate());

        return ret;
    }
})(window);