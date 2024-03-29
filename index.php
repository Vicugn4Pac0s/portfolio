<?php
$Root = $_SERVER['DOCUMENT_ROOT'];
$Timestamp = time();

// 初めにココを設定
$Page = 'top';

?>
<!DOCTYPE html>
<html lang="ja">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Yoshiki's portfolio site</title>
  <meta name="description"
    content="YOSHIKIのポートフォリオサイト。独学でWebサイト制作を学び、Web制作会社に入社、数々の大手企業のWebサイト制作に携わってきました。煩わしいこと・めんどくさいことが大嫌いすぎて、快適なPC環境を求めて日々模索中。">

  <?php
  require_once($Root . "/assets/parts/ogp.php");
  echo ogpSouceCode("");
  ?>
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="/android-chrome-256x256.png">
  <link rel="stylesheet" href="/assets/fonts/font_awesome/font-awesome.min.css">
  <link rel="stylesheet"
    href="/assets/css/style.css?<?php echo $Timestamp; ?>">

  <script src="/assets/js/jquery.min.js"></script><!-- 最新版があればダウンロード ※~IE8対応の場合は、jQuery1.xの最新版 -->
  <script src="/assets/js/jquery-anchorScroll.js"></script>
  <script src="/assets/js/common.js?<?php echo $Timestamp; ?>"></script>
  <script src="/assets/js/particles.min.js"></script>
  <script src="/assets/js/particles_init.js"></script>
  <script src="/assets/js/top.js?<?php echo $Timestamp; ?>"></script>

  <!--[if lt IE 9]>
	<script src="/assets/js/html5shiv.js"></script>
  <![endif]-->

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SLLKWPELBY"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-SLLKWPELBY');
  </script>

</head>

