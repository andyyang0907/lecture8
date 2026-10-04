// 导航当前项高亮
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

// 加载数据，渲染各页面
$(function () {
  const $status = $('#status');

  $.getJSON('data/rockets.json')
    .done(data => {
      if ($('#data-source').length) {
        $('#data-source').text('数据来源：' + data.source);
      }
      renderIndex(data);
      renderDetail(data);
      renderTimeline(data);
    })
    .fail(() => {
      $status.text('加载失败：data/rockets.json').show();
    });
});

// 首页：火箭家族卡片网格
const renderIndex = data => {
  const $list = $('#rocket-list');
  if ($list.length === 0) return;

  if (data.rockets.length === 0) {
    $list.html('<p class="text-muted">暂无火箭数据</p>');
    return;
  }

  const html = data.rockets.map(r => `
    <div class="col-md-6 col-lg-3">
      <a href="detail.html?id=${r.id}" class="text-decoration-none text-reset">
        <div class="card h-100">
          <div class="rocket-card-color" style="background: ${r.color};"></div>
          <div class="card-body">
            <h2 class="h6 mb-1">${r.name}</h2>
            <p class="text-muted small mb-0">${r.country} · 首飞 ${r.firstLaunch}</p>
          </div>
        </div>
      </a>
    </div>
  `).join('');
  $list.html(html);
};

// 详情：参数 + 对比图
const renderDetail = data => {
  if ($('#param-chart').length === 0) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || data.rockets[0].id;
  const rocket = data.rockets.find(r => r.id === id) || data.rockets[0];

  $('#rocket-name').text(rocket.name + ' · 详情');
  $('#rocket-info').html(`
    <p><strong>${rocket.country}</strong> · 首飞 ${rocket.firstLaunch} · ${rocket.description}</p>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between">高度<span>${rocket.height} m</span></li>
      <li class="list-group-item d-flex justify-content-between">直径<span>${rocket.diameter} m</span></li>
      <li class="list-group-item d-flex justify-content-between">近地轨道运载<span>${rocket.massToLEO} t</span></li>
    </ul>
  `);

  const names = data.rockets.map(r => r.name);
  const heights = data.rockets.map(r => ({
    value: r.height,
    itemStyle: { color: r.id === rocket.id ? r.color : '#cccccc' }
  }));
  const leos = data.rockets.map(r => ({
    value: r.massToLEO,
    itemStyle: { color: r.id === rocket.id ? r.color : '#cccccc' }
  }));

  echarts.init($('#param-chart')[0]).setOption({
    title: { text: '高亮为当前火箭', left: 'center' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['高度（米）', '近地轨道运载（吨）'], top: 30 },
    xAxis: { type: 'category', data: names },
    yAxis: { type: 'value' },
    series: [
      { name: '高度（米）', type: 'bar', data: heights },
      { name: '近地轨道运载（吨）', type: 'bar', data: leos }
    ]
  });
};

// 时间线
const renderTimeline = data => {
  const $list = $('#timeline-list');
  if ($list.length === 0) return;

  if (data.timeline.length === 0) {
    $list.html('<li class="list-group-item text-muted">暂无时间线数据</li>');
    return;
  }

  const html = data.timeline.map(t => `
    <li class="list-group-item d-flex">
      <span class="timeline-year me-3">${t.year}</span>
      <span>${t.event}</span>
    </li>
  `).join('');
  $list.html(html);
};
