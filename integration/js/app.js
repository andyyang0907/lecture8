// 当前页导航项高亮（low cost high effect，见指南第三部分第五点）
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