<body>
  <div class="wrap wrap-<?php echo $Page; ?>">
    <?php require_once($Root . "/assets/parts/header.php"); ?>

    <!-- Main -->
    <section class="main main-<?php echo $Page; ?>">

      <!-- MainVisual -->
      <div id="mv" class="mv js-mv">
        <div class="mv_inner l-inner">
          <div class="mv_body">
            <h2 class="mv_ttl">
              <img src="./images/mv_ttl.png" alt="Thanks for visiting!">
            </h2>
            <p class="mv_txt">Yoshiki's portfolio site</p>
          </div>
          <section class="mv_topics topicsCont">
            <div class="topicsCont_inner">
              <h3 class="topicsCont_ttl headingA headingA-s">TOPICS</h3>
              <div class="topicsCont_body">
                <p class="topicsCont_topics">2020.11.03　Webサイトを公開しました。</p>
              </div>
            </div>
          </section>
        </div>
        <div class="mv_bg"></div>
      </div>
      <!-- MainVisual END -->

      <!-- SectionAbout -->
      <section id="about" class="topSec topSec-about">
        <div id="aboutAbout">
          <div class="topSec_inner l-inner">
            <div class="aboutCont topSec_about">
              <div class="aboutCont_inner">
                <h3 class="aboutCont_ttl headingA">ABOUT</h3>
                <p class="aboutCont_txt">
                  はじめまして。YOSHIKIと申します。<br>独学でWebサイト制作を学び、Web制作会社に入社、数々の大手企業のWebサイト制作に携わってきました。主にフロントエンド周りを得意としております。（CSS設計・インタラクティブサイトの制作・Wordpress・Webアプリケーション等）<br>煩わしいこと・めんどくさいことが大嫌いすぎて、快適なPC環境を求めて日々模索中。<br><br>【受賞歴】<br>
                  <a href="https://ps.nikkei.co.jp/nbrand/awards/2017/yanmar.html"
                    target="_blank">2017年　第８回日経電子版広告賞　コンテンツ部門　優秀賞</a>
                </p>
              </div>
            </div>
            <div class="topSec_img">
              <img src="./images/about_img.png" alt="ABOUTイメージ">
            </div>
          </div>
        </div>
        <section id="skills" class="topSec_skills skills">
          <div class="skills_inner l-inner">
            <h4 class="skills_ttl">SKILLS</h4>
            <ul class="skills_list l-grid l-gutter-s-tab">
              <li class="l-grid_item l-grid_item-3 l-grid_item-6-sp">
                <img src="./images/html.png" alt="HTML&CSS ★×5">
              </li>
              <li class="l-grid_item l-grid_item-3 l-grid_item-6-sp">
                <img src="./images/javascript.png" alt="JavaScript ★×4">
              </li>
              <li class="l-grid_item l-grid_item-3 l-grid_item-6-sp">
                <img src="./images/php.png" alt="PHP ★×3">
              </li>
              <li class="l-grid_item l-grid_item-3 l-grid_item-6-sp">
                <img src="./images/wordpress.png" alt="WORDPRESS ★×3">
              </li>
            </ul>
            <div class="skills_others">
              <img src="./images/bg_skillIcons.png" alt="jQuery Vue.js Laravel Git GitHub Photoshop Illustrator">
            </div>
          </div>
        </section>
      </section>
      <!-- SectionAbout END -->

      <!-- SectionWorks -->
      <section id="works" class="topSec topSec-works">
        <div class="topSec_inner l-inner">
          <h3 id="anchor-works" class="topSec_ttl headingA">WORKS</h3>
          <div class="topSec_body">
            <ul class="topSec_list worksList l-grid">
              <li class="l-grid_item l-grid_item-6 l-grid_item-12-sp">
                <a href="/dev/html-template/demo/" target="_blank">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works03.png" alt="HTML TEMPLATE">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">HTML TEMPLATE</h4>
                        <p class="worksCont_txt">
                          HTMLのオリジナルテンプレートセットです。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-6 l-grid_item-12-sp">
                <a href="/dev/css-style-guide/" target="_blank">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works04.png" alt="CSS STYLE GUIDE">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">CSS STYLE GUIDE</h4>
                        <p class="worksCont_txt">
                          HTML TEMPLATEのCSSスタイルガイドです。<br>スタイルガイドジェネレーター「Fractal」で作成しました。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-6 l-grid_item-12-sp">
                <a href="/dev/jquery-anchor-scroll/" target="_blank">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works02.png" alt="jQuery Anchor Scroll">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">jQueryAnchorScroll</h4>
                        <p class="worksCont_txt">
                          「jQueryAnchorScroll」は、ページ内スムーススクロールのjQueryプラグインです。<br>カスタマイズ性があり、セクション・画面サイズによってスクロール位置を柔軟に変更することが可能です。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-6 l-grid_item-12-sp">
                <a href="https://yoshikieee-vuetube.herokuapp.com/" target="_blank">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works.png" alt="VueTube">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">VueTube</h4>
                        <p class="worksCont_txt">
                          自分専用Youtubeサイト。Vue CLIとFirebaseで作成しました。<br>イイネ機能とコメント機能があります。ここなら誹謗中傷コメントも自由です。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-6 l-grid_item-12-sp">
                <a href="/dev/google-map-modal" target="_blank">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works05.png" alt="Google Map Modal">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">Google Map Modal</h4>
                        <p class="worksCont_txt">
                          「Google Map Modal」はモーダルウインドウでGoogleMapを表示させるプログラムです。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-6 l-grid_item-12-sp">
                <a href="/dev/easy-parallax/" target="_blank">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works06.png" alt="Easy Parallax">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">Easy Parallax</h4>
                        <p class="worksCont_txt">
                          「Easy Parallax」は、簡単にパララックスが実装できるjQueryプラグインです。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- SectionWorks END -->

      <!-- SectionBlog -->
      <section id="blog" class="topSec topSec-blog">
        <div class="topSec_inner l-inner">
          <div class="topSec_header">
            <h3 id="anchor-blog" class="topSec_ttl headingA">NOTE</h3>
          </div>
          <div class="topSec_body">
            <ul class="topSec_list l-grid l-gutter-m">
              <?php

                function convertDate($date, $delimiter = '.')
                {
                    $result = explode(' ', $date);
                    $result = explode('/', $result[0]);
                    $result = $result[0] . $delimiter . $result[1] . $delimiter . $result[2];
                    return $result;
                }

                $json = file_get_contents('https://note.com/api/v2/creators/yoshikieee/contents?kind=note&page=1');
                $json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
                $arr = json_decode($json, true);
                $data = $arr['data']['contents'];
                
                foreach ($data as $key => $value) {
                    ?>
              <li class="l-grid_item l-grid_item-3 l-grid_item-4-tab l-grid_item-12-sp">
                <a href="https://note.com/yoshikieee/n/<?php echo $value['key']; ?>"
                  target="_blank">
                  <article class="card">
                    <div class="card_inner">
                      <div class="card_img">
                        <img
                          src="<?php echo $value['eyecatch']; ?>"
                          alt="">
                      </div>
                      <div class="card_body">
                        <p class="card_date"><i class="fa fa-clock-o" aria-hidden="true"></i> <time
                            datetime="<?php echo convertDate($value['publishAt'], '-'); ?>"><?php echo convertDate($value['publishAt'], '.'); ?></time>
                        </p>
                        <h4 class="card_ttl"><?php echo $value['name']; ?>
                        </h4>
                        <!-- <p class="card_txt">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p> -->
                      </div>
                    </div>
                  </article>
                </a>
              </li>

              <?php
                }
              ?>
            </ul>
          </div>
        </div>
      </section>
      <!-- SectionBlog END -->

      <!-- SectionFooter -->
      <div id="footer" class="topSec topSec-footer">
        <div class="topSec_inner l-inner">
          <div class="l-grid l-gutter-s">
            <div class="l-grid_item l-grid_item-6 l-grid_item-12-sp u-mb40-sp">
              <section class="snsCont">
                <div class="snsCont_inner">
                  <h3 class="snsCont_ttl headingA">SNS</h3>
                  <div class="snsCont_body">
                    <div class="snsCont_note">
                      <iframe class="note-embed" src="https://note.com/embed/notes/nb92f110ed106"
                        style="border: 0; display: block; max-width: 100%; height: 471px; width: 494px; padding: 0px; margin: 0 0px; position: static; visibility: visible;"></iframe>
                      <script async src="https://note.com/scripts/embed.js" charset="utf-8"></script>
                    </div>
                    <ul class="snsCont_btns l-grid l-gutter-s">
                      <li class="l-grid_item l-grid_item-6">
                        <a href="https://twitter.com/___yoshikieee" target="_blank">
                          <img src="/assets/images/btn-twitter.png" alt="">
                        </a>
                      </li>
                      <li class="l-grid_item l-grid_item-6">
                        <a href="https://github.com/Vicugn4Pac0s" target="_blank">
                          <img src="/assets/images/btn-github.png" alt="">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div class="l-grid_item l-grid_item-6 l-grid_item-12-sp">
              <section class="contactCont">
                <div class="contactCont_inner">
                  <h3 class="contactCont_ttl headingA">CONTACT</h3>
                  <div class="snsCont_body">
                    <form id="contact-form" action="/">
                      <ul class="formList">
                        <li>
                          <input type="text" name="name" class="InputA" placeholder="Name">
                        </li>
                        <li>
                          <input type="text" name="email" class="InputA" placeholder="Email">
                        </li>
                        <li>
                          <input type="text" name="title" class="InputA" placeholder="Title">
                        </li>
                        <li>
                          <textarea name="message" class="InputA InputA-ta" placeholder="Message"></textarea>
                        </li>
                        <li>
                          <button type="submit" class="submitBtn">Submit</button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <!-- SectionBlog END -->

    </section>
    <!-- Main End -->

    <?php require_once($Root . "/assets/parts/footer.php"); ?>

    <div id="js-particles" class="particles"></div>

    <!-- フォーム準備中エラー 削除予定 -->
    <script>
      $(function() {
        $('#contact-form').on('submit', function(e) {
          e.preventDefault()
          alert('ほんますみません! メールフォームはまだ準備中です...');
        });
      });
    </script>

  </div>
</body>

</html>