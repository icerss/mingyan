<form action="https://xhemj-0gjckebwf7276129-1256004056.ap-shanghai.app.tcloudbase.com/mingyan">
姓名</br>
<input class="mdui-textfield-input" type="text" required="">
邮箱</br>
<input class="mdui-textfield-input" type="email" required="">
内容</br>
<textarea class="mdui-textfield-input" rows="4" placeholder="Message"></textarea>
</br>
<button id="submit">提交</button>
</form> 
<script src="https://imgcache.qq.com/qcloud/tcbjs/1.3.5/tcb.js"></script>
<script>
const app = cloudbase.init({
  env: 'xhemj-0gjckebwf7276129'
});
const auth = app.auth();
async function login(){
  await auth.anonymousAuthProvider().signIn();
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState = await auth.getLoginState();
  console.log(loginState.isAnonymousAuth); // true
}
login();
    </script>