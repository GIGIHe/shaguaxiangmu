export default function tab(target) {
  // target.forEach((item, index) => {
  //   item.onclick = function() {
  //     item.classList.add("active");
  //   };
  // });此方法不行，一次循环无法使添加和删除类名都实现

  for(let i = 0; i < target.length; i++){
    target[i].onclick = function() {
      for(let j = 0;j<target.length;j++){
        target[j].classList.remove("active")//给所有的去掉样式
      }
      this.classList.add("active");//点击时添加样式
    }
  }
}
