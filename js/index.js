window.onload = function() {
	var fooDer = document.getElementById('fooder');
	var fooDer_li = fooDer.getElementsByTagName('li');
	var oCon = document.getElementsByClassName('content');
	var login_btn = document.getElementById('login_btn');
	var login_back = document.getElementById('login_back');
	var login_con = document.getElementById('login_con');
	var login_in = document.getElementById('login_in');
	var sign = document.getElementById('sign');
	var forget = document.getElementById('forget');
	var sign_con = document.getElementById('sign_con');
	var sign_to = document.getElementById('sign_to');
	var sign_1 = document.getElementById('sign_1');
	var sign_2 = document.getElementById('sign_2');
	var sign_3 = document.getElementById('sign_3');
	var sign_4 = document.getElementById('sign_4');
	var userName = ['aaa'];
	var passWord = [123];
	var tEl = ['18102572661'];
	var re = /^1(3|4|5|7|8)\d{9}$/;
	var login_1 = document.getElementById('login_1');
	var login_2 = document.getElementById('login_2');
	var login = document.getElementById('login');
	var users = document.getElementById('users');
	var users_exit = document.getElementById('users_exit');
	var users_logo = document.getElementById('users_logo');
	var users_name = document.getElementById('users_name');
	for(var i = 0; i < fooDer_li.length; i++) {
		fooDer_li[i].index = i;
		fooDer_li[i].onclick = function() {
			for(var i = 0; i < fooDer_li.length; i++) {
				fooDer_li[i].className = '';
				oCon[i].style.display = 'none';
			}
			this.className = 'active';
			oCon[this.index].style.display = 'block';
		}
	}
	login_btn.onclick = function() {
		this.style.color = '#333';
		login_con.style.right = '0';
	}
	login_back.onclick = function() {
		login_btn.style.color = '#999';
		login_con.style.right = '-100vw';
		login_in.style.background = '#ddd';
		login_in.style.color = '#666';
		sign.style.background = '#ddd';
		sign.style.color = '#666';
		forget.style.color = '#999';
		users_exit.style.background = '#ddd';
		users_exit.style.color = '#666';
	}
	//登录模块
	login_in.onclick = function() {
		this.style.background = '#333';
		this.style.color = '#eee';
		if(login_1.value == '') {
			alert('用户名不能为空！')
		} else if(userName.indexOf(login_1.value) == -1) {
			alert('用户名不存在，请重新输入！');
		} else if(login_2.value != passWord[userName.indexOf(login_1.value)]) {
			alert('密码错误，请重新输入！')
		} else {
			alert('登录成功！');
			users.style.display = 'block';
			login.style.display = 'none';
			login_con.style.display = 'none';
			users_name.innerText = login_1.value;
			users_exit.style.background = '#ddd';
			users_exit.style.color = '#666';
		}
		login_1.value = '';
		login_2.value = '';
	}
	sign.onclick = function() {
		this.style.background = '#333';
		this.style.color = '#eee';
		sign_con.style.right = '0';
	}
	forget.onclick = function() {
		this.style.color = '#333';
	}
	sign_back.onclick = function() {
		sign_con.style.right = '-100vw';
		sign_to.style.background = '#ddd';
		sign_to.style.color = '#666';
		login_in.style.background = '#ddd';
		login_in.style.color = '#666';
		sign.style.background = '#ddd';
		sign.style.color = '#666';
		forget.style.color = '#999';
		sign_1.value = '';
		sign_2.value = '';
		sign_3.value = '';
		sign_4.value = '';
	}
	/*注册模块*/
	sign_to.onclick = function() {
		this.style.background = '#333';
		this.style.color = '#eee';
		if(sign_2.value == sign_3.value && re.test(sign_4.value) && sign_1.value != '' && userName.indexOf(sign_1.value) == -1 && tEl.indexOf(sign_4.value) == -1) {
			userName.push(sign_1.value);
			passWord.push(sign_2.value);
			tEl.push(sign_4.value);
			alert('注册成功！');
		} else if(sign_1.value == '') {
			alert('用户名不能为空！');
		} else if(userName.indexOf(sign_1.value) != -1) {
			alert('该用户名已注册！');
		} else if(sign_2.value == '') {
			alert('密码不能为空！')
		} else if(sign_2.value != sign_3.value) {
			alert('请确认两次输入密码是否一致！');
		} else if(sign_4.value == '') {
			alert('手机号码不能为空！')
		} else if(!re.test(sign_4.value)) {
			alert('请输入正确的手机号码！');
		} else if(tEl.indexOf(sign_4.value) != -1) {
			alert('该手机号码已注册！');
		}
	}
	users_exit.onclick = function() {
		users.style.display = 'none';
		login.style.display = 'block';
		login_con.style.display = 'block';
		this.style.background = '#333';
		this.style.color = '#eee';
		login_in.style.background = '#ddd';
		login_in.style.color = '#666';
	}
	var read_set_btn = document.getElementById('read_set_btn');
	var read_set_con = document.getElementById('read_set_con');
	var read_set_back = document.getElementById('read_set_back');
	read_set_btn.onclick = function() {
		read_set_con.style.right = '0';
	}
	read_set_back.onclick = function() {
		read_set_con.style.right = '-100vw';
	}
	var about_set_btn = document.getElementById('about_set_btn');
	var about_set_con = document.getElementById('about_set_con');
	var about_set_back = document.getElementById('about_set_back');
	about_set_btn.onclick = function() {
		about_set_con.style.right = '0';
	}
	about_set_back.onclick = function() {
		about_set_con.style.right = '-100vw';
	}
	var service_set_btn = document.getElementById('service_set_btn');
	var service_set_con = document.getElementById('service_set_con');
	var service_set_back = document.getElementById('service_set_back');
	service_set_btn.onclick = function() {
		service_set_con.style.right = '0';
	}
	service_set_back.onclick = function() {
		service_set_con.style.right = '-100vw';
	}
	var talk_set_btn = document.getElementById('talk_set_btn');
	var talk_set_con = document.getElementById('talk_set_con');
	var talk_set_back = document.getElementById('talk_set_back');
	talk_set_btn.onclick = function() {
		talk_set_con.style.right = '0';
	}
	talk_set_back.onclick = function() {
		talk_set_con.style.right = '-100vw';
	}
	var seach = document.getElementById('seach');
	var seach_nav = document.getElementById('seach_nav');
	var seach_nav_li = seach_nav.getElementsByTagName('li');
	var seach_con = document.getElementById('seach_con');
	var seach_con_li = seach_con.getElementsByTagName('li');
	var books_con = document.getElementById('books_con');
	var bookrack = document.getElementById('bookrack');
	var bookrack_books = document.getElementById('bookrack_books');
	var arr_books = [];
	for(var i = 0; i < seach_nav_li.length; i++) {
		seach_nav_li[i].index = i;
		seach_nav_li[i].onclick = function() {
			for(var i = 0; i < seach_nav_li.length; i++) {
				seach_nav_li[i].className = '';
				seach_con_li[i].style.display = 'none';
			}
			this.className = 'seach_active';
			seach_con_li[this.index].style.display = 'block';
		}
	}
	if(window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("GET", "js/nav_con.json", true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			var txt = JSON.parse(xhr.responseText);
			for(var i = 0; i < txt.data.length; i++) {
				seach_con_li[0].innerHTML += "<div class='books'><img src=" + txt.data[i].img + " alt=" + txt.data[i].title + " /><h3>" + txt.data[i].title + "</h3><p>" + txt.data[i].con + "</p><span><img src='images/user.png' alt='作者' /><h4>" + txt.data[i].writer + "</h4></span><div><span>" + txt.data[i].label[0].label_01 + "</span><span>" + txt.data[i].label[0].label_02 + "</span></div></div>";
			}
		}
		var books = seach_con.getElementsByClassName('books');
		if(books.length != 0) {
			for(var i = 0; i < books.length; i++) {
				books[i].index = i;
				books[i].onclick = function() {
					var oIndex = this.index;
					books_con.style.right = '0';
					if(window.XMLHttpRequest) {
						var xhr2 = new XMLHttpRequest();
					} else {
						var xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xhr2.open("GET", "js/nav_con.json", true)
					xhr2.send()
					xhr2.onreadystatechange = function() {
						if(xhr2.readyState === 4 && xhr2.status === 200) {
							var txt2 = JSON.parse(xhr2.responseText)
							books_con.innerHTML = "<h3>图书详情</h3><button id='books_con_back'>&lt;</button><img src=" + txt2.data[oIndex].img + "><br /><h4>" + txt2.data[oIndex].title + "</h4><h6 class='books_add'>（点击添加至书架）</h6><br /><span>作者：" + txt2.data[oIndex].writer + "</span><div><h5>简介：</h5><p>" + txt2.data[oIndex].con + "</p></div>";
							var books_add = document.getElementsByClassName('books_add')[0];
							var books_con_back = document.getElementById('books_con_back');
							books_con_back.onclick = function() {
								books_con.style.right = '-100vw';
							}
							books_add.onclick = function() {
								if(arr_books.indexOf(oIndex) != -1) {
									alert('此书已存在书架中！')
								} else {
									arr_books.push(oIndex);
									bookrack.innerHTML += "<li><img src=" + txt2.data[oIndex].img + "><h3>" + txt2.data[oIndex].title + "</h3></li>"
									alert('添加成功！');
									var bookrack_li = bookrack.getElementsByTagName('li');
									for(var i = 0; i < bookrack_li.length; i++) {
										bookrack_li[i].index = arr_books[i];
										bookrack_li[i].onclick = function() {
											var oIndex2=this.index;
											bookrack_books.style.right = '0';
											if(window.XMLHttpRequest) {
												var xhr3 = new XMLHttpRequest();
											} else {
												var xhr3 = new ActiveXObject("Microsoft.XMLHTTP");
											}
											xhr3.open("GET", "js/bookrack_books.json", true)
											xhr3.send()
											xhr3.onreadystatechange = function() {
												if(xhr3.readyState === 4 && xhr3.status === 200) {
													var txt3 = JSON.parse(xhr3.responseText);
													bookrack_books.innerHTML = "<h3>" + txt3.book[oIndex2].title + "</h3><button id='bookrack_books_back'>&lt;</button><p>" + txt3.book[oIndex2].con + "</p>"
													var bookrack_books_back = document.getElementById('bookrack_books_back');
													bookrack_books_back.onclick = function() {
														bookrack_books.style.right = '-100vw';
													}
												}

											}
										}
									}
								}
							}

						}

					}
				}
			}
		}
	}
	
	var loding=document.getElementById('loding');
	var time=null;
	time=setTimeout(function(){
		loding.style.display='none';
	},2000)
}