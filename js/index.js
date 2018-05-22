const today = new moment();
today.millisecond(0);
today.second(0);
today.minute(0);
today.hour(0);
dayUnix = today.valueOf();
yearUnix = (new moment(String(today.year()), 'YYYY')).valueOf();
let listVue = new Vue({
    el: '#feed-wrap',
    data: {
        items: jsonItem,
    },
    filters: {
        timeHandler: function (value) {
            if (value > dayUnix) {
                return (new moment(value)).format('HH:mm');
            } else if (value > yearUnix) {
                return (new moment(value)).format('MM-DD HH:mm');
            } else {
                return (new moment(value)).format('YYYY-MM-DD HH:mm');
            }
        }
    }
});

let page = new Vue({
    el: '#pagination',
    data: {
        currentPageNo: 1,
        defaultPageSize: 20,
        itemCount: 199,
        currentResultLength: 20,
        jumpPageNo: 1
    },
    computed: {
        pageCount: function () {
            return Math.ceil(this.itemCount / this.defaultPageSize);
        },
        pageList: function () {
            if (this.itemCount === 0) {
                return [];
            } else {
                let min = Math.max(1, this.currentPageNo - 2);
                let max = Math.min(this.pageCount, this.currentPageNo + 2);
                let arr = [];
                for (; min <= max; min++) {
                    arr.push(min);
                }
                return arr;
            }
        },
        startIndex: function () {
            return this.defaultPageSize * (this.currentPageNo - 1) + 1;
        },
        endIndex: function () {
            return this.defaultPageSize * (this.currentPageNo - 1) + this.currentResultLength;
        }
    },
    methods: {
        resetPage: function (total, resultLength, pageNo, pageSize) {
            if (typeof(pageSize) !== "undefined") {
                this.defaultPageSize = pageSize;
            }
            if (typeof(pageNo) !== "undefined") {
                this.currentPageNo = pageNo;
            } else {
                if (total !== 0) {
                    this.currentPageNo = 1;
                } else {
                    this.currentPageNo = 0;
                }
            }
            this.currentResultLength = resultLength;
            this.itemCount = total;
        },
        jumpPage: function (pageNo) {
            $("body").animate({scrollTop: 0}, 300, searchModal.searchList(pageNo));
        },
        submit: function () {
            if (typeof(this.jumpPageNo) === "number" && this.jumpPageNo < this.pageCount) {
                this.jumpPage(this.jumpPageNo);
            } else {
                this.jumpPageNo = 1;
            }
        }
    },
    mounted: function () {
        $('#pagination').show();
    }
});
