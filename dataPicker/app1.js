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
        con;

    datepicker.buildUi = function (year, month) {

        monthDate = datepicker.getMonthDate(year, month);

        var html = '<div class="ui-datepicker-header">' +
            '<a href="#" class="ui-datepicker-prev-btn">&lt;</a>' +
            '<a href="#" class="ui-datepicker-next-btn">&gt;</a>' +
            '<span class="ui-datepicker-curr-month">' +
            monthDate.year +
            '-' +
            monthDate.month +
            '</span>' +
            '</div>' +
            '<div class="ui-datepicker-body">';


        html += datepicker.buildDay(year, month);

        html += '</div>';

        return html;

    };

    datepicker.buildDay = function (year, month) {
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

        monthDate = datepicker.getMonthDate(year, month);

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

        return html;
    };

    datepicker.buildMonth = function () {
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

        return html;
    };

    datepicker.buildYear = function (year) {
        var html = '<table>' +
            '<thead>' +
            '</thead>' +
            '<tbody>';

        var showYear = parseInt(year / 10) * 10;

        for (var i = 0; i < 12; i++) {

            if (i % 4 === 0) {
                html += '<tr>';
            }
            if (i === 0) {

                html += '<td class="other">' + (showYear - 1) + '年</td>';
            } else if (i === 11) {

                html += '<td class="other">' + (showYear + 1) + '年</td>';
            } else {

                html += '<td>' + (showYear + i) + '年</td>';
            }

            if (i % 4 === 3) {
                html += '</tr>';
            }
        }

        html += '</tbody>' +
            '</table>';

        return html;
    }

    datepicker.render = function (dir) {
        var year, month;
        if (monthDate) {

            year = monthDate.year;
            month = monthDate.month;
        }

        if (dir === 'prev') {
            month--;
        } else if (dir === 'next') {
            month++;
        }

        var html = datepicker.buildUi(year, month);

        $wrapper = $('.ui-datepicker-wrapper');
        if (!$wrapper[0]) {
            $wrapper = $('<div class ="ui-datepicker-wrapper"></div>').appendTo('body');
        }
        $wrapper.html(html);
    }

    datepicker.init = function (input) {
        datepicker.render();

        var $input = $(input);
        var isOpen = false;

        $input.on('click', function () {
            if (isOpen) {

                $wrapper.removeClass('ui-datepicker-wrapper-show');
                isOpen = false;
            } else {

                $wrapper.addClass('ui-datepicker-wrapper-show')
                var left = $input.offsetLeft;
                var top = $input.offsetTop;
                var height = $input.offsetHeight;
                $wrapper.css ({
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
            } else {
                return
            }

        });

        $wrapper.on('click', function (ev) {
            var $target = ev.target;
            if ($target.tagName.toLowerCase() !== 'td') {
                return;
            };

            var date = new Date(monthDate.year, monthDate.month - 1, $target.dataset.date);

            $input.attr('value', formate(date));
            $wrapper.removeClass('ui-datepicker-wrapper-show');
            isOpen = false;
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