// ローディング判定
jQuery(function ($) {
	jQuery(window).on("load", function() {
		jQuery("body").attr("data-loading", "true");
	});
	
	jQuery(function() {
		// スクロール判定
		jQuery(window).on("scroll", function() {
			if (100 < jQuery(this).scrollTop()) {
				jQuery("body").attr("data-scroll", "true");
			} else {
				jQuery("body").attr("data-scroll", "false");
			}
		});
	
		/* ドロワー */
		jQuery(".js-drawer").on("click", function(e) {
			e.preventDefault();
			let targetClass = jQuery(this).attr("data-target");
			jQuery("." + targetClass).toggleClass("is-checked");
			return false;
		});
	
		/* スムーススクロール */
		jQuery('a[href^="#"]').click(function() {
			let header = jQuery(".js-header").height();
			let speed = 300;
			let id = jQuery(this).attr("href");
			let target = jQuery("#" == id ? "html" : id);
			let position = jQuery(target).offset().top - header;
			if ("fixed" !== jQuery("#header").css("position")) {
				position = jQuery(target).offset().top;
			}
			if (0 > position) {
				position = 0;
			}
			jQuery("html, body").animate(
				{
					scrollTop: position
				},
				speed
			);
			return false;
		});
	
		$(".openbtn").click(function () {//ボタンがクリックされたら
			$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
				$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
		});
		
		$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
				$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
				$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
		});

		$('.slider').slick({
			fade:true,//切り替えをフェードで行う。初期値はfalse。
			autoplay: true,//自動的に動き出すか。初期値はfalse。
			autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
			speed:1000,//スライドの動きのスピード。初期値は300。
			infinite: true,//スライドをループさせるかどうか。初期値はtrue。
			slidesToShow: 1,//スライドを画面に3枚見せる
			slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
			arrows: false,//左右の矢印
			dots: false,
	});
	
	//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
	$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
			$('.slider').slick('slickPlay');
	});
	
		
	});
	});
	