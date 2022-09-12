<html lang="ja">  
  <head>
  <?php get_header();?>
  </head>


  <body>

  <!-- ヘッダー -->
  <?php get_template_part('includes/header');?>

    <!--メイン部分-->

    <!-- メインビジュアル -->
    <main>
      <div class="bg-wrapper">
        <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/mainvisual.jpg" alt="">
      </div>

      <section>
        <!-- news -->
        <div class="news-wrapper">
          <div class="container">
            <div class="title">
              <h2>NEWS</h2>
              <P>ニュース</P>
              <span></span>
            </div>

            <ul class="list">
              <li>
                <div class="date-area">
                  <p>2021.01.01</p>
                  <span>NEWS</span>
                </div>
                <p>タイトルタイトルタイトル</p>
              </li>

              <li>
                <div class="date-area">
                  <p>2021.01.01</p>
                  <span>PRESS</span>
                </div>
                <p>タイトルタイトルタイトル</p>
              </li>

              <li>
                <div class="date-area">
                  <p>2021.01.01</p>
                  <span>NEWS</span>
                </div>
                <p>タイトルタイトルタイトル</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- about -->
      <div class="about-wrapper">
        <div class="about-img">
          <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/about.jpg" alt="">
        </div>
        <div class="container">
          <div class="title">
            <h2>ABOUT</h2>
            <p>私たちについて</p>
            <span></span>
          </div>
          <div class="text">
            <p>テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト<br>
            テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト<br>
            テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>

      <!-- BUSINESS -->
      <div class="business-wrapper">
        <div class="container">
          <div class="title">
            <h2>BUSINESS</h2>
            <P>事業内容</P>
            <span></span>
          </div>
          <div class="business">
            <div class="left">
              <div class="work">
                <div class="business-name">
                  <span></span>
                  <p>Web制作・マーケティング</p>
                </div>
                <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/business1.jpg" alt="">
              </div>
              <div class="work">
                <div class="business-name">
                  <span></span>
                  <p>プロモーション企画・制作</p>
                </div>
                <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/business2.jpg" alt="">
              </div>
            </div>
            <div class="right">
              <div class="work">
                <div class="business-name">
                  <span></span>
                  <p>インターネットメディア事業</p>
                </div>
                <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/business3.jpg" alt="">
              </div>
              <div class="work">
                <div class="business-name">
                  <span></span>
                  <p>ソーシャル企画・運営</p>
                </div>
                <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/business4.jpg" alt="">
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <!-- company -->
      <div class="company-wrapper">
        <div class="container">
          <div class="info-box">
            <div class="info-container">
              <div class="title">
                <h2>COMPANY</h2>
                <p>会社情報</p>
                <span></span>
              </div>
              <div class="company-info">
                <dl>会社名</dl>
                <dt>ウェブエンターテイメントデザイン株式会社</dt>
                <dl>所在地</dl>
                <dt>東京都渋谷区桜丘町99-9 West Building 3F</dt>
                <dl>代表</dl>
                <dt>ＸＸＸＸＸＸ</dt>
                <dl>設立</dl>
                <dt>2021年1月1日</dt>
                <dl>資本金</dl>
                <dt>3,000,000円</dt>
                <dl>事業内容</dl>
                <dt>Web制作・マーケティング</dt>
                <dt class="add">インターネットメディア事業</dt>
                <dt class="add">プロモーション企画・制作</dt>
                <dt class="add">ソーシャル企画・運営</dt>
              </div>
            </div>
          </div>
          <div class="company-photo">
            <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/company.jpg" alt="">
          </div>
        </div>
      </div>

      <!-- web -->
      <div class="web-wrapper">
        <div class="container">
          <div class="wed-left">
            <img src="http://mysite.local/wp-content/themes/webentertainmentdesign/img/logo.svg" alt="">
          </div>
          <div class="wed-right">
            <ul>
              <li>Web Entertainment Design Inc.</li>
              <li>West Building 3F</li>
              <li>9-99 Sakuragaokacho Shibuya-ku</li>
              <li>Tokyo, Japan 150-0031</li>
              <li>T/99-9999-9999</li>
            </ul>
        </div>
      </div>

      </section>

    </main>

    <!--フッター-->
    <?php get_template_part('includes/footer');?>

    <?php get_footer();?>
    

  </body>
</html>
