(function () {

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
    window.datepicker = datepicker;
})();

(function () {
    var datepicker = window.datepicker,
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
        var isOpen = false;

        var type = $('.ui-datepicker-wrapper').data('type');
        $input.on('click', function () {

            if (isOpen) {

                $wrapper.removeClass('ui-datepicker-wrapper-show');
                isOpen = false;
            } else {

                $wrapper.addClass('ui-datepicker-wrapper-show')
                var left = $input.offsetLeft;
                var top = $input.offsetTop;
                var height = $input.offsetHeight;
                $wrapper.css({
                    top: top + height + 2 + 'px',
                    left: left + 'px'
                });

                isOpen = true;
            };
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

        });

        $wrapper.on('click', 'td', function (ev) {
            var $target = ev.target;
            var type = $wrapper.data('type');

            switch (type) {
                case 'date':
                    var date = new Date(monthDate.year, monthDate.month - 1, $target.dataset.date);
                    $input.attr('value', formate(date));
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
})();