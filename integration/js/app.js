// 导航当前项高亮（指南第三部分第五点）
$(function () {
  const navLinks = $('.navbar .nav-link');
  navLinks.each(function () {
    const link = $(this);
    if (link.hasClass('active')) {
      link.attr('aria-current', 'page');
    } else {
      link.removeAttr('aria-current');
    }
  });
});

// 自习室数据 + 筛选（仅 study-rooms.html）
const studyRooms = [
  { name: '图书馆一楼自习室', floor: 1, open: true },
  { name: '图书馆二楼自习室', floor: 2, open: true },
  { name: '教学楼A区自习室', floor: 1, open: false },
  { name: '教学楼B区自习室', floor: 2, open: true },
  { name: '实验楼自习室', floor: 3, open: false }
];

$(function () {
  if ($('#study-room-list').length === 0) return;

  const renderList = () => {
    const floor = $('#filter-floor').val();
    const status = $('#filter-status').val();
    const filtered = studyRooms.filter(r => {
      if (floor !== 'all' && String(r.floor) !== floor) return false;
      if (status === 'open' && !r.open) return false;
      if (status === 'closed' && r.open) return false;
      return true;
    });
    const html = filtered.length
      ? filtered.map(r => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${r.name}（${r.floor}F）</span>
            <span class="badge bg-${r.open ? 'success' : 'secondary'}">${r.open ? '开放' : '关闭'}</span>
          </li>`).join('')
      : '<li class="list-group-item text-muted">无符合条件的自习室</li>';
    $('#study-room-list').html(html);
  };

  $('#filter-floor, #filter-status').on('change', renderList);
  renderList();
});

// 统计图表（仅 stats.html）
$(function () {
  if ($('#usage-chart').length === 0) return;

  $.getJSON('data/data.json')
    .done(data => {
      $('#data-source').text('数据来源：' + data.source);
      echarts.init($('#usage-chart')[0]).setOption({
        title: { text: data.title, left: 'center' },
        tooltip: {},
        xAxis: { type: 'category', data: data.rooms.map(r => r.name) },
        yAxis: { type: 'value', name: data.unit },
        series: [{ type: 'bar', data: data.rooms.map(r => r.usage) }]
      });
    })
    .fail(() => {
      $('#usage-chart').text('加载失败');
    });
});