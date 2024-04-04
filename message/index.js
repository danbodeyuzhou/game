document.addEventListener("DOMContentLoaded", function() {
  var closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", function() {
    // 重定向到about:blank，这看起来像是关闭了页面
    window.location.href = "about:blank";
  });
});
