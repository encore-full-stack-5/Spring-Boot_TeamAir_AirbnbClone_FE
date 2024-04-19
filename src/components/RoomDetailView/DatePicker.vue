<script>
export default {
  name: "DatePicker",
  data() {
    return {
      today: new Date(),
      week: ["일", "월", "화", "수", "목", "금", "토"],
      calendarHeader: "",
      days: [],
      roomMore:
        "인스타 감성 인테리어 하우스에서 바베큐와 벽난로를 즐기세요. 모던하고 심플한 화이트 인테리어로 세련미와 실용성을 강조한 2Bathroom & 3Room & 4QueenBed의 넓은 공간, 거기에 더해 다이닝과 이어지는 바베큐룸까지 갖춘,특별한 공간이 포레스트 스테이 입니다. (인원수에 따라 방과 화장실의 오픈 제한이 있으니 ,상세소개에서 반드시 사전체크 하십시오)",
    };
  },
  mounted() {
    this.calenderImplementation();
  },
  methods: {
    calenderImplementation: function () {
      this.days = [];
      const year = this.today.getFullYear();
      const month = this.today.getMonth();
      const startDayOfTheMonth = new Date(year, month, 1).getDay();
      const endDayOfTheMonth = new Date(year, month + 1, 0).getDate();
      const basicDays = Array.from(
        { length: endDayOfTheMonth },
        (v, i) => i + 1
      );
      const emptyDays = Array(startDayOfTheMonth).fill(null);
      const combinedDays = [...emptyDays, ...basicDays];
      for (let i = 0; i < endDayOfTheMonth + startDayOfTheMonth; i += 7) {
        this.days.push(combinedDays.slice(i, i + 7));
      }
      this.calendarHeader = `${year}년 ${month + 1}월`;
      this.addLastWeekEmptyDays();
    },
    addLastWeekEmptyDays: function () {
      const daysLastIndex = this.days.length - 1;
      if (this.days[daysLastIndex !== 7]) this.days[daysLastIndex].length = 7;
    },
    changeMonth: function (val) {
      this.today = new Date(
        this.today.setMonth(this.today.getMonth() + val, 1)
      );
      this.calenderImplementation();
    },
  },
};
</script>
