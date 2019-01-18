export default function back() {
  document.addEventListener("plusready", function() {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener("backbutton", function() {
      webview.canBack(function(e) {
        if (e.canBack) {
          webview.back();
        } else {
          var first = null;
          plus.key.addEventListener(
            "backbutton",
            function() {
              //首次按键，提示‘再按一次退出应用’
              if (!first) {
                first = new Date().getTime();
                // this.$toast.success("再按一次退出应用");
                // console.log("再按一次退出应用");
                setTimeout(function() {
                  first = null;
                }, 1000);
              } else {
                if (new Date().getTime() - first < 1500) {
                  plus.runtime.quit();
                }
              }
            },
            false
          );
        }
      });
    });
  });
}
